package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessProfileData;

public interface AsAccessProfileDataMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessProfileData record);

    int insertSelective(AsAccessProfileData record);

    AsAccessProfileData selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessProfileData record);

    int updateByPrimaryKey(AsAccessProfileData record);

	List<AsAccessProfileData> getAllVersion(@Param("year")Integer year, @Param("specialtyId")Integer specialtyId);
}