package audit.service;

import java.util.List;


import audit.common.Page;
import audit.common.ServiceResult;
import audit.model.AsIIndexClassification;
import audit.model.AsMCategory;
import audit.model.AsMManage;
import audit.model.quality.query.IndicatorQuery;

/**
 * 评估方案接口类
 * @author denglujun
 * 2014-10-30
 */
public interface AsManageServiceI {

	//查询所有
	List<AsMManage> selectAllManage();
	
	AsMManage findAsMManageByName(String name);
	
	List<AsIIndexClassification> selectAllIndex();
	
	List<AsMManage> findQuotaByIDs(List<String> ids);
	
	int findCount(String measureName);
	
	List<AsMManage> findPageQuota(String measureName,int pageStar);
	
	/**
	 * 根据条件获取指标
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-20
	 */
	ServiceResult<Page<AsMManage>> getIndicatorsByQuery(IndicatorQuery query);
	
	/**
	 * 获取指标分类
	 * @return
	 * @author yjq
	 * 2015-4-28
	 */
	ServiceResult<List<AsMCategory>> getIndicatorsCategory();
}
