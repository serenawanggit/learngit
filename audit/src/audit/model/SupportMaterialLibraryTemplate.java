package audit.model;

public class SupportMaterialLibraryTemplate {
	// 主键
	private Integer id;
	// 树节点ID
	private Integer treeNdId;
	// 表模板ID
	private Integer sdtId;
	// 用户ID
	private Integer userId;
	// 排序字段
	private Integer sort;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getTreeNdId() {
		return treeNdId;
	}
	public void setTreeNdId(Integer treeNdId) {
		this.treeNdId = treeNdId;
	}
	public Integer getSdtId() {
		return sdtId;
	}
	public void setSdtId(Integer sdtId) {
		this.sdtId = sdtId;
	}
	public Integer getSort() {
		return sort;
	}
	public void setSort(Integer sort) {
		this.sort = sort;
	}
	
}
