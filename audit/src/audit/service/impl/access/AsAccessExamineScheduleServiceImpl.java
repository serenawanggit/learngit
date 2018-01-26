package audit.service.impl.access;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsAccessExamineScheduleMapper;
import audit.dao.AsAccessExamineScheduleVoMapper;
import audit.model.assess.AsAccessExamineSchedule;
import audit.model.assess.AsAccessInfo;
import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.AsAccessUser;
import audit.model.assess.vo.AsAccessExamineScheduleVo;
import audit.service.access.IAsAccessExamineScheduleService;
/**
 * @author xfwang 20150617
 *现场工作日程表
 */
@Service("asAccessExamineScheduleService")
public class AsAccessExamineScheduleServiceImpl implements
		IAsAccessExamineScheduleService {
     
	@Autowired
	private AsAccessExamineScheduleVoMapper asAccessExamineScheduleVoMapper;
	@Autowired
	private AsAccessExamineScheduleMapper asAccessExamineScheduleMapper;
	
	public ServiceResult<Map<String, Object>> findAccessYear() {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessInfo> list =  asAccessExamineScheduleVoMapper.findAccessYear();
		allMessage.put("accessYearList", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	};
	/**
	 * 根据年度id，学院id，专业id查找专业评估表
	 * @param accessId
	 * @param academyId
	 * @param specialtyId
	 * @return
	 */
	public ServiceResult<Map<String, Object>> findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId){
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessSpecialty> list = asAccessExamineScheduleVoMapper.findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(accessId,academyId,specialtyId);
		allMessage.put("accessSpecialtyList", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> getExamineExpert(
			@Param("accessSpecialtyId")Integer accessSpecialtyId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessUser> list = asAccessExamineScheduleVoMapper.getExamineExpert(accessSpecialtyId);
		allMessage.put("accessUser", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	/**
	 * 获得现场考查日程表数据内容
	 * @return
	 */
	public ServiceResult<Map<String, Object>>  selectValues(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId){
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessExamineScheduleVo> list = asAccessExamineScheduleVoMapper.selectValues(accessId, academyId, specialtyId);
		allMessage.put("examineScheduleVoList", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> insertScheduleTasks(List<AsAccessExamineSchedule> list) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessExamineScheduleMapper.insertScheduleTasks(list);
		if(count==list.size()){
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(true);
		}else{
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(false);
		}
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> deleteByPrimaryKeys(String[] ids) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessExamineScheduleMapper.deleteByPrimaryKeys(ids);
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> updateByPrimaryKeySelective(AsAccessExamineSchedule record) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessExamineScheduleMapper.updateByPrimaryKeySelective(record);
		allMessage.put("count", count);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
	    return serviceResult;
	}
}
