package audit.service.impl.quality;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.OrganizationMapper;
import audit.model.Organization;
import audit.model.Sbunit;
import audit.model.Userinfo;
import audit.service.quality.OrganizationServiceI;

@Service("OrganizationService")
public class OrganizationServiceImpl implements OrganizationServiceI{
	
	@Autowired
	private OrganizationMapper organizationMapper;
	
	public int deleteByPrimaryKey(Integer id) {
		return organizationMapper.deleteByPrimaryKey(id);
	}

	public List<Sbunit> selectAllOrganization() {
		return organizationMapper.selectAllOrganization();
	}

	public int insert(Organization record) {
		return organizationMapper.insert(record);
	}

	public int insertSelective(Organization record) {
		return organizationMapper.insertSelective(record);
	}

	public Organization selectByPrimaryKey(Integer id) {
		return organizationMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(Organization record) {
		return organizationMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Organization record) {
		return organizationMapper.updateByPrimaryKey(record);
	}

	public Organization selectONameByCode(int code) {
		return organizationMapper.selectONameByCode(code);
	}

	public List<Organization> selectAllOrganization1() {
		return organizationMapper.selectAllOrganization1();
	}
	
	public List<Userinfo> selectAllUserByOrgId(Integer organizationId){
		List<Userinfo> list = organizationMapper.selectAllUserByOrgId(organizationId);
		return list;
	}

}
