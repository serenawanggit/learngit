package audit.dao;

import audit.model.assess.AsAccessCheckRecordInfo;

public interface AsAccessCheckRecordInfoMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessCheckRecordInfo record);

    int insertSelective(AsAccessCheckRecordInfo record);

    AsAccessCheckRecordInfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessCheckRecordInfo record);

    int updateByPrimaryKey(AsAccessCheckRecordInfo record);
}