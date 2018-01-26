package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsPlanMapper;
import audit.model.AsPlan;
import audit.service.AsPlanServiceI;
@Service("asPlanService")
public class AsPlanServiceImpl implements AsPlanServiceI{

	private AsPlanMapper asPlanMapper;
	@Autowired
	public void setAsPlanMapper(AsPlanMapper asPlanMapper){
		this.asPlanMapper = asPlanMapper;
	}
	
	public List<AsPlan> listAsPlan() {
		return asPlanMapper.selectAllPlan();
	}

	public AsPlan findAsPlanById(int id) {
		return asPlanMapper.selectAllPlanByPid(id);
	}

	public List<AsPlan> listAsPlansByMid(int mid) {
		return asPlanMapper.selectAllPlanByMid(mid);
	}

	public int updateAsPlan(AsPlan ap) {
		return asPlanMapper.updateByPrimaryKey(ap);
	}

	public List<AsPlan> listAsPlansByMidNogl(int mid) {
		return asPlanMapper.selectAllPlanNogl(mid);
	}
	
	public int insertPlan(AsPlan ap){
		return asPlanMapper.insertPlan(ap);
	}
	
	public AsPlan findMaxNo(){
		return asPlanMapper.findMaxNo();
	}
	
	public int deleteByPid(Integer pid){
		return asPlanMapper.deleteByPid(pid);
	}
}
