package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.OrganizationMapper;
import audit.model.Organization;
import audit.service.OrganizationServices;

@Service("organizationServices")
public class OrganizationServicesImpl implements OrganizationServices{
   @Autowired
   private OrganizationMapper organizationMapper;
	public List<Organization> findAllAndLevel() {
		return organizationMapper.findAllAndLevel();
	}

}
