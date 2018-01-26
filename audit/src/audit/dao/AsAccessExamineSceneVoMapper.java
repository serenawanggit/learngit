package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessInfo;
import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.AsAccessUser;
import audit.model.assess.vo.AsAccessExamineSceneVo;

public interface AsAccessExamineSceneVoMapper {

	/**
	 * 查询专业评估年度
	 * @return
	 */
	List<AsAccessInfo> findAccessYear();
	/**
	 * 根据年度id，学院id，专业id查找专业评估表
	 * @param accessId
	 * @param academyId
	 * @param specialtyId
	 * @return
	 */
	List<AsAccessSpecialty> findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId);
	/**
	 * 获得现场考查任务表内容
	 * @return
	 */
	List<AsAccessExamineSceneVo> selectValues(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId);
	/**
	 * 根据专业评估id查询出专业评估组中的成员
	 * @param accessSpecialtyId
	 * @return
	 */
	List<AsAccessUser> getExamineExpert(@Param("accessSpecialtyId")Integer accessSpecialtyId);
	/**
	 * 做过现场考查专家的信息
	 * @param accessSpecialtyId
	 * @return
	 */
	List<AsAccessExamineSceneVo> getExpertInfo(@Param("accessSpecialtyId")Integer accessSpecialtyId);
	/**
	 * 根据用户id和专业评估id查询专家现场考查信息
	 * @param accessSpecialtyId
	 * @return
	 */
	List<AsAccessExamineSceneVo> getExpertInspectInfo(@Param("userId")Integer userId,@Param("accessSpecialtyId")Integer accessSpecialtyId);
}
