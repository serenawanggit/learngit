package audit.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;



import audit.model.DataTemplate;
import audit.model.SupportMaterialLibraryFile;
import audit.model.SupportMaterialLibraryTemplate;
import audit.model.SupportMaterialLibraryTreeNode;
import audit.model.SupportMaterialLibraryUserInfo;
import audit.service.SupportMaterialLibraryService;
import audit.util.CookieUtil;
import audit.util.Office2Swf;



@Controller
@RequestMapping("/supportMaterialLibrary")
public class SupportMaterialLibraryController {
	@Autowired
	SupportMaterialLibraryService supportMaterialLibraryService;
	
	@RequestMapping(value = "/saveTreeNode")//method = RequestMethod.POST
	@ResponseBody
	public int saveTreeNode(HttpServletRequest request){
		SupportMaterialLibraryTreeNode treeNode = new SupportMaterialLibraryTreeNode();
		//level=0&parent=88&name=test1&isenabled=1
		String level = request.getParameter("level");
		String parent = request.getParameter("parent");
		String name = request.getParameter("name");
		String isenabled = request.getParameter("isenabled");
		String remark = request.getParameter("remark");
		if(level != null){
			treeNode.setLevel(Integer.parseInt(level));
		}
		if(parent != null){
			treeNode.setParentId(Integer.parseInt(parent));
		}
		if(name != null){
			treeNode.setTreename(name);
		}
		if(isenabled != null){
			treeNode.setIsenabled(isenabled);
		}
		if(remark != null){
			treeNode.setRemarks(remark);
		}
		Integer saveTreeNode = supportMaterialLibraryService.saveTreeNode(treeNode);
		return saveTreeNode;
	}
	
