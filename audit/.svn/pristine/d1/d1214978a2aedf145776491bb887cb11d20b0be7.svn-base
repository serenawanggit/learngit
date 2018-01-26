package audit.controller.assessment;

import java.io.UnsupportedEncodingException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.quality.vo.Assess_lecture_tableVo;
import audit.model.quality.vo.Assessment_examination_paper_situation_Vo;
import audit.model.quality.vo.SJQK_Vo;
import audit.model.quality.vo.TkkkQk_Vo;
import audit.service.assess.AssessmentSpecialtyInfoXianchangServices;
import audit.util.CookieUtil;
import audit.util.GetDateUtil;

@Controller
@RequestMapping("AssessmentSpecialtyInfoXianchangController")
public class AssessmentSpecialtyInfoTingkeController {

	@Autowired
	AssessmentSpecialtyInfoXianchangServices services;

	@RequestMapping("insertAssess_lecture_table")
	@ResponseBody
	public void insertAssess_lecture_table(HttpServletRequest request) {
		String COURSE_SHITUATION = request.getParameter("COURSE_SHITUATION");
		String TEACHER_SHITUATION = request.getParameter("TEACHER_SHITUATION");
		String FROM_INSPECTION = request.getParameter("FROM_INSPECTION");
		String OVERALL_EVALUA = request.getParameter("OVERALL_EVALUA");
		String PROBLEMS_AND_SUGGESTTIONS = request
				.getParameter("PROBLEMS_AND_SUGGESTTIONS");
		String SYEAR = request.getParameter("SYEAR");
		String OBJECT_ID = request.getParameter("OBJECT_ID");
		String TYPE = request.getParameter("TYPE");
		String zId = request.getParameter("zId");

		String id = request.getParameter("id");
		String EVELUATION_DATE = GetDateUtil.getDate();
		try {
			String USERID = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			services.insertAssess_lecture_table(COURSE_SHITUATION,
					TEACHER_SHITUATION, FROM_INSPECTION, OVERALL_EVALUA,
					PROBLEMS_AND_SUGGESTTIONS, USERID, SYEAR, OBJECT_ID, TYPE,
					EVELUATION_DATE, id, zId);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	};

	@RequestMapping("deleteAssess_lecture_tableById")
	@ResponseBody
	public void deleteAssess_lecture_tableById(HttpServletRequest request) {
		String alt_id = request.getParameter("alt_id");
		services.deleteAssess_lecture_tableById(alt_id);
	}

	@RequestMapping("selectAssess_lecture_tableVo")
	@ResponseBody
	public TkkkQk_Vo selectAssess_lecture_tableVo(HttpServletRequest request) {
		TkkkQk_Vo tk = new TkkkQk_Vo();
		Assess_lecture_tableVo alt = null;
		String sYEAR = request.getParameter("sYEAR");
		String oBJECT_ID = request.getParameter("oBJECT_ID");
		String tYPE = request.getParameter("tYPE");
		
		String user_name = request.getParameter("user_name");
		String sp_name = request.getParameter("sp_name");
		try {
			String uSERID = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			alt = new Assess_lecture_tableVo(uSERID, sYEAR, oBJECT_ID, tYPE);
			alt.setSp_name(sp_name);
			alt.setUser_name(user_name);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		tk.setList(services.selectAssess_lecture_tableVo(alt));

		alt.setTYPE(2 + "");// 查询总意见
		List<Assess_lecture_tableVo> list = services
				.selectAssess_lecture_tableVo(alt);
		if (list.size() != 0) {
			Assess_lecture_tableVo zong = list.get(0);
			tk.setZong(zong);
		}
		return tk;
	}
	//查询现场考察时间
	@RequestMapping("selectSite_visits")
	@ResponseBody
	public String selectSite_visits(HttpServletRequest request){
		String  sp_id=request.getParameter("specialty_id");
		return 	services.selectSite_visits(sp_id);
	}
	// 试卷情况总体评价表
	@RequestMapping("select_assessment_examination_paper_situation_Vo")
	@ResponseBody
	public SJQK_Vo select_assessment_examination_paper_situation_Vo(
			HttpServletRequest request) {
		SJQK_Vo sjqk_Vo = new SJQK_Vo();
		String sYEAR = request.getParameter("sYEAR");
		String oBJECTID = request.getParameter("oBJECT_ID");
		// String tYPE = request.getParameter("tYPE");
		String sp_name=request.getParameter("sp_name");
		String user_name=request.getParameter("user_name");
		String uSERID = null;
		Assessment_examination_paper_situation_Vo vo = null;
		try {
			uSERID = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			vo = new Assessment_examination_paper_situation_Vo(uSERID, sYEAR,
					oBJECTID);
			vo.setSp_name(sp_name);
			vo.setUser_name(user_name);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		// 列表查询
		vo.setTYPE(1 + "");
		List<Assessment_examination_paper_situation_Vo> list = services
				.select_assessment_examination_paper_situation_Vo(vo);
		sjqk_Vo.setList(list);

		// 查询试卷审阅情况总体评价 type 2
		vo.setTYPE(2 + "");
		List<Assessment_examination_paper_situation_Vo> list2 = services
				.select_assessment_examination_paper_situation_Vo(vo);
		if (list2.size() != 0) {
			Assessment_examination_paper_situation_Vo assess = list2.get(0);
			sjqk_Vo.setAssess(assess);
		}

		// 存在的主要问题及建议
		vo.setTYPE(3 + "");
		List<Assessment_examination_paper_situation_Vo> list3 = services
				.select_assessment_examination_paper_situation_Vo(vo);
		if (list3.size() != 0) {
			Assessment_examination_paper_situation_Vo suggest = list3.get(0);
			sjqk_Vo.setSuggest(suggest);
		}

		return sjqk_Vo;
	}

	@RequestMapping("insertAssessment_examination_paper_situation")
	@ResponseBody
	public SJQK_Vo insertAssessment_examination_paper_situation(
			HttpServletRequest request){
		//试卷情况
		String EXAMINATION_PAPER_SITUATION=request.getParameter("EXAMINATION_PAPER_SITUATION");
		//审读方式
		String WAYS_READING=request.getParameter("WAYS_READING");
		//试卷审阅情况
		String GENERAL_EVALUATION_EXAMINATION=request.getParameter("GENERAL_EVALUATION_EXAMINATION");
		//存在的主要问题以及建议
		String PROBLEMS_AND_SUGGESTTIONS=request.getParameter("PROBLEMS_AND_SUGGESTTIONS");
		
		String SYEAR=request.getParameter("SYEAR");
		String OBJECTID=request.getParameter("OBJECTID");
		String TYPE=request.getParameter("TYPE");
		
		String EVELUATION_DATE=	GetDateUtil.getDate();
		//传过来的id
		String id = request.getParameter("id");
		String USERID=null;
		
		//判断是否存在当前信息
		int num=services.assess_examination_paper_situationIsHashById(id);
//		System.out.println(num);
		if(num>0){
			services.updateAssessment_examination_paper_situation(EXAMINATION_PAPER_SITUATION,
					WAYS_READING, GENERAL_EVALUATION_EXAMINATION, PROBLEMS_AND_SUGGESTTIONS,
					EVELUATION_DATE, id);
		}else{
			try {
				USERID = CookieUtil.getValueByCookie(request, "uvocookie","id");
				services.insertAssessment_examination_paper_situation(EXAMINATION_PAPER_SITUATION,
						WAYS_READING, GENERAL_EVALUATION_EXAMINATION, 
						PROBLEMS_AND_SUGGESTTIONS, USERID, SYEAR, OBJECTID, TYPE, EVELUATION_DATE);
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		return null;
	}
	
	@RequestMapping("deleteAssess_examination_paper_situation")
	@ResponseBody
	public String  deleteAssess_examination_paper_situation(HttpServletRequest request){
		String id=request.getParameter("id");
		services.deleteAssess_examination_paper_situation(id);
		return "删除成功！";
	};
}
