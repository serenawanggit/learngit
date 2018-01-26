package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.ods.OdsTTeachTask;

public interface OdsTTeachTaskMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(OdsTTeachTask record);

    int insertSelective(OdsTTeachTask record);

    OdsTTeachTask selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(OdsTTeachTask record);


	int selectCountByQuery(@Param("data")OdsTTeachTask task);

	List<Map<String, Object>> selectByQuery(@Param("data")OdsTTeachTask task, @Param("startIndex")int startIndex,
			@Param("endIndex")int endIndex);

	OdsTTeachTask selectByYearAndOrg(@Param("syear")String syear, @Param("academeId")String academeId);

    
    int updateByPrimaryKey(OdsTTeachTask record);
    
    OdsTTeachTask selectByAddUserid(Integer addUserId);
    /**
     * 根据院级id查询信息
     * @param orgcheckuserid
     * @return
     */
    OdsTTeachTask findByOrgCheckUserId(Integer orgcheckuserid);
    /**
     * 根据校级id查询信息
     * @return
     */
    OdsTTeachTask findByColCheckUserId(Integer colcheckuserid);
}