package audit.service.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;

import org.springframework.stereotype.Service;

import audit.service.AuditDataManagementServices;
import audit.util.DBConnection;

@Service("auditDataManagementServices")
public class AuditDataManagementServicesImpl implements AuditDataManagementServices {

	public ArrayList<HashMap<String, Object>> findAllAuditPassData(int currentpage,int pagesize,String flag,String param) {
		String sql=" select * from (select ROW_NUMBER()over(order by rz.id) as rownum,rz.id as id, ";
		       sql+="  zb.SJBMC as sjbmc,bm.name as cjbmmc,ui.showname as showname,rx.CJRWMC as cjrwmc,zb.CJMBDM as cjmbdm ,rz.CJZT as cjzt,rz.SHZT as shzt from as_cj_cjrwztb rz ";
			   sql+=" left join as_cj_rwxx rx on rz.cjrwdm = rx.id ";
			   sql+=" left join as_cj_ztsjbxx zb on rz.ztbdm = zb.id ";
			   sql+=" left join userinfo ui on rz.cjr = ui.id ";
			   sql+=" left join as_cj_cjbmybmry mb on ui.id = mb.userid and mb.BMRYJS=1 ";
			   sql+=" left join organization bm on zb.CJBMDM = bm.id ";
			   sql+=" where (rz.SHZT=1 and  rz.CJZT=1)	";
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
			   ArrayList<HashMap<String, Object>> lists=null;
			   System.out.println(sql);
			   try {
					lists = DBConnection.executeQueryNoParams(sql);
				} catch (Exception e) {
					e.printStackTrace();
				}
		       return lists ;
	}
	public  int countCjZtSjbs(String flag,String param){
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
		 		sql += " where  (rz.SHZT=1 and  rz.CJZT=1) ";
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
