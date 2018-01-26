package audit.service.impl.access;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentSelfScoreVoMapper;
import audit.model.assess.vo.AssessmentSelfScoreVo;
import audit.service.access.AssessmentSelfScoreVoServiceI;

@Service("assessmentSelfScoreVoServiceI")
public class AssessmentSelfScoreVoServiceImpl  implements AssessmentSelfScoreVoServiceI{

	 @Autowired
	 private AssessmentSelfScoreVoMapper assessmentSelfScoreVoMapper;
	 
	 public List<AssessmentSelfScoreVo> selectValues() {
			return assessmentSelfScoreVoMapper.selectValues();
		}

	public List<Map<String, Object>> InitializationNoUser(Integer specialtyId,Integer specialtyId2,Integer txId) {
		return assessmentSelfScoreVoMapper.InitializationNoUser(specialtyId,specialtyId2,txId);
	}

	public List<Map<String, Object>> InitializationByUser(Integer specialtyId,Integer specialtyId1,
			Integer specialtyId2, Integer userId,Integer txId,Integer syear) {
		return assessmentSelfScoreVoMapper.InitializationByUser(specialtyId,specialtyId1, specialtyId2, userId,txId,syear);
	}

	public List<Map<String, Object>> findZCCL(String sql) {
		return assessmentSelfScoreVoMapper.findZCCL(sql);
	}

	

}
