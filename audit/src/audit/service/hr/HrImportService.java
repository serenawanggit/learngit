package audit.service.hr;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.common.ServiceResult;
import audit.model.hr.HrTableCategoryVo;
import audit.model.hr.HrTableOperationLog;
import audit.model.hr.HrTableTotalVo;

public interface HrImportService {

	/**
	 * 获取所有的表分类及表
	 * @return
	 * @author yjq
	 * 2015-10-9
	 */
	ServiceResult<List<HrTableCategoryVo>> getAllCategoryVo();

	/**
	 * 根据所选表及当前年份获取历史导入记录
	 * @param year
	 * @return
	 * @author yjq
	 * 2015-10-9
	 */
	ServiceResult<List<HrTableOperationLog>> getImportHistory(Integer year);
	
	/**
	 * 根据分类获取数据表
	 * @param categoryId
	 * @return
	 * @author yjq
	 * 2015-10-10
	 */
	ServiceResult<List<HrTableTotalVo>> getTableByCategoryId(Integer categoryId);
	
	/**
	 * 保存数据
	 * @param tableId
	 * @param data
	 * @return
	 * @author yjq
	 * 2015-10-14
	 * @param userId 
	 * @param statisticsTime 
	 */
	ServiceResult<Boolean> saveData(Integer tableId, String data, String userId, String statisticsTime);
	
	/**
	 * 删除数据
	 * @param ids
	 * @return
	 * @author yjq
	 * 2015-10-14
	 */
	ServiceResult<Boolean> deleteData(String ids);
	
	/**
	 * 根据记录id获取数据
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-10-14
	 */
	ServiceResult<Object> getDataByHistoryId(Integer id);
	
	ServiceResult<Object> CDataByHistoryId(Integer id);
	
	void subDataStatusByHistoryId(Integer id);
	
	ServiceResult<Object> findTableData(String tablename,String tdtime);
	
    ServiceResult<Object> loginyz(String username,String pwd);
    /**
     * 数据上报
     * @param userxx
     */
    ServiceResult<Object> confirmationReport(String userxx,String tablename,String tdtime,int id);
    /**
     * 登录验证
     * @param username
     * @param pwd
     * @return
     */
    ServiceResult<Object> loginyzTwo(String username,String pwd);

}
