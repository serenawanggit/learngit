package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCjSyfwMapper;
import audit.model.AsCjSyfw;
import audit.service.AsCjSyfwServiceI;

@Service("asCjSyfwService")
public class AsCjSyfwServiceImpl implements AsCjSyfwServiceI{

	private AsCjSyfwMapper asCjSyfwMapper;
	@Autowired
	public void setAsCjSyfwMapper(AsCjSyfwMapper asCjSyfwMapper){
		this.asCjSyfwMapper = asCjSyfwMapper;
	}
	public List<AsCjSyfw> selectAsCjSyfws() {
		return asCjSyfwMapper.selectAll_data();
	}

	public AsCjSyfw findAsCjSyfwById(int id) {
		return asCjSyfwMapper.selectByPrimaryKey(id);
	}
	
	
}
