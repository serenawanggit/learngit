package audit.model.quality.query;

import java.io.Serializable;

public class UserQuery implements Serializable{

	/**
	 * 
	 * UserVo.java
	 */
	private static final long serialVersionUID = 2118805387686065016L;
	
	private Integer jdId;
	
	private Integer currentPage;
	
	private Integer onePageCount = 10;

	public Integer getJdId() {
		return jdId;
	}

	public void setJdId(Integer jdId) {
		this.jdId = jdId;
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
