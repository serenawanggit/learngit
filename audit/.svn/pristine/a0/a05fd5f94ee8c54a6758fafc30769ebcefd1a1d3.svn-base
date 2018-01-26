package audit.service.assess;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.sun.xml.rpc.processor.modeler.j2ee.xml.string;

import audit.model.assess.vo.As_Assess_SupportVo;
import audit.model.assess.vo.As_assess_reportVo;
import audit.model.quality.vo.Assess_comment_rectificationVo;
import audit.model.quality.vo.ContentInfo;
import audit.model.quality.vo.LookReportVo;
import audit.model.quality.vo.ZgList;

public interface AssessmentSpecialtyInfoWangpingServices {
	List<ZgList> findWangpingList(String tYear,String userid,String struts) throws Exception;
	List<ContentInfo> findRectificationConentInfo(String specialty_id,String userid,String ryear,HttpServletRequest request) throws Exception;
	void insertAssess_comment_rectification(
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
	As_assess_reportVo findReport(String specialty_id,String sysId,String userid,HttpServletRequest request,String rYear,String userType) throws Exception;
	List<As_Assess_SupportVo> findAs_assess_support(String Sysid,String Ryear,String Userid,String Specialty_id,String Report_id,HttpServletRequest request,String specialty_name)throws Exception;
	List<LookReportVo> getAllReports(Map<Object, Object> map);
	Assess_comment_rectificationVo getWangPingZongComment(String userid,String specialty_id,String item)throws Exception;
	Assess_comment_rectificationVo getWangPingTiXiComment(String userid,String specialty_id,String item,String sysId)throws Exception;
	
	void updateAssessment_task_pass(String time, String task_id);
	String getUserName(String userId);
	List<String> getTypeForSpecialty(String useid,String specialty_id);
	As_Assess_SupportVo getAs_assess_supportById(String supportId,HttpServletRequest request);
	String selectOrganizationName(String userid, String sp_id);
	String selectSysName(String sid);
	String selectUserType(String userid);
	List<String> selectZyName();
	
	
	//网评状态表 
	List<Map<Object, Object>> selcteWangPStruts(Map<Object, Object> map);
	//网评状态表
	void updateWangPStruts(Map<Object, Object> map);
	//网评状态表
	void insertWangPStruts(Map<Object, Object> map);
	public List<Map<String, Object>> getAllData(Map<Object, Object> map);
	
	//根据用户，时间，专业类型，模块查询网评数据
	List<Assess_comment_rectificationVo> findAllWangpingInfo(String userid,String specialty_id,String item,String SYEAR);
}
