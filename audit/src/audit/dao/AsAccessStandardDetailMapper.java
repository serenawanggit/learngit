package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessStandardDetail;

public interface AsAccessStandardDetailMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessStandardDetail record);

    int insertSelective(AsAccessStandardDetail record);

    AsAccessStandardDetail selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessStandardDetail record);

    int updateByPrimaryKey(AsAccessStandardDetail record);

	List<Map<String, Object>> getDetailList(@Param("standardId")Integer standardId,
			@Param("parentId")Integer parentId,@Param("specialtyId")Integer specialtyId);
	List<AsAccessStandardDetail> findAll();

	List<AsAccessStandardDetail> getChildList(@Param("standardId")Integer standartId, @Param("parentId")Integer parentId);
}