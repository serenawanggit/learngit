package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessProfileDataDetail;

public interface AsAccessProfileDataDetailMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessProfileDataDetail record);

    int insertSelective(AsAccessProfileDataDetail record);

    AsAccessProfileDataDetail selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessProfileDataDetail record);

    int updateByPrimaryKey(AsAccessProfileDataDetail record);

	List<AsAccessProfileDataDetail> getProfileDataDetail(@Param("versionId")Integer versionId, @Param("title")String title);
}