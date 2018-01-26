package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.DwVLeadershipMapper;
import audit.model.DwVLeadership;
import audit.service.DwVLeadershipI;
@Service("dwvleadershipService")
public class DwVLeadershipServiceImpl implements DwVLeadershipI{

	private DwVLeadershipMapper dwVLeadershipMapper;
	@Autowired
	public void setDwVLeadershipMapper(DwVLeadershipMapper dwVLeadershipMapper){
		this.dwVLeadershipMapper = dwVLeadershipMapper;
	}
	public List<DwVLeadership> selectAllDwVLeaderships(String sql) {
		return dwVLeadershipMapper.selectAll(sql);
	}
	public int selectCountDwVLeaderships(String sql) {
		return dwVLeadershipMapper.selectcount(sql);
	}
	public DwVLeadership findValueByZBAndSyearAndName(String zb,
			Integer syear, String name) {
		return dwVLeadershipMapper.findValueByZBAndSyearAndName(zb, syear, name);
	}

}
