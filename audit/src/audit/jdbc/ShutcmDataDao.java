package audit.jdbc;

import java.util.List;
import java.util.Map;

public interface ShutcmDataDao {
	
	//根据表名查询数据
	List<Map<String, Object>> findAllDataByTableName(Map<String, String> map);

//	List<Map<String, Object>> findData(Map<String, String> data);
//	
//	Map<String, Object> queryCountData(DataTemplate dataTemplate, String reportDate, Integer schoolId, Integer userId);
//
//	
//	List<Map<String, String>> queryData(Map<String, String> map, List<DataField> fieldList,
//			DataTemplate dataTemplate);
//
//	Integer getCount(Map<String, String> map, DataTemplate dataTemplate);
}