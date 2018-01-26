package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAssessSupportMapper;
import audit.model.report.AssessSupport;
import audit.service.AsAssessSupportService;

@Service
public class AsAssessSupportServiceImpl implements AsAssessSupportService {

	@Autowired
	AsAssessSupportMapper asAssessSupportMapper;
	
	/* (non-Javadoc)
	 * @see audit.service.impl.AsAssessSupportService#getAllSuportById(java.lang.Integer)
	 */
	public List<AssessSupport> getAllSuportById(Integer sysId,String rYear,Integer userId,Integer specialtyId){
		
		return asAssessSupportMapper.getAllSupportById(sysId,rYear,userId,specialtyId);
	}
	
	/* (non-Javadoc)
	 * @see audit.service.impl.AsAssessSupportService#deleteById(java.lang.Integer)
	 */
	public int deleteById(Integer id){
		
		return asAssessSupportMapper.deleteById(id);
	}
	
	public int insert(Map<String,Object> map){
		
		return asAssessSupportMapper.insert(map);
	}
	
	public AssessSupport selectByid(Integer id){
		
		return asAssessSupportMapper.selectById(id);
		
	}
	public List<Map<String,Object>> selectAllSupportBySpeId(String rYear,Integer userId,Integer specialtyId,Integer type){
		
		return asAssessSupportMapper.selectAllSupportBySpeId(rYear, userId, specialtyId, type);
	}
}
