package audit.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCjRwztbMapper;
import audit.model.AsCjCjrwztb;
import audit.service.AsCjrwztbServices;
@Service("AsCjrwztbServices")
public class AsCjrwztbServicesImpl implements AsCjrwztbServices {
     @Autowired
     private AsCjRwztbMapper asCjRwztbMapper;

	public void updateAscjrwztb(Integer ztbdm,Integer cjrwdm) {
		  asCjRwztbMapper.updateAscjrwztb(ztbdm,cjrwdm);
	}

	public AsCjCjrwztb findCjRwZtId(Integer cjrwdm, Integer ztbdm) {
		return asCjRwztbMapper.findCjRwZtId(cjrwdm, ztbdm);
	}

	public AsCjCjrwztb findCjrecjr(Integer id) {
		return asCjRwztbMapper.findCjrecjr(id);
	}

	public List<AsCjCjrwztb> findCJR() {
		return asCjRwztbMapper.findCJR();
	}

	public void updateAsRWtg(Integer rwid) {
		  asCjRwztbMapper.updateAsRWtg(rwid);
	}

	public void updateAsRWbh(Integer rwid) {
          asCjRwztbMapper.updateAsRWbh(rwid);	
	}

	public void deleteRW(Integer ztbid) {
		asCjRwztbMapper.deleteRW(ztbid);
		
	}

	public void updateAsRWqx(Integer rwid) {
		asCjRwztbMapper.updateAsRWqx(rwid);
	}

	public void updateAsRWtgX(Integer rwid) {
		asCjRwztbMapper.updateAsRWtgX(rwid);
	}

}
