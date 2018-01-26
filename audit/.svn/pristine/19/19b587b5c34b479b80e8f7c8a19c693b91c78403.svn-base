package audit.controller;

import java.io.File;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import audit.common.ManageTreeEnttryHelper;
import audit.common.ManageTreeListToJson;
import audit.model.AsIIndexClassification;
import audit.model.AsMManage;
import audit.model.AsPRelevanceItem;
import audit.model.AsPViewQuota;
import audit.model.AsPinspectpoint;
import audit.model.AsPlan;
import audit.model.Support_File;
import audit.service.AsManageServiceI;
import audit.service.AsPinspectpointI;
import audit.service.AsPlanServiceI;
import audit.service.AsViewQuotaServiceI;
import audit.service.SupportFileI;
import audit.util.FileUploadUtil;
import audit.util.PropertiesUtil;
import audit.util.fileType;


@Controller
@Scope("prototype")  
@RequestMapping("/designController") 
public class DesignController
{
	private int pageNo;          //当前页码  
	private int pageNum = 10;   //每页行数  
	private int count;      	 //总记录数  
	private int totalPage;       //总页数  
	
	private SupportFileI supportFileService; //支撑文件接口
	@Autowired
	public void setSupportFileService(SupportFileI supportService){
		this.supportFileService = supportService;
	}
	
	private AsPlanServiceI asPlanService;
	@Autowired
	public void setAsPlanService(AsPlanServiceI asPlanService){
		this.asPlanService = asPlanService;
	}
	
	private AsManageServiceI asManageService;
	@Autowired
	public void setAsManageService(AsManageServiceI asManageService){
		this.asManageService = asManageService;
	}
	
	private AsViewQuotaServiceI asViewQuotaService;
	@Autowired
	public void setAsViewQuotaService(AsViewQuotaServiceI asViewQuotaService){
		this.asViewQuotaService = asViewQuotaService;
	}
	
	private AsPinspectpointI asPinspectpointService;
	@Autowired
	public void setAsPinspectpointService(AsPinspectpointI asPinspectpointService){
		this.asPinspectpointService = asPinspectpointService;
	}
	//-------------------查询模块下全部方案----------------------------------------------------------
	@RequestMapping(value="/findplan",method = RequestMethod.GET)
	@ResponseBody
	public String findPlan(HttpServletRequest request){
		String mid = request.getParameter("mid");
		List<AsPlan> asPlans = asPlanService.listAsPlansByMid(Integer.parseInt(mid));
		JSONArray jsons = new JSONArray();
		 for(AsPlan ap : asPlans){
			 JSONObject o = new JSONObject();
			 o.put("asplan", ap);
			 jsons.add(o);
		 }
		 System.out.println(jsons.toString());
		return jsons.toString();
	}
	
	//-------------------保存方案----------------------------------------------------------
	@RequestMapping(value="/savePlan",method = RequestMethod.POST)
	@ResponseBody
	public String savePlan(HttpServletRequest request){
			String pid = request.getParameter("pid");
			String pname = request.getParameter("pname");
			String content = request.getParameter("content");
			AsPlan asPlans = asPlanService.findAsPlanById(Integer.parseInt(pid));
			if (pname !=null) {
				asPlans.setName(pname);
			}
			asPlans.setContent(content);
			asPlanService.updateAsPlan(asPlans);
			return "保存成功！";
	}
	
