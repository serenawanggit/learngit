package audit.service.access;

import java.util.List;

import audit.model.assess.AsAccessWebFiledInvest;
import audit.model.assess.AsAccessWebFiledInvestContent;

public interface AsAccessWebFiledInvestServiceI {

	 /**
		 * 显示建议实地考察重点 的指标
		 * @return
		 */
	public List<AsAccessWebFiledInvest> getAccessWebFiledInvest();
	 /**
	 * 显示该用户对该专业的评估历史
	 * @param userId 用户账号  specialtyId 专业编号
	 * @return  评估内容
	 */
	public List<AsAccessWebFiledInvestContent> getMyContentList(Integer userId ,Integer specialtyId,Integer year);
	
	/**
	 * 提交建议实地考察重点 的指标 建议内容
	 * @param investContentModel 建议考察重点内容  userId 用户账号  specialtyId 专业编号
	 * @return
	 */
	public int addAccessWebFiledInvestContent(List<AsAccessWebFiledInvestContent> investContentList,Integer specialty_ID);
}
