package audit.model.assess;

import java.io.Serializable;

public class AsAccessScoreScaleRecord implements Serializable{
    /**
	 * 
	 * AsAccessScoreScaleRecord.java
	 */
	private static final long serialVersionUID = 708740920158998789L;

	private Integer id;

    private Integer accessSpecialtyId;

    private Integer scaleId;

    private Double score;

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

    public Integer getScaleId() {
        return scaleId;
    }

    public void setScaleId(Integer scaleId) {
        this.scaleId = scaleId;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }
}