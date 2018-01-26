package audit.service;

import java.util.List;

import audit.model.AsPModule;

/**
 * 评估方案接口类
 * @author denglujun
 * 2014-10-30
 */
public interface AsModuleServiceI {

	//查询所有
	List<AsPModule> findAllModule();
	List<AsPModule> findModulePlan();
	
}
