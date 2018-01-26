package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.hr.HrTableField;

public interface HrTableFieldMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(HrTableField record);
    /**
     * 新增
     * @param record 对象
     * @return
     */
    int insertSelective(HrTableField record);

    HrTableField selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(HrTableField record);

    int updateByPrimaryKey(HrTableField record);
    
    /**
     * 根据 hr_table_id 查询该表的字段信息
     * @param hrtableid
     * @return
     */
    List<HrTableField> selectByTableId(@Param("hrtableid")Integer hrtableid);
    /**
     * 更新位置
     * @param position
     * @param where
     * @return
     */
    int updatePosition(@Param("position")String position,@Param("where")String where);
    /**
     * tableid 查询字段
     * @param tableId
     * @return
     */
	List<HrTableField> getAllFieldByTableId(@Param("tableId")Integer tableId);
	/**
	 * 根据tabName查询表是否存在
	 * @param tabName
	 * @return
	 */
	int searchTab(@Param("tabName")String tabName);
	
	void addField(@Param("alterSql")String alterSql);
}