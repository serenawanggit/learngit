package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.AsCjZtsjbxx;

public interface AsCjZtsjbxxMapper {

	//保存
	int save(AsCjZtsjbxx asCjZtsjbxx);
	//更新
	int update(AsCjZtsjbxx asCjZtsjbxx);
	//删除
	int delete(int id);
	//查询
	AsCjZtsjbxx selectSingleById(int id);
	
	//根据适用范围Id查询状态数据
	List<AsCjZtsjbxx> selectZtsjBySyfwId(Integer syfwdm);
	//查询全部状态数据
	List<AsCjZtsjbxx> selectAllZtsj();
	
	List<AsCjZtsjbxx> selectAllBySyfwId(Integer syfwdm);
	
	List<AsCjZtsjbxx> selectZtsjbs(@Param(value="sql")String sql);
	
	int countZtsjbs(@Param(value="sql")String sql);
	
	List<AsCjZtsjbxx> findZtbByRwId(Integer rwid,Integer userid);
	/**
	 * 修改未通过理由
	 */
	void updateBhly(String wtgContent,Integer rwid);
}