	@RequestMapping(value = "/selectAllSupportFile")
	public String selectAllSupportFile(HttpServletResponse response){
		List<SupportMaterialLibraryTreeNode> supportFiles = supportMaterialLibraryService.selectAllSupportFile();
		List<String> lstTree = new ArrayList<String>();
		if(supportFiles != null && supportFiles.size() > 0){
			for (SupportMaterialLibraryTreeNode ae : supportFiles) {
	
				// 拼成json串
				String str = "";
				str += "{id:" + ae.getId();
				str += ",level:" + ae.getLevel();
				str += ",pId:" + ae.getParentId();
				str += ",open:true";
				str += ",name:\"" + ae.getTreename();
				str += "\",icon:\"";
				if (ae.getLevel() == 2) {
					str += "/TQCC/css/zTreeStyle/img/diy/green.png";
				}
				if (ae.getLevel() == 3) {
					str += "/TQCC/css/zTreeStyle/img/diy/p1.png";
				}
				str += "\"}";
				//str= new String(str.getBytes(), "utf-8");
				lstTree.add(str);
				str = null;
			}
		}
		try {
			response.setCharacterEncoding("UTF-8");
			response.getWriter()
					.write(JSONArray.fromObject(lstTree).toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/updateTreeNode")
	@ResponseBody
	public int updateTreeNode(HttpServletRequest request){
		SupportMaterialLibraryTreeNode treeNode = new SupportMaterialLibraryTreeNode();
		//level=0&parent=88&name=test1&isenabled=1
		String id = request.getParameter("id");
		String level = request.getParameter("level");
		String parent = request.getParameter("parentId");
		String name = request.getParameter("name");
		String isenabled = request.getParameter("isenabled");
		String remark = request.getParameter("remark");
		//startTime endTime dutyPersonId dutyPersonName organizationName
		if(id != null){
			treeNode.setId(Integer.parseInt(id));
		}
		if(level != null){
			treeNode.setLevel(Integer.parseInt(level));
		}
		if(parent != null){
			treeNode.setParentId(Integer.parseInt(parent));
		}
		if(name != null){
			treeNode.setTreename(name);
		}
		if(isenabled != null){
			treeNode.setIsenabled(isenabled);
		}
		if(remark != null){
			treeNode.setRemarks(remark);
		}
		Integer saveTreeNode = supportMaterialLibraryService.updateTreeNode(treeNode);
		return saveTreeNode;
	}
	@RequestMapping(value = "/deleteTreeNode")
	@ResponseBody
	public int deleteTreeNode(Integer id,HttpServletResponse response){
		Integer node = null;
		if(id != null ){
			List<Integer> paramList = new ArrayList<Integer>();
			paramList.add(id);
			//查询该节点下是否有责任人
			List<SupportMaterialLibraryUserInfo> list = supportMaterialLibraryService.selectUserByTreeNodeId(paramList);
			// 有责任人 需要先删除责任人
			if(list != null && list.size() > 0){
				node = -1;
			}else{
				// 无责任人 直接删除
				node = supportMaterialLibraryService.deleteTreeNode(id);
			}
		}
		return node;
	}
	@RequestMapping(value = "/deleteTreeNodeTo")
	@ResponseBody
	public int deleteTreeNodeTo(Integer id,HttpServletResponse response){
		Integer node = null;
		if(id != null ){
			List<Integer> paramList = new ArrayList<Integer>();
			paramList.add(id);
			//查询该节点下是否有责任人
			List<SupportMaterialLibraryUserInfo> list = supportMaterialLibraryService.selectUserByTreeNodeIdTo(id);
			// 有责任人 需要先删除责任人
			if(list != null && list.size() > 0){
				node = -1;
			}else{
				// 无责任人 直接删除
				node = supportMaterialLibraryService.deleteTreeNode(id);
			}
		}
		return node;
	}
	@RequestMapping(value = "/deleteUser")
	@ResponseBody
	public int deleteUserById(Integer id){
		Integer node = null;
		if(id != null ){
			node = supportMaterialLibraryService.deleteUserById(id);
		}
		return node;
	}
	@RequestMapping("/selectTreeNodeById")
	@ResponseBody
	public String selectTreeNodeById(String ids,HttpServletResponse response){
		String[] id = ids.split("-");
		String str = "";
		List<String> lstTree = new ArrayList<String>();
		if(id != null){
			for(String temp : id){
				List<SupportMaterialLibraryTreeNode> list = supportMaterialLibraryService.selectTreeNodeById(Integer.parseInt(temp));
				if(list != null && list.size() > 0){
					for (SupportMaterialLibraryTreeNode ae : list) {
						// 拼成json串
						str += "{\"id\":" + ae.getId();
						str += ",\"level\":" + ae.getLevel();
						str += ",\"pId\":" + ae.getParentId();
						str += ",\"open\":true";
						str += ",\"name\":\"" + ae.getTreename()+"\"";
						/*str += ",\"dutyPersonId\":\"" + ae.getDutyPersonId()+"\"";
						str += ",\"dutyPersonName\":\"" + ae.getDutyPersonName()+"\"";
						str += ",\"startTime\":\"" + ae.getStartTime()+"\"";
						str += ",\"endTime\":\"" + ae.getEndTime()+"\"";*/
						str += ",\"createTime\":\"" + ae.getCreateTime();
						str += "\",\"icon\":\"";
						if (ae.getLevel() == 2) {
							str += "/TQCC/css/zTreeStyle/img/diy/green.png";
						}
						if (ae.getLevel() == 3) {
							str += "/TQCC/css/zTreeStyle/img/diy/p1.png";
						}
						str += "\"}";
						lstTree.add(str);
						str = "";
					}
				}
			}
		}
		return JSONArray.fromObject(lstTree).toString();
	}
	
	@RequestMapping("/selectUserByTreeNodeId")
	@ResponseBody
	public String selectUserByTreeNodeId(String ids,HttpServletResponse response){
		List<String> lstTree = new ArrayList<String>();
		String str = "";
		if(ids != null){
			String[] id = ids.split("-");
			for(String temp : id){
				List<SupportMaterialLibraryUserInfo> list = supportMaterialLibraryService.selectUserByTreeNodeIdTo(Integer.parseInt(temp));
				if(list != null && list.size() > 0){
					for (SupportMaterialLibraryUserInfo ae : list) {
						// 拼成json串
						str += "{\"id\":" + ae.getId();
						str += ",\"name\":\"" + ae.getOrganizationName()+"\"";
						str += ",\"dutyPersonId\":\"" + ae.getDutyPersonId()+"\"";
						str += ",\"dutyPersonName\":\"" + ae.getDutyPersonName()+"\"";
						str += ",\"startTime\":\"" + ae.getStartTime().toString().substring(0,10)+"\"";
						str += ",\"endTime\":\"" + ae.getEndTime().toString().substring(0,10)+"\"";
						str += ",\"msg\":\"1";
						str += "\"}";
						//str= new String(str.getBytes(), "utf-8");
						lstTree.add(str);
						str = "";
					}
				}/*else{
					//该节点下没有责任人！
					lstTree.add("{\"msg\":\"0\"}");
				}*/
			}
		}
		return JSONArray.fromObject(lstTree).toString();
		/*if(ids != null){
			String[] id = ids.split("-");
			List<String> param = Arrays.asList(id);
			List<Integer> param1 = new ArrayList<Integer>();
			for(String temp : param){
				param1.add(Integer.parseInt(temp));
			}
			List<SupportMaterialLibraryUserInfo> list = supportMaterialLibraryService.selectUserByTreeNodeId(param1);
			if(list != null && list.size() > 0){
				for (SupportMaterialLibraryUserInfo ae : list) {
					// 拼成json串
					str += "{\"id\":" + ae.getId();
					str += ",\"name\":\"" + ae.getOrganizationName()+"\"";
					str += ",\"dutyPersonId\":\"" + ae.getDutyPersonId()+"\"";
					str += ",\"dutyPersonName\":\"" + ae.getDutyPersonName()+"\"";
					str += ",\"startTime\":\"" + ae.getStartTime()+"\"";
					str += ",\"endTime\":\"" + ae.getEndTime()+"\"";
					str += ",\"icon\":\"";
					str += "\"}";
					//str= new String(str.getBytes(), "utf-8");
					lstTree.add(str);
					str = "";
				}
			}else{
				//该节点下没有责任人！
				lstTree.add("{\"msg\":\"0\"}");
			}
		}else{
			//树节点ID为空！
			lstTree.add("{\"msg\":\"1\"}");
		}
		return JSONArray.fromObject(lstTree).toString();*/
	}
	
	@RequestMapping("/selectAllFileByUserId")
	@ResponseBody
	public String selectAllFileByUserId(String userId,HttpServletResponse response){
		String str = "";
		List<String> lstTree = new ArrayList<String>();
		// 根据用户ID查询出该用户的所有信息
		SupportMaterialLibraryUserInfo userInfo = supportMaterialLibraryService.selectUserInfoById(Integer.parseInt(userId));
		if(userInfo == null){
			return null;// 没有查询到用户信息
		}
		List<SupportMaterialLibraryFile> list = supportMaterialLibraryService.selectAllFileByUserId(Integer.parseInt(userId));
		if(list != null && list.size() > 0){
			for (SupportMaterialLibraryFile ae : list) {
				// 拼成json串
				str += "{\"id\":" + ae.getId();
				str += ",\"fileName\":\"" + ae.getFileName()+"\"";
				str += ",\"fileType\":\"" + ae.getFileType()+"\"";
				str += ",\"fileUrl\":\"" + ae.getFileUrl()+"\"";
				str += ",\"uploadTime\":\"" + ae.getUploadTime()+"\"";
				str += ",\"fileOnlineName\":\"" + ae.getFileOnlineName()+"\"";
				str += ",\"fileOnlineUrl\":\"" + ae.getFileOnlineUrl()+"\"";
				str += ",\"userName\":\"" + userInfo.getDutyPersonName()+"\"";
				str += ",\"tableSort\":\"" + ae.getTableSort()+"\"";
				str += ",\"userId\":\"" + ae.getUserId();
				str += "\"}";
				lstTree.add(str);
				str = "";
			}
		}/*else{
			lstTree.add("{\"status\":\"10\"}");
		}*/
		try {
			response.setCharacterEncoding("UTF-8");
			response.getWriter()
					.write(JSONArray.fromObject(lstTree).toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/updateFileById")
	@ResponseBody
	public Integer updateFileById(HttpServletRequest request){
		String fileId = request.getParameter("fileId");
		String tableSort = request.getParameter("tableSort");
		SupportMaterialLibraryFile file = new SupportMaterialLibraryFile();
		file.setId(Integer.parseInt(fileId));
		file.setTableSort(Integer.parseInt(tableSort));
		Integer status = supportMaterialLibraryService.updateFileById(file);
		return status;
	}
	@RequestMapping(value = "/updateDataField")
	@ResponseBody
	public Integer updateDataField(HttpServletRequest request){
		String fileId = request.getParameter("dataFieldId");
		String tableSort = request.getParameter("tableSort");
		SupportMaterialLibraryTemplate template = new SupportMaterialLibraryTemplate();
		template.setId(Integer.parseInt(fileId));
		template.setSort(Integer.parseInt(tableSort));
		Integer status = supportMaterialLibraryService.updateDataField(template);
		return status;
	}
	@RequestMapping("/selectAllFileByTreeNodeId")
	@ResponseBody
	public String selectAllFileByTreeNodeId(String ids,HttpServletResponse response){
		List<String> lstTree = new ArrayList<String>();
		String str = "";
		if(ids != null){
			String[] id = ids.split("-");
			for(String temp : id){
				List<SupportMaterialLibraryUserInfo> list = supportMaterialLibraryService.selectUserByTreeNodeIdTo(Integer.parseInt(temp));
				if(list != null && list.size() > 0){
					for (SupportMaterialLibraryUserInfo ae : list) {
						// 拼成json串
						str += "{\"id\":" + ae.getId();
						str += ",\"name\":\"" + ae.getOrganizationName()+"\"";
						str += ",\"dutyPersonId\":\"" + ae.getDutyPersonId()+"\"";
						str += ",\"dutyPersonName\":\"" + ae.getDutyPersonName()+"\"";
						str += ",\"startTime\":\"" + ae.getStartTime().toString().substring(0, 10)+"\"";
						str += ",\"endTime\":\"" + ae.getEndTime().toString().substring(0, 10)+"\"";
						str += ",\"msg\":\"1";
						str += "\"}";
						//str= new String(str.getBytes(), "utf-8");
						lstTree.add(str);
						str = "";
					}
				}else{
					//该节点下没有责任人！
					lstTree.add("{\"msg\":\"0\"}");
				}
			}
		}
		return JSONArray.fromObject(lstTree).toString();
	}
	@RequestMapping(value = "/saveUser",method = RequestMethod.POST)
	@ResponseBody
	public Integer saveUser(HttpServletRequest request){
		SupportMaterialLibraryUserInfo userInfo = new SupportMaterialLibraryUserInfo();
		
		String id = request.getParameter("id");
		String startTime = request.getParameter("startTime");
		String endTime = request.getParameter("endTime");
		String dutyPersonId = request.getParameter("dutyPersonId");
		String dutyPersonName = request.getParameter("dutyPersonName");
		String organizationName = request.getParameter("organizationName");
		if(id != null){
			userInfo.setTreeNdId(Integer.parseInt(id));
		}
		if(startTime != null && startTime != ""){
			Date date = strToDate(startTime);
			userInfo.setStartTime(new Timestamp(date.getTime()));
		}
		if(endTime != null && endTime != ""){
			Date date = strToDate(endTime);
			userInfo.setEndTime(new Timestamp(date.getTime()));
		}
		if(dutyPersonId != null){
			userInfo.setDutyPersonId(Integer.parseInt(dutyPersonId));
		}
		if(dutyPersonName != null){
			userInfo.setDutyPersonName(dutyPersonName);
		}
		if(organizationName != null){
			userInfo.setOrganizationName(organizationName);
		}
		userInfo.setStatus(0);// 新增用户初始状态为未上传状态
		//添加用户不能重复
		boolean flag = true;
		List<SupportMaterialLibraryUserInfo> alreadyUserInfo = supportMaterialLibraryService.selectUserByTreeNodeIdTo(Integer.parseInt(id));
		if(alreadyUserInfo != null && alreadyUserInfo.size() > 0){
			Integer tempdutyPersonId = Integer.parseInt(dutyPersonId);
			for(SupportMaterialLibraryUserInfo tempUserInfo : alreadyUserInfo){
				if(tempdutyPersonId.equals(tempUserInfo.getDutyPersonId())){
					flag = false;
				}
			}
		}
		Integer status = -1;
		if(flag){
			status = supportMaterialLibraryService.saveUserInfo(userInfo);
		}
		return status;
	}
	
	
	// 重构上传文件方法
	@RequestMapping(value = "/uploadFile",method = RequestMethod.POST)
	@ResponseBody
	public String uploadFile(@RequestParam("upFile") CommonsMultipartFile[] files,HttpServletRequest request,@RequestParam Map<String,String> map){ 
		// 文件后缀  以下后缀的文件支持在线预览
		String[] OfficePostFixs = { "doc", "docx", "xls", "xlsx", "ppt" , "pptx", "pdf", "txt" };
		ArrayList<String> office_Formats = new ArrayList<String>();
		Collections.addAll(office_Formats, OfficePostFixs);
		String uploadFilePath = null;
		String treeNodeId = request.getParameter("treeNodeId");
		System.out.println(treeNodeId);
		try {
			for(int i=0;i<files.length;i++){
				if(!files[0].isEmpty()){
					String originalFilename = files[i].getOriginalFilename();
		        	String fileType = originalFilename.substring((originalFilename.lastIndexOf(".")+1));
		        	// 上传原文件名
		        	String fileName = originalFilename.substring(0,originalFilename.lastIndexOf("."));
		        	fileName= fileName.replaceAll(" ", "");
		        	// 上传时间
		        	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		        	String date=simpleDateFormat.format(new Date());
		        	// 读取上传文件存放磁盘路径
		        	String localFilePath = System.getProperty("assessFileUser");
		        	//String localFilePath = null;
		        	// 获取当前上传用户的ID
					String userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
					// 用于在文件下载即上传文件列表展示
					String newFileName = userId +"_"+ files[i].getOriginalFilename();
					// 组合形成上传文件的URL
					uploadFilePath = localFilePath +"//"+ newFileName;
					File file = new File(uploadFilePath);
		          	if(file.exists()){
		          		return "上传文件已经存在！";
		          	}
		          	
		          	
		          	String serverRealPath = request.getSession().getServletContext().getRealPath("/");
		          	long currentTime = System.currentTimeMillis();
		          	String outFilePath = null;
		          	String fileOnlineName = null;
		          	String fileUrl = null;
		          	if (office_Formats.contains(fileType)){
		          		uploadFileIO(files[i],uploadFilePath);
						// 需要对文件进行格式转换
						//String online_url = Office2Swf.office2Swf(uploadFilePath, null);
		          		outFilePath = serverRealPath.replace("\\", "\\\\") + "upload\\\\" + currentTime + ".swf";
						System.out.println("---" + outFilePath);
						String uploadFilePathTO = uploadFilePath.replace("//", "\\\\");
						fileOnlineName = currentTime + ".swf";
						fileUrl = uploadFilePath;
						if ("pdf".equals(fileType)) {
							Office2Swf.pdf2Swf(uploadFilePathTO, outFilePath);
						} else { 	
							Office2Swf.office2Swf(uploadFilePathTO, outFilePath);
							//Office2Swf.office2Swf("E:\\assessFileUser\\343_201703130748138841.xls","E:\\assessFileUser\\swf\\343_201703130748138841.swf");
						}
						// 删除文件格式转换过程中产生的pdf文件
						File filePdf = new File(serverRealPath + "upload\\" + currentTime + ".pdf");
						filePdf.delete();
					}else{
						outFilePath = serverRealPath.replace("\\", "\\\\") + "upload\\" + currentTime + "." + fileType;
						uploadFileIO(files[i],outFilePath);
						fileOnlineName = currentTime +"."+ fileType;
						fileUrl = outFilePath;
					}
		          	SupportMaterialLibraryFile fileObject = new SupportMaterialLibraryFile();
		          	fileObject.setFileName(fileName);
		          	fileObject.setFileType(fileType);
		          	fileObject.setFileUrl(fileUrl);
		          	fileObject.setFileOnlineUrl(outFilePath);
		          	fileObject.setFileOnlineName(fileOnlineName);
		          	fileObject.setTableSort(0);
		          	fileObject.setUserId(Integer.parseInt(userId));
		          	fileObject.setUploadTime(date);
		          	fileObject.setTreeNodeId(Integer.parseInt(treeNodeId));
		          	supportMaterialLibraryService.saveUploadFile(fileObject);
				}
			}
		} catch (Exception e) {
			// 存入数据库过程出错 则删除已上传到文件下的对应文件
        	deleteFile(uploadFilePath);
        	e.printStackTrace(); 
        	return "上传出错"; 
		}
		return "上传成功";
  } 
	// 上传文件IO操作过程
	private void uploadFileIO(CommonsMultipartFile file,String uploadFilePath) {
		FileOutputStream os = null;
		InputStream in = null;
		try {
			os = new FileOutputStream(uploadFilePath);
			in= file.getInputStream(); 
	         int b = 0; 
	         while((b=in.read()) != -1){ 
	           os.write(b); 
	         } 
	         os.flush(); 
		} catch (Exception e) {
			e.printStackTrace();
		} finally{
	        try {
				os.close();
				in.close(); 
			} catch (IOException e) {
				e.printStackTrace();
			} 
	        
		}
	}
	
	@ResponseBody
	@RequestMapping(value = "/downFile")
	 public String downFile(@RequestParam Integer id, HttpServletRequest request,
	      HttpServletResponse response) {
		SupportMaterialLibraryFile file = null;
		if(id != null){
			file = supportMaterialLibraryService.selectFileById(id);
		}else{
			return "获取文件名称失败";
		}
	  return down(file.getFileUrl(), file.getFileName(), file.getFileType(), request, response);
	}
	     
	 public String down(String filePath,String fileName,String type, HttpServletRequest request,
	      HttpServletResponse response) {
			try {
				response.setCharacterEncoding("utf-8");
				response.setContentType("application/octet-stream");
				//response.setContentType("application/force-download");
				/*response.setHeader("Content-Disposition", "attachment;fileName="
						+ fileName);*/
				response.setHeader("Content-Disposition", "attachment;fileName="+new String(fileName.getBytes(),"ISO8859-1")+"."+type);
				InputStream inputStream = new FileInputStream(new File(filePath));

				OutputStream os = response.getOutputStream();
				byte[] b = new byte[2048];
				int length;
				while ((length = inputStream.read(b)) > 0) {
					os.write(b, 0, length);
				}
				// 这里主要关闭。
				os.close();
				inputStream.close();
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
      // 返回值要注意，要不然就出现下面这句错误！
      //java+getOutputStream() has already been called for this response
		return null;
	}
	@RequestMapping("/selectAllFileByUserIdDetail")
	@ResponseBody
	public String selectAllFileByUserIdDetail(String userId,HttpServletResponse response,HttpServletRequest request){
		String str = "";
		String treeNodeId = request.getParameter("treeNodeId");
		List<String> lstTree = new ArrayList<String>();
		// 根据用户ID查询出该用户的所有信息
		SupportMaterialLibraryUserInfo userInfo = supportMaterialLibraryService.selectUserInfoById(Integer.parseInt(userId));
		if(userInfo == null){
			return null;// 没有查询到用户信息
		}
		List<SupportMaterialLibraryFile> list = supportMaterialLibraryService.selectAllFileByUserId(Integer.parseInt(treeNodeId));
		if(list != null && list.size() > 0){
			for (SupportMaterialLibraryFile ae : list) {
				// 拼成json串
				str += "{\"id\":" + ae.getId();
				str += ",\"fileName\":\"" + ae.getFileName()+"\"";
				str += ",\"fileType\":\"" + ae.getFileType()+"\"";
				str += ",\"fileUrl\":\"" + ae.getFileUrl()+"\"";
				str += ",\"uploadTime\":\"" + ae.getUploadTime()+"\"";
				str += ",\"fileOnlineName\":\"" + ae.getFileOnlineName()+"\"";
				str += ",\"fileOnlineUrl\":\"" + ae.getFileOnlineUrl()+"\"";
				str += ",\"userName\":\"" + userInfo.getDutyPersonName()+"\"";
				str += ",\"tableSort\":\"" + ae.getTableSort()+"\"";
				str += ",\"userId\":\"" + ae.getUserId();
				
				str += "\"}";
				lstTree.add(str);
				str = "";
			}
		}else{
			lstTree.add("{\"status\":\"10\"}");
		}
		try {
			response.setCharacterEncoding("UTF-8");
			response.getWriter()
					.write(JSONArray.fromObject(lstTree).toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping("/selectAllFieldByTreeNodeId")
	@ResponseBody
	public String selectAllFieldByTreeNodeId(Integer treeNodeId,HttpServletResponse response){
		List<Integer> list = null;
		List<Map<String, Integer>> listMap = null;
		if(treeNodeId != null){	
			// 数据表模板ID
			//list = supportMaterialLibraryService.selectAllFieldByTreeNodeId(treeNodeId);
			listMap = supportMaterialLibraryService.selectAllFieldByTreeNodeIdTO(treeNodeId);
		}
		String str = "";
		List<String> lstTree = new ArrayList<String>();
		List<DataTemplate> templates = new ArrayList<>();
		/*if(list != null && list.size() >0){
			for(Integer idInteger : list){
				DataTemplate template = supportMaterialLibraryService.selectByPrimaryKey(idInteger);
				templates.add(template);
			}
		}*/
		if(listMap != null && listMap.size() >0){
			for(Map<String,Integer> map : listMap){
				for(String idInteger : map.keySet()){
					System.out.println(map.get(idInteger));
					System.out.println(map.get("SDT_id"));
					if("SDT_id".equals(idInteger)){
						DataTemplate template = supportMaterialLibraryService.selectByPrimaryKey(map.get("SDT_id"));
						System.out.println(map.get("id"));
						template.setId(map.get("id"));
						template.setSort(map.get("sort"));
						templates.add(template);
					}
				}
			}
		}
		
		if(templates != null && templates.size()>0){
			for(DataTemplate template : templates){
				str += "{\"id\":" + template.getId();
				str += ",\"tableName\":\"" + template.getTableName()+"\"";
				/*str += ",\"tableStyle\":\"" + template.getTableStyle()+"\"";*/
				str += ",\"timeType\":\"" + template.getTimeType()+"\"";
				str += ",\"tableSource\":\"" + template.getTableSource()+"\"";
				/*str += ",\"tableStyle\":\"" + template.getTableStyle()+"\"";*/
				str += ",\"tableType\":\"" + template.getTableType()+"\"";
				str += ",\"sort\":\"" + template.getSort()+"\"";
				str += ",\"remark\":\"" + template.getRemark();
				str += "\"}";
				lstTree.add(str);
				str = "";
			}
		}else{
			lstTree.add("{\"status\":\"10\"}");
		}
		try {
			response.setCharacterEncoding("UTF-8");
			response.getWriter()
					.write(JSONArray.fromObject(lstTree).toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping("/selectUserIsStatus")
	@ResponseBody
	public String selectUserIsStatus(HttpServletRequest request,HttpServletResponse response){
		String userId = request.getParameter("userId");
		String treeNodeId = request.getParameter("treeNodeId");
		Map<String, Integer> map = new HashMap<>();
		List<String> result = new ArrayList<>();
		map.put("userId", Integer.parseInt(userId));
		map.put("treeNodeId", Integer.parseInt(treeNodeId));
		List<SupportMaterialLibraryUserInfo> isStatus = supportMaterialLibraryService.selectUserIsStatus(map);
		if(isStatus != null & isStatus.size() > 0){
			result.add("{\"status\":\"1\"}");
		}else{
			result.add("{\"status\":\"0\"}");
		}
		try {
			response.setCharacterEncoding("UTF-8");
			response.getWriter()
					.write(JSONArray.fromObject(result).toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}
	@RequestMapping(value = "/deleteFiles",method = RequestMethod.POST)
	@ResponseBody
	public Integer deleteFiles(@RequestParam(value = "ids[]",required = false) Integer []ids,HttpServletRequest request){
		Integer status = null;
		// 删除前先查询选中的文件是否存在
		List<SupportMaterialLibraryFile> files = supportMaterialLibraryService.selectFilesUseDeletes(ids);
		// 存在则删除
		if(files != null & files.size() > 0 ){
			// 从数据库移除这些文件
			status = supportMaterialLibraryService.deleteFiles(ids);
			// 从文件保存目录中移除这些文件
			for(SupportMaterialLibraryFile file : files){
				deleteFile(file.getFileUrl());
				String realPath = request.getSession().getServletContext().getRealPath("upload");
				deleteFile(realPath + "\\" + file.getFileOnlineName());
			}
			
		}
		return status;
		
	}
	
	@RequestMapping(value = "/deleteDataFields",method = RequestMethod.POST)
	@ResponseBody
	public Integer deleteDataFields(@RequestParam(value = "ids[]",required = false) Integer []ids,HttpServletRequest request){
		Integer status = null;
		// 删除前先查询选中的文件是否存在
		//List<SupportMaterialLibraryFile> files = supportMaterialLibraryService.selectFilesUseDeletes(ids);
		// 存在则删除
		//if(files != null & files.size() > 0 ){
		// 从数据库移除这些文件
		if( ids != null && ids.length > 0){
			status = supportMaterialLibraryService.deleteDataFields(ids);
		}
		//}
		return status;
		
	}
	
	@RequestMapping(value = "/deleteUsers",method = RequestMethod.POST)
	@ResponseBody
	public Integer deleteUsers(@RequestParam(value = "ids[]",required = false) Integer []ids,HttpServletRequest request){
		Integer status = null;
		// 删除前先查询选中的文件是否存在
		//List<SupportMaterialLibraryFile> files = supportMaterialLibraryService.selectFilesUseDeletes(ids);
		// 存在则删除
		//if(files != null & files.size() > 0 ){
		// 从数据库移除这些文件
		if( ids != null && ids.length > 0){
			status = supportMaterialLibraryService.deleteUsers(ids);
		}
		//}
		return status;
		
	}
	@RequestMapping(value = "/saveTemplate",method = RequestMethod.POST)
	@ResponseBody
	public Integer saveTemplate(@RequestParam(value = "ids[]",required = false) Integer []ids,Integer treeNdId,HttpServletRequest request){
		List<SupportMaterialLibraryTemplate> list = new ArrayList<>();
		String userId = null;
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		for(int i=0;i<ids.length;i++){
			SupportMaterialLibraryTemplate template = new SupportMaterialLibraryTemplate();
			template.setSdtId(ids[i]);
			template.setTreeNdId(treeNdId);
			template.setUserId(Integer.parseInt(userId));
			template.setSort(0);
			Integer count = supportMaterialLibraryService.selectDataFieldById(template);
			if(count == 0){
				list.add(template);
			}
		}
		Integer status = null;
		if(list != null & list.size() > 0){
			status = supportMaterialLibraryService.saveTemplate(list);
		}else{
			return -2;
		}
		return status;
	}
	@RequestMapping(value = "/deleteFileById")
	@ResponseBody
	public Integer deleteFileById(Integer fileId,HttpServletRequest request){
		Integer status = null;
		// 删除前先查询选中的文件是否存在
		SupportMaterialLibraryFile file = supportMaterialLibraryService.selectFileById(fileId);
		// 存在则删除
		if(file != null ){
			// 从数据库移除这些文件
			status = supportMaterialLibraryService.deleteFileById(fileId);
			// 从文件保存目录中移除这些文件
			deleteFile(file.getFileUrl());
			String realPath = request.getSession().getServletContext().getRealPath("upload");
			deleteFile(realPath + "\\" + file.getFileOnlineName());
		}
		return status;
		
	}
	@RequestMapping(value = "/deleteDataFieldById")
	@ResponseBody
	public Integer deleteDataFieldById(Integer dataFileId,HttpServletRequest request){
		Integer status = null;
		// 删除前先查询选中的文件是否存在
		//SupportMaterialLibraryFile file = supportMaterialLibraryService.deleteDataFieldById(dataFileId);
		// 存在则删除
		//if(file != null ){
		// 从数据库移除这些文件
		status = supportMaterialLibraryService.deleteDataFieldById(dataFileId);
		//}
		return status;
	}
	
	/** 
	 * 删除单个文件 
	 * @param  sPath  被删除文件的文件名 
	 * @return 单个文件删除成功返回true，否则返回false 
	 */ 
	private boolean deleteFile(String sPath) { 
		boolean flag = false;
	  flag = false; 
	  File file = new File(sPath); 
	  // 路径为文件且不为空则进行删除 
	  if (file.isFile() && file.exists()) { 
	    file.delete(); 
	    flag = true; 
	  } 
	  return flag; 
	} 

	@RequestMapping(value = "/saveTest")
	@ResponseBody
	public String testController(){
		System.out.println("访问到了Controller!");
		Office2Swf.office2Swf("E:\\assessFileUser\\343_201703130748138841.xls","E:\\assessFileUser\\swf\\343_201703130748138841.swf");
		String str = "[{'id':88,'icon':'/TQCC/css/zTreeStyle/img/diy/p1.png','open':true,'pId':77,'level':3,'name':'2.3教师教学投入'},{'id':89,'icon':'/TQCC/css/zTreeStyle/img/diy/p1.png','open':true,'pId':77,'level':3,'name':'2.4教师发展与服务'}]";
		//Object parse = JSONArray.parse(str);
		//String s = "[{'employees':'firstName','id':01},{'employees111':'firstName111','id':02}]";
		//String s = "{\"name\":\"李明\",\"age\":19},{\"name\":\"张三\",\"age\":12}";
		//String jsonString = JSONArray.toJSONString(s);
		//System.out.println("jsonString = "+jsonString);
		return str;
	}
	// 字符串转日期
	private Date strToDate(String str) {
	  SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
	  Date date = null;
	  try {
	  date = format.parse(str);
	  } catch (ParseException e) {
	  e.printStackTrace();
	  }
	  return date;
	}
}
