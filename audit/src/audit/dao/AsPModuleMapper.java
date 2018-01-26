package audit.dao;

import java.util.List;

import audit.model.AsPModule;

/**
 * 审核评估模块dao类
 * @author denglujun
 * 2014-11-12
 */
public interface AsPModuleMapper {

	//查询所有的模块
	List<AsPModule> findAllModule();
	//查询模块和方案
	List<AsPModule> findModulePlan();
	
}
