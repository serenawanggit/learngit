package audit.controller.assessment;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.service.AsAssessReportService;
import audit.service.AssessmentSystemService;
import audit.service.assess.AssessmentSpecialtyInfoServices;

@Controller
@RequestMapping("assessmentTeach")
public class AssessmentTeachController {

	@Autowired AssessmentSpecialtyInfoServices ssessmentSpecialtyInfoServices;
	@Autowired 
	AssessmentSystemService assessmentSystemService;
	@Autowired 
	AsAssessReportService asAssessReportService;
	
	/**
	 * 根据评估类型查询专业信息
	 * @param pgType
	 * @return
	 */
	@ResponseBody
	@RequestMapping("findAllSpecialtyInfoList")
	public List<Map<String, Object>> findAllSpecialtyInfoList(@RequestParam Integer pgType){
		return ssessmentSpecialtyInfoServices.findAllSpecialtyInfo(pgType);
	}
	
	/**
	 * 根据评估类型查询有没有三级指标
	 * @param pgType
	 * @return
	 */
	@ResponseBody
	@RequestMapping("findThreeSystemByStype")
	public Integer findThreeSystemByStype(@RequestParam Integer pgType){
		List<Map<String, Object>> list = assessmentSystemService.findThreeSystemByStype(pgType);
		int count = 0;
		for (Map<String, Object> map : list) {
			if("3".equals(map.get("LEVEL")+"")){
				count ++;
			}
		}
		if(count>0) return 1;
		else return 0;
	}
	
	/**
	 * 根据评估类型查询三级指标的数据和报表数据
	 * @param pgType
	 * @return
	 */
	@ResponseBody
	@RequestMapping("findSystemInfoAndReportByStype")
	public List<Map<String, Object>> findSystemInfoAndReportByStype(HttpServletRequest request,@RequestParam Map<String, Object> map){
		System.out.println(map);
//		int userId = 0;
//		try {
//			userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
//			map.put("userId", userId);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
		List<Map<String, Object>> list = null;
		list = assessmentSystemService.findSystemInfoAndReportByStype(map);//三级
//		for (Map<String, Object> map2 : list) {
//			Map<String,Object> contentMap = new HashMap<String, Object>();
//			if(map2.get("ID")!=null){
//				contentMap.put("sysid", map2.get("ID"));
//				map.put("sysid", map2.get("ID"));
//			}else{
//				contentMap.put("sysid", map2.get("pid"));
//				map.put("sysid", map2.get("pid"));
//			}
//			//查询指标内容
//			List<Map<String, Object>> contentList = assessmentSystemService.getSytemContentBySyid(contentMap);
//			for (Map<String, Object> cmap : contentList) {
//				map2.put("sysscore", cmap.get("score"));
//				map2.put("level_a", cmap.get("level_a"));
//				map2.put("level_c", cmap.get("level_c"));
//				map2.put("total", cmap.get("total"));
//				map2.put("ratio", cmap.get("ratio"));
//			}
//			Map<String, Object> reportList = assessmentSystemService.getReportInfoBySysid(map);
//			System.out.println("-------------------reportList:"+reportList);
//			if(reportList!=null){
//				map2.put("grade", reportList.get("grade"));
//				map2.put("score", reportList.get("score"));
//				map2.put("problem", reportList.get("problem"));
//				map2.put("UPLOAD_FILES", reportList.get("UPLOAD_FILES"));
//				map2.put("FILE_ONLINE_URL", reportList.get("FILE_ONLINE_URL"));
//				map2.put("ENTER_CONTENT", reportList.get("ENTER_CONTENT"));
//			}
//		}
		
		return list;
	}
	
	/**
	 * 根据id查询专业信息
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping("getSpecialtyById")
	public List<Map<String, Object>> getSpecialtyById(@RequestParam Integer id){
		List<Map<String, Object>> list = ssessmentSpecialtyInfoServices.selectById(id);
		return list;
	}
	
	/**
	 * 根据id查询自评人，审核人，网评人等。。
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping("findSpecialtyInfoBySpecialtyId")
	public List<Map<String, Object>> findSpecialtyInfoBySpecialtyId(@RequestParam String id){
		List<Map<String, Object>> list = ssessmentSpecialtyInfoServices.findSpecialtyInfoBySpecialtyId(id);
		return list;
	}
	
	@ResponseBody
	@RequestMapping("findZPRInfo")//SYSID=#{sysid} and USERID=#{userId} and SPECIALTY_ID=#{specialtyId} and RYEAR=#{syear}
	public Map<String, Object> findZPRInfo(@RequestParam String sysId,@RequestParam String syear,@RequestParam String specialty,@RequestParam String userId){
		Map<String, Object> map = new HashMap<>();
		map.put("sysid", sysId);
		map.put("specialtyId", specialty);
		map.put("syear", syear);
		map.put("userId", userId);
		Map<String, Object> reportList = assessmentSystemService.getReportInfoBySysid(map);
		return reportList;
	}
	
	@ResponseBody
	@RequestMapping("findSystemInfoBySyear")
	public List<Map<String, Object>> findSystemInfoBySyear(@RequestParam Integer id,@RequestParam String syear,@RequestParam Integer stype){
		List<Map<String, Object>> list = assessmentSystemService.findSystemInfoByStypt(stype, syear,id);
		return list;
	}
	
	//审核人
	@ResponseBody
	@RequestMapping("getSHReportBySysid")
	public List<Map<String, Object>> getSHReportBySysid(@RequestParam Map<String, Object> map){
		
		List<Map<String,Object>> list = asAssessReportService.getReportBySysid(map);
		return list;
	}
	
	/**
	 * 查询网评的意见
	 * @param map
	 * @return
	 */
	@ResponseBody
	@RequestMapping("getWPRectificationInfo")
	public List<Map<String, Object>> getWPRectificationInfo(@RequestParam Map<String, Object> map){
		List<Map<String, Object>> list = asAssessReportService.findRectificationBySysid(map);
		return list;
	}
	
	/**
	 * 查询网评的专业总意见
	 * @param map
	 * @return
	 */
	@ResponseBody
	@RequestMapping("getWPRectificationToSuggestion")
	public List<Map<String, Object>> getWPRectificationToSuggestion(@RequestParam Map<String, Object> map){
		List<Map<String, Object>> list = asAssessReportService.getRectificationBySpecialtyId(map);
		return list;
	}
	
	/**
	 * 查询考察专家和组长的意见
	 * @param map
	 * @return
	 */
	@ResponseBody
	@RequestMapping("findKCRecordInfoBySysid")
	public List<Map<String, Object>> findKCRecordInfoBySysid(@RequestParam Map<String, Object> map){
		List<Map<String, Object>> list = asAssessReportService.findrecordBySysid(map);
		return list;
	}
	
	/**
	 * 查询考察专家和组长的总意见
	 * @param map
	 * @return
	 */
	@ResponseBody
	@RequestMapping("getKCRecordToSuggestion")
	public List<Map<String, Object>> getKCRecordToSuggestion(@RequestParam Map<String, Object> map){
		List<Map<String, Object>> list = asAssessReportService.getRecordBySpecialtyId(map);
		return list;
	}
	
	/**
	 * 查询审核人的总意见
	 * @param map
	 * @return
	 */
	@ResponseBody
	@RequestMapping("getAllreportToSHR")
	public List<Map<String, Object>> getAllreportToSHR(@RequestParam Map<String, Object> map){
		List<Map<String, Object>> list = asAssessReportService.getAllreportToSHR(map);
		return list;
	}
	
}
