package audit.service.impl.ods;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import audit.common.Page;
import audit.common.ServiceResult;
import audit.dao.OdsTTeachMapper;
import audit.dao.OdsTTeachTaskMapper;
import audit.dao.OdsTTeachTemplatenameMapper;
import audit.model.ods.OdsTTeachTask;
import audit.model.ods.OdsTTeachTemplatename;
import audit.service.ods.DataMakeUpTaskService;

/**
 * 数据补录任务
 * @author yjq
 * 2015-7-8
 */
@Service("dataMakeUpTaskService")
public class DataMakeUpTaskServiceImpl implements DataMakeUpTaskService{

	@Resource
	private OdsTTeachTaskMapper odsTTeachTaskMapper;
	
	@Resource
	private OdsTTeachMapper odsTTeachMapper;
	
	@Resource
	private OdsTTeachTemplatenameMapper odsTTeachTemplatenameMapper;
	
	public ServiceResult<Page<Map<String, Object>>> getListByQuery(
			OdsTTeachTask task, Integer currentPage) {
		ServiceResult<Page<Map<String, Object>>> serviceResult = new ServiceResult<Page<Map<String,Object>>>();
		int countRecord = odsTTeachTaskMapper.selectCountByQuery(task);
		Page<Map<String, Object>> page  = new Page<Map<String,Object>>(currentPage, countRecord, 10);
		List<Map<String, Object>> list = odsTTeachTaskMapper.selectByQuery(task, page.getStartIndex(), page.getEndIndex());
		page.setList(list);
		serviceResult.setData(page);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> addNewTask(OdsTTeachTask task) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		//查询是否已存在
		OdsTTeachTask record = odsTTeachTaskMapper.selectByYearAndOrg(task.getSyear(), task.getAcademeId());
		if(record == null){
			odsTTeachTaskMapper.insertSelective(task);
			serviceResult.setOk(true);
			return serviceResult;
		}
		serviceResult.setComment("当前年份该学院已存在");
		return serviceResult;
	}

	public ServiceResult<Boolean> updateTask(OdsTTeachTask task) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		odsTTeachTaskMapper.updateByPrimaryKeySelective(task);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> deleteTask(Integer id) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		odsTTeachTaskMapper.deleteByPrimaryKey(id);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Map<String, Object>> getSearchQuery() {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> map = new HashMap<String, Object>();
		//年份
		List<Map<String, Object>> yearList = odsTTeachMapper.getYears();
		//部门、学院
		List<Map<String, Object>> orgList = odsTTeachMapper.getOrgs();
		//模板
		List<OdsTTeachTemplatename> tempList = odsTTeachTemplatenameMapper.selectAll();
		
		map.put("yearList", yearList);
		map.put("orgList", orgList);
		map.put("tempList", tempList);
		serviceResult.setOk(true);
		serviceResult.setData(map);
		return serviceResult;
	}

}
