package audit.service.ods;

public interface OdsTTeachStatusServices {
   
    /**
     *  根据id修改ods_t_teach 
     * @param specailtyName
     * @param specailtyId
     * @param id
     */
    void updateOdsTTeachById(String specailtyName,String specailtyId,Integer id);
    
    /**
     * 根据教师id修改教师信息状态
     * @param teacherId
     */
    void updateOdsTTeachByTeacherId(String teacherId);
    /**
     * 根据教师id修改教师信息状态为院级审核或者校级审核 
     * @param teacherId
     */
    void updateTeachByTIdForExamine(Integer state,String teacherId);
    
    /**
     * 根据教师id修改信息为未通过
     * @param teacherId
     */
    void updateNoPass(String teacherId);
}
