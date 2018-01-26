package audit.service.impl.access;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAccessScoreScaleDetailMapper;
import audit.service.access.AsAccessScoreScaleDetailI;

@Service("asAccessScoreScaleDetailI")
public class AsAccessScoreScaleDetailImpl implements AsAccessScoreScaleDetailI {
    @Autowired
    private AsAccessScoreScaleDetailMapper asAccessScoreScaleDetailMapper;
	public void insertPeneralSelfScore(Integer scorScaleId, Integer conformity,
			Float selfScore, Integer generalScoreId) {
		asAccessScoreScaleDetailMapper.insertPeneralSelfScore(scorScaleId, conformity, selfScore, generalScoreId);
	}
	public void updatePeneralSelfScore(Integer conformity, Float selfScore,
			Integer scorScaleId, Integer generalScoreId) {
		asAccessScoreScaleDetailMapper.updatePeneralSelfScore(conformity, selfScore, scorScaleId, generalScoreId);
	}

}
