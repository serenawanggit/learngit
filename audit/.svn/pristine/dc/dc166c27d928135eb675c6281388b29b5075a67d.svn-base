package audit.util;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;

/**
 * 此类为数据访问链接对象
 * 用于创建数据库连接池等
 * @author 
 * @since  2014-08-07 09:13:00
 * 
 * */
public class JDBCUtil {
   private Connection con=null;
  
   public Connection getConnection(){
	   
	  // return getgisdatasource();
	   
	  // ResourceBundle bundle =PropertiesUtil.getResourceBundle();
   	   String driver= System.getProperty("jdbc.driverClassName");
   	   String url= System.getProperty("jdbc.url");
   	   String name= System.getProperty("jdbc.username");
   	   String pwd= System.getProperty("jdbc.password");
	   try {
			Class.forName(driver);
			con=DriverManager.getConnection(url,name,pwd);
	   } catch (Exception e) {	
		   e.printStackTrace();
	   }	
	   return con;
	   
   }
   public Connection getjdbcConnection(){
	   
	   //return getgisdatasource();
	   
	  // ResourceBundle bundle =PropertiesUtil.getResourceBundle();
   	   String driver= System.getProperty("jdbc.driverClassName");
   	   String url= System.getProperty("jdbc.url");
   	   String name= System.getProperty("jdbc.username");
   	   String pwd= System.getProperty("jdbc.password");
	   try {
			Class.forName(driver);
			con=DriverManager.getConnection(url,name,pwd);
	   } catch (Exception e) {	
		   e.printStackTrace();
	   }	
	   return con;
	   
   }
   
   //关闭数据库连接
   public void close(){ 
		try {
			if(con!=null&&!con.isClosed()){
				con.close();//关闭数据库连接
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
   }
   
   //获取数据源
   public static Connection getgisdatasource(){
	   Connection con=null;
		try{
			Context ctx=new InitialContext();
			DataSource ds=(DataSource) ctx.lookup("java:comp/env/jdbc/Oracle1");
			con=ds.getConnection();
			
			return con;
		}catch(Exception e){
			e.printStackTrace();
		}
		return null;
   }
   
   public static void main(String[] args) {
	   System.out.println(new JDBCUtil().getConnection());
   }
   
   
}