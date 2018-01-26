package audit.dao;

import java.util.List;

import audit.model.assess.AsAccessStandardInfo;

public interface AsAccessStandardInfoMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessStandardInfo record);

    int insertSelective(AsAccessStandardInfo record);

    AsAccessStandardInfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessStandardInfo record);

    int updateByPrimaryKey(AsAccessStandardInfo record);

	List<AsAccessStandardInfo> getAllStandard();
}