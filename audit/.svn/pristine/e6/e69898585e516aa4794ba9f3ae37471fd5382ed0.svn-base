package audit.service;

import java.util.List;


import audit.model.AsCjZtsjbxx;
/**
 * 状态数据信息接口类
 * @author deng
 * 2015-3-9
 */
public interface CjZtsjServiceI {

	//保存
	int save(AsCjZtsjbxx asCjZtsjbxx);
	//更新
	int update(AsCjZtsjbxx asCjZtsjbxx);
	//删除
	int deleteAsZtsjbById(int id);
	//查询
	AsCjZtsjbxx findZtsjbById(int id);
	
	//根据适用范围Id查询状态数据
	List<AsCjZtsjbxx> selectZtsjBySyfwId(Integer syfwdm);
	//查询全部状态数据
	List<AsCjZtsjbxx> selectAllZtsj();
	
	List<AsCjZtsjbxx> selectZtsjs(String sql);
	
	int countZtsjbs(String sql);
	
	List<AsCjZtsjbxx> findZtbByRwId(Integer rwid,Integer userid);
	
	/**
	 * 修改未通过理由
	 */
	void updateBhly(String wtgContent,Integer rwid);
}