	//-------------------上传支撑文件----------------------------------------------------------
	@RequestMapping(value="/uploadFile",method = RequestMethod.POST)
	@ResponseBody
	public String uploadFile(HttpServletRequest request) {
		
		String fileUrl = FileUploadUtil.uploadFile(request);
		// 使用 uploadify  获取request参数得再取文件后面
		String userId = request.getParameter("userId");
		String userName = request.getParameter("userName");
	    String filetype=	fileUrl.substring(fileUrl.indexOf(".")+1);
		if (fileUrl.indexOf(".")<0) {
			if ("GSCW".equals(fileUrl)) {
				System.out.println("不支持此格式");
			}else if ("size".equals(fileUrl)) {
				System.out.println("文件超出规定大小");
			}
		}else {
			if (fileType.filetype.indexOf(filetype)>=1) {
				String pid = fileUrl.substring(0,fileUrl.indexOf("&"));
				fileUrl = fileUrl.substring(fileUrl.indexOf("&")+1);
				int fileType = FileUploadUtil.checkFileFormat(fileUrl);
				String fName = fileUrl.substring(fileUrl.lastIndexOf("/")+1);
				Support_File sfile = new Support_File();
				sfile.setFilename(fName);
				sfile.setDir(fileUrl);
				sfile.setUploader(Integer.parseInt(userId));//要从登录中获取用户ID---Integer.parseInt(userId)
				sfile.setUploadername(userName);//要从登录中获取用户名称---userName
				
				Date date = new Date();
				SimpleDateFormat df1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
				String time = df1.format(date);
				Timestamp ts = Timestamp.valueOf(time);
				
				sfile.setUploadtime(ts);
				sfile.setFlag(fileType);
				sfile.setStatus(1);
				sfile.setPid(Integer.parseInt(pid));//方案id
				supportFileService.insert(sfile);
				return fileUrl;
			}
			return "上传文件格式不对";
		}
		return "保存失败";
	}
	
	//-------------------删除支撑材料----------------------------------------------------------
	@RequestMapping(value="/delPlanSupport",method = RequestMethod.POST)
	@ResponseBody
	public String delPlanSupport(HttpServletRequest request){
			String sid = request.getParameter("sid");
			Support_File sflile = supportFileService.findSupportFileById(Integer.parseInt(sid));
			String path = PropertiesUtil.getProperty("upload")+File.separator+sflile.getDir();
			File file =new File(path);
			file.delete();
			supportFileService.deleteSupportFileById(Integer.parseInt(sid));
			return "删除成功！";
	}
	
	//树形菜单查询
	@RequestMapping(value="/findAllManage",method = RequestMethod.POST)
	@ResponseBody
	public String findAllManage(HttpServletRequest request,HttpServletResponse response){
		List<AsIIndexClassification> manageList = asManageService.selectAllIndex();
		List<ManageTreeEnttryHelper> manageTreeList = (List<ManageTreeEnttryHelper>)ManageTreeListToJson.getMnangeTreeList(manageList);
//		String manageListJson = ManageTreeListToJson.listTojson(manageTreeList);
		JSONObject o = new JSONObject();
		o.put("ztree",manageTreeList);
		return o.toJSONString();
	}
	
