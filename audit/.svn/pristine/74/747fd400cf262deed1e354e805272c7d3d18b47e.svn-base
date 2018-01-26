package audit.model.assess;

import java.io.Serializable;

/**
 * 自评报告考核意见明细
 * @author L
 *
 */
public class AsAccessCheckReportDetail implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 2121915984739582608L;
	private Integer id;
    /**
     * 考核意见id
     */
    private Integer checkReportId;
    /**
     * 观测点
     */
    private String observationPoint;
    /**
     * 观测点内容
     */
    private String observationContent;
    /**
     * 观测点分值
     */
    private Long observationScore;
    /**
     * 阐述情况
     */
    private Byte observationState;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCheckReportId() {
        return checkReportId;
    }

    public void setCheckReportId(Integer checkReportId) {
        this.checkReportId = checkReportId;
    }

    public String getObservationPoint() {
        return observationPoint;
    }

    public void setObservationPoint(String observationPoint) {
        this.observationPoint = observationPoint == null ? null : observationPoint.trim();
    }

    public String getObservationContent() {
        return observationContent;
    }

    public void setObservationContent(String observationContent) {
        this.observationContent = observationContent == null ? null : observationContent.trim();
    }

    public Long getObservationScore() {
        return observationScore;
    }

    public void setObservationScore(Long observationScore) {
        this.observationScore = observationScore;
    }

    public Byte getObservationState() {
        return observationState;
    }

    public void setObservationState(Byte observationState) {
        this.observationState = observationState;
    }
}