package audit.service;
import java.util.*;
import audit.model.ViewReportTab;
public interface ViewReportTabI {

	List<ViewReportTab> selectAllViewReportTabs(String sql);
	
	int selectCountViewReportTabs(String sql);
	
	List<Object[]> showTqcViewTab();
}
