package audit.service.impl.hr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.HrTableTotalMapper;
import audit.model.hr.HRZBResultVo;
import audit.model.hr.HrTableTotal;
import audit.service.hr.HrTableFieldServiceI;
import audit.service.hr.HrTableTotalServiceI;

@Service("hrTableTotalService")
public class HrTableTotalServiceImpl implements HrTableTotalServiceI{
	@Autowired
	private HrTableTotalMapper hrTableTotalMapper;
	@Autowired
	private HrTableFieldServiceI hrTableFieldService;
	
	public List<HrTableTotal> searchAll(int start, int pageSize,String tabName) {
		return hrTableTotalMapper.searchAll(((start-1)*pageSize), (start*pageSize),tabName);
	}

	public int searchCount(String tabName) {
		return hrTableTotalMapper.searchCount(tabName);
	}

	public int updateByPrimaryKeySelective(HrTableTotal record) {
		return hrTableTotalMapper.updateByPrimaryKeySelective(record);
	}

	public HrTableTotal selectByPrimaryKey(Integer id) {
		return hrTableTotalMapper.selectByPrimaryKey(id);
	}

	public int insertSelective(HrTableTotal record) {
		return hrTableTotalMapper.insertSelective(record);
	}
	
	public int deleteMore(List<Integer> id) {
		return hrTableTotalMapper.deleteMore(id);
	}

	public int deleteByPrimaryKey(Integer id) {
		//此处删除表id相同的字段
		int i = hrTableFieldService.deleteByPrimaryKey(id);
		return hrTableTotalMapper.deleteByPrimaryKey(id);
	}

	public int updatetableStyle(Integer id,String tableStyle) {
		return hrTableTotalMapper.updatetableStyle(id,tableStyle);
	}

	public List<HRZBResultVo> searchAllZB(int start, int pageSize, String zbfl,String zbName) {
		StringBuffer where = new StringBuffer(" where STATES = 1 AND IS_QUERY = 1 ");
		if(!zbfl.equals("") || !zbName.equals("")){
			if (!zbfl.equals("") && !zbName.equals("")) {
				where.append(" AND a.measure_name like '%" + zbName+"%' and a.category_id  = '" + zbfl + "' ");
			} else if (!zbfl.equals("") && zbName.equals("")) {
				where.append(" AND a.category_id = '" + zbfl + "' ");
			} else if (zbfl.equals("") && !zbName.equals("")) {
				where.append(" AND a.measure_name like '%" + zbName + "%' ");
			}
		}
		
		return hrTableTotalMapper.searchAllZB(((start-1)*pageSize), (start*pageSize), where);
	}

	public int searchZBCount() {
		return hrTableTotalMapper.searchZBCount();
	}
}
