package audit.model;

import java.util.List;

/*
 * 标准对象表映射
 * @author deng
 * */
public class StandardCellField {
	
	private Integer ID;
	
	private Integer TEMPLATE_ID;
	
	private String OBJECT_TABLE;
	
	private String OBJECT_FIELD_NAME;
	
	private String TEMPLATE_TITLE_NAME;
	
	private Integer IS_importability;
	
	private String BASIS_TABLE;
	
	private String BASIS_FIELD;
	
	private Integer QUERY_TYPE;
	
	private String EXIST_TABLE;
	private String EXIST_TFIELD;
	private Integer IS_CROSSTAB;
	
	
	private List<String> rules;

	public Integer getID() {
		return ID;
	}

	public void setID(Integer iD) {
		ID = iD;
	}

	public Integer getTEMPLATE_ID() {
		return TEMPLATE_ID;
	}

	public void setTEMPLATE_ID(Integer tEMPLATE_ID) {
		TEMPLATE_ID = tEMPLATE_ID;
	}

	public String getOBJECT_TABLE() {
		return OBJECT_TABLE;
	}

	public void setOBJECT_TABLE(String oBJECT_TABLE) {
		OBJECT_TABLE = oBJECT_TABLE;
	}

	public String getOBJECT_FIELD_NAME() {
		return OBJECT_FIELD_NAME;
	}

	public void setOBJECT_FIELD_NAME(String oBJECT_FIELD_NAME) {
		OBJECT_FIELD_NAME = oBJECT_FIELD_NAME;
	}

	public String getTEMPLATE_TITLE_NAME() {
		return TEMPLATE_TITLE_NAME;
	}

	public void setTEMPLATE_TITLE_NAME(String tEMPLATE_TITLE_NAME) {
		TEMPLATE_TITLE_NAME = tEMPLATE_TITLE_NAME;
	}

	public Integer getIS_importability() {
		return IS_importability;
	}

	public void setIS_importability(Integer iS_importability) {
		IS_importability = iS_importability;
	}

	public String getBASIS_TABLE() {
		return BASIS_TABLE;
	}

	public void setBASIS_TABLE(String bASIS_TABLE) {
		BASIS_TABLE = bASIS_TABLE;
	}

	public String getBASIS_FIELD() {
		return BASIS_FIELD;
	}

	public void setBASIS_FIELD(String bASIS_FIELD) {
		BASIS_FIELD = bASIS_FIELD;
	}

	public List<String> getRules() {
		return rules;
	}

	public void setRules(List<String> rules) {
		this.rules = rules;
	}

	public Integer getQUERY_TYPE() {
		return QUERY_TYPE;
	}

	public void setQUERY_TYPE(Integer qUERY_TYPE) {
		QUERY_TYPE = qUERY_TYPE;
	}

	public String getEXIST_TABLE() {
		return EXIST_TABLE;
	}

	public void setEXIST_TABLE(String eXIST_TABLE) {
		EXIST_TABLE = eXIST_TABLE;
	}

	public String getEXIST_TFIELD() {
		return EXIST_TFIELD;
	}

	public void setEXIST_TFIELD(String eXIST_TFIELD) {
		EXIST_TFIELD = eXIST_TFIELD;
	}

	public Integer getIS_CROSSTAB() {
		return IS_CROSSTAB;
	}

	public void setIS_CROSSTAB(Integer iS_CROSSTAB) {
		IS_CROSSTAB = iS_CROSSTAB;
	}

	
	
	
}
