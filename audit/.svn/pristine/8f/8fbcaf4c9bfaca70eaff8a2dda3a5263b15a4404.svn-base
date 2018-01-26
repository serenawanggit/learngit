package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.quality.AsZlJdrwxx;
import audit.model.quality.query.JdTaskQuery;
import audit.model.quality.vo.Aszlrwxxkgb;
import audit.model.quality.vo.JdTaskVo;

public interface AsZlJdrwxxMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsZlJdrwxx record);

    int insertSelective(AsZlJdrwxx record);

    AsZlJdrwxx selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsZlJdrwxx record);

    int updateByPrimaryKey(AsZlJdrwxx record);

	int getJdTaskCountByQuery(@Param(value="data")JdTaskQuery query);

	List<JdTaskVo> getJdTaskListByQuery(@Param(value="data")JdTaskQuery query, @Param(value="startIndex")int startIndex,
			@Param(value="endIndex")int endIndex);
	
	/**
	 * 根据条件搜索阶段任务详细
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	JdTaskVo getTaskDetailsByQuery(@Param(value="data")JdTaskQuery query);

	AsZlJdrwxx getNextByRwId(@Param(value="userId")Integer userId, @Param(value="zlrwid")Integer zlrwid, @Param(value="jdXh")int jdXh);

	Integer getMaxJdXhByZlRwId(@Param(value="zlRwId")Integer zlrwid);
	/**
	 * 查阶段任务
	 * @param glJDRWID
	 * @return
	 */
	List<JdTaskVo> selectJDRW(int glJDRWID);
	
	/**
	 * 通过拿到jdrwid 循环比对客观表 jdid得到指标id 在指标表得到值
	 * @param jdid
	 * @return
	 */
	List<Aszlrwxxkgb> selectJDrwxxglb(@Param(value="jdid")int jdid);
	
	/**
	 * 查询所有阶段任务
	 * @return
	 */
	List<JdTaskVo> selectAllJDRW();

	AsZlJdrwxx getBeforeJdRw(@Param(value="zlRwId")Integer zlrwid, @Param(value="jdRwId")Integer jdRwId);
}