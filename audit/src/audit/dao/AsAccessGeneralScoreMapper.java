package audit.dao;

import audit.model.assess.AsAccessGeneralScore;


public interface AsAccessGeneralScoreMapper {
	/**
	 * 根据用户id和专业id查询网评专家是否存在
	 * @param userid
	 * @param sid
	 * @return
	 */
	AsAccessGeneralScore  findOnlyUserByspecialtyId(Integer userid,Integer sid);
}