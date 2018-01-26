package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.DefineObject;
import audit.model.DefineObjectVo;
import audit.model.DefineObjectVoDefault;
import audit.model.DefineTemplate;
import audit.model.StandardCellField;
import audit.model.StandardTemplate;

public interface DefineTemplateMapper {

	DefineTemplate findDiyMbById(Integer id);
	
	List<DefineObject> findYsbBymbId(Integer id);
	
	StandardCellField findBZYS(Integer id);
	
	StandardTemplate findStandardTemplate(Integer id);
	
	List<DefineObjectVo> findACOTMByCid(Integer ctemplateId);
	
	List<Map<String, Object>> findAllByCid(Integer Cid);
	
	List<DefineObjectVoDefault> findDefaultCheckFiled(Integer ctemplateId);
}
