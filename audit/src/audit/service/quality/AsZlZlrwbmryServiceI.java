package audit.service.quality;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.quality.AsZJSJ;
import audit.model.quality.AsZlZlrwbmry;

/**
 * 质量任务部门与部门人员
 * @author LLP
 *
 */
public interface AsZlZlrwbmryServiceI {
	
	/**
	 * 根据这两列查询质量部门人员表
	 * @param zlCjbmdm
	 * @param zlUserId
	 * @return
	 */
	int selectRWBMRYbycjbmdmAndUserid(int zlCjbmdm,List<Integer> zlUserId);
	/**
	 * 模糊查询 根据名字
	 * @param zlname
	 * @return
	 */
	List<AsZJSJ> selectLikeName(@Param(value="likename")String zlname);
	
	int deleteByPrimaryCjbmdm(int cjbmdm);
	/**
	 * 根据传进来的cjbmdm进行修改
	 * @param cjbmdm
	 * @return
	 */
	int updateByCJBMDM(AsZlZlrwbmry record,int viewCJBMDM);
	/**
	 * 所有数据分页显示
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
	 * 机构名 分页
	 * @param endRow  page * size
	 * @param start  (page - 1) * size
	 * @return
	 */
	List<AsZJSJ> AS_ZL_ZLRWBMRYForPage(String endRow,String start);
	/**
	 * 分页count需要
	 * @return
	 */
	int AS_ZL_ZLRWBMRYCount();
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
}
