package audit.service;

import java.util.List;

import audit.model.ReportTable;

public interface AsReportTableServiceI {

	//查询所有的质量报表
	List<ReportTable> selectRTs();
	
	//查询单个的质量报表
	ReportTable findRTbyReportId(int reportid);
}
