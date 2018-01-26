package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentAllReportMapper;
import audit.service.AssessmentAllReportService;

@Service
public class AssessmentAllReportServiceImpl implements AssessmentAllReportService {
		
	@Autowired
	AssessmentAllReportMapper assessmentAllReportMapper;
	
	/* (non-Javadoc)
	 * @see audit.service.impl.AssessmentAllReportService#getAllReports(java.lang.Integer, java.lang.String, java.lang.Integer)
	 */
	public List<Map<String,Object>> getAllReports(Integer userid, String tYear,Integer specialty_id){
		
		return assessmentAllReportMapper.getAllReports(userid, tYear, specialty_id);
	}
	
	/* (non-Javadoc)
	 * @see audit.service.impl.AssessmentAllReportService#insert(java.util.Map)
	 */
	public int insert(Map<String,Object> map){
		int rows = assessmentAllReportMapper.insert(map);
		return rows;
	}
		
	/* (non-Javadoc)
	 * @see audit.service.impl.AssessmentAllReportService#delete(java.lang.Integer)
	 */
	public int  delete(Integer id){
		int rows = assessmentAllReportMapper.delete(id);
		return rows;
	}
	public Map<String,Object> getById(Integer id){
		return assessmentAllReportMapper.getById(id);
	}
	
}
