package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsEstimateMapper;
import audit.model.AsEstimate;
import audit.service.AsEstimateServiceI;
import audit.util.DBConnection;
@Service("asEstimateService")
public class AsEstimateServiceImpl implements AsEstimateServiceI{

	private AsEstimateMapper asEstimateMapper;
	
	@Autowired
	public void setAsEstimateMapper(AsEstimateMapper asEstimateMapper){
		this.asEstimateMapper = asEstimateMapper;
	}
	public List<AsEstimate> selectAllAsEstimames() {
		return asEstimateMapper.selectAll();
	}

	public List<AsEstimate> selectAllRoots() {
		return asEstimateMapper.selectRoot();
	}

	public List<AsEstimate> selectAllSubs(int parent) {
		return asEstimateMapper.selectSub(parent);
	}
	public int save(AsEstimate ae) {
		return asEstimateMapper.save(ae);
	}
	public int update(AsEstimate ae) {
		return asEstimateMapper.update(ae);
	}
	public int delete(int id) {
		return asEstimateMapper.delete(id);
	}
	public AsEstimate selectSingleById(int id) {
		return asEstimateMapper.selectSingleById(id);
	}
	public List<AsEstimate> selectAllRoot2s() {
		return asEstimateMapper.selectRoot2();
	}
	public List<AsEstimate> selectAllSub2s(int parent) {
		return asEstimateMapper.selectSub2(parent);
	}
	public void updateContent(String content, int id) {
		asEstimateMapper.updateContent(content, id);
	}
	public void updateNowAsEstimate() throws Exception{
         String sql="update as_e_estimate set as_e_estimate.content = app.content,as_e_estimate.pid=app.pid from as_e_estimate aee,AS_P_PLAN app where aee.NAME = app.name";		
	     DBConnection.Add(sql);
	}

}
