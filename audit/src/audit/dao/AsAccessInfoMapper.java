package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessInfo;
import audit.model.assess.tack.AsAssessinfoTack;
/**
 * 专业评估
 * @author LLP
 *
 */
public interface AsAccessInfoMapper {

	
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessInfo record);

    int insertSelective(AsAccessInfo record);

    AsAccessInfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessInfo record);

    int updateByPrimaryKey(AsAccessInfo record);

	List<AsAccessInfo> getAllAccessByUserId(String userId);
	/**
	 * 获取所有年份
	 * @author LLP
	 * @return
	 */
	List<AsAccessInfo> getAllYear();
	/**
	 * 专业评估首页 初始化 【 获取参与专业 数量】
	 * @param assessYear
	 * @author LLP
	 * @return
	 */
	List<AsAssessinfoTack> searchPipn(@Param("assessYear")String assessYear,@Param("accessId")Integer accessId);
	/**
	 * 专业评估首页 获取年份id
	 * @param assessYear
	 * @author LLP
	 * @return
	 */
	AsAccessInfo searchchPinByYear(String assessYear);
}