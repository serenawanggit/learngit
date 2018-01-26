package audit.controller.access;

import java.io.UnsupportedEncodingException;
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
import audit.common.Page;
import audit.common.ServiceResult;
import audit.controller.quality.ZLRWController;
import audit.model.assess.AsAccessDataInfo;
import audit.model.assess.AsAccessIndexBase;
import audit.model.assess.AsAccessProfileData;
import audit.model.assess.AsAccessProfileDataDetail;
import audit.model.assess.AsAccessSelfEvalutionReport;
import audit.model.quality.query.IndicatorQuery;
import audit.service.access.SelfEvaluationService;
import audit.util.CookieUtil;

@Controller
@RequestMapping("self")
public class SelfEvaluationController {
	
	private final static Logger log = Logger.getLogger(ZLRWController.class); 
	
	@Resource
	private SelfEvaluationService selfEvaluationService;
	
	/**
	 * 专业评估首页
	 * @param request
	 * @param year
	 * @return
	 * @author yjq
	 * 2015-5-14
	 */
	@RequestMapping("headPage")
	public String headPage(HttpServletRequest request,
			@RequestParam(value = "year", required = false, defaultValue="2015")String year,
			@RequestParam(value = "mid", required = false, defaultValue="1")String mid,ModelAndView mav) {
		mav.addObject("year", year);
		mav.addObject("mid", mid);
		mav.setViewName("page/majorEvaluation/head");
		return "page/majorEvaluation/head";
	}
	
	/**
	 * 专业自评页面
	 * @param request
	 * @param year
	 * @return
	 * @author yjq
	 * 2015-5-14
	 */
	@RequestMapping("selfView")
	public String selfView(HttpServletRequest request,
			@RequestParam(value = "year", required = false, defaultValue="2015")String year,
			@RequestParam(value = "operateType", required = false, defaultValue="1")String operateType,Model model) {
		model.addAttribute("year", year);
		model.addAttribute("operateType", operateType);
		return "page/majorEvaluation/selfEvaluationZY";
	}
	
