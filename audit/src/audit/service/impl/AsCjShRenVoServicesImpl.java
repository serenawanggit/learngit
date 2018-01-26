package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCjShRenVoMapper;
import audit.model.AsCjShRenVo;
import audit.service.AsCjShRenVoServices;
@Service("asCjShRenVoServices")
public class AsCjShRenVoServicesImpl implements AsCjShRenVoServices {
        @Autowired
        public AsCjShRenVoMapper asCjShRenVoMapper;
     
		public List<AsCjShRenVo> selectUsers(Integer organization) {
			return asCjShRenVoMapper.selectUsers(organization);
		}

}
