package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessScaleIndex;

public interface AsAccessScaleIndexMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessScaleIndex record);

    int insertSelective(AsAccessScaleIndex record);

    AsAccessScaleIndex selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessScaleIndex record);

    int updateByPrimaryKey(AsAccessScaleIndex record);

	List<Map<String, Object>> getListByDetailId(@Param("detailId")Integer id);
}