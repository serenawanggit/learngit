package audit.service.impl.hr;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.HrTableFieldMapper;
import audit.dao.HrTableTotalMapper;
import audit.model.hr.HrTableField;
import audit.model.hr.HrTableTotal;
import audit.service.hr.HrTableFieldServiceI;
@Service("hrTableFieldService")
public class HrTableFieldServiceImpl implements HrTableFieldServiceI{
	@Autowired
	private HrTableFieldMapper hrTableFieldMapper;
	@Autowired
	private HrTableTotalMapper hrTableTotalMapper;
	
	private String fieldType="";
	
	public List<HrTableField> selectByTableId(Integer hrtableid) {
		return hrTableFieldMapper.selectByTableId(hrtableid);
	}

	public int insertSelective(HrTableField record) {
		return hrTableFieldMapper.insertSelective(record);
	}

	public int updatePosition(String position, String where) {
		return hrTableFieldMapper.updatePosition(position, where);
	}

	public boolean insertDataTable(String hrTableId) {
		//获取表名
		HrTableTotal hrBean =  hrTableTotalMapper.selectByPrimaryKey(Integer.parseInt(hrTableId));
		//获取字段信息
		List<HrTableField> fieldList = hrTableFieldMapper.getAllFieldByTableId(Integer.parseInt(hrTableId));
		//查询该表是否存在
		StringBuffer createSql =  new StringBuffer();
		createSql.append("create table "+ hrBean.getTableDataName()+"(");
		createSql.append("id int primary key identity(1,1),");
		for (int i = 0; i < fieldList.size(); i++) {
			if (fieldList.get(i).getFieldType()==0) {
				fieldType="int,";
			}
			if (fieldList.get(i).getFieldType()==1) {
				fieldType="decimal(18, 2),";
			}
			if (fieldList.get(i).getFieldType()==2) {
				fieldType="datetime,";
			}
			if (fieldList.get(i).getFieldType()==3) {
				fieldType="varchar("+fieldList.get(i).getFieldLength()+"),";
			}
			createSql.append(""+fieldList.get(i).getFieldDataName()+" "+ fieldType);
		}
		createSql.append("statistics_time varchar(200)");
		createSql.append(")");
		
		hrTableTotalMapper.insertDataTable(createSql);
		return true;
	}

	public int searchTab(String tabName) {
		HrTableTotal hrTableTotal =  hrTableTotalMapper.selectByPrimaryKey(Integer.parseInt(tabName));
		return hrTableFieldMapper.searchTab(hrTableTotal.getTableDataName());
	}

	public void addField(String hrTableId,String fieldName,String fieldType,String fieldLength) {
		HrTableTotal hrTableTotal =  hrTableTotalMapper.selectByPrimaryKey(Integer.parseInt(hrTableId));
		if(fieldType.equals("0")){
			fieldType="int";
		} 
		if(fieldType.equals("1")){
			fieldType="decimal(18, 2)";
		} 
		if(fieldType.equals("2")){
			fieldType="datetime";
		} 
		if(fieldType.equals("3")){
			fieldType="varchar("+Integer.parseInt(fieldLength)+")";
		}
		
		String alterSql="ALTER TABLE "+hrTableTotal.getTableDataName()+"  ADD  "+fieldName+" "+fieldType;
		hrTableFieldMapper.addField(alterSql);
	}

	public int deleteByPrimaryKey(Integer id) {
		return hrTableFieldMapper.deleteByPrimaryKey(id);
	}

}
