package audit.controller.assessment;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.quality.vo.JDuGenZ;
import audit.service.assess.AssessmentSpecialtyInfoGuanliyuanServices;
import audit.util.lzr.LzrInitParma;

@Controller
@RequestMapping("AssessmentSpecialtyInfoGuanliyuanController")
public class AssessmentSpecialtyInfoGuanliyuanController {

	@Autowired
	AssessmentSpecialtyInfoGuanliyuanServices services;

	@RequestMapping("selectZgList")
	@ResponseBody
	public   List<Map<Object, Object>>   selectZgList(HttpServletRequest  request){
		Map<Object, Object> map = new HashMap();
		map.put("syear", request.getParameter("syear"));
		List<Map<Object, Object>> selectZgList = services.selectZgList(map);
		return selectZgList;
	}
	@RequestMapping("selectJdlt")
	@ResponseBody
	public  List<JDuGenZ> selectJdlt(HttpServletRequest  request){
		Map<Object, Object> map  = new HashMap<Object, Object>();
		String oName = request.getParameter("oName");
		String sp_name = request.getParameter("sp_name");
		if(oName!=null&&!"".equals(oName)){
			map.put("oName", oName);
		}
		if(sp_name!=null&&!"".equals(sp_name)){
			map.put("sp_name", sp_name);
		}
		List<JDuGenZ> selectJdlt = services.selectJdlt(map);
		return selectJdlt;
	}
	@RequestMapping("selectOrganization")
	@ResponseBody
	public List<String> selectOrganization(HttpServletRequest  request){
		List<String> selectOrganization = services.selectOrganization();
		return selectOrganization;
	}
	@RequestMapping("selectZjName")
	@ResponseBody
	public List<String> selectZjName(HttpServletRequest  request){
		List<String> selectZjName = services.selectZjName();
		return selectZjName;
	}
}
