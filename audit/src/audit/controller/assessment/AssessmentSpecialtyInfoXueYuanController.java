package audit.controller.assessment;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sun.xml.rpc.processor.modeler.j2ee.xml.string;


import audit.common.ServiceResult;
import audit.model.AS_ASSESS_INDEX_FORMULA;
import audit.model.Asses_filedsum;
import audit.model.DW_V_LEADERSHIP;
import audit.model.LianghuaZhiBiao;
import audit.model.assess.vo.As_assess_reportVo;
import audit.model.assess.vo.AssessMessge;
import audit.model.assess.vo.ZYJSMessgeVo;
import audit.model.quality.Assessment_system_info;
import audit.model.quality.vo.Assess_comment_rectificationVo;
import audit.model.quality.vo.ContentInfo;
import audit.model.quality.vo.LookReportVo;
import audit.model.quality.vo.UserVo;
import audit.model.quality.vo.ZgList;
import audit.service.AssessmentSystemService;
import audit.service.assess.AssessmentSpecialtyInfoServices;
import audit.service.assess.AssessmentSpecialtyInfoXueYuanServices;
import audit.util.CookieUtil;
import audit.util.GetDateUtil;

@Controller
@RequestMapping("AssessmentSpecialtyInfoXueYuanController")
public class AssessmentSpecialtyInfoXueYuanController {
	
