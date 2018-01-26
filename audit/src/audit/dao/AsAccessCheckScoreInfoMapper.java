package audit.dao;

import audit.model.assess.AsAccessCheckScoreInfo;

public interface AsAccessCheckScoreInfoMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessCheckScoreInfo record);

    int insertSelective(AsAccessCheckScoreInfo record);

    AsAccessCheckScoreInfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessCheckScoreInfo record);

    int updateByPrimaryKey(AsAccessCheckScoreInfo record);
}