package audit.controller.access;

import java.util.List;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.common.JsonResult;
import audit.common.ServiceResult;
import audit.model.assess.AsAccessInfo;
import audit.model.assess.tack.AsAssessinfoTack;
import audit.service.access.AsAccessInfoServiceI;

@Controller
@RequestMapping("asAccessInfoController")
public class AsAccessInfoController {
	@Autowired
	private AsAccessInfoServiceI asAccessInfoService;
	/**
	 * 首页初始化加载.参与总数
	 * @param assessYear
	 * @return
	 */
	@RequestMapping(value="earchPipn",method=RequestMethod.POST)
	@ResponseBody
	public String earchPipn(@RequestParam("assessYear")String assessYear){
		JsonResult jsonResult = new JsonResult();
		AsAccessInfo info= asAccessInfoService.searchchPinByYear(assessYear);
		Integer accessId=null;
		if (null!=info) {
			accessId=info.getId();
		}else{
			return null;
		}
		ServiceResult<List<AsAssessinfoTack>> serviceResult = asAccessInfoService.searchPipn(assessYear,accessId);
		if (serviceResult.isOk()) {
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
	 * 获取所有的年份
	 * 专业评估首页 年份选择
	 * @return
	 */
	@RequestMapping(value="searchAllYear",method=RequestMethod.POST)
	@ResponseBody
	public String searchAllYear() {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<List<AsAccessInfo>> serviceResult =asAccessInfoService.getAllYear();
		if (serviceResult.isOk()) {
			jsonResult.setData(serviceResult.getData());
			JSONObject json = JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setOk(false);
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
}
