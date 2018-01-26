package audit.controller.access;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.common.JsonResult;
import audit.controller.quality.UserTaskController;
import audit.model.assess.AsAccessWebFiledInvest;
import audit.model.assess.AsAccessWebFiledInvestContent;
import audit.service.access.AsAccessWebFiledInvestServiceI;
import audit.util.CookieUtil;

@Controller
@RequestMapping("asAccessWebFiledInvestController")
public class AsAccessWebFiledInvestController {
	private final static Logger log = Logger.getLogger(UserTaskController.class); 
	@Autowired
	  private AsAccessWebFiledInvestServiceI asAccessWebFiledInvestServiceI ;
	/**
	 * 获取实地考察重点 指标
	 * @return
	 */
	@RequestMapping(value="getAccessWebFiledInvest",method=RequestMethod.POST)
	@ResponseBody
	public String getAccessWebFiledInvest(HttpServletRequest request,@RequestParam("specialty_ID")Integer specialty_ID,@RequestParam("userId")Integer userId,@RequestParam("year")Integer year) {
		
		/*String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}*/
		 JSONObject jsonObject=new JSONObject();
		List<AsAccessWebFiledInvestContent> myContentlist=asAccessWebFiledInvestServiceI.getMyContentList(userId,specialty_ID,year);
		if(!myContentlist.isEmpty()){  //有重点实地考察数据记录
			jsonObject.put("flag",1);
			jsonObject.put("myContentlist",myContentlist);
		}
		else{//无重点实地考察数据记录
			jsonObject.put("flag",0);
		}
		
		List<AsAccessWebFiledInvest> resultList =asAccessWebFiledInvestServiceI.getAccessWebFiledInvest();
		if (resultList!=null&&resultList.size()>0) {
			jsonObject.put("resultList",resultList);
			return jsonObject.toString();
		}
		//读取建议实地考查重点内容指标内容为空
		jsonObject.put("flag",-1);
		return jsonObject.toString();
	}
	/**
	 * 提交建议实地考察重点 的指标 建议内容
	 * @param investContentModel 建议考察重点内容
	 * 
	 * @return
	 */
	@RequestMapping(value="addAccessWebFiledInvestContent",method=RequestMethod.POST)
	@ResponseBody
	public String addAccessWebFiledInvestContent(HttpServletRequest request,
			@RequestParam("specialty_ID")Integer specialty_ID,
			AsAccessWebFiledInvestContent filedInvestPointForm
			){
		List<AsAccessWebFiledInvestContent> investContentList=filedInvestPointForm.getInvestContentList();
		/*String user_id = "";
		try {
			user_id = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+user_id);
		}*/
		
		JsonResult jsonResult = new JsonResult();
		
		int flag=asAccessWebFiledInvestServiceI.addAccessWebFiledInvestContent(investContentList,specialty_ID);
		if(flag>0){
			jsonResult.setOk(true);
			jsonResult.setData(flag);
			JSONObject json = JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setOk(false);
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}

}
