package audit.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class AnaylisisJdbcImpl implements AnaliysisJdbcDao {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	/* (non-Javadoc)
	 * @see audit.jdbc.analiysisJdbcDao#getZRJSQKB(java.util.Map)
	 */
	public List<Map<String,Object>> getZRJSQKB(Map<String,Object> map){
		StringBuffer str = new StringBuffer();
		str.append("exec ");
		String names = map.get("bname").toString();
		if("ZRJSQKB".equals(names)){
			str.append("ZTFX_ZRJSQKB '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSFJSSKKSQK".equals(names)){                                                                                                                                             
			str.append("ZTFX_JSFJSSKKSQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSFJSZJSKQK".equals(names)){
			str.append("ZTFX_JSFJSZJSKQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSGDNJBKSSKMD".equals(names)){
			str.append("ZTFX_JSGDNJBKSSKMD '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSJBKS".equals(names)){
			str.append("ZTFX_JSJBKS '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSSKKCMD".equals(names)){
			str.append("ZTFX_JSSKKCMD '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSBJJG".equals(names)){
			str.append("ZTFX_JSBJJG '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSNLJG".equals(names)){
			str.append("ZTFX_JSNLJG '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSXWJG".equals(names)){
			str.append("ZTFX_JSXWJG '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSXYJG".equals(names)){
			str.append("ZTFX_JSXYJG '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSZCJG".equals(names)){
			str.append("ZTFX_JSZCJG '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JYJXYJYGGQK".equals(names)){
			str.append("ZTFX_JYJXYJYGGQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("CDJXRWDZRJSMD".equals(names)){
			str.append("ZTFX_CDJXRWDZRJSMD '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("KCKSQK".equals(names)){
			str.append("ZTFX_KCKSQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("SKJSMXB".equals(names)){
			str.append("ZTFX_SKJSMXB '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("SYJSRY".equals(names)){
			str.append("ZTFX_SYJSRY '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("WCDJXRWDZRJSMD".equals(names)){
			str.append("ZTFX_WCDJXRWDZRJSMD '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("ZRJSMXB".equals(names)){
			str.append("ZTFX_ZRJSMXB '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("ZYDTR".equals(names)){
			str.append("ZTFX_ZYDTR '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("JSBJQK".equals(names)){
			str.append("ZTFX_JSBJQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("XSGLRYYXSQK".equals(names)){
			str.append("ZTFX_XSGLRYYXSQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("SKJS".equals(names)){
			str.append("ZTFX_ZYFX_SKJS '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("ZYFX_ZYDTR".equals(names)){
			str.append("ZTFX_ZYFX_ZYDTR '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("ZYFX_ZSBDQK".equals(names)){
			str.append("ZTFX_ZYFX_ZSBDQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("ZYFX_BYJYQK".equals(names)){
			str.append("ZTFX_ZYFX_BYJYQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("ZYFX_ZYPYFAXFJG".equals(names)){
			str.append("ZTFX_ZYFX_ZYPYFAXFJG '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("ZYFX_KCXFQK".equals(names)){
			str.append("ZTFX_ZYFX_KCXFQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}else if("ZYFX_BYZHXLQK".equals(names)){
			str.append("ZTFX_ZYFX_BYZHXLQK '"+map.get("syear")+"','"+map.get("depart")+"'");
		}
		return jdbcTemplate.queryForList(str.toString());
	}
	
	@Override
	public List<Map<String,Object>> findTableData(List<Map<String ,String>> fields,String tableName,Integer userId,int year){
		StringBuffer str = new StringBuffer();
		str.append("select ");
		String field = "";
		for (Map<String, String> map : fields) {
			if(!"ID".equals(map.get("FIELD_ENAME")) && !"ERROR_MSG".equals(map.get("FIELD_ENAME")) && !"REPORT_DATE".equals(map.get("FIELD_ENAME"))
					&& !"USER_ID".equals(map.get("FIELD_ENAME")) && !"SCHOOL_ID".equals(map.get("FIELD_ENAME"))){
				field += map.get("FIELD_ENAME") + ",";
			}
		}
		field = field.substring(0, field.length()-1);
		str.append(field);
		str.append(" from ").append(tableName).append(" where report_date like '").append(year+"%'");
		List<Map<String, Object>> queryForList = jdbcTemplate.queryForList(str.toString());
		return queryForList;
	}

}
