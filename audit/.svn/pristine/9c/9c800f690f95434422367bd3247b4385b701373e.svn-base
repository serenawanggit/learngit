package audit.controller.quality;

import java.io.UnsupportedEncodingException;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import audit.common.JsonResult;
import audit.common.Page;
import audit.common.ServiceResult;
import audit.model.quality.query.JdTaskQuery;
import audit.model.quality.query.JdZbQuery;
import audit.model.quality.query.TaskQuery;
import audit.model.quality.vo.JdTaskVo;
import audit.model.quality.vo.JdZbVo;
import audit.model.quality.vo.TaskVo;
import audit.service.quality.ZlrwService;
import audit.util.CookieUtil;

/**
 * 用户质量任务相关控制器
 * @author yjq
 * 2015-4-27
 */
@Controller
@RequestMapping("userZlRwController")
public class UserTaskController {

	
	private final static Logger log = Logger.getLogger(UserTaskController.class); 
	
	@Resource
	private ZlrwService zlrwService;

	/**
	 * 用户任务列表
	 * @param request
	 * @param query
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	@RequestMapping("userTaskView")
	public ModelAndView getUserZlRwTaskList(HttpServletRequest request,ModelAndView mav) {
		mav.setViewName("page/qualityMission/renWuGengXin");
		return mav;
	}
	
	/**
	 * 用户任务列表
	 * @param request
	 * @param query
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	@RequestMapping("userTaskList")
	@ResponseBody
	public String getUserTaskList(HttpServletRequest request,@RequestParam("currentPage") Integer currentPage) {
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		TaskQuery query = new TaskQuery();
		query.setUserId(Integer.parseInt(userId));
		//query.setUserId(198);
		query.setCurrentPage(currentPage);
		ServiceResult<Page<TaskVo>> serviceResult = zlrwService.getZlRwListByQuery(query);
		if(serviceResult.isOk()){
			jsonResult.setData(serviceResult.getData());
			JSONObject json = JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setOk(false);
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 用户任务详情
	 * @param request
	 * @param query
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	@RequestMapping("userTaskDetailsView")
	public ModelAndView getUserZlRwTaskDetails(HttpServletRequest request,ModelAndView mav,
			@RequestParam("id") Integer id) {
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		
		//质量任务信息
		ServiceResult<TaskVo> serviceResult = zlrwService.selectByPrimaryKey(id);
		mav.addObject("zlRw", serviceResult.getData());
		//我的进度
		ServiceResult<Map<String,Object>> myProgress = zlrwService.getProgress(Integer.parseInt(userId), id);
		if(myProgress.isOk()){
			mav.addObject("myXh", myProgress.getData().get("xh"));
		}else{
			mav.addObject("myXh", 0);
		}
		//最快进度
		ServiceResult<Map<String,Object>> fastProgress = zlrwService.getProgress(null, id);
		if(fastProgress.isOk()){
			mav.addObject("fastXh", myProgress.getData().get("xh"));
			mav.addObject("organizateName", myProgress.getData().get("name"));
		}else{
			mav.addObject("fastXh", 0);
			mav.addObject("organizateName", "暂无");
		}
		mav.setViewName("page/qualityMission/JinRuRenWu");
		return mav;
	}
	
	/**
	 * 用户阶段任务列表
	 * @param request
	 * @param query
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	@RequestMapping("userJdTaskList")
	@ResponseBody
	public String getUserJdTaskList(HttpServletRequest request,
			@RequestParam("id") Integer id,
			@RequestParam("currentPage") Integer currentPage) {
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		JdTaskQuery query = new JdTaskQuery();
		query.setZlrwid(id);
		//query.setUserId(198);
		query.setUserId(Integer.parseInt(userId));
		query.setCurrentPage(currentPage);
		ServiceResult<Page<JdTaskVo>> serviceResult = zlrwService.getJdTaskListByQuery(query);
		if(serviceResult.isOk()){
			jsonResult.setData(serviceResult.getData());
			JSONObject json = JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setOk(false);
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 判断是否可更新
	 * @param request
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-4-30
	 */
	@RequestMapping("checkUpdate")
	@ResponseBody
	public String ckeckUpdate(HttpServletRequest request,
			@RequestParam("id") Integer id) {
		JsonResult jsonResult = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		ServiceResult<Boolean> serviceResult = zlrwService.checkUpdate(id,Integer.parseInt(userId));
		if(!serviceResult.isOk()){
			jsonResult.setOk(false);
			jsonResult.setComment(serviceResult.getComment());
		}
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
		
	}
	
	
	/**
	 * 获取阶段任务详情
	 * @param request
	 * @param query
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	@RequestMapping("userTaskDetails")
	public ModelAndView getUserTaskDetails(HttpServletRequest request,JdTaskQuery query,ModelAndView mav) {
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		query.setUserId(Integer.parseInt(userId));
		//query.setUserId(198);
		query.setUserId(Integer.parseInt(userId));
		ServiceResult<Map<String,Object>> serviceResult = zlrwService.getJdTaskDetails(query);
		if(!serviceResult.isOk()){
			log.error("获取用户阶段任务列表出错，用户id:"+query.getUserId());
			//错误页面未定
			//TODO
		}
		mav.setViewName("page/qualityMission/UpdateTask");
		mav.addObject("task", serviceResult.getData().get("jdRw"));
		return mav;
	}
	
	/**
	 * 更新阶段任务
	 * @param request
	 * @param query
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	@RequestMapping("updateUserTask")
	@ResponseBody
	public String updateUserTask(HttpServletRequest request, JdTaskQuery query) {
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		query.setUserId(Integer.parseInt(userId));
		//query.setUserId(198);
		query.setUserId(Integer.parseInt(userId));
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = zlrwService.updateUserTaskByQuery(query);
		jsonResult.setComment(serviceResult.getComment());
		jsonResult.setOk(serviceResult.isOk());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 获取阶段任务客观指标信息
	 * @param request
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-4
	 */
	@RequestMapping("getJdZbList")
	@ResponseBody
	public String getJdZbList(HttpServletRequest request,
			@RequestParam("id")Integer id,
			@RequestParam("currentPage")Integer currentPage) {
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		JsonResult jsonResult = new JsonResult();
		JdZbQuery query = new JdZbQuery();
		query.setJdrwid(id);
		query.setUserId(Integer.parseInt(userId));
		//query.setUserId(198);
		query.setCurrentPage(currentPage);
		ServiceResult<Page<JdZbVo>> serviceResult = zlrwService.getJdZbList(query);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setData(serviceResult.getData());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
}
