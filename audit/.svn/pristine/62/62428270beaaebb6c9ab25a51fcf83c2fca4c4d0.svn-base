package audit.controller.shutcmData;

import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.service.AssessmentSystemService;
import audit.service.SupportMaterialLibraryService;
import audit.util.CookieUtil;

@Controller
@RequestMapping("shutcmDataTemplate")
public class ShutcmDataTemplateController {

	@Autowired
	AssessmentSystemService assessmentSystemService;
	@Autowired
	SupportMaterialLibraryService supportMaterialLibraryService;
	
	/**
	 * 查询SHUTCM_DATA_TYPE的父节点数据
	 * @return
	 */
	@RequestMapping("findDataType")
	@ResponseBody
	public List<Map<String, Object>> findDataType(){
		List<Map<String, Object>> list = assessmentSystemService.findDataTypeToParentName();
		return list;
	}
	
	/**
	 * 根据ID查询SHUTCM_DATA_TYPE的父子节点数据
	 * @param id
	 * @return
	 */
	@RequestMapping("findDataTypeByParent")
	@ResponseBody
	public List<Map<String, Object>> findDataTypeByParent(@RequestParam String id){
		Map<String, String> map = new HashMap<String, String>();
		map.put("id", id);
		List<Map<String, Object>> list = assessmentSystemService.findDataTypeToChild(map);
		return list;
	}
	
	/**
	 * 根据时间，表名和专业查询SHUTCM_DATA_TEMPLATE数据
	 * @param map
	 * @return
	 */
	@RequestMapping("findDataTemplate")
	@ResponseBody
	public List<Map<String, Object>> findDataTemplate(@RequestParam Map<String, Object> map){
		Object object = map.get("INSERT_VSERSION");
		Object tableName = map.get("TABLE_NAME");
		if("".equals(map.get("TABLE_NAME")) || map.get("TABLE_NAME")==null) map.put("TABLE_NAME", null);
		else map.put("TABLE_NAME", "%" + tableName + "%");
		
		if("".equals(map.get("INSERT_VSERSION")) || map.get("INSERT_VSERSION")==null) map.put("INSERT_VSERSION", null);
//		else map.put("INSERT_VSERSION", object + "/09/30");
		
		if("".equals(map.get("CATEGORY_ID")) || "请选择".equals(map.get("CATEGORY_ID"))) map.put("CATEGORY_ID", null);
		
		List<Map<String, Object>> list = supportMaterialLibraryService.findDataTemplateByWhere(map);
		return list;
	}
	
	@RequestMapping("findDataTemplateByOrganizationid")
	@ResponseBody
	public List<Map<String, Object>> findDataTemplateByOrganizationid(@RequestParam Map<String, Object> map){
		if("".equals(map.get("INSERT_VSERSION")) || map.get("INSERT_VSERSION")==null) map.put("INSERT_VSERSION", null);
		if(map.get("UTYPE")==null || "".equals(map.get("UTYPE"))) map.put("UTYPE", null);
		List<Map<String, Object>> list = supportMaterialLibraryService.findDataTemplateByOrganizationid(map);
		return list;
	}
	
	@RequestMapping("findFieldBySdtid")
	@ResponseBody
	public List<Map<String, Object>> findFieldBySdtid(@RequestParam Map<String, String> map){
		List<Map<String, Object>> templateList = assessmentSystemService.getTemplateByTableName(map);
		map.clear();
		map.put("sdtId", templateList.get(0).get("ID")+"");
		List<Map<String, Object>> list = assessmentSystemService.findFieldBySdtId(map);
		return list;
	}
	
