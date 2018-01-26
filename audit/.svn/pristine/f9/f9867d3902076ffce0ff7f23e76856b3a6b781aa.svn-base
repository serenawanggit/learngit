package audit.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.AsCjCjrwztb;
import audit.model.AsCjRwJinDu;
import audit.model.AsCjRwxx;
import audit.model.AsCjRwxx2;
import audit.model.AsCjRwxxGL;
import audit.model.DefineObject;
import audit.model.DefineObjectVo;
import audit.model.DefineObjectVoDefault;
import audit.model.DefineTemplate;
import audit.model.StandardCellField;
import audit.model.StandardTemplate;
/**
 * 任务信息接口类
 * @author deng
 * 2015-3-6
 */
public interface CjRwxxServiceI {

	//查询所有
	List<AsCjRwxx> selectRwByMC(String name);
	//删除方案
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
	List<AsCjRwJinDu> findPageRwxxZtb(int rwid,String measureName,Integer pageStar);
	
	int findRwJdCount(int rwid,String measureName);
	
	AsCjRwxx2 findRwById(Integer id);
	
	int findYshCount(Integer rwid);
	
	int updateRwZtb(AsCjCjrwztb rwztb);
	//查询自定义模版
	DefineTemplate findDiyMbById(Integer id);
	
	List<DefineObject> findYsbBymbId(Integer id);
	
	StandardCellField findBZYS(Integer id);
	
	StandardTemplate findStandardTemplate(Integer id);
	/**
	 * 根据ctemplateId 加是否校验的条件查询出需要校验的列名
	 * @param ctemplateId
	 * @return
	 */
	List<DefineObjectVo> findACOTMByCid(Integer ctemplateId);
	/**
	 * 根据ctemplateId查询全部的列名
	 * @param Cid
	 * @return
	 */
	
	List<Map<String, Object>> findAllByCid(Integer Cid);
	/**
	 * 根据ctemplateId查询全部要进行默认校验的字段
	 * @param ctemplateId
	 * @return
	 */
	List<DefineObjectVoDefault> findDefaultCheckFiled(Integer ctemplateId);
	/**
	 * 根据采集任务代码 和状态表代码 查询采集任务状态表
	 * @param CJRWDM
	 * @param ZTBDM
	 * @return
	 */
	int findCjztbCount(Integer CJRWDM,Integer ZTBDM );
	/**
	 * 
	 * @param cjr
	 * @param shr
	 * @param cjrwnf
	 * @param cjrwdm
	 * @param ztbdm
	 */
	void updateCjrwztb(Integer cjr,Integer shr,String cjrwnf,Integer cjrwdm,Integer ztbdm);
	
	/**
	 * 根据rwid查询子任务进度
	 * @param id
	 * @return
	 */
	List<AsCjRwxxGL> findRwxxByIdforSchedule(Integer id);
	
}
