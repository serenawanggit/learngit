package audit.service.impl.hr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.HrTableCategoryMapper;
import audit.model.hr.HrTableCategory;
import audit.service.hr.HrTableCategoryServiceI;

@Service("hrTableCategoryService")
public class HrTableCategoryServiceImpl implements HrTableCategoryServiceI{
	@Autowired
	private HrTableCategoryMapper hrTableCategoryMapper;
	
	public List<HrTableCategory> selectAll() {
		return hrTableCategoryMapper.selectAll();
	}

	public int insertSelective(HrTableCategory record) {
		return hrTableCategoryMapper.insertSelective(record);
	}

	public int updateByPrimaryKeySelective(HrTableCategory record) {
		return hrTableCategoryMapper.updateByPrimaryKeySelective(record);
	}

}