	//保存观测指标
	@RequestMapping(value="/saveGCZB",method = RequestMethod.POST)
	@ResponseBody
	public String saveGCZB(HttpServletRequest request){
		String vids = request.getParameter("vids");
		String pid = request.getParameter("pid");
		List<String> lis = new ArrayList<String>();
		String[] str = vids.split(",");
		for (int i = 0; i < str.length; i++) {
			lis.add(str[i]);
		}
		List<AsMManage> manageList = asManageService.findQuotaByIDs(lis);
		System.out.println(manageList.size());
		for (int i = 0,len = manageList.size(); i < len; i++) {
			AsMManage manage = manageList.get(i);
			
			AsPViewQuota viewQuota = new AsPViewQuota();
			viewQuota.setQid(manage.getMeasureId());
			viewQuota.setQname(manage.getMeasureName());
			try {
				viewQuota.setQcategory(manage.getIndexClassFication().getIndexName());
			} catch (Exception e) {
				viewQuota.setQcategory("");
			}
			try {
				viewQuota.setQtype(manage.getClassify()  == null ? "" : manage.getClassify());
			} catch (Exception e) {
				viewQuota.setQtype("");
			}
			viewQuota.setPid((pid==null?0:Integer.parseInt(pid)));
			
			asViewQuotaService.insertViewQuota(viewQuota);
		}
		//根据pid查询观测指标
		List<AsPViewQuota> vqList = asViewQuotaService.findViewQuotaByPid(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("viewQuota",vqList);
		return o.toJSONString();
	}
	
	
	//分页查询指标
	@RequestMapping(value="/findPageManage",method = RequestMethod.POST)
	@ResponseBody
	public String findPageManage(HttpServletRequest request,HttpServletResponse response){
		
		String qName = request.getParameter("qName");
		String pid = request.getParameter("pid");
		//当前页码  
		pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
		//总记录数  
		count = asManageService.findCount(qName);
		//共有多少页
		if (count % pageNum == 0) {
			totalPage = count / pageNum;
		} else {
			totalPage = count / pageNum + 1;
		}
		int pageStar = (pageNo-1)*pageNum;
		
		List<AsMManage> manageList = asManageService.findPageQuota(qName,pageStar);
		//根据pid查询观测指标
		List<AsPViewQuota> vqList = asViewQuotaService.findViewQuotaByPid(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("manages",manageList);
		o.put("ckQuota",vqList);
		o.put("totalPage", totalPage);
		o.put("pageNo", pageNo);
		o.put("qName", qName);
		return o.toJSONString();
	}
	
	//-------------------删除观测指标项----------------------------------------------------------
	@RequestMapping(value="/delViewQuota",method = RequestMethod.POST)
	@ResponseBody
	public String delViewQuota(HttpServletRequest request){
			String vid = request.getParameter("vid");
			asViewQuotaService.deleteByVid(Integer.parseInt(vid));
			return "删除成功！";
	}
	
	//-------------------分页查询 -- 关联项目----------------------------------------------------------
	@RequestMapping(value="/findPageRelevanceItem",method = RequestMethod.POST)
	@ResponseBody
	public String findPageRelevanceItem(HttpServletRequest request){
		String qName = request.getParameter("qName");
		String pid = request.getParameter("pid");
		//当前页码  
		pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
		//总记录数  
		count = asViewQuotaService.findCount(qName);
		//共有多少页
		if (count % pageNum == 0) {
			totalPage = count / pageNum;
		} else {
			totalPage = count / pageNum + 1;
		}
		int pageStar = (pageNo-1)*pageNum;
		//分页查询观测指标项
		List<AsPViewQuota> viewQuotaList = asViewQuotaService.findPageViewQuota(qName, pageStar);
		//根据pid查询关联项目
		List<AsPRelevanceItem> riList = asViewQuotaService.findRelevanceItemByPid(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("manages",viewQuotaList);
		o.put("ckQuota",riList);
		o.put("totalPage", totalPage);
		o.put("pageNo", pageNo);
		o.put("qName", qName);
		return o.toJSONString();
	}
	
	//保存关联项目
	@RequestMapping(value="/saveGLXM",method = RequestMethod.POST)
	@ResponseBody
	public String saveGLXM(HttpServletRequest request){
		String vids = request.getParameter("vids");
		String pid = request.getParameter("pid");
//		List<String> lis = new ArrayList<String>();
		String[] str = vids.split(",");
//		for (int i = 0; i < str.length; i++) {
//			lis.add(str[i]);
//		}
		for (int i = 0,len = str.length; i < len; i++) {
			String[] obj = str[i].split("_");
			
			AsPRelevanceItem item = new AsPRelevanceItem();
			item.setPid((pid==null?0:Integer.parseInt(pid)));
			item.setRpid(Integer.parseInt(obj[1]));
			item.setRvid(Integer.parseInt(obj[0]));
			//保存关联项目
			asViewQuotaService.addRelevanceItem(item);
		}
		//根据pid查询关联项目
		List<AsPRelevanceItem> riList = asViewQuotaService.findRelevanceItemByPid(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("relevance",riList);
		return o.toJSONString();
	}
	
	//保存方案
	@RequestMapping(value="/savePlanName",method = RequestMethod.POST)
	@ResponseBody
	public String savePlanName(HttpServletRequest request){
		String pname = request.getParameter("pname");
		String mid = request.getParameter("mid");
		String content = request.getParameter("content");
		AsPlan ap = new AsPlan();
		ap.setName(pname);
		ap.setMid(Integer.parseInt(mid));
		ap.setContent(content);
		ap.setIsrelate(1);
		
		AsPlan plan = asPlanService.findMaxNo();
		String maxNo = plan.getNo();
		maxNo = maxNo.replace(".", "");
		Integer db = Integer.parseInt(maxNo);
		db++;
		String maxNoStr = db.toString();
		String sNo = maxNoStr.substring(0,maxNoStr.length()-1)+"."+maxNoStr.substring(maxNoStr.length()-1);
		ap.setNo(sNo);
		asPlanService.insertPlan(ap);
		
		List<AsPlan> asPlans = asPlanService.listAsPlansByMid(Integer.parseInt(mid));
		JSONArray jsons = new JSONArray();
		 for(AsPlan apl : asPlans){
			 JSONObject o = new JSONObject();
			 o.put("asplan", apl);
			 jsons.add(o);
		 }
		 System.out.println(jsons.toString());
		return jsons.toString();
	}
	
	//保存考察重点
	@RequestMapping(value="/saveInspectPtion",method = RequestMethod.POST)
	@ResponseBody
	public String saveInspectPtion(HttpServletRequest request){
		String pid = request.getParameter("pid");
		String title = request.getParameter("title");
		String icontent = request.getParameter("icontent");
		AsPinspectpoint aip = new AsPinspectpoint();
		aip.setPid(Integer.parseInt(pid));
		aip.setTitle(title);
		aip.setIcontent(icontent);
		asPinspectpointService.insert(aip);
		
		List<AsPinspectpoint> inspectpoint = asPinspectpointService.findListByPid(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("inspectpoint",inspectpoint);
		return o.toJSONString();
	}
	
	//-------------------保存方案----------------------------------------------------------
	@RequestMapping(value="/saveYSJS",method = RequestMethod.POST)
	@ResponseBody
	public String saveYSJS(HttpServletRequest request){
			String pid = request.getParameter("pid");
			String description = request.getParameter("description");
			AsPlan asPlans = asPlanService.findAsPlanById(Integer.parseInt(pid));
			asPlans.setDescription(description);
			asPlanService.updateAsPlan(asPlans);
			return "保存成功！";
	}
	
	//-------------------删除支撑材料----------------------------------------------------------
	@RequestMapping(value="/delPlan",method = RequestMethod.POST)
	@ResponseBody
	public String delPlan(HttpServletRequest request){
			String pid = request.getParameter("pid");
			//删除支撑材料中的文件
			List<Support_File> sflile = supportFileService.selectFileByPid(Integer.parseInt(pid));
			if (sflile != null && sflile.size()>0) {
				for (int i = 0; i < sflile.size(); i++) {
					Support_File sfl = sflile.get(i);
					String path = PropertiesUtil.getProperty("upload")+File.separator+sfl.getDir();
					File file =new File(path);
					file.delete();
				}
			}
			asPlanService.deleteByPid(Integer.parseInt(pid));
			return "删除成功！";
	}
	
	//-------------------删除关联项目---------------------------------------------------------
	@RequestMapping(value="/delGlxms",method = RequestMethod.POST)
	@ResponseBody
	public String delGlxms(HttpServletRequest request){
		String rids = request.getParameter("rids");
		String pid = request.getParameter("pid");
		List<String> lis = new ArrayList<String>();
		String[] str = rids.split(",");
		for (int i = 0; i < str.length; i++) {
			lis.add(str[i]);
		}
		asViewQuotaService.delGlxms(lis);
		
		//根据pid查询关联项目
		List<AsPRelevanceItem> riList = asViewQuotaService.findRelevanceItemByPid(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("relevance",riList);
		return o.toJSONString();
	}
	
	
	//-------------------查询 考察重点----------------------------------------------------------
	@RequestMapping(value="/findKczd",method = RequestMethod.POST)
	@ResponseBody
	public String findKczd(HttpServletRequest request){
		String pid = request.getParameter("pid");
		//根据pid查询考察重点
		List<AsPinspectpoint> app = asPinspectpointService.findListByPid(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("pinspect",app);
		return o.toJSONString();
	}
	//-------------------删除 考察重点----------------------------------------------------------
	@RequestMapping(value="/delKczds",method = RequestMethod.POST)
	@ResponseBody
	public String delKczds(HttpServletRequest request){
		String ids = request.getParameter("ids");
		String pid = request.getParameter("pid");
		List<String> lis = new ArrayList<String>();
		String[] str = ids.split(",");
		for (int i = 0; i < str.length; i++) {
			lis.add(str[i]);
		}
		asPinspectpointService.delKczds(lis);
		
		//根据pid查询考察重点
		List<AsPinspectpoint> apip = asPinspectpointService.findListByPid(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("apip",apip);
		return o.toJSONString();
	}
	
}
