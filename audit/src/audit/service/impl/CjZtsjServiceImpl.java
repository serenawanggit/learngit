package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCjZtsjbxxMapper;
import audit.model.AsCjZtsjbxx;
import audit.service.CjZtsjServiceI;
@Service("cjZtsjServiceImpl")
public class CjZtsjServiceImpl implements CjZtsjServiceI{

	private AsCjZtsjbxxMapper asCjZtsjbxxMapper;
	@Autowired
	public void setAsCjZtsjbxxMapper(AsCjZtsjbxxMapper asCjZtsjbxxMapper){
		this.asCjZtsjbxxMapper = asCjZtsjbxxMapper;
	}
	
	//根据适用范围Id查询状态数据
	public List<AsCjZtsjbxx> selectZtsjBySyfwId(Integer syfwdm){
		return asCjZtsjbxxMapper.selectZtsjBySyfwId(syfwdm);
	}
	
	//查询全部
	public List<AsCjZtsjbxx> selectAllZtsj(){
		return asCjZtsjbxxMapper.selectAllZtsj();
	}

	public int save(AsCjZtsjbxx asCjZtsjbxx) {
		return asCjZtsjbxxMapper.save(asCjZtsjbxx);
	}

	public int update(AsCjZtsjbxx asCjZtsjbxx) {
		return asCjZtsjbxxMapper.update(asCjZtsjbxx);
	}

	public int deleteAsZtsjbById(int id) {
		return asCjZtsjbxxMapper.delete(id);
	}

	public AsCjZtsjbxx findZtsjbById(int id) {
		return asCjZtsjbxxMapper.selectSingleById(id);
	}

	public List<AsCjZtsjbxx> selectZtsjs(String sql) {
		return asCjZtsjbxxMapper.selectZtsjbs(sql);
	}

	public int countZtsjbs(String sql) {
		return asCjZtsjbxxMapper.countZtsjbs(sql);
	}
	
	public List<AsCjZtsjbxx> findZtbByRwId(Integer rwid,Integer userid){
		return asCjZtsjbxxMapper.findZtbByRwId(rwid,userid);
	}

	public void updateBhly(String wtgContent, Integer rwid) {
		    asCjZtsjbxxMapper.updateBhly(wtgContent, rwid);
	}
}
