package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessSiteCheckRecordidea;

public interface AsAccessSiteCheckRecordideaMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessSiteCheckRecordidea record);

    int insertSelective(AsAccessSiteCheckRecordidea record);

    AsAccessSiteCheckRecordidea selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessSiteCheckRecordidea record);

    int updateByPrimaryKey(AsAccessSiteCheckRecordidea record);

	/**
	 * 批量插入个人考查评分意见
	 * @param list
	 * @return
	 */
	int insertSceneIdeas(List<AsAccessSiteCheckRecordidea> list);

	int updateBySelectiveSelective(AsAccessSiteCheckRecordidea record);
	/**
	 * 根据专业评估id，体系id，评分类型查询现场考查评分个人意见表
	 * @param accessSpecialtyId
	 * @param recordType
	 * @return
	 */
	List<AsAccessSiteCheckRecordidea> getListByRecord(
			@Param("accessSpecialtyId")Integer accessSpecialtyId, @Param("recordType")Byte recordType);
}