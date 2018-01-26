package audit.service.impl.access;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAccessGeneralScoreMapper;
import audit.model.assess.AsAccessGeneralScore;
import audit.service.access.AsAccessGeneralScoreServicesI;

@Service("asAccessGeneralScoreServicesI")
public class AsAccessGeneralScoreServicesImpl implements AsAccessGeneralScoreServicesI {

	@Autowired
	private AsAccessGeneralScoreMapper asAccessGeneralScoreMapper;

	public AsAccessGeneralScore findOnlyUserByspecialtyId(Integer userid,
			Integer sid) {
		return asAccessGeneralScoreMapper.findOnlyUserByspecialtyId(userid, sid);
	}


}
