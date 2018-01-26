package audit.service.assess;

import java.text.ParseException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpRequest;

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

public interface AssessmentSpecialtyInfoXueYuanServices {
	public List<ZgList> findAssessmentList(String tYear,String userid, int pgid ) throws ParseException;
	public List<ContentInfo> findConentInfo(ContentInfo  c,HttpServletRequest request);
	public void  updateAssessment_task(String self_assess_zt,String audit_zt,String audit_time,String task_id,String item);
	public void  updateAs_assess_rectification(String blackcontent,String ASSESS_userid,String ASSESS_time,String ID);
	public As_assess_reportVo  findReportConentInfo(String Specialty_id,String Sysid,String userid,HttpServletRequest request,String tYear);
	public void  updateAs_assess_report_blackcontent(String blackcontent,String userid,String report_id);
	public void  updateAs_assess_report_blackcontent1(String blackcontent, int userid, int sysId,int specialtyId,String dateYear,String SHDJ, String SHFS );
	
	public boolean getAssessmentReportInfo(Map<String, String> map);
	
	public List<ZYJSMessgeVo>  findZYJSMessge(String specialty_id,String userid);
	public List<ZYJSMessgeVo> findZYQKGY(String specialty_id,String userid);
	public List<ZYJSMessgeVo> findZYJSPMessge(String specialty_id,String userid);
	
	public void  insertASSESSMENT_ALLREPORT(String tYear,String specialty_id,String USERID,String BLACKCONTENT);
	public void  updateAssessment_allreportBlackcontent(String blackcontent,String specialty_id);
	public int  selectAssessment_allreportNum(String specialty_id);
	public String findAssessment_specialty_info_Name(String specialty_id);
	public As_assess_reportVo zhuanHuanHtml(String addr, String fileName,HttpServletRequest request);
	public int  selectAssessment_allreportNumById(String id);
	public void updateAssessment_allreportBlackcontentById(String blackcontent,String id);
	public LookReportVo getAllReports(String USERID,String tYear,String specialty_id);
	public String findAssessment_allreport_BLACKCONTENT(String specialty_id,String userid);
	public UserVo findUserInfo(String userid);
	public String getSelf_assessment_date(String specialty_id);
	List<Map<String,Object>>  getAllData(String id,String speId);
	String selectAssessment_allreport(String userid,String sp_id,String tYear);
	List<Map<String,Object>> getData(int id,String dateYear);
	
	//根据id查询专业信息
	List<Map<String,Object>> getDataById(int id);
	
	List<Map<String,Object>> getDataReport(int sysId,int specialtyId,String dateYear);
	List<Map<String,Object>> getDataCailiao(int sysId,int specialtyId,String dateYear);
	List<Map<String,Object>> getDataDLSJB(int sysId,int userId,String dateYear);
	List<Map<String,Object>> getDataQXSJB(int sysId,int userId,String dateYear);
	
	public void UpdateASSESSMENT_TASKNoPass(String dateYear,int specialtyId,String date);
	public void UpdateASSESSMENT_TASKPass(int audit_zt,String dateYear,int specialtyId,String date);
	
	List<Map<String,Object>> getASSESSMENT_TASK(String dateYear,int specialtyId);
	public List<AS_ASSESS_INDEX_FORMULA> getAS_ASSESS_INDEX_FORMULA(int sysId,
			String dateYear);
	Asses_filedsum Selectas_asses_filedsum(int sysId,
			String dateYear);
	int SelectReal(int sysId, String dateYear,int specialtyId);
	public DW_V_LEADERSHIP SelectDW_V_LEADERSHIPZHI(int specialtyId, String dateYear,
			String chinase);
//	public List<Map<String, Object>> getAllSpecialty(int id, String string, int parseInt);
	
	//根据节点查询网评信息
	public List<Map<String, Object>> selectWpr(Map<String, Object> ma) ;
	//根据模块查询网评信息
	List<Map<String, Object>> selectWprTx(Map<String, Object> ma);
	//添加现场考查的信息
	int insertRecord(Map<String, Object> map);
	//修改现场考查信息
	int updateRecord(Map<String, Object> map);
	//查询现场考查信息
	List<Map<String, Object>> selectRecords(Map<String, Object> map);
	
	//根据网评ID查询网评信息
	List<Map<String, Object>> selectWpID(Map<String, Object> map);
	//<!--根据年份和节点ID查询专业建设内容表  -->
    List<Map<String, Object>> selectAssessreport(Map<String, Object> map);
		 
	//查询现场考所有的信息
	List<Map<String, Object>> selectAllrecodrd(Map<String, Object> map);
		   
    //根据专业ID查询专业信息 selectSpecialtyId
			
    List<Map<String, Object>> selectSpecialtyId(Map<String, Object> map);
    
    List<Map<String, Object>> initSHRdata(int sysid,int specialtyId,String datayear);
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

	//保存审核意见
	int insertReportBlackcontent(Map<String, String> map);
}
