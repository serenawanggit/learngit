package audit.dao;

import java.util.List;

import audit.model.assess.AsAccessSiteCheckReport;

public interface AsAccessSiteCheckReportMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessSiteCheckReport record);

    int insertSelective(AsAccessSiteCheckReport record);

    AsAccessSiteCheckReport selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessSiteCheckReport record);

    int updateByPrimaryKeyWithBLOBs(AsAccessSiteCheckReport record);

    int updateByPrimaryKey(AsAccessSiteCheckReport record);

	List<AsAccessSiteCheckReport> selectByAccessSpecialtyId(
			Integer accessSpecialtyId);
}