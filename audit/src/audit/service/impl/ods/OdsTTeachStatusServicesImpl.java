package audit.service.impl.ods;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.OdsTTeachStatusMapper;
import audit.service.ods.OdsTTeachStatusServices;

@Service("odsTTeachStatusServices")
public class OdsTTeachStatusServicesImpl implements OdsTTeachStatusServices {

	@Autowired
	private OdsTTeachStatusMapper odsTTeachStatusMapper;
	
	public void updateOdsTTeachById(String specailtyName, String specailtyId,
			Integer id) {
		odsTTeachStatusMapper.updateOdsTTeachById(specailtyName, specailtyId, id);
	}
	public void updateOdsTTeachByTeacherId(String teacherId) {
		odsTTeachStatusMapper.updateOdsTTeachByTeacherId(teacherId);
	}
	public void updateTeachByTIdForExamine(Integer state,String teacherId) {
		odsTTeachStatusMapper.updateTeachByTIdForExamine(state,teacherId);
	}
	public void updateNoPass(String teacherId) {
      odsTTeachStatusMapper.updateNoPass(teacherId);		
	}

}
