package audit.model.ods;

import java.io.Serializable;
import java.util.Date;

public class OdsTTeachStatus implements Serializable{
    /**
	 * 
	 * OdsTTeachStatus.java
	 */
	private static final long serialVersionUID = 1168286765798402310L;

	private Integer id;

    private Integer teacherId;

    private Integer examineStatus;

    private Date academetime;

    private Date schooltime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Integer teacherId) {
        this.teacherId = teacherId;
    }

    public Integer getExamineStatus() {
        return examineStatus;
    }

    public void setExamineStatus(Integer examineStatus) {
        this.examineStatus = examineStatus;
    }

    public Date getAcademetime() {
        return academetime;
    }

    public void setAcademetime(Date academetime) {
        this.academetime = academetime;
    }

    public Date getSchooltime() {
        return schooltime;
    }

    public void setSchooltime(Date schooltime) {
        this.schooltime = schooltime;
    }
}