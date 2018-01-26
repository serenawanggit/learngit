package audit.service.impl.access;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsAccessSiteCheckRecordMapper;
import audit.dao.AsAccessSiteCheckReportMapper;
import audit.dao.AsAccessSpecialtyMapper;
import audit.dao.AsAccessStandardDetailMapper;
import audit.dao.AsAccessUserMapper;
import audit.model.assess.AsAccessSiteCheckRecord;
import audit.model.assess.AsAccessSiteCheckReport;
import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.AsAccessStandardDetail;
import audit.model.assess.AsAccessUser;
import audit.service.access.SiteCheckConclusionService;

@Service("siteCheckConclusionService")
public class SiteCheckConclusionServiceImpl implements SiteCheckConclusionService{

	@Resource
	private AsAccessSpecialtyMapper asAccessSpecialtyMapper;
	
	@Resource
	private AsAccessStandardDetailMapper asAccessStandardDetailMapper;
	
	@Resource
	private AsAccessSiteCheckRecordMapper asAccessSiteCheckRecordMapper;
	
	@Resource
	private AsAccessUserMapper asAccessUserMapper;
	
	@Resource
	private AsAccessSiteCheckReportMapper asAccessSiteCheckReportMapper;
	
	public ServiceResult<Map<String, Object>> findRecord(
			Integer accessSpecialtyId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String, Object>>();
		//返回的map
		Map<String, Object> map = new HashMap<String, Object>();
		//体系集合
		List<Map<String, Object>> mapList = new ArrayList<Map<String, Object>>();
		//总分
		Double totalScore = (double) 0;
		map.put("list", mapList);
		
		//先找到评估专业
		AsAccessSpecialty accessSpecialty = asAccessSpecialtyMapper.selectByPrimaryKey(accessSpecialtyId);
		Integer standardId = Integer.parseInt(accessSpecialty.getDefaultStandartId());
		
		//获取现场考察人员
		AsAccessUser record = new AsAccessUser();
		record.setUserGroupId(accessSpecialty.getUserGroupId());
		record.setUserType((byte)4);
		record.setOperateType((byte)1);
		List<AsAccessUser> userList = asAccessUserMapper.getUserListByQuery(record);
		map.put("userList", userList);
		
		map.put("totalScore", totalScore);
		//获取评估指标（每个指标获取相应的评分记录）
		//先获取一级的
		List<AsAccessStandardDetail> list = asAccessStandardDetailMapper.getChildList(standardId, 0);
		// 递归找到子级及评分记录
		getRecordAndChildNode(mapList, list, accessSpecialtyId, standardId, map);
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}

	/**
	 * 递归找到子级及评分记录
	 * @param list
	 * @author yjq
	 * 2015-7-1
	 */
	private void getRecordAndChildNode(List<Map<String, Object>> mapList, List<AsAccessStandardDetail> list, 
			Integer accessSpecialtyId, Integer standardId, Map<String, Object> totalmap) {
		for (int i = 0; i < list.size(); i++) {
			Map<String, Object> map = new HashMap<String, Object>();
			AsAccessStandardDetail detail = list.get(i);
			//根据评估指标获取评分记录(组员)
			List<AsAccessSiteCheckRecord> siteRecordList = asAccessSiteCheckRecordMapper.getListByQuery(detail.getId(), accessSpecialtyId, (byte)0);
			//组长评分
			List<AsAccessSiteCheckRecord> siteRecord = asAccessSiteCheckRecordMapper.getListByQuery(detail.getId(), accessSpecialtyId, (byte)1);
			
			//子级节点集合
			List<AsAccessStandardDetail> childList = asAccessStandardDetailMapper.getChildList(standardId, detail.getId());
			//子级MAP
			List<Map<String, Object>> childMapList = new ArrayList<Map<String, Object>>();
			
			map.put("detail", detail);
			map.put("siteRecordList", siteRecordList);
			map.put("childMapList", childMapList);
			map.put("leaderSiteRecord", siteRecord);
			
			mapList.add(map);
			//存在子级则递归
			if(childList != null && childList.size() != 0){
				getRecordAndChildNode(childMapList, childList, accessSpecialtyId, standardId, totalmap);
			}else{
				//计算总分
				if(siteRecord != null && siteRecord.size() != 0){
					Double totalScore = Double.parseDouble(totalmap.get("totalScore")+"");
					totalScore += siteRecord.get(0).getScore().doubleValue();
					totalmap.put("totalScore", totalScore);
				}
			}
		}
	}

	public ServiceResult<Boolean> saveScore(Integer accessSpecialtyId,
			Double score, Integer detailId, Integer userId) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		
		AsAccessSiteCheckRecord record = new AsAccessSiteCheckRecord();
		record.setAccessSpecialtyId(accessSpecialtyId);
		record.setRecordType((byte)1);
		record.setScore((new BigDecimal(score)).setScale(2, BigDecimal.ROUND_HALF_UP));
		record.setStandardDetailId(detailId);
		record.setUserId(userId);
		
		//查询是否已存在
		List<AsAccessSiteCheckRecord> siteRecordList = asAccessSiteCheckRecordMapper.getListByQuery(detailId, accessSpecialtyId, (byte)1);
		if(siteRecordList !=null && siteRecordList.size() != 0){
			record.setId(siteRecordList.get(0).getId());
			asAccessSiteCheckRecordMapper.updateByPrimaryKey(record);
		}else{
			asAccessSiteCheckRecordMapper.insertSelective(record);
		}
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<List<AsAccessSiteCheckReport>> findReport(
			Integer accessSpecialtyId) {
		ServiceResult<List<AsAccessSiteCheckReport>> serviceResult = new ServiceResult<List<AsAccessSiteCheckReport>>();
		List<AsAccessSiteCheckReport> list = asAccessSiteCheckReportMapper.selectByAccessSpecialtyId(accessSpecialtyId);
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Integer> addNewNode(String name, Integer accessSpecialtyId) {
		ServiceResult<Integer> serviceResult = new ServiceResult<Integer>();
		AsAccessSiteCheckReport report = new AsAccessSiteCheckReport();
		report.setAccessSpcialtyId(accessSpecialtyId);
		report.setNodeName(name);
		asAccessSiteCheckReportMapper.insertSelective(report);
		serviceResult.setData(report.getId());
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> deleteNode(Integer id) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		asAccessSiteCheckReportMapper.deleteByPrimaryKey(id);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> saveReport(String content, Integer nodeId) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		AsAccessSiteCheckReport report = new AsAccessSiteCheckReport();
		report.setId(nodeId);
		report.setContent(content);
		asAccessSiteCheckReportMapper.updateByPrimaryKeySelective(report);
		serviceResult.setOk(true);
		return serviceResult;
	}
}
