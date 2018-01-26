package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.AS_ASSESS_INDEX_FORMULA;
import audit.model.Asses_filedsum;
import audit.model.DW_V_LEADERSHIP;
import audit.model.assess.vo.As_assess_reportVo;
import audit.model.assess.vo.ZYJSMessgeVo;
import audit.model.quality.Assessment_system_info;
import audit.model.quality.vo.ContentInfo;
import audit.model.quality.vo.LookReportVo;
import audit.model.quality.vo.UserVo;
import audit.model.quality.vo.ZgList;

public interface AssessmentSpecialtyInfoXueYuanMapper {
	/**
	 * 查询list
	 * @return
	 */
	
	public List<ZgList> findAssessmentList(String tYear,String userid, int pgid);
	
	/**
	 * 专业评估整改表
	 * @param c
	 * @return
	 */
	public List<ContentInfo> findRectificationConentInfo(ContentInfo  c);
	
	/**
	 * 修改Assessment_task
	 */
	public void  updateAssessment_task(String self_assess_zt,String audit_zt,String audit_time,String specialty_id,String item);
	/**
	 * 修改审核表
	 */
	public void  updateAs_assess_rectification(String blackcontent,String ASSESS_userid,String ASSESS_time,String ID);
	/*
	 * 专业建设报告内容表
	 */
	
	public As_assess_reportVo  findReportConentInfo(String Specialty_id,String Sysid,String userid);
	
	/**
	 * 
	 * @param blackcontent 内容
	 * @param id  AS_ASSESS_REPORT的id
	 */
	public void  updateAs_assess_report_blackcontent(String blackcontent,String userid,String report_id);
	public void  updateAs_assess_report_blackcontent1(String blackcontent, int userid, int sysId,int specialtyId,String dateYear,String SHDJ,String SHFS);
	/**
	 * 查询 专业建设详情
	 * @param specialty_id
	 * @return
	 */
	public List<ZYJSMessgeVo>  findZYJSMessge(String specialty_id,String userid,String parent_id);
	/**
	 * 查询 专业情况概要
	 * @param specialty_id
	 * @return
	 */
	public List<ZYJSMessgeVo> findZYQKGY(String specialty_id,String userid);
	
	
	/**
	 * 专业建设存在的问题与改进方向
	 */
	public List<ZYJSMessgeVo> findZYJSPMessge(String specialty_id,String userid);
	/**
	 *  
	 * @param tYear 
	 * @param specialty_id
	 * @param USERID
	 * @param BLACKCONTENT
	 */
	public void  insertASSESSMENT_ALLREPORT(String tYear,String specialty_id,String USERID,String BLACKCONTENT);
	/**
	 * 修改返回内容
	 * @param blackcontent
	 * @param specialty_id
	 */
	public void  updateAssessment_allreportBlackcontent(String blackcontent,String specialty_id);
	/**
	 * 
	 * @param blackcontent
	 * @param id 总意见id
	 */
	public void updateAssessment_allreportBlackcontentById(String blackcontent,String id);
	public String findAssessment_allreport_BLACKCONTENT(String specialty_id,String userid);
	/**
	 * 查询Assessment_allreport 数量
	 * @param specialty_id
	 * @return
	 */
	public int  selectAssessment_allreportNum(String specialty_id);
	/**
	 * ASSESSMENT_ALLREPORT.id
	 * @param id
	 * @return
	 */
	public int  selectAssessment_allreportNumById(String id);
	/**
	 * 查询专业名称
	 * @param specialty_id
	 * @return
	 */
	public String findAssessment_specialty_info_Name(String specialty_id);
	/**
	 * 查询专业是否工科
	 * @param specialty_id
	 * @return
	 */
	public String findAssessment_specialty_info_Is_engineering(String specialty_id);
	/**
	 * 查询总文件
	 * @param USERID
	 * @param tYear
	 * @param specialty_id
	 * @return
	 */
	public LookReportVo getAllReports(String USERID,String tYear,String specialty_id);
	/**
	 * 查询user 名字
	 * @param userid
	 * @return
	 */
	public UserVo findUserInfo(String userid);
	/**
	 * 查询自评时间（审核时间）
	 * @param specialty_id
	 * @return
	 */
	public String getSelf_assessment_date(String specialty_id);
	/**
	 * 
	 * @param id
	 * @param speId
	 * @return
	 */
	List<Map<String,Object>>  getAllData(String id,String speId);

	public String selectAssessment_allreport(String userid, String sp_id,
			String tYear);
	
	
	List<Map<String,Object>> getData(int id,String dateYear);
	
	//根据id查询专业信息
	List<Map<String,Object>> getDataById(int id);
	
	List<Map<String,Object>> getDataReport(int sysId,int specialtyId,String dateYear);
	List<Map<String,Object>> getDataCailiao(int sysId,int specialtyId,String dateYear);
	List<Map<String,Object>> getDataDLSJB(int sysId,int userId,String dateYear);
	List<Map<String,Object>> getDataQXSJB(int sysId,int userId,String dateYear);
	public void UpdateASSESSMENT_TASKPass(int audit_zt, String dateYear,
			int specialtyId,String date);
	public void UpdateASSESSMENT_TASKNoPass(String dateYear, int specialtyId,String date);
	
	List<Map<String,Object>> getASSESSMENT_TASK(String dateYear,int specialtyId);
	List<AS_ASSESS_INDEX_FORMULA> getAS_ASSESS_INDEX_FORMULA(int sysid,String dateYear );
	public Asses_filedsum Selectas_asses_filedsum(int sysId, String dateYear);
	int SelectReal(int sysId, String dateYear,int specialtyId);
	DW_V_LEADERSHIP SelectDW_V_LEADERSHIPZHI(int specialtyId, String dateYear,
			String chinase);
//	List<ZgList>	getAllSpecialty(Integer id,String syear,Integer pgtype);
	List<Map<String, Object>> selectWpr();
	//<!--根据年份和节点ID查询专业建设内容表  -->
    List<Map<String, Object>> selectAssessreport(Map<String, Object> map);
    //查询现场考所有的信息
    List<Map<String, Object>> selectAllrecodrd(Map<String, Object> map);
    //查询所有的ASSESSMENT_TASK
    List<Map<String, Object>>  selectASSESSMENT_TASK(int specialtyId);
     
    List<Map<String, Object>> initSHRdata(int sysid, int specialtyId  , String datayear);
    //用专业名字查询专业ID
    List<Map<String, Object>> selectSpecialtyInfoByname(Map<String, Object> map);
    //查看网评总意见
    List<Map<String, Object>> selectwpzyj(Map<String, Object> map);
    //查看现场考查专家的总意见
    List<Map<String, Object>> selectxckczjzyj(Map<String, Object> map);
    //查看审核总意见
    List<Map<String, Object>> selectshzyj(Map<String, Object> map);
    //查看现场考查组长总意见
    List<Map<String, Object>> selectXckcZyj(Map<String, Object> map);
    //查询现场组长下所有子节点下的意见
    List<Map<String, Object>> selectzjdyj(Map<String, Object> map);
    //根据专业ID查专业名称
    List<Map<String, Object>>  selectspecialtyById(Map<String, Object> map);
    
    //查询数据表
    List<Map<String, Object>>  getDataToSchool(Map<String, Object> map);
    

	List<Map<String, Object>> getAssessmentReportInfo(Map<String, String> map);
   
	//保存审核意见
	int insertReportBlackcontent(Map<String, String> map);
} 
