package audit.service;
import java.util.*;

import audit.model.DwVLeadership;
public interface DwVLeadershipI {

	List<DwVLeadership> selectAllDwVLeaderships(String sql);
	
	int selectCountDwVLeaderships(String sql);
	
	/**
	 * 根据指标名 年和专业名 查询值
	 * @param zb
	 * @param syear
	 * @param name
	 * @return
	 */
	DwVLeadership findValueByZBAndSyearAndName(String zb,Integer syear,String name);
}
