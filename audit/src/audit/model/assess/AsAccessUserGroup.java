package audit.model.assess;

import java.io.Serializable;

/**
 * 专业评估用户组
 * @author L
 *
 */
public class AsAccessUserGroup implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -3612214536506678111L;
	private Integer id;
    /**
     * 名称
     */
    private String name;
    /**
     * 类型
     */
    private Byte groupType;
    /**
     * 是否启用
     */
    private Byte isUse;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Byte getGroupType() {
        return groupType;
    }

    public void setGroupType(Byte groupType) {
        this.groupType = groupType;
    }

    public Byte getIsUse() {
        return isUse;
    }

    public void setIsUse(Byte isUse) {
        this.isUse = isUse;
    }
}