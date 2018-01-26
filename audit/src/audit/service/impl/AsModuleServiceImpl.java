package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsPModuleMapper;
import audit.model.AsPModule;
import audit.service.AsModuleServiceI;
@Service("asModuleService")
public class AsModuleServiceImpl implements AsModuleServiceI{

	private AsPModuleMapper asModuleMapper;
	@Autowired
	public void setAsModuleMapper(AsPModuleMapper asModuleMapper){
		this.asModuleMapper = asModuleMapper;
	}
	
	
	public List<AsPModule> findAllModule(){
		return asModuleMapper.findAllModule();
	}
	
	public List<AsPModule> findModulePlan(){
		return asModuleMapper.findModulePlan();
	}
}
