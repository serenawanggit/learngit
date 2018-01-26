package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessWebFiledInvest;
import audit.model.assess.AsAccessWebFiledInvestContent;

public interface AsAccessWebFiledInvestMapper {
	/**
	 * 显示建议实地考察重点 的指标
	 * 
	 * @return
	 */
	public List<AsAccessWebFiledInvest> getAccessWebFiledInvest();

	 /**
		 * 显示该用户对该专业的评估历史
		 * @param userId 用户账号  specialtyId 专业编号
		 * @return  评估内容
		 */
	public List<AsAccessWebFiledInvestContent> getMyContentList(
			@Param("user_id")Integer user_id,
			@Param("specialty_ID")Integer specialty_ID,
			@Param("year")Integer year);
	/**
	 * 提交新加建议实地考察重点 的指标 建议内容
	 * @param investContentModel 建议考察重点内容
	 * 
	 * @return
	 */
	public int addAccessWebFiledInvestContent(AsAccessWebFiledInvestContent investContentModel);
	/**
	 * 提交 更新 建议实地考察重点 的指标 建议内容
	 * @param investContentModel 建议考察重点内容
	 * 
	 * @return
	 */
	public int updateAccessWebFiledInvestContent(AsAccessWebFiledInvestContent investContentModel);

}
