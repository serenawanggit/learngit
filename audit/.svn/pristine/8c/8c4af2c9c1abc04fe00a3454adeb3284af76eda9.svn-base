package audit.controller.lookreport;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView; 

import audit.service.LookreportServices;
import audit.util.CookieUtil;

@Controller
@RequestMapping("lookreport")
public class LookreportController {
	@Autowired 
	private LookreportServices lookreportServices;
	
  @RequestMapping("showlookreport")
  public ModelAndView showlookreport(HttpServletRequest request){
	    String id= request.getParameter("id");
	  
		String userId = "";
		String userName = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
	  ModelAndView modelAndView=new ModelAndView();
	  modelAndView.addObject("id",id );
	  modelAndView.addObject("usename","审核评估专家");
	  modelAndView.setViewName("page/expertnavigation/lookreport");  
	  return modelAndView;
  }
  
  @RequestMapping("findlookreportdata")
  @ResponseBody
  public String findlookreportdata(HttpServletRequest request){
	 int id= Integer.parseInt(request.getParameter("id"));
	 return JSONObject.fromObject(lookreportServices.findLookreportData(id)).toString();
  }
  
  @RequestMapping("downlookreportdata")
  @ResponseBody
  public String downlookreportdata(HttpServletRequest request,HttpServletResponse response){
	 String downurl= request.getParameter("downurl");
	 lookreportServices.downreport(downurl,response);
	 return null;
  }
  
  @RequestMapping("lookcount")
  @ResponseBody
  public String lookcount(HttpServletRequest request){
	  int id=Integer.parseInt(request.getParameter("id"));
	  lookreportServices.lookcount(id);
	return null;
  }
}
