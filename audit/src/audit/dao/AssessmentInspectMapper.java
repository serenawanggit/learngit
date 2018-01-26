package audit.dao;

import java.util.List;
import java.util.Map;

public interface AssessmentInspectMapper {
	/**
	 * 得到相关的现场考察信息根据登录账号
	 * @param id
	 * @param syear
	 * @return
	 */
	List<Map<String,Object>> selectBySpotPeopleId(Integer id,String syear);
	/**
	 * 获取现场反馈的情况根据体系id
	 * @param syear
	 * @param userId
	 * @param sysid
	 * @return
	 */
	List<Map<String,Object>> selectInspectBySysid(Map<String,Object> map);
	/**
	 * 获取的现场考察的所有体系
	 * @return
	 */
	List<Map<String,Object>> getInspectSysInfo(Map<String,Object> map);
	/**
	 * 批量插入现场考察
	 * @param map
	 * @return
	 */
	int insert(List<Map<String,Object>> list);
	/**
	 * 修改现场考察现场的表
	 * @param map
	 * @return
	 */
	int updateInspect(Map<String,Object> map);
	/**
	 * 查询所有的活动
	 * @return
	 */
	List<Map<String,Object>> getAllData(Map<String,Object> map);
	
	List<Map<String,Object>> getAllData1(Map<String,Object> map);
	
	List<Map<String,Object>> selectExpedition();
	/**
	 * 查询所有工作表
	 * @param rid
	 * @param userId
	 * @param syear
	 * @param specialtyId
	 * @return
	 */
	List<Map<String,Object>> selectFieldRecord(Map<String,Object> map);
	
	int insertTestRecord(Map<String,Object> map);
	
	int updateTestRecord(Map<String,Object> map);
	
	int insertGraduation(Map<String,Object> map);
	
	int updateGraduation(Map<String,Object> map);
	
	List<Map<String,Object>> selectGraduation(Map<String,Object> map);
	
	int deleteGraduations(Integer id);
	
	List<Map<String,Object>> selectRoleBySpeId(Integer specialtyId,Integer userId);
	
	List<Map<String,Object>> selectPeopleBySpeId(Integer specialtyId,String syear);
	
	List<Map<String,Object>> selectSpecInfo(Map<String,Object> map);	
	
	int selectBoolean(Map<String,Object> map);
	
	List<Map<String,Object>> selectParentId(Map<String, Object> map);
	int	selectChildensCount(Integer pid);
	List<Map<String,Object>> selectRecord(Map<String,Object> map);
	List<Map<String,Object>> selectContent(Map<String,Object> map);
	List<Map<String,Object>> selectSpectyList(Map<String,Object> map);
	
	List<Map<String,Object>> selectPFNoDJ(Map<String,Object> map);
	List<Map<String,Object>> selectPFDJ(Map<String,Object> map);
	List<Map<String,Object>> selectLastEnd(Map<String,Object> map);
	
	List<Map<String,Object>> selectLastEndID(Map<String,Object> map);
	
}
