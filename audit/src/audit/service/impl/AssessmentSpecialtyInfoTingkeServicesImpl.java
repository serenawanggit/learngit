package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentSpecialtyInfoXianchangMapper;
import audit.model.quality.vo.Assess_lecture_tableVo;
import audit.model.quality.vo.Assessment_examination_paper_situation_Vo;
import audit.service.assess.AssessmentSpecialtyInfoXianchangServices;

@Service("AssessmentSpecialtyInfoTingkeServices")
public class AssessmentSpecialtyInfoTingkeServicesImpl implements
		AssessmentSpecialtyInfoXianchangServices {
	@Autowired
	AssessmentSpecialtyInfoXianchangMapper infoXueYuanMapper;

	public void deleteAssess_lecture_tableById(String alt_id) {
		infoXueYuanMapper.deleteAssess_lecture_tableById(alt_id);
	}

	public List<Assess_lecture_tableVo> selectAssess_lecture_tableVo(
			Assess_lecture_tableVo alt) {
		return infoXueYuanMapper.selectAssess_lecture_tableVo(alt);
	}

	public void insertAssess_lecture_table(String cOURSE_SHITUATION,
			String tEACHER_SHITUATION, String fROM_INSPECTION,
			String oVERALL_EVALUA, String pROBLEMS_AND_SUGGESTTIONS,
			String uSERID, String sYEAR, String oBJECT_ID, String tYPE,
			String eVELUATION_DATE, String id, String zId) {
		int num = 0;
		if (id != null) {
			num = infoXueYuanMapper.assess_lecture_tableIsHashById(id);
		} else {
			num = infoXueYuanMapper.assess_lecture_tableIsHashById(zId);
			id = zId;
		}
		if (num > 0) {
			// 修改
			infoXueYuanMapper.updateAssess_lecture_tableById(cOURSE_SHITUATION,
					tEACHER_SHITUATION, fROM_INSPECTION, oVERALL_EVALUA,
					eVELUATION_DATE, id, pROBLEMS_AND_SUGGESTTIONS);
		} else {
			Assess_lecture_tableVo alt = new Assess_lecture_tableVo(
					cOURSE_SHITUATION, tEACHER_SHITUATION, fROM_INSPECTION,
					oVERALL_EVALUA, pROBLEMS_AND_SUGGESTTIONS, uSERID, sYEAR,
					oBJECT_ID, tYPE, eVELUATION_DATE);
			infoXueYuanMapper.insertAssess_lecture_table(alt);
		}

	}

	public int assess_lecture_tableIsHashById(String id) {
		return infoXueYuanMapper.assess_lecture_tableIsHashById(id);
	}

	public List<Assessment_examination_paper_situation_Vo> select_assessment_examination_paper_situation_Vo(
			Assessment_examination_paper_situation_Vo aeps) {
		return infoXueYuanMapper
				.select_assessment_examination_paper_situation_Vo(aeps);
	}

	public void insertAssessment_examination_paper_situation(
			String EXAMINATION_PAPER_SITUATION, String WAYS_READING,
			String GENERAL_EVALUATION_EXAMINATION,
			String PROBLEMS_AND_SUGGESTTIONS, String USERID, String SYEAR,
			String OBJECTID, String TYPE, String EVELUATION_DATE) {
		infoXueYuanMapper.insertAssessment_examination_paper_situation(
				EXAMINATION_PAPER_SITUATION, WAYS_READING,
				GENERAL_EVALUATION_EXAMINATION, PROBLEMS_AND_SUGGESTTIONS,
				USERID, SYEAR, OBJECTID, TYPE, EVELUATION_DATE);
	}

	public void updateAssessment_examination_paper_situation(
			String EXAMINATION_PAPER_SITUATION, String WAYS_READING,
			String GENERAL_EVALUATION_EXAMINATION,
			String PROBLEMS_AND_SUGGESTTIONS, String EVELUATION_DATE, String ID) {
		infoXueYuanMapper.updateAssessment_examination_paper_situation(
				EXAMINATION_PAPER_SITUATION, WAYS_READING,
				GENERAL_EVALUATION_EXAMINATION, PROBLEMS_AND_SUGGESTTIONS,
				EVELUATION_DATE, ID);
	}

	public int assess_examination_paper_situationIsHashById(String id) {
		return infoXueYuanMapper
				.assess_examination_paper_situationIsHashById(id);
	}

	public void deleteAssess_examination_paper_situation(String id) {
		infoXueYuanMapper.deleteAssess_examination_paper_situation(id);
	}

	public String selectSite_visits(String sp_id) {
		return infoXueYuanMapper.selectSite_visits(sp_id);
	}

}
