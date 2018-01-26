package audit.dao;

import java.util.List;

import audit.model.AsPinspectpoint;
/**
 * 考察重点dao类
 * @author mooc
 * @version1.0
 * 2014-10-24
 */
public interface AsPinspectpointMapper {

	//查询所有的考察重点信息
	public List<AsPinspectpoint> selectAll_data();
	
	//保存考察重点信息(param:考察重点对象)
	int insert(AsPinspectpoint aip);
	
	//通过主键id查询考察重点，返回该记录所有信息(param:考察重点id)
	AsPinspectpoint selectByPrimaryKey(int id);
	
	List<AsPinspectpoint> findListByPid(int pid);
	
	int delKczds(List<String> ids);
}
