package audit.service.access;

import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;

import org.apache.ibatis.annotations.Param;

import audit.common.ServiceResult;
import audit.model.assess.AsAccessSelfEvalutionReport;
import audit.model.assess.AsAccessSiteCheckRecord;
import audit.model.assess.AsAccessSiteCheckRecordidea;
import audit.model.assess.vo.AsAccessSceneScoreVo;

public interface IAssessResultService {

	/**
	 * 获得专业自评分
	 * @param id
	 * @return
	 */
	/*ArrayList<AsAssessResultVo> showAssessmentSelfScore(Integer id);*/
	
	/**
	 * 获得专业自评分
	 * @param id
	 * @return
	 */
	JSONArray showAssessmentSelfScore(Integer id,Integer txId);
	
	/**
	 * 获得专业自评报告
	 * @param userId
	 * @param specialtyId
	 * @return
	 */
	ServiceResult<List<AsAccessSelfEvalutionReport>> getSelfReport( Integer specialtyId);
	/**
	 * 获得专家网评结果
	 * @param request
	 * @param specialtyId
	 * @return
	 */
	JSONArray showSelfAssessmentComments(Integer specialtyId,Integer userId,Integer txId );
	/**获得现场考查任务表内容
	 * @param accessId
	 * @param academyId
	 * @param specialtyId
	 * @return
	 */
	JSONArray  selectValues(Integer accessId,Integer academyId,Integer specialtyId);
	
	/**
	 * 获得专家现场考查评分信息
	 * @param specialtyId
	 * @return
	 */
	ServiceResult<List<AsAccessSceneScoreVo>> showSceneScoreComments(Integer architectureId,Integer userId,Integer recordType,int sid);
	
	/**
	 * 根据体系id查询现场考查指标体系
	 * @param architectureId
	 * @return
	 */
	ServiceResult<List<AsAccessSceneScoreVo>>  showArchitecture(Integer architectureId);
	
	/**
	 * 插入现场评分
	 * @param record
	 * @return
	 */
	ServiceResult<Map<String, Object>> insertSceneScore(List<AsAccessSiteCheckRecord> list);
	/**
	 * 修改现场评分
	 * @return
	 */
	ServiceResult<Map<String, Object>> updateScoreBySelectiveSelective(AsAccessSiteCheckRecord record);
	/**
	 * 修改现场评分个人意见
	 * @return
	 */
	ServiceResult<Map<String, Object>> updateIdeaBySelectiveSelective(AsAccessSiteCheckRecordidea record);
	/**
	 * 插入现场个人考查意见
	 * @return
	 */
	ServiceResult<Map<String, Object>> insertSceneIdea(List<AsAccessSiteCheckRecordidea> list);

	/**
	 * 获得评估专家评分记录
	 * @param accessSpecialtyId
	 * @return
	 */
	ServiceResult<Map<String, Object>> findRecord(Integer accessSpecialtyId,Byte recordType);
	/**
	 * 根据年度id，学院id，专业id查找专业评估表
	 * @param accessId
	 * @param academyId
	 * @param specialtyId
	 * @return
	 */
	ServiceResult<Map<String, Object>> findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(
			@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId);

	/**判断改用户是否做过现场评分
	 * @param accessSpecialtyId
	 * @param userId
	 * @param recordType
	 * @return
	 */
	ServiceResult<Map<String, Object>> findIsRecord(Integer accessSpecialtyId,
			Integer userId, byte recordType);

	/**做过现场考查专家的信息
	 * @return
	 */
	ServiceResult<Map<String, Object>> getExpertInfo(Integer accessSpecialtyId);
	/**
	 * 根据用户id和专业评估id查询专家现场考查信息
	 * @param accessSpecialtyId
	 * @return
	 */
	ServiceResult<Map<String, Object>> getExpertInspectInfo(Integer userId,Integer accessSpecialtyId);

}
