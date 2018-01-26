package audit.model.assess;

import java.io.Serializable;

/**
 * 自评考核得分明细
 * @author L
 *
 */
public class AsAccessCheckScoreDetail implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -8054530105850128912L;
	private Integer id;
    /**
     * 专业评估id
     */
    private Integer accessId;
    /**
     * 专业id
     */
    private Integer specialtyId;
    /**
     * 意见id
     */
    private Integer checkScoreId;
    /**
     * 阐述情况
     */
    private Byte suggestState;
    /**
     * 观测点分值
     */
    private Double observationScore;

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

    public Integer getSpecialtyId() {
        return specialtyId;
    }

    public void setSpecialtyId(Integer specialtyId) {
        this.specialtyId = specialtyId;
    }

    public Integer getCheckScoreId() {
        return checkScoreId;
    }

    public void setCheckScoreId(Integer checkScoreId) {
        this.checkScoreId = checkScoreId;
    }

    public Byte getSuggestState() {
        return suggestState;
    }

    public void setSuggestState(Byte suggestState) {
        this.suggestState = suggestState;
    }

    public Double getObservationScore() {
        return observationScore;
    }

    public void setObservationScore(Double observationScore) {
        this.observationScore = observationScore;
    }
}