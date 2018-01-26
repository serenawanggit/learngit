package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.AsCustomVo;

public interface AsCustomVoMapper {
   //根据自定义列表名查询数据库字段名
    List<AsCustomVo> searchAsCustomVoByOfn(String ctemplateName);
    /**
     * 根据自定义模版id查询表字段
     * @param cteID
     * @return
     */
    List<AsCustomVo> findCTNAndOFN(Integer cteID);
    /**
     * 教师激励计划专用sql 后期可能需要修改 不对必须修改
     */
    List<AsCustomVo> findCTNAndOFNByTid(int id);
    
    List<Map<String, Object>> findNewTableTemplate(Integer cteID);
}
