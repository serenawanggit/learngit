package audit.dao;

import java.util.List;

import audit.model.AsMCategory;

public interface AsMCategoryMapper {
    int deleteByPrimaryKey(Integer categoryId);

    int insert(AsMCategory record);

    int insertSelective(AsMCategory record);

    AsMCategory selectByPrimaryKey(Integer categoryId);

    int updateByPrimaryKeySelective(AsMCategory record);

    int updateByPrimaryKey(AsMCategory record);

	List<AsMCategory> getAllCategory();
}