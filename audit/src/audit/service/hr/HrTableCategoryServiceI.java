package audit.service.hr;

import java.util.List;

import audit.model.hr.HrTableCategory;

public interface HrTableCategoryServiceI {
	/**
     * 查询所有分类
     * @return
     */
    List<HrTableCategory> selectAll();
    /**
     * 新增
     * @param record
     * @return
     */
    int insertSelective(HrTableCategory record);
    /**
     * 修改
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(HrTableCategory record);
}
