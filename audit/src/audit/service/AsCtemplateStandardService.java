package audit.service;

import audit.model.AsCtemplateStandard;

public interface AsCtemplateStandardService {

	/**
	 * 根据excel名查询插入的表名
	 * @return
	 */
   AsCtemplateStandard selectObjecttable(String path);
   
   /**
    * 根据标准模版名查询数据库表名
    */
   
   AsCtemplateStandard findObjecttableByTN(Integer ctemplateId);
}