	/**
	 * 获取用户所在的学院
	 * @return
	 * @author yjq
	 * 2015-6-18
	 */
	@RequestMapping("getUserGroup")
	@ResponseBody
	public String getUserGroup(HttpServletRequest request,
			@RequestParam("year")String year) {
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		//测试id
		//userId = "113";
		
		ServiceResult<List<Map<String,Object>>> serviceResult = selfEvaluationService.getUserGroup(year,userId,(byte)1);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	
	/**
	 * 获取自评专业信息
	 * @param request
	 * @param year
	 * @return
	 * @author yjq
	 * 2015-5-14
	 */
	@RequestMapping("getAssessSpecialty")
	@ResponseBody
	public String getAssessSpecialty(HttpServletRequest request,
			@RequestParam("year")String year,
			@RequestParam("orgId")Integer orgId) {
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		//测试id
		//userId = "113";
		
		ServiceResult<Map<String,Object>> serviceResult = selfEvaluationService.getAssessSpecialty(year,userId,(byte)1, orgId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	
	/**
	 * 获取评估指标体系详细内容
	 * @param request
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-14
	 */
	@RequestMapping("getAssessStandardDetail")
	@ResponseBody
	public String getAssessStandardDetail(HttpServletRequest request,
			@RequestParam("standardId")Integer standardId,
			@RequestParam("parentId")Integer parentId,
			@RequestParam("specialtyId")Integer specialtyId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = selfEvaluationService.getAssessStandardDetailById(standardId, parentId, specialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 根据评估指标体系指标名称id获取相应的标准
	 * @param request
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-14
	 */
	@RequestMapping("getAllStandardByDetail")
	@ResponseBody
	public String getAllStandardByDetail(HttpServletRequest request,
			@RequestParam("detailId")Integer detailId,
			@RequestParam("specialtyId")Integer specialtyId,
			@RequestParam("year")String year) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = selfEvaluationService.getAllStandardByDetailById(detailId, specialtyId, year);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 保存自评分
	 * @param request
	 * @param detailId 评估体系标准id
	 * @param score	自评分	
	 * @param dataIds 支撑材料
	 * @return
	 * @author yjq
	 * 2015-5-14
	 */
	@RequestMapping("saveSelfScore")
	@ResponseBody
	public String saveSelfScore(HttpServletRequest request,
			@RequestParam("detailId")Integer detailId,
			@RequestParam("specialtyId")Integer specialtyId,
			@RequestParam("score")Double score,
			@RequestParam("dataIds")String dataIds,
			@RequestParam("str")String str) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = selfEvaluationService.saveSelfScore(detailId, score, dataIds, specialtyId, str, request);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 自评报告页面
	 * @param request
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-5-15
	 */
	@RequestMapping("selfReportView")
	public String  reportView(HttpServletRequest request,
			@RequestParam(value = "operateType", required = false, defaultValue="1")String operateType,
			@RequestParam(value = "year", required = false, defaultValue="2015")String year,Model mav) {
		mav.addAttribute("year", year);
		mav.addAttribute("operateType", operateType);
		return "page/majorEvaluation/reportZY";
	}
	
	/**
	 * 自评报告获取
	 * @param request
	 * @param str
	 * @return
	 * @author yjq
	 * 2015-5-15
	 */
	@RequestMapping("getReport")
	@ResponseBody
	public String getReport(HttpServletRequest request,
			@RequestParam("specialtyId")Integer specialtyId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<List<AsAccessSelfEvalutionReport>> serviceResult = selfEvaluationService.getSelfReport(specialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 自评报告更新
	 * @param request
	 * @param str
	 * @return
	 * @author yjq
	 * 2015-5-15
	 */
	@RequestMapping("updateReportDate")
	@ResponseBody
	public String updateReportDate(HttpServletRequest request,
			@RequestParam("specialtyId")Integer specialtyId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = selfEvaluationService.updateReportDate( specialtyId);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 自评报告更新
	 * @param request
	 * @param str
	 * @return
	 * @author yjq
	 * 2015-5-15
	 */
	@RequestMapping("getIndexValue")
	@ResponseBody
	public String getIndexValue(HttpServletRequest request,
			@RequestParam("specialtyId")Integer specialtyId,
			@RequestParam("measureId")String measureId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Integer> serviceResult = selfEvaluationService.getIndexValue( specialtyId, measureId);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		jsonResult.setData(serviceResult.getData());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	
	/**
	 * 自评报告获取
	 * @param request
	 * @param str
	 * @return
	 * @author yjq
	 * 2015-5-15
	 */
	@RequestMapping("getReportP")
	@ResponseBody
	public String getReportP(HttpServletRequest request,
			@RequestParam("specialtyId")Integer specialtyId,
			@RequestParam("year")String year) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<List<AsAccessSelfEvalutionReport>> serviceResult = selfEvaluationService.getSelfReportP(specialtyId, year);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 自评报告保存
	 * @param request
	 * @param str
	 * @return
	 * @author yjq
	 * 2015-5-15
	 */
	@RequestMapping("saveReport")
	@ResponseBody
	public String saveReport(HttpServletRequest request,
			@RequestParam("str") String str) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = selfEvaluationService.saveSelfReport(str);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 根据图片名搜索用户的图片
	 * @param request
	 * @param name
	 * @return
	 * @author yjq
	 * 2015-5-19
	 */
	@RequestMapping("getFileByName")
	@ResponseBody
	public String getImgByName(HttpServletRequest request,
			@RequestParam("name")String name) {
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		//userId ="114";
		ServiceResult<List<AsAccessDataInfo>> serviceResult = selfEvaluationService.getUserDataByName(request, name, userId);
		if(!serviceResult.isOk()){
			jsonResult.setOk(false);
			jsonResult.setComment(serviceResult.getComment());
			JSONObject json = JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 获取客观指标
	 * @param request
	 * @param query 查询条件
	 * @return
	 * @author yjq
	 * 2015-4-20
	 */
	@RequestMapping("getObjectiveIndicators" )
	@ResponseBody
	public String getObjectiveIndicators(HttpServletRequest request,
			IndicatorQuery query) {
		JsonResult json = new JsonResult();
		ServiceResult<Page<AsAccessIndexBase>> serviceResult = selfEvaluationService.getIndicatorsByQuery(query);
		if(!serviceResult.isOk()){
			json.setOk(false);
			json.setComment(serviceResult.getComment());
			JSONObject jsonObject = JSONObject.fromBean(json);
			return jsonObject.toString();
		}
		json.setData(serviceResult.getData());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 判断是否可以进入
	 * @param request
	 * @return
	 * @author yjq
	 * 2015-6-11
	 */
	@RequestMapping("checkCouldIn" )
	@ResponseBody
	public String checkCouldIn(HttpServletRequest request,
			@RequestParam(value="year",required=false,defaultValue="")String year,
			@RequestParam("type")Integer type) {
		JsonResult json = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		//测试id
		//userId = "113";
		
		ServiceResult<Integer> serviceResult = selfEvaluationService.checkCouldIn(year, userId, type);
		json.setComment(serviceResult.getComment());
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 修改评估专业状态
	 * @param request
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-6-19
	 */
	@RequestMapping("changeStatus" )
	@ResponseBody
	public String changeStatus(HttpServletRequest request,
			@RequestParam("id")Integer accessSpecailtyId,
			@RequestParam("type")String type) {
		ServiceResult<Boolean> serviceResult = selfEvaluationService.changeStatus(accessSpecailtyId, type);
		if(!serviceResult.isOk()){
			return serviceResult.getComment();
		}
		return "success";
	}
	
	/**
	 * 在线预览处理
	 * @param request
	 * @param id 文件id
	 * @return
	 * @author yjq
	 * 2015-6-25
	 */
	@RequestMapping("onlinePreview" )
	@ResponseBody
	public String onlinePreview(HttpServletRequest request,
			@RequestParam("id")Integer id) {
		ServiceResult<String> serviceResult = selfEvaluationService.onlinePreview(id, request);
		if(!serviceResult.isOk()){
			return serviceResult.getComment();
		}
		return serviceResult.getData();
	}
	
	/**
	 * 预览页面
	 * @param request
	 * @param year
	 * @return
	 * @author yjq
	 * 2015-5-14
	 */
	@RequestMapping("preview")
	public String preview(HttpServletRequest request,
			@RequestParam("wj")String wj,Model mav) {
		mav.addAttribute("wj", wj);
		return "page/majorEvaluation/readonline";
	}
	
	/**
	 * 专业简况表页面
	 * @param request
	 * @param year
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("profile")
	public String profile(HttpServletRequest request,
			@RequestParam(value = "year", required = false, defaultValue="2015")String year, Model mav) {
		mav.addAttribute("year", year);
		return "page/majorEvaluation/profile_table";
	}
	
	/**
	 * 专业简况表页面
	 * @param request
	 * @param year
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("exportProfile")
	public String exportProfile(HttpServletRequest request,
			@RequestParam(value = "versionId")String versionId, Model mav) {
		mav.addAttribute("versionId", versionId);
		return "page/majorEvaluation/import_profile_table";
	}
	
	/**
	 * 根据年份和专业id获取所有版本
	 * @param request
	 * @param year
	 * @param spcialtyId
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("getAllVersion" )
	@ResponseBody
	public String getAllVersion(HttpServletRequest request,
			@RequestParam("year") Integer year,
			@RequestParam("accessSpecialtyId") Integer accessSpecialtyId) {
		JsonResult json = new JsonResult();
		ServiceResult<List<AsAccessProfileData>> serviceResult = selfEvaluationService.getAllVersion(year, accessSpecialtyId);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 根据版本id获取内容
	 * @param request
	 * @param year
	 * @param spcialtyId
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("getProfileDataDetail" )
	@ResponseBody
	public String getProfileDataDetail(HttpServletRequest request,
			@RequestParam("versionId") Integer versionId) {
		JsonResult json = new JsonResult();
		ServiceResult<List<AsAccessProfileDataDetail>> serviceResult = selfEvaluationService.getProfileDataDetail(versionId);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 根据评估专业id获取专业信息
	 * @param request
	 * @param year
	 * @param spcialtyId
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("getSpecialtyMsg" )
	@ResponseBody
	public String getSpecialtyMsg(HttpServletRequest request,
			@RequestParam("accessSpecialtyId") Integer accessSpecialtyId) {
		JsonResult json = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = selfEvaluationService.getSpecialtyMsg(accessSpecialtyId);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	
	/**
	 * 创建新版本
	 * @param request
	 * @param title
	 * @param versionId
	 * @param data
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("createNewVersion" )
	@ResponseBody
	public String createNewVersion(HttpServletRequest request,
			@RequestParam("year") Integer year,
			@RequestParam("accessSpecialtyId") Integer accessSpecialtyId,
			@RequestParam("specialtyName") String specialtyName) {
		JsonResult json = new JsonResult();
		ServiceResult<Integer> serviceResult = selfEvaluationService.createNewVersion(year, accessSpecialtyId, specialtyName);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 保存简况表数据
	 * @param request
	 * @param title
	 * @param versionId
	 * @param data
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("deleteProfile")
	@ResponseBody
	public String deleteProfile(HttpServletRequest request,
			@RequestParam("versionId") Integer versionId) {
		JsonResult json = new JsonResult();
		ServiceResult<Boolean> serviceResult = selfEvaluationService.deleteProfile( versionId);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 保存简况表数据
	 * @param request
	 * @param title
	 * @param versionId
	 * @param data
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("saveProfileData")
	@ResponseBody
	public String saveProfileData(HttpServletRequest request,
			@RequestParam("title") String title,
			@RequestParam("versionId") Integer versionId,
			@RequestParam("data") String data) {
		JsonResult json = new JsonResult();
		ServiceResult<Boolean> serviceResult = selfEvaluationService.saveProfileData(title, versionId, data);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 获取简况表数据
	 * @param request
	 * @param title
	 * @param versionId
	 * @param data
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	@RequestMapping("getProfileDataBySql")
	@ResponseBody
	public String getProfileDataBySql(HttpServletRequest request,
			@RequestParam("title") String title,
			@RequestParam("year") Integer year,
			@RequestParam("accessSpecialtyId") Integer accessSpecialtyId) {
		JsonResult json = new JsonResult();
		ServiceResult<List<Map<String,Object>>> serviceResult = selfEvaluationService.getProfileDataBySql(title, year, accessSpecialtyId);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	
	
}
