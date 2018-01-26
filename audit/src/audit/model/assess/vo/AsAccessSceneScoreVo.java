package audit.model.assess.vo;

import java.math.BigDecimal;

/**
 * @author xfwang 20150702
 * 现场考查评分体系表
 *
 */
public class AsAccessSceneScoreVo {

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
   private BigDecimal oneLevelScore;
  
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
  private BigDecimal twoLevelScore;
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
  private BigDecimal threeLevelScore;
  
  /**
 * 现场考查评分
 */
 private BigDecimal sceneScore;
 
 /**
 * 个人考查评价意见（重点填写主要存在的问题）
 */
 private String personalIdea;

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

public BigDecimal getOneLevelScore() {
	return oneLevelScore;
}

public void setOneLevelScore(BigDecimal oneLevelScore) {
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

public BigDecimal getTwoLevelScore() {
	return twoLevelScore;
}

public void setTwoLevelScore(BigDecimal twoLevelScore) {
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

public BigDecimal getThreeLevelScore() {
	return threeLevelScore;
}

public void setThreeLevelScore(BigDecimal threeLevelScore) {
	this.threeLevelScore = threeLevelScore;
}

public BigDecimal getSceneScore() {
	return sceneScore;
}

public void setSceneScore(BigDecimal sceneScore) {
	this.sceneScore = sceneScore;
}

public String getPersonalIdea() {
	return personalIdea;
}

public void setPersonalIdea(String personalIdea) {
	this.personalIdea = personalIdea;
}
 
}
