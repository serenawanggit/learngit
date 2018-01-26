package audit.dao;

import java.util.List;

import audit.model.assess.AsAccessExamineSchedule;

/**
 * @author xfwang 20150619
 *
 */
public interface AsAccessExamineScheduleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessExamineSchedule record);

    int insertSelective(AsAccessExamineSchedule record);

    AsAccessExamineSchedule selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessExamineSchedule record);

    int updateByPrimaryKey(AsAccessExamineSchedule record);
    
    /**
     * 批量插入现场工作日程表
     * @param list
     * @return
     */
    int insertScheduleTasks(List<AsAccessExamineSchedule> list);
    
    /**
     * 根据一组ids来删除工作任务表
     * @param ids
     * @return
     */
    int deleteByPrimaryKeys(String[] ids);
}