package audit.service.access;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.common.ServiceResult;
import audit.model.assess.AsAccessExamineScene;

public interface IAsAccessExamineSceneService {

	/**
	 * 查询专业评估年度
	 * @return
	 */
	public ServiceResult<Map<String, Object>> findAccessYear();
	/**
	 * 根据年度id，学院id，专业id查找专业评估表
	 * @param accessId
	 * @param academyId
	 * @param specialtyId
	 * @return
	 */
	public ServiceResult<Map<String, Object>> findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId);
	/**
	 * 获得现场考查任务表内容
	 * @return
	 */
	public ServiceResult<Map<String, Object>> selectValues(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId);
	/**
	 * 获得评估专业组的专家
	 * @param accessSpecialtyId
	 * @return
	 */
	ServiceResult<Map<String, Object>> getExamineExpert(@Param("accessSpecialtyId")Integer accessSpecialtyId);
	/**
     * 批量插入现场工作日程表
     * @param list
     * @return
     */
	ServiceResult<Map<String, Object>> insertSceneTasks(List<AsAccessExamineScene> list);
	
	/**
	 * 根据id来修改对象的某些属性
	 * @param record
	 * @return
	 */
	ServiceResult<Map<String, Object>> updateByPrimaryKeySelective(AsAccessExamineScene record);
    /**
     * 根据一组ids来删除工作任务表
     * @param ids
     * @return
     */
	ServiceResult<Map<String, Object>> deleteByPrimaryKeys(String[] ids);
	
	 /**
     * 通过codeType来查询码表
     * @param codeType
     * @return
     */
	ServiceResult<Map<String, Object>>   selectByCodeType(@Param("codeType")String codeType); 
    
	/**通过id查询现场考查任务表内容
	 * @param id
	 * @return
	 */
	AsAccessExamineScene selectByPrimaryKey(Integer id);
}
