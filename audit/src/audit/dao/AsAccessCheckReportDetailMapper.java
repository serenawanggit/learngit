package audit.dao;

import audit.model.assess.AsAccessCheckReportDetail;

public interface AsAccessCheckReportDetailMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessCheckReportDetail record);

    int insertSelective(AsAccessCheckReportDetail record);

    AsAccessCheckReportDetail selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessCheckReportDetail record);

    int updateByPrimaryKey(AsAccessCheckReportDetail record);
}