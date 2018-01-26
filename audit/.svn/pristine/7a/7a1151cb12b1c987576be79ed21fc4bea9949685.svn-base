package audit.model.assess;

import java.io.Serializable;

/**
 * 专业自评报告
 * @author L
 *
 */
public class AsAccessSelfEvalutionReport implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 6317048376573199255L;
	private Integer id;
    /**
     * 评估专业id
     */
    private Integer accessSpecialtyId;
    /**
     * 报告目录名称
     */
    private String listName;
    /**
     * 父级id
     */
    private Integer parentId;
    /**
     * 报告目录内容
     */
    private String content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAccessSpecialtyId() {
        return accessSpecialtyId;
    }

    public void setAccessSpecialtyId(Integer accessSpecialtyId) {
        this.accessSpecialtyId = accessSpecialtyId;
    }

    public String getListName() {
        return listName;
    }

    public void setListName(String listName) {
        this.listName = listName == null ? null : listName.trim();
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}