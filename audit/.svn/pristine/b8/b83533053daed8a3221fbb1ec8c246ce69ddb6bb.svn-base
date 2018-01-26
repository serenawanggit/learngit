package audit.service.quality;

import java.util.List;

import audit.model.Organization;
import audit.model.Sbunit;
import audit.model.Userinfo;

/**
 * 机构
 * @author LLP
 *
 */
public interface OrganizationServiceI {
	/**
	 * 根据id删除
	 * @param id
	 * @return
	 */
	int deleteByPrimaryKey(Integer id);
    /**
     * 查询所有机构
     * @return
     */
    List<Sbunit> selectAllOrganization();
    /**
     * 根据code 查询 oname
     * @param code
     * @return
     */
    Organization selectONameByCode(int code);
    
    int insert(Organization record);

    int insertSelective(Organization record);

    Organization selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Organization record);

    int updateByPrimaryKey(Organization record);
    List<Organization> selectAllOrganization1();
    List<Userinfo> selectAllUserByOrgId(Integer id);
}
