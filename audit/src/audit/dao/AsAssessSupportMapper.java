package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.report.AssessSupport;

public interface AsAssessSupportMapper {

	int deleteById(Integer id);
	
	List<AssessSupport> getAllSupportById(Integer sysId,String rYear,Integer userId,Integer specialtyId);
	
	int insert(Map<String,Object> map);
	
	AssessSupport  selectById(Integer id);
	
	List<Map<String,Object>>  selectAllSupportBySpeId(String rYear,Integer userId,Integer specialtyId,Integer type);
	
}
