package audit.dao;

import java.util.List;

import audit.model.Organization;
import audit.model.Sbunit;
import audit.model.Userinfo;

public interface OrganizationMapper {
    int deleteByPrimaryKey(Integer id);
    
    Organization selectONameByCode(int code);
    
    List<Sbunit> selectAllOrganization();
    
    int insert(Organization record);

    int insertSelective(Organization record);

    Organization selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Organization record);

    int updateByPrimaryKey(Organization record);
    /**
     * 查询全部等级为2的机构
     */
    
    List<Organization> findAllAndLevel();
    
    List<Organization> selectAllOrganization1();
    
    List<Userinfo> selectAllUserByOrgId(Integer id);
}