	@RequestMapping("findTableDataByXY")
	@ResponseBody
	public List<Map<String, Object>> findTableDataByXY(@RequestParam Map<String, String> map,HttpServletRequest request){
		List<Map<String, Object>> templateList = assessmentSystemService.getTemplateByTableName(map);
		String ename = (String)templateList.get(0).get("OBJECT_NAME");
		map.put("tableEname", "ODS" + ename.substring(3));
		Map<String, Object> userMap = new HashMap<String, Object>();
		Map<String, Object> roleMap = new HashMap<String, Object>();
		try {
			userMap = assessmentSystemService.getUserById(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			roleMap = assessmentSystemService.getUserToRole(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		List<Map<String, Object>> list = null;
		//判断该人是校级领导还是院级领导
		if("校级领导".equals(roleMap.get("name"))){
			map.put("fieldValue", null);
			list = assessmentSystemService.findTableDataByXY(map);
		}else{
			map.put("fieldValue", userMap.get("code")+"");
			list = assessmentSystemService.findTableDataByXY(map);
		}
		return list;
	}
	
	@RequestMapping("findTableDataBySY")
	@ResponseBody
	public List<Map<String, Object>> findTableDataBySY(@RequestParam Map<String, String> map,HttpServletRequest request){
		Map<String, Object> userMap = new HashMap<String, Object>();
		try {
			userMap = assessmentSystemService.getUserById(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		map.put("fieldValue", userMap.get("code")+"");
		List<Map<String, Object>> list = assessmentSystemService.findTableDataBySY(map);
		return list;
	}

	@RequestMapping("findTableDataByGH")
	@ResponseBody
	public List<Map<String, Object>> findTableDataByGH(@RequestParam Map<String, String> map,HttpServletRequest request){
		List<Map<String, Object>> templateList = assessmentSystemService.getTemplateByTableName(map);
		String ename = (String)templateList.get(0).get("OBJECT_NAME");
		map.put("tableEname", "ODS" + ename.substring(3));
		Map<String, Object> userMap = new HashMap<String, Object>();
		try {
			userMap = assessmentSystemService.getUserById(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		map.put("fieldValue", userMap.get("code")+"");
		List<Map<String, Object>> list = assessmentSystemService.findTableDataByGH(map);
		return list;
	}

	@RequestMapping("findTableDataByZYDM")
	@ResponseBody
	public List<Map<String, Object>> findTableDataByZYDM(@RequestParam Map<String, String> map,HttpServletRequest request){
		List<Map<String, Object>> templateList = assessmentSystemService.getTemplateByTableName(map);
		String ename = (String)templateList.get(0).get("OBJECT_NAME");
		map.put("tableEname", "ODS" + ename.substring(3));
		Map<String, Object> userMap = new HashMap<String, Object>();
		try {
			userMap = assessmentSystemService.getUserById(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		map.put("fieldValue", userMap.get("code")+"");
		List<Map<String, Object>> list = assessmentSystemService.findTableDataByZYDM(map);
		return list;
	}

	@RequestMapping("findTableDataByKCH")
	@ResponseBody
	public List<Map<String, Object>> findTableDataByKCH(@RequestParam Map<String, String> map,HttpServletRequest request){
		List<Map<String, Object>> templateList = assessmentSystemService.getTemplateByTableName(map);
		String ename = (String)templateList.get(0).get("OBJECT_NAME");
		map.put("tableEname", "ODS" + ename.substring(3));
		Map<String, Object> userMap = new HashMap<String, Object>();
		try {
			userMap = assessmentSystemService.getUserById(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		map.put("fieldValue", userMap.get("code")+"");
		List<Map<String, Object>> list = assessmentSystemService.findTableDataByKCH(map);
		return list;
	}

	@RequestMapping("findTableDataByXH")
	@ResponseBody
	public List<Map<String, Object>> findTableDataByXH(@RequestParam Map<String, String> map,HttpServletRequest request){
		List<Map<String, Object>> templateList = assessmentSystemService.getTemplateByTableName(map);
		String ename = (String)templateList.get(0).get("OBJECT_NAME");
		map.put("tableEname", "ODS" + ename.substring(3));
		Map<String, Object> userMap = new HashMap<String, Object>();
		try {
			userMap = assessmentSystemService.getUserById(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		map.put("fieldValue", userMap.get("code")+"");
		List<Map<String, Object>> list = assessmentSystemService.findTableDataByXH(map);
		return list;
	}

	@RequestMapping("findTableDataByZYTo1_5")
	@ResponseBody
	public List<Map<String, Object>> findTableDataByZYTo1_5(@RequestParam Map<String, String> map,HttpServletRequest request){
		List<Map<String, Object>> templateList = assessmentSystemService.getTemplateByTableName(map);
		String ename = (String)templateList.get(0).get("OBJECT_NAME");
		map.put("tableEname", "ODS" + ename.substring(3));
		Map<String, Object> userMap = new HashMap<String, Object>();
		try {
			userMap = assessmentSystemService.getUserById(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		map.put("fieldValue", userMap.get("code")+"");
		List<Map<String, Object>> list = assessmentSystemService.findTableDataByZYTo1_5(map);
		return list;
	}

	@RequestMapping("findTableDataByZYTo1_5And6_2_1")
	@ResponseBody
	public List<Map<String, Object>> findTableDataByZYTo1_5And6_2_1(@RequestParam Map<String, String> map,HttpServletRequest request){
//		List<Map<String, Object>> templateList = assessmentSystemService.getTemplateByTableName(map);
//		String tableName = templateList.get(0).get("OBJECT_NAME")+"";
//		String ename = "ODS" + tableName.substring(3, tableName.length()-1);
//		map.put("tableEname", ename);
		Map<String, Object> userMap = new HashMap<String, Object>();
		try {
			userMap = assessmentSystemService.getUserById(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		map.put("fieldValue", userMap.get("code")+"");
		List<Map<String, Object>> list = assessmentSystemService.findTableDataByZYTo1_5And6_2_1(map);
		return list;
	}
}
