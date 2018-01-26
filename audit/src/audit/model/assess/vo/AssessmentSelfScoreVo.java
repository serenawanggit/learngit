package audit.model.assess.vo;

/**
 * 网评查看自评分类
 * @author yuan
 *
 */
public class AssessmentSelfScoreVo {
	/**
	 * 一级指标id
	 */
   private Integer oneId;
	/**
	 * 一级指标名字
	 */
   private String oneLevelName;	
   /**
	 * 一级指标分数
	 */
   private Float oneLevelScore;
  
	/**
	 * 二级指标id
	 */
  private Integer twoId;
	/**
	 * 二级指标名字
	 */
  private String twoLevelName;
  /**
 	 * 二级指标分数
 	 */
    private Float twoLevelScore;
	/**
	 * 观测点id
	 */
     private Integer threeId;
  	/**
	 * 观测点名字
	 */
     private String threeLevelName;
    /**
	 * 观测点分数
	 */
     private Float threeLevelScore;
     /**
      * 自评分
      */
     private  Float selfScore;
     
     /**
      * 支撑材料
      */
     private  String datas;
     /**
      * 量化指标名称
      */
     private String measureName;
	public Integer getOneId() {
		return oneId;
	}
	public void setOneId(Integer oneId) {
		this.oneId = oneId;
	}
	public String getOneLevelName() {
		return oneLevelName;
	}
	public void setOneLevelName(String oneLevelName) {
		this.oneLevelName = oneLevelName;
	}
	public Float getOneLevelScore() {
		return oneLevelScore;
	}
	public void setOneLevelScore(Float oneLevelScore) {
		this.oneLevelScore = oneLevelScore;
	}
	public Integer getTwoId() {
		return twoId;
	}
	public void setTwoId(Integer twoId) {
		this.twoId = twoId;
	}
	public String getTwoLevelName() {
		return twoLevelName;
	}
	public void setTwoLevelName(String twoLevelName) {
		this.twoLevelName = twoLevelName;
	}
	public Float getTwoLevelScore() {
		return twoLevelScore;
	}
	public void setTwoLevelScore(Float twoLevelScore) {
		this.twoLevelScore = twoLevelScore;
	}
	public Integer getThreeId() {
		return threeId;
	}
	public void setThreeId(Integer threeId) {
		this.threeId = threeId;
	}
	public String getThreeLevelName() {
		return threeLevelName;
	}
	public void setThreeLevelName(String threeLevelName) {
		this.threeLevelName = threeLevelName;
	}
	public Float getThreeLevelScore() {
		return threeLevelScore;
	}
	public void setThreeLevelScore(Float threeLevelScore) {
		this.threeLevelScore = threeLevelScore;
	}
	public Float getSelfScore() {
		return selfScore;
	}
	public void setSelfScore(Float selfScore) {
		this.selfScore = selfScore;
	}
	public String getDatas() {
		return datas;
	}
	public void setDatas(String datas) {
		this.datas = datas;
	}
	public String getMeasureName() {
		return measureName;
	}
	public void setMeasureName(String measureName) {
		this.measureName = measureName;
	}

     
}
