package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.quality.AsZlZlrwxx;
import audit.model.quality.query.TaskQuery;
import audit.model.quality.vo.TaskVo;

public interface AsZlZlrwxxMapper {
	/**
	 * 查询所有质量任务信息
	 * @return
	 */
	List<AsZlZlrwxx> selectAllASZLZLRWXX();
	
    int deleteByPrimaryKey(Integer id);

    int insert(AsZlZlrwxx record);

    int insertSelective(AsZlZlrwxx record);

    AsZlZlrwxx selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsZlZlrwxx record);

    int updateByPrimaryKey(AsZlZlrwxx record);

	int selectCountByQuery(@Param("data")TaskQuery query);

	List<TaskVo> selectListByQuery(@Param("data")TaskQuery query, @Param("startIndex")int startIndex, @Param("endIndex")int endIndex);
}