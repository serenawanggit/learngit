package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessSiteCheckRecord;

public interface AsAccessSiteCheckRecordMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessSiteCheckRecord record);

    int insertSelective(AsAccessSiteCheckRecord record);

    AsAccessSiteCheckRecord selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessSiteCheckRecord record);

    int updateByPrimaryKey(AsAccessSiteCheckRecord record);

	/**
	 * 批量插入现场考查评分
	 * @param list
	 * @return
	 */
	int insertSceneScores(List<AsAccessSiteCheckRecord> list);
	
	int updateBySelectiveSelective(AsAccessSiteCheckRecord record);

	List<AsAccessSiteCheckRecord> getListByQuery(@Param("detailId")Integer detailId,
			@Param("accessSpecialtyId")Integer accessSpecialtyId, @Param("recordType")Byte recordType);
	/**
	 * 根据专业评估id，评分类型查询现场考查评分表
	 * @param accessSpecialtyId
	 * @param recordType
	 * @return
	 */
	List<AsAccessSiteCheckRecord> getListByRecord(
			@Param("accessSpecialtyId")Integer accessSpecialtyId, @Param("recordType")Byte recordType);

	/**查询该用户是否做过现场考查
	 * @param accessSpecialtyId
	 * @param userId
	 * @param recordType
	 * @return
	 */
	List<AsAccessSiteCheckRecord> findIsRecord(@Param("accessSpecialtyId")Integer accessSpecialtyId,@Param("userId")Integer userId,
			@Param("recordType")byte recordType);
}