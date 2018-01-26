package audit.service;

import java.util.List;
import java.util.Map;

public interface AssessmentInspectService {

	public abstract List<Map<String, Object>> selectBySpotPeopleId(Integer id,
			String syear);

	List<Map<String, Object>> selectInspectBySysid(Map<String,Object> map);


	int insert(List<Map<String, Object>> list);

	int updateInspect(Map<String, Object> map);

	List<Map<String, Object>> selectExpedition();

	int insertTestRecor(Map<String, Object> map);

	int updateTestRecord(Map<String, Object> map);

	int insertGraduation(Map<String, Object> map);

	int updateGraduation(Map<String, Object> map);

	List<Map<String, Object>> getInspectSysInfo(Map<String,Object> map);

	int deleteGraduation(Integer id);

	List<Map<String, Object>> selectRoleBySpeId(Integer specialtyId,
			Integer userId);

	List<Map<String, Object>> selectPeopleBySpeId(Integer specialtyId,
			String syear);

	List<Map<String, Object>> getAllData(Map<String, Object> map);

	List<Map<String, Object>> getAllData1(Map<String, Object> map);

	List<Map<String, Object>> selectGraduation(Map<String, Object> map);

	List<Map<String, Object>> selectFieldRecord(Map<String, Object> map);

	List<Map<String, Object>> selectSpecInfo(Map<String, Object> map);
	
	List<Map<String,Object>> selectParentId(Map<String, Object> map);
	int	selectChildensCount(Integer pid);
	List<Map<String,Object>> selectRecord(Map<String,Object> map);
	List<Map<String,Object>> selectContent(Map<String,Object> map);
	List<Map<String,Object>> selectSpectyList(Map<String,Object> map);
	/*int selectBoolean(Map<String, Object> map);*/
	
	List<Map<String,Object>> selectPFNoDJ(Map<String,Object> map);
	List<Map<String,Object>> selectPFDJ(Map<String,Object> map);
	
	List<Map<String,Object>> selectLastEnd(Map<String,Object> map);
	List<Map<String,Object>> selectLastEndID(Map<String,Object> map);
}