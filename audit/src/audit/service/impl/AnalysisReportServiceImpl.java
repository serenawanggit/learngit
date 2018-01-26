package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AnalysisReportMapper;
import audit.jdbc.ShutcmDataDao;
import audit.service.AnalysisReportService;

@Service
public class AnalysisReportServiceImpl implements AnalysisReportService{

	@Autowired
	AnalysisReportMapper analysisReportMapper;
	@Autowired
	private ShutcmDataDao shutcmDataDao;
	
	@Override
	public List<Map<String, Object>> getTemplateByTableName(Map<String, String> map) {
		return analysisReportMapper.getTemplateByTableName(map);
	}

	@Override
	public List<Map<String, Object>> findFieldByTemplateId(Integer templateId) {
		return analysisReportMapper.findFieldByTemplateId(templateId);
	}

	@Override
	public List<Map<String, Object>> findAllDataByTableName(
			Map<String, String> map) {
		return shutcmDataDao.findAllDataByTableName(map);
	}
	
	

}
