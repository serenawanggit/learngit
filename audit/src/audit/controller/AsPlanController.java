package audit.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsPlan;
import audit.service.AsPlanServiceI;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@Controller
public class AsPlanController{

	private AsPlanServiceI asPlanService;
	@Autowired
	public void setAsPlanService(AsPlanServiceI asPlanService){
		this.asPlanService = asPlanService;
	}
	@RequestMapping(value="/asPlanController/sysoasplan")
	public String sysoasplan(){
		System.out.println("....");
		return "success";
		
	}
	
	@RequestMapping(value="/asPlanController/showallinfo",method=RequestMethod.GET)
	@ResponseBody
	public String showallinfos(HttpServletRequest request){
		String mid = request.getParameter("mid");
		//获得菜单下的所有涉及方案
		List<AsPlan> asPlans = asPlanService.listAsPlansByMid(Integer.parseInt(mid));
		JSONArray jsons = new JSONArray();
		 for(AsPlan ap : asPlans){
			 JSONObject o = new JSONObject();
			 o.put("asplan", ap);
			 jsons.add(o);
		 }
		return jsons.toString();
	}
	
	
}
