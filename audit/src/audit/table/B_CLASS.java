package audit.table;

import audit.annotation.ExcelAnnotation;
import audit.annotation.ExcelTable;

@ExcelTable(table="TEM_B_CLASS")
public class B_CLASS {
    
	@ExcelAnnotation(exportname="班级名称")
	   private String CLASSNAME;
	@ExcelAnnotation(exportname="班级代码")
	   private String CID;
	@ExcelAnnotation(exportname="专业代码")
	   private String PROFESSION_ID;
	@ExcelAnnotation(exportname="专业名称")
	   private String PROFESSION_NAME;
	@ExcelAnnotation(exportname="年级")
	   private String GRADE;
	@ExcelAnnotation(exportname="院系代码")
	   private String DEPARTMENT_ID;
	@ExcelAnnotation(exportname="院系名称")
	   private String DEPARTMENT_NAME;
	public String getCLASSNAME() {
		return CLASSNAME;
	}
	public void setCLASSNAME(String cLASSNAME) {
		CLASSNAME = cLASSNAME;
	}
	public String getCID() {
		return CID;
	}
	public void setCID(String cID) {
		CID = cID;
	}
	public String getPROFESSION_ID() {
		return PROFESSION_ID;
	}
	public void setPROFESSION_ID(String pROFESSION_ID) {
		PROFESSION_ID = pROFESSION_ID;
	}
	public String getPROFESSION_NAME() {
		return PROFESSION_NAME;
	}
	public void setPROFESSION_NAME(String pROFESSION_NAME) {
		PROFESSION_NAME = pROFESSION_NAME;
	}
	public String getGRADE() {
		return GRADE;
	}
	public void setGRADE(String gRADE) {
		GRADE = gRADE;
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
