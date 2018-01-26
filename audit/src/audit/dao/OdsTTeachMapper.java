package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.ods.OdsTTeach;

public interface OdsTTeachMapper {
    int insert(OdsTTeach record);

    int insertSelective(OdsTTeach record);

	List<Map<String, Object>> getYears();

	List<Map<String, Object>> getOrgs();
}