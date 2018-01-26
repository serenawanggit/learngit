package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessSpecialty;

public interface AsAccessSpecialtyMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessSpecialty record);

    int insertSelective(AsAccessSpecialty record);

    AsAccessSpecialty selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessSpecialty record);

    int updateByPrimaryKey(AsAccessSpecialty record);

	List<Map<String, Object>> getSpecialtyByYearAndUserId(@Param("year")String year, 
			@Param("userId")String userId, @Param("type")Byte type, @Param("orgId")Integer orgId, @Param("speId")Integer speId);

	List<Map<String, Object>> getUserGroup(@Param("year")String year, @Param("userId")String userId, @Param("type")byte type);
	
	AsAccessSpecialty findAsAccessApecialtyBySidAndType(Integer sid,Integer syear);

	AsAccessSpecialty getSpecialtyByYearAndSpecialtyId(@Param("year")String year,
			@Param("type")byte type, @Param("specialtyId")Integer specialtyId);

	List<AsAccessSpecialty> getSpecialtyByYearAndStandardId(@Param("year")String year,
			@Param("standardId")Integer standardId);

	List<Map<String, Object>> getSpeScore(@Param("accessSpecialtyId")Integer accessSpecialtyId, @Param("standardId")Integer standardId);
}