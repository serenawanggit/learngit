package audit.controller.assessment;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.common.JsonResult;
import audit.model.assess.vo.SpecialtyNameAndSelfAndAssessor;
import audit.model.assess.vo.UserInfoVo;
import audit.model.assess.vo.TYPE_NAME;
import audit.service.assess.AssessmentSpecialtyInfoServices;
import audit.util.CookieUtil;

@Controller
@RequestMapping("assessmentSpecialtyInfoController")
public class AssessmentSpecialtyInfoController {

	 @Autowired
	 private AssessmentSpecialtyInfoServices assessmentSpecialtyInfoServices;
	
	@RequestMapping("/addSpecialtyInfo")
	@ResponseBody
	public String addSpecialtyInfo(HttpServletRequest request){
	  JsonResult jsonResult=new JsonResult();
	  String sname=	request.getParameter("sName");
	  String scode=	request.getParameter("sCode");
	  String sfgk=	request.getParameter("sfgk");
	  String rz=	request.getParameter("rz");
	  int schoolid=	Integer.parseInt(request.getParameter("schoolid"));
	  System.out.println("学校："+schoolid);
	  Integer id=Integer.parseInt(request.getParameter("id"));
	  jsonResult.setMessage(assessmentSpecialtyInfoServices.insertspecialty(scode, sname, sfgk,rz,id,schoolid));  
	  JSONObject jObject=new JSONObject();
	  jObject.accumulate("isok", jsonResult);
	  return jObject.toString();
	}
	
	@RequestMapping("/findSpecialtyInfo")
	@ResponseBody
	public String findSpecialtyInfo(HttpServletRequest request){
		 String searchvalue=request.getParameter("searchvalue");
		 String id=request.getParameter("id");
		 JSONObject jObject=new JSONObject();
		 List<Map<String, Object>> findSpecialtyInfo = assessmentSpecialtyInfoServices.findSpecialtyInfo(searchvalue,id);
		 jObject.accumulate("Rows",findSpecialtyInfo);
		return jObject.toString();
	}
	
	/**
	 * 查找专业名称,自评人,审核人,网评专家,现场考察专家,现场考察组长,,
	 * @param request 
	 * @return
	 */
	@RequestMapping("/findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor")
	@ResponseBody
	public String findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor(HttpServletRequest request){
		String searchvalue=request.getParameter("searchvalue");
		String pgid=request.getParameter("pgid");
		JSONObject jObject=new JSONObject();
	    List<SpecialtyNameAndSelfAndAssessor> findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor = 
		assessmentSpecialtyInfoServices.findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor(searchvalue,pgid);
		jObject.accumulate("Rows",findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor);
		return jObject.toString();
	}
	
	
	@RequestMapping("/updateSpecialtyInfo")
	@ResponseBody
	public String updateSpecialtyInfo(HttpServletRequest request){
		  String sname=	request.getParameter("sName");
		  String scode=	request.getParameter("sCode");
		  String sfgk=	request.getParameter("sfgk");
		  String rz=	request.getParameter("rz");
		  String id=	request.getParameter("id");
		  JSONObject jObject=new JSONObject();
		  jObject.accumulate("message", assessmentSpecialtyInfoServices.updateSpecialtyInfo(sname,scode,sfgk,rz,id));
		return jObject.toString();
	}
	@RequestMapping("/updateSpecialtyInfoBySelfAndAssessor")
	@ResponseBody
	public String updateSpecialtyInfoBySelfAndAssessor(HttpServletRequest request){
		/*  String sname=	request.getParameter("sName");
		  String scode=	request.getParameter("sCode")*/;
		 
//		  JSONObject jObject=new JSONObject();
//		  jObject.accumulate("message", assessmentSpecialtyInfoServices.updateSpecialtyInfo(sname,scode,sfgk,rz,id));
		return null;
	}
	@RequestMapping("delSpecialtyInfo")
	@ResponseBody
	public String delSpecialtyInfo(HttpServletRequest request){
		  String id=request.getParameter("id");
		  JSONObject jObject=new JSONObject();
		  jObject.accumulate("message", assessmentSpecialtyInfoServices.delSpecialtyInfo(id));
		return jObject.toString();
	}
	@RequestMapping("/findUserInfo")
	@ResponseBody
	public String findUserInfo(HttpServletRequest request){
		  String searchvalue=request.getParameter("searchvalue");
		  String searchvalue3=request.getParameter("searchvalue3");
		  JSONObject jObject=new JSONObject();
		   UserInfoVo infoVo=new UserInfoVo();
		   infoVo.setSearchvalue(searchvalue);
		   infoVo.setSearchvalue3(searchvalue3);
		  jObject.accumulate("Rows",assessmentSpecialtyInfoServices.findUserInfo(infoVo));
		return jObject.toString();
	}


	
	@RequestMapping("/findUserInfoByType")
	@ResponseBody
	public String findUserInfoByType(UserInfoVo infoVo){
		  JSONObject jObject=new JSONObject();
		  jObject.accumulate("Rows",assessmentSpecialtyInfoServices.findUserInfoByType(infoVo));
		return jObject.toString();
	}
	
