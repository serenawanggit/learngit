package audit.service;

import java.util.List;

import audit.model.Userinfo;

public interface UserinfoServiceI {
	
	int deleteByPrimaryKey(Integer id);

    int insert(Userinfo record);

    int insertSelective(Userinfo record);

    Userinfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Userinfo record);

    int updateByPrimaryKey(Userinfo record);
    /**
     * 查询所有用户信息
     * @return
     */
    List<Userinfo> selectAllUserinfo();
    /**
     * 获取该专业下面所有用户
     * @param oraganizationId
     * @return
     */
    List<Userinfo> selectAllUserinfoByOraganizationId(int oraganizationId);
    /**
     * 根据用户id获取机构id
     * @param userId
     * @return
     */
	Userinfo  findOrganizationIdByUserId(Integer userId);
}
