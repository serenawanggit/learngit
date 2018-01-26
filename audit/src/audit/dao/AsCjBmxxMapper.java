package audit.dao;

import java.util.List;

import audit.model.AsCjBmxx;

public interface AsCjBmxxMapper {

	/**
	 * 查询所有采集部门数据
	 * @return
	 */
	List<AsCjBmxx> selectAll_data();
	
	/**
	 * 查询某个采集部门
	 * @param cjbmdm
	 * @return
	 */
	AsCjBmxx selectByPrimaryKey(int cjbmdm);
	
	/**
	 * 查询采集部门下的所有人员
	 * @param cjbmdm
	 * @return
	 */
	List<AsCjBmxx> selectUsers(int cjbmdm);
}
