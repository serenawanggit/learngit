package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.ViewReportTab;

public interface ViewReportTabMapper {

	//查询TQC_VIEW_REPORTTAB表里所有数据
	List<ViewReportTab> selectAll(@Param(value="sql")String sql);
		
	//查询所有数目
	int selectcount(@Param(value="sql")String sql);
}
