package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.AsCjCjrwztb;
import audit.model.AsCjRwJinDu;
import audit.model.AsCjRwxx;
import audit.model.AsCjRwxx2;
import audit.model.AsCjRwxxGL;

public interface AsCjRwxxMapper {

	//根据名称模糊查询任务
	List<AsCjRwxx> selectRwByMC(@Param(value="parameter1")String measureName);

	//删除任务
	int deleteRwxx(Integer id);
	
	//分页查询任务--根据名称模糊查询任务
	List<AsCjRwxx2> findPageRwxx(String measureName,int pageStar,int pageEnd);
	
	int findCount(String measureName);
	
	//保存
	int insertRW(AsCjRwxx rw);
	
	int findMaxId();
	
	int insertRWglZTB(AsCjCjrwztb czzt);
	
	List<AsCjRwxxGL> findRwxxById(Integer id);
	
	//删除任务关联
	int deleteRwxxGL(Integer id);
	//修改任务
	int updateRW(AsCjRwxx rw);
	
	//分页查询任务进度
	List<AsCjRwJinDu> findPageRwxxZtb(@Param(value="parameter1")Integer rwid,
			@Param(value="parameter2")String measureName,
			@Param(value="pagestar")Integer pageStar);
	
	int findRwJdCount(@Param(value="parameter1")Integer rwid,
			@Param(value="parameter2")String measureName);
	
	AsCjRwxx2 findRwById(Integer id);
	
	int findYshCount(@Param(value="parameter1")Integer rwid);
	
	int updateRwZtb(AsCjCjrwztb rwztb);
	
	int findCjztbCount(Integer CJRWDM,Integer ZTBDM );
	
	void updateCjrwztb(Integer cjr,Integer shr,String cjrwnf,Integer cjrwdm,Integer ztbdm);
	/**
	 * 根据rwid查询子任务进度
	 * @param id
	 * @return
	 */
	List<AsCjRwxxGL> findRwxxByIdforSchedule(Integer id);
}
