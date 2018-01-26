package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.vo.AsAccessSceneScoreVo;

public interface AssessResultVoMapper {

	/**
	 * 根据体系id查询现场考查指标体系及评分和个人意见
	 * @param architectureId
	 * @return
	 */
	List<AsAccessSceneScoreVo> showSceneScoreComments(@Param("architectureId")Integer architectureId,@Param("userId")Integer userId,@Param("recordType")Integer recordType,@Param("sid")Integer sid);
    
	/**
	 * 根据体系id查询现场考查指标体系
	 * @param architectureId
	 * @return
	 */
	List<AsAccessSceneScoreVo>  showArchitecture(@Param("architectureId")Integer architectureId);

	/**
	 * 根据年度id，学院id，专业id查找专业评估表
	 * @param accessId
	 * @param academyId
	 * @param specialtyId
	 * @return
	 */
	List<AsAccessSpecialty> findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId);


}
