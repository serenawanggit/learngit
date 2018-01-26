package audit.util;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class ShSjbUtil {

	public static List<Object[]> selectCjZtSjbs(int shr,int currentpage,int pagesize,String flag,String param,String datatype){
		 Connection conn = DBConnection.getConnection();
		 Statement stmt = null;
		 ResultSet rs = null;
		 List<Object[]> ss = new ArrayList<Object[]>();
//		 String sql = "select rz.id as id,zb.SJBMC as sjbmc,bm.CJBMMC as cjbmmc,ui.showname as showname,rx.CJRWMC as cjrwmc from as_cj_cjrwztb rz ";
//		 		sql += " left join as_cj_rwxx rx on rz.cjrwdm = rx.id ";
//		 		sql += " left join as_cj_ztsjbxx zb on rz.ztbdm = zb.id";
//		 		sql += " left join userinfo ui on rz.cjr = ui.id";
//		 		sql += " left join as_cj_cjbmybmry mb on ui.id = mb.userid";
//		 		sql += " left join AS_CJ_CJBMXX bm on mb.CJBMDM = bm.CJBMDM";
//		 		sql += " where rz.shr =" + shr;
		 String sql = "select * from (select ROW_NUMBER()over(order by rz.id) as rownum,rz.id as id,";
		 		sql += " zb.SJBMC as sjbmc,bm.name as cjbmmc,ui.showname as showname,rx.CJRWMC as cjrwmc,zb.CJMBDM as cjmbdm ,rz.CJZT as cjzt,rz.SHZT as shzt from as_cj_cjrwztb rz ";
		 		sql += " left join as_cj_rwxx rx on rz.cjrwdm = rx.id ";
		 		sql += " left join as_cj_ztsjbxx zb on rz.ztbdm = zb.id";
		 		sql += " left join userinfo ui on rz.cjr = ui.id";
		 		sql += " left join as_cj_cjbmybmry mb on ui.id = mb.userid and mb.BMRYJS=1";
		 		sql += " left join organization bm on zb.CJBMDM = bm.id";
		 		sql += " where rz.SHR = "+shr+"  and " ;
		 		if (datatype.equals("1")) {
		 			sql+=" (rz.SHZT=1 and  rz.CJZT=1)";
				}
                if (datatype.equals("2")) {
                	sql+="(rz.CJZT=3 and rz.SHZT=0)";
				}
                if (datatype.equals("3")) {
					sql+="( (rz.CJZT=3 and rz.SHZT=0) or (rz.SHZT=1 and  rz.CJZT=1) )";
				}
		 		if(flag.equals("SJBM")){
		 			sql += " and sjbmc like" + "'%" + param + "%'";
		 		}
				if(flag.equals("CJBM")){
					sql += " and bm.name  like" + "'%" + param + "%'";	 			
				}
				if(flag.equals("CJR")){
					sql += " and showname like" + "'%" + param + "%'";	
				}
				if(flag.equals("RWMC")){
					sql += " and cjrwmc like" + "'%" + param + "%'";	
				}
		 		sql +=" )t";
		 		sql += " where rownum between ("+currentpage+"-1)*"+pagesize+"+1 and "+pagesize+"*"+currentpage;
				System.out.println("打的飞起："+sql);
		 		try {
					stmt = conn.createStatement();
					rs = stmt.executeQuery(sql);
					while (rs.next()) {
						ss.add(new Object[]{rs.getInt("id"),rs.getString("sjbmc")
								,rs.getString("cjbmmc"),rs.getString("showname"),rs.getString("cjrwmc"),rs.getString("cjmbdm"),rs.getString("cjzt"),rs.getString("shzt")
						});
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
	
	public static int countCjZtSjbs(int shr,String flag,String param,String datatype){
		Connection conn = DBConnection.getConnection();
		 Statement stmt = null;
		 ResultSet rs = null;
		 int count = 0;
		 String sql = "select count(*) as count from as_cj_cjrwztb rz ";
		 		sql += " left join as_cj_rwxx rx on rz.cjrwdm = rx.id ";
		 		sql += " left join as_cj_ztsjbxx zb on rz.ztbdm = zb.id";
		 		sql += " left join userinfo ui on rz.cjr = ui.id";
		 		sql += " left join as_cj_cjbmybmry mb on ui.id = mb.userid and mb.BMRYJS=1";
		 		sql += " left join AS_CJ_CJBMXX bm on mb.CJBMDM = bm.CJBMDM";
		 		sql += " where rz.shr =" + shr+"  and " ;
		 		if (datatype.equals("1")) {
					sql+=" (rz.SHZT=1 and  rz.CJZT=1)";
				}
                if (datatype.equals("2")) {
                	sql+="(rz.CJZT=3 and rz.SHZT=0)";
				}
                if (datatype.equals("3")) {
					sql+="( (rz.CJZT=3 and rz.SHZT=0) or (rz.SHZT=1 and  rz.CJZT=1) )";
				}
		 		if(flag.equals("SJBM")){
		 			sql += " and sjbmc like" + "'%" + param + "%'";
		 		}
				if(flag.equals("CJBM")){
					sql += " and bm.name  like" + "'%" + param + "%'";	 			
				}
				if(flag.equals("CJR")){
					sql += " and showname like" + "'%" + param + "%'";	
				}
				if(flag.equals("RWMC")){
					sql += " and cjrwmc like" + "'%" + param + "%'";	
				}
				if (datatype.equals("1")) {
					
				}
                if (datatype.equals("2")) {
					
				}
				try {
					stmt = conn.createStatement();
					System.out.println("总数sql："+sql);
					rs = stmt.executeQuery(sql);
					rs.next();
					count = rs.getInt("count");
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
			  
		return count;
	}
}
