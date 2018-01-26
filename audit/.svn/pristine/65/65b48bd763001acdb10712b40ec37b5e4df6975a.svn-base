package audit.controller.quality;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import audit.model.Organization;
import audit.model.Userinfo;
import audit.service.quality.OrganizationServiceI;

@Controller
@RequestMapping("organizationController")
public class OrganizationController {
	
	@Autowired
	private OrganizationServiceI organizationService;
	/**
	 * 查询所有机构信息 列表初始化
	 * @param mav
	 * @return
	 */
	@RequestMapping(value="selectAllOrganization",method=RequestMethod.POST)
	@ResponseBody
	public String selectAllOrganization1(HttpServletRequest request){
		Map<String, Object> map = new HashMap<String, Object>();
		List<Organization> list= organizationService.selectAllOrganization1();
		map.put("list", JSONArray.fromObject(list));
		JSONObject result = JSONObject.fromObject(map);
		
		return result.toString();
	}
	
	/**
	 *  根据机构id查询所有机构 搜索功能
	 * @param mav
	 * @return
	 */
	@RequestMapping(value="selectOrganizationById",method=RequestMethod.POST)
	@ResponseBody
	public String selectOrganizationById(@RequestParam("oid")String oid){
		Organization organization=	organizationService.selectByPrimaryKey(Integer.parseInt(oid));
		return JSONObject.fromBean(organization).toString();
	}
	
	/**
	 *  根据机构id查询所用户
	 * @param 
	 * @return
	 */
	@RequestMapping(value="selectAllUserByOrgId",method=RequestMethod.POST)
	@ResponseBody
	public String selectAllUserByOrgId(Integer organizationId){
		Map<String, Object> map = new HashMap<String, Object>();
		List<Userinfo> list = organizationService.selectAllUserByOrgId(organizationId);
		map.put("list", JSONArray.fromObject(list));
		JSONObject result = JSONObject.fromObject(map);
		return result.toString();
	}
}
