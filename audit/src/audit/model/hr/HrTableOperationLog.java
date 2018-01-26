package audit.model.hr;

import java.util.Date;
import java.io.Serializable;

public class HrTableOperationLog implements Serializable{
	private static final long serialVersionUID = 1681613504855158035L;
	private Integer id;

    private String operationYear;

    private Integer hrTableId;

    private String hrTableName;

    private Integer userId;

    private String userName;

    private Integer isSuccess;

    private Integer rowsNumber;

    private String remark;

    private Date createDatetime;
    private  Integer status;
    private Integer errorRecord;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOperationYear() {
        return operationYear;
    }

    public void setOperationYear(String operationYear) {
        this.operationYear = operationYear;
    }

    public Integer getHrTableId() {
        return hrTableId;
    }

    public void setHrTableId(Integer hrTableId) {
        this.hrTableId = hrTableId;
    }

    public String getHrTableName() {
        return hrTableName;
    }

    public void setHrTableName(String hrTableName) {
        this.hrTableName = hrTableName == null ? null : hrTableName.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    public Integer getIsSuccess() {
        return isSuccess;
    }

    public void setIsSuccess(Integer isSuccess) {
        this.isSuccess = isSuccess;
    }

    public Integer getRowsNumber() {
        return rowsNumber;
    }

    public void setRowsNumber(Integer rowsNumber) {
        this.rowsNumber = rowsNumber;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public Date getCreateDatetime() {
        return createDatetime;
    }

    public void setCreateDatetime(Date createDatetime) {
        this.createDatetime = createDatetime;
    }

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getErrorRecord() {
		return errorRecord;
	}

	public void setErrorRecord(Integer errorRecord) {
		this.errorRecord = errorRecord;
	}
    
    
}