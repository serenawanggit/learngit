package audit.service.impl.ods;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.OdsTTeachTaskMapper;
import audit.model.ods.OdsTTeachTask;
import audit.service.ods.OdsTTeachTaskServices;

@Service("odsTTeachTaskServices")
public class OdsTTeachTaskServicesImpl implements OdsTTeachTaskServices {

	@Autowired
	private OdsTTeachTaskMapper odsTTeachTaskMapper;
	public OdsTTeachTask selectByAddUserid(Integer addUserId) {
		return odsTTeachTaskMapper.selectByAddUserid(addUserId);
	}
	public OdsTTeachTask findByOrgCheckUserId(Integer orgcheckuserid) {
		return odsTTeachTaskMapper.findByOrgCheckUserId(orgcheckuserid);
	}
	public OdsTTeachTask findByColCheckUserId(Integer colcheckuserid) {
		return odsTTeachTaskMapper.findByColCheckUserId(colcheckuserid);
	}

}
