package audit.service.access;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import audit.common.ServiceResult;
import audit.model.assess.AsAccessStatusEstimationModel;


public interface AsAccessStatusServiceI {

	/**
	 * 获取评估体系列表
	 * @return
	 */
	public ArrayList<Map<String, Object>> getSumEstimationData();
	/**
	 * 获取对应评估体系下的的各专业的明细数据
	 * @return
	 */
	public List<Map<String, Object>> getSumMingXiData(int estimationId,int userId,int year);
	/**
	 * 获取对应评估体系下的三级指标
	 * @return
	 */
	public List<AsAccessStatusEstimationModel> getSumEstimationModel(int estimationId);
	/**
	 * 获取评估状态数据信息
	 * @return
	 */
	public ArrayList<Map<String, Object>> getStatusEstimationData(int year);

	/**
	 * 获取年份数据
	 * @return
	 */
	public ArrayList<Map<String, Object>> getYearData();
	/**
	 * 获取一级评估指标和专业分数 进行均值分析
	 * year:年份  estimationID：评估体系类型  specialityID：专业id
	 * @return
	 */
	public ArrayList<Map<String, Object>> getAnalysisAvgData(Integer year,Integer estimationID);
	/**
	 * 获取评估专业信息列表
	 * year:年份 
	 * @return
	 */
	public ArrayList<Map<String, Object>> getSpecialityData(int year);
	
	/**
	 * 根据年份,评估体系获取所有专业一级指标评分
	 * @param year
	 * @param standardId
	 * @return
	 * @author yjq
	 * 2015-7-10
	 */
	public ServiceResult<Map<String, Object>> getFirstLevelScore(String year,
			Integer standardId);
	/**
	 * 分项分析数据
	 * @param year
	 * @param standardId
	 * @return
	 * @author yjq
	 * 2015-7-14
	 */
	public ServiceResult<Map<String, Object>> subAnalysis(String year,
			Integer standardId);
}
