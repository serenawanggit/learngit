package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.DiemnMapper;
import audit.model.Diemn;
import audit.service.DiemnI;

@Service("diemnService")
public class DiemnServiceImpl implements DiemnI{

	private DiemnMapper diemnMapper;
	@Autowired
	public void setDiemnMapper(DiemnMapper diemnMapper){
		this.diemnMapper = diemnMapper;
	}
	public List<Diemn> select(int tmid) {
		return diemnMapper.select(tmid);
	}
	public List<Diemn> selectByTmid(int[] tmid) {
		return diemnMapper.selectByTmid(tmid);
	}

	
}
