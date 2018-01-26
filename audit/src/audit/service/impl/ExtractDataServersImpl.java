package audit.service.impl;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.ExtractdataMapper;
import audit.service.ExtractDataServers;

@Service("extractDataServers")
public class ExtractDataServersImpl implements ExtractDataServers {
    @Autowired
    private ExtractdataMapper extractdataMapper;
	public Map<String, String> extractdata(String ctemplateName, String insertVersion,
			Integer userId,String what) {
		return extractdataMapper.extractdata(ctemplateName, insertVersion, userId,what);
	}

}
