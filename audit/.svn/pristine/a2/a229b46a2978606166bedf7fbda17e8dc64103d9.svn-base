package audit.dao;

import audit.model.ods.OdsTTeachStatus;

public interface OdsTTeachStatusMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(OdsTTeachStatus record);

    int insertSelective(OdsTTeachStatus record);

    OdsTTeachStatus selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(OdsTTeachStatus record);

    int updateByPrimaryKey(OdsTTeachStatus record);
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