package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.vo.SpecialtyNameAndSelfAndAssessor;
import audit.model.assess.vo.UserInfoVo;


public interface AssessmentSpecialtyInfoMapper {
	
	/**
	 * 插入评估专业
	 * @param scode
	 * @param sname
	 * @param sfgk
	 * @param schoolid 学校id
	 */
	int insertspecialty(String scode,String sname,String sfgk,String rz,int id,int schoolid);
	/**
	 * 根据条件查询
	 * @return
	 */
	List<Map<String, Object>> findSpecialtyInfo(@Param("searchvalue")String searchvalue,@Param("id")String id);
	/**
	 * 根据条件查询(评估人员list列表)
	 * @return  
	 */
	List<SpecialtyNameAndSelfAndAssessor> findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor(@Param("searchvalue")String searchvalue,@Param("pgid")String pgid);
	
	
	//根据id查询自评人，审核人，网评人等。。。
	List<Map<String, Object>> findSpecialtyInfoBySpecialtyId(String id);
	
	/**
	 * 修改
	 * @param sname
	 * @param scode
	 * @param sfgk
	 * @param rz
	 * @return
	 */
	int	updateSpecialtyInfo(String sname, String scode, String sfgk,String rz,String id);
	int updateSpecialtyInfoBySelfAndAssessor(SpecialtyNameAndSelfAndAssessor andAssessor);
	/**
	 * 
	 * @param id
	 */
	int delSpecialtyInfo(String id);

	
	List<Map<String,Object>>  getAllData(Integer id,Integer speId);
	
	List<Map<String,Object>> selectById(Integer Id);
	
	List<Map<String,Object>>	getAllSpecialty(Integer id,String syear,Integer pgtype);

	/**
	 * 查询userinfo
	 * @param searchvalue
	 * @return
	 */
	List<Map<String, Object>> findUserInfo(UserInfoVo infoVo );
	List<Map<String, Object>> findUserInfoByType(UserInfoVo infoVo );
	
	//查询全部专业信息
	List<Map<String, Object>> findAllSpecialtyInfo(Integer pgType);
	
	/**
	 * 插入专业时间
	 * @param syear
	 * @param zpdate
	 * @param wpdate
	 * @param xsdate
	 * @param zyid
	 * @return
	 */
	int insertAssessDate(String syear,String zpdate,String wpdate,String xsdate,String zyid,String pgtype);
	
	/**
	 * 根据条件查询专业和时间
	 * @return
	 */
	List<Map<String, Object>> findSpecialtyAndDate(@Param("searchvalue")String searchvalue,@Param("pgid")String pgid);
	
	/**
	 * 修改专业和评估时间
	 * @param searchvalue
	 * @return
	 */
	int updateSpecialtyAndDateInfo(String syearh,String zpdate,String wpdate,String xcksdate, String id,String pgid);
	/**
	 * 删除评估专业时间
	 * @param id
	 * @return
	 */
	int delSpecialtyAndDateInfo(String id);
	/**
	 * 修改ASSESS_SELF_USER的人的信息
	 * @param uid
	 * @param assessment_user_info_id
	 * @return
	 */
	int updateSpecialtyInfoByASSESSMENT_USER_INFO(String uid,String  assessment_user_info_id);
	int insertSpecialtyInfoByASSESSMENT_USER_INFO(String  date_specialty_id,String assess_self_user,String assess_type);
	
	List<Map<String, Object>> loadtitle();
	
	int deleteSpecialtyInfoByASSESSMENT_USER_INFO(String  user_info_id);
	
	/*查询专业评估*/
    List<Map<String, Object>> selectTYPE_NAME(int id);
    
    //根据专业名查询id
    List<Map<String, Object>> getSpecialtyIdByName(String name);
}
