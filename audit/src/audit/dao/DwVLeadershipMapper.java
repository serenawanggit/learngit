package audit.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import audit.model.DwVLeadership;

public interface DwVLeadershipMapper {

	//查询DW_V_LEADERSHIP表里所有数据
	List<DwVLeadership> selectAll(@Param(value="sql")String sql);
	
	//查询所有数目
	int selectcount(@Param(value="sql")String sql);
	
	/**
	 * 根据条件搜索指标值
	 * @param year
	 * @param organization
	 * @param specialty
	 * @param kgzbdm
	 * @return
	 * @author yjq
	 * 2015-5-4
	 */
	Integer getValueByQuery(@Param("year")int year, @Param("organization")Integer organization, @Param("specialty")Integer specialty,
			@Param("kgzbdm")String kgzbdm);
	/**
	 * 根据指标名 年和专业名 查询值
	 * @param zb
	 * @param syear
	 * @param name
	 * @return
	 */
	DwVLeadership findValueByZBAndSyearAndName(String zb,Integer syear,String name);
}
