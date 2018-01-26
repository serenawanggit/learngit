package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessDataInfo;

public interface AsAccessDataInfoMapper {


    int insert(AsAccessDataInfo record);

    int insertSelective(AsAccessDataInfo record);

    AsAccessDataInfo selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessDataInfo record);

    int updateByPrimaryKey(AsAccessDataInfo record);
    
    /**
     * 获取管理员上传的下载材料
     * @return
     */
    
    public List<AsAccessDataInfo> findDataOnline();
    
    /**
	 * 文件 初始化
	 * @author LLP
	 * @return
	 */
    List<AsAccessDataInfo> searchAssessDataInfo();
    /**
     * 查询文件夹下的文件 根据文件夹id查询
     * @param dataTableId
     * @author LLP
     * @return
     */
    List<AsAccessDataInfo> searchAssessDataTableInfo(int dataTableId);
    /**
     * 删除文件夹下的文件
     * @param tableId
     * @author LLP
     * @return
     */
    Integer deleteByTableId(Integer tableId);
    /**
     * 根据主键 删除该文件
     * @param id
     * @author LLP
     * @return
     */
    int deleteByPrimaryKey(@Param("id")List<Integer> id);
    

	List<AsAccessDataInfo> getUserDataByName(@Param("name")String name, @Param("userId")String userId);
    /**
     * 根据文件id查询文件名
     */
    AsAccessDataInfo findFileNameById(Integer id);
    /**
     * 文件是否存在
     * @param tableid
     * @param filename
     * @param filetype
     * @return
     */
    int searchFileCount(@Param("tableid")Integer tableid,@Param("filename")String filename,@Param("filetype")String filetype);
}