package audit.service.assess;

import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;
import audit.model.assess.vo.SpecialtyNameAndSelfAndAssessor;
import audit.model.assess.vo.UserInfoVo;

public interface AssessmentSpecialtyInfoServices {

	
	/**
	 * 插入评估专业
	 * @param scode
	 * @param sname
	 * @param sfgk
	 * @param schoolid
	 */
	String insertspecialty(String scode,String sname,String sfgk,String rz,int id,int schoolid);

	/**
	 * 查询
	 * @return
	 */
	List<Map<String, Object>> findSpecialtyInfo(String searchvalue ,String id);
	/**
	 * 查询 专业名称 人名 身份
	 * @return
	 */
	List<SpecialtyNameAndSelfAndAssessor> findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor(String searchvalue,String pgid);
	/**
	 * 修改
	 * @param sname
	 * @param scode
	 * @param sfgk
	 * @param rz
	 * @return
	 */
	String	updateSpecialtyInfo(String sname, String scode, String sfgk,String rz,String id);
	int updateSpecialtyInfoBySelfAndAssessor(SpecialtyNameAndSelfAndAssessor andAssessor);
	/**
	 * 删除
	 * @param id
	 * @return
	 */
	String delSpecialtyInfo(String id);
	List<Map<String, Object>> findUserInfo(UserInfoVo infoVo);
	List<Map<String, Object>> findUserInfoByType(UserInfoVo infoVo);

	
	List<Map<String,Object>> getAllData(Integer id,Integer speId);
	
	/**
	 * 查询相关专业信息
	 * @param id
	 * @return
	 */
	List<Map<String,Object>> selectById(Integer id);
	/**
	 * 查询所有专业信息
	 * @param id
	 * @return
	 */
	List<Map<String,Object>> getAllSpecialty(Integer id,String syear,Integer pgtype);

	/**
	 * 插入专业和评估时间
	 * @param jsonArray
	 * @return
	 */
	String insertAssessDate(JSONArray jsonArray);
	/**
	 * 查询专业和评估时间
	 * @param searchvalue
	 * @return
	 */
	List<Map<String, Object>> findSpecialtyAndDate(String searchvalue,String pgid);
	
	/**
	 * 修改专业和评估时间
	 * @param searchvalue
	 * @return
	 */
	String updateSpecialtyAndDateInfo(String syearh,String zpdate,String wpdate,String xcksdate,String id,String pgid);
	
	/**
	 * 删除评估专业时间
	 * @param id
	 * @return
	 */
	String delSpecialtyAndDateInfo(String id);
	/**
	 * 查询评估的全部分类
	 * @return
	 */
	List<Map<String, Object>> loadtitle();
	/**
	 * 
	 * @param zhuanYeId 专业id
	 * @param s_u_id  审核人id
	 * @param z_u_id  自评人id 
	 * @param saveuserid  需要保存的id
	 * @param type	类型
	 * @param oldW_id   查询寻出来的网评人id数组
	 * @param newW_id	操作之后的网评人id数组
	 * @return
	 */
    String saveUserAndSpecialty(String zhuanYeId,String s_u_id,String z_u_id,
    		String saveuserid,String type,String oldW_ids,String newW_ids,String w_u_id);
    
    /*查询专业评估*/
    public List<Map<String, Object>> selecttype_name(int id);
	
    //查询全部专业信息
  	List<Map<String, Object>> findAllSpecialtyInfo(Integer pgType);
  	
  //根据id查询自评人，审核人，网评人等。。。
  	List<Map<String, Object>> findSpecialtyInfoBySpecialtyId(String id);
  	
  //根据专业名查询id
    List<Map<String, Object>> getSpecialtyIdByName(String name);
}
