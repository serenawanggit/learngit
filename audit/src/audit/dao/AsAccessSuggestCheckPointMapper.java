package audit.dao;

import audit.model.assess.AsAccessSuggestCheckPoint;

public interface AsAccessSuggestCheckPointMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessSuggestCheckPoint record);

    int insertSelective(AsAccessSuggestCheckPoint record);

    AsAccessSuggestCheckPoint selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessSuggestCheckPoint record);

    int updateByPrimaryKey(AsAccessSuggestCheckPoint record);
}