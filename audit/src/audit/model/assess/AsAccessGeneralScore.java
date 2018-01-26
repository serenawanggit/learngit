package audit.model.assess;

public class AsAccessGeneralScore {
	/**
	 * ID
	 */
    private Integer id;
  
    /**
	 * 用户id
	 */
    private Integer useid;
 
    /**
	 * 网评总分
	 */
    private Double generalScore;

    /**
	 * 总意见
	 */
    private String generalOpinion;

    /**
	 * 评分时间
	 */
    private String generalTime;

    /**
	 * 专业id
	 */
    private String specialtyId;

    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUseid() {
		return useid;
	}

	public void setUseid(Integer useid) {
		this.useid = useid;
	}

	public Double getGeneralScore() {
        return generalScore;
    }

    public void setGeneralScore(Double generalScore) {
        this.generalScore = generalScore;
    }

    public String getGeneralOpinion() {
        return generalOpinion;
    }

    public void setGeneralOpinion(String generalOpinion) {
        this.generalOpinion = generalOpinion == null ? null : generalOpinion.trim();
    }

    public String getGeneralTime() {
        return generalTime;
    }

    public void setGeneralTime(String generalTime) {
        this.generalTime = generalTime == null ? null : generalTime.trim();
    }

    public String getSpecialtyId() {
        return specialtyId;
    }

    public void setSpecialtyId(String specialtyId) {
        this.specialtyId = specialtyId == null ? null : specialtyId.trim();
    }
}