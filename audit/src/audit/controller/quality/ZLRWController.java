package audit.controller.quality;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import audit.common.JsonResult;
import audit.common.Page;
import audit.common.ServiceResult;
import audit.model.AsMCategory;
import audit.model.AsMManage;
import audit.model.quality.AsZlZlrwxx;
import audit.model.quality.query.IndicatorQuery;
import audit.model.quality.query.JdTaskQuery;
import audit.model.quality.query.TaskQuery;
import audit.model.quality.query.UserQuery;
import audit.model.quality.vo.JdTaskVo;
import audit.model.quality.vo.TaskUserVo;
import audit.model.quality.vo.TaskVo;
import audit.model.quality.vo.UserGroupVo;
import audit.model.quality.vo.UserVo;
import audit.service.AsManageServiceI;
import audit.service.quality.AsZLZLrwxxServiceI;
import audit.service.quality.ZlrwService;
import audit.service.quality.ZlrwryService;
import audit.util.CookieUtil;
import audit.util.DateTimeUtils;
import audit.util.StringUtil;

/**
 * 质量任务相关控制器
 * @author yjq
 * 2015-4-17
 */
@Controller
@RequestMapping("zlrwController")
public class ZLRWController{
	
	private final static Logger log = Logger.getLogger(ZLRWController.class); 
	
	@Resource
	private ZlrwService zlrwService;

	@Resource
	private ZlrwryService zlrwryService;
	
	@Resource
	private AsManageServiceI asManageService;
	
	@Autowired
	private AsZLZLrwxxServiceI asZLZLrwxxService;
	
	/**
	 * 查询所有质量任务
	 * @author LLP
	 * 2015-5-6
	 */
	@RequestMapping(value="selectAllZLrwxx",method=RequestMethod.POST)
	@ResponseBody
	public String selectAllZLrwxx(HttpServletRequest request){
		List<AsZlZlrwxx> list = asZLZLrwxxService.selectAllASZLZLRWXX();
		return JSONArray.fromObject(list).toString();
	}
	
