package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCjBmxxMapper;
import audit.model.AsCjBmxx;
import audit.service.AsCjBmxxServiceI;

@Service("asCjBmxxService")
public class AsCjBmxxServiceImpl implements AsCjBmxxServiceI{

	
	private AsCjBmxxMapper asCjBmxxMapper;
	@Autowired
	public void setAsCjBmxxMapper(AsCjBmxxMapper asCjBmxxMapper){
		this.asCjBmxxMapper = asCjBmxxMapper;
	}
	public List<AsCjBmxx> selectAsCjBmxxs() {
		return asCjBmxxMapper.selectAll_data();
	}

	public AsCjBmxx findCjBmxx(int cjbmdm) {
		return asCjBmxxMapper.selectByPrimaryKey(cjbmdm);
	}
	public List<AsCjBmxx> selectUsers(int cjbmdm) {
		return asCjBmxxMapper.selectUsers(cjbmdm);
	}

}
