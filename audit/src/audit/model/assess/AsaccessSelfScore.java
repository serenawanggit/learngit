package audit.model.assess;
/**
 * 自评报告考核意见得分表
 * @author yuan
 *
 */
public class AsaccessSelfScore {
 
	private Integer id;
	/**
	 * 意见内容表id
	 */
	private Integer opinionId;
	/**
	 * 得分
	 */
	private String accessSelfScore;
	/**
	 * 自评报告关联表id
	 */
	private Integer accessSelfId;
	/**
	 * 阐述情况  1.合理2.较合理3.不够合理.4.不合理
	 */
	private Integer accessElaborated;
	/**
	 * 总评分意见表id
	 */
	private Integer scoreOpinionId;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getOpinionId() {
		return opinionId;
	}
	public void setOpinionId(Integer opinionId) {
		this.opinionId = opinionId;
	}
	public String getAccessSelfScore() {
		return accessSelfScore;
	}
	public void setAccessSelfScore(String accessSelfScore) {
		this.accessSelfScore = accessSelfScore;
	}
	public Integer getAccessSelfId() {
		return accessSelfId;
	}
	public void setAccessSelfId(Integer accessSelfId) {
		this.accessSelfId = accessSelfId;
	}
	public Integer getAccessElaborated() {
		return accessElaborated;
	}
	public void setAccessElaborated(Integer accessElaborated) {
		this.accessElaborated = accessElaborated;
	}
	public Integer getScoreOpinionId() {
		return scoreOpinionId;
	}
	public void setScoreOpinionId(Integer scoreOpinionId) {
		this.scoreOpinionId = scoreOpinionId;
	}
	
	
}
