package audit.util;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import audit.annotation.ExcelAnnotation;
import audit.annotation.ExcelTable;

public class DBhelp {
	public static void saveDB(List<Map<String, String>> list,Class paa) throws NoSuchMethodException,
			SecurityException, ClassNotFoundException {
	      ExcelTable excelTabl=  (ExcelTable) paa.getAnnotation(ExcelTable.class);
	      Field filed[] =paa.getDeclaredFields();
	      String sql ="insert into "+excelTabl.table()+" (";
	      List<String> list2=new ArrayList<String>();
	      for(int i=0;i<filed.length;i++){
	    	  if(filed[i].getAnnotation(ExcelAnnotation.class)!=null && i<filed.length-1){
	    		  sql+=filed[i].getName()+",";
	    		  list2.add(filed[i].getName());
	    	  }
	    	  if(filed[i].getAnnotation(ExcelAnnotation.class)!=null && i>=filed.length-1){
	    		  sql+=filed[i].getName();
	    		  list2.add(filed[i].getName());
	    	  }
	      }
	      sql+="  ) values ( ";
	    	  for(Map<String, String> m: list){
	    		  String sr=sql;
	    		  for(int i=0;i<m.size();i++){
	    			  if(i<m.size()-1){
	    				  if(m.get(list2.get(i)).equals("")|| m.get(list2.get(i))==null){
	    					  sr+="'',";
	    				  }else{
	    					  sr+="'"+m.get(list2.get(i))+"',";
	    				  }
	    			  }else{
	    				  if(m.get(list2.get(i)).equals("")||m.get(list2.get(i))==null){
	    					  sr+="''";
	    				  }else{
	    					  sr+="'"+m.get(list2.get(i))+"'";
	    				  }
	    			  }
	    		  }
	    		  sr+= " );";
	    		  try {
					DBConnection.Add(sr);
				} catch (Exception e) {
					e.printStackTrace();
				}
	    		  System.out.println(sr);
	    	  }
	    	  System.out.println(filed.length);
	}

	public static void main(String[] args) {
	    		  try {
					DBConnection.Add("insert into TEM_T_FULL_TEACH ( TEACHER_NAME,TEACHER_NUM,GENDER_ID,BIRTHDAY_TIME,POLITICAL_ID,COUNTRY_ID,NATION_ID,JOIN_TIME,EDUCATION_NAME,DEGREE_NAME,EDUCATION_COUNTRY_ID,PROFESSION_ID,PROFESSION_NAME,SUBJECT,POSITION,TRANK,DEPARTMENT_ID,DEPARTMENT_NAME,STATUS,IS_DOUBLE,IS_PROJECT,IS_TRADE,TEACH_TYPE,LOT,NATIVE_PLACE,PATY,PATY_TIME,WORK_TIME,LAST_SCHOOL,LAST_TIME,TPROFESSION_NAME,TSUBJECT,PROMOTE_TIME,GO_ABROAD,GO_SCHOOL,GO_TIME,BACK_TIME,OUT_TIME,GO_TYPE,FEDUCATION,FDEGREE ) values ( '倪玛','10011.0','女','1991/1/1','团员','中国','汉','2001/9/1','本科','学士','！','  ',' ','  ','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null','null' );");
				} catch (Exception e) {
					e.printStackTrace();
				}
	}
	

}
