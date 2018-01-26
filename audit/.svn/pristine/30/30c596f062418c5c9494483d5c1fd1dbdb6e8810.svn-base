package audit.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import audit.model.Userinfo;
import audit.service.UserinfoServiceI;

@Controller
@RequestMapping("userinfoController")
public class UserinfoController {
	@Autowired
	private UserinfoServiceI userinfoservice;
	/**
	 * 查询所有的用户
	 * @return
	 */
	@RequestMapping(value="selectAllUserinfo",method=RequestMethod.POST)
	@ResponseBody
	public String selectAllUserinfo(ModelAndView mva){
		List<Userinfo> userinfoList = userinfoservice.selectAllUserinfo();
		return JSONArray.fromObject(userinfoList).toString();
	}
	
	/**
	 * 查询所有的用户
	 * @return
	 */
	@RequestMapping(value="selectAllUserinfoByorid",method=RequestMethod.POST)
	@ResponseBody
	public String selectAllUserinfoByorid(HttpServletRequest request){
		int oid=Integer.parseInt(request.getParameter("oraganizationId"));
		List<Userinfo> list = userinfoservice.selectAllUserinfoByOraganizationId(oid);
		return JSONArray.fromObject(list).toString();
	}
}
