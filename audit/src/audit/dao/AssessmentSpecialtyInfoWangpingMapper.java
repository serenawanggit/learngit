package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.vo.As_Assess_SupportVo;
import audit.model.assess.vo.As_assess_reportVo;
import audit.model.quality.vo.Assess_comment_rectificationVo;
import audit.model.quality.vo.ContentInfo;
import audit.model.quality.vo.LookReportVo;
import audit.model.quality.vo.ZgList;

public interface AssessmentSpecialtyInfoWangpingMapper {
	/**
	 * 查询list
	 * @return
	 */

	public List<ZgList> findWangPingList(String tYear,String userid,String struts) throws Exception;
	/**
	 * 查询整改报告
	 * @param specialty_id
	 * @param userid
	 * @param ryear
	 * @return
	 * @throws Exception
	 */
	public List<ContentInfo> findRectificationConentInfo(String specialty_id,String userid,String ryear) throws Exception;

	public void insertAssess_comment_rectification(
			String SYSID,
			String COMMENT_USERID,
			String COMMENT_TIME,
			String COMMENT_CONTENT,String ITEM,
			String SYEAR,
			String COMMENT_TYPE,
			String COMMENT_SUGGESTIONS,
			String specialty_id,
			String syscore, 
			String grade
			) throws Exception;

	public int findIsHaveAssess_comment_rectification_Zong(String userid,String specialty_id,String item)throws Exception;
	public Assess_comment_rectificationVo getWangPingZongComment(String userid,String specialty_id,String item)throws Exception;

	public Assess_comment_rectificationVo getWangPingTiXiComment(String userid,String specialty_id,String item,String sysId)throws Exception;
	public int findIsHaveAssess_comment_rectification_TiXi(String userid,String specialty_id,String item,String sysId)throws Exception;

	public void  updateAssess_comment_rectification_comment_content(String conment,String userid,String specialty_id,String item,String sysId,String syscore,String grade)throws Exception;
	public void  updateAssess_comment_rectification_comment_suggestions(String conment,String userid,String specialty_id,String item,String comment_suggestions)throws Exception;
	public As_assess_reportVo findReport(@Param("specialty_id") String specialty_id,@Param("sysId") String sysId,@Param("userid") String userid,@Param("rYear") String rYear,@Param("specialty_name") String  specialty_name) throws Exception;
	public List<As_Assess_SupportVo> findAs_assess_support(@Param("Sysid") String Sysid,@Param("Ryear") String Ryear,@Param("Userid") String Userid, @Param("Specialty_id") String Specialty_id,@Param("Report_id") String Report_id,@Param("specialty_name") String specialty_name)throws Exception;
	public List<LookReportVo> getAllReports(Map<Object, Object> map);


	public void updateAssessment_task_pass(String time, String task_id);

	List<Map<String,Object>>  getAllData(Map<Object,Object> map);
	String getUserName(String userid);
	List<String> getTypeForSpecialty(String useid,String specialty_id);
	As_Assess_SupportVo getAs_assess_supportById(String supportId);
	public String selectOrganizationName(String userid, String sp_id);

	String selectSysName(String sid);
	String selectUserType(String userid);
	List<String> selectZyName();
	
	
	//网评状态表 
	List<Map<Object, Object>> selcteWangPStruts(Map<Object, Object> map); 
	//网评状态表
	void updateWangPStruts(Map<Object, Object> map);
	//网评状态表
	void insertWangPStruts(Map<Object, Object> map);
	
	//根据用户，时间，专业类型，模块查询网评数据
	List<Assess_comment_rectificationVo> findAllWangpingInfo(String userid,String specialty_id,String item,String SYEAR);
	
	//根据节点查看网评信息
	List<Map<String, Object>> selectWpr(Map<String, Object> ma);
	
	//查询模块的网评信息
	List<Map<String, Object>> selectWprTx(Map<String, Object> ma);
	
	//添加现场考查的信息
	int insertRecord(Map<String, Object> map);
	int updateRecord(Map<String, Object> map);
	//查询现场考查信息
	List<Map<String, Object>> selectRecord(Map<String, Object> map);
	
	//根据网评ID查询网评信息
	List<Map<String, Object>> selectWpID(Map<String, Object> map);
	
	//根据专业ID查询专业信息 selectSpecialtyId
	
	List<Map<String, Object>> selectSpecialtyId(Map<String, Object> map);
}