	@Autowired	AssessmentSpecialtyInfoXueYuanServices services;
	@Autowired AssessmentSystemService assessmentSystemService;
	
	
	@RequestMapping("findAssessmentList")
	@ResponseBody
	public List<ZgList> findAssessmentList(HttpServletRequest request){
		String tYear=request.getParameter("tYear");
		int pgid = 0;
		if(request.getParameter("pgid")!=null && !"null".equals(request.getParameter("pgid")))
			pgid = Integer.parseInt(request.getParameter("pgid"));
		List<ZgList> findAssessmentList=null;
		try {
			String userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			try {
				findAssessmentList = services.findAssessmentList(tYear,userid,pgid);
			} catch (ParseException e) {
				e.printStackTrace();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return findAssessmentList;
	};
	
	
	@RequestMapping("findConentInfo")
	@ResponseBody
	public List<ContentInfo> findConentInfo(HttpServletRequest request,ContentInfo  c){
		String userid;
		try {
			userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			c.setUserid(userid);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		List<ContentInfo> findConentInfo = services.findConentInfo(c,request);
		return findConentInfo;
	};
	
	@RequestMapping("selectSpecialtyInfoByname")
	@ResponseBody
	public List<Map<String, Object>> selectSpecialtyInfoByname(HttpServletRequest request,ContentInfo  c){
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("name", request.getParameter("name"));
		List<Map<String, Object>> selectSpecialtyInfoByname = services.selectSpecialtyInfoByname(map);
		return selectSpecialtyInfoByname;
	};
	
	@RequestMapping("updateAssessment_task")
	@ResponseBody
	public  int  updateAssessment_task(HttpServletRequest request){
		String specialty_id = request.getParameter("specialty_id");
		String self_assess_zt = request.getParameter("self_assess_zt");
		String audit_zt = request.getParameter("audit_zt");
		String blackcontent = request.getParameter("blackcontent");
		String rectification_id= request.getParameter("rectification_id");
		String item =request.getParameter("item");
		String userid;
		String ASSESS_time =GetDateUtil.getDate();
		
		services.updateAssessment_task(self_assess_zt, audit_zt, ASSESS_time, specialty_id,item);
		if(rectification_id!=""&&rectification_id!=null){
			try {
				userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
				/**
				 * userid, ASSESS_time  数据sql  不需要对它行进修改（sql  只修改blackcontent rectification_id）
				 */
				services.updateAs_assess_rectification(blackcontent, userid, ASSESS_time, rectification_id);
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		
		return 1;
	}
	
	
	
	/**
	 * 审核未通过
	 * @param request
	 */
	@RequestMapping("UpdateASSESSMENT_TASKNoPass")
	@ResponseBody
	public int UpdateASSESSMENT_TASKNoPass(HttpServletRequest request) {
		String dateYear=request.getParameter("dateYear");
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = 	sdf.format(new Date());
		services.UpdateASSESSMENT_TASKNoPass(dateYear,specialtyId,date);
		return 1;
	}
	/**
	 * 审核通过
	 * @param request
	 */
	@RequestMapping("UpdateASSESSMENT_TASKPass")
	@ResponseBody
	public int UpdateASSESSMENT_TASKPass(HttpServletRequest request) {
		int audit_zt = 0;
		if(request.getParameter("audit_zt")!=null && !"null".equals(request.getParameter("audit_zt")))
			audit_zt = Integer.parseInt(request.getParameter("audit_zt"));
		String  dateYear=request.getParameter("dateYear");
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = 	sdf.format(new Date());
		
		services.UpdateASSESSMENT_TASKPass(audit_zt,dateYear,specialtyId,date);
		  
		return 1;
		
	}
	@RequestMapping("findReportConentInfo")
	@ResponseBody
	public As_assess_reportVo findReportConentInfo(HttpServletRequest request){
		String Specialty_id = request.getParameter("Specialty_id");
		String Sysid = request.getParameter("Sysid");
		String tYear = request.getParameter("tYear");
		String userid;
		As_assess_reportVo findReportConentInfo = null;
		try {
			userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
					findReportConentInfo = services.findReportConentInfo(Specialty_id, Sysid,userid,request,tYear);
			System.out.println(findReportConentInfo.getENTER_CONTENT());
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return findReportConentInfo;
	}
	@RequestMapping("updateAs_assess_report_blackcontent")
	@ResponseBody
	public int  updateAs_assess_report_blackcontent(HttpServletRequest request){
		String blackcontent=request.getParameter("blackcontent");
		String report_id=request.getParameter("report_id");
		String userid;
		try {
			userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			services.updateAs_assess_report_blackcontent(blackcontent, userid, report_id);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		return 1;
	};	
	
	/**
	 * 获取审核人数据 initSHRdata
	 */
	@RequestMapping("initSHRdata")
	@ResponseBody
	public List<Map<String, Object>>  initSHRdata(HttpServletRequest request){
		String parameter = request.getParameter("sysId");
		if(parameter==null) parameter="0";
		int sysId = Integer.parseInt(parameter);
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		String dateYear=request.getParameter("dateYear");
		int  userid=0;
		try {
			userid = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			//services.initSHRdata(sysId,specialtyId,dateYear);
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return services.initSHRdata(sysId,specialtyId,dateYear);
	}
	
	/**
	 * 根据专业ID查询专业信息
	 */
	@RequestMapping("selectspecialtyById")
	@ResponseBody
	public List<Map<String, Object>>  selectspecialtyById(@RequestParam Map<String, String> params){
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("ID", params.get("specialtyId"));
		return services.selectspecialtyById(map);
	}
	/**
	 * 
	 * 保存审核意见
	 * 
	 */
	@RequestMapping("updateAs_assess_report_blackcontent1")
	@ResponseBody
	public String  updateAs_assess_report_blackcontent1(HttpServletRequest request){
		String SHDJ=request.getParameter("SHDJ");
		String SHFS=request.getParameter("SHFS");
		String blackcontent=request.getParameter("blackcontent");
		int sysId = 0;
		if(request.getParameter("sysId")!=null && !"null".equals(request.getParameter("sysId")))
			sysId = Integer.parseInt(request.getParameter("sysId"));
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		String dateYear=request.getParameter("dateYear");
		int  userid=0;
		try {
			userid = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			
			services.updateAs_assess_report_blackcontent1(blackcontent, userid, sysId,specialtyId,dateYear,SHDJ,SHFS);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "1";
	};
	
	/**
	 * 
	 * 保存审核意见
	 * 
	 */
	@RequestMapping("insertReportBlackcontent")
	@ResponseBody
	public String  insertReportBlackcontent(HttpServletRequest request){
		Map<String, String> map = new HashMap<>();
		map.put("blackcontent", request.getParameter("blackcontent"));
		map.put("shGrade", request.getParameter("SHDJ"));
		map.put("shScore", request.getParameter("SHFS"));
		map.put("sysId", request.getParameter("sysId"));
		map.put("specialtyId", request.getParameter("specialtyId"));
		map.put("ryear", request.getParameter("dateYear"));
		try {
			map.put("shUserId", CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			if(services.insertReportBlackcontent(map)<0) return "0";
			else return "1";
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return "0";
	};
	
	/**
	 * 
	 * 查询意见
	 * 
	 */
	@RequestMapping("getAssessmentReportInfo")
	@ResponseBody
	public boolean  getAssessmentReportInfo(HttpServletRequest request){
		Map<String, String> map = new HashMap<String, String>();
		map.put("sysId", request.getParameter("sysId"));
		map.put("specialtyId", request.getParameter("specialtyId"));
		map.put("ryear", request.getParameter("dateYear"));
		return services.getAssessmentReportInfo(map);
	};	
	
	@RequestMapping("findAssessment_specialty_info_Name")
	@ResponseBody
	public  String  findAssessment_specialty_info_Name(HttpServletRequest request){
		String 	specialty_id=request.getParameter("specialty_id");
		String specialty_info_Name = services.findAssessment_specialty_info_Name(specialty_id);
		return specialty_info_Name;
	}
	@RequestMapping("findMessge")
	@ResponseBody
	public  AssessMessge  findMessge(HttpServletRequest request){
		String 	specialty_id=request.getParameter("specialty_id");
		
		AssessMessge messgeVo=new AssessMessge();
		//查询工程
		String specialty_info_Name = services.findAssessment_specialty_info_Name(specialty_id);
		messgeVo.setSpecialty_name(specialty_info_Name);
		String userid;
		try {
			userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			String blackcontent = services.findAssessment_allreport_BLACKCONTENT(specialty_id,userid);
			messgeVo.setBlackcontent(blackcontent);
			//专业建设详情
			List<ZYJSMessgeVo> findZYJSMessge = services.findZYJSMessge(specialty_id,userid);
			
			 List<ZYJSMessgeVo> findZYQKGY = services.findZYQKGY(specialty_id,userid);
			List<ZYJSMessgeVo> findZYJSPMessge = services.findZYJSPMessge(specialty_id,userid);
			//设置专业你建设详情
			messgeVo.setZYJSXQ(findZYJSMessge);
			//专业情况概要
			messgeVo.setZYQKGY(findZYQKGY);
			//专业建设存在的问题与改进方向
			messgeVo.setZYJSXp(findZYJSPMessge);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return messgeVo;
	}
	
	@RequestMapping("selectAssessment_allreport")
	@ResponseBody
	public String selectAssessment_allreport(HttpServletRequest request){
		String sp_id = request.getParameter("sp_id");
		String tYear = request.getParameter("tYear");
		String id;
		String messge=null;
		try {
			id = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			messge=services.selectAssessment_allreport(id, sp_id, tYear);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		return messge;
		
	}
	@RequestMapping("saveAssessment_allreport")
	@ResponseBody
	public void saveAssessment_allreport(HttpServletRequest request){
		String tYear = request.getParameter("tYear");
		String specialty_id = request.getParameter("specialty_id");
		String blackcontent = request.getParameter("BLACKCONTENT");
		//总意见表id
		String allreport_id = request.getParameter("report_id");
		int num=0;
		if("".equals(allreport_id)||allreport_id==null){
			 num = services.selectAssessment_allreportNum(specialty_id);
			//如果表里有数据   就修改
			if(num>0){
					services.updateAssessment_allreportBlackcontent(blackcontent, specialty_id);
				}else{
					try {
						String id = CookieUtil.getValueByCookie(request, "uvocookie", "id");
						//插入数据
						services.insertASSESSMENT_ALLREPORT(tYear, specialty_id, id, blackcontent);
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}
		}else{
			 num = services.selectAssessment_allreportNumById(allreport_id);
				//如果表里有数据   就修改
				if(num>0){
					services.updateAssessment_allreportBlackcontentById(blackcontent, allreport_id);
				}else{
					try {
						String id = CookieUtil.getValueByCookie(request, "uvocookie", "id");
						//插入数据
						services.insertASSESSMENT_ALLREPORT(tYear, specialty_id, id, blackcontent);
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}
		}
		String self_assess_zt = request.getParameter("self_assess_zt");
		String audit_zt = request.getParameter("audit_zt");
		String ASSESS_time= GetDateUtil.getDate();
		services.updateAssessment_task(self_assess_zt, audit_zt, ASSESS_time, specialty_id,2+"");
		
		
	}
	@RequestMapping("zhuanHuanHtml")
	@ResponseBody
	public As_assess_reportVo zhuanHuanHtml(HttpServletRequest request){
		String addr=	request.getParameter("addr");
		String fileName=	request.getParameter("fileName");
		As_assess_reportVo zhuanHuanHtml = services.zhuanHuanHtml(addr, fileName,request);
		return zhuanHuanHtml;
	}
	
	@RequestMapping("getAllReports")
	@ResponseBody
	public LookReportVo getAllReports(HttpServletRequest request){
		String tYear =request.getParameter("tYear");
		String specialty_id =request.getParameter("specialty_id");
		LookReportVo allReports=null;
		try {
			String Userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			String blackcontent = services.findAssessment_allreport_BLACKCONTENT(specialty_id,Userid);
			allReports = services.getAllReports(Userid, tYear, specialty_id);
			
			allReports.setBlackcontent(blackcontent);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return allReports;
	};
	@RequestMapping("findUserInfo")
	@ResponseBody
	public UserVo findUserInfo(HttpServletRequest request){
		UserVo findUserInfo=null;
		try {
			String userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			 findUserInfo = services.findUserInfo(userid);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return findUserInfo;
	}
	
	@RequestMapping("getAllData")
	@ResponseBody
	public List<Map<String, Object>> getAllData(HttpServletRequest request){
		String speId = request.getParameter("specialtyId");
		List<Map<String, Object>> allData=null;
		try {
			String Userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			allData = services.getAllData(Userid, speId);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return allData;
	}
	
	
	/**
	 * 查询assessment_system_info数据
	 */
	@RequestMapping("getDataInfo")
	@ResponseBody
	public List<Map<String,Object>> getDataInfo(HttpServletRequest request){
		String id=request.getParameter("id");
		int id1 = 0;
		if(id!=null && !"null".equals(id))
			id1 = Integer.parseInt(id);
//		List<Map<String,Object>> maplist=	services.getData(id1);
//		for (Map<String, Object> map : maplist) {
		String dateYear=request.getParameter("dateYear");
	   List<Map<String,Object>> maplist=	services.getData(id1,dateYear);
//	   for (Map<String, Object> map : maplist) {
//		   System.out.println(map.get("pname")+"++++++++++++++++=");
//		}
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	
	/**
	 * 根据id查询assessment_system_info数据
	 */
	@RequestMapping("getDataInfoById")
	@ResponseBody
	public List<Map<String,Object>> getDataInfoById(HttpServletRequest request){
		String id=request.getParameter("id");
		int id1 = 0;
		if(id!=null) id1=Integer.parseInt(id);
		List<Map<String,Object>> maplist=	services.getDataById(id1);
		if(maplist==null) return null;
		return maplist;
	}
	
	/**
	 * 查询自评是否提交状态
	 */
	@RequestMapping("getASSESSMENT_TASK")
	@ResponseBody
	public List<Map<String,Object>> getASSESSMENT_TASK(HttpServletRequest request){
		String dateYear=request.getParameter("dateYear");
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		List<Map<String,Object>> maplist=	services.getASSESSMENT_TASK(dateYear,specialtyId);
		for (Map<String, Object> map : maplist) {
			System.out.println(map.get("self_assess_zt")+"++++++++++++++++===========");
			
		}
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	
	
	/**
	 * 查询自评等级等数据
	 * @param request
	 * @return
	 */
	@RequestMapping("getDataGrade")
	@ResponseBody
	public List<Map<String,Object>> getDataGrade(HttpServletRequest request){
		int sysId = 0;
		if(request.getParameter("id")!=null && !"null".equals(request.getParameter("id"))) 
			sysId = Integer.parseInt(request.getParameter("id"));
		int specialtyId=Integer.parseInt(request.getParameter("specialtyId"));
		String dateYear=request.getParameter("dateYear");
		List<Map<String,Object>> maplist=	services.getDataReport(sysId,specialtyId,dateYear);
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	
	
	
	
	/**
	 * 查询支撑材料
	 */
	@RequestMapping("getDataCailiao")
	@ResponseBody
	public List<Map<String,Object>> getDataCailiao(HttpServletRequest request){
		int sysId = 0;
		if(request.getParameter("id")!=null && !"null".equals(request.getParameter("id")))
			sysId = Integer.parseInt(request.getParameter("id"));
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		String dateYear=request.getParameter("dateYear");
		List<Map<String,Object>> maplist=	services.getDataCailiao(sysId,specialtyId,dateYear);
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	/**
	 * 查询定量数据表
	 * @throws UnsupportedEncodingException 
	 */
	
	@RequestMapping("getDataDLSJB")
	@ResponseBody
	public List<Map<String,Object>> getDataDLSJB(HttpServletRequest request) throws UnsupportedEncodingException{
		
		Integer	userId = null;
		if(!"0".equals(request.getParameter("shr")))
			userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		
		int sysId = 0;
		if(request.getParameter("id")!=null && !"null".equals(request.getParameter("id")))
			sysId = Integer.parseInt(request.getParameter("id"));
		String dateYear=request.getParameter("dateYear");
		
		List<Map<String,Object>> maplist=services.getDataDLSJB(sysId,userId,dateYear);
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	
	/**
	 * 现场考核专家的查询定量数据表
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping("getDataDLSJBs")
	@ResponseBody
	public List<Map<String,Object>> getDataDLSJBs(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("id", request.getParameter("id"));
		map.put("dateYear", request.getParameter("dateYear"));
		map.put("specialtyId", request.getParameter("specialtyId"));
		List<Map<String, Object>> list = services.selectAssessreport(map);
		List<Map<String,Object>> maplist=null;
		if(list.size()>0&&list.get(0).get("SHUSERID")+""!=null){
			Integer	userId = 0;
			if(list.get(0).get("SHUSERID")!=null && !"null".equals(list.get(0).get("SHUSERID")))
				userId = Integer.parseInt(list.get(0).get("SHUSERID").toString());
			int sysId = 0;
			if(request.getParameter("id")!=null && !"null".equals(request.getParameter("id")))
				sysId = Integer.parseInt(request.getParameter("id"));
			String dateYear=request.getParameter("dateYear");
			maplist=	services.getDataDLSJB(sysId,userId,dateYear);
		}
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	/**
	 * 现场考查查询全校数据表
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping("getDataQXSJBs")
	@ResponseBody
	public List<Map<String,Object>> getDataQXSJBs(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("id", request.getParameter("id"));
		map.put("dateYear", request.getParameter("dateYear"));
		map.put("specialtyId", request.getParameter("specialtyId"));
		List<Map<String, Object>> list = services.selectAssessreport(map);
		List<Map<String,Object>> maplist=null;
		if(list.size()>0&&list.get(0).get("SHUSERID").toString()!=null){
		Integer	userId = 0;
		if(list.get(0).get("SHUSERID")!=null && !"null".equals(list.get(0).get("SHUSERID")))
			userId = Integer.parseInt(list.get(0).get("SHUSERID").toString());
		int sysId = 0;
		if(!"null".equals(request.getParameter("id")) && request.getParameter("id")!=null)
			sysId = Integer.parseInt(request.getParameter("id"));
		String dateYear=request.getParameter("dateYear");
		 maplist=	services.getDataQXSJB(sysId,userId,dateYear);
		}
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	
	/**
	 * 现场考查查询全校数据表
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping("getDataQXSJBToWp")
	@ResponseBody
	public List<Map<String,Object>> getDataQXSJBToWp(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("id", request.getParameter("id"));
		map.put("dateYear", request.getParameter("dateYear"));
		map.put("specialtyId", request.getParameter("specialtyId"));
		List<Map<String, Object>> list = services.getDataToSchool(map);
		List<Map<String,Object>> maplist=null;
		if(list.size()>0&&list.get(0).get("userId").toString()!=null){
			Integer	userId = 0;
			if(!"null".equals(list.get(0).get("userId")) && list.get(0).get("userId")!=null)
				userId = Integer.parseInt(list.get(0).get("userId").toString());
			int sysId = 0;
			if(!"null".equals(request.getParameter("id")) && request.getParameter("id")!=null)
				sysId = Integer.parseInt(request.getParameter("id"));
			String dateYear=request.getParameter("dateYear");
			if("2".equals(request.getParameter("dateYear")))maplist=	services.getDataQXSJB(sysId,userId,dateYear);
			else maplist=	services.getDataDLSJB(sysId,userId,dateYear);
		}
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	
	/**
	 * 查询全校数据表
	 * @throws UnsupportedEncodingException 
	 */
	
	@RequestMapping("getDataQXSJB")
	@ResponseBody
	public List<Map<String,Object>> getDataQXSJB(HttpServletRequest request) throws UnsupportedEncodingException{
		
		int	userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		int sysId = 0;
		if(request.getParameter("id")!=null && !"null".equals(request.getParameter("id")))
			sysId = Integer.parseInt(request.getParameter("id"));
		String dateYear=request.getParameter("dateYear");
		List<Map<String,Object>> maplist=	services.getDataQXSJB(sysId,userId,dateYear);
		if(maplist==null){
			return null;
		}
		return maplist;
	}
	
	
	/**
	 * 查看量化指标等数据
	 */
	@RequestMapping("getAS_ASSESS_INDEX_FORMULA")
	@ResponseBody
	public List<AS_ASSESS_INDEX_FORMULA> getAS_ASSESS_INDEX_FORMULA(HttpServletRequest request) throws UnsupportedEncodingException{
		System.out.println(request.getParameter("Sysid"));	

		int sysId = 0;
		if(request.getParameter("Sysid")!=null) sysId = Integer.parseInt(request.getParameter("Sysid"));
		String dateYear=request.getParameter("dateYear");
		List<AS_ASSESS_INDEX_FORMULA> list=	services.getAS_ASSESS_INDEX_FORMULA(sysId,dateYear);
		for (AS_ASSESS_INDEX_FORMULA as_ASSESS_INDEX_FORMULA : list) {
			System.out.println(as_ASSESS_INDEX_FORMULA.getVariables()+"++++++++++++"+as_ASSESS_INDEX_FORMULA.getFormula());
		}
		if(list==null)
			return null;
		return list;
	}
	
	/**
	 * 查看网评人的信息 根据 体系sysID 网评人COMMENT_USERID 和syear
	 */
	@ResponseBody
	@RequestMapping("selectWpr")
	public List<Map<String, Object>> selectWpr(HttpServletRequest request){
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("sysid", request.getParameter("id"));
		map.put("syear", request.getParameter("dateYear"));
		//map.put("wpid", request.getParameter("wpId"));
		return services.selectWpr(map);
	}
	/**
	 * 查询所有的现场考查专家的信息
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException
	 */
		@RequestMapping("selectAllrecodrd")
		@ResponseBody
		public List<Map<String, Object>> selectAllrecodrd(HttpServletRequest request) throws UnsupportedEncodingException{
			Map<String, Object> map=new HashMap<String, Object>();
			map.put("userid", CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			try {
				List<Map<String, Object>> selectAllrecodrd = services.selectAllrecodrd(map);
				return selectAllrecodrd;
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		}
		
		@RequestMapping("selectzjdyj")
		@ResponseBody
		public List<Map<String, Object>> selectzjdyj(HttpServletRequest request) throws UnsupportedEncodingException{
			Map<String, Object> map=new HashMap<String, Object>();
			map.put("syear", request.getParameter("syear"));
			map.put("zzId",request.getParameter("zzId"));
				List<Map<String, Object>> selectzjdyj = services.selectzjdyj(map);
				return selectzjdyj;
		}
	
	/**
	 * 查看网评人的信息 根据 模块item 网评人COMMENT_USERID 和syear
	 */
	@ResponseBody
	@RequestMapping("selectWprTx")
	public List<Map<String, Object>> selectWprTx(HttpServletRequest request){
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("item", request.getParameter("item"));
		map.put("syear", request.getParameter("dateYear"));
		map.put("wpid", request.getParameter("wpId"));
		return services.selectWprTx(map);
	}
	/**
	 * 添加现场考查的信息
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@ResponseBody
	@RequestMapping("insertRecord")
	public void insertRecord(HttpServletRequest request,HttpServletResponse resp) throws IOException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("sysid", request.getParameter("sysid"));
		map.put("userid", CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		map.put("time", request.getParameter("time"));
		map.put("content", request.getParameter("content"));
		map.put("item", request.getParameter("item"));
		map.put("syear", request.getParameter("syear"));
		map.put("type", request.getParameter("type"));
		map.put("suggestions", request.getParameter("suggestions"));
		map.put("specialtyId", request.getParameter("specialtyId"));
		map.put("ranks", request.getParameter("ranks"));
		map.put("xckcid", request.getParameter("xckcid"));
		//先查询是否有此现场考查的信息
		List<Map<String, Object>> list = services.selectRecords(map);
		//System.out.println(list.size());
		if(list.size()<1){
			//执行添加
			int rows= services.insertRecord(map);
			if(rows>0)
				resp.getWriter().write("{\"message\":\"添加成功\"}");
			else
				resp.getWriter().write("{\"message\":\"添加失败\"}");
		}else{
			//执行修改
			int rows=services.updateRecord(map);
			if(rows>0)
				resp.getWriter().write("{\"message\":\"修改成功\"}");
			else
				resp.getWriter().write("{\"message\":\"修改失败\"}");
		}
		
	}
	
	@ResponseBody
	@RequestMapping("selectSpecialtyId")
	public List<Map<String, Object>> selectSpecialtyId(HttpServletRequest req){
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("id", req.getParameter("id"));
		return services.selectSpecialtyId(map);
	}
	
	/**
	 * 查看现场考查信息根据节点
	 * @throws UnsupportedEncodingException 
	 */
	@ResponseBody
	@RequestMapping("selectRecords")
	public List<Map<String, Object>> selectRecords(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("sysid", request.getParameter("sysid"));
		map.put("item", request.getParameter("item"));
		map.put("syear", request.getParameter("syear"));
		map.put("specialtyId", request.getParameter("specialtyId"));
		map.put("xckcid", request.getParameter("xckcid"));
		map.put("userid",CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		return services.selectRecords(map);
	}
	
	@ResponseBody
	@RequestMapping("selectRecordszz")
	public List<Map<String, Object>> selectRecordszz(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("sysid", request.getParameter("sysid"));
		map.put("item", request.getParameter("item"));
		map.put("syear", request.getParameter("syear"));
		map.put("specialtyId", request.getParameter("specialtyId"));
		map.put("xckcid", request.getParameter("xckcid"));
		return services.selectRecords(map);
	}
	
	/**
	 * 查看现场网评信息根据
	 * @throws UnsupportedEncodingException 
	 */
	@ResponseBody
	@RequestMapping("selectWpID")
	public List<Map<String, Object>> selectWpID(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("syear", request.getParameter("syear"));
		map.put("zyId", request.getParameter("zyId"));
		map.put("id", request.getParameter("id"));
		return services.selectWpID(map);
	}
	
	/**
	 *领导查询查看网评总意见
	 * @throws UnsupportedEncodingException 
	 */
	@ResponseBody
	@RequestMapping("selectwpzyj")
	public List<Map<String, Object>> selectwpzyj(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("syear", request.getParameter("syear"));
		map.put("zyId", request.getParameter("zyId"));
		map.put("wpId", request.getParameter("wpId"));
		return services.selectwpzyj(map);
	}
	
	/**
	 *领导查询查看现场考查专家的总意见
	 * @throws UnsupportedEncodingException 
	 */
	@ResponseBody
	@RequestMapping("selectxckczjzyj")
	public List<Map<String, Object>> selectxckczjzyj(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("syear", request.getParameter("syear"));
		map.put("zyId", request.getParameter("zyId"));
		map.put("zysId", request.getParameter("zysId"));
		return services.selectxckczjzyj(map);
	}
	
	/**
	 *领导查询查看审核总意见
	 * @throws UnsupportedEncodingException 
	 */
	@ResponseBody
	@RequestMapping("selectshzyj")
	public List<Map<String, Object>> selectshzyj(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("syear", request.getParameter("syear"));
		map.put("zyId", request.getParameter("zyId"));
		map.put("shId", request.getParameter("shId"));
		return services.selectshzyj(map);
	}
	
	/**
	 *领导查询查看现场考查组长总意见
	 * @throws UnsupportedEncodingException 
	 */
	@ResponseBody
	@RequestMapping("selectXckcZyj")
	public List<Map<String, Object>> selectXckcZyj(HttpServletRequest request) throws UnsupportedEncodingException{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("syear", request.getParameter("syear"));
		map.put("zyId", request.getParameter("zyId"));
		map.put("zzId", request.getParameter("zzId"));
		return services.selectXckcZyj(map);
	}
	/**
	 * 
	 * 获取系统得分
	 * @throws ScriptException 
	 */
	@RequestMapping("getAS_ASSESS_INDEX_FORMULA1")
	@ResponseBody
	public  double getSystemPoint(HttpServletRequest request) throws UnsupportedEncodingException, ScriptException{
		
		//引入js引擎方便调用js里的方法
		  ScriptEngineManager manager = new ScriptEngineManager();

		  ScriptEngine engine = manager.getEngineByName("javascript");

		//定义一个变量来接收最后的计算值
		//BigDecimal
		double Point1=0.00;
		//是否包含有中文
		Pattern p = Pattern.compile("[\u4e00-\u9fa5]");
		//纯中文正则表达式
		 String regs = "[\\u4e00-\\u9fa5]+" ;
		//纯数字正则表达式
		String reg="^\\d+$"; 
		String  CH="";//用于接收包含括号处理过的字符串
		Map<String, String>map=new HashMap<String,String>(); 
		int sysId = 0;
		if(request.getParameter("Sysid")!=null && !"null".equals(request.getParameter("Sysid")))
			sysId = Integer.parseInt(request.getParameter("Sysid"));
		String dateYear=request.getParameter("dateYear");
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		Asses_filedsum afs=	services.Selectas_asses_filedsum(sysId,dateYear);
		int i=	services.SelectReal(sysId, dateYear, specialtyId);
		map.put("realsum", i+"");
//		DW_V_LEADERSHIP dwvl1=new DW_V_LEADERSHIP();
		/**
		 * 遍历查出的公式并解析
		 */
		List<AS_ASSESS_INDEX_FORMULA> list=	services.getAS_ASSESS_INDEX_FORMULA(sysId,dateYear);
		for (AS_ASSESS_INDEX_FORMULA af : list) {
			//根据#进行拆分
			String []str=af.getFormula().split("#");
			//替换掉#得到公式
			 String formula=af.getFormula().replace("#","");
			 //检测formula是否含有中文并对其节气
			  Matcher m = p.matcher(formula);
			 if(m.find()){
			 for (int j = 0; j < str.length; j++) {
			 if(map.get(str[j])==null){
				 //拆分的字符串进行处理
				 if(str[j].contains("（")){
					 String []strings= str[j].split("（");
					 CH=strings[0];
				 }else{
					 CH=str[j];
				 }
				 //判断是否为纯中文
				 if(CH.matches(regs)){
				 String Chinase=str[j];
					 DW_V_LEADERSHIP dwvl=	services.SelectDW_V_LEADERSHIPZHI(specialtyId, dateYear, Chinase);
					 //判断是否查出数据没有级赋值为0并替换公式
					 if(dwvl==null){
						// map.put(af.getVariables(), "0");
						 formula = formula.replace(Chinase, "0");
					 }else{
					   formula = formula.replace(Chinase, dwvl.getZHI()+"");
					  }
				       }
				    
				 } else{
					 formula= formula.replace(str[j], map.get(str[j]));
				 }
			
			 }if(af.getFormula()==list.get(list.size()-1).getFormula()){
				 map.put(af.getVariables(), engine.eval(formula)+"");
				 Point1=Double.parseDouble(map.get(af.getVariables()));
			 }else{
				 map.put(af.getVariables(), engine.eval(formula)+"");
			 }
			 }else{
				//判断是否为最后一步计算公式解析替换并计算
				 if(af.getFormula()==list.get(list.size()-1).getFormula()){
					 for (int j = 0; j < str.length; j++) {
						 if(map.get(str[j])!=null){
							 formula=formula.replace(str[j], map.get(str[j]));
						 }
					 }
					 map.put(af.getVariables(), engine.eval(formula)+"");
					 Point1=Double.parseDouble(map.get(af.getVariables()));
//				     Point=Double.parseDouble(map.get(af.getVariables()));
				 }else{
					 //根据查出的Filedsum判断是否设置值
					 if(afs.getFiledsum()==null||afs.getFiledsum()==""){
						 map.put(af.getVariables(), "0");
					 }else{
						 for (int j = 0; j < str.length; j++) {
							 if(str[j].equals("filesum")){
								 formula=formula.replace(str[j], afs.getFiledsum());
							 }else if(str[j].equals("realsum")){
								 formula=formula.replace(str[j], i+""); 
							 }
						 } //判断公式是否为纯数字是的话保存到map
						 if(formula.matches(reg)){
							 map.put(af.getVariables(), formula);
						 }else{
							 map.put(af.getVariables(), engine.eval(formula)+"");
						 }
					 }
				 }
			 }
		}
		return Point1;
	}
	
	
	
	/**
	 * 获取量化指标并报存
	 */
	@RequestMapping("getAS_ASSESS_INDEX_FORMULA2")
	@ResponseBody
	public  Set<LianghuaZhiBiao> getLHZB(HttpServletRequest request)throws UnsupportedEncodingException {
		Set<LianghuaZhiBiao>set=new HashSet<>();
		//纯中文正则表达式
		 String regs = "[\\u4e00-\\u9fa5]+" ;
		 String  CH="";//用于接收包含括号处理过的字符串
		//是否包含有中文
	    Pattern p = Pattern.compile("[\u4e00-\u9fa5]");
		int sysId = 0;
		if(request.getParameter("Sysid")!=null && !"null".equals(request.getParameter("Sysid")))
			sysId = Integer.parseInt(request.getParameter("Sysid"));
		String dateYear=request.getParameter("dateYear");
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		List<AS_ASSESS_INDEX_FORMULA> list=	services.getAS_ASSESS_INDEX_FORMULA(sysId,dateYear);
		for (AS_ASSESS_INDEX_FORMULA af : list) {
			//根据#进行拆分
			String []str=af.getFormula().split("#");
			//替换掉#得到公式
			 String formula=af.getFormula().replace("#","");
			 //检测formula是否含有中文并对其节气
			  Matcher m = p.matcher(formula);
			  if(m.find()){
			for (int i = 0; i < str.length; i++) {
				 //拆分的字符串进行处理
				 if(str[i].contains("（")){
					 String []strings= str[i].split("（");
					 CH=strings[0];
				 }else{
					 CH=str[i];
				 }
				 //判断是否为纯中文
				 if(CH.matches(regs)){
					 String Chinase=str[i];
					 DW_V_LEADERSHIP dwvl=	services.SelectDW_V_LEADERSHIPZHI(specialtyId, dateYear, Chinase);
					 //判断是否查出数据没有级赋值为0并替换公式
					 if(dwvl==null){
						LianghuaZhiBiao LHZB=new LianghuaZhiBiao();
						if(set.size()<=0){
							LHZB.setName(Chinase);
							LHZB.setValue(0);
							set.add(LHZB);
					}else{
								LHZB.setName(Chinase);
								LHZB.setValue(0);
							if(set.contains(LHZB)){
							}else{
								set.add(LHZB);
							  }
						   
						}
					 }else{
						 LianghuaZhiBiao LHZB=new LianghuaZhiBiao();
						 if(set.size()<=0){
								LHZB.setName(Chinase);
								LHZB.setValue(dwvl.getZHI());
								set.add(LHZB);
						}else{
							LHZB.setName(Chinase);
							LHZB.setValue(dwvl.getZHI());
							 if(set.contains(LHZB)){
								}else{
									set.add(LHZB);
								}
								
					       }
						 }
				 }
			}
		}
		
		}	
		return set;

	}
	
	/**
	 * 查询filedsum
	 * @param request
	 * @return
	 * @throws UnsupportedEncodingException
	 */
	@RequestMapping("Selectas_asses_filedsum")
	@ResponseBody
	public Asses_filedsum Selectas_asses_filedsum(HttpServletRequest request) throws UnsupportedEncodingException{
		int sysId = 0;
		if(request.getParameter("sysId")!=null && !"null".equals(request.getParameter("sysId")))
			sysId = Integer.parseInt(request.getParameter("sysId"));
		String dateYear=request.getParameter("dateYear");
		Asses_filedsum af=	services.Selectas_asses_filedsum(sysId,dateYear);
		
		if(af==null){
			return null;
		}
		return af;
	}
	@RequestMapping("SelectCountRealUpload")
	@ResponseBody
	public int SelectCountRealUpload(HttpServletRequest request) throws UnsupportedEncodingException{
		int sysId = 0;
		if(request.getParameter("sysId")!=null && !"null".equals(request.getParameter("sysId")))
			sysId = Integer.parseInt(request.getParameter("sysId"));
		String dateYear=request.getParameter("dateYear");
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		int i=	services.SelectReal(sysId, dateYear, specialtyId);
		return i;
	}
	@RequestMapping("SelectDW_V_LEADERSHIPZHI")
	@ResponseBody
	public DW_V_LEADERSHIP SelectDW_V_LEADERSHIPZHI(HttpServletRequest request) throws UnsupportedEncodingException{
		int specialtyId = 0;
		if(request.getParameter("specialtyId")!=null && !"null".equals(request.getParameter("specialtyId")))
			specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
		String dateYear=request.getParameter("dateYear");
		String Chinase=request.getParameter("Chinase");
		DW_V_LEADERSHIP dwvl1=new DW_V_LEADERSHIP();
		DW_V_LEADERSHIP dwvl=	services.SelectDW_V_LEADERSHIPZHI(specialtyId, dateYear, Chinase);
		if(dwvl==null){
			dwvl1.setZHI(0);
			return dwvl1;
		}
		return dwvl;
	}
	

	 /**
	   * getAssessmentTypeById
	   * 判断课程评估和学院评估
	   */
	@ResponseBody
	@RequestMapping("getAssessmentTypeById")
	public String getAssessmentTypeById(HttpServletRequest request){
		int id = 0;
		if(request.getParameter("id")!=null && !"null".equals(request.getParameter("id")))
			id = Integer.parseInt(request.getParameter("id"));
		Map<String, Object> map = assessmentSystemService.getAssessmentTypeById(id);
		return map.get("TYPE_NAME")+"";
	}
	
	/**
	 * 保存审核总意见
	 */
	@RequestMapping("saveAssessment_allreport1")
	@ResponseBody
	public int saveAssessment_allreport1(HttpServletRequest request){
		String tYear = request.getParameter("dateYear");
		String specialty_id = request.getParameter("specialtyId");
		String blackcontent = request.getParameter("blackcontent");
		int num=0;
			 num = services.selectAssessment_allreportNum(specialty_id);
			//如果表里有数据   就修改
			if(num>0){
					services.updateAssessment_allreportBlackcontent(blackcontent, specialty_id);
				}else{
					try {
						String id = CookieUtil.getValueByCookie(request, "uvocookie", "id");
						//插入数据
						services.insertASSESSMENT_ALLREPORT(tYear, specialty_id, id, blackcontent);
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}
		return 1;
	}
	
}
