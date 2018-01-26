package audit.service.access;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.common.ServiceResult;
import audit.model.assess.AsAccessDataInfo;

public interface AsAccessDataInfoServiceI {

	  /**
     * 获取管理员上传的下载材料
     * @return
     */
    public List<AsAccessDataInfo> findDataOnline();
	
    
	/**
	 * 文件初始化
	 * @author LLP
	 * @return
	 */
	ServiceResult<List<AsAccessDataInfo>> searchAssessDataInfo();
	
	/**
     * 查询文件夹下的文件 根据文件夹id查询
     * @param dataTableId
     * @author LLP
     * @return
     */
	ServiceResult<List<AsAccessDataInfo>> searchAssessDataTableInfo(int dataTableId);
	
	/**
     * 根据主键 删除该文件
     * @param id
     * @author LLP
     * @return
     */
	ServiceResult<Integer> deleteByTableId(Integer tableId);
	/**
     * 根据主键 删除该文件
     * @param id
     * @author LLP
     * @return
     */
	ServiceResult<Integer> deleteByPrimaryKey(List<Integer> id);
	/**
	 * 录入文件信息
	 * @param record
	 * @return
	 */
	Integer insertSelective(AsAccessDataInfo record);
	
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
