package audit.service.quality;

import java.util.Map;

import net.sf.json.JSONObject;

import audit.common.Page;
import audit.common.ServiceResult;
import audit.model.quality.AsZlZlrwxx;
import audit.model.quality.query.JdTaskQuery;
import audit.model.quality.query.JdZbQuery;
import audit.model.quality.query.TaskQuery;
import audit.model.quality.query.UserQuery;
import audit.model.quality.vo.JdTaskVo;
import audit.model.quality.vo.JdZbVo;
import audit.model.quality.vo.TaskUserVo;
import audit.model.quality.vo.TaskVo;

/**
 * 质量任务相关
 * @author yjq
 * 2015-4-20
 */
public interface ZlrwService {
	/**
	 * 新增质量任务
	 * @param rw
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	ServiceResult<Integer> addRw(AsZlZlrwxx rw);

	/**
	 * 新增阶段任务
	 * @param obj
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	ServiceResult<Integer> addJdRw(JSONObject obj);
	
	/**
	 * 根据条件查询用户阶段任务
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	ServiceResult<Page<JdTaskVo>> getJdTaskListByQuery(JdTaskQuery query);
	
	/**
	 * 根据条件查询用户阶段任务详情
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	ServiceResult<Map<String,Object>> getJdTaskDetails(JdTaskQuery query);
	
	/**
	 * 更新阶段任务
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-21
	 */
	ServiceResult<Boolean> updateUserTaskByQuery(JdTaskQuery query);

	/**
	 * 质量任务列表
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-22
	 */
	ServiceResult<Page<TaskVo>> getZlRwListByQuery(TaskQuery query);
	
	/**
	 * 删除质量任务
	 * @param ids
	 * @return
	 * @author yjq
	 * 2015-4-23
	 */
	ServiceResult<String> deleteZlRw(String ids);
	
	/**
	 * 根据id查找质量任务
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-4-23
	 */
	ServiceResult<TaskVo> selectByPrimaryKey(Integer id);
	
	/**
	 * 更新质量任务
	 * @param rw
	 * @return
	 * @author yjq
	 * 2015-4-27
	 */
	ServiceResult<Boolean> updateZlRw(AsZlZlrwxx rw);
	
	/**
	 * 获取当前进度
	 * @param userId
	 * @return
	 * @author yjq
	 * 2015-4-29
	 * @param id 
	 */
	ServiceResult<Map<String, Object>> getProgress(Integer userId, Integer rwId);
	
	/**
	 * 判断是否可以更新此阶段任务
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-4-30
	 */
	ServiceResult<Boolean> checkUpdate(Integer id, Integer userId);
	
	/**
	 * 获取阶段任务下的人员列表
	 * @param query
	 * @return
	 * @author yjq
	 * 2015-4-30
	 */
	ServiceResult<Page<TaskUserVo>> getUserListByQuery(UserQuery query);

	/**
	 * 删除阶段任务
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-4
	 */
	ServiceResult<Boolean> deleteJdRwById(Integer id);
	
	/**
	 * 删除阶段任务人员
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-4
	 */
	ServiceResult<Boolean> deleteUserById(Integer id);

	/**
	 * 阶段任务客观指标情况
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-5-4
	 */
	ServiceResult<Page<JdZbVo>> getJdZbList(JdZbQuery query);
	
	/**
	 * 更新阶段任务
	 * @param obj
	 * @return
	 * @author yjq
	 * 2015-5-6
	 */
	ServiceResult<Integer> updateJdRw(JSONObject obj);

}
