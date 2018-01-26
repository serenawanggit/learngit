package audit.service.hr;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.hr.HrTableField;

public interface HrTableFieldServiceI {
	int deleteByPrimaryKey(Integer id);
	/**
     * 根据 hr_table_id 查询该表的字段信息
     * @param hrtableid
     * @return
     */
    List<HrTableField> selectByTableId(Integer hrtableid);
    
    /**
     * 新增
     * @param record 对象
     * @return
     */
    int insertSelective(HrTableField record);
    
    /**
     * 更新位置
     * @param position
     * @param where
     * @return
     */
    int updatePosition(String position,String where);
    
    /**
     * 生成数据库表
     * @param insertSql
     */
    boolean insertDataTable(String hrTableId);
    /**
	 * 根据tabName查询表是否存在
	 * @param tabName
	 * @return
	 */
    int searchTab(String tabName);
    /**
     * 新增字段(表已存在)
     * @param alterSql
     */
    void addField(String hrTableId,String fieldName,String fieldType,String fieldLength);
}
