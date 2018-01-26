package audit.service;

import java.util.List;

import audit.model.AsPlan;
/**
 * 评估方案接口类
 * @author mooc
 * 2014-10-24
 */
public interface AsPlanServiceI {

	//查询所有
	List<AsPlan> listAsPlan();
	
	//查询单条记录
	AsPlan findAsPlanById(int id);
	
	//查询某菜单下的所有方案
	List<AsPlan> listAsPlansByMid(int mid);
	
	//查询某菜单下的所有方案
	List<AsPlan> listAsPlansByMidNogl(int mid);
		
	//更新方案内容
	int updateAsPlan(AsPlan ap);
	
	int insertPlan(AsPlan ap);
	//查询当前最大no
	AsPlan findMaxNo();
	//删除方案
	int deleteByPid(Integer pid);
}
