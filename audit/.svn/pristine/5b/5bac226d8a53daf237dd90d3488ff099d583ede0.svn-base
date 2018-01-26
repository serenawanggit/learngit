package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import audit.dao.AsDefineTemplateMapper;
import audit.model.DefineTemplate;
import audit.service.AsDefineTemplateServiceI;
@Repository("asDefineTemplateService")
public class AsDefineTemplateServiceImpl implements AsDefineTemplateServiceI{

	private AsDefineTemplateMapper asDefineTemplateMapper;
	@Autowired
	public void setAsDefineTemplateMapper(AsDefineTemplateMapper asDefineTemplateMapper){
		this.asDefineTemplateMapper = asDefineTemplateMapper;
	}
	public List<DefineTemplate> selectDefineTemplates() {
		return asDefineTemplateMapper.selectAll();
	}
    
	public DefineTemplate selectTemplateId(Integer ctemplateid) {
		return asDefineTemplateMapper.selectTemplateId(ctemplateid);
	}
}
