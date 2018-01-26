package audit.service.access;

import java.util.List;
import java.util.Map;

import audit.common.ServiceResult;
import audit.model.assess.AsAccessSiteCheckReport;

/**
 * 现场考察结论接口
 * @author yjq
 * 2015-7-1
 */
public interface SiteCheckConclusionService {

	/**
	 * 获取现场考察评分记录
	 * @param accessSpecialtyId 评估专业id
	 * @return
	 * @author yjq
	 * 2015-7-1
	 */
	ServiceResult<Map<String, Object>> findRecord(Integer accessSpecialtyId);

	/**
	 * 保存组长评分
	 * @param accessSpecialtyId 评估专业id
	 * @param score 分数	
	 * @param detailId 评估指标体系id
	 * @return
	 * @author yjq
	 * 2015-7-1
	 */
	ServiceResult<Boolean> saveScore(Integer accessSpecialtyId, Double score,
			Integer detailId, Integer userId);

	/**
	 * 获取评估报告
	 * @param accessSpecialtyId
	 * @return
	 * @author yjq
	 * 2015-7-2
	 */
	ServiceResult<List<AsAccessSiteCheckReport>> findReport(
			Integer accessSpecialtyId);

	/**
	 * 新增报告节点
	 * @param name
	 * @return
	 * @author yjq
	 * 2015-7-2
	 * @param accessSpecialtyId 
	 */
	ServiceResult<Integer> addNewNode(String name, Integer accessSpecialtyId);
	
	/**
	 * 删除报告节点
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-7-2
	 */
	ServiceResult<Boolean> deleteNode(Integer id);

	/**
	 * 保存内容
	 * @param content
	 * @param nodeId
	 * @return
	 * @author yjq
	 * 2015-7-2
	 */
	ServiceResult<Boolean> saveReport(String content, Integer nodeId);

}
