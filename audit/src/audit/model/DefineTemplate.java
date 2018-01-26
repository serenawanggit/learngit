package audit.model;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * 模板表
 * @author gaom
 *
 */
public class DefineTemplate {

	private Integer CTEMPLATE_ID;
	private String CTEMPLATE_NAME;
	private Integer TEMPLATE_ID;
	private String TEMPLATE_NAME;
	private String TIME_TYPE;
	private Integer STATE;
	private Integer CATEGORY_ID;
	private Date CREATE_TIME;
	
	public Integer getCTEMPLATE_ID() {
		return CTEMPLATE_ID;
	}
	public void setCTEMPLATE_ID(Integer cTEMPLATE_ID) {
		CTEMPLATE_ID = cTEMPLATE_ID;
	}
	public String getCTEMPLATE_NAME() {
		return CTEMPLATE_NAME;
	}
	public void setCTEMPLATE_NAME(String cTEMPLATE_NAME) {
		CTEMPLATE_NAME = cTEMPLATE_NAME;
	}
	public Integer getTEMPLATE_ID() {
		return TEMPLATE_ID;
	}
	public void setTEMPLATE_ID(Integer tEMPLATE_ID) {
		TEMPLATE_ID = tEMPLATE_ID;
	}
	public String getTEMPLATE_NAME() {
		return TEMPLATE_NAME;
	}
	public void setTEMPLATE_NAME(String tEMPLATE_NAME) {
		TEMPLATE_NAME = tEMPLATE_NAME;
	}
	public Integer getSTATE() {
		return STATE;
	}
	public void setSTATE(Integer sTATE) {
		STATE = sTATE;
	}
	public String getTIME_TYPE() {
		return TIME_TYPE;
	}
	public void setTIME_TYPE(String tIME_TYPE) {
		TIME_TYPE = tIME_TYPE;
	}
	public Integer getCATEGORY_ID() {
		return CATEGORY_ID;
	}
	public void setCATEGORY_ID(Integer cATEGORY_ID) {
		CATEGORY_ID = cATEGORY_ID;
	}
	public Date getCREATE_TIME() {
		return CREATE_TIME;
	}
	public void setCREATE_TIME(Date cREATE_TIME) {
		CREATE_TIME = cREATE_TIME;
	}
	
}
