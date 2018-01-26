package audit.dao;

import java.util.List;

import audit.model.quality.vo.Assess_lecture_tableVo;
import audit.model.quality.vo.Assessment_examination_paper_situation_Vo;

public interface AssessmentSpecialtyInfoXianchangMapper {
	/* 课程情况 */
	/* 授课教师情况 */
	/* 考察形式 */
	/* 总体评价 */
	/* 问题及意见 */
	/* 现场考察人id */
	/* 年份 */
	/* 评估对象id */
	/* 评估数据插入类型 */
	/* 评价时间 */
	void insertAssess_lecture_table(Assess_lecture_tableVo alt);

	void deleteAssess_lecture_tableById(String alt_id);

	List<Assess_lecture_tableVo> selectAssess_lecture_tableVo(
			Assess_lecture_tableVo alt);

	int assess_lecture_tableIsHashById(String id);

	void updateAssess_lecture_tableById(String COURSE_SHITUATION,
			String TEACHER_SHITUATION, String FROM_INSPECTION,
			String OVERALL_EVALUA, String EVELUATION_DATE, String id,
			String PROBLEMS_AND_SUGGESTTIONS);

	List<Assessment_examination_paper_situation_Vo> select_assessment_examination_paper_situation_Vo(
			Assessment_examination_paper_situation_Vo aeps);

	void insertAssessment_examination_paper_situation(
			String EXAMINATION_PAPER_SITUATION, String WAYS_READING,
			String GENERAL_EVALUATION_EXAMINATION,
			String PROBLEMS_AND_SUGGESTTIONS, String USERID, String SYEAR,
			String OBJECTID, String TYPE, String EVELUATION_DATE);

	void updateAssessment_examination_paper_situation(
			String EXAMINATION_PAPER_SITUATION, String WAYS_READING,
			String GENERAL_EVALUATION_EXAMINATION,
			String PROBLEMS_AND_SUGGESTTIONS, String EVELUATION_DATE, String ID);
	
	int assess_examination_paper_situationIsHashById(String id);
	
	void deleteAssess_examination_paper_situation(String id);
	
	String selectSite_visits(String sp_id);
}
