package audit.model.quality.vo;

import audit.model.quality.AsZlJdrwxx;
import audit.util.DateTimeUtils;

public class JdTaskVo extends AsZlJdrwxx{

	/**
	 * 
	 * UserTaskVo.java
	 */
	private static final long serialVersionUID = 4669889587182285698L;
	
	private Integer userTaskStatus;
	
	private Integer userCount;
	
	private Integer organizeCount;
	
	private Integer yidabiaobumen;
	
	public Integer getYidabiaobumen() {
		return yidabiaobumen;
	}

	public void setYidabiaobumen(Integer yidabiaobumen) {
		this.yidabiaobumen = yidabiaobumen;
	}

	private String startTime;
	
	private String endTime;
	
	public Integer getOrganizeCount() {
		return organizeCount;
	}

	public void setOrganizeCount(Integer organizeCount) {
		this.organizeCount = organizeCount;
	}

	public Integer getUserCount() {
		return userCount;
	}

	public void setUserCount(Integer userCount) {
		this.userCount = userCount;
	}
	
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

	public Integer getUserTaskStatus() {
		return userTaskStatus;
	}

	public void setUserTaskStatus(Integer userTaskStatus) {
		this.userTaskStatus = userTaskStatus;
	}
	
}
