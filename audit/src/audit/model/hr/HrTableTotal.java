package audit.model.hr;

import java.io.Serializable;

public class HrTableTotal implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -5518480262017685039L;
	/**
	 * 
	 */
	private Integer id;
	/**
	 * 表名
	 */
    private String tableName;
    /**
	 * 数据表名
	 */
    private String tableDataName;
    /**
	 * 所属类型
	 */
    private Integer belongType;
    /**
	 * 是否必须
	 */
    private Integer isMust;
    /**
	 * 分类id
	 */
    private Integer categoryId;
    /**
	 * 是否原始表
	 */
    private Integer isOriginal;
    /**
	 * 备注
	 */
    private String remark;
    /**
	 * 是否存储一条记录
	 */
    private Integer isOnlyOne;
    /**
	 * 表样
	 */
    private String tableStyle;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTableName() {
        return tableName;
    }

    public void setTableName(String tableName) {
        this.tableName = tableName == null ? null : tableName.trim();
    }

    public String getTableDataName() {
        return tableDataName;
    }

    public void setTableDataName(String tableDataName) {
        this.tableDataName = tableDataName == null ? null : tableDataName.trim();
    }

    public Integer getBelongType() {
        return belongType;
    }

    public void setBelongType(Integer belongType) {
        this.belongType = belongType;
    }

    public Integer getIsMust() {
        return isMust;
    }

    public void setIsMust(Integer isMust) {
        this.isMust = isMust;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public Integer getIsOriginal() {
        return isOriginal;
    }

    public void setIsOriginal(Integer isOriginal) {
        this.isOriginal = isOriginal;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Integer getIsOnlyOne() {
        return isOnlyOne;
    }

    public void setIsOnlyOne(Integer isOnlyOne) {
        this.isOnlyOne = isOnlyOne;
    }

    public String getTableStyle() {
        return tableStyle;
    }

    public void setTableStyle(String tableStyle) {
        this.tableStyle = tableStyle == null ? null : tableStyle.trim();
    }
}