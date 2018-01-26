package audit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCtemplateStandardMapper;
import audit.model.AsCtemplateStandard;
import audit.service.AsCtemplateStandardService;

@Service("asCtemplateStandardService")
public class AsCtemplateStandardServiceImpl implements AsCtemplateStandardService {
     @Autowired
     private AsCtemplateStandardMapper aStandardMapper;
	 public AsCtemplateStandard selectObjecttable(String path) {
		return aStandardMapper.selectObjecttable(path);
	}
	public AsCtemplateStandard findObjecttableByTN(Integer ctemplateId) {
		return aStandardMapper.findObjecttableByTN(ctemplateId);
	}

}
