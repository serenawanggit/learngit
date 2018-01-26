package audit.table;

import audit.annotation.ExcelAnnotation;
import audit.annotation.ExcelTable;


@ExcelTable(table="TEM_T_TEACH")
public class T_TEACH {
	 @ExcelAnnotation(exportname="姓名")
	 private String TEACHER_NAME;
	 @ExcelAnnotation(exportname="工号")
	 private String TEACHER_NUM;
	 @ExcelAnnotation(exportname="性别")
	 private String GENDER_NAME;
	 @ExcelAnnotation(exportname="出生年月")
	 private String BIRTHDAY_TIME;
	 @ExcelAnnotation(exportname="民族")
	 private String NATION_NAME;
	 @ExcelAnnotation(exportname="来校日期")
	 private String JOIN_TIME;
	 @ExcelAnnotation(exportname="最后学历名称")
	 private String EDUCATION_NAME;
	 @ExcelAnnotation(exportname="最后学位名称")
	 private String DEGREE_NAME;
	 @ExcelAnnotation(exportname="最后学位所授学位国别名称")
	 private String EDUCATION_COUNTRY_NAME;
	 @ExcelAnnotation(exportname="所属专业代码")
	 private String PROFESSION_ID;
	 @ExcelAnnotation(exportname="所属专业名称")
	 private String PROFESSION_NAME;
	 @ExcelAnnotation(exportname="一级学科")
	 private String SUBJECT;
	 @ExcelAnnotation(exportname="专业技术职务")
	 private String POSITION;
	 @ExcelAnnotation(exportname="技术职级")
	 private String TRANK;
	 @ExcelAnnotation(exportname="所属院系代码")
	 private String DEPARTMENT_ID;	 
	 @ExcelAnnotation(exportname="编制")
	 private String BIANZHI;
	 @ExcelAnnotation(exportname="任职状态")
	 private String STATUS;
	 @ExcelAnnotation(exportname="师资类别")
	 private String WORK_TYPE;
	 @ExcelAnnotation(exportname="导师类别")
	 private String TEACH_TYPE;
	 @ExcelAnnotation(exportname="籍贯")
	 private String NATIVE_PLACE;
	 @ExcelAnnotation(exportname="党派")
	 private String PATY;
	 @ExcelAnnotation(exportname="入党时间")
	 private String PATY_TIME;
	 @ExcelAnnotation(exportname="参加工作时间")
	 private String WORK_TIME;
	 @ExcelAnnotation(exportname="最后毕业学校")
	 private String LAST_SCHOOL;
	 @ExcelAnnotation(exportname="最后毕业时间")
	 private String LAST_TIME;
	 @ExcelAnnotation(exportname="所学专业名称")
	 private String TPROFESSION_NAME;
	 @ExcelAnnotation(exportname="所学专业所属学科")
	 private String TSUBJECT;
	 @ExcelAnnotation(exportname="晋升时间")
	 private String PROMOTE_TIME;
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
	 @ExcelAnnotation(exportname="获国外学历")
	 private String FEDUCATION;
	 @ExcelAnnotation(exportname="获国外学位")
	 private String FDEGREE;
	public String getTEACHER_NAME() {
		return TEACHER_NAME;
	}
	public void setTEACHER_NAME(String tEACHER_NAME) {
		TEACHER_NAME = tEACHER_NAME;
	}
	public String getTEACHER_NUM() {
		return TEACHER_NUM;
	}
	public void setTEACHER_NUM(String tEACHER_NUM) {
		TEACHER_NUM = tEACHER_NUM;
	}
	public String getGENDER_NAME() {
		return GENDER_NAME;
	}
	public void setGENDER_NAME(String gENDER_NAME) {
		GENDER_NAME = gENDER_NAME;
	}
	public String getBIRTHDAY_TIME() {
		return BIRTHDAY_TIME;
	}
	public void setBIRTHDAY_TIME(String bIRTHDAY_TIME) {
		BIRTHDAY_TIME = bIRTHDAY_TIME;
	}
	public String getNATION_NAME() {
		return NATION_NAME;
	}
	public void setNATION_NAME(String nATION_NAME) {
		NATION_NAME = nATION_NAME;
	}
	public String getJOIN_TIME() {
		return JOIN_TIME;
	}
	public void setJOIN_TIME(String jOIN_TIME) {
		JOIN_TIME = jOIN_TIME;
	}
	public String getEDUCATION_NAME() {
		return EDUCATION_NAME;
	}
	public void setEDUCATION_NAME(String eDUCATION_NAME) {
		EDUCATION_NAME = eDUCATION_NAME;
	}
	public String getDEGREE_NAME() {
		return DEGREE_NAME;
	}
	public void setDEGREE_NAME(String dEGREE_NAME) {
		DEGREE_NAME = dEGREE_NAME;
	}
	public String getEDUCATION_COUNTRY_NAME() {
		return EDUCATION_COUNTRY_NAME;
	}
	public void setEDUCATION_COUNTRY_NAME(String eDUCATION_COUNTRY_NAME) {
		EDUCATION_COUNTRY_NAME = eDUCATION_COUNTRY_NAME;
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
	public String getSUBJECT() {
		return SUBJECT;
	}
	public void setSUBJECT(String sUBJECT) {
		SUBJECT = sUBJECT;
	}
	public String getPOSITION() {
		return POSITION;
	}
	public void setPOSITION(String pOSITION) {
		POSITION = pOSITION;
	}
	public String getTRANK() {
		return TRANK;
	}
	public void setTRANK(String tRANK) {
		TRANK = tRANK;
	}
	public String getDEPARTMENT_ID() {
		return DEPARTMENT_ID;
	}
	public void setDEPARTMENT_ID(String dEPARTMENT_ID) {
		DEPARTMENT_ID = dEPARTMENT_ID;
	}
	public String getBIANZHI() {
		return BIANZHI;
	}
	public void setBIANZHI(String bIANZHI) {
		BIANZHI = bIANZHI;
	}
	public String getSTATUS() {
		return STATUS;
	}
	public void setSTATUS(String sTATUS) {
		STATUS = sTATUS;
	}
	public String getWORK_TYPE() {
		return WORK_TYPE;
	}
	public void setWORK_TYPE(String wORK_TYPE) {
		WORK_TYPE = wORK_TYPE;
	}
	public String getTEACH_TYPE() {
		return TEACH_TYPE;
	}
	public void setTEACH_TYPE(String tEACH_TYPE) {
		TEACH_TYPE = tEACH_TYPE;
	}
	public String getNATIVE_PLACE() {
		return NATIVE_PLACE;
	}
	public void setNATIVE_PLACE(String nATIVE_PLACE) {
		NATIVE_PLACE = nATIVE_PLACE;
	}
	public String getPATY() {
		return PATY;
	}
	public void setPATY(String pATY) {
		PATY = pATY;
	}
	public String getPATY_TIME() {
		return PATY_TIME;
	}
	public void setPATY_TIME(String pATY_TIME) {
		PATY_TIME = pATY_TIME;
	}
	public String getWORK_TIME() {
		return WORK_TIME;
	}
	public void setWORK_TIME(String wORK_TIME) {
		WORK_TIME = wORK_TIME;
	}
	public String getLAST_SCHOOL() {
		return LAST_SCHOOL;
	}
	public void setLAST_SCHOOL(String lAST_SCHOOL) {
		LAST_SCHOOL = lAST_SCHOOL;
	}
	public String getLAST_TIME() {
		return LAST_TIME;
	}
	public void setLAST_TIME(String lAST_TIME) {
		LAST_TIME = lAST_TIME;
	}
	public String getTPROFESSION_NAME() {
		return TPROFESSION_NAME;
	}
	public void setTPROFESSION_NAME(String tPROFESSION_NAME) {
		TPROFESSION_NAME = tPROFESSION_NAME;
	}
	public String getTSUBJECT() {
		return TSUBJECT;
	}
	public void setTSUBJECT(String tSUBJECT) {
		TSUBJECT = tSUBJECT;
	}
	public String getPROMOTE_TIME() {
		return PROMOTE_TIME;
	}
	public void setPROMOTE_TIME(String pROMOTE_TIME) {
		PROMOTE_TIME = pROMOTE_TIME;
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
