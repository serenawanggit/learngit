package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessSelfEvalutionRecord;

public interface AsAccessSelfEvalutionRecordMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessSelfEvalutionRecord record);

    int insertSelective(AsAccessSelfEvalutionRecord record);

    AsAccessSelfEvalutionRecord selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessSelfEvalutionRecord record);

    int updateByPrimaryKey(AsAccessSelfEvalutionRecord record);

	AsAccessSelfEvalutionRecord getRecordByDetailIdAndSpecialtyId(
			@Param("detailId")Integer detailId, @Param("specialtyId")Integer specialtyId);

	List<AsAccessSelfEvalutionRecord> getAllByParentId(@Param("parentId") Integer parentId, @Param("specialtyId")Integer specialtyId);

	List<Map<String, Object>> getScoreByDetailAndYear(@Param("detailId")Integer id, @Param("year")String year);
}