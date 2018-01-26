package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessIndexBase;
import audit.model.quality.query.IndicatorQuery;

public interface AsAccessIndexBaseMapper {
    int insert(AsAccessIndexBase record);

    int insertSelective(AsAccessIndexBase record);

	int selectCountByQuery(@Param("data")IndicatorQuery query);

	List<AsAccessIndexBase> getListByQuery(@Param("data")IndicatorQuery query,
			@Param("startIndex")int startIndex, @Param("endIndex")int endIndex);
}