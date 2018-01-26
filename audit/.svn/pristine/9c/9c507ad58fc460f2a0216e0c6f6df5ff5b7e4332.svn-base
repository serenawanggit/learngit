package audit.service.ods;

import java.util.Map;

import audit.common.Page;
import audit.common.ServiceResult;
import audit.model.ods.OdsTTeachTask;

public interface DataMakeUpTaskService {
	
	/**
	 * 分页获取数据补录任务
	 * @param task 条件
	 * @param currentPage 页码
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	ServiceResult<Page<Map<String, Object>>> getListByQuery(
			OdsTTeachTask task, Integer currentPage);
	
	/**
	 * 新增任务
	 * @param task
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	ServiceResult<Boolean> addNewTask(OdsTTeachTask task);

	/**
	 * 修改任务
	 * @param task
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	ServiceResult<Boolean> updateTask(OdsTTeachTask task);
	
	/**
	 * 删除任务
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-7-8
	 */
	ServiceResult<Boolean> deleteTask(Integer id);

	ServiceResult<Map<String, Object>> getSearchQuery();

}
