package audit.dao;

import java.util.List;

import audit.model.ReportModel;

public interface ReportModelMapper {
    /**
     *  根据rtid查询一个数据表
     * @param rtid
     * @return
     */
	ReportModel select(int rtid);
	/**
	 * 根据rtid查询多个数据表
	 * @param rtid
	 * @return
	 */
	List<ReportModel> selectByTmid(Integer tmid);
}
