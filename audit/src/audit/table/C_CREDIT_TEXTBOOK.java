package audit.table;

import audit.annotation.ExcelAnnotation;
import audit.annotation.ExcelTable;

@ExcelTable(table="TEM_C_CREDIT_TEXTBOOK")
public class C_CREDIT_TEXTBOOK {
	 @ExcelAnnotation(exportname="教材中文名称")
	   private String TEXTBOOK_NAME;
	 @ExcelAnnotation(exportname="作者工号")
	   private String TEACHER_NUM;
	 @ExcelAnnotation(exportname="作者姓名")
	   private String TEACHER_NAME;
	 @ExcelAnnotation(exportname="第一作者单位")
	   private String FWRITER_UNIT;
	 @ExcelAnnotation(exportname="出版社")
	   private String PRESS;
	 @ExcelAnnotation(exportname="年度")
	   private String ASSESS_YEAR;
	 @ExcelAnnotation(exportname="所属学院代码")
	   private String DEPARTMENT_ID;
	 @ExcelAnnotation(exportname="所属学院名称")
	   private String DEPARTMENT_NAME;
	public String getTEXTBOOK_NAME() {
		return TEXTBOOK_NAME;
	}
	public void setTEXTBOOK_NAME(String tEXTBOOK_NAME) {
		TEXTBOOK_NAME = tEXTBOOK_NAME;
	}
	public String getTEACHER_NUM() {
		return TEACHER_NUM;
	}
	public void setTEACHER_NUM(String tEACHER_NUM) {
		TEACHER_NUM = tEACHER_NUM;
	}
	public String getTEACHER_NAME() {
		return TEACHER_NAME;
	}
	public void setTEACHER_NAME(String tEACHER_NAME) {
		TEACHER_NAME = tEACHER_NAME;
	}
	public String getFWRITER_UNIT() {
		return FWRITER_UNIT;
	}
	public void setFWRITER_UNIT(String fWRITER_UNIT) {
		FWRITER_UNIT = fWRITER_UNIT;
	}
	public String getPRESS() {
		return PRESS;
	}
	public void setPRESS(String pRESS) {
		PRESS = pRESS;
	}
	public String getASSESS_YEAR() {
		return ASSESS_YEAR;
	}
	public void setASSESS_YEAR(String aSSESS_YEAR) {
		ASSESS_YEAR = aSSESS_YEAR;
	}
	public String getDEPARTMENT_ID() {
		return DEPARTMENT_ID;
	}
	public void setDEPARTMENT_ID(String dEPARTMENT_ID) {
		DEPARTMENT_ID = dEPARTMENT_ID;
	}
	public String getDEPARTMENT_NAME() {
		return DEPARTMENT_NAME;
	}
	public void setDEPARTMENT_NAME(String dEPARTMENT_NAME) {
		DEPARTMENT_NAME = dEPARTMENT_NAME;
	}
	 
	 
	 
}
