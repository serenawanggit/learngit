package audit.table;

import audit.annotation.ExcelAnnotation;
import audit.annotation.ExcelTable;


@ExcelTable(table="TEM_T_FULL_TEACH")
public class T_FULL_TEACH {
   @ExcelAnnotation(exportname="姓名")
   private String TEACHER_NAME;
   @ExcelAnnotation(exportname="工号")
   private String TEACHER_NUM;
   @ExcelAnnotation(exportname="性别")
   private String GENDER_ID;
   @ExcelAnnotation(exportname="出生年月")
   private String BIRTHDAY_TIME;
   @ExcelAnnotation(exportname="政治面貌")
   private String POLITICAL_ID;
   @ExcelAnnotation(exportname="国籍")
   private String COUNTRY_ID;
   @ExcelAnnotation(exportname="民族")
   private String NATION_ID;
   @ExcelAnnotation(exportname="来校年月")
   private String JOIN_TIME;
   @ExcelAnnotation(exportname="最后学历名称")
   private String EDUCATION_NAME;
   @ExcelAnnotation(exportname="最后学位名称")
   private String DEGREE_NAME;
   @ExcelAnnotation(exportname="最后学位所授学位国别名称")
   private String EDUCATION_COUNTRY_ID;
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
   @ExcelAnnotation(exportname="所属院系名称")
   private String DEPARTMENT_NAME;
   @ExcelAnnotation(exportname="任职状态")
   private String STATUS;
   @ExcelAnnotation(exportname="是否双师型")
   private String IS_DOUBLE;
   @ExcelAnnotation(exportname="是否具有工程背景")
   private String IS_PROJECT;
   @ExcelAnnotation(exportname="是否具有行业背景")
   private String IS_TRADE;
   @ExcelAnnotation(exportname="导师类别")
   private String TEACH_TYPE;
   @ExcelAnnotation(exportname="学缘")
   private String LOT;
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
   @ExcelAnnotation(exportname="出国性质")
   private String GO_TYPE;
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
public String getGENDER_ID() {
	return GENDER_ID;
}
public void setGENDER_ID(String gENDER_ID) {
	GENDER_ID = gENDER_ID;
}
public String getBIRTHDAY_TIME() {
	return BIRTHDAY_TIME;
}
public void setBIRTHDAY_TIME(String bIRTHDAY_TIME) {
	BIRTHDAY_TIME = bIRTHDAY_TIME;
}
public String getPOLITICAL_ID() {
	return POLITICAL_ID;
}
public void setPOLITICAL_ID(String pOLITICAL_ID) {
	POLITICAL_ID = pOLITICAL_ID;
}
public String getCOUNTRY_ID() {
	return COUNTRY_ID;
}
public void setCOUNTRY_ID(String cOUNTRY_ID) {
	COUNTRY_ID = cOUNTRY_ID;
}
public String getNATION_ID() {
	return NATION_ID;
}
public void setNATION_ID(String nATION_ID) {
	NATION_ID = nATION_ID;
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
public String getEDUCATION_COUNTRY_ID() {
	return EDUCATION_COUNTRY_ID;
}
public void setEDUCATION_COUNTRY_ID(String eDUCATION_COUNTRY_ID) {
	EDUCATION_COUNTRY_ID = eDUCATION_COUNTRY_ID;
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
public String getDEPARTMENT_NAME() {
	return DEPARTMENT_NAME;
}
public void setDEPARTMENT_NAME(String dEPARTMENT_NAME) {
	DEPARTMENT_NAME = dEPARTMENT_NAME;
}
public String getSTATUS() {
	return STATUS;
}
public void setSTATUS(String sTATUS) {
	STATUS = sTATUS;
}
public String getIS_DOUBLE() {
	return IS_DOUBLE;
}
public void setIS_DOUBLE(String iS_DOUBLE) {
	IS_DOUBLE = iS_DOUBLE;
}
public String getIS_PROJECT() {
	return IS_PROJECT;
}
public void setIS_PROJECT(String iS_PROJECT) {
	IS_PROJECT = iS_PROJECT;
}
public String getIS_TRADE() {
	return IS_TRADE;
}
public void setIS_TRADE(String iS_TRADE) {
	IS_TRADE = iS_TRADE;
}
public String getTEACH_TYPE() {
	return TEACH_TYPE;
}
public void setTEACH_TYPE(String tEACH_TYPE) {
	TEACH_TYPE = tEACH_TYPE;
}
public String getLOT() {
	return LOT;
}
public void setLOT(String lOT) {
	LOT = lOT;
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
