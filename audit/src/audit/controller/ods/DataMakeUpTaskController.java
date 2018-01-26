package audit.controller.ods;

import java.util.List;
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
import audit.model.Organization;
import audit.model.ods.OdsTTeachTask;
import audit.service.OrganizationServices;
import audit.service.ods.DataMakeUpTaskService;

/**
 * 数据补录任务控制器
 * @author yjq
 * 2015-7-8
 */
@Controller
@RequestMapping("dataMakeUpTask")
public class DataMakeUpTaskController {

	@SuppressWarnings("unused")
	private final static Logger log = Logger.getLogger(DataMakeUpTaskController.class); 
	
	@Resource
	private DataMakeUpTaskService dataMakeUpTaskService;
	
	
	@Resource
	private OrganizationServices  organizationServices;
	/**
	 * 数据补录任务页面
	 * @param request
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	@RequestMapping("view")
	public ModelAndView view(HttpServletRequest request,
			ModelAndView mav) {
		mav.setViewName("page/dataAcquisition/dataMakeUpTask");
		return mav;
	}
	
	/**
	 * 获取条件
	 * @param request
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	@RequestMapping("getSearchQuery")
	@ResponseBody
	public String getSearchQuery(HttpServletRequest request) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = dataMakeUpTaskService.getSearchQuery();
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 获取任务列表
	 * @param request
	 * @param task
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	@RequestMapping("getListByQuery")
	@ResponseBody
	public String getListByQuery(HttpServletRequest request,
			OdsTTeachTask task,
			@RequestParam("currentPage")Integer currentPage) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Page<Map<String,Object>>> serviceResult = dataMakeUpTaskService.getListByQuery(task,currentPage);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 新增任务
	 * @param request
	 * @param task
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	@RequestMapping("addNewTask")
	@ResponseBody
	public String addNewTask(HttpServletRequest request,
			OdsTTeachTask task) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = dataMakeUpTaskService.addNewTask(task);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 更新任务
	 * @param request
	 * @param task
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	@RequestMapping("updateTask")
	@ResponseBody
	public String updateTask(HttpServletRequest request,
			OdsTTeachTask task) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = dataMakeUpTaskService.updateTask(task);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 删除任务
	 * @param request
	 * @param task
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	@RequestMapping("deleteTask")
	@ResponseBody
	public String deleteTask(HttpServletRequest request,
			@RequestParam("id")Integer id) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Boolean> serviceResult = dataMakeUpTaskService.deleteTask(id);
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 删除任务
	 * @param request
	 * @param task
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	@RequestMapping("getOrg")
	@ResponseBody
	public String getOrg(HttpServletRequest request) {
		JsonResult jsonResult = new JsonResult();
		List<Organization> list = organizationServices.findAllAndLevel();
		jsonResult.setOk(true);
		jsonResult.setData(list);
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
}
