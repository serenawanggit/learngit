package audit.service.quality;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.quality.AsZlJdrwkgzb;
import audit.model.quality.query.JdZbQuery;
import audit.model.quality.vo.AsZljdrwkgbzVo;
import audit.model.quality.vo.JdZbVo;

public interface AsZlJdrwkgzbServiceI {
	int deleteByPrimaryKey(Integer id);

    int insert(AsZlJdrwkgzb record);

    int insertSelective(AsZlJdrwkgzb record);

    AsZlJdrwkgzb selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsZlJdrwkgzb record);

    int updateByPrimaryKey(AsZlJdrwkgzb record);

	int selectCountByQuery(@Param("data")JdZbQuery query);

	List<JdZbVo> selectByQuery(@Param("data")JdZbQuery query, @Param("startIndex")int startIndex, @Param("endIndex")int endIndex);

	int deleteByJdRwId(Integer id);

	List<JdZbVo> getAllZbByJdRwId(Integer id);
	/**
	 * 根据阶段任务id查询
	 * @param jdid
	 * @return
	 */
	List<AsZljdrwkgbzVo> selectAllZbByJdRwJDRWID(int zlrwid);
}
