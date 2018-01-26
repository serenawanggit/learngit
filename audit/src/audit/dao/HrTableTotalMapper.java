package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.hr.HRZBResultVo;
import audit.model.hr.HrTableTotal;
import audit.model.hr.HrTableTotalVo;

public interface HrTableTotalMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(HrTableTotal record);

    int insertSelective(HrTableTotal record);
    /**
     * 根据表id查询记录
     * @param id
     * @return
     */
    HrTableTotal selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(HrTableTotal record);

    int updateByPrimaryKey(HrTableTotal record);
    /**
     * 查询 指标 总数
     * @return
     */
    int searchZBCount();
    /**
     * 检索指标
     * @param start
     * @param pageSize
     * @param where
     * @return
     */
    List<HRZBResultVo> searchAllZB(@Param("start")int start,@Param("pageSize")int pageSize,@Param("where")StringBuffer where);
    /**
     * 生成数据库表
     * @param insertSql
     */
    void insertDataTable(@Param("createSql")StringBuffer createSql);
    /**
     * 分页 查询所有数据
     * @param start 起始数据 (start-1) * pageSize
     * @param pageSize   结束数据 (start*pageSize)
     * @param page  分页
     * @return
     */
    List<HrTableTotal> searchAll(@Param("start")int start,@Param("pageSize")int pageSize,@Param("tabName")String tabName);
    /**
     * 查询总记录条数
     * @return
     */
    int searchCount(@Param("tabName")String tabName);
    /**
	 * 删除
	 * @param id
	 * @return
	 */
    int deleteMore(@Param("id")List<Integer> id);
    /**
     * 根据tableid 更新 table样式
     * @param id
     * @return
     */
    int updatetableStyle(@Param("id")Integer id,@Param("tableStyle")String tableStyle);

	List<HrTableTotalVo> getTableByCategoryId(@Param("categoryId")Integer categoryId);

	void saveData(@Param("insertSql")StringBuffer insertSql);
	
	void deleteData(@Param("deleteSql")StringBuffer deleteSql);

	List<Map<String, Object>> selectData(@Param("selectSql")StringBuffer selectSql);
	
	List<Map<String,Object>> selectteacher();
	
	int findErrorRecord(String tablename);
	
	void updateTableECount(@Param("tablename")String tablename,@Param("errorRecord")int errorRecord,@Param("id")int id,@Param("status")int status);
	
	void updateTableStatus(@Param("tablename")String tablename,@Param("id")int id,@Param("status")int status);
	
	List<Map<String, Object>> findTableData();

}