package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCustomVoMapper;
import audit.model.AsCustomVo;
import audit.service.AsCustomVoServices;

@Service("asCustomVoServices")
public class AsCustomVoImpl implements AsCustomVoServices {
   @Autowired
   private AsCustomVoMapper asCustomVoMapper;
	public List<AsCustomVo> searchAsCustomVoByOfn(String ctemplateName) {
		return asCustomVoMapper.searchAsCustomVoByOfn(ctemplateName);
	}
	
	public List<AsCustomVo> findCTNAndOFN(Integer cteID) {
		return asCustomVoMapper.findCTNAndOFN(cteID);
	}

	public List<Map<String, Object>> findNewTableTemplate(Integer cteID) {
		return asCustomVoMapper.findNewTableTemplate(cteID);
	}
}
