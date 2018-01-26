package audit.table;

import java.io.File;
import java.util.List;
import java.util.Map;

import audit.annotation.ExcelAnnotation;
import audit.annotation.ExcelTable;
import audit.util.ExcelUtil;
import audit.util.PropertiesUtil;

@ExcelTable(table="TEM_T_FULL_TEACH")
public class Test {
	@ExcelAnnotation(exportname="教师名字")
    private String teacher_name;
	@ExcelAnnotation(exportname="傻逼")
    private String sb;

	public String getTeacher_name() {
		return teacher_name;
	}

	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}
	
   /* public static void main(String[] args) {
    	Class cla=null;
       try {
    	  String aString=  PropertiesUtil.getProperty("汉字");
    	  if(aString!=null){
    		  cla= Class.forName(aString);
    	  }
	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
     List<Map<String, String>> list =	ExcelUtil.importExcel(new File("E:\\汉字.xlsx"),cla);
	}*/
}
