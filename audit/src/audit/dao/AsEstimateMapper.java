package audit.dao;

import java.util.List;

import audit.model.AsEstimate;

/**
 * 自我评估 >方案树
 * @author mooc
 *
 */
public interface AsEstimateMapper {

	//查询所有方案节点
	List<AsEstimate> selectAll();

	//查询所有父节点
	List<AsEstimate> selectRoot();
	
	List<AsEstimate> selectRoot2();
	
	//根据父节点查询所有子节点
	List<AsEstimate> selectSub(int parent);
	
	List<AsEstimate> selectSub2(int parent);
	
	//增加一个节点
	int save(AsEstimate ae);
	
	//更新一个节点
	int update(AsEstimate ae);
	
	//删除一个节点
	int delete(int id);
	
	//查询单个
	AsEstimate selectSingleById(int id);
	//修改内容
	void updateContent(String content,int id);
		
}
