package audit.service.access;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import audit.common.Page;
import audit.common.ServiceResult;
import audit.model.assess.AsAccessDataInfo;
import audit.model.assess.AsAccessIndexBase;
import audit.model.assess.AsAccessProfileData;
import audit.model.assess.AsAccessProfileDataDetail;
import audit.model.assess.AsAccessSelfEvalutionReport;
import audit.model.quality.query.IndicatorQuery;

/**
 * 个人自评方法
 * @author yjq
 * 2015-5-14
 */
public interface SelfEvaluationService {

	/**
	 * 获取评估专业信息
	 * @param year
	 * @param userId
	 * @param type
	 * @return
	 * @author yjq
	 * 2015-5-14
	 * @param orgId 
	 */
	ServiceResult<Map<String, Object>> getAssessSpecialty(String year,
			String userId, Byte type, Integer orgId);
	/**
	 * 根据评估指标体系id获取详细内容
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-14
	 * @param parentId 
	 * @param specialtyId 
	 */
	ServiceResult<Map<String, Object>> getAssessStandardDetailById(Integer standardId, Integer parentId, Integer specialtyId);
	
	/**
	 * 根据评估指标体系指标名称id获取相应的标准
	 * @param detailId
	 * @return
	 * @author yjq
	 * 2015-5-14
	 * @param specialtyId 
	 * @param year 
	 */
	ServiceResult<Map<String, Object>> getAllStandardByDetailById(Integer detailId, Integer specialtyId, String year);
	
	/**
	 * 保存自评分
	 * @param detailId 评估体系标准id
	 * @param score	自评分	
	 * @param dataIds 支撑材料
	 * @return
	 * @author yjq
	 * 2015-5-14
	 * @param specialtyId 
	 * @param str 
	 * @param request 
	 */
	ServiceResult<Map<String,Object>> saveSelfScore(Integer detailId,
			Double score, String dataIds, Integer specialtyId, String str, HttpServletRequest request);
	
	/**
	 * 保存自评报告
	 * @param str
	 * @param userId
	 * @return
	 * @author yjq
	 * 2015-5-15
	 */
	ServiceResult<Boolean> saveSelfReport(String str);
	
	/**
	 * 根据文件名获取文件
	 * @param name
	 * @return
	 * @author yjq
	 * 2015-5-19
	 */
	ServiceResult<List<AsAccessDataInfo>> getUserDataByName(HttpServletRequest request, String name, String userId);
	
	/**
	 * 获取自评报告
	 * @param userId
	 * @param specialtyId
	 * @return
	 * @author yjq
	 * 2015-5-22
	 */
	ServiceResult<List<AsAccessSelfEvalutionReport>> getSelfReport(
			Integer specialtyId);
	
	
	ServiceResult<Page<AsAccessIndexBase>> getIndicatorsByQuery(IndicatorQuery query);
	
	ServiceResult<Integer> checkCouldIn(String year, String userId,
			Integer byteValue);
	
	ServiceResult<List<Map<String, Object>>> getUserGroup(String year, String userId,
			byte b);
	/**
	 * 修改评估状态
	 * @param accessSpecailtyId
	 * @param type
	 * @return
	 * @author yjq
	 * 2015-6-19
	 */
	ServiceResult<Boolean> changeStatus(Integer accessSpecailtyId, String type);
	
	/**
	 * 在线预览处理
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-6-25
	 * @param request 
	 */
	ServiceResult<String> onlinePreview(Integer id, HttpServletRequest request);
	
	ServiceResult<List<AsAccessSelfEvalutionReport>> getSelfReportP(
			 Integer specialtyId, String year);
	
	ServiceResult<Boolean> updateReportDate(Integer specialtyId);
	
	/**
	 * 根据年份和专业id获取所有版本
	 * @param specialtyName 
	 */
	ServiceResult<List<AsAccessProfileData>> getAllVersion(Integer year,
			Integer specialtyId);
	
	/**
	 * 根据版本id获取内容
	 * @param versionId
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	ServiceResult<List<AsAccessProfileDataDetail>> getProfileDataDetail(
			Integer versionId);
	
	/**
	 * 创建新版本
	 * @param year
	 * @param spcialtyId
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	ServiceResult<Integer> createNewVersion(Integer year, Integer specialtyId , String specialtyName);
	
	/**
	 * 更新数据
	 * @param title
	 * @param versionId
	 * @param data
	 * @return
	 * @author yjq
	 * 2015-9-6
	 */
	ServiceResult<Boolean> saveProfileData(String title, Integer versionId,
			String data);
	
	/**
	 * 根据sql获取数据
	 * @param title
	 * @param versionId
	 * @return
	 * @author yjq
	 * 2015-9-6
	 * @param specialtyId 
	 */
	ServiceResult<List<Map<String, Object>>> getProfileDataBySql(String title,
			Integer year, Integer specialtyId);
	
	ServiceResult<Boolean> deleteProfile(Integer versionId);
	
	/**
	 * 根据评估专业id获取专业信息
	 * @param accessSpecialtyId
	 * @return
	 * @author yjq
	 * 2015-9-22
	 */
	ServiceResult<Map<String, Object>> getSpecialtyMsg(Integer accessSpecialtyId);
	
	/**
	 * 根据专业评估id及指标id获取指标值
	 * @param specialtyId
	 * @param measureId
	 * @return
	 * @author yjq
	 * 2015-9-29
	 */
	ServiceResult<Integer> getIndexValue(Integer specialtyId, String measureId);

}
