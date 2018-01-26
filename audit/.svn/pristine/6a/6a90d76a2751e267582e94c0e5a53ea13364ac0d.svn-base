package audit.service.access;

import java.util.List;

import audit.common.ServiceResult;
import audit.model.assess.AsAccessDataTable;
import audit.model.assess.tack.AsAccessDataTableTack;

public interface AsAccessDataTableServiceI {
	
	/**
     * 查询根目录
     * @return
     */
    List<AsAccessDataTable> searchRoomTable(Integer roomid);
	
	/**
	 * 查询Room中有没有这个用户
	 * 
	 * @param roomUserId
	 * @return
	 */
	Integer searchRoomByUserId(Integer roomUserId);

	int searchDataTableNameAndParentId(int tableParentId, String tableName);

	/**
	 * 查询文件夹下面的文件夹
	 * 
	 * @param tableparentId
	 *            父文件夹id
	 * @param assessUserid
	 * @author LLP
	 * @return
	 */
	ServiceResult<List<AsAccessDataTableTack>> searchDataTableTable(
			int tableparentId, int assessUserid);

	/**
	 * 查询所有的初始化文件夹
	 * 
	 * @param assessUserid
	 *            userid
	 * @author LLP
	 * @return
	 */
	ServiceResult<List<AsAccessDataTableTack>> searchAssessDataTable(
			Integer assessUserid);

	/**
	 * 新建文件夹
	 * 
	 * @param record
	 * @author LLP
	 * @param record
	 *            .setParaId=父级id
	 * @return
	 */
	int insertSelective(AsAccessDataTable record);

	/**
	 * /** 根据主键删除该文件夹
	 * 
	 * @param id
	 * @author LLP
	 * @return
	 */
	ServiceResult<Integer> deleteByPrimaryKey(Integer id);
	
	
    /**
     * 查询这个用户有默认文件夹
     * @param roomid
     * @return
     */
    Integer searchRoomByRoomId(Integer roomid);
}