	/**
	 * 质量任务列表页
	 * @param request
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-4-29
	 */
	@RequestMapping("zlRwListView")
	public ModelAndView zlRwListView(HttpServletRequest request,ModelAndView mav) {
		mav.setViewName("page/qualityMission/zhiLiangRenWu");
		return mav;
	}
	
	
	/**
	 * 质量任务列表
	 * @param request
	 * @param mav
	 * @param rw
	 * @return
	 * @author yjq
	 * 2015-4-22
	 */
	@RequestMapping("zlRwList")
	@ResponseBody
	public String getZlRwList(HttpServletRequest request,
			@RequestParam("formStr")String str) {
		JsonResult jsonResult = new JsonResult();
		
		JSONObject obj = new JSONObject();
		obj = JSONObject.fromObject(str);
		TaskQuery query = (TaskQuery)JSONObject.toBean(obj,TaskQuery.class);
		
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		query.setFbrdm(Integer.parseInt(userId));
		//query.setFbrdm(1);
		ServiceResult<Page<TaskVo>> serviceResult = zlrwService.getZlRwListByQuery(query);
		if(!serviceResult.isOk()){
			log.error("获取用户阶段任务列表出错，用户id:"+userId);
			//错误页面未定
			//TODO
		}
		jsonResult.setData(serviceResult.getData());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 删除质量任务
	 * @param request
	 * @param ids
	 * @return
	 * @author yjq
	 * 2015-4-23
	 */
	@RequestMapping("deleteZlRw")
	@ResponseBody
	public String deleteZlRw(HttpServletRequest request,
			@RequestParam("ids")String ids) {
		JsonResult json = new JsonResult();
		ServiceResult<String> serviceResult = zlrwService.deleteZlRw(ids);
		if(serviceResult.isOk()){
			JSONObject jsonObject = JSONObject.fromBean(json);
			return jsonObject.toString();
		}
		json.setOk(false);
		json.setData(serviceResult.getData());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	
	/**
	 * 新增页面
	 * @param request
	 * @param mav
	 * @return
	 * @author yjq
	 */
	@RequestMapping("addView")
	public ModelAndView addView(HttpServletRequest request, ModelAndView mav) {
		Date date = new Date();
		mav.addObject("now", date.getTime());
		mav.setViewName("/page/qualityMission/RenWuXinZen");
		return mav;
	}
	
	/**
	 * 新增质量任务
	 * @param request
	 * @param mav
	 * @param rw 页面传来的质量任务数据
	 * @return
	 * @author yjq
	 */
	@RequestMapping(value="addRw", produces = {"application/json;charset=UTF-8"})
	public ModelAndView addZLRW(HttpServletRequest request,ModelAndView mav,
			AsZlZlrwxx rw,
			@RequestParam("startTime")String startTime,
			@RequestParam("endTime")String endTime) {
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		rw.setFbrdm(Integer.parseInt(userId));
		//rw.setFbrdm(1);
		Date start = DateTimeUtils.parseStr(startTime);
		rw.setFbsj(start);
		Date end = DateTimeUtils.parseStr(endTime);
		rw.setJzsj(end);
		ServiceResult<Integer> serviceResult = zlrwService.addRw(rw);
		if(!serviceResult.isOk()){
			log.error("新增质量任务出错，数据为："+StringUtil.objectToString(rw));
			//TODO
		}
		mav.setViewName("redirect:/zlrwController/updateZlRwView.do?id="+serviceResult.getData());
		return mav;
	}
	
	/**
	 * 更新质量任务页面
	 * @param request
	 * @param mav
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-4-23
	 */
	@RequestMapping("updateZlRwView")
	public ModelAndView updateZlRwView(HttpServletRequest request,ModelAndView mav,
			@RequestParam("id")Integer id) {
		ServiceResult<TaskVo> serviceResult = zlrwService.selectByPrimaryKey(id);
		mav.addObject("rw", serviceResult.getData());
		Date date = new Date();
		mav.addObject("now", date.getTime());
		mav.setViewName("page/qualityMission/updateZlRw");
		return mav;
	}
	
	/**
	 * 更新质量任务
	 * @param request
	 * @param mav
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-4-23
	 */
	@RequestMapping("updateZlRw")
	@ResponseBody
	public String updateZlRw(HttpServletRequest request,
			AsZlZlrwxx rw,
			@RequestParam("startTime")String startTime,
			@RequestParam("endTime")String endTime) {
		JsonResult json = new JsonResult();
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		//rw.setFbrdm(1);
		rw.setFbrdm(Integer.parseInt(userId));
		Date start = DateTimeUtils.parseStr(startTime);
		rw.setFbsj(start);
		Date end = DateTimeUtils.parseStr(endTime);
		rw.setJzsj(end);
		ServiceResult<Boolean> serviceResult = zlrwService.updateZlRw(rw);
		if(serviceResult.isOk()){
			json.setOk(true);
			JSONObject jsonObject = JSONObject.fromBean(json);
			return jsonObject.toString();
		}
		json.setOk(false);
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 获取阶段任务列表
	 * @param request
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-24
	 */
	@RequestMapping("getJdRwList")
	@ResponseBody
	public String getJdRwLsit(HttpServletRequest request,JdTaskQuery query) {
		JsonResult json = new JsonResult();
		ServiceResult<Page<JdTaskVo>> serviceResult = zlrwService.getJdTaskListByQuery(query);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 跳转到阶段任务更新页面
	 * @param request
	 * @param id
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-5-6
	 */
	@RequestMapping("editJdRw")
	public ModelAndView editJdRw(HttpServletRequest request,
			@RequestParam("id")Integer id,ModelAndView mav) {
		JdTaskQuery query = new JdTaskQuery();
		query.setId(id);
		ServiceResult<Map<String,Object>> serviceResult = zlrwService.getJdTaskDetails(query);
		mav.addObject("zlRw", serviceResult.getData().get("zlRw"));
		mav.addObject("jdRw", serviceResult.getData().get("jdRw"));
		mav.addObject("userIds", JSONArray.fromObject(serviceResult.getData().get("userIds")));
		mav.addObject("groupIds", JSONArray.fromObject(serviceResult.getData().get("groupIds")));
		mav.addObject("zbList", JSONArray.fromObject(serviceResult.getData().get("zbList")));
		mav.addObject("names", serviceResult.getData().get("names"));
		mav.setViewName("/page/qualityMission/XiuGaiJieDuan");
		return mav;
	}
	
	/**
	 * 删除阶段任务
	 * @param request
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-4
	 */
	@RequestMapping("deleteJdRw")
	@ResponseBody
	public String deleteJdRw(HttpServletRequest request,
			@RequestParam("id")Integer id) {
		JsonResult json = new JsonResult();
		ServiceResult<Boolean> serviceResult = zlrwService.deleteJdRwById(id);
		json.setOk(serviceResult.isOk());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 获取阶段任务下的人员列表
	 * @param request
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-30
	 */
	@RequestMapping("getUserList")
	@ResponseBody
	public String getUserList(HttpServletRequest request,UserQuery query) {
		JsonResult json = new JsonResult();
		ServiceResult<Page<TaskUserVo>> serviceResult = zlrwService.getUserListByQuery(query);
		json.setData(serviceResult.getData());
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 删除阶段任务人员
	 * @param request
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-4
	 */
	@RequestMapping("deleteUser")
	@ResponseBody
	public String deleteUser(HttpServletRequest request,
			@RequestParam("id")Integer id) {
		JsonResult json = new JsonResult();
		ServiceResult<Boolean> serviceResult = zlrwService.deleteUserById(id);
		json.setOk(serviceResult.isOk());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	
	/**
	 * 新增阶段任务页面
	 * @param request
	 * @param mav
	 * @return
	 * @author yjq
	 */
	@RequestMapping("addJdRwView")
	public ModelAndView addJdRwView(HttpServletRequest request, ModelAndView mav,
			@RequestParam("id")Integer id) {
		Date date = new Date();
		mav.addObject("now", date.getTime());
		mav.addObject("id", id);
		ServiceResult<TaskVo> serviceResult = zlrwService.selectByPrimaryKey(id);
		mav.addObject("zlRw", serviceResult.getData());
		mav.setViewName("/page/qualityMission/ZenJiaJieDuan");
		return mav;
	}
	
	/**
	 * 新增阶段任务
	 * @param request
	 * @param mav
	 * @param rw 页面传来的阶段任务数据
	 * @return
	 * @author yjq
	 */
	@RequestMapping(value="addJdRw", produces = {"application/json;charset=UTF-8"})
	@ResponseBody
	public String addZlJdRw(HttpServletRequest request,
			@RequestParam("str")String str) {
		JsonResult json = new JsonResult();
		JSONObject obj = JSONObject.fromObject(str);
		ServiceResult<Integer> serviceResult = zlrwService.addJdRw(obj);
		json.setOk(serviceResult.isOk());
		json.setComment(serviceResult.getComment());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 更新阶段任务
	 * @param request
	 * @param mav
	 * @param rw 页面传来的阶段任务数据
	 * @return
	 * @author yjq
	 */
	@RequestMapping("updateJdRw")
	@ResponseBody
	public String updateZlJdRw(HttpServletRequest request,
			@RequestParam("str")String str) {
		JsonResult json = new JsonResult();
		JSONObject obj = JSONObject.fromObject(str);
		ServiceResult<Integer> serviceResult = zlrwService.updateJdRw(obj);
		json.setComment(serviceResult.getComment());
		json.setOk(serviceResult.isOk());
		JSONObject jsonObject = JSONObject.fromBean(json);
		return jsonObject.toString();
	}
	
	/**
	 * 新增阶段任务1、选择任务人
	 * @param request
	 * @param level 学院：1、院系：2、专业：3
	 * @return
	 * @author yjq
	 */
	@RequestMapping(value="getUserGroup")
	@ResponseBody
	public String getUserGroup(HttpServletRequest request,
			@RequestParam("level")Integer level) {
		JsonResult json = new JsonResult();
		ServiceResult<List<UserGroupVo>> serviceResult = zlrwryService.getUserGroupByLevel(level);
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
	 * 根据学院、院系、专业编号选择用户
	 * @param request
	 * @param id 学院、院系、专业编号
	 * @param json
	 * @return
	 * @author yjq
	 */
	@RequestMapping(value="userList" , produces = {"application/json;charset=UTF-8"})
	@ResponseBody
	public String getUserList(HttpServletRequest request,
			@RequestParam("id")Integer id,
			@RequestParam("level")Integer level) {
		JsonResult json = new JsonResult();
		ServiceResult<List<UserVo>> serviceResult = zlrwryService.getUserListByParentId(id, level);
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
	 * 获取指标项分类
	 * @param request
	 * @return
	 * @author yjq
	 * 2015-4-28
	 */
	@RequestMapping("getIndicatorsCategory")
	@ResponseBody
	public String getObjectiveIndicatorsCategory(HttpServletRequest request) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<List<AsMCategory>> serviceResult = asManageService.getIndicatorsCategory();
		if(serviceResult.isOk()){
			jsonResult.setData(serviceResult.getData());
			JSONObject jsonObject = JSONObject.fromBean(jsonResult);
			return jsonObject.toString();
		}
		jsonResult.setOk(false);
		JSONObject jsonObject = JSONObject.fromBean(jsonResult);
		return jsonObject.toString();
		
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
		ServiceResult<Page<AsMManage>> serviceResult = asManageService.getIndicatorsByQuery(query);
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
	
}
