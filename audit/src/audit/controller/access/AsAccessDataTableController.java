package audit.controller.access;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.common.JsonResult;
import audit.common.ServiceResult;
import audit.controller.quality.UserTaskController;
import audit.model.assess.AsAccessDataRoom;
import audit.model.assess.AsAccessDataTable;
import audit.model.assess.tack.AsAccessDataTableTack;
import audit.service.access.AsAccessDataInfoServiceI;
import audit.service.access.AsAccessDataRoomServiceI;
import audit.service.access.AsAccessDataTableServiceI;
import audit.util.CookieUtil;
import audit.util.FileUtil;

@Controller
@RequestMapping("asAccessDataTableController")
public class AsAccessDataTableController {
	private final static Logger log = Logger.getLogger(UserTaskController.class); 
	@Autowired
	private AsAccessDataTableServiceI asAccessDataTableService;
	
	@Autowired
	private AsAccessDataRoomServiceI asAccessDataRoomService;
	
	@Autowired
	private AsAccessDataInfoServiceI asAccessDataInfoService;
	
	@Autowired
	private AsAccessDataRoomServiceI accessDataRoomService;
	/**
	 * 初始化 专业评估~我的材料库页面
	 * @return
	 */
	@RequestMapping("initMaterialLibraryZY")
	public String initMaterialLibraryZY(HttpServletRequest request,HttpServletResponse response){
		// 初始化我的材料库的时候判断用户的文件夹是否存在
		File adminDir = new File(System.getProperty("accessFileAdmin"));
		File userDir = new File(System.getProperty("accessFileUser"));
		if (!adminDir.exists()){
			adminDir.mkdirs();
		}
		if (!userDir.exists()){
			userDir.mkdirs();
		}
		
		// 获取初始化数据
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		int assessUserid = Integer.parseInt(userId);
		int serviceRsult = asAccessDataTableService.searchRoomByUserId(assessUserid);
		if (serviceRsult==0) {
			AsAccessDataRoom room=new AsAccessDataRoom();
			room.setRoomType(new Byte("0"));
			room.setUserId(assessUserid);
			accessDataRoomService.insertSelective(room);
		}
		Integer roomid;
		List<AsAccessDataRoom> list = asAccessDataRoomService.searchRoomByUserId(assessUserid);
		roomid=list.get(0).getId();
		int isNul=asAccessDataTableService.searchRoomByRoomId(roomid);
		if (list.size()>0 && isNul==0) {
			//创建个人材料库
			AsAccessDataTable table=new AsAccessDataTable();
			table.setRoomId(roomid);
			table.setName("用户id："+assessUserid+"的材料库");
			table.setParentId(0);
			table.setFilePath(System.getProperty("accessFileUser"));
			asAccessDataTableService.insertSelective(table);
		}
		int tableid=0;
		List<AsAccessDataTable> ServiceResult =asAccessDataTableService.searchRoomTable(roomid);
		tableid=ServiceResult.get(0).getId();
		//初始化 查看根文件夹
		request.setAttribute("roomTableid", tableid);
		// 初始化的时候将用户存放文件的路径传到页面上
		request.setAttribute("userFilePath", System.getProperty("accessFileUser"));
		return "/page/majorEvaluation/materialLibraryZY";
	}
	
