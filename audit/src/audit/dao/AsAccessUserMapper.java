package audit.dao;

import java.util.List;

import audit.model.assess.AsAccessUser;

public interface AsAccessUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessUser record);

    int insertSelective(AsAccessUser record);

    AsAccessUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessUser record);

    int updateByPrimaryKey(AsAccessUser record);

	List<AsAccessUser> getUserListByQuery(AsAccessUser record);
}