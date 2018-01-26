package audit.dao;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessScoreScaleRecord;

public interface AsAccessScoreScaleRecordMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessScoreScaleRecord record);

    int insertSelective(AsAccessScoreScaleRecord record);

    AsAccessScoreScaleRecord selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessScoreScaleRecord record);

    int updateByPrimaryKey(AsAccessScoreScaleRecord record);

	AsAccessScoreScaleRecord selectByAccessSpecialtyIdAndScale(
			@Param("accessSpecialtyId")Integer accessSpecialtyId, @Param("scaleId")Integer scaleId);
}