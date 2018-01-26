package audit.model.assess;

import java.io.Serializable;
import java.util.Date;
/**
 * 自评考核得分
 * @author L
 *
 */
public class AsAccessCheckScoreInfo implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 4681721804373017821L;
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
     * 总分
     */
    private Long totalScore;
    /**
     * 综合评价意见
     */
    private String totalSuggest;
    /**
     * 评价人员id
     */
    private Integer userId;
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

    public Long getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(Long totalScore) {
        this.totalScore = totalScore;
    }

    public String getTotalSuggest() {
        return totalSuggest;
    }

    public void setTotalSuggest(String totalSuggest) {
        this.totalSuggest = totalSuggest == null ? null : totalSuggest.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getCreateDatetime() {
        return createDatetime;
    }

    public void setCreateDatetime(Date createDatetime) {
        this.createDatetime = createDatetime;
    }
}