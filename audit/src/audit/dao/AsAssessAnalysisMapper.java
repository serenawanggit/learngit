package audit.dao;

import java.util.List;
import java.util.Map;

public interface AsAssessAnalysisMapper {

 List<Map<String,Object>> getZRJSQKB(Map<String,Object> map);

 int insertRecPlan(Map<String,Object> map);
 
 List<Map<String,Object>> selectRecPlan(Map<String,Object> map);
 
 int updateRecPlan(Map<String,Object> map);
 
 List<Map<String,Object>> selectRecPlanById(Map<String,Object> map);
 
 List<Map<String,Object>> selectRecPlanByShid(Map<String,Object> map);
}
