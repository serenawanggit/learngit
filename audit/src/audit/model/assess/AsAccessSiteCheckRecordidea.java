package audit.model.assess;

public class AsAccessSiteCheckRecordidea {
    private Integer id;

    private Integer userId;

    private Integer accessSpecialtyId;

    private Integer standardDetailId;

    private Integer recordType;

    private String personalidea;

    private String userName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getAccessSpecialtyId() {
        return accessSpecialtyId;
    }

    public void setAccessSpecialtyId(Integer accessSpecialtyId) {
        this.accessSpecialtyId = accessSpecialtyId;
    }

    public Integer getStandardDetailId() {
        return standardDetailId;
    }

    public void setStandardDetailId(Integer standardDetailId) {
        this.standardDetailId = standardDetailId;
    }

    public Integer getRecordType() {
        return recordType;
    }

    public void setRecordType(Integer recordType) {
        this.recordType = recordType;
    }

    public String getPersonalidea() {
        return personalidea;
    }

    public void setPersonalidea(String personalidea) {
        this.personalidea = personalidea == null ? null : personalidea.trim();
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }
}