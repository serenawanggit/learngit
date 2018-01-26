package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessSelfEvalutionReport;

public interface AsAccessSelfEvalutionReportMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessSelfEvalutionReport record);

    int insertSelective(AsAccessSelfEvalutionReport record);

    AsAccessSelfEvalutionReport selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessSelfEvalutionReport record);

    int updateByPrimaryKey(AsAccessSelfEvalutionReport record);

	int deleteByAccessSpecialtyId(Integer accessSpecialtyId);

	List<AsAccessSelfEvalutionReport> selectAllBySpecialtyId(
			@Param("specialtyId")Integer specialtyId);
}