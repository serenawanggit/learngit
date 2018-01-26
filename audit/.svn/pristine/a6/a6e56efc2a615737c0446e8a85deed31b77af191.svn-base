package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCjBmyBmryMapper;
import audit.model.AsCjBmyBmry;
import audit.model.AsCjShxx;
import audit.service.AsCjBmyBmryServiceI;

@Service("asCjBmyBmryService")
public class AsCjBmyBmryServiceImpl implements AsCjBmyBmryServiceI{

	private AsCjBmyBmryMapper asCjBmyBmryMapper;
	@Autowired
	public void setAsCjBmyBmryMapper(AsCjBmyBmryMapper asCjBmyBmryMapper){
		this.asCjBmyBmryMapper = asCjBmyBmryMapper;
	}
	public int insertAsCjBmyBmry(AsCjBmyBmry acbb) {
		return asCjBmyBmryMapper.insertBmyBmry(acbb);
	}
	public List<AsCjBmyBmry> selectJsUsers() {
		return asCjBmyBmryMapper.selectJsUsers();
	}
	public List<AsCjShxx> selectJsUsers1() {
		return asCjBmyBmryMapper.selectJsUsers1();
	}
	public List<AsCjBmyBmry> findByuserIdAndZt(Integer userId,Integer bmryjs) {
		return asCjBmyBmryMapper.findByuserIdAndZt( userId, bmryjs);
	}
	public List<AsCjBmyBmry> findAll() {
		return asCjBmyBmryMapper.findAll();
	}

}
