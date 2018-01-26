package audit.service;

import java.util.List;

import audit.model.AsPinspectpoint;
/**
 * 考察重点接口类
 * @author mooc
 * 2014-10-24
 *
 */
public interface AsPinspectpointI {

	//查询所有
	 List<AsPinspectpoint> listAips();
	
	//保存
	 int insert(AsPinspectpoint aip);
	
	//查询单条记录
	AsPinspectpoint findAsPinspectpointById(int id);
	
	List<AsPinspectpoint> findListByPid(int pid);
	
	int delKczds(List<String> ids);
}
