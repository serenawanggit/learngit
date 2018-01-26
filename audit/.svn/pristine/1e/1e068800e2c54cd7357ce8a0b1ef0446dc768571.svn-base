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
import audit.common.ServiceResult;
import audit.model.assess.AsAccessSiteCheckReport;
import audit.service.access.SiteCheckConclusionService;
import audit.util.CookieUtil;

/**
 * 现场考察结论控制器
 * @author yjq
 * 2015-6-30
 */
@Controller
@RequestMapping("siteCheck")
public class SiteCheckConclusionController {

	private final static Logger log = Logger.getLogger(SiteCheckConclusionController.class); 
	
	@Resource
	private SiteCheckConclusionService siteCheckConclusionService;
	
	/**
	 * 现场考察结论页面
	 * @param request
	 * @param year
	 * @return
	 * @author yjq
	 * 2015-6-30
	 */
	@RequestMapping("view")
	public String selfView(HttpServletRequest request,
			@RequestParam("year")String year,Model mav) {
		mav.addAttribute("year", year);
		return "page/majorEvaluation/selfEvaluationZY";
	}
	
	/**
	 * 获取评分记录
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 * @author yjq
	 * 2015-6-30
	 */
	@RequestMapping("findRecord")
	@ResponseBody
	public String findRecord(HttpServletRequest request,
			@RequestParam("id")Integer accessSpecialtyId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = siteCheckConclusionService.findRecord(accessSpecialtyId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 保存评分
	 * @param request
	 * @param accessSpecialtyId
	 * @param score
	 * @param detailId
	 * @return
	 * @author yjq
	 * 2015-6-30
	 */
	@RequestMapping("saveScore")
	@ResponseBody
	public String saveScore(HttpServletRequest request,
			@RequestParam("id")Integer accessSpecialtyId,
			@RequestParam("score")Double score,
			@RequestParam("detailId")Integer detailId) {
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = siteCheckConclusionService.saveScore(accessSpecialtyId, score, detailId, Integer.parseInt(userId));
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 获取报告记录
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 * @author yjq
	 * 2015-6-30
	 */
	@RequestMapping("findReport")
	@ResponseBody
	public String findReport(HttpServletRequest request,
			@RequestParam("id")Integer accessSpecialtyId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<List<AsAccessSiteCheckReport>> serviceResult = siteCheckConclusionService.findReport(accessSpecialtyId);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setData(serviceResult.getData());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 新增报告节点
	 * @param request
	 * @param name
	 * @return
	 * @author yjq
	 * 2015-7-2
	 */
	@RequestMapping("addNewNode")
	@ResponseBody
	public String addNewNode(HttpServletRequest request,
			@RequestParam("name")String name,
			@RequestParam("accessSpecialtyId")Integer accessSpecialtyId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Integer> serviceResult = siteCheckConclusionService.addNewNode(name, accessSpecialtyId);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setData(serviceResult.getData());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 删除报告节点
	 * @param request
	 * @param name
	 * @return
	 * @author yjq
	 * 2015-7-2
	 */
	@RequestMapping("deleteNode")
	@ResponseBody
	public String deleteNode(HttpServletRequest request,
			@RequestParam("id")Integer id) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = siteCheckConclusionService.deleteNode(id);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 保存报告
	 * @param request
	 * @param accessSpecialtyId
	 * @param score
	 * @param detailId
	 * @return
	 * @author yjq
	 * 2015-6-30
	 */
	@RequestMapping("saveReport")
	@ResponseBody
	public String saveReport(HttpServletRequest request,
			@RequestParam("content")String content,
			@RequestParam("nodeId")Integer nodeId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = siteCheckConclusionService.saveReport(content, nodeId);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 报告导出
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 * @author yjq
	 * 2015-6-30
	 */
	@RequestMapping("exportRecord")
	public String exportRecord(HttpServletRequest request,
			@RequestParam("id")Integer accessSpecialtyId,Model mav) {
		mav.addAttribute("accessSpecialtyId", accessSpecialtyId);
		mav.addAttribute("isExport", 1);
		return "page/majorEvaluation/siteReportShow";
	}
	
	/**
	 * 报告导出
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 * @author yjq
	 * 2015-6-30
	 */
	@RequestMapping("download")
	public String download(HttpServletRequest request,
			@RequestParam("fileInfo")String fileInfo,Model mav) {
		mav.addAttribute("fileInfo", fileInfo);
		return "page/majorEvaluation/download";
	}
	
	/**
	 * 报告预览
	 * @param request
	 * @param accessSpecialtyId
	 * @return
	 * @author yjq
	 * 2015-6-30
	 */
	@RequestMapping("showRecord")
	public String showRecord(HttpServletRequest request,
			@RequestParam("id")Integer accessSpecialtyId,
			Model mav) {
		mav.addAttribute("accessSpecialtyId", accessSpecialtyId);
		mav.addAttribute("isExport", 0);
		return "page/majorEvaluation/siteReportShow";
	}
	
}
