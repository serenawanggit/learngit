package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentInspectMapper;
import audit.service.AssessmentInspectService;

@Service
public class AssessmentInspectServiceImpl implements AssessmentInspectService {
		@Autowired
		AssessmentInspectMapper assessmentInspectMapper;
		
		
		/* (non-Javadoc)
		 * @see audit.service.impl.AssessmentInspectService#selectBySpotPeopleId(java.lang.Integer, java.lang.String)
		 */
		public List<Map<String,Object>> selectBySpotPeopleId(Integer id,String syear){
			
			return assessmentInspectMapper.selectBySpotPeopleId(id, syear);
		}
		
		
		public List<Map<String,Object>> selectInspectBySysid(Map<String,Object> map){
			
			return assessmentInspectMapper.selectInspectBySysid( map);
		}
		public List<Map<String,Object>> getInspectSysInfo(Map<String,Object> map){
			return assessmentInspectMapper.getInspectSysInfo( map);
		}
	
		public int insert(List<Map<String,Object>> list){
			return assessmentInspectMapper.insert(list);
		}
		
		public int updateInspect(Map<String,Object> map){
			return assessmentInspectMapper.updateInspect(map);
		}
		public List<Map<String,Object>> getAllData(Map<String,Object> map){
			return assessmentInspectMapper.getAllData(map);
		}
		public List<Map<String,Object>> getAllData1(Map<String,Object> map){
			return assessmentInspectMapper.getAllData1(map);
		}
		public List<Map<String,Object>> selectExpedition(){
			return assessmentInspectMapper.selectExpedition();
		}
		public List<Map<String,Object>> selectFieldRecord(Map<String,Object> map){
			return assessmentInspectMapper.selectFieldRecord(map);
		}
		public int insertTestRecor(Map<String,Object> map){
			return assessmentInspectMapper.insertTestRecord(map);
		}
		public int updateTestRecord(Map<String,Object> map){
			return assessmentInspectMapper.updateTestRecord(map);
		}
		public int 	insertGraduation(Map<String,Object> map){
			return assessmentInspectMapper.insertGraduation(map);
		}
		public int updateGraduation(Map<String,Object> map){
			return assessmentInspectMapper.updateGraduation(map);
		}
		
		public List<Map<String,Object>> selectGraduation(Map<String,Object> map){
			return assessmentInspectMapper.selectGraduation(map);
		}
		public int deleteGraduation(Integer id){
			return assessmentInspectMapper.deleteGraduations(id);
		}
		public List<Map<String, Object>> selectRoleBySpeId(Integer specialtyId,Integer userId){
			return assessmentInspectMapper.selectRoleBySpeId(specialtyId, userId);
		}
		public List<Map<String, Object>> selectPeopleBySpeId(Integer specialtyId,String syear){
			return assessmentInspectMapper.selectPeopleBySpeId(specialtyId, syear);
		}
		public List<Map<String, Object>> selectSpecInfo(Map<String,Object> map){
			return assessmentInspectMapper.selectSpecInfo(map);
		}


		@Override
		public	List<Map<String,Object>> selectParentId(Map<String, Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectParentId(map);
		}

		@Override
		public int selectChildensCount(Integer pid) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectChildensCount(pid);
		}


		@Override
		public List<Map<String, Object>> selectRecord(Map<String,Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectRecord(map);
		}


		@Override
		public List<Map<String, Object>> selectContent(Map<String,Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectContent(map);
		}


		@Override
		public List<Map<String, Object>> selectSpectyList(
				Map<String, Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectSpectyList(map);
		}


		@Override
		public List<Map<String, Object>> selectPFNoDJ(Map<String, Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectPFNoDJ(map);
		}


		@Override
		public List<Map<String, Object>> selectPFDJ(Map<String, Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectPFDJ(map);
		}


		@Override
		public List<Map<String, Object>> selectLastEnd(Map<String, Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectLastEnd(map);
		}


		@Override
		public List<Map<String, Object>> selectLastEndID(Map<String, Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectLastEndID(map);
		}


		/*@Override
		public int selectBoolean(Map<String, Object> map) {
			// TODO Auto-generated method stub
			return assessmentInspectMapper.selectBoolean(map);
		}*/
}	
