package audit.model.quality.query;

import audit.model.quality.AsZlJdrwkgzb;

public class JdZbQuery extends AsZlJdrwkgzb{

	/**
	 * 
	 * JdZbQuery.java
	 */
	private static final long serialVersionUID = -1116479665169132985L;

	private Integer currentPage;
	
	private Integer onePageCount = 10;
	
	private Integer userId;
	
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
