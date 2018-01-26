package audit.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import audit.model.DataTabModel;
import net.sf.json.JSON;
import net.sf.json.JSONArray;

public class FindDataTable {
	
	//数据报表详情检索
		public static JSON querydatareportmodel(String rtid){
			
			JSON obj = null;
			
			//获取数据库连接对象
			Connection con=new JDBCUtil().getConnection();
			try {
				List<DataTabModel> lbd_m = new ArrayList<DataTabModel>();
				
	/*			String sql_m="select t.tmid,t.tabmodel_name,t.dtcid,r.TYPE_NAME,t.tabmodel_property,t.tabmodel_cols,t.tabmodel_rows,t.tabmodel_filter,t.ctime "
						+ " from TQC_VIEW_TABMODEL as t,TQC_VIEW_REPORTMODEL_MIDDEL as m ,AS_R_TYPE r"
						+ " where t.tmid=m.tmid and t.dtcid=r.ID and m.rtid=? ";*/
				
				String sql_m="select t.tmid,t.tabmodel_name,t.dtcid,r.TYPE_NAME,t.tabmodel_property,t.tabmodel_cols,t.tabmodel_rows,t.tabmodel_filter,t.ctime" 
			       +"  from TQC_VIEW_TABMODEL as t ,AS_R_TYPE as r  where t.dtcid=r.ID and t.tmid=?";
			       
				PreparedStatement ps_m=con.prepareStatement(sql_m);
				ps_m.setString(1, rtid);
				
				ResultSet rs_m=ps_m.executeQuery();
				while(rs_m.next()){
					
					List<String> lcols=new ArrayList<String>();					//列维度选项
					List<String> lrows=new ArrayList<String>();					//行维度选项
					List<String> lcons=new ArrayList<String>();					//筛选条件
					
					String sql_dt=" select did,tmid,pmsflm,dimenname from TQC_VIEW_DIEMN where tmid=? ";
					PreparedStatement ps_dt=con.prepareStatement(sql_dt);
					ps_dt.setString(1, rtid );
					
					ResultSet rs_dt=ps_dt.executeQuery();
					while(rs_dt.next()){
						String  pmsflm=rs_dt.getString(3);
						if(pmsflm.equals("0")){//列
							lcols.add( rs_dt.getString(4) );
						}else if(pmsflm.equals("1")){//行
							lrows.add( rs_dt.getString(4) );
						}else if(pmsflm.equals("2")){//筛选条件
							lcons.add( rs_dt.getString(4) );
						}
					}
					//关闭资源
					rs_dt.close();
					ps_dt.close();
					
					DataTabModel dtm=new DataTabModel(
							rs_m.getString(1),
							rs_m.getString(2),
							rs_m.getString(3),
							rs_m.getString(4),
							rs_m.getString(5),
							rs_m.getString(6),
							rs_m.getString(7),
							rs_m.getString(8),
							rs_m.getString(9),
						    0,
						    lcols,lrows,lcons );
					
					lbd_m.add(dtm);
				}
				
				//关闭数据报表详情
				rs_m.close();
				ps_m.close();
				
/*				
				DataReport dr=new DataReport(
						rs.getString(1),
					    rs.getString(2),
					    rs.getString(3),
					    rs.getString(4),
					    rs.getString(5),
					    rs.getString(6),
					    rs.getString(7),
					    1,
					    lbd_m
					    );
				
				lbd.add(dr);*/
				
			
				if(lbd_m.size()>0){
					obj = JSONArray.fromObject(lbd_m);
				}else{
//					StatusInfo info = new StatusInfo(CI.GEO021471);结果为空
					//obj = JSONObject.fromObject("");
				}

			} catch (SQLException e) {
				//StatusInfo info = new StatusInfo(CI.GEO021472);//检索异常异常
				//obj = JSONObject.fromObject("");
				e.printStackTrace();
				//log.info("数据报表详情检索异常："+e.getMessage());
			}finally{
				try {
					if(con!=null&&!con.isClosed()){
						con.close();
					}
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			return obj;
		}
}
