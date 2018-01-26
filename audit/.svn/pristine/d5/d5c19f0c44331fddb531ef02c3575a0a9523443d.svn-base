package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.assess.AsAccessSystemCode;

public interface AsAccessSystemCodeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AsAccessSystemCode record);

    int insertSelective(AsAccessSystemCode record);

    AsAccessSystemCode selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AsAccessSystemCode record);

    int updateByPrimaryKey(AsAccessSystemCode record);
    
    /**
     * 通过codeType来查询码表
     * @param codeType
     * @return
     */
    List<AsAccessSystemCode> selectByCodeType(@Param("codeType")String codeType); 
}