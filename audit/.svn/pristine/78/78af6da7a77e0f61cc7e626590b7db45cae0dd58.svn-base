package audit.controller.shutcmData;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.service.AnalysisReportService;

@Controller
@RequestMapping("analysisReport")
public class AnalysisReportController {
	
	@Autowired
	AnalysisReportService analysisReportService;

	/**
	 * 根据表名模糊查询，查询表的信息
	 * @param tableName
	 * @return
	 */
	@ResponseBody
	@RequestMapping("getTemplateByTableName")
	public List<Map<String, Object>> getTemplateByTableName(@RequestParam String tableName){
		Map<String, String> map = new HashMap<String, String>();
		map.put("tableName", tableName);
		return analysisReportService.getTemplateByTableName(map);
	}
	
	@ResponseBody
	@RequestMapping("findFieldByTemplateId")
	public List<Map<String, Object>> findFieldByTemplateId(@RequestParam Integer templateId){
		return analysisReportService.findFieldByTemplateId(templateId);
	}
	
	@ResponseBody
	@RequestMapping("findAllDataByTableName")
	public List<Map<String, Object>> findAllDataByTableName(@RequestParam Integer templateId,@RequestParam String dateReport){
		Map<String, String> map = new HashMap<String, String>();
		map.put("templateId", templateId+"");
		List<Map<String, Object>> list = analysisReportService.getTemplateByTableName(map);
		map.put("tableName", list.get(0).get("OBJECT_NAME")+"");
		map.put("time", dateReport);
		return analysisReportService.findAllDataByTableName(map);
	}
	
}
