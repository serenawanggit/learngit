package audit.service.access;

public interface AsAccessScoreScaleDetailI {
  
	/**
	 * 保存支撑材料分数
	 * @param scorScaleId
	 * @param conformity
	 * @param selfScore
	 * @param generalScoreId
	 */
	void insertPeneralSelfScore(Integer scorScaleId,Integer conformity,Float selfScore,Integer generalScoreId);

	/**
	 * 修改支撑材料分数
	 * @param conformity
	 * @param selfScore
	 * @param scorScaleId
	 * @param generalScoreId
	 */
	void updatePeneralSelfScore(Integer conformity,Float selfScore,Integer scorScaleId,Integer generalScoreId);

}
