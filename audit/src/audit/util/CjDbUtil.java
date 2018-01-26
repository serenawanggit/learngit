package audit.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import audit.model.CjJsUser;

public class CjDbUtil {

	
	public static List<CjJsUser> selectCjBmUser(){
		 Connection conn = DBConnection.getConnection();
		 Statement stmt = null;
		 ResultSet rs = null;
		 List<CjJsUser> ss = new ArrayList<CjJsUser>();
		String sql = "select cjcjbm.CJBMDM as cjbmdm,CJBMMC,cby.NAME as cjname,shr.NAME as shname from AS_CJ_CJBMXX cjcjbm";
			   sql += " left join (SELECT CJ.CJBMDM,CJ.BMRYJS,NAME=STUFF((SELECT ','+USA.showname FROM ";
			   sql += " AS_CJ_CJBMYBMRY CJJ LEFT JOIN userinfo USA ON CJJ.USERID=USA.id";
			   sql += " where CJBMDM=CJ.CJBMDM AND BMRYJS=CJ.BMRYJS";
			   sql += " FOR XML PATH('')),1,1,'') FROM AS_CJ_CJBMYBMRY CJ LEFT JOIN userinfo US ON CJ.USERID=US.id";
			   sql += " GROUP BY CJ.CJBMDM,CJ.BMRYJS) cby on cjcjbm.CJBMDM=cby.CJBMDM";
			   sql += " left join (SELECT CJ.CJBMDM,CJ.BMRYJS,NAME=STUFF((SELECT ','+USA.showname FROM ";
			   sql += "  AS_CJ_CJBMYBMRY CJJ LEFT JOIN userinfo USA ON CJJ.USERID=USA.id";
			   sql += " where CJBMDM=CJ.CJBMDM AND BMRYJS=CJ.BMRYJS";
			   sql += " FOR XML PATH('') ),1,1,'') FROM AS_CJ_CJBMYBMRY CJ LEFT JOIN userinfo US ON CJ.USERID=US.id";
			   sql += " GROUP BY CJ.CJBMDM,CJ.BMRYJS) shr on cjcjbm.CJBMDM=shr.CJBMDM ";
			   sql += " where cby.BMRYJS=1 and shr.BMRYJS=2";
			   
				try {
					stmt = conn.createStatement();
					rs = stmt.executeQuery(sql);
					while (rs.next()) {
						CjJsUser cju = new CjJsUser();
						cju.setCjbmdm(rs.getInt("cjbmdm"));
						cju.setCjbmmc(rs.getString("CJBMMC"));
						cju.setCjcjr(rs.getString("cjname"));
						cju.setCjshr(rs.getString("shname"));
//						System.out.println(rs.getString("CJBMMC"));
//						System.out.println(rs.getString("cjname")+"[采集人]");
//						System.out.println(rs.getString("shname")+"[审核人]");
						ss.add(cju);
					}
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					if (conn != null) {
						try {
							conn.close();
						} catch (SQLException e) {
							e.printStackTrace();
						}
					}
				}
			  
		return ss;
	}
	
	
	public static int deleteObject(String sql,String [] ids) {
		int i = 0;
		Connection conn = DBConnection.getConnection();
		PreparedStatement ps = null;
		try {
			ps = conn.prepareStatement(sql);
	           if (null != ids) {  
	                if (ids.length > 0) {  
	                    for (int j = 0; j < ids.length; j++) {  
	                    	ps.setObject(j + 1, ids[j]);  
	                    }  
	                }  
	            }
			i = ps.executeUpdate();
			conn.commit();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (conn != null) {
				try {
					
					conn.close();
				} catch (SQLException e) {
					try {
						conn.rollback();
					} catch (SQLException e1) {
						e1.printStackTrace();
					}
					e.printStackTrace();
				}
			}
		}
		return i;
	}
	
}
