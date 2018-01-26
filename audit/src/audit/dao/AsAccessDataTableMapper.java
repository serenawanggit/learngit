package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessDataTable;
import audit.model.assess.tack.AsAccessDataTableTack;

public interface AsAccessDataTableMapper {
	/**
	 * 查询Room中有没有这个用户
	 * @param roomUserId
	 * @return
	 */
	Integer searchRoomByUserId(Integer roomUserId);
	/**
	 * 去重名文件夹
	 * @param tableParentId
	 * @param tableName
	 * @return
	 */
	int searchDataTableNameAndParentId(@Param("tableParentId")int tableParentId,@Param("tableName")String tableName);
	/**
	 * 查询文件夹下面的文件夹
	 * @param tableparentId 父文件夹id
	 * @param assessUserid
	 * @author LLP
	 * @return
	 */
	List<AsAccessDataTableTack> searchDataTableTable(@Param("tableparentId")int tableparentId,@Param("assessUserid")int assessUserid);
	/**
	 * 查询所有的文件夹
	 * @param assessUserid
	 * @author LLP
	 * @return
	 */
	List<AsAccessDataTableTack> searchAssessDataTable(Integer assessUserid);
	
	/**
	 * 根据主键删除该文件夹
	 * @param id
	 * @author LLP
	 * @return
	 */
    int deleteByPrimaryKey(Integer tableId);

    int insert(AsAccessDataTable record);
    /**
     * 新建文件夹
     * @param record
     * @return
     */
    int insertSelective(AsAccessDataTable record);
    /**
     * 查询根目录
     * @return
     */
    List<AsAccessDataTable> searchRoomTable(Integer roomid);
    /**
     * 查询这个用户有默认文件夹
     * @param roomid
     * @return
     */
    Integer searchRoomByRoomId(Integer roomid);
    
    AsAccessDataTable selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessDataTable record);

    int updateByPrimaryKey(AsAccessDataTable record);
    
}
