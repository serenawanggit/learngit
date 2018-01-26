package audit.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.TabModelMapper;
import audit.model.TabModel;
import audit.service.TabMI;

@Service("tabModelService")
public class TabModelServiceImpl implements TabMI{

	private TabModelMapper tabModelMapper;
	@Autowired
	public void setTabModelMapper(TabModelMapper tabModelMapper){
		this.tabModelMapper = tabModelMapper;
	}
	public TabModel findTabModel(int tmid) {
		return tabModelMapper.select(tmid);
	}
	public List<TabModel> selectByTmid(int[] tmid) {
		return tabModelMapper.selectByTmid(tmid);
	}
	public List<TabModel> selectAll(String sql) {
		return tabModelMapper.selectAll(sql);
	}
}
