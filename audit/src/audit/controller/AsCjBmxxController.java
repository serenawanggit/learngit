package audit.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsCjBmxx;
import audit.model.AsCjShRenVo;
import audit.model.Organization;
import audit.service.AsCjBmxxServiceI;
import audit.service.AsCjShRenVoServices;
import audit.service.OrganizationServices;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

@Controller
public class AsCjBmxxController {

	private AsCjBmxxServiceI asCjBmxxService;
	@SuppressWarnings("unused")
	@Autowired
	
	private void setAsCjBmxxService(AsCjBmxxServiceI asCjBmxxService){
		this.asCjBmxxService = asCjBmxxService;
	}
	
	@Autowired
	private OrganizationServices organizationServices;
	
	@Autowired
	private AsCjShRenVoServices asCjShRenVoServices;
	
	@RequestMapping(value="/asCjBmxxController/findAllCjBmxxs",method=RequestMethod.POST)
	@ResponseBody
	public String findAllCjBmxxs(HttpServletRequest request){
//		List<AsCjBmxx> asCjBmxxs = asCjBmxxService.selectAsCjBmxxs();
		
		List<Organization> organizations=organizationServices.findAllAndLevel();
		JSONArray jsons = new JSONArray();
		/* for(AsCjBmxx acb : asCjBmxxs){
			 JSONObject o = new JSONObject();
			 o.put("acb", acb);
			 jsons.add(o);
		 }*/
		 for(Organization acb : organizations){
			 JSONObject o = new JSONObject();
			 o.put("acb", acb);
			 jsons.add(o);
		 }
		return jsons.toString();
	}
	
	@RequestMapping(value="/asCjBmxxController/findAllCjBmxxUsers",method=RequestMethod.POST)
	@ResponseBody
	public String findAllCjBmxxUsers(HttpServletRequest request){
		String id = request.getParameter("cjbmdm");
		//System.out.println("机构id:"+id);
		List<AsCjShRenVo> asCjShRenVos= asCjShRenVoServices.selectUsers(Integer.parseInt(id));
		JSONArray jsons = new JSONArray();
		//List<AsCjBmxx> asCjBmxxs = asCjBmxxService.selectUsers(Integer.parseInt(id));
		/*for(AsCjBmxx acb : asCjBmxxs){
			 JSONObject o = new JSONObject();
			 o.put("acb", acb);
			 jsons.add(o);
		 }*/
		for(AsCjShRenVo acb : asCjShRenVos){
			 JSONObject o = new JSONObject();
			 o.put("acb", acb);
			 jsons.add(o);
		 }
		return jsons.toString();
	}
}
