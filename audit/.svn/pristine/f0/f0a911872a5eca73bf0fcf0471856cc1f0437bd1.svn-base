package audit.dao;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessStatusEstimationModel;

public interface AsAccessStatusMapper {

	/**
	 * 获取评估体系列表
	 * @return
	 */
	public ArrayList<Map<String, Object>> getSumEstimationData();

	/**
	 * 获取对应评估体系下的明细数据
	 * @return
	 */
	public List<Map<String, Object>> getSumMingXiData(@Param("estimationId")int estimationId,@Param("estimationId")int user_id,@Param("year")int year);
	/**
	 * 获取对应评估体系下的三级指标
	 * @return
	 */
	public List<AsAccessStatusEstimationModel> getSumEstimationModel(@Param("estimationId")int estimationId);

	/**
	 * 获取评估状态数据
	 * @return
	 */
	public ArrayList<Map<String, Object>> getStatusEstimationData(@Param("year")int year);
	/**
	 * 获取存在评估状态的年份数据
	 * @return
	 */
	public ArrayList<Map<String, Object>> getYearData();
	/**
	 * 获取一级评估指标和专业分数 进行均值分析
	 * year:年份  estimationID：评估体系类型  specialityID：专业id
	 * @return
	 */
	public ArrayList<Map<String, Object>> getAnalysisAvgData(@Param("year")Integer year,@Param("estimationID")Integer estimationID);
	/**
	 * 获取评估专业信息列表
	 * year:年份 
	 * @return
	 */
	public ArrayList<Map<String, Object>> getSpecialityData( @Param("year")int year);

}
