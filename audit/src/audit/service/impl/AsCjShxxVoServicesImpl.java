package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCjShxxVoMapper;
import audit.model.AsCjShxx;
import audit.service.AsCjShxxVoServices;
@Service("asCjShxxVoServices")
public class AsCjShxxVoServicesImpl  implements AsCjShxxVoServices{
    
	@Autowired
	public AsCjShxxVoMapper asCjShxxVoMapper;
	
	public List<AsCjShxx> selectByuserId(String cjbm,Integer pageNo,Integer pageEnd) {
		return asCjShxxVoMapper.selectByuserId(cjbm,pageNo,pageEnd);
	}

	public List<AsCjShxx> findByuserId(String cjbm) {
		return asCjShxxVoMapper.findByuserId(cjbm);
	}


}
