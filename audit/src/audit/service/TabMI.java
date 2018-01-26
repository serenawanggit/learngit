package audit.service;

import java.util.List;

import audit.model.TabModel;

public interface TabMI {

	TabModel findTabModel(int tmid);
	/**
	 * 根据tmid数组查询tabmodel
	 * @param tmid
	 * @return
	 */
    List<TabModel>	selectByTmid(int[] tmid );
    
    /**
     * 查询全部数据
     * @return
     */
    List<TabModel> selectAll(String sql);
}
