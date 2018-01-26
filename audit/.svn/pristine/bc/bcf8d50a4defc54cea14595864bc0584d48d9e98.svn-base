package audit.service.impl.ods;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;

import org.springframework.stereotype.Service;

import audit.service.ods.OdsTTeachServices;
import audit.util.DBConnection;

@Service("odsTTeachServices")
public class OdsTTeachServicesImpl implements OdsTTeachServices{

	public ArrayList<HashMap<String, Object>> findOdsTTeach(ArrayList<Object> params ,Integer syear) {
		String sql="";
		sql+="select ROW_NUMBER() over(order by a.id) as rownum,a.id, a.teacher_num,a.teacher_name,a.department_name ,a.profession_id,a.profession_name,a.insert_version ";
		sql+=" ,b.examine_status ";
		sql+=" from ODS_T_TEACH a ";
		sql+=" left join ODS_T_TEACH_STATUS b on b.teacher_id= a.TEACHER_NUM ";
		sql+="  where   state=1 and DEPARTMENT_NAME is not  null and insert_version like '%"+syear+"%'  and DEPARTMENT_ID=? and b.examine_status=?";
		System.out.println(sql);
		return DBConnection.executeQuery(sql, params);
	}

	public ArrayList<HashMap<String, Object>> findOdsTTeachByfy(
			ArrayList<Object> params ,Integer syear) {
		 String sql="select * from ";
		 sql+="  (select ROW_NUMBER() over(order by a.id) as rownum,a.id, a.teacher_num,a.teacher_name,a.department_name ,a.profession_id,a.profession_name,a.insert_version ";
		 sql+=" ,b.examine_status ";
		 sql+=" from ODS_T_TEACH a ";
		 sql+="  left join ODS_T_TEACH_STATUS b on b.teacher_id= a.TEACHER_NUM ";
		 sql+="  where   state=1 and DEPARTMENT_NAME is not  null and insert_version like '%"+syear+"%'  and DEPARTMENT_ID=? and b.examine_status=?) a ";
		 sql+="where rownum between ? and ? order by TEACHER_NUM ";
		 System.out.println(sql);
		return DBConnection.executeQuery(sql, params);
	}

	public ArrayList<HashMap<String, Object>> findOdsBProfessionByYearAndCode(ArrayList<Object> params ,Integer syear) {
		 String sql="  select PROFESSION_ID, PROFESSION_NAME from ODS_B_PROFESSION where insert_version like '%"+syear+"%' and DEPARTMENT_ID=?  and state=1";
		 return DBConnection.executeQuery(sql, params);
	}

	public ArrayList<HashMap<String, Object>> findOdsTTeachByStateTwoToThree(
			ArrayList<Object> params, Integer syear) {
		 String sql=" select * from ";
				sql+=" (select ROW_NUMBER() over(order by a.id) as rownum,a.id, a.teacher_num,a.teacher_name,a.department_name ,a.profession_id,a.profession_name,a.insert_version ";
				sql+=" ,b.examine_status ";
				sql+=" from ODS_T_TEACH a ";
				sql+=" left join ODS_T_TEACH_STATUS b on b.teacher_id= a.TEACHER_NUM ";
				sql+=" where   state=1 and DEPARTMENT_NAME is not  null and insert_version like '%"+syear+"%'  and (b.examine_status=? or b.examine_status=?) ) a ";
				sql+=" where rownum between ? and ? order by TEACHER_NUM ";
		 return DBConnection.executeQuery(sql, params);
	}

	public ArrayList<HashMap<String, Object>> findOdsTTeachCount(
			ArrayList<Object> params, Integer syear) {
		String sql=" select COUNT(*) as num ";
			   sql+=" from ODS_T_TEACH a ";
			   sql+=" left join ODS_T_TEACH_STATUS b on b.teacher_id= a.TEACHER_NUM ";
			   sql+=" where   state=1 and DEPARTMENT_NAME is not  null and insert_version like '%"+syear+"%'  and (b.examine_status=? or b.examine_status=?) ";
		return DBConnection.executeQuery(sql, params);
	}
	


}
