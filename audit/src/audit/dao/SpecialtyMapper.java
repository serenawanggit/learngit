package audit.dao;

import java.util.List;

import audit.model.Sbprofession;
import audit.model.Specialty;

public interface SpecialtyMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Specialty record);

    int insertSelective(Specialty record);

    Specialty selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Specialty record);

    int updateByPrimaryKey(Specialty record);
    /**
     * 根据学院的code查询专业
     * @param code
     * @return
     */
    List<Specialty> selectByCode(String code);
    /**
     * 查询全部的专业
     * @return
     */
    List<Sbprofession> findAllSpecialty();
}