package audit.service;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.multipart.MultipartFile;
import audit.common.ServiceResult;

public interface MoeImportServices {

	/**
	 * 查询全部的教师激励计划的表
	 * @return
	 */
	ServiceResult<Object> findMOETable(HttpServletRequest request);
	/**
	 * 数据导入
	 * @param file
	 * @param insert_version
	 * @param id
	 */
	void importMOETable(MultipartFile file,String insert_version,int id,int userid);
	/**
	 * 导入数据查询
	 * @param state
	 * @param id
	 * @return
	 */
	ServiceResult<Object> showData(int state,int id,String insert_version,int userid) throws Exception;
	
    /*ServiceResult<Object> findShowCan();*/
	
	void updateTBZTByid(int id);
	
	ServiceResult<Object> findSHRLookData(String insert_version,int tableid,int userid);
	void passOrNotPass(int state,int id);
	/**
	 * 查看上报数据
	 * @param id
	 * @param insert_version
	 * @return
	 */
	ServiceResult<Object> findSBData(int id,String insert_version);
	/**
	 * 向正式表中抽取数据
	 * @param userlist
	 * @param showName
	 * @param time
	 * @return
	 */
	ServiceResult<Object> extractData(String userlist,String showName,String time,int tableid);
	
	/**
	 * 在线修改
	 */
	
	void editdata(String value,int dataid,int tablename,String dataname);
	/**
	 * 下载
	 */
	void downdata(int id,String insert_version,int userid,HttpServletResponse response) throws Exception;
	/**
	 * 校验
	 * @param id
	 * @param insert_version
	 * @param userid
	 * @throws Exception
	 */
	void checkdata(int id,String insert_version,int userid) throws Exception;
	/**
	 * 
	 * @param id
	 * @param insert_version
	 * @param userid
	 */
    void cleanData(int id,String insert_version,int userid);
    
    /**
     * 教师激励上报数据导出
     * @param id
     * @param insert_version
     * @param response
     * @throws Exception
     */
    void importSBdata(int id ,String insert_version,HttpServletResponse response) throws Exception;
    /**
     * 教师激励审核数据导出
     */
    void shDataImport(int id,String inser_version, int tbr,HttpServletResponse response) throws Exception;
    /**
     * 查看教育部数据上报
     * @param id
     * @param insert_version
     * @return
     */
    ServiceResult<Object> findsbdataForJYB(int id,String insert_version,int userid) throws Exception;
}
