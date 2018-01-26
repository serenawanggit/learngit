package audit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAccessSpecialtyMapper;
import audit.model.assess.AsAccessSpecialty;
import audit.service.access.AsAccessSpecialtyServiceI;
@Service("asAccessSpecialtyServiceI")
public class AsAccessSpecialtyServiceImpl implements AsAccessSpecialtyServiceI {
    @Autowired
    private AsAccessSpecialtyMapper asAccessSpecialtyMapper;
	public AsAccessSpecialty findAsAccessApecialtyBySidAndType(Integer sid,
			Integer syear) {
		return asAccessSpecialtyMapper.findAsAccessApecialtyBySidAndType(sid, syear);
	}

}
