package audit.dao;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessScoreStandard;

public interface AsAccessScoreStandardMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessScoreStandard record);

    int insertSelective(AsAccessScoreStandard record);

    AsAccessScoreStandard selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessScoreStandard record);

    int updateByPrimaryKey(AsAccessScoreStandard record);

	AsAccessScoreStandard getByDetailId(@Param("detailId")Integer id);
}