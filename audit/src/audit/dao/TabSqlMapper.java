package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.TabSql;

public interface TabSqlMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TabSql record);

    int insertSelective(TabSql record);

    TabSql selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TabSql record);

    int updateByPrimaryKey(TabSql record);

	TabSql selectByCodeAndType(@Param("title")String title, @Param("type")int type);

	List<Map<String, Object>> selectBySql(@Param("sql")String sql);

}