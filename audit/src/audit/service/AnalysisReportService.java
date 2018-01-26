package audit.service;

import java.util.List;
import java.util.Map;

public interface AnalysisReportService {

	//根据表名查询templateid
	public List<Map<String, Object>> getTemplateByTableName(Map<String, String> map);

	//查询表头
	public List<Map<String, Object>> findFieldByTemplateId(Integer templateId);

	//根据表名查询数据
	List<Map<String, Object>> findAllDataByTableName(Map<String, String> map);
}
