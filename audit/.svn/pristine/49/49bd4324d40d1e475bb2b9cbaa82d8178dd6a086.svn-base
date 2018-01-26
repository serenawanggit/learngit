package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.ViewReportTabMapper;
import audit.model.ViewReportTab;
import audit.service.ViewReportTabI;
@Service("viewReportTabService")
public class ViewReportTabServiceImpl implements ViewReportTabI {

	private ViewReportTabMapper viewReportTabMapper;
	@Autowired
	public void setViewReportTabMapper(ViewReportTabMapper viewReportTabMapper){
		this.viewReportTabMapper = viewReportTabMapper;
	}
	public List<ViewReportTab> selectAllViewReportTabs(String sql) {
		return viewReportTabMapper.selectAll(sql);
	}

	public int selectCountViewReportTabs(String sql) {
		return viewReportTabMapper.selectcount(sql);
	}
	public List<Object[]> showTqcViewTab() {
		return null;
	}

}
