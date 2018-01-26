package audit.model.assess;

import java.io.Serializable;

/**
 * 专业自评记录
 * @author L
 *
 */
public class AsAccessSelfEvalutionRecord implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 4806724713272085305L;
	private Integer id;
    /**
     * 评估专业id
     */
    private Integer accessSpecialtyId;
    /**
     * 专业评估指标体系id
     */
    private Integer standardId;
    /**
     * 评估体系名称id
     */
    private Integer detailId;
    /**
     * 自评分值
     */
    private Double score;
    /**
     * 支撑材料
     */
    private String datas;

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

    public Integer getStandardId() {
        return standardId;
    }

    public void setStandardId(Integer standardId) {
        this.standardId = standardId;
    }

    public Integer getDetailId() {
        return detailId;
    }

    public void setDetailId(Integer detailId) {
        this.detailId = detailId;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public String getDatas() {
        return datas;
    }

    public void setDatas(String datas) {
        this.datas = datas == null ? null : datas.trim();
    }
}