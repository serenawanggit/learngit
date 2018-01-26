package audit.service.hr;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.hr.HRZBResultVo;
import audit.model.hr.HrTableTotal;

public interface HrTableTotalServiceI {
    /**
     * 分页 查询所有数据
     * @param start 起始数据 (start-1) * pageSize
     * @param pageSize   结束数据 (start * pageSize)
     * @param page  分页
     * @return
     */
    List<HrTableTotal> searchAll(int start,int pageSize,String tabName);
    /**
     * 检索指标
     * @param start
     * @param pageSize
     * @param where
     * @return
     */
    List<HRZBResultVo> searchAllZB(int start,int pageSize,String zbfl,String zbName);
    /**
     * 查询总记录条数
     * @return
     */
    int searchCount(String tabName);
    
    /**
     * 修改的方法
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(HrTableTotal record);
    /**
     * 根据id查询
     * @param id
     * @return
     */
    HrTableTotal selectByPrimaryKey(Integer id);
    /**
     * 新增
     * @param record
     * @return
     */
    int insertSelective(HrTableTotal record);
    /**
	 * 批量删除
	 * @param id
	 * @return
	 */
    int deleteMore(List<Integer> id);
    /**
	 * 删除
	 * @param id
	 * @return
	 */
    int deleteByPrimaryKey(Integer id);
    
    /**
     * 根据tableid 更新 table样式
     * @param id
     * @return
     */
    int updatetableStyle(Integer id,String tableStyle);
    /**
     * 查询 指标 总数
     * @return
     */
    int searchZBCount();
}
