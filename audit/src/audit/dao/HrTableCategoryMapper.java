package audit.dao;

import java.util.List;

import audit.model.hr.HrTableCategory;
import audit.model.hr.HrTableCategoryVo;

public interface HrTableCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(HrTableCategory record);

    int insertSelective(HrTableCategory record);

    HrTableCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(HrTableCategory record);

    int updateByPrimaryKey(HrTableCategory record);
    
    List<HrTableCategory> selectAll();

	List<HrTableCategoryVo> getAllCategoryVo();
}