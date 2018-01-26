package audit.service;

import javax.servlet.http.HttpServletResponse;

import audit.common.ServiceResult;

public interface LookreportServices {
    /**
     * 根据节点id查询全部的支撑材料
     * @param id
     * @return
     */
	ServiceResult<Object> findLookreportData(int id);
	
	void downreport(String downurl,HttpServletResponse response);
	/**
	 * 
	 * @param id
	 */
	void lookcount(int id);
}
