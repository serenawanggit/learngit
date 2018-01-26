package audit.model;

public class AsCustomVo {
	
	//自定义模板名id
	private Integer ctemplateId;
	//自定义模板名
    private String ctemplateName;
    //标准模板名
    private String templateName;
    //数据库表名
    private String objectTable;
    //自定义列表名
    private String ctemplateTitleName;
    //标准列表名
    private String templateTitleName;
    //数据库字段名
    private String objectFieldName;
    //数据表类型
    private String categoryId;
    
    
	public Integer getCtemplateId() {
		return ctemplateId;
	}
	public void setCtemplateId(Integer ctemplateId) {
		this.ctemplateId = ctemplateId;
	}
	public String getCtemplateName() {
		return ctemplateName;
	}
	public void setCtemplateName(String ctemplateName) {
		this.ctemplateName = ctemplateName;
	}
	public String getTemplateName() {
		return templateName;
	}
	public void setTemplateName(String templateName) {
		this.templateName = templateName;
	}
	public String getObjectTable() {
		return objectTable;
	}
	public void setObjectTable(String objectTable) {
		this.objectTable = objectTable;
	}
	public String getCtemplateTitleName() {
		return ctemplateTitleName;
	}
	public void setCtemplateTitleName(String ctemplateTitleName) {
		this.ctemplateTitleName = ctemplateTitleName;
	}
	public String getTemplateTitleName() {
		return templateTitleName;
	}
	public void setTemplateTitleName(String templateTitleName) {
		this.templateTitleName = templateTitleName;
	}
	public String getObjectFieldName() {
		return objectFieldName;
	}
	public void setObjectFieldName(String objectFieldName) {
		this.objectFieldName = objectFieldName;
	}
	public String getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}
    
}
