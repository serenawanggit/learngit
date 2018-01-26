package audit.dao;

import java.util.List;

import audit.model.assess.AsAccessExamineScene;

public interface AsAccessExamineSceneMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessExamineScene record);

    int insertSelective(AsAccessExamineScene record);

    AsAccessExamineScene selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessExamineScene record);

    int updateByPrimaryKey(AsAccessExamineScene record);
    /**
     * 批量插入现场考查任务表
     * @param list
     * @return
     */
	int insertSceneTasks(List<AsAccessExamineScene> list);
    /**
     * 根据一组ids来删除工作任务表
     * @param ids
     * @return
     */
    int deleteByPrimaryKeys(String[] ids);
}