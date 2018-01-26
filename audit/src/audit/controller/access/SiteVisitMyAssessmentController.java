package audit.controller.access;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.service.access.AsaccessSelfScoreServerI;

@Controller
@RequestMapping("siteVisitMyAssessmentController")
public class SiteVisitMyAssessmentController {
 
	
	@Autowired
	private AsaccessSelfScoreServerI asaccessSelfScoreServerI;
	@RequestMapping("showUserAndType")
	@ResponseBody
	public String showUserAndType(HttpServletRequest request,HttpServletResponse response){
		Integer specialtyId=Integer.parseInt(request.getParameter("specialtyid"));
		Integer syear=Integer.parseInt(request.getParameter("syear"));
		JSONArray jArray=JSONArray.fromObject(asaccessSelfScoreServerI.findAllUserByComment(specialtyId, syear));
		JSONObject jObject=new JSONObject();
		jObject.accumulate("user", jArray);
		return jObject.toString();
	}
}
