package audit.service.impl.access;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsAccessExamineSceneMapper;
import audit.dao.AsAccessExamineSceneVoMapper;
import audit.dao.AsAccessSystemCodeMapper;
import audit.model.assess.AsAccessExamineScene;
import audit.model.assess.AsAccessInfo;
import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.AsAccessSystemCode;
import audit.model.assess.AsAccessUser;
import audit.model.assess.vo.AsAccessExamineSceneVo;
import audit.service.access.IAsAccessExamineSceneService;
/**
 * @author xfwang 20150619
 *现场考查任务表
 */
@Service("asAccessExamineSceneService")
public class AsAccessExamineSceneServiceImpl implements
		IAsAccessExamineSceneService {
	
    @Autowired
	private AsAccessExamineSceneMapper asAccessExamineSceneMapper;
    
    @Autowired
	private AsAccessExamineSceneVoMapper asAccessExamineSceneVoMapper;
    
    @Autowired
   	private AsAccessSystemCodeMapper asAccessSystemCodeMapper;
    
	public ServiceResult<Map<String, Object>> findAccessYear() {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessInfo> list =  asAccessExamineSceneVoMapper.findAccessYear();
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
		List<AsAccessSpecialty> list = asAccessExamineSceneVoMapper.findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(accessId,academyId,specialtyId);
		allMessage.put("accessSpecialtyList", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	/**
	 * 获得现场考查任务表内容
	 * @return
	 */
	public ServiceResult<Map<String, Object>>  selectValues(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId){
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessExamineSceneVo> list = asAccessExamineSceneVoMapper.selectValues(accessId, academyId, specialtyId);
		allMessage.put("AsAccessExamineSceneVo", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> getExamineExpert(
			@Param("accessSpecialtyId")Integer accessSpecialtyId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessUser> list = asAccessExamineSceneVoMapper.getExamineExpert(accessSpecialtyId);
		allMessage.put("accessUser", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> insertSceneTasks(
			List<AsAccessExamineScene> list) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessExamineSceneMapper.insertSceneTasks(list);
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
	public ServiceResult<Map<String, Object>> updateByPrimaryKeySelective(AsAccessExamineScene record) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessExamineSceneMapper.updateByPrimaryKeySelective(record);
		allMessage.put("count", count);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
	    return serviceResult;
	}
	public ServiceResult<Map<String, Object>> deleteByPrimaryKeys(String[] ids) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessExamineSceneMapper.deleteByPrimaryKeys(ids);
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Map<String, Object>> selectByCodeType(String codeType) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessSystemCode> list = asAccessSystemCodeMapper.selectByCodeType(codeType);
		allMessage.put("asAccessSystemCode", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public AsAccessExamineScene selectByPrimaryKey(Integer id) {
		AsAccessExamineScene scene = asAccessExamineSceneMapper.selectByPrimaryKey(id);
				return scene;
	}
}
