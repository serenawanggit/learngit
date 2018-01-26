package audit.model.assess;

import java.io.Serializable;
import java.util.Date;
/**
 * 评估专业
 * @author L
 *
 */
public class AsAccessSpecialty implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 4836209048245786548L;
	
	private Integer id;
    /**
     * 专业id
     */
    private Integer specialtyId;
    /**
     * 专业名
     */
    private String specialtyName;
    /**
     * 专业评估id
     */
    private Integer accessId;
    /**
     * 参与类型
     */
    private Byte participateType;
    /**
     * 开始时间
     */
    private Date startDatetime;
    /**
     * 结束时间
     */
    private Date endDatetime;
    /**
     * 状态
     */
    private Byte isComplete;
    /**
     * 默认评估体系
     */
    private String defaultStandartId;
    
    private Integer academyId;

    private String academyName;
    
    private Integer userGroupId;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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
        this.specialtyName = specialtyName == null ? null : specialtyName.trim();
    }

    public Integer getAccessId() {
        return accessId;
    }

    public void setAccessId(Integer accessId) {
        this.accessId = accessId;
    }

    public Byte getParticipateType() {
        return participateType;
    }

    public void setParticipateType(Byte participateType) {
        this.participateType = participateType;
    }

    public Date getStartDatetime() {
        return startDatetime;
    }

    public void setStartDatetime(Date startDatetime) {
        this.startDatetime = startDatetime;
    }

    public Date getEndDatetime() {
        return endDatetime;
    }

    public void setEndDatetime(Date endDatetime) {
        this.endDatetime = endDatetime;
    }

    public Byte getIsComplete() {
        return isComplete;
    }

    public void setIsComplete(Byte isComplete) {
        this.isComplete = isComplete;
    }

    public String getDefaultStandartId() {
        return defaultStandartId;
    }

    public void setDefaultStandartId(String defaultStandartId) {
        this.defaultStandartId = defaultStandartId == null ? null : defaultStandartId.trim();
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
        this.academyName = academyName == null ? null : academyName.trim();
    }

	public Integer getUserGroupId() {
		return userGroupId;
	}

	public void setUserGroupId(Integer userGroupId) {
		this.userGroupId = userGroupId;
	}
}