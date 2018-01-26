package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsPinspectpointMapper;
import audit.model.AsPinspectpoint;
import audit.service.AsPinspectpointI;

@Service("asPinspectpointService")
public class AsPinspectpointImpl implements AsPinspectpointI{

	private AsPinspectpointMapper asPinspectpointMapper;
	
	@Autowired
	public void setAsPinspectpointMapper(AsPinspectpointMapper asPinspectpointMapper){
		this.asPinspectpointMapper = asPinspectpointMapper;
	}
	
	public List<AsPinspectpoint> listAips() {
		return asPinspectpointMapper.selectAll_data();
	}

	public int insert(AsPinspectpoint aip) {
		return asPinspectpointMapper.insert(aip);
	}

	public AsPinspectpoint findAsPinspectpointById(int id) {
		return asPinspectpointMapper.selectByPrimaryKey(id);
	}
	
	public List<AsPinspectpoint> findListByPid(int pid){
		return asPinspectpointMapper.findListByPid(pid);
	}
	
	public int delKczds(List<String> ids){
		return asPinspectpointMapper.delKczds(ids);
	}
}
