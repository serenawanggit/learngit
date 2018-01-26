package audit.dao;

import java.util.List;
import java.util.Map;

public interface MoeImportMapper {

	/**
	 * 查询全部的教师激励计划表
	 * @return
	 */
	List<Map<String,Object>> findMOETable(int userid);
	
	List<Map<String,Object>>	findMOETableByAdmin();
	
	List<Map<String,Object>> findMOETableById(int id);
	
	List<Map<String,Object>> findShowCan(int userid);
	/**
	 * 
	 * @return
	 */
	List<Map<String, Object>> findUserSubmitState(int tableid,int tbrid,String insert_version);
	/**
	 * 填报人提交数据
	 * @param tbztid
	 */
	void updateTBZTByid(int tbztid);
	
	/**
	 * 初始化审核人看到的页面
	 * @param orgid
	 * @param insert_version
	 * @param tableid
	 * @return
	 */
	List<Map<String, Object>> findSHRLookData(int orgid,String insert_version,int tableid);
	/**
	 * 根据用户id查询用户信息
	 * @param userid
	 * @return
	 */
	List<Map<String, Object>> findUserByid(int userid);
	
	/**
	 * 审核未通过
	 */
	
	void updateNotPass(int id);
	/**
	 * 
	 * 审核通过
	 * @param id
	 */
	void updatePass(int id);
	/**
	 * 根据
	 * @param id
	 * @return
	 */
	List<Map<String, Object>> findRolebyid(int id);
	/**
	 * 根据id获取该表上报的数据的查询sql
	 */
    List<Map<String, Object>>	findtablesql(int id);
    
    /**
     * 根据id和中文字段名查询数据库字段名
     * @param id
     * @param tablename
     * @return
     */
   List<Map<String, Object>> findField(int id,String tablename);
   /**
    * 获取当前版本的全部教师信息
    * @param insert_version
    * @return
    */
   List<Map<String, Object>> findMoeTeacherInfo(String insert_version);
   
   List<Map<String, Object>> findAllTable();
}
