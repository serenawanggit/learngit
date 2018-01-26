package audit.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsCjSyfw;
import audit.service.AsCjSyfwServiceI;


@Controller
public class AsCjSyfwController{

	private AsCjSyfwServiceI asCjSyfwService;
	@Autowired
	public void setAsCjSyfwService(AsCjSyfwServiceI asCjSyfwService){
		this.asCjSyfwService = asCjSyfwService;
	}
	
	@RequestMapping(value="/asCjSyfwController/findAllSyfws",method=RequestMethod.POST)
	@ResponseBody
	public String findAllSyfws(HttpServletRequest request){
		List<AsCjSyfw> asCjSyfws = asCjSyfwService.selectAsCjSyfws();
		return JSONArray.fromObject(asCjSyfws).toString();
	}
	
	
	@RequestMapping(value="/asCjSyfwController/findSyfwById",method=RequestMethod.GET)
	@ResponseBody
	public String findSyfwById(HttpServletRequest request){
		String id = request.getParameter("syfwid");
		AsCjSyfw syfw = asCjSyfwService.findAsCjSyfwById(Integer.parseInt(id));
		return JSONObject.fromBean(syfw).toString();
	}
	
	
}
