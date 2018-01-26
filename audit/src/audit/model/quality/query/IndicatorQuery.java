package audit.model.quality.query;

import java.io.Serializable;

import audit.model.AsMManage;

/**
 * 客观指标查询query
 * @author yjq
 * 2015-4-20
 */
public class IndicatorQuery extends AsMManage implements Serializable{

	/**
	 * 
	 * IndicatorQuery.java
	 */
	private static final long serialVersionUID = 2063516962815399903L;
	
	private Integer currentPage;
	
	private Integer onePageCount =10;

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
