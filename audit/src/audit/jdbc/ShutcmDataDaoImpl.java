package audit.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ShutcmDataDaoImpl implements ShutcmDataDao{
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
//	@Override
//	public List<Map<String, Object>> findData(Map<String, String> data) {
//		StringBuffer sBuffer = new StringBuffer();
//		sBuffer.append("SELECT * FROM "+  data.get("tableName")+" WHERE "+
//				"REPORT_DATE= '"+data.get("time")+"' and USER_ID = "+data.get("userId")+" ORDER BY ID");
//		System.out.println(sBuffer.toString());
//		List<Map<String, Object>> queryForList = jdbcTemplate.queryForList(sBuffer.toString());
//		return queryForList;
//	}
//	
//	
//
//
//	@Override
//	public Integer deleteData(String tableName, Integer id) {
//		String sql = "delete from " + tableName + " where ID = " + id;
//		try {
//			return jdbcTemplate.update(sql);
//		} catch (Exception e) {
//			e.printStackTrace();
//			return -1;
//		}
//	}
//
//
//	/**
//	 * 查询统计型数据
//	 */
//	@Override
//	public Map<String, Object> queryCountData(DataTemplate dataTemplate,
//			String reportDate, Integer schoolId, Integer userId) {
//		String sql = "select * from " + dataTemplate.getObjectName() + " where REPORT_DATE = '" + reportDate
//				+ "' and USER_ID = " + userId;
//		try {
//			return jdbcTemplate.queryForMap(sql);
//		} catch (Exception e) {
//			e.printStackTrace();
//			return null;
//		}
//	}


	/**
	 * 查询明细型数据
	 */
//	@Override
//	public List<Map<String, String>> queryData(Map<String, String> map,
//			List<DataField> fieldList, DataTemplate dataTemplate) {
//		StringBuffer sBuffer = new StringBuffer();
//		if (condition.getPage()!=0) {
//			sBuffer.append("SELECT TOP "+condition.getPagesize()+"* FROM "+  dataTemplate.getObjectName()+" WHERE "+
//					"( "+ "ID not IN  "+ " ( "+ "  SELECT TOP "+condition.getPagesize()*(condition.getPage()-1) 
//					  + " id  FROM  ( select * from "+dataTemplate.getObjectName()+" where REPORT_DATE  = '"+condition.getSearchObject().getReportDate()+"' "+
//					  "   and USER_ID = "+condition.getSearchObject().getUserId()+" ) a "+
//					 "  ) "+
//					"   and ID in (select ID from "+dataTemplate.getObjectName()+" where REPORT_DATE  = '"+condition.getSearchObject().getReportDate()+"'   "+
//					 "  and USER_ID = "+condition.getSearchObject().getUserId()+" ) 	"+
//					"   )ORDER BY ID");
//		}else {
//			sBuffer.append(" select * from "+dataTemplate.getObjectName()+" where REPORT_DATE  = '" + condition.getSearchObject().getReportDate() + "' " + 
//					" and  USER_ID = " + condition.getSearchObject().getUserId() +" order by ID asc ");
//		}
//		List<Map<String, String>> result = new ArrayList<>();
//		try {
//			List<Map<String, Object>> queryList = jdbcTemplate.queryForList(sBuffer.toString());
//			if (queryList != null && queryList.size() > 0) {
//				for (Map<String, Object> ql : queryList) {
//					Map<String, String> item = new HashMap<>();
//					for (DataField dataField : fieldList) {
//						if (dataField.getFieldEname().equals("ID")) {
//							item.put(dataField.getFieldEname(), ql.get(dataField.getFieldEname()).toString());
//						} else if (dataField.getFieldEname().indexOf(CodeConstant.S_FIELD_NAME) >= 0
//								|| dataField.getFieldEname().indexOf(CodeConstant.S_FIELD_ERROR_MSG) >= 0) {
//							if (ql.get(dataField.getFieldEname()) == null) {
//								item.put(dataField.getFieldEname(), null);
//							} else {
//								item.put(dataField.getFieldEname(), ql.get(dataField.getFieldEname()).toString());
//							}
//						}
//					}
//					result.add(item);
//				}
//			}
//			return result;
//		} catch (Exception e) {
//			e.printStackTrace();
//			return result;
//		}
//	}


//	/**
//	 * 根据搜索条件获取记录总数
//	 */
//	public Integer getCount(Map<String, String> map,
//			DataTemplate dataTemplate) {
//		// TODO 此处需添加schoolId为搜索条件
//		String sql = "select count(*) from " + dataTemplate.getObjectName() + " where REPORT_DATE = '"
//				+ map.get("reportData") + "'" +
////						" and SCHOOL_ID = " + condition.getSearchObject().getSchoolId()+
//					" and USER_ID="+map.get("userId");
//		return jdbcTemplate.queryForInt(sql);
//	}




	@Override
	public List<Map<String, Object>> findAllDataByTableName(
			Map<String, String> map) {
		// TODO Auto-generated method stub
//		return null;
		StringBuffer sBuffer = new StringBuffer();
		sBuffer.append("SELECT * FROM "+  map.get("tableName")+" WHERE REPORT_DATE= '"+map.get("time")+"'") ;//and USER_ID = "+map.get("userId")+" ORDER BY ID");
		System.out.println(sBuffer.toString());
		List<Map<String, Object>> queryForList = jdbcTemplate.queryForList(sBuffer.toString());
		return queryForList;
	}






	
	

}
