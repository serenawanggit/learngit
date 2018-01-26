package audit.service.impl.quality;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import audit.dao.SpecialtyMapper;
import audit.model.Sbprofession;
import audit.model.Specialty;
import audit.service.quality.SpecialtyServiceI;

@Service("specialtyService")
public class SpecialtyServiceImpl implements SpecialtyServiceI{
	
	@Autowired
	private SpecialtyMapper specialtyMapper;
	
	public int deleteByPrimaryKey(Integer id) {
		return specialtyMapper.deleteByPrimaryKey(id);
	}

	public int insert(Specialty record) {
		return specialtyMapper.insert(record);
	}

	public int insertSelective(Specialty record) {
		return specialtyMapper.insertSelective(record);
	}

	public Specialty selectByPrimaryKey(Integer id) {
		return specialtyMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(Specialty record) {
		return specialtyMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(Specialty record) {
		return specialtyMapper.updateByPrimaryKey(record);
	}

	public List<Specialty> selectByCode(String code) {
		return specialtyMapper.selectByCode(code);
	}

	public List<Sbprofession> findAllSpecialty() {
		return specialtyMapper.findAllSpecialty();
	}

}
