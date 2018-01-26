package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsReportTableMapper;
import audit.model.ReportTable;
import audit.service.AsReportTableServiceI;
@Service("asReportTableService")
public class AsReportTableServiceImpl implements AsReportTableServiceI{

	private AsReportTableMapper asReportTableMapper;
	@Autowired
	public void setAsReportTableMapper(AsReportTableMapper asReportTableMapper){
		this.asReportTableMapper = asReportTableMapper;
	}
	public List<ReportTable> selectRTs() {
		// TODO Auto-generated method stub
		return asReportTableMapper.selectAll();
	}

	public ReportTable findRTbyReportId(int reportid) {
		// TODO Auto-generated method stub
		return asReportTableMapper.selectRTByPid(reportid);
	}

}
