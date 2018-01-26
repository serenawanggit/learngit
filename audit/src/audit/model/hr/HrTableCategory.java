package audit.model.hr;

import java.io.Serializable;

public class HrTableCategory implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 7822146761124305060L;
	/**
	 * 
	 */
	private Integer id;
	/**
	 * 所属类型
	 */
    private Integer isUse;
    /**
	 * 父级id
	 */
    private Integer parentId;
    /**
	 * 分类名
	 */
    private String categoryName;
    /**
	 * 备注
	 */
    private String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIsUse() {
        return isUse;
    }

    public void setIsUse(Integer isUse) {
        this.isUse = isUse;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName == null ? null : categoryName.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}