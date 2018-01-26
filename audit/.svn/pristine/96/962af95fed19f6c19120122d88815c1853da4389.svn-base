package audit.service;

import java.util.List;
import java.util.Map;

import audit.model.report.AssessSupport;

public interface AsAssessSupportService {

	 List<AssessSupport> getAllSuportById(Integer sysId,String rYear,Integer userId,Integer specialtyId);

	 int deleteById(Integer id);

	int insert(Map<String,Object> map);

	AssessSupport selectByid(Integer id);

	List<Map<String, Object>> selectAllSupportBySpeId(String rYear,
			Integer userId, Integer specialtyId, Integer type);

}