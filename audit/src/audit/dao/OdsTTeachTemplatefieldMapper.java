package audit.dao;

import audit.model.ods.OdsTTeachTemplatefield;

public interface OdsTTeachTemplatefieldMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(OdsTTeachTemplatefield record);

    int insertSelective(OdsTTeachTemplatefield record);

    OdsTTeachTemplatefield selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(OdsTTeachTemplatefield record);

    int updateByPrimaryKey(OdsTTeachTemplatefield record);
}