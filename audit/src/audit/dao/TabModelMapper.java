package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.TabModel;

public interface TabModelMapper {

	TabModel select(int tmid);
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
    List<TabModel> selectAll(@Param(value="sql")String sql);
}
