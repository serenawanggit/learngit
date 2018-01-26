package audit.model.assess;

import java.io.Serializable;
import java.util.Date;
/**
 * 自评分审核意见
 * @author L
 *
 */
public class AsAccessCheckRecordInfo implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 8289419287591071653L;
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
     * 标准id
     */
    private Integer standardId;
    /**
     * 总分
     */
    private Double totalScore;
    /**
     * 意见
     */
    private String totalSuggest;
    /**
     * 审核人id
     */
    private Integer useriId;
    /**
     * 创建时间
     */
    private Date createDatetime;

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

    public Integer getStandardId() {
        return standardId;
    }

    public void setStandardId(Integer standardId) {
        this.standardId = standardId;
    }

    public Double getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(Double totalScore) {
        this.totalScore = totalScore;
    }

    public String getTotalSuggest() {
        return totalSuggest;
    }

    public void setTotalSuggest(String totalSuggest) {
        this.totalSuggest = totalSuggest == null ? null : totalSuggest.trim();
    }

    public Integer getUseriId() {
        return useriId;
    }

    public void setUseriId(Integer useriId) {
        this.useriId = useriId;
    }

    public Date getCreateDatetime() {
        return createDatetime;
    }

    public void setCreateDatetime(Date createDatetime) {
        this.createDatetime = createDatetime;
    }
}