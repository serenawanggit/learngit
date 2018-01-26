package audit.service.ods;

import audit.model.ods.OdsTTeachTask;

public interface OdsTTeachTaskServices {
 
	  OdsTTeachTask selectByAddUserid(Integer addUserId);
	  
	    /**
	     * 根据院级id查询信息
	     * @param orgcheckuserid
	     * @return
	     */
	    OdsTTeachTask findByOrgCheckUserId(Integer orgcheckuserid);
	    /**
	     * 根据校级id查询信息
	     * @return
	     */
	    OdsTTeachTask findByColCheckUserId(Integer orgcheckuserid);
	    
	    
}
