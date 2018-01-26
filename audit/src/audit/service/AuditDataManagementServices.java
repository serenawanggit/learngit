package audit.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

public interface AuditDataManagementServices {
    /**
     * 查询全部的审核通过的数据
     * @return
     */
	ArrayList<HashMap<String, Object>> findAllAuditPassData(int currentpage,int pagesize,String flag,String param);
	
	int countCjZtSjbs(String flag,String param);
}
