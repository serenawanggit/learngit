package audit.service;

import java.util.List;
import java.util.Map;

import audit.model.AsPRelevanceItem;
import audit.model.AsPViewQuota;
import audit.model.ZbbEntity;

/**
 * 观测指标接口类
 * @author denglujun
 * 2014-10-30
 */
public interface AsViewQuotaServiceI {

	//新增
	int insertViewQuota(AsPViewQuota viewQuota);
	
	List<AsPViewQuota> findViewQuotaByPid(int pid);
	int deleteByVid(int vid);
	//分页查询
	List<AsPViewQuota> findPageViewQuota(String qname,int pageStar);
	
	List<AsPRelevanceItem> findRelevanceItemByPid(int pid);
	
	int findCount(String measureName);
	
	//新增关联项目
	int addRelevanceItem(AsPRelevanceItem relevanceItem);
	int delGlxms(List<String> ids);
	
	//根据指标ID调用存储过程查询指标值
	List<ZbbEntity> findQuotaValByQId(Map<String, Object> map);
	
	ZbbEntity findQuotaVal(Map<String, Object> map);
}
