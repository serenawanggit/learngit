package audit.dao;

import java.util.List;

import audit.model.Support_File;

/**
 * 支撑文件dao类
 * @author zenith
 *
 */
public interface SupportFileMapper {

	//删除该主键id下的支撑文件(param：id)
	int deleteByPrimaryKey(Integer id);

	//保存支撑文件信息(param: supportfile);
	int insert(Support_File supportfile);

	//通过主键id获取该支撑文件(param：id)
	Support_File selectByPrimaryKey(Integer id);

	//更新该支撑文件(param：supportfile)
	int update_supportfile(Support_File supportfile);
	
	//查询所有支撑文件信息
	List<Support_File> selectAll_data();
	
	//根据方案id查询支撑材料
	List<Support_File> selectFileByPid(Integer pid);
}
