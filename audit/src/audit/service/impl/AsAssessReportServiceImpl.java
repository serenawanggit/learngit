package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAssessReportMapper;
import audit.model.report.AssessReport;
import audit.service.AsAssessReportService;
@Service
public class AsAssessReportServiceImpl implements AsAssessReportService {
	@Autowired
	AsAssessReportMapper asAssessReportMapper;
	
	/* (non-Javadoc)
	 * @see audit.service.impl.AsAssessReport#getAllReport()
	 */
	public AssessReport getAllReport(Integer sysid,Integer specialty_id,Integer userId,String rYear){
		return	asAssessReportMapper.getAllReport( sysid, specialty_id, userId, rYear);
		}
	

	public int deleteById(Integer id){
		
		return asAssessReportMapper.deleteById(id);
	}
	
	public AssessReport selectById(Integer id){
		
		return asAssessReportMapper.selectById(id);
	}

	public int insert(AssessReport record){
		return asAssessReportMapper.insert(record);
	}
	public int updateReport(AssessReport record){
		return asAssessReportMapper.updateReport(record);
	}
	
	public List<Map<String,String>> getAllSpecialtyByItem(Integer specialtyId){
		return asAssessReportMapper.getAllSpecialtyByItem(specialtyId);
		
	}
	public List<Map<String,Object>> getAllReportBySpeId(String rYear,Integer userId,Integer specialtyId,Integer type){
		return asAssessReportMapper.getAllReportBySpeId(rYear, userId, specialtyId, type);
	}

	public AssessReport getAllReportZu(Map<String, Object> map) {
		return asAssessReportMapper.getAllReportZu(map);
	}
	
	public int insertReportRead(Map<String,Object> map){
		return asAssessReportMapper.insertReportRead(map);
	}


	@Override
	public int insertSelfDataFile(Map<String, Object> map) {
		return asAssessReportMapper.insertSelfDataFile(map);
	}


	@Override
	public int insertContent(AssessReport record) {
		return asAssessReportMapper.insertContent(record);
	}


	@Override
	public Map<String, Object> getSelfDataById(Integer id) {
		return asAssessReportMapper.getSelfDataById(id);
	}


	@Override
	public List<Map<String, Object>> getReportBySysid(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return asAssessReportMapper.getReportBySysid(map);
	}


	@Override
	public List<Map<String, Object>> findRectificationBySysid(
			Map<String, Object> map) {
		// TODO Auto-generated method stub
		return asAssessReportMapper.findRectificationBySysid(map);
	}


	@Override
	public List<Map<String, Object>> getRectificationBySpecialtyId(
			Map<String, Object> map) {
		// TODO Auto-generated method stub
		return asAssessReportMapper.getRectificationBySpecialtyId(map);
	}


	@Override
	public List<Map<String, Object>> findrecordBySysid(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return asAssessReportMapper.findrecordBySysid(map);
	}


	@Override
	public List<Map<String, Object>> getRecordBySpecialtyId(
			Map<String, Object> map) {
		// TODO Auto-generated method stub
		return asAssessReportMapper.getRecordBySpecialtyId(map);
	}


	@Override
	public List<Map<String, Object>> getAllreportToSHR(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return asAssessReportMapper.getAllreportToSHR(map);
	}
}
