package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessScoreScale;

public interface AsAccessScoreScaleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessScoreScale record);

    int insertSelective(AsAccessScoreScale record);

    AsAccessScoreScale selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessScoreScale record);

    int updateByPrimaryKey(AsAccessScoreScale record);

	List<AsAccessScoreScale> getlistByDetailId(@Param("detailId")Integer id);
}