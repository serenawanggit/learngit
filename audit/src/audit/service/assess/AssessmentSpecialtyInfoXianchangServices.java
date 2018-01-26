package audit.service.assess;

import java.util.List;

import audit.model.quality.vo.Assess_lecture_tableVo;
import audit.model.quality.vo.Assessment_examination_paper_situation_Vo;


public interface AssessmentSpecialtyInfoXianchangServices {
	void insertAssess_lecture_table(
			String	COURSE_SHITUATION,  
			String	TEACHER_SHITUATION, 
			String	FROM_INSPECTION,
			String	OVERALL_EVALUA,	
			String	PROBLEMS_AND_SUGGESTTIONS,
			String	USERID,
			String	SYEAR,				
			String	OBJECT_ID,				
			String	TYPE,		
			String	EVELUATION_DATE,
			String  id,
			String  zId
			);
//	void insertAssess_lecture_table_(
//			String	COURSE_SHITUATION,  
//			String	TEACHER_SHITUATION, 
//			String	FROM_INSPECTION,
//			String	OVERALL_EVALUA,	
//			String	PROBLEMS_AND_SUGGESTTIONS,
//			String	USERID,
//			String	SYEAR,				
//			String	OBJECT_ID,				
//			String	TYPE,		
//			String	EVELUATION_DATE,
//			String  id,
//			String  zId
//			);
	void deleteAssess_lecture_tableById(String  alt_id);
	List<Assess_lecture_tableVo> selectAssess_lecture_tableVo(Assess_lecture_tableVo alt);
	int assess_lecture_tableIsHashById(String id);

//试卷情况总体评价表
	List<Assessment_examination_paper_situation_Vo> select_assessment_examination_paper_situation_Vo(
			Assessment_examination_paper_situation_Vo aeps);
	void insertAssessment_examination_paper_situation(
			String EXAMINATION_PAPER_SITUATION,
			String WAYS_READING,
			String GENERAL_EVALUATION_EXAMINATION,
			String PROBLEMS_AND_SUGGESTTIONS,
			String USERID ,
			String SYEAR ,
			String OBJECTID ,
			String TYPE ,
			String EVELUATION_DATE); 
	void updateAssessment_examination_paper_situation(
			String EXAMINATION_PAPER_SITUATION, String WAYS_READING,
			String GENERAL_EVALUATION_EXAMINATION,
			String PROBLEMS_AND_SUGGESTTIONS, String EVELUATION_DATE, String ID);
	
	int assess_examination_paper_situationIsHashById(String id);
	
	void deleteAssess_examination_paper_situation(String id);
	
	String selectSite_visits(String sp_id);

}
