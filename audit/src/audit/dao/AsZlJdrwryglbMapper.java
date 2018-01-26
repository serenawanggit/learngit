package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.quality.AsZlJdrwryglb;
import audit.model.quality.query.UserQuery;
import audit.model.quality.vo.TaskUserVo;

public interface AsZlJdrwryglbMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsZlJdrwryglb record);

    int insertSelective(AsZlJdrwryglb record);

    AsZlJdrwryglb selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsZlJdrwryglb record);

    int updateByPrimaryKey(AsZlJdrwryglb record);

	int getChangeCountbyZlRwId(@Param("id")int id);

	Map<String, Object> getFastTask(@Param("userId")Integer userId, @Param("rwId")Integer rwId);

	int selectCountByQuery(@Param("data")UserQuery query);

	List<TaskUserVo> selectByQuery(@Param("data")UserQuery query, @Param("startIndex")int startIndex, @Param("endIndex")int endIndex);

	int deleteByJdRwId(Integer id);

	List<TaskUserVo> getAllUserByJdRwId(Integer id);

	int updateByUserIdAndJdId(@Param("id")Integer id, @Param("userId")Integer userId);
}