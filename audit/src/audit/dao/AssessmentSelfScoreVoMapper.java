package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.vo.AssessmentSelfScoreVo;

public interface AssessmentSelfScoreVoMapper {
	/**
	 * 获取网评自评分
	 * @return
	 */
    List<AssessmentSelfScoreVo> selectValues();
    /**
     * 初始化不关联用户材料审核表
     * @return
     */
    List<Map<String, Object>>  InitializationNoUser(Integer specialtyId,Integer specialtyId2,Integer txId);
    /**
     * 初始化关联用户材料审核表
     * @return
     */
    List<Map<String, Object>>  InitializationByUser(Integer specialtyId,Integer specialtyId1,Integer specialtyId2,Integer userId,Integer txId,Integer syear);
    
    List<Map<String, Object>> findZCCL(@Param(value="sql")String sql);
}
