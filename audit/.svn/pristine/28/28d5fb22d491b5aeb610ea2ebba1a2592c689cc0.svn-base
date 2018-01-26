package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.hr.HrTableOperationLog;

public interface HrTableOperationLogMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(HrTableOperationLog record);

    int insertSelective(HrTableOperationLog record);

    HrTableOperationLog selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(HrTableOperationLog record);

    int updateByPrimaryKey(HrTableOperationLog record);

	List<HrTableOperationLog> getImportHistory(@Param("tableId")Integer tableId);
}