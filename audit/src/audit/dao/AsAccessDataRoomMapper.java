package audit.dao;

import java.util.List;

import audit.model.assess.AsAccessDataRoom;

public interface AsAccessDataRoomMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessDataRoom record);
    /**
     * 新增
     * @param record
     * @return
     */
    int insertSelective(AsAccessDataRoom record);

    AsAccessDataRoom selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessDataRoom record);

    int updateByPrimaryKey(AsAccessDataRoom record);
    
    /**
     * 查询Roomid
     * @param roomUId
     * @return
     */
    List<AsAccessDataRoom> searchRoomByUserId(Integer roomUId);
}