package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.AsIIndexClassification;
import audit.model.ZbbEntity;

/**
 * 方案dao类
 * @author denglujun
 * 2014-10-30
 */
public interface AsIndexMapper {

	//查询所有的指标所属分类
	List<AsIIndexClassification> selectAllIndex();
	
	//根据指标ID调用存储过程查询指标值
	List<ZbbEntity> findQuotaValByQId(Map<String, Object> map);
	
	ZbbEntity findQuotaVal(Map<String, Object> map);
}
