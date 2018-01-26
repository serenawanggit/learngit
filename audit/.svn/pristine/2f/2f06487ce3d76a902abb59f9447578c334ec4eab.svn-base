package audit.service.access;

import java.util.List;
import java.util.Map;

public interface AsaccessSelfScoreServerI {
	
	/**
	 * 自评报告考核意见得分表
	 * @param opinionId
	 * @param score
	 * @param accessSelfId
	 * @param accessElaborated
	 * @param scoreOpinionId
	 */
	void insertSelfScore(Integer opinionId,String score,Integer accessSelfId,Integer accessElaborated,Integer scoreOpinionId );

	/**
	 * 修改自评报告考核得分表
	 * @param score
	 * @param accessElaborated
	 * @param opinionId
	 * @param scoreOpinionId
	 */
	void updateSelfScore(String score,Integer accessElaborated, Integer opinionId,Integer scoreOpinionId );
	
	/**
	 * 根据专业查询专业下全部的网评专家
	 * @param specialtyId
	 * @param accessYear
	 * @return
	 */
    List<Map<String, Object>> findAllUserByComment(Integer specialtyId,Integer accessYear);
}
