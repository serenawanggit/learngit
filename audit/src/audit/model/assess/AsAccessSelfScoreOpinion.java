package audit.model.assess;

/**
 * 网评专家总评分意见表
 * @author yuan
 *
 */
public class AsAccessSelfScoreOpinion {

	
	private Integer id;
	/**
	 * 网评用户id
	 */
	private  Integer useriId;
	/**
	 * 总分
	 */
	private  Float score;
	/**
	 * 网评专家综合意见（手动输入的）
	 */
	private  String comprehensiveOpinionContent;
	/**
	 * 评分时间
	 */
	private  String accessSelfDate;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUseriId() {
		return useriId;
	}
	public void setUseriId(Integer useriId) {
		this.useriId = useriId;
	}
	public Float getScore() {
		return score;
	}
	public void setScore(Float score) {
		this.score = score;
	}
	public String getComprehensiveOpinionContent() {
		return comprehensiveOpinionContent;
	}
	public void setComprehensiveOpinionContent(String comprehensiveOpinionContent) {
		this.comprehensiveOpinionContent = comprehensiveOpinionContent;
	}
	public String getAccessSelfDate() {
		return accessSelfDate;
	}
	public void setAccessSelfDate(String accessSelfDate) {
		this.accessSelfDate = accessSelfDate;
	}
	
	
}
