package audit.model;

import java.util.List;

/**
 * AsIIndexClassification entity. @author MyEclipse Persistence Tools
 */

public class AsIIndexClassification {

	// Fields
	private String id;
	private String parentId;
	private String indexName;
	//指标项
	private List<AsMManage> manageList;


	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getParentId() {
		return this.parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public String getIndexName() {
		return this.indexName;
	}

	public void setIndexName(String indexName) {
		this.indexName = indexName;
	}

	public List<AsMManage> getManageList() {
		return manageList;
	}

	public void setManageList(List<AsMManage> manageList) {
		this.manageList = manageList;
	}

	
}