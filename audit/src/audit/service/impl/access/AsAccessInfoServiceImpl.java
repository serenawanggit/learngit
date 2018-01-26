package audit.service.impl.access;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsAccessInfoMapper;
import audit.model.assess.AsAccessDataInfo;
import audit.model.assess.AsAccessInfo;
import audit.model.assess.tack.AsAssessinfoTack;
import audit.service.access.AsAccessInfoServiceI;
@Service("asAccessInfoService")
public class AsAccessInfoServiceImpl implements AsAccessInfoServiceI{
	@Autowired
	private AsAccessInfoMapper asAccessInfoMapper;

	public ServiceResult<List<AsAssessinfoTack>> searchPipn(String assessYear,Integer accessId) {
		ServiceResult<List<AsAssessinfoTack>> serviceResult = new ServiceResult<List<AsAssessinfoTack>>();
		List<AsAssessinfoTack> list=asAccessInfoMapper.searchPipn(assessYear,accessId);
		if (list.isEmpty()) {
			serviceResult.setComment("专业评估数据为Null:AsAccessInfoServiceImpl lin:21");
			return serviceResult;
		}
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<List<AsAccessInfo>> getAllYear() {
		ServiceResult<List<AsAccessInfo>> serviceResult = new ServiceResult<List<AsAccessInfo>>();
		List<AsAccessInfo> listYear=asAccessInfoMapper.getAllYear();
		if (listYear.isEmpty()) {
			serviceResult.setComment("没有找到年份记录");
			return serviceResult;
		}
		serviceResult.setData(listYear);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public AsAccessInfo searchchPinByYear(String assessYear) {
		return asAccessInfoMapper.searchchPinByYear(assessYear);
	}
	
}
