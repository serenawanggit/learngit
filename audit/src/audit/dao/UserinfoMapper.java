
package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.Userinfo;

public interface UserinfoMapper {
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
    
    int deleteByPrimaryKey(Integer id);

    int insert(Userinfo record);

    int insertSelective(Userinfo record);

    Userinfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Userinfo record);

    int updateByPrimaryKey(Userinfo record);
    
	Map<String, Object> selectOrganizationNameByUserId(String userId);
	
	Userinfo  findOrganizationIdByUserId(Integer userId);
}
