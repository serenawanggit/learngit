package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAssessRetificationMapper;
import audit.model.report.Retification;
import audit.service.AsAssessRectificationService;

@Service("asAssessRecService")
public class AsAssessRectificationServiceImpl implements AsAssessRectificationService{

	@Autowired
	AsAssessRetificationMapper asAssessRetificationMapper;
	
	public int deleteFile(Integer id){
		return asAssessRetificationMapper.delete(id);
	}
	
	
	public int insertFiles(Retification record){
		return asAssessRetificationMapper.insert(record);
	}
	
	public List<Retification> getAllFiles(Integer id,String rYear,Integer userId){
		return asAssessRetificationMapper.getAllFiles(id,rYear,userId);	
	}
	
	public Retification selectById(Integer id){
		return 	asAssessRetificationMapper.selectById(id);
	}



}
