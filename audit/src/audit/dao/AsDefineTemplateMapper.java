package audit.dao;

import java.util.List;

import audit.model.DefineTemplate;

public interface AsDefineTemplateMapper {

	//查询全部
	List<DefineTemplate> selectAll();
	//查询template
	DefineTemplate selectTemplateId(Integer ctemplateid);
}
