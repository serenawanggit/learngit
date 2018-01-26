package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.ReportModelMapper;
import audit.model.ReportModel;
import audit.service.ReportModelI;

@Service("reportModelService")
public class ReportModelServiceImpl implements ReportModelI {

	private ReportModelMapper reportModelMapper;
	@Autowired
	public void setReportModelMapper(ReportModelMapper reportModelMapper){
		this.reportModelMapper = reportModelMapper;
	}
	public ReportModel select(int rtid) {
		return reportModelMapper.select(rtid);
	}

	public List<ReportModel> selectByTmid(Integer tmid) {
		// TODO Auto-generated method stub
		return reportModelMapper.selectByTmid(tmid);
	}
}
