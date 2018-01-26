package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.TeachersMapper;
import audit.service.TeachersServices;

@Service("teachersServicesImpl")
public class TeachersServicesImpl implements TeachersServices {

	@Autowired
	private TeachersMapper teacherMapper;
	
	@Override
	public List<Map<String, Object>> selectTeacher(Map<String, String> map) {
		return teacherMapper.selectTeacher(map);
	}

}
