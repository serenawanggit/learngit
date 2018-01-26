package audit.service.access;

import java.util.List;

import audit.common.ServiceResult;
import audit.model.assess.AsAccessInfo;
import audit.model.assess.tack.AsAssessinfoTack;

public interface AsAccessInfoServiceI {
	/**
	 * 专业评估首页 初始化 【 获取参与专业 数量】
	 * @param assessYear
	 * @author LLP
	 * @return
	 */
	ServiceResult<List<AsAssessinfoTack>> searchPipn(String assessYear,Integer accessId);
	/**
	 * 获取所有年份
	 * @return
	 */
	ServiceResult<List<AsAccessInfo>> getAllYear();
	
	/**
	 * 专业评估首页 获取年份id
	 * @param assessYear
	 * @author LLP
	 * @return
	 */
	AsAccessInfo searchchPinByYear(String assessYear);
  
}
