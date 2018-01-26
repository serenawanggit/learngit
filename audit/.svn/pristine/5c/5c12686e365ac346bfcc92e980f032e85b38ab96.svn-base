package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.AsMManage;
import audit.model.quality.query.IndicatorQuery;

/**
 * 方案dao类
 * @author denglujun
 * 2014-10-30
 */
public interface AsMManageMapper {

	//查询所有的指标
	List<AsMManage> selectAllManage();

	AsMManage selectByName(String name);
	//根据指标ids查询指标
	List<AsMManage> findQuotaByIDs(List<String> ids);
	
	int findCount(String measureName);
	
	List<AsMManage> findPageQuota(@Param(value="parameter1")String measureName,@Param(value="pagestar")int pageStar);

	List<AsMManage> getListByQuery(@Param(value="data")IndicatorQuery query, @Param(value="startIndex")int startIndex,
			@Param(value="endIndex")int endIndex);

	int selectCountByQuery(@Param(value="data")IndicatorQuery query);
}