	@RequestMapping("getAllSpecialty")
	@ResponseBody
	public String getAllSpecialty(HttpServletRequest request,@RequestParam Map<String,String> map){
			JSONArray json = null;
			try {
				int id = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				json = JSONArray.fromObject(assessmentSpecialtyInfoServices.getAllSpecialty(id,map.get("syear"),Integer.parseInt(map.get("pgid").toString())));
			} catch (Exception e) {
				e.printStackTrace();
			}
			return json.toString();
	}

	
	@RequestMapping("insertAssessDate")
	@ResponseBody
	public String insertAssessDate(HttpServletRequest request){
		String data=request.getParameter("datastring");
		JSONArray json = JSONArray.fromObject(data);
		assessmentSpecialtyInfoServices.insertAssessDate(json);
		return "保存成功！";
	}
	
	@RequestMapping("findSpecialtyAndDate")
	@ResponseBody
	public String findSpecialtyAndDate(HttpServletRequest request){
		String searchvalue=request.getParameter("searchvalue");
		String pgid=request.getParameter("pgid");
		 JSONObject jObject=new JSONObject();
		 jObject.accumulate("Rows", assessmentSpecialtyInfoServices.findSpecialtyAndDate(searchvalue,pgid));
		return jObject.toString();
	}
	
	@RequestMapping("updateSpecialtyAndDateInfo")
	@ResponseBody
	public String updateSpecialtyAndDateInfo(HttpServletRequest request){
		String zpdate=request.getParameter("zpdate");
		String wpdate=request.getParameter("wpdate");
		String xcksdate=request.getParameter("xcksdate");
		String syearh=request.getParameter("syearh");
		String id=request.getParameter("id");
		String pgid=request.getParameter("pgid");
		JSONObject jObject=new JSONObject();
		jObject.accumulate("message",assessmentSpecialtyInfoServices.updateSpecialtyAndDateInfo(syearh,zpdate,wpdate,xcksdate,id,pgid));
		return jObject.toString();
	}
	
	@RequestMapping("delSpecialtyAndDateInfo")
	@ResponseBody
	public String delSpecialtyAndDateInfo(HttpServletRequest request){
		  String id=	request.getParameter("id");
		  JSONObject jObject=new JSONObject();
		  jObject.accumulate("message", assessmentSpecialtyInfoServices.delSpecialtyAndDateInfo(id));
		return jObject.toString();
	}
	/**
	 * 查询后台管理title分类
	 * @return
	 */
	@RequestMapping("loadtitle")
	@ResponseBody
	public String loadtitle(){
		  JSONObject jObject=new JSONObject();
		  jObject.accumulate("message",assessmentSpecialtyInfoServices.loadtitle());
		return jObject.toString();
	}
	@RequestMapping("saveUserAndSpecialty")
	@ResponseBody
	public String saveUserAndSpecialty(HttpServletRequest request){
		  String s_u_id=	request.getParameter("s_u_id");
		  String z_u_id=	request.getParameter("z_u_id");
		  String date_specialty_id= request.getParameter("date_specialty_id");
		  String saveUserid=	request.getParameter("saveUserid");
		  String type=	request.getParameter("type");
		
		  String old_id=request.getParameter("old_id");
		  String new_id=request.getParameter("new_id");
		  
		  String _u_id=request.getParameter("_u_id");
		  
		  JSONObject jObject=new JSONObject();
		  jObject.accumulate("message", assessmentSpecialtyInfoServices.saveUserAndSpecialty(date_specialty_id, s_u_id, z_u_id,
				  saveUserid, type, old_id, new_id,_u_id));
		return jObject.toString();
	}
	
	/*查询专业评估*/
	@RequestMapping("/selecttype_name")
	@ResponseBody
	public String selecttype_name(HttpServletRequest request,HttpServletResponse response) {
		int id=Integer.parseInt(request.getParameter("id"));
		List<Map<String, Object>> u =assessmentSpecialtyInfoServices.selecttype_name(id);		
		JSONObject joJsonObject=new JSONObject();
		joJsonObject.accumulate("one",JSONArray.fromObject(u));					
		return joJsonObject.toString();
	}
	
}
