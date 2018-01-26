package audit.dao;

import java.util.List;

import audit.model.AsPlan;

/**
 * 方案dao类
 * @author mooc
 * 2014-10-24
 */
public interface AsPlanMapper {

	//查询所有的方案
	List<AsPlan> selectAllPlan();

	//查询单个方案 (param：方案id)
	AsPlan selectAllPlanByPid(int pid);
	
	//查询某菜单下的所有计划 (param：菜单id)
	List<AsPlan> selectAllPlanByMid(int mid);
	
	//查询某菜单下的所有计划 (param：菜单id);不包含其它关联
	List<AsPlan> selectAllPlanNogl(int mid);
	
	//更新方案内容
	int updateByPrimaryKey(AsPlan ap);
	
	//新增方案
	int insertPlan(AsPlan ap);
	
	//查询最大no
	AsPlan findMaxNo();
	
	//删除方案
	int deleteByPid(Integer pid);
}
