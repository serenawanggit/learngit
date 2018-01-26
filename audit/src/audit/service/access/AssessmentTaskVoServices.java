package audit.service.access;

import java.util.List;
import java.util.Map;

import audit.model.assess.vo.AssessmentTaskVo;

public interface AssessmentTaskVoServices {

	
	/**
	 * 根据用户id查询网评任务
	 * @return
	 */
	public List< AssessmentTaskVo> findAssessmentTaskByuserId(Integer userId,Integer syear);

	/**
	 * 校级领导查看全部的网评专业
	 * @param syear
	 * @return
	 */
	public List< AssessmentTaskVo> findAllAssessmentTask(Integer syear);
	/**
	 * 院级领导查看本学院的网评专业 
	 * @param academyId
	 * @return
	 */
     List<AssessmentTaskVo> findAcademyAssessmentTask(Integer academyId);
     /**
      * 查询当前登录用户在专业评估中的用户类型
      * @param userid
      * @return
      */
     List<Map<String, Object>> findOnLineUserStatus(Integer userid,Integer status);
}
