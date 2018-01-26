package audit.model.quality.vo;

import audit.model.quality.AsZlZlrwxx;
import audit.util.DateTimeUtils;

public class TaskVo extends AsZlZlrwxx{

	/**
	 * 
	 * TaskVo.java
	 */
	private static final long serialVersionUID = 455708396690835392L;

	/**
	 * 参与部门数
	 */
	private Integer organizeCount;
	
	/**
	 * 阶段数
	 */
	private Integer jdCount;
	
	/**
	 * 完成阶段数
	 */
	private Integer readyJdCount;
	
	public Integer getReadyJdCount() {
		return readyJdCount;
	}

	public void setReadyJdCount(Integer readyJdCount) {
		this.readyJdCount = readyJdCount;
	}

	private String startTime;
	
	private String endTime;
	
	public String getStartTime() {
		return DateTimeUtils.format(getFbsj(),DateTimeUtils.dateString);
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return DateTimeUtils.format(getJzsj(),DateTimeUtils.dateString);
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public Integer getJdCount() {
		return jdCount;
	}

	public void setJdCount(Integer jdCount) {
		this.jdCount = jdCount;
	}

	public Integer getOrganizeCount() {
		return organizeCount;
	}

	public void setOrganizeCount(Integer organizeCount) {
		this.organizeCount = organizeCount;
	}
}
