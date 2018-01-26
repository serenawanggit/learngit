package audit.model;

public class DefineObjectVo {
	
    private Integer id;
    private Integer ctemplateId;
    private Integer sid;
    /**
     * 自定义模版对应的excel列名
     */
    private String ctemplateTitleName;
    private Integer isNull;
    private Integer isDate;
    private Integer isNum;
    private Integer isRepeat;
    /**
     * 自定义模版表名
     */
    private String  objectTable;
    /**
     * 自定义模版字段名
     */
    private String objectFieldName;
    /**
     * 
     * 对映基础表名
     */
    private String basisTable;
    /**
     * 
     * 对映基础表字段
     */
    private String basisField;
    /**
     * 重复规则代码
     */
    private Integer repeatId;
    /**
     * 重复规则代码2
     */
    private Integer repeatId2;
    private String existTfield;
    private String  existTable;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getCtemplateId() {
		return ctemplateId;
	}
	public void setCtemplateId(Integer ctemplateId) {
		this.ctemplateId = ctemplateId;
	}
	public Integer getSid() {
		return sid;
	}
	public void setSid(Integer sid) {
		this.sid = sid;
	}
	public String getCtemplateTitleName() {
		return ctemplateTitleName;
	}
	public void setCtemplateTitleName(String ctemplateTitleName) {
		this.ctemplateTitleName = ctemplateTitleName;
	}
	public Integer getIsNull() {
		return isNull;
	}
	public void setIsNull(Integer isNull) {
		this.isNull = isNull;
	}
	public Integer getIsDate() {
		return isDate;
	}
	public void setIsDate(Integer isDate) {
		this.isDate = isDate;
	}
	public Integer getIsNum() {
		return isNum;
	}
	public void setIsNum(Integer isNum) {
		this.isNum = isNum;
	}
	public Integer getIsRepeat() {
		return isRepeat;
	}
	public void setIsRepeat(Integer isRepeat) {
		this.isRepeat = isRepeat;
	}
	public String getObjectTable() {
		return objectTable;
	}
	public void setObjectTable(String objectTable) {
		this.objectTable = objectTable;
	}
	public String getObjectFieldName() {
		return objectFieldName;
	}
	public void setObjectFieldName(String objectFieldName) {
		this.objectFieldName = objectFieldName;
	}
	public String getBasisTable() {
		return basisTable;
	}
	public void setBasisTable(String basisTable) {
		this.basisTable = basisTable;
	}
	public String getBasisField() {
		return basisField;
	}
	public void setBasisField(String basisField) {
		this.basisField = basisField;
	}
	public Integer getRepeatId() {
		return repeatId;
	}
	public void setRepeatId(Integer repeatId) {
		this.repeatId = repeatId;
	}
	public Integer getRepeatId2() {
		return repeatId2;
	}
	public void setRepeatId2(Integer repeatId2) {
		this.repeatId2 = repeatId2;
	}
	public String getExistTfield() {
		return existTfield;
	}
	public void setExistTfield(String existTfield) {
		this.existTfield = existTfield;
	}
	public String getExistTable() {
		return existTable;
	}
	public void setExistTable(String existTable) {
		this.existTable = existTable;
	}
    
    
}
