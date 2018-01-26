package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessInfo;
import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.AsAccessUser;
import audit.model.assess.vo.AsAccessExamineScheduleVo;

public interface AsAccessExamineScheduleVoMapper {

	List<AsAccessInfo> findAccessYear();
	/**
	 * 获得现场考查日程表数据内容
	 * @return
	 */
	List<AsAccessExamineScheduleVo> selectValues(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId);
    
	/**
	 * 根据年度id，学院id，专业id查找专业评估表
	 * @param accessId
	 * @param academyId
	 * @param specialtyId
	 * @return
	 */
	List<AsAccessSpecialty> findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId);
	/**根据专业评估id查询出专业评估组中的成员
	 * @param accessSpecialtyId
	 * @return
	 */
	List<AsAccessUser> getExamineExpert(@Param("accessSpecialtyId")Integer accessSpecialtyId);
}
