package audit.model.assess.vo;

import java.util.Date;

public class AsAccessExamineSceneVo {

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
	
	private Integer accessSpecialtyId;

    private Integer expertId;
    
    private String expertName;

    private Date inspectStartTime;

    private Date inspectEndTime;

    private Integer inspectTypeId;
    
    private String inspectTypeName;

    private String inspectStatus;

    private String inspectContent;
    
    private String showSTime;
    
    private String showETime;
    
    public String getShowSTime() {
		return showSTime;
	}

	public void setShowSTime(String showSTime) {
		this.showSTime = showSTime;
	}

	public String getShowETime() {
		return showETime;
	}

	public void setShowETime(String showETime) {
		this.showETime = showETime;
	}

	public Integer getAccessId() {
		return accessId;
	}

	public void setAccessId(Integer accessId) {
		this.accessId = accessId;
	}

	public String getAccessName() {
		return accessName;
	}

	public void setAccessName(String accessName) {
		this.accessName = accessName;
	}

	public Integer getAcademyId() {
		return academyId;
	}

	public void setAcademyId(Integer academyId) {
		this.academyId = academyId;
	}

	public String getAcademyName() {
		return academyName;
	}

	public void setAcademyName(String academyName) {
		this.academyName = academyName;
	}

	public Integer getSpecialtyId() {
		return specialtyId;
	}

	public void setSpecialtyId(Integer specialtyId) {
		this.specialtyId = specialtyId;
	}

	public String getSpecialtyName() {
		return specialtyName;
	}

	public void setSpecialtyName(String specialtyName) {
		this.specialtyName = specialtyName;
	}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAccessSpecialtyId() {
        return accessSpecialtyId;
    }

    public void setAccessSpecialtyId(Integer accessSpecialtyId) {
        this.accessSpecialtyId = accessSpecialtyId;
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

	public Date getInspectStartTime() {
        return inspectStartTime;
    }

    public void setInspectStartTime(Date inspectStartTime) {
        this.inspectStartTime = inspectStartTime;
    }

    public Date getInspectEndTime() {
        return inspectEndTime;
    }

    public void setInspectEndTime(Date inspectEndTime) {
        this.inspectEndTime = inspectEndTime;
    }

    public Integer getInspectTypeId() {
        return inspectTypeId;
    }

    public void setInspectTypeId(Integer inspectTypeId) {
        this.inspectTypeId = inspectTypeId;
    }

    public String getInspectStatus() {
        return inspectStatus;
    }

    public void setInspectStatus(String inspectStatus) {
        this.inspectStatus = inspectStatus == null ? null : inspectStatus.trim();
    }

    public String getInspectContent() {
        return inspectContent;
    }

    public void setInspectContent(String inspectContent) {
        this.inspectContent = inspectContent == null ? null : inspectContent.trim();
    }

	public String getInspectTypeName() {
		return inspectTypeName;
	}

	public void setInspectTypeName(String inspectTypeName) {
		this.inspectTypeName = inspectTypeName;
	}

}
