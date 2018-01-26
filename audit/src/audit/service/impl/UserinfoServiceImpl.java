package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.UserinfoMapper;
import audit.model.Userinfo;
import audit.service.UserinfoServiceI;
@Service("UserinfoService")
public class UserinfoServiceImpl implements UserinfoServiceI{

	@Autowired
	private UserinfoMapper userinfoMapper;
	
	public int deleteByPrimaryKey(Integer id) {
		return userinfoMapper.deleteByPrimaryKey(id);
	}

	public int insert(Userinfo record) {
		return userinfoMapper.insert(record);
	}

	public int insertSelective(Userinfo record) {
		return userinfoMapper.insertSelective(record);
	}

	public Userinfo selectByPrimaryKey(Integer id) {
		return userinfoMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(Userinfo record) {
		return userinfoMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Userinfo record) {
		return userinfoMapper.updateByPrimaryKey(record);
	}

	public List<Userinfo> selectAllUserinfo() {
		return  userinfoMapper.selectAllUserinfo();
	}

	public List<Userinfo> selectAllUserinfoByOraganizationId(int oraganizationId) {
		return userinfoMapper.selectAllUserinfoByOraganizationId(oraganizationId);
	}

	public Userinfo findOrganizationIdByUserId(Integer userId) {
		return userinfoMapper.findOrganizationIdByUserId(userId);
	}

}
