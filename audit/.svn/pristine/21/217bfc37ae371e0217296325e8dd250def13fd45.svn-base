package audit.service.impl.access;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentTaskVoMapper;
import audit.model.assess.vo.AssessmentTaskVo;
import audit.service.access.AssessmentTaskVoServices;

@Service("assessmentTaskVoServices")
public class AssessmentTaskVoServiceImpl implements AssessmentTaskVoServices {
    
	@Autowired
	private AssessmentTaskVoMapper assessmentTaskVoMapper;
	public List<AssessmentTaskVo> findAssessmentTaskByuserId(Integer userId,Integer syear) {
		return assessmentTaskVoMapper.findAssessmentTaskByuserId(userId,syear);
	}
	public List<AssessmentTaskVo> findAllAssessmentTask(Integer syear) {
		return assessmentTaskVoMapper.findAllAssessmentTask(syear);
	}
	public List<AssessmentTaskVo> findAcademyAssessmentTask(Integer academyId) {
		
		return assessmentTaskVoMapper.findAcademyAssessmentTask(academyId);
	}

	public List<Map<String, Object>> findOnLineUserStatus(Integer userid,
			Integer status) {
		return assessmentTaskVoMapper.findOnLineUserStatus(userid,status);
	}

}
