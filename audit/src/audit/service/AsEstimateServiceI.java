package audit.service;

import java.util.List;

import audit.model.AsEstimate;

public interface AsEstimateServiceI {
	
	//查询所有方案节点
	List<AsEstimate> selectAllAsEstimames();
	
	//查询所有父节点
	List<AsEstimate> selectAllRoots();
	
	List<AsEstimate> selectAllRoot2s();
	
	//根据父节点查询所有子节点
	List<AsEstimate> selectAllSubs(int parent);
	
	List<AsEstimate> selectAllSub2s(int parent);
	
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
	//更新数据内容
	void updateNowAsEstimate() throws Exception;
}
