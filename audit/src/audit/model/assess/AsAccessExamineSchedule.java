package audit.model.assess;

import java.util.Date;

public class AsAccessExamineSchedule {
    private Integer id;

    private Integer accessSpecialtyId;

    private Integer expertId;

    private Date scheduleDate;

    private String scheduleTime;

    private String scheduleTask;

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
        this.scheduleTime = scheduleTime == null ? null : scheduleTime.trim();
    }

    public String getScheduleTask() {
        return scheduleTask;
    }

    public void setScheduleTask(String scheduleTask) {
        this.scheduleTask = scheduleTask == null ? null : scheduleTask.trim();
    }
}