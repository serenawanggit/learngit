package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAssessAnalysisMapper;
import audit.service.AsAssessAnalysisService;

@Service
public class AsAssessAnalysisServiceImpl implements AsAssessAnalysisService {

@Autowired
AsAssessAnalysisMapper asAssessAnalysisMapper;
	
	/* (non-Javadoc)
	 * @see audit.service.impl.AsAssessAnalysisService#getZRJSQKB(java.util.Map)
	 */
	public List<Map<String,Object>> getZRJSQKB(Map<String,Object> map){
		return asAssessAnalysisMapper.getZRJSQKB(map);
	}
	
	public int insertRecPlan(Map<String,Object> map){
		return asAssessAnalysisMapper.insertRecPlan(map);
	}
	
	 public List<Map<String,Object>> selectRecPlan(Map<String,Object> map){
		 return asAssessAnalysisMapper.selectRecPlan(map);
	 }
	 
	 public int updateRecPlan(Map<String,Object> map){
		 return asAssessAnalysisMapper.updateRecPlan(map);
	 }
	 
	 public List<Map<String,Object>> selectRecPlanById(Map<String,Object> map){
		 return asAssessAnalysisMapper.selectRecPlanById(map);
	 }
	 
	 public List<Map<String,Object>> selectRecPlanByShid(Map<String,Object> map){
		 return asAssessAnalysisMapper.selectRecPlanByShid(map);
	 }
}
