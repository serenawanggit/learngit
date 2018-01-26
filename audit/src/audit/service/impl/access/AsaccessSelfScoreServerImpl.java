package audit.service.impl.access;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsaccessSelfScoreMapper;
import audit.service.access.AsaccessSelfScoreServerI;

@Service("asaccessSelfScoreServerImpl")
public class AsaccessSelfScoreServerImpl implements AsaccessSelfScoreServerI {

	@Autowired
	private  AsaccessSelfScoreMapper asaccessSelfScoreMapper;

	public void insertSelfScore(Integer opinionId, String score,
			Integer accessSelfId, Integer accessElaborated,
			Integer scoreOpinionId) {
		asaccessSelfScoreMapper.insertSelfScore(opinionId, score, accessSelfId, accessElaborated, scoreOpinionId);
		
	}

	public void updateSelfScore(String score, Integer accessElaborated,
			Integer opinionId, Integer scoreOpinionId) {
		asaccessSelfScoreMapper.updateSelfScore(score, accessElaborated, opinionId, scoreOpinionId);
	}

	public List<Map<String, Object>> findAllUserByComment(Integer specialtyId,
			Integer accessYear) {
		return asaccessSelfScoreMapper.findAllUserByComment(specialtyId, accessYear);
	}
    
}
