package audit.service.impl.access;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsAccessSelfEvalutionRecordMapper;
import audit.dao.AsAccessSpecialtyMapper;
import audit.dao.AsAccessStandardDetailMapper;
import audit.dao.AsAccessStatusMapper;
import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.AsAccessStandardDetail;
import audit.model.assess.AsAccessStatusEstimationModel;
import audit.service.access.AsAccessStatusServiceI;

@Service("AsAccessStatusServiceI")
public class AsAccessStatusServiceImpl implements AsAccessStatusServiceI{

	@Autowired
	 private AsAccessStatusMapper asAccessStatusMapper;
	
	@Resource
	private AsAccessSpecialtyMapper asAccessSpecialtyMapper;
	
	@Resource
	private AsAccessStandardDetailMapper asAccessStandardDetailMapper;
	
	@Resource
	private AsAccessSelfEvalutionRecordMapper asAccessSelfEvalutionRecordMapper;
	
	public ArrayList<Map<String, Object>> getSumEstimationData(){
		return asAccessStatusMapper.getSumEstimationData();
	}
	
	
	public List<Map<String, Object>> getSumMingXiData(int estimationId,int userId,int year){
		return asAccessStatusMapper.getSumMingXiData(estimationId,userId,year);
	}
	
	public List<AsAccessStatusEstimationModel> getSumEstimationModel(int estimationId){
		return asAccessStatusMapper.getSumEstimationModel(estimationId);
	}
	public ArrayList<Map<String, Object>> getStatusEstimationData(int year){
		/*ArrayList<HashMap<String, Object>> list=asAccessStatusMapper.getStatusEstimationData();
		ArrayList<HashMap<String, Object>> statusList=new ArrayList<HashMap<String,Object>>();
		for(int i=0;i<list.size();i++){
			
		}*/
		
		return asAccessStatusMapper.getStatusEstimationData(year);
	}
	public ArrayList<Map<String, Object>> getYearData(){
		return asAccessStatusMapper.getYearData();
	}
	public ArrayList<Map<String, Object>> getAnalysisAvgData(Integer year,Integer estimationID){
		
		List<AsAccessStandardDetail> list = asAccessStandardDetailMapper.getChildList(estimationID, 0);
		
		ArrayList<Map<String, Object>> analysisAvgList=new ArrayList<Map<String,Object>>();
		
		for (int i = 0; i < list.size(); i++) {
			Map<String, Object> map = new HashMap<String, Object>();
			AsAccessStandardDetail detail = list.get(i);
			List<Map<String, Object>> scoreList = asAccessSelfEvalutionRecordMapper.getScoreByDetailAndYear(detail.getId(), year+"");
			//计算平均值
			Double score = (double)0;
			for (int k = 0; k < scoreList.size(); k++) {
				if(scoreList.get(k).get("score") == null || scoreList.get(k).get("score").equals("")){
					continue;
				}
				score += Double.parseDouble(scoreList.get(k).get("score")+"");
			}
			if(detail.getScore().intValue() != 0){
				map.put("perc", (score/(scoreList.size()*detail.getScore()))*100);
			}else{
				map.put("perc", 0);
			}
			map.put("name", detail.getName());
			map.put("score", detail.getScore());
			analysisAvgList.add(map);
		}
		return analysisAvgList;
	}
	
	public ArrayList<Map<String, Object>> getSpecialityData(int year){
		return asAccessStatusMapper.getSpecialityData(year);
	}


	public ServiceResult<Map<String, Object>> getFirstLevelScore(String year,
			Integer standardId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> map = new HashMap<String, Object>();
		//获取评估专业
		List<AsAccessSpecialty> speList = asAccessSpecialtyMapper.getSpecialtyByYearAndStandardId(year, standardId);
		//评估体系
		List<AsAccessStandardDetail> standardList = asAccessStandardDetailMapper.getChildList(standardId, 0);
		//评估专业在评估体系下的分数
		List<Map<String,Object>> scoreList = new ArrayList<Map<String,Object>>();
		for (int i = 0; i < speList.size(); i++) {
			List<Map<String,Object>> list = asAccessSpecialtyMapper.getSpeScore(speList.get(i).getId(), standardId);
			Map<String,Object> scoreMap = new HashMap<String, Object>();
			Double totalScore = (double)0;
			for (int j = 0; j < standardList.size(); j++) {
				AsAccessStandardDetail standard = standardList.get(j);
				Double thisScore = (double)0;
				for (int k = 0; k < list.size(); k++) {
					Map<String,Object> score = list.get(k);
					if(k == 0 && j == 0){
						scoreMap.put("orgName", score.get("academy_name"));
						scoreMap.put("speName", score.get("specialty_name"));
					}
					if(score.get("parent_id") == null){
						continue;
					}
					
					if(standard.getId() == Integer.parseInt(score.get("parent_id")+"")){
						thisScore += Double.parseDouble(score.get("score")+"");
						if(score.get("score") != null && !score.get("score").equals("")){
							totalScore += Double.parseDouble(score.get("score")+"");
						}
					}
				}
				scoreMap.put("score_"+standard.getId(), thisScore);
			}
			scoreMap.put("totalScore", totalScore);
			scoreList.add(scoreMap);
		}
		map.put("standardList", standardList);
		map.put("scoreList", scoreList);
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}


	public ServiceResult<Map<String, Object>> subAnalysis(String year,
			Integer standardId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> map = new HashMap<String, Object>();
		//最大长度
		int maxLength = 0;
		//二级目录下的专业百分比
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		//先拿到一级目录
		List<AsAccessStandardDetail> standardList = asAccessStandardDetailMapper.getChildList(standardId, 0);
		
		for (int i = 0; i < standardList.size(); i++) {
			AsAccessStandardDetail first = standardList.get(i);
			//根据一级指标获取二级指标
			List<AsAccessStandardDetail> secondStandardList = asAccessStandardDetailMapper.getChildList(standardId, first.getId());
			//获取最大长度
			if(secondStandardList.size() > maxLength){
				maxLength = secondStandardList.size();
			}
			for (int j = 0; j < secondStandardList.size(); j++) {
				Map<String,Object> scoreMap = new HashMap<String, Object>();
				//获取该指标、评估年度下所有的专业信息
				AsAccessStandardDetail second = secondStandardList.get(j);
				List<Map<String,Object>> scorelist = asAccessSelfEvalutionRecordMapper.getScoreByDetailAndYear(second.getId(), year);
				scoreMap.put("detail", scorelist);
				scoreMap.put("parentId", first.getId());
				scoreMap.put("name", second.getName());
				scoreMap.put("id", second.getId());
				scoreMap.put("totalScore", second.getScore());
				//计算平均值
				Double score = (double)0;
				for (int k = 0; k < scorelist.size(); k++) {
					if(scorelist.get(k).get("score") == null || scorelist.get(k).get("score").equals("")){
						continue;
					}
					score += Double.parseDouble(scorelist.get(k).get("score")+"");
				}
				if(second.getScore().intValue() != 0){
					scoreMap.put("score", (score/(scorelist.size()*second.getScore()))*100);
				}else{
					scoreMap.put("score", 0);
				}
				list.add(scoreMap);
			}
		}
		map.put("maxLength", maxLength);
		map.put("standardList", standardList);
		map.put("list", list);
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}
}
