package audit.service.impl.quality;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsZlZlrwbmryMapper;
import audit.model.quality.vo.UserGroupVo;
import audit.model.quality.vo.UserVo;
import audit.service.quality.ZlrwryService;

@Service("zlrwryService")
public class ZlrwryServiceImpl implements ZlrwryService{

	@Resource
	private AsZlZlrwbmryMapper asZlZlrwbmryMapper;
	
	public ServiceResult<List<UserGroupVo>> getUserGroupByLevel(Integer level) {
		ServiceResult<List<UserGroupVo>> serviceResult = new ServiceResult<List<UserGroupVo>>();
		List<UserGroupVo> list = asZlZlrwbmryMapper.getUserGroupByLevel(level);
		if(list.isEmpty()){
			serviceResult.setComment("用户数据为空，请至'任务部门与人员管理'维护");
			return serviceResult;
		}
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<List<UserVo>> getUserListByParentId(Integer id, Integer level) {
		ServiceResult<List<UserVo>> serviceResult = new ServiceResult<List<UserVo>>();
		List<UserVo> list = asZlZlrwbmryMapper.getUserListByParentId(id, level);
		if(list.isEmpty()){
			serviceResult.setComment("用户数据为空，请联系管理员维护");
			return serviceResult;
		}
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

}
