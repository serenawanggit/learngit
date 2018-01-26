package audit.dao;

import audit.model.assess.AsAccessCheckScoreDetail;

public interface AsAccessCheckScoreDetailMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessCheckScoreDetail record);

    int insertSelective(AsAccessCheckScoreDetail record);

    AsAccessCheckScoreDetail selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessCheckScoreDetail record);

    int updateByPrimaryKey(AsAccessCheckScoreDetail record);
}