package audit.model.assess;

import java.util.Date;

public class AsAccessExamineScene {
    private Integer id;

    private Integer accessSpecialtyId;

    private Integer expertId;

    private Date inspectStartTime;

    private Date inspectEndTime;

    private Integer inspectTypeId;

    private String inspectStatus;

    private String inspectContent;

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
}