package audit.table;

import audit.annotation.ExcelAnnotation;
import audit.annotation.ExcelTable;

@ExcelTable(table="TEM_T_TRAIN")
public class T_TRAIN {

	
	@ExcelAnnotation(exportname="所属院系代码")
	   private String DEPARTMENT_ID;
	@ExcelAnnotation(exportname="所属院系名称")
	   private String DEPARTMENT_NAME;
	@ExcelAnnotation(exportname="教师工号")
	   private String CLASSNAME;
	@ExcelAnnotation(exportname="教师姓名")
	   private String TEACHER_NAME;
	@ExcelAnnotation(exportname="出国国别")
	   private String GO_ABROAD;
	@ExcelAnnotation(exportname="留学学校")
	   private String GO_SCHOOL;
	@ExcelAnnotation(exportname="出国时间")
	   private String GO_TIME;
	@ExcelAnnotation(exportname="回国时间")
	   private String BACK_TIME;
	@ExcelAnnotation(exportname="驻外时间")
	   private String OUT_TIME;
	@ExcelAnnotation(exportname="出国性质")
	   private String GO_TYPE;
	@ExcelAnnotation(exportname="获国外学历")
	   private String FEDUCATION;
	@ExcelAnnotation(exportname="获国外学位")
	   private String FDEGREE;
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
	public String getCLASSNAME() {
		return CLASSNAME;
	}
	public void setCLASSNAME(String cLASSNAME) {
		CLASSNAME = cLASSNAME;
	}
	public String getTEACHER_NAME() {
		return TEACHER_NAME;
	}
	public void setTEACHER_NAME(String tEACHER_NAME) {
		TEACHER_NAME = tEACHER_NAME;
	}
	public String getGO_ABROAD() {
		return GO_ABROAD;
	}
	public void setGO_ABROAD(String gO_ABROAD) {
		GO_ABROAD = gO_ABROAD;
	}
	public String getGO_SCHOOL() {
		return GO_SCHOOL;
	}
	public void setGO_SCHOOL(String gO_SCHOOL) {
		GO_SCHOOL = gO_SCHOOL;
	}
	public String getGO_TIME() {
		return GO_TIME;
	}
	public void setGO_TIME(String gO_TIME) {
		GO_TIME = gO_TIME;
	}
	public String getBACK_TIME() {
		return BACK_TIME;
	}
	public void setBACK_TIME(String bACK_TIME) {
		BACK_TIME = bACK_TIME;
	}
	public String getOUT_TIME() {
		return OUT_TIME;
	}
	public void setOUT_TIME(String oUT_TIME) {
		OUT_TIME = oUT_TIME;
	}
	public String getGO_TYPE() {
		return GO_TYPE;
	}
	public void setGO_TYPE(String gO_TYPE) {
		GO_TYPE = gO_TYPE;
	}
	public String getFEDUCATION() {
		return FEDUCATION;
	}
	public void setFEDUCATION(String fEDUCATION) {
		FEDUCATION = fEDUCATION;
	}
	public String getFDEGREE() {
		return FDEGREE;
	}
	public void setFDEGREE(String fDEGREE) {
		FDEGREE = fDEGREE;
	}
	
	
	
}
