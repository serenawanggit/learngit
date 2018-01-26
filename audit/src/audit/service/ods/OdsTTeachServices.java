package audit.service.ods;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;

public interface OdsTTeachServices {
   /**
    * 根据年份学院code 查询总数
    * @param params
    * @param syear
    * @return
    */
   public	ArrayList<HashMap<String, Object>> findOdsTTeach(ArrayList<Object> params, Integer syear);
    /**
     * 根据年份学院code 分页查询数据
     * @param params
     * @param syear
     * @return
     */
   public	ArrayList<HashMap<String, Object>> findOdsTTeachByfy(ArrayList<Object> params,Integer syear);

   /**
    * 根据年份学院code 查询对应年份的专业
    */
   
   public ArrayList<HashMap<String, Object>> findOdsBProfessionByYearAndCode(ArrayList<Object> params ,Integer syear);
   
   /**
    * 校级审核人查看状态为院级审核通过和校级审核通过的数据
    */
   
   public ArrayList<HashMap<String, Object>> findOdsTTeachByStateTwoToThree(ArrayList<Object> params ,Integer syear);
   
   /**
    * 校级审核人查看数据的总数
    */
   
   public ArrayList<HashMap<String, Object>> findOdsTTeachCount(ArrayList<Object> params ,Integer syear);
}
