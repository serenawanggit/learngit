package audit.controller.quality;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;


import audit.model.Organization;
import audit.model.quality.AsZJSJ;
import audit.model.quality.AsZlZlrwbmry;
import audit.service.quality.AsZlZlrwbmryServiceI;
import audit.service.quality.OrganizationServiceI;
import audit.util.CookieUtil;
/**
 * 质量任务部门、人员
 * @author LLP
 *
 */
@Controller
@RequestMapping("asZlZlrwbmryController")
public class AsZlZlrwbmryController {
	@Autowired
	private AsZlZlrwbmryServiceI asZlZlrwbmryService;
	@Autowired
	private OrganizationServiceI organizationService;
	/**
	 * 查询所有 质量任务部门 、人员
	 * @param response
	 * @param request
	 * @return
	 */
	@RequestMapping(value="selectAllAsZLZLrwmry",method=RequestMethod.POST)
	@ResponseBody
	public String selectAllAsZLZLrwmry(HttpServletResponse response,HttpServletRequest request) {
		List<AsZJSJ> list =asZlZlrwbmryService.selectPage();
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", JSONArray.fromObject(list));
		JSONObject result = JSONObject.fromObject(map);
		
		return result.toString();
	}
	/**
	 * 搜索
	 * @param mav
	 * @param response
	 * @param request
	 * @return
	 */
	@RequestMapping(value="selectByid",method=RequestMethod.POST)
	@ResponseBody
	public String selectByid(ModelAndView mav,HttpServletResponse response,HttpServletRequest request){
		String likeName=request.getParameter("likeName");
		List<AsZJSJ> list=asZlZlrwbmryService.selectLikeName(likeName);
		List<String> usernameLevel3=new ArrayList<String>();
		List<String> usernameLevel12=new ArrayList<String>();
		for (int i = 0; i < list.size(); i++) {
			if (list.get(i).getLevel()!=3) {
				String level12 = list.get(i).getUsename();
				usernameLevel12.add(level12);
			}else{
				String level3 = list.get(i).getUsename();
				usernameLevel3.add(level3);
			}
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", JSONArray.fromObject(list));
		JSONObject result = JSONObject.fromObject(map);
		return result.toString();
	}
	/**
	 * 新增质量任务部门与部门人员
	 * @param response
	 * @param request
	 * @param rwbmry
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value="insertRWBMRY",method=RequestMethod.POST)
	@ResponseBody
	public int insertRWBMRY(HttpServletResponse response,HttpServletRequest request, AsZlZlrwbmry rwbmry) throws IOException{
		String useridList=request.getParameter("useridList");//用户id
		int specialtyid=Integer.parseInt(request.getParameter("specialtyid"));//质量任务部门代码 1 、2在机构表，3在专业表
		int organizationid=Integer.parseInt(request.getParameter("organizationid"));
		String[] ulist= useridList.split(",");
		List<Integer> uiList=new ArrayList<Integer>();
		for (int u = 0; u < ulist.length; u++) {
			int id = Integer.parseInt(ulist[u]);
			uiList.add(id);
		}
		
		//重复添加
		int countOr = asZlZlrwbmryService.selectRWBMRYbycjbmdmAndUserid(organizationid,uiList);
		int countSp =asZlZlrwbmryService.selectRWBMRYbycjbmdmAndUserid(specialtyid,uiList);
		
		int result=0;
		if (countOr==0&&countSp==0) {
			for (int i = 0; i < ulist.length; i++) {
				int id = Integer.parseInt(ulist[i]);
				if (0 != specialtyid) {
					rwbmry.setUserid(id);
					rwbmry.setCjbmdm(specialtyid);
					rwbmry.setZyssxyid(organizationid);
					rwbmry.setLevel(3);
					result= asZlZlrwbmryService.insertSelective(rwbmry);
				}else{
					rwbmry.setUserid(id);
					Organization organization = organizationService.selectByPrimaryKey(organizationid);
					rwbmry.setCjbmdm(organizationid);
					rwbmry.setLevel(organization.getLevel());
					result= asZlZlrwbmryService.insertSelective(rwbmry);
				}
			}
		}else if(countSp==0&&countOr!=0&&specialtyid!=0){
			for (int i = 0; i < ulist.length; i++) {
				int id = Integer.parseInt(ulist[i]);
				if (0 != specialtyid) {
					rwbmry.setUserid(id);
					rwbmry.setCjbmdm(specialtyid);
					rwbmry.setZyssxyid(organizationid);
					rwbmry.setLevel(3);
					result= asZlZlrwbmryService.insertSelective(rwbmry);
				}else{
					rwbmry.setUserid(id);
					Organization organization = organizationService.selectByPrimaryKey(organizationid);
					rwbmry.setCjbmdm(organizationid);
					rwbmry.setLevel(organization.getLevel());
					result= asZlZlrwbmryService.insertSelective(rwbmry);
				}
			}
		}else{
			result=0;
		}
		return result;
	}
	/**
	 * 修改
	 * @param record
	 * @param response
	 * @param request
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value="updateRWBMRY",method=RequestMethod.POST)
	@ResponseBody
	public int updateRWBMRY(HttpServletResponse response,HttpServletRequest request) throws IOException{
		int viewCJBMDM=Integer.parseInt(request.getParameter("updateCjbmdm"));//从页面获取id查询数据进行修改
		//专业id
		int specialtyid=Integer.parseInt(request.getParameter("specialtyid"));//质量任务部门代码 1 、2在机构表，3在专业表
		//机构id
		int organizationid=Integer.parseInt(request.getParameter("organizationid"));
		//用户id
		String useridList=request.getParameter("useridList");
		String[] userid= useridList.split(",");
		List<Integer> uiList=new ArrayList<Integer>();
		for (int u = 0; u < userid.length; u++) {
			int id = Integer.parseInt(userid[u]);
			uiList.add(id);
		}
		
		//重复添加
		int countOr = asZlZlrwbmryService.selectRWBMRYbycjbmdmAndUserid(organizationid,uiList);
		int countSp =asZlZlrwbmryService.selectRWBMRYbycjbmdmAndUserid(specialtyid,uiList);
		
		
		int i=0;
		AsZlZlrwbmry rwbmry=new AsZlZlrwbmry();
		asZlZlrwbmryService.deleteByPrimaryCjbmdm(viewCJBMDM);
		if (countSp==0&&countOr==0) {
			for (int j = 0; j < userid.length; j++) {
				int userId=Integer.parseInt(userid[j]);
				//查询level
				Organization organization = organizationService.selectByPrimaryKey(organizationid);
				if (0 != specialtyid) {
					rwbmry.setCjbmdm(specialtyid);
					rwbmry.setLevel(3);
					rwbmry.setUserid(userId);
					rwbmry.setZyssxyid(organizationid);
					i =asZlZlrwbmryService.insertSelective(rwbmry);
				}else{
					rwbmry.setCjbmdm(organizationid);
					rwbmry.setLevel(organization.getLevel());
					rwbmry.setUserid(userId);
					rwbmry.setZyssxyid(null);
					 i = asZlZlrwbmryService.insertSelective(rwbmry);
				}
			}
		}else if(countOr!=0&&countOr==0&&specialtyid!=0){
			for (int j = 0; j < userid.length; j++) {
				int userId=Integer.parseInt(userid[j]);
				//查询level
				Organization organization = organizationService.selectByPrimaryKey(organizationid);
				if (0 != specialtyid) {
					rwbmry.setCjbmdm(specialtyid);
					rwbmry.setLevel(3);
					rwbmry.setUserid(userId);
					rwbmry.setZyssxyid(organizationid);
					i =asZlZlrwbmryService.insertSelective(rwbmry);
				}else{
					rwbmry.setCjbmdm(organizationid);
					rwbmry.setLevel(organization.getLevel());
					rwbmry.setUserid(userId);
					rwbmry.setZyssxyid(null);
					 i = asZlZlrwbmryService.insertSelective(rwbmry);
				}
			}
		}else{
			i=0;
		}
		return i;
	}
	/**
	 * 根据id删除记录
	 * @param response
	 * @param request
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value="deleteRWBMRY",method=RequestMethod.POST)
	@ResponseBody
	public String deleteRWBMRY(HttpServletResponse response,HttpServletRequest request) {
		int id=Integer.parseInt(request.getParameter("id"));//获取数据id
		int i=asZlZlrwbmryService.deleteByPrimaryKey(id);
		return JSONArray.fromObject(i).toString();
	}
	/**
	 * 批量
	 * @param response
	 * @param request
	 * @return
	 */
	@RequestMapping(value="deleteMultiple",method=RequestMethod.POST)
	@ResponseBody
	public String deleteMultiple(HttpServletResponse response,HttpServletRequest request){
		int j=0;
		String ids = request.getParameter("ids");
		String[] id = ids.split(",");
		for (int i = 0; i < id.length; i++) {
			int id2=Integer.parseInt(id[i]); 
			j=asZlZlrwbmryService.deleteByPrimaryKey(id2);
		}
		return JSONArray.fromObject(j).toString();
	}
}
