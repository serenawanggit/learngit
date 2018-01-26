package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.LookreportData;

public interface LookreportMapper {
   /**
    * 根据一级节点id 查询对应的支撑材料
    * @param id
    * @return
    */
   List<LookreportData> findLookreportData(int id);
   
   /**
    * 根据id 查询当前查看的文件
    * @param id
    * @return
    */
   List<Map<String, Object>> findLookzccl(int id);
 
   /**
    * 下载量
    * @param count
    * @param id
    */
   void updateLookcount(int count,Integer id);
}
