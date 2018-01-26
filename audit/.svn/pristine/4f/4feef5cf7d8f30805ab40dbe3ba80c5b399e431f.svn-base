package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.report.AssessReport;

public interface AsAssessReportMapper {
   AssessReport getAllReport(Integer sysid,Integer specialty_id,Integer userId,String rYear);
   
   int deleteById(Integer id);
   
  AssessReport selectById(Integer id);
  
  	int insert(AssessReport record);
  	
  	int insertContent(AssessReport record);
  	
  	int updateReport(AssessReport record);
  	
  	List<Map<String,String>> getAllSpecialtyByItem(Integer specialtyId); 
  	
  	List<Map<String,Object>> getAllReportBySpeId(String rYear,Integer userId,Integer specialtyId,Integer type);
  	
  	AssessReport getAllReportZu(Map<String,Object> map);
  	
  	int insertReportRead(Map<String,Object> map);
  	
  	//上传材料
  	int insertSelfDataFile(Map<String, Object> map);
  	
  //查询自评报告
  	Map<String, Object> getSelfDataById(Integer id);
  	
  	//查询指标查询报告信息
  	List<Map<String, Object>> getReportBySysid(Map<String, Object> map);
  	
  	//查询网评人的节点意见
  	List<Map<String, Object>> findRectificationBySysid(Map<String, Object> map);
  	
  	//查询网评的专业总意见
  	List<Map<String, Object>> getRectificationBySpecialtyId(Map<String, Object> map);
  	
  //查询考察人员和组长的的节点意见
  	List<Map<String, Object>> findrecordBySysid(Map<String, Object> map);
  	
  //查询考察人员和组长的的总意见
  	List<Map<String, Object>> getRecordBySpecialtyId(Map<String, Object> map);
  	
  //查询考察人员和组长的的总意见
  	List<Map<String, Object>> getAllreportToSHR(Map<String, Object> map);
}