	/**
	 * 初始化文件夹paramid=1
	 * @param request
	 * @author LLP
	 * @return
	 */
	@RequestMapping("searchAssessDataTable")
	@ResponseBody
	public String searchAssessDataTable(HttpServletRequest request){
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		int assessUserid = Integer.parseInt(userId);
		ServiceResult<List<AsAccessDataTableTack>> serviceResult = asAccessDataTableService.searchAssessDataTable(assessUserid);
		if (serviceResult.isOk()) {
			jsonResult.setData(serviceResult.getData());
			JSONObject json=JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setOk(false);
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json=JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 文件夹下的文件夹
	 * @param request
	 * @param dataTableId
	 * @return
	 */
	@RequestMapping("searchDataTableTable")
	@ResponseBody
	public String searchDataTableTable(HttpServletRequest request,@RequestParam("dataTableId")int dataTableId){
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		//userid
		int assessUserid = Integer.parseInt(userId);
		ServiceResult<List<AsAccessDataTableTack>> serviceResult = asAccessDataTableService.searchDataTableTable(dataTableId, assessUserid);
		if (serviceResult.isOk()) {
			jsonResult.setData(serviceResult.getData());
			JSONObject json=JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setOk(false);
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json=JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 新建文件夹
	 * @param record
	 * @param parentId 该文件夹的父级文件夹id
	 * @author LLP
	 * @return
	 */
	@RequestMapping("insertSelective")
	@ResponseBody
	public String insertSelective(HttpServletRequest request,AsAccessDataTable record){
		
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		int assessUserid = Integer.parseInt(userId);
		//根据userid获取room
		List<AsAccessDataRoom> list= accessDataRoomService.searchRoomByUserId(assessUserid);
		int roomId = 0;
		for (int i = 0; i < list.size(); i++) {
			roomId=list.get(i).getId();
		}
		int parentId=Integer.parseInt(request.getParameter("parentId"));
		String tableName=request.getParameter("tableName");
		// 获取用户文件存放路径
		String userFilePath = request.getParameter("userFilePath");
		
		int count=asAccessDataTableService.searchDataTableNameAndParentId(parentId, tableName);
		File room=new File(userFilePath);
		if (!room .exists()  || room .exists() && !room .isDirectory()) {
			room .mkdir();
		}else{
			
		}
		File file =new File(userFilePath + "//" +tableName);
		if  (!file .exists()&& !file .isDirectory())      
		{       
		    System.out.println("//不存在");  
		    file .mkdir();
		} else   
		{  
		    System.out.println("//目录存在");  
		}
		
		if (0!=count) {
			return "0";
		}
		record.setRoomId(roomId);
		record.setName(tableName);
		record.setParentId(parentId);
		record.setFilePath(userFilePath);
		int i = asAccessDataTableService.insertSelective(record);
		return JSONArray.fromObject(i).toString();
	}
	
	/**
	 * 删除 文件夹 和文件夹下的文件夹以及文件
	 * @param tableNames
	 * @param infoNames
	 * @return
	 */
	@RequestMapping("deleteDataTable")
	@ResponseBody
	public String deleteDataTable(HttpServletRequest request,@RequestParam("tableids")String tableids,
			@RequestParam("userFilePath")String userFilePath,
			@RequestParam("dataName")String dataName){
		JsonResult jsonResult = new JsonResult();
		String[] dataTableId=tableids.split(",");
		String[] name=dataName.split(",");
		ServiceResult<Integer> parentTable=null;
		//把jsp传过来的文件夹id给加到list里面去。
		FileUtil fileUtil=new FileUtil();
		
		for (int i = 0; i < dataTableId.length; i++) {
			Integer id=Integer.parseInt(dataTableId[i]);
			
			parentTable = asAccessDataTableService.deleteByPrimaryKey(id);
			//删除文件夹下的文件
			asAccessDataInfoService.deleteByTableId(id);
			fileUtil.deleteDirectory(userFilePath+"/"+name[i]);
		}
		if (parentTable.isOk()) {
			jsonResult.setData(parentTable.getData());
			JSONObject json=JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setComment(parentTable.getComment());
		JSONObject json=JSONObject.fromBean(jsonResult);
		
		return json.toString();
	}
	/**
	 * zipFileName
	 * @param zipFileName 压缩后的zip文件     
	 * @param inputFileName 你要压缩的文件夹
	 * @return
	 */
	@RequestMapping("downLoadZip")
	public void DownLoadZip(HttpServletResponse response,@RequestParam("filepath")String filepath,@RequestParam("zip")String zip){
		 String filePath=System.getProperty("accessFileAdmin");
         String zipFileName = filePath+"/"+zip+".zip";  //压缩后的zip文件     
         String path = filepath.substring(0,filepath.indexOf(","));
         
		 FileUtil book = new FileUtil();     
	        try {
	            book.zip(path, zipFileName);    
	        } catch (Exception ex) {     
	            ex.printStackTrace();     
	        }
	        
        try {
			// path是指欲下载的文件的路径。
			File file = new File(zipFileName);
			// 取得文件名。
			String filename = file.getName();
			// 取得文件的后缀名。
//				String ext = filename.substring(filename.lastIndexOf(".") + 1).toUpperCase();
			// 以流的形式下载文件。
			InputStream fis = new BufferedInputStream(new FileInputStream(zipFileName));
			byte[] buffer = new byte[fis.available()];
			fis.read(buffer);
			fis.close();
			// 清空response
			response.reset();
			// 设置response的Header
			response.addHeader("Content-Disposition", "attachment;filename="+ new String(filename.getBytes()));
			response.addHeader("Content-Length", "" + file.length());
			OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
			response.setContentType("application/octet-stream");
			toClient.write(buffer);
			toClient.flush();
			toClient.close();
			
			book.deleteFile(zipFileName);
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}
	/**
	 * 返回到上一级
	 * @param tableNames
	 * @param infoNames
	 * @return
	 */
	@RequestMapping("searchTableByParentId")
	@ResponseBody
	public String searchTableByParentId(HttpServletRequest request,@RequestParam("parentId")Integer parentId){
		
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		int assessUserid = Integer.parseInt(userId);
		
		JsonResult jsonResult = new JsonResult();
		ServiceResult<List<AsAccessDataTableTack>> serviceResult= asAccessDataTableService.searchDataTableTable(parentId, assessUserid);
		if (null!=serviceResult) {
			jsonResult.setData(serviceResult);
			JSONObject json=JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setOk(false);
		JSONObject json=JSONObject.fromBean(jsonResult);
		return json.toString();
	}
}

