package audit.model.assess.vo;

import java.util.Date;

/**
 * 现场考查日程表
 * @author xfwang20150618
 *
 */
public class AsAccessExamineScheduleVo {
	
	/**
	 * 日程表的id
	 */
	private Integer id; 
	
	/**
	 * 年度表的id
	 */
	private Integer accessId;
	
	/**
	 * 年度表的名称
	 */
	private String accessName;
	
	/**
	 * 学院的id
	 */
	private Integer academyId;
	
	/**
	 * 学院名称
	 */
	private String  academyName;
	/**
	 * 专业的id
	 */
	private Integer specialtyId;
	
	/**
	 * 专业名称
	 */
	private String  specialtyName;
	
	/**
	 * 专家的id
	 */
	private Integer expertId;
	
	/**
	 * 专家名称
	 */
	private String expertName;
	
	/**
	 * 日程表的日期
	 */
	private Date scheduleDate;
	
	/**
	 * 展现的日期
	 */
	private String showScheduleDate;
	
	public String getShowScheduleDate() {
		return showScheduleDate;
	}

	public void setShowScheduleDate(String showScheduleDate) {
		this.showScheduleDate = showScheduleDate;
	}

	/**
	 * 日程表的时间
	 */
	private String scheduleTime;
	
	/**
	 * 日程表的内容
	 */
	private String scheduleTask;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getAccessId() {
		return accessId;
	}

	public void setAccessId(Integer accessId) {
		this.accessId = accessId;
	}

	public Integer getAcademyId() {
		return academyId;
	}

	public void setAcademyId(Integer academyId) {
		this.academyId = academyId;
	}

	public Integer getSpecialtyId() {
		return specialtyId;
	}

	public void setSpecialtyId(Integer specialtyId) {
		this.specialtyId = specialtyId;
	}

	public Integer getExpertId() {
		return expertId;
	}

	public void setExpertId(Integer expertId) {
		this.expertId = expertId;
	}
	public String getExpertName() {
		return expertName;
	}

	public void setExpertName(String expertName) {
		this.expertName = expertName;
	}
	public Date getScheduleDate() {
		return scheduleDate;
	}

	public void setScheduleDate(Date scheduleDate) {
		this.scheduleDate = scheduleDate;
	}

	public String getScheduleTime() {
		return scheduleTime;
	}

	public void setScheduleTime(String scheduleTime) {
		this.scheduleTime = scheduleTime;
	}

	public String getScheduleTask() {
		return scheduleTask;
	}

	public void setScheduleTask(String scheduleTask) {
		this.scheduleTask = scheduleTask;
	}

	public String getAcademyName() {
		return academyName;
	}

	public void setAcademyName(String academyName) {
		this.academyName = academyName;
	}

	public String getSpecialtyName() {
		return specialtyName;
	}

	public void setSpecialtyName(String specialtyName) {
		this.specialtyName = specialtyName;
	}

	public String getAccessName() {
		return accessName;
	}

	public void setAccessName(String accessName) {
		this.accessName = accessName;
	}
	
}
