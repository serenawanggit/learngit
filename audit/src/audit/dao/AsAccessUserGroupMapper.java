package audit.dao;

import audit.model.assess.AsAccessUserGroup;

public interface AsAccessUserGroupMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessUserGroup record);

    int insertSelective(AsAccessUserGroup record);

    AsAccessUserGroup selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessUserGroup record);

    int updateByPrimaryKey(AsAccessUserGroup record);
}