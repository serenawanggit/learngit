package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.quality.AsZJSJ;
import audit.model.quality.AsZlZlrwbmry;
import audit.model.quality.vo.UserGroupVo;
import audit.model.quality.vo.UserVo;

public interface AsZlZlrwbmryMapper {
	/**
	 * 根据这两列查询质量部门人员表
	 * @param zlCjbmdm
	 * @param zlUserId
	 * @return
	 */
	int selectRWBMRYbycjbmdmAndUserid(@Param("zlCjbmdm")int zlCjbmdm,@Param("zlUserId")List<Integer> zlUserId);
	/**
	 * 根据cjbmdm分组
	 * @return
	 */
	List<AsZlZlrwbmry> selectGroupCJBMDM();
	/**
	 * 模糊查询 根据名字
	 * @param zlname
	 * @return
	 */
	List<AsZJSJ> selectLikeName(@Param(value="likeName")String zlname);
	/**
	 * 修改的时候必须删除cjbmdm再重新插入
	 * @param cjbmdm
	 * @return
	 */
	int deleteByPrimaryCjbmdm(int cjbmdm);
	/**
	 * 根据传进来的cjbmdm进行修改
	 * @param cjbmdm
	 * @return
	 */
	int updateByCJBMDM(@Param(value="asZlZl")AsZlZlrwbmry record,@Param(value="viewCJBMDM")int viewCJBMDM);
	/**
	 * 所有数据分页显示
	 * page=1 页
	 * size 10 每页10行
	 * @param page 页数
	 * @param size 每页大小
	 * @return
	 */
	List<AsZJSJ> selectPage();
	/**
	 * 查询专业名称
	 * @param endRow
	 * @param start
	 * @return
	 */
	List<AsZJSJ> selectSpecialtyName(String endRow,String start);
	/**
	 * 查询所有数据
	 * @return
	 */
	List<AsZlZlrwbmry> selectAllRWBMRY();
	/**
	 * 根据机构id查询记录
	 * @return
	 */
	List<AsZJSJ> selectCJBMD(int cjbmdm);
	/**
	 * 分页
	 * @param endRow  page * size
	 * @param start  (page - 1) * size
	 * @return
	 */
	List<AsZJSJ> AS_ZL_ZLRWBMRYForPage(String endRow,String start);
	/**
	 * 分页属性count需要
	 * @return
	 */
	int	AS_ZL_ZLRWBMRYCount();
	/**
	 *  分组  部门信息
	 * @return
	 */
	List<AsZJSJ> selectGourpBM();
	
    int deleteByPrimaryKey(Integer id);

    int insert(AsZlZlrwbmry record);

    int insertSelective(AsZlZlrwbmry record);

    AsZlZlrwbmry selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsZlZlrwbmry record);

    int updateByPrimaryKey(AsZlZlrwbmry record);
    
    /**
     * 根据等级获取分组信息
     * @param level
     * @return
     * @author yjq
     * 2015-4-20
     */
	List<UserGroupVo> getUserGroupByLevel(@Param("level")Integer level);
	
	/**
	 * 根据所属学院、院系、专业编号获取用户
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-4-20
	 * @param level 
	 */
	List<UserVo> getUserListByParentId(@Param("CJBMDM")Integer id, @Param("LEVEL")Integer level);
}