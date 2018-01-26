package audit.service.assess;

import java.util.List;
import java.util.Map;

import audit.model.quality.vo.JDuGenZ;


public interface AssessmentSpecialtyInfoGuanliyuanServices {
	 List<Map<Object, Object>> selectZgList(Map<Object, Object> map);
	 List<JDuGenZ> selectJdlt(Map<Object, Object> map);
	 List<String> selectOrganization();
	 List<String> selectZjName();
}
