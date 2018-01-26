package audit.service;

import java.util.List;
import java.util.Map;

import audit.model.AsCustomVo;

public interface AsCustomVoServices {
   
	  /**
	   * 根据自定义列表名查询数据库字段名
	   * @param ctemplateName
	   * @return
	   */
	  
    List<AsCustomVo> searchAsCustomVoByOfn(String ctemplateName);
    /**
     * 根据自定义模版id查询表字段
     * @param cteID
     * @return
     */
    List<AsCustomVo> findCTNAndOFN(Integer cteID);
    
    List<Map<String, Object>> findNewTableTemplate(Integer cteID);
}
