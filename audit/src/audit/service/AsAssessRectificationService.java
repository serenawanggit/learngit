package audit.service;

import java.util.List;

import audit.model.report.Retification;

public interface AsAssessRectificationService {

	int deleteFile(Integer id);

	int insertFiles(Retification record);
	
	List<Retification> getAllFiles(Integer id,String rYear,Integer userId);

	Retification selectById(Integer id);

}
