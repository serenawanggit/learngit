package audit.controller.assessment;

import java.io.ByteArrayInputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.poifs.filesystem.DirectoryEntry;
import org.apache.poi.poifs.filesystem.DocumentEntry;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.assess.vo.As_Assess_SupportVo;
import audit.model.assess.vo.As_assess_reportVo;
import audit.model.quality.vo.Assess_comment_rectificationVo;
import audit.model.quality.vo.ContentInfo;
import audit.model.quality.vo.LookReportVo;
import audit.model.quality.vo.ZgList;
import audit.service.assess.AssessmentSpecialtyInfoWangpingServices;
import audit.util.CookieUtil;
import audit.util.File2Html;
import audit.util.GetDateUtil;
import audit.util.lzr.LzrInitParma;

@Controller
@RequestMapping("AssessmentSpecialtyInfoWangPingController")
public class AssessmentSpecialtyInfoWangpingController {

	@Autowired
	AssessmentSpecialtyInfoWangpingServices services;

	@RequestMapping("findWangPingList")
	@ResponseBody
	public List<ZgList> findWangPingList(HttpServletRequest request) {
		String tYear = request.getParameter("tYear");
		List<ZgList> findAssessmentList = null;
		try {
			String userid = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			try {
				//查出type>=3 的 网评 ， 现场考察专家， 现场考察组长
				findAssessmentList = services.findWangpingList(tYear, userid,request.getParameter("struts"));
//				System.out.println(findAssessmentList.get(0).getEngineering());
				Map<Object, Object> map =new HashMap<Object, Object>(); 
				map.put("userid", userid);
				for (ZgList zgList : findAssessmentList) {
					map.put("specialty_id", zgList.getS_info_id());
					List<Map<Object, Object>> list=	services.selcteWangPStruts(map);
					if(list.size()==0){
						zgList.setStruts(0);
					}else{
						zgList.setStruts((Integer)list.get(0).get("struts"));
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return findAssessmentList;
	};

	@RequestMapping("getTypeForSpecialty")
	@ResponseBody
	public List<String> getTypeForSpecialty(HttpServletRequest request) {
		String specialty_id = request.getParameter("specialtyId");
		String userid = null;
		try {
			userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		List<String> types = services.getTypeForSpecialty(userid, specialty_id);
		return types;
	}

	@RequestMapping("findRectificationConentInfo")
	@ResponseBody
	public List<ContentInfo> findRectificationConentInfo(
			HttpServletRequest request) {
		String specialty_id = request.getParameter("specialty_id");
		String ryear = request.getParameter("dateYear");
		List<ContentInfo> findRectificationConentInfo = null;
		try {
			String userid = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			try {
				findRectificationConentInfo = services
						.findRectificationConentInfo(specialty_id, userid,
								ryear, request);
			} catch (Exception e) {
				e.printStackTrace();
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return findRectificationConentInfo;
	}

	@RequestMapping("insertAssess_comment_rectification")
	@ResponseBody
	public void insertAssess_comment_rectification(HttpServletRequest request) {
		String SYSID = request.getParameter("SYSID");
		String COMMENT_CONTENT = request.getParameter("COMMENT_CONTENT");
		String ITEM = request.getParameter("ITEM");
		String SYEAR = request.getParameter("SYEAR");
		String COMMENT_TYPE = request.getParameter("COMMENT_TYPE");
		String COMMENT_SUGGESTIONS = request.getParameter("COMMENT_SUGGESTIONS");
		String specialty_id = request.getParameter("specialty_id");
		String syscore = request.getParameter("syscore");
		String grade = request.getParameter("grade");

		String COMMENT_TIME = GetDateUtil.getDate();
		String COMMENT_USERID;
		try {
			COMMENT_USERID = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			services.insertAssess_comment_rectification(SYSID, COMMENT_USERID,
					COMMENT_TIME, COMMENT_CONTENT, ITEM, SYEAR, COMMENT_TYPE,
					COMMENT_SUGGESTIONS, specialty_id,syscore,grade);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@RequestMapping("findReport")
	@ResponseBody
	public As_assess_reportVo findReport(HttpServletRequest request) {
		String specialty_id = request.getParameter("specialty_id");
		String sysId = request.getParameter("sysId");
		String rYear = request.getParameter("rYear");
		String specialty_name= request.getParameter("specialty_name");
		As_assess_reportVo findReport = null;
		try {
			String userid = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			findReport = services.findReport(specialty_id, sysId, userid,
					//查询usertype
					request, rYear,specialty_name);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		if (findReport == null) {
			findReport = new As_assess_reportVo();
		}
		return findReport;
	}

	@RequestMapping("getWangPingZongComment")
	@ResponseBody
	public Assess_comment_rectificationVo getWangPingZongComment(
			HttpServletRequest request) {
		String specialty_id = request.getParameter("specialty_id");
		Assess_comment_rectificationVo wangPingZongComment = null;
		String userid;
		try {
			userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			wangPingZongComment = services.getWangPingZongComment(userid,
					specialty_id, 2 + "");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return wangPingZongComment;
	}

	@RequestMapping("findAs_assess_support")
	@ResponseBody
	public List<As_Assess_SupportVo> findAs_assess_support(
			HttpServletRequest request) {
		String Sysid = request.getParameter("Sysid");
		String Ryear = request.getParameter("Ryear");
		String Specialty_id = request.getParameter("Specialty_id");
		String specialty_name = request.getParameter("specialty_name");
		String Report_id = request.getParameter("Report_id");


		List<As_Assess_SupportVo> findAs_assess_support = null;
		try {
			String Userid = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			findAs_assess_support = services.findAs_assess_support(Sysid,
					Ryear, Userid, Specialty_id, Report_id, request,specialty_name);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return findAs_assess_support;
	};

	@RequestMapping("fileToHtml")
	@ResponseBody
	public ContentInfo fileToHtml(HttpServletRequest request) {
		String fileAddr = request.getParameter("fileAdrr");
		fileAddr = URLDecoder.decode(fileAddr);
		ContentInfo fileToHtml = null;
		try {
			fileToHtml = File2Html.fileToHtml(fileAddr, request);
		} catch (Exception e) {
			fileToHtml = null;
			e.printStackTrace();
		}
		return fileToHtml;
	}

	@RequestMapping("getAllReports")
	@ResponseBody
	public List<LookReportVo> getAllReports(HttpServletRequest request) {
		Map<Object, Object> map=LzrInitParma.getMap(request, "tYear","specialty_id","specialty_name");
		List<LookReportVo> allReports = null;
		try {
		/*	String userid = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			map.put("userid", null);*/
			allReports = services.getAllReports(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return allReports;
	};

	@RequestMapping("updateAssessment_task_pass")
	@ResponseBody
	public void updateAssessment_task_pass(HttpServletRequest request) {
		Map<Object, Object> map =new HashMap<Object, Object>();
		map=LzrInitParma.getMap(request, "struts","specialty_id");
		
		try {
			String userid = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			map.put("userid", userid);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		//查询是网评状态表是否有记录
		List<Map<Object, Object>> list=services.selcteWangPStruts(map);
		//有
		if(list!=null&&list.size()!=0){
			services.updateWangPStruts(map);
		}else{
			services.insertWangPStruts(map);
		}
	}
	

	@RequestMapping("getAllData")
	@ResponseBody
	public List<Map<String, Object>> getAllData(HttpServletRequest request) {
		Map<Object, Object> map = LzrInitParma.getMap(request, "SYEAR","specialtyId","specialty_name");
		List<Map<String, Object>> allData = null;
		try {
			String userid = CookieUtil.getValueByCookie(request, "uvocookie",
					"id");
			map.put("userid", userid);
			allData = services.getAllData(map);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return allData;
	}

	@RequestMapping("getUserName")
	@ResponseBody
	public String getUserName(HttpServletRequest request) {
		String userId = null;
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return services.getUserName(userId);
	}

	@RequestMapping("downWordHtml")
	public String exportWordHtml(@RequestParam Map<String, String> params,
			HttpServletRequest request, HttpServletResponse response) {

		String content2 = params.get("contents");
		String speName = params.get("speName");
		try {
			// word内容
			String content = "<html><body>" + "" + content2 + "</body></html>";
			byte b[] = content.getBytes("utf-8"); // 这里是必须要设置编码的，不然导出中文就会乱码。
			ByteArrayInputStream bais = new ByteArrayInputStream(b);// 将字节数组包装到流中
			/*
			 * 关键地方 生成word格式
			 */
			POIFSFileSystem poifs = new POIFSFileSystem();
			DirectoryEntry directory = poifs.getRoot();
			DocumentEntry documentEntry = directory.createDocument(
					"WordDocument", bais);
			// 输出文件
			String fileName = speName;
			request.setCharacterEncoding("utf-8");
			response.setContentType("application/msword");// 导出word格式
			response.addHeader("Content-Disposition", "attachment;filename="
					+ new String((fileName + ".doc").getBytes(), "iso-8859-1"));

			OutputStream ostream = response.getOutputStream();
			poifs.writeFilesystem(ostream);
			bais.close();
			ostream.close();
		} catch (Exception e) {
			// AppUtils.logError("导出出错：%s", e.getMessage());
			e.printStackTrace();
		}

		return null;
	}

	@RequestMapping("getAs_assess_supportById")
	@ResponseBody
	public As_Assess_SupportVo getAs_assess_supportById(
			HttpServletRequest request) {
		String supportId = request.getParameter("supportId");
		As_Assess_SupportVo vo = services.getAs_assess_supportById(supportId,
				request);
		return vo;
	}

	@RequestMapping("selectOrganizationName")
	@ResponseBody
	public String selectOrganizationName(HttpServletRequest request) {
		String sp_id = request.getParameter("sp_id");
		String Userid;
		String organizationName = null;
		try {
			Userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			organizationName = services.selectOrganizationName(Userid, sp_id);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return organizationName;
	}
	@RequestMapping("selectSysName")
	@ResponseBody
	public String selectSysName(HttpServletRequest request){
		String sid=request.getParameter("sid");
		return services.selectSysName(sid);
	}
	//查询所专业名称
	@RequestMapping("selectZyName")
	@ResponseBody
	public List<String> selectZyName(){
		return services.selectZyName();
	}
	
	//根据专业查询网评信息
	@RequestMapping("getWangpingInfo")
	@ResponseBody
	public Assess_comment_rectificationVo getWangpingInfo(HttpServletRequest request){
		String sysId = "";
		if(request.getParameter("SYSID")!=null && !"null".equals(request.getParameter("SYSID"))) sysId = request.getParameter("SYSID");
		String item = "";
		if(request.getParameter("ITEM")!=null && !"null".equals(request.getParameter("ITEM"))) item = request.getParameter("ITEM");
		String specialty_id = "";
		if(request.getParameter("specialty_id")!=null && !"null".equals(request.getParameter("specialty_id"))) specialty_id = request.getParameter("specialty_id");
		try {
			String Userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			Assess_comment_rectificationVo wangPingTiXiComment = services.getWangPingTiXiComment(Userid, specialty_id, item, sysId);
			return wangPingTiXiComment;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
	//根据专业查询网评信息
	@RequestMapping("findAllWangpingInfo")
	@ResponseBody
	public List<Assess_comment_rectificationVo> findAllWangpingInfo(HttpServletRequest request){
		String SYEAR = request.getParameter("SYEAR");
		String item = request.getParameter("ITEM");
		String specialty_id = request.getParameter("specialtyId");
		try {
			String Userid = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			List<Assess_comment_rectificationVo> findAllWangpingInfo = services.findAllWangpingInfo(Userid, specialty_id, item, SYEAR);
			return findAllWangpingInfo;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	

	
}
