package audit.model.ods;

import java.io.Serializable;

public class OdsTTeachTemplatefield implements Serializable{
    /**
	 * 
	 * OdsTTeachTemplatefield.java
	 */
	private static final long serialVersionUID = -1268733912322480537L;

	private Integer id;

    private Integer additionalTemplateId;

    private String additionalTemplateField;

    private String additionalTemplateFieldname;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAdditionalTemplateId() {
        return additionalTemplateId;
    }

    public void setAdditionalTemplateId(Integer additionalTemplateId) {
        this.additionalTemplateId = additionalTemplateId;
    }

    public String getAdditionalTemplateField() {
        return additionalTemplateField;
    }

    public void setAdditionalTemplateField(String additionalTemplateField) {
        this.additionalTemplateField = additionalTemplateField == null ? null : additionalTemplateField.trim();
    }

    public String getAdditionalTemplateFieldname() {
        return additionalTemplateFieldname;
    }

    public void setAdditionalTemplateFieldname(String additionalTemplateFieldname) {
        this.additionalTemplateFieldname = additionalTemplateFieldname == null ? null : additionalTemplateFieldname.trim();
    }
}