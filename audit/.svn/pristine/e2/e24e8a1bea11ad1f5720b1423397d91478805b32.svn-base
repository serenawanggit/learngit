package audit.service.quality;

import java.util.List;

import audit.common.ServiceResult;
import audit.model.quality.vo.UserGroupVo;
import audit.model.quality.vo.UserVo;

/**
 * 质量任务人员处理相关
 * @author yjq
 * 2015-4-20
 */
public interface ZlrwryService {
	
	/**
	 * 获取分组信息
	 * @param level  学院：1、院系：2、专业：3
	 * @return
	 * @author yjq
	 */
	ServiceResult<List<UserGroupVo>> getUserGroupByLevel(Integer level);

	/**
	 * 根据所属学院、院系、专业编号获取用户
	 * @param id
	 * @return
	 * @author yjq
	 * @param level 
	 */
	ServiceResult<List<UserVo>> getUserListByParentId(Integer id, Integer level);

}
