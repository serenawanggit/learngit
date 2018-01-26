package audit.model;

public class TabSql {
    private Integer id;

    private String tabName;

    private String tabCode;

    private Integer tabType;

    private String tabTypeName;

    private String tabSql;

    private String remark;

    private String insertVersion;

    private String searchNames;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTabName() {
        return tabName;
    }

    public void setTabName(String tabName) {
        this.tabName = tabName == null ? null : tabName.trim();
    }

    public String getTabCode() {
        return tabCode;
    }

    public void setTabCode(String tabCode) {
        this.tabCode = tabCode == null ? null : tabCode.trim();
    }

    public Integer getTabType() {
        return tabType;
    }

    public void setTabType(Integer tabType) {
        this.tabType = tabType;
    }

    public String getTabTypeName() {
        return tabTypeName;
    }

    public void setTabTypeName(String tabTypeName) {
        this.tabTypeName = tabTypeName == null ? null : tabTypeName.trim();
    }

    public String getTabSql() {
        return tabSql;
    }

    public void setTabSql(String tabSql) {
        this.tabSql = tabSql == null ? null : tabSql.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public String getInsertVersion() {
        return insertVersion;
    }

    public void setInsertVersion(String insertVersion) {
        this.insertVersion = insertVersion == null ? null : insertVersion.trim();
    }

    public String getSearchNames() {
        return searchNames;
    }

    public void setSearchNames(String searchNames) {
        this.searchNames = searchNames == null ? null : searchNames.trim();
    }
}