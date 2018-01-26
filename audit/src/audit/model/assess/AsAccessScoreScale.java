package audit.model.assess;

import java.io.Serializable;

/**
 * 评分量表
 * @author L
 *
 */
public class AsAccessScoreScale implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -5484106963706030358L;
	private Integer id;
    /**
     * 评估体系名称id
     */
    private Integer detailId;
    /**
     * 计算公式
     */
    private String scale;
    /**
     * 计算公式描述
     */
    private String scaleRemark;
    
    private Double score;
	
    public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDetailId() {
        return detailId;
    }

    public void setDetailId(Integer detailId) {
        this.detailId = detailId;
    }

    public String getScale() {
        return scale;
    }

    public void setScale(String scale) {
        this.scale = scale == null ? null : scale.trim();
    }

    public String getScaleRemark() {
        return scaleRemark;
    }

    public void setScaleRemark(String scaleRemark) {
        this.scaleRemark = scaleRemark == null ? null : scaleRemark.trim();
    }
}