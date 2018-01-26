package audit.controller.access;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import audit.common.JsonResult;
import audit.common.ServiceResult;
import audit.controller.quality.ZLRWController;
import audit.model.assess.AsAccessExamineScene;
import audit.model.assess.AsAccessExamineSchedule;
import audit.model.assess.AsAccessSiteCheckRecord;
import audit.model.assess.AsAccessSiteCheckRecordidea;
import audit.model.assess.vo.AsAccessSceneScoreVo;
import audit.service.access.IAsAccessExamineSceneService;
import audit.service.access.IAsAccessExamineScheduleService;
import audit.service.access.IAssessResultService;
import audit.util.CookieUtil;

@Controller
@RequestMapping("examineScene")
public class AsAccessExamineSceneAction {
	
	private final static Logger log = Logger.getLogger(ZLRWController.class); 
	@Resource
	private IAsAccessExamineScheduleService asAccessExamineScheduleService;
	@Resource
	private IAsAccessExamineSceneService asAccessExamineSceneService;
	@Resource
	private IAssessResultService asAccessResultService;
	/**
	 * 初始话进入现场考查工作日程表界面
	 * @param request
	 * @param year
	 * @param mav
	 * @return
	 */
	@RequestMapping("siteVisitCommon")
	public String siteVisitCommonView(HttpServletRequest request,
			@RequestParam("year")String year,Model mav) {
		mav.addAttribute("year", year);
		return "page/majorEvaluation/siteVisitCommonTop";
	}
	/**
	 * 初始话进入现场考查工作日程表界面
	 * @param request
	 * @param year
	 * @param mav
	 * @return
	 */
	@RequestMapping("schedule")
	public String scheduleView(HttpServletRequest request,
			@RequestParam("year")String year,Model mav) {
		mav.addAttribute("year", year);
		return "page/majorEvaluation/siteVisitWorkSchedule";
	}
	@RequestMapping("scheduleAccessYear")
	@ResponseBody
	public String getScheduleAccessYear(HttpServletRequest request){
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> sr = asAccessExamineScheduleService.findAccessYear();
		jsonResult.setData(sr.getData());
		jsonResult.setOk(sr.isOk());
		jsonResult.setComment(sr.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("scheduleAccessSpecialty")
	@ResponseBody
	public String getScheduleAccessSpecialty(HttpServletRequest request){
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		Integer accessId=request.getParameter("accessId")==null?null:Integer.valueOf(request.getParameter("accessId"));
		Integer academyId=request.getParameter("academyId")==null?null:Integer.valueOf(request.getParameter("academyId"));
		Integer specialtyId=request.getParameter("specialtyId")==null?null:Integer.valueOf(request.getParameter("specialtyId"));
		ServiceResult<Map<String,Object>> serviceResult = asAccessExamineScheduleService.findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(accessId,academyId,specialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("scheduleExamineSchedule")
	@ResponseBody
	public String getExamineSchedule(HttpServletRequest request){
		Integer accessId=request.getParameter("accessId")==null?null:Integer.valueOf(request.getParameter("accessId"));
		Integer academyId=request.getParameter("academyId")==null?null:Integer.valueOf(request.getParameter("academyId"));
		Integer specialtyId=request.getParameter("specialtyId")==null?null:Integer.valueOf(request.getParameter("specialtyId"));
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String, Object>> serviceResult = asAccessExamineScheduleService.selectValues(accessId, academyId, specialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("scheduleExamineExpert")
	@ResponseBody
	public String getExamineExpert(HttpServletRequest request){
		Integer accessSpecialtyId = request.getParameter("accessSpecialtyId")==null?null:Integer.valueOf(request.getParameter("accessSpecialtyId"));
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String, Object>> serviceResult=asAccessExamineScheduleService.getExamineExpert(accessSpecialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("scheduleInsertScheduleTasks")
	@ResponseBody
	public String insertScheduleTasks(HttpServletRequest request){
		String[] scheduleDates = request.getParameterValues("scheduleDate");
		String[] scheduleTimes = request.getParameterValues("scheduleTime");
		String[] scheduleTasks = request.getParameterValues("scheduleTask");
		String[] expertIds = request.getParameterValues("expertId");
		String[] accessSpecialtyIds = request.getParameterValues("accessSpecialtyId");
		List<AsAccessExamineSchedule> list = new ArrayList<AsAccessExamineSchedule>();
		for(int i=0;i<scheduleDates.length;i++){
			AsAccessExamineSchedule a = new AsAccessExamineSchedule();
		    try {
		    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
				Date date = sdf.parse(scheduleDates[i]);
				a.setScheduleDate(date);
			} catch (ParseException e) {
				e.printStackTrace();
			}  
			a.setScheduleTime(scheduleTimes[i]);
			a.setScheduleTask(scheduleTasks[i]);
			a.setExpertId(Integer.valueOf(expertIds[i]));
			a.setAccessSpecialtyId(Integer.valueOf(accessSpecialtyIds[i]));
			list.add(a);
		}
		
		ServiceResult<Map<String, Object>> sr = asAccessExamineScheduleService.insertScheduleTasks(list);
		String count = String.valueOf(sr.getData().get("count"));
		return count;
	}
	@RequestMapping("scheduleDeleteScheduleTasks")
	@ResponseBody
	public String deleteScheduleTasks(HttpServletRequest request){
	    String[] ids = request.getParameter("ids").split(",");
		ServiceResult<Map<String, Object>> sr =asAccessExamineScheduleService.deleteByPrimaryKeys(ids);
		String count = String.valueOf(sr.getData().get("count"));
		return count;
	}
	@RequestMapping("scheduleUpdateScheduleTasks")
	@ResponseBody
	public String updateScheduleTasks(HttpServletRequest request){
		String scheduleDate = request.getParameter("scheduleDate");
		String scheduleTime = request.getParameter("scheduleTime");
		String scheduleTask = request.getParameter("scheduleTask");
		Integer expertId = Integer.valueOf(request.getParameter("expertId"));
		Integer id =Integer.valueOf(request.getParameter("id")) ;
		Integer accessSpecialtyId = Integer.valueOf(request.getParameter("accessSpecialtyId"));
		AsAccessExamineSchedule record = new AsAccessExamineSchedule();
		record.setAccessSpecialtyId(accessSpecialtyId);
		record.setExpertId(expertId);
		record.setId(id);
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			Date date = sdf.parse(scheduleDate);
			record.setScheduleDate(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		record.setScheduleTask(scheduleTask);
		record.setScheduleTime(scheduleTime);
		ServiceResult<Map<String, Object>>  sr = asAccessExamineScheduleService.updateByPrimaryKeySelective(record);
		String count = String.valueOf( sr.getData().get("count"));
		return count;
	}
	/**
	 * 初始化进入现场考查任务界面
	 * @param request
	 * @param year
	 * @param mav
	 * @return
	 */
	@RequestMapping("scene")
	public String scene(HttpServletRequest request,
			@RequestParam("year")String year,Model mav){
		mav.addAttribute("year", year);
		return "page/majorEvaluation/siteVisitMyInspection";
	}
	@RequestMapping("sceneAccessYear")
	@ResponseBody
	public String getSceneAccessYear(HttpServletRequest request){
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> sr = asAccessExamineSceneService.findAccessYear();
		jsonResult.setData(sr.getData());
		jsonResult.setOk(sr.isOk());
		jsonResult.setComment(sr.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("sceneAccessSpecialty")
	@ResponseBody
	public String getSceneAccessSpecialty(HttpServletRequest request){
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		Integer accessId=request.getParameter("accessId")==null?null:Integer.valueOf(request.getParameter("accessId"));
		Integer academyId=request.getParameter("academyId")==null?null:Integer.valueOf(request.getParameter("academyId"));
		Integer specialtyId=request.getParameter("specialtyId")==null?null:Integer.valueOf(request.getParameter("specialtyId"));
		ServiceResult<Map<String,Object>> serviceResult = asAccessExamineSceneService.findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(accessId,academyId,specialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("sceneExamineScene")
	@ResponseBody
	public String getExamineScene(HttpServletRequest request){
		JsonResult jsonResult = new JsonResult();
		Integer accessId=request.getParameter("accessId")==null?null:Integer.valueOf(request.getParameter("accessId"));
		Integer academyId=request.getParameter("academyId")==null?null:Integer.valueOf(request.getParameter("academyId"));
		Integer specialtyId=request.getParameter("specialtyId")==null?null:Integer.valueOf(request.getParameter("specialtyId"));
		ServiceResult<Map<String, Object>> serviceResult = asAccessExamineSceneService.selectValues(accessId, academyId, specialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("sceneExamineExpert")
	@ResponseBody
	public String getSceneExamineExpert(HttpServletRequest request){
		Integer accessSpecialtyId = request.getParameter("accessSpecialtyId")==null?null:Integer.valueOf(request.getParameter("accessSpecialtyId"));
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String, Object>> serviceResult=asAccessExamineSceneService.getExamineExpert(accessSpecialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("sceneInsertSceneTasks")
	@ResponseBody
	public String insertSceneTasks(HttpServletRequest request){
		String[] inspectStartTimes = request.getParameterValues("inspectStartTime");
		String[] inspectEndTimes = request.getParameterValues("inspectEndTime");
		//String[] inspectTypeNames = request.getParameterValues("inspectTypeName");
		String[] expertIds = request.getParameterValues("expertId");
		//String[] inspectContents = request.getParameterValues("inspectContent");
		String[] inspectTypeIds = request.getParameterValues("inspectTypeId");
		String[] accessSpecialtyIds = request.getParameterValues("accessSpecialtyId");
		
		List<AsAccessExamineScene> list = new ArrayList<AsAccessExamineScene>();
		Date date1 ,date2;
		for(int i=0;i<inspectStartTimes.length;i++){
			AsAccessExamineScene a = new AsAccessExamineScene();
		    try {
		    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
				date1 = sdf.parse(inspectStartTimes[i]);
				date2 = sdf.parse(inspectEndTimes[i]);
				a.setInspectStartTime(date1);
				a.setInspectEndTime(date2);
			} catch (ParseException e) {
				e.printStackTrace();
			}
			//a.setInspectContent(inspectContents[i]);
			//a.setInspectStatus(inspectTypeNames[i]);
			a.setExpertId(Integer.valueOf(expertIds[i]));
			a.setAccessSpecialtyId(Integer.valueOf(accessSpecialtyIds[i]));
			a.setInspectTypeId(Integer.valueOf(inspectTypeIds[i]));
			list.add(a);
		}
		ServiceResult<Map<String, Object>> sr = asAccessExamineSceneService.insertSceneTasks(list);
		String count = String.valueOf(sr.getData().get("count")) ;
		return count;
	}
	@RequestMapping("sceneGetCodeType")
	@ResponseBody
	public String getCodeType(HttpServletRequest request){
		String inspectTypeId = request.getParameter("inspectTypeId");
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String, Object>> serviceResult=asAccessExamineSceneService.selectByCodeType(inspectTypeId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	@RequestMapping("sceneInspectType")
	public ModelAndView getInspectType(HttpServletRequest request,ModelAndView mav) {
		String sceneId = request.getParameter("sceneId");
		String accessYear = request.getParameter("accessYear");
		String inspectTypeId = request.getParameter("inspectTypeId");
		String inspectStartTime= request.getParameter("inspectStartTime");
		String inspectEndTime= request.getParameter("inspectEndTime");
		String inspectTypeName ="";
		try {
			inspectTypeName = new String(request.getParameter("inspectTypeName").getBytes("ISO-8859-1"),"UTF-8");
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
		
		Integer accessYearId = request.getParameter("accessYearId")==null?null:Integer.valueOf(request.getParameter("accessYearId"));
		Integer accessAcademyId = request.getParameter("accessAcademyId")==null?null:Integer.valueOf(request.getParameter("accessAcademyId"));
		Integer accessSpcialtyId = request.getParameter("accessSpcialtyId")==null?null:Integer.valueOf(request.getParameter("accessSpcialtyId"));
		
		String accessAcademy,accessSpcialty;
		try {
			 accessAcademy = new String(request.getParameter("accessAcademy").getBytes("ISO-8859-1"),"UTF-8");
			 accessSpcialty = new String(request.getParameter("accessSpcialty").getBytes("ISO-8859-1"),"UTF-8");
			mav.addObject("accessAcademy", accessAcademy);
			mav.addObject("accessSpcialty", accessSpcialty);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		//ServiceResult<Map<String, Object>> serviceResult=asAccessExamineSceneService.selectByCodeType("inspect_type");
		AsAccessExamineScene snece =  asAccessExamineSceneService.selectByPrimaryKey(Integer.valueOf(sceneId));
		String inspectContent = snece.getInspectContent();
		//JsonResult jsonResult = new JsonResult();
		//jsonResult.setData(serviceResult.getData());
		//jsonResult.setOk(serviceResult.isOk());
		//jsonResult.setComment(serviceResult.getComment());
		//JSONObject json = JSONObject.fromBean(jsonResult);
		//mav.addObject("inspectTypes",json.toString());
		mav.addObject("sceneId", sceneId);
		mav.addObject("accessYear", accessYear);
		mav.addObject("inspectTypeId", inspectTypeId);
		mav.addObject("inspectTypeName", inspectTypeName);
		mav.addObject("inspectContent", inspectContent);
		mav.addObject("accessYearId", accessYearId);
		mav.addObject("accessAcademyId", accessAcademyId);
		mav.addObject("accessSpcialtyId", accessSpcialtyId);
		mav.addObject("inspectStartTime", inspectStartTime);
		mav.addObject("inspectEndTime", inspectEndTime);
		mav.setViewName("page/majorEvaluation/siteVisitRecord");
		return mav;
	}
	@RequestMapping("sceneUpdateSceneTasks")
	@ResponseBody
	public String updateSceneTasks(HttpServletRequest request){
		String inspectStartTime = request.getParameter("inspectStartTime");
		String inspectEndTime = request.getParameter("inspectEndTime");
		Integer expertId = request.getParameter("expertId")==null?null:Integer.valueOf(request.getParameter("expertId"));
		Integer id = request.getParameter("id")==null?null:Integer.valueOf(request.getParameter("id"));
		Integer accessSpecialtyId = request.getParameter("accessSpecialtyId")==null?null:Integer.valueOf(request.getParameter("accessSpecialtyId"));
		
		Integer inspectTypeId = request.getParameter("inspectTypeId")==null?null:Integer.valueOf(request.getParameter("inspectTypeId"));
		String inspectContent = request.getParameter("inspectContent");
		AsAccessExamineScene record = new AsAccessExamineScene();
		if(expertId!=null){
			record.setExpertId(expertId);
		}
		if(id!=null){
			record.setId(id);
		}
		if(accessSpecialtyId!=null){
			record.setAccessSpecialtyId(accessSpecialtyId);
		}
		if(inspectContent!=null){
			record.setInspectContent(inspectContent);
		}
		if(inspectTypeId!=null){
			record.setInspectTypeId(inspectTypeId);
		}
		Date date1,date2;
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			if(inspectStartTime!=null){
				date1 = sdf.parse(inspectStartTime);
				record.setInspectStartTime(date1);
			}
			if(inspectEndTime!=null){
				date2 = sdf.parse(inspectEndTime);
				record.setInspectEndTime(date2);
			}
		} catch (ParseException e) {
			e.printStackTrace();
		}
		ServiceResult<Map<String, Object>>  sr = asAccessExamineSceneService.updateByPrimaryKeySelective(record);
		String count = String.valueOf(sr.getData().get("count"));
		return count;
	}
	@RequestMapping("sceneUpdateSceneTasks2")
	public ModelAndView updateSceneTasks2(HttpServletRequest request,ModelAndView mav){
		Integer id = request.getParameter("id")==null?null:Integer.valueOf(request.getParameter("id"));
		String inspectContent = request.getParameter("inspectContent");
		String isback = request.getParameter("isback");
		
		Integer xckcYearId = request.getParameter("xckcYearId")==null?null:Integer.valueOf(request.getParameter("xckcYearId"));
		Integer xckcAcademyId = request.getParameter("xckcAcademyId")==null?null:Integer.valueOf(request.getParameter("xckcAcademyId"));
		Integer xckcSpcialtyId = request.getParameter("xckcSpcialtyId")==null?null:Integer.valueOf(request.getParameter("xckcSpcialtyId"));
		
		AsAccessExamineScene record = new AsAccessExamineScene();
		if(id!=null){
			record.setId(id);
		}
		if(inspectContent!=null){
			record.setInspectContent(inspectContent);
		}
		ServiceResult<Map<String, Object>>  sr = asAccessExamineSceneService.updateByPrimaryKeySelective(record);
		mav.addObject("xckcYearId", xckcYearId);
		mav.addObject("xckcAcademyId", xckcAcademyId);
		mav.addObject("xckcSpcialtyId", xckcSpcialtyId);
		mav.addObject("isback", isback);
		mav.setViewName("page/majorEvaluation/siteVisitMyInspection");
		return mav;
	}
	@RequestMapping("sceneDeleteSceneTasks")
	@ResponseBody
	public String deleteSceneTasks(HttpServletRequest request){
	    String[] ids = request.getParameter("ids").split(",");
		ServiceResult<Map<String, Object>> sr =asAccessExamineSceneService.deleteByPrimaryKeys(ids);
		String count = String.valueOf(sr.getData().get("count")) ;
		return count;
	}
	/**
	 * 初始化进入专家评估结论
	 * @param request
	 * @param year
	 * @param mav
	 * @return
	 */
	@RequestMapping("assessResult")
	public String assessResult(HttpServletRequest request,
			@RequestParam("year")String year,Model mav){
		mav.addAttribute("year", year);
		return "page/majorEvaluation/siteVisitMyAssessment";
	}
	/*@RequestMapping("assessResultShowInspectContent")
	@ResponseBody
	public String showInspectContent(HttpServletRequest request){
		Integer accessId=request.getParameter("accessId")==null?null:Integer.valueOf(request.getParameter("accessId"));
		Integer academyId=request.getParameter("academyId")==null?null:Integer.valueOf(request.getParameter("academyId"));
		Integer specialtyId=request.getParameter("specialtyId")==null?null:Integer.valueOf(request.getParameter("specialtyId"));
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String, Object>> serviceResult = asAccessExamineSceneService.selectValues(accessId, academyId, specialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}*/
	@RequestMapping("assessResultAccessSpecialty")
	@ResponseBody
	public String getassessResultAccessSpecialty(HttpServletRequest request){
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		Integer accessId=request.getParameter("accessId")==null?null:Integer.valueOf(request.getParameter("accessId"));
		Integer academyId=request.getParameter("academyId")==null?null:Integer.valueOf(request.getParameter("academyId"));
		Integer specialtyId=request.getParameter("specialtyId")==null?null:Integer.valueOf(request.getParameter("specialtyId"));
		ServiceResult<Map<String,Object>> serviceResult = asAccessResultService.findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(accessId,academyId,specialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	/**
	 * 查看现场考查评分
	 * @param request
	 * @return
	 */
	@RequestMapping("assessResultShowSceneScore")
	@ResponseBody
	public String showSceneScoreComments(HttpServletRequest request){
		Integer architectureId = request.getParameter("architectureId")==null?null:Integer.valueOf(request.getParameter("architectureId"));
		Integer  recordType = request.getParameter(" recordType")==null?null:Integer.valueOf(request.getParameter(" recordType"));
		Integer  sid = request.getParameter("sid")==null?null:Integer.valueOf(request.getParameter("sid"));
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		JsonResult jsonResult = new JsonResult(); 
		ServiceResult<List<AsAccessSceneScoreVo>> serviceResult = asAccessResultService.showSceneScoreComments(architectureId,"".equals(userId)||userId==null?null:Integer.valueOf(userId), recordType,sid);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	/**
	 * 查看现场考查评分体系指标
	 * @param request
	 * @return
	 */
	@RequestMapping("assessResultShowArchitecture")
	@ResponseBody
	public String showArchitecture(HttpServletRequest request){
		Integer architectureId = request.getParameter("architectureId")==null?null:Integer.valueOf(request.getParameter("architectureId"));
		JsonResult jsonResult = new JsonResult(); 
		ServiceResult<List<AsAccessSceneScoreVo>> serviceResult = asAccessResultService.showArchitecture(architectureId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	/**
	 * 插入现场考查评分
	 * @param request
	 * @return
	 */
	@RequestMapping("assessResultInsertSceneScoreAndIdea")
	@ResponseBody
	public String insertSceneScoreAndIdea(HttpServletRequest request){
		String[] scores  = request.getParameterValues("score");
		String[] standartDetailIds = request.getParameterValues("standartDetailId");
		String[] ideas = request.getParameterValues("idea");
		String[] oneIds = request.getParameterValues("oneId");
		String accessSpecialtyId = request.getParameter("accessSpecialtyId");
		String userId = "",userName = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		List<AsAccessSiteCheckRecord> list = new ArrayList<AsAccessSiteCheckRecord>();
		for(int i=0;i<scores.length;i++){
			AsAccessSiteCheckRecord a = new AsAccessSiteCheckRecord();
			a.setAccessSpecialtyId(Integer.parseInt(accessSpecialtyId));
			a.setRecordType((byte)0);
			a.setScore(scores[i].equals("")?null:new BigDecimal(scores[i]));
			a.setStandardDetailId(Integer.valueOf(standartDetailIds[i]));
			a.setUserId(Integer.valueOf(userId));
			a.setUserName(userName);
			list.add(a);
		}
		ServiceResult<Map<String, Object>>  result = asAccessResultService.insertSceneScore(list);
		String count = String.valueOf(result.getData().get("count"));
		List<AsAccessSiteCheckRecordidea> list2 = new ArrayList<AsAccessSiteCheckRecordidea>();
		for(int i = 0;i<ideas.length;i++){
			AsAccessSiteCheckRecordidea b = new AsAccessSiteCheckRecordidea();
			b.setAccessSpecialtyId(Integer.parseInt(accessSpecialtyId));
			b.setPersonalidea(ideas[i]);
			b.setRecordType(0);
			b.setStandardDetailId(Integer.valueOf(oneIds[i]));
			b.setUserId(Integer.valueOf(userId));
			b.setUserName(userName);
			list2.add(b);
		}
		 ServiceResult<Map<String, Object>>  result1 = asAccessResultService.insertSceneIdea(list2);
		 String count1 = String.valueOf(result.getData().get("count"));
		 return "插入成功！";
	}
	/**
	 * 修改现场考查评分
	 * @param request
	 * @return
	 */
	@RequestMapping("assessResultUpdateSceneScore")
	@ResponseBody
	public String updateSceneScore(HttpServletRequest request){
		BigDecimal score  = request.getParameter("score")==null?null:new BigDecimal(request.getParameter("score"));
		Integer standartDetailId = request.getParameter("standartDetailId")==null?null:Integer.valueOf(request.getParameter("standartDetailId"));
		Integer accessSpecialtyId = request.getParameter("accessSpecialtyId")==null?null:Integer.valueOf(request.getParameter("accessSpecialtyId"));
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		AsAccessSiteCheckRecord  record = new AsAccessSiteCheckRecord();
		record.setAccessSpecialtyId(accessSpecialtyId);
		record.setRecordType((byte)0);
		record.setScore(score);
		record.setStandardDetailId(standartDetailId);
		record.setUserId("".equals(userId)||userId==null?null:Integer.valueOf(userId));
		 ServiceResult<Map<String, Object>>  result =  asAccessResultService.updateScoreBySelectiveSelective(record);
		 String count = String.valueOf(result.getData().get("count"));
		 if("1".equals(count)){
			 return "修改成功！";
		 }else{
			 return "修改失败！";
		 }
	}
	/**
	 * 修改现场考查评分个人意见
	 * @param request
	 * @return
	 */
	@RequestMapping("assessResultUpdateSceneIdea")
	@ResponseBody
	public String updateSceneIdea(HttpServletRequest request){
		String personalIdea  = request.getParameter("personalIdea");
		Integer standartDetailId = request.getParameter("standartDetailId")==null?null:Integer.valueOf(request.getParameter("standartDetailId"));
		Integer accessSpecialtyId = request.getParameter("accessSpecialtyId")==null?null:Integer.valueOf(request.getParameter("accessSpecialtyId"));
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		AsAccessSiteCheckRecordidea  record = new AsAccessSiteCheckRecordidea();
		record.setAccessSpecialtyId(accessSpecialtyId);
		record.setRecordType(0);
		record.setPersonalidea(personalIdea);
		record.setStandardDetailId(standartDetailId);
		record.setUserId("".equals(userId)||userId==null?null:Integer.valueOf(userId));
		 ServiceResult<Map<String, Object>>  result =  asAccessResultService.updateIdeaBySelectiveSelective(record);
		 String count = String.valueOf(result.getData().get("count"));
		 if("1".equals(count)){
			 return "修改成功！";
		 }else{
			 return "修改失败！";
		 }
	}
	/**
	 * 获取评估专家评分记录
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 */
	@RequestMapping("findRecord")
	@ResponseBody
	public String findRecord(HttpServletRequest request,
			@RequestParam("accessSpecialtyId")Integer accessSpecialtyId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = asAccessResultService.findRecord(accessSpecialtyId,(byte)0);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	/**
	 * 查看该用户是否做过现场评分
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 */
	@RequestMapping("findIsRecord")
	@ResponseBody
	public String findIsRecord(HttpServletRequest request,
			@RequestParam("accessSpecialtyId")Integer accessSpecialtyId,@RequestParam("recordType")int recordType) {
		String suserId = "";
		try {
			suserId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+suserId);
		}
		Integer userId = "".equals(suserId)||suserId==null?null:Integer.valueOf(suserId);
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = asAccessResultService.findIsRecord(accessSpecialtyId,userId,(byte)recordType);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	/**
	 * 获得做过现场考查的专家的信息
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 */
	@RequestMapping("assessResultGetExpertInfo")
	@ResponseBody
	public String getExpertInfo(HttpServletRequest request,
			@RequestParam("accessSpecialtyId")Integer accessSpecialtyId){
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult =asAccessResultService.getExpertInfo(accessSpecialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	/**
	 * 根据专家id和专业评估id查询专家现场考查信息
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 */
	@RequestMapping("assessResultGetExpertInspectInfo")
	@ResponseBody
	public String getExpertInspectInfo(HttpServletRequest request,
			@RequestParam("accessSpecialtyId")Integer accessSpecialtyId,@RequestParam("userId")Integer userId){
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult =asAccessResultService.getExpertInspectInfo(userId, accessSpecialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
}
