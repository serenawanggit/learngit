package audit.util;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Types;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;





public class DBConnection {
	
	
	private static final String DB_URL = Common.DB_URL;
	private static final String DB_USER = Common.DB_USER;
	private static final String DB_PASSWORD = Common.DB_PASSWORD;
	private static final String DB_DRIVER = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
	private static Connection conn = null;
	
	   // 接受数据的查询的返回结果集  
    private static ResultSet rs;
	static {
		try {
			Class.forName(DB_DRIVER);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	public static Connection getConnection(){
		try {
			conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
		
	}
	
	 // 增删改
    public static int Add(String sql) throws Exception {
        int a = 0;
        getConnection();
        PreparedStatement pst = conn.prepareStatement(sql);
        a = pst.executeUpdate();
		conn.close();
        return a;
    }
    
    /** 
     * 执行查询的通用方法 带参数
     * @param sql 
     * @param params 
     * @return 
     */  
    public static ArrayList<HashMap<String, Object>> executeQuery(String sql,  
            ArrayList<Object> params) {  
        ArrayList<HashMap<String, Object>> resultArrayList = new ArrayList<HashMap<String,Object>>();  
        // 执行查询，必须先判断是否有正常的数据连接  
        try {  
            if (null == getConnection() || getConnection().isClosed()) {  
            	getConnection();  
            }  
            PreparedStatement pst = conn.prepareStatement(sql);
            if (null != params) {  
                if (params.size() > 0) {  
                    for (int i = 0; i < params.size(); i++) {  
                        //System.out.println(params.set(1, 0));  
                        //预处理的pstmt对象设置值  
                    	pst.setObject(i + 1, params.get(i));  
                    }  
                }  
            }
            rs = pst.executeQuery(); 
            if (null != rs) {  
                resultArrayList = new ArrayList<HashMap<String, Object>>();  
                while (rs.next()) {  
                    // 获得数据库表的结构  
                    ResultSetMetaData rsmdData = rs.getMetaData();  
                    HashMap<String, Object> rowHashtable = new HashMap<String, Object>(); 
                    for (int j = 1; j <= rsmdData.getColumnCount(); j++) {
                        rowHashtable.put(rsmdData.getColumnName(j)  
                                .toLowerCase(), rs.getObject(j)==null?" ":rs.getObject(j));  
                    }  
                    resultArrayList.add(rowHashtable);  
                }  
            }  
  
        } catch (SQLException e) {  
            e.printStackTrace();  
        }finally{  
            try {
				rs.close();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}  
            
        }  
  
        return resultArrayList;  
    }  
    
    
    /** 
     * 执行查询的通用方法不带参数 
     * @param sql 
     * @param params 
     * @return 
     */  
    public static ArrayList<HashMap<String, Object>> executeQueryNoParams(String sql  
            ) throws Exception {  
  
        ArrayList<HashMap<String, Object>>  resultArrayList = new ArrayList<HashMap<String,Object>>();  
        // 执行查询，必须先判断是否有正常的数据连接  
        try {  
            if (null == getConnection() || getConnection().isClosed()) {  
            	getConnection();  
            }  
            PreparedStatement pst = conn.prepareStatement(sql); 
            rs = pst.executeQuery(); 
            if (null != rs) {  
                resultArrayList = new ArrayList<HashMap<String, Object>>();  
                while (rs.next()) {  
                    // 获得数据库表的结构  
                    ResultSetMetaData rsmdData = rs.getMetaData();  
                    HashMap<String, Object> rowHashtable = new HashMap<String, Object>(); 
                    for (int j = 1; j <= rsmdData.getColumnCount(); j++) {
                        rowHashtable.put(rsmdData.getColumnName(j)  
                                .toLowerCase(), rs.getObject(j)==null?" ":rs.getObject(j));  
                    }  
                    resultArrayList.add(rowHashtable);  
                }  
            }  
  
        } catch (SQLException e) {  
            e.printStackTrace();  
        }finally{  
            try {
				rs.close();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}  
            
        }  
  
        return resultArrayList;  
    }  
    
    /** 
     * 执行查询的通用方法不带参数 返回listobject
     * @param sql 
     * @param params 
     * @return 
     */  
    public static List<Object[]> executeQueryNoParamsList(String sql  
            ) throws Exception {  
  
           List<Object[]> resultArrayList = new ArrayList<Object[]>();  
        // 执行查询，必须先判断是否有正常的数据连接  
        try {  
            if (null == getConnection() || getConnection().isClosed()) {  
            	getConnection();  
            }  
            PreparedStatement pst = conn.prepareStatement(sql); 
            rs = pst.executeQuery(); 
            if (null != rs) {  
                resultArrayList = new ArrayList<Object[]>();  
                while (rs.next()) {  
                    // 获得数据库表的结构  
                    ResultSetMetaData rsmdData = rs.getMetaData();  
                    String[] rowHashtable = new String[rsmdData.getColumnCount()]; 
                    for (int j = 1; j <= rsmdData.getColumnCount(); j++) {
                      /*  rowHashtable.put(rsmdData.getColumnName(j)  
                                .toLowerCase(), rs.getObject(j)==null?" ":rs.getObject(j)); */ 
                    	rowHashtable[j-1]=rs.getObject(j)==null?" ":rs.getObject(j).toString();
                    	 
                    }  
                    resultArrayList.add(rowHashtable);  
                }  
            }  
  
        } catch (SQLException e) {  
            e.printStackTrace();  
        }finally{  
            try {
				rs.close();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}  
            
        }  
  
        return resultArrayList;  
    }  

    /** 
        * 调用存储过程：返回值是简单值非列表 
        * 
        *
        * @throws Exception 
        */  
       public static String procOutSimple(String sql,String tableName,String syear,Integer userid,String kong) throws Exception {  
           CallableStatement stmt = null;  
           String i =null;
           try {  
        	   if (null == getConnection() || getConnection().isClosed()) {  
                  	getConnection();  
                  }  
               stmt = conn.prepareCall(sql);  
      
               stmt.setString(1, tableName);  
               stmt.setString(2, syear);  
               stmt.setInt(3,userid);
               stmt.registerOutParameter(4, Types.NVARCHAR);  
               stmt.execute();  
               i = stmt.getString(4);  
           } catch (Exception e) {  
               e.printStackTrace(System.out);  
           } finally {  
               if (null != stmt) {  
                   stmt.close();  
               }  
               if (null != conn) {  
                   conn.close();  
               }  
           }
		return i;  
       }  
       
       public static void procOutSimpleByValue(String sql,String  searchValue,String startdate,String enddate) throws Exception {  
           CallableStatement stmt = null;  
           String i =null;
           try {  
        	   if (null == getConnection() || getConnection().isClosed()) {  
                  	getConnection();  
                  }  
               stmt = conn.prepareCall(sql);  
      
               stmt.setString(1, searchValue);  
               stmt.setString(2, startdate);  
               stmt.setString(3, enddate);  
               stmt.execute();  
           } catch (Exception e) {  
               e.printStackTrace(System.out);  
           } finally {  
               if (null != stmt) {  
                   stmt.close();  
               }  
               if (null != conn) {  
                   conn.close();  
               }  
           }
       } 
       
       public static void main(String[] args) {
    	   String src = "表6-3-1学校、教学（科研）单(位)";   
    	    src = src.replaceAll("(?:-|、|（|）|\\(|\\))", "_");  
    	    System.out.println(src); 
	   }

}
