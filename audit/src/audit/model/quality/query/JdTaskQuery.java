package audit.model.quality.query;

import audit.model.quality.AsZlJdrwxx;

public class JdTaskQuery extends AsZlJdrwxx{

	/**
	 * 
	 * TaskQuery.java
	 */
	private static final long serialVersionUID = 2651682925213282365L;
	
	private Integer userId;
	
	private Integer currentPage;
	
	private Integer onePageCount = 10;
	
	private Integer userTaskStatus;
	
	private String userIds;
	
	private Integer linkedId;
	
	public Integer getLinkedId() {
		return linkedId;
	}

	public void setLinkedId(Integer linkedId) {
		this.linkedId = linkedId;
	}

	public String getUserIds() {
		return userIds;
	}

	public void setUserIds(String userIds) {
		this.userIds = userIds;
	}

	public Integer getUserTaskStatus() {
		return userTaskStatus;
	}

	public void setUserTaskStatus(Integer userTaskStatus) {
		this.userTaskStatus = userTaskStatus;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}

	public Integer getOnePageCount() {
		return onePageCount;
	}

	public void setOnePageCount(Integer onePageCount) {
		this.onePageCount = onePageCount;
	}
	
	

}
