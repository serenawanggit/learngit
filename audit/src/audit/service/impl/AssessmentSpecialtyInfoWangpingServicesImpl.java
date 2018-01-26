package audit.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentSpecialtyInfoWangpingMapper;
import audit.model.assess.vo.As_Assess_SupportVo;
import audit.model.assess.vo.As_assess_reportVo;
import audit.model.quality.vo.Assess_comment_rectificationVo;
import audit.model.quality.vo.ContentInfo;
import audit.model.quality.vo.LookReportVo;
import audit.model.quality.vo.ZgList;
import audit.service.assess.AssessmentSpecialtyInfoWangpingServices;
import audit.util.ChineseToEnglish;
import audit.util.File2Html;
import audit.util.JacobUtil;
import audit.util.POIReadExcelToHtml;
import audit.util.StringFilterTest;

@Service("AssessmentSpecialtyInfoWangpingServices")
public class AssessmentSpecialtyInfoWangpingServicesImpl implements
		AssessmentSpecialtyInfoWangpingServices {
	@Autowired
	AssessmentSpecialtyInfoWangpingMapper infoWangPingMapper;

	public List<ZgList> findWangpingList(String tYear, String userid,String struts)
			throws Exception {
		List<ZgList> findWangPingList = infoWangPingMapper.findWangPingList(
				tYear, userid,struts);

		Date nowdate = new Date();
		
		Map<Integer, ZgList> map = new HashMap<Integer, ZgList>();
		for (ZgList zgList : findWangPingList) {
			// 处理时间是否 网评时间
			String comment_DATE = zgList.getCOMMENT_DATE();
			String[] split = comment_DATE.split("~");
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd",
					Locale.CHINA);
			if (split.length != 0) {
				String time = split[1];
				// 默认给他推迟一天 避免日期为当天日期，显示过期
				Integer num = time.lastIndexOf("-");
				String ri = time.substring(num + 1);
				Integer ri1 = Integer.parseInt(ri);
				ri1 = ri1 + 1;
				time = time.substring(0, num + 1) + ri1;

				Date d = sdf.parse(time);
				boolean flag = d.after(nowdate);
				if (!flag) {
					zgList.setIspass(1);// 表示过期了
				}
			} else {
				zgList.setIspass(1);// 表示过期了
			}

			// 现场考察时间
			String site_VISITS = zgList.getSITE_VISITS();
			String[] split1 = site_VISITS.split("~");
			if (split1.length != 0) {
				String time1 = split1[1];
				Date d = sdf.parse(time1);
				boolean flag2 = d.before(nowdate);
				if (flag2) {
					// System.out.print("早于今天");
					zgList.setXispass(1);// 表示已经过期了
				} else {
					// System.out.print("晚于今天");
				}
			} else {
				zgList.setXispass(1);// 表示已经过期了
			}

		}

		List<Integer> isP = new ArrayList<Integer>();
		for (ZgList zgList : findWangPingList) {
			// 记录以评 专业
			int inter_people_zt = zgList.getStruts();
			int s_info_id = zgList.getS_info_id();
			if (inter_people_zt == 1) {
				isP.add(s_info_id);
			}
			map.put(s_info_id, zgList);
		}
		// 设置为以评
		for (int i = 0; i < isP.size(); i++) {
			Integer integer = isP.get(i);
			ZgList zgList = map.get(integer);
			zgList.setStruts(1);
			map.put(integer, zgList);
		}

		findWangPingList.clear();

		Collection<ZgList> values = map.values();
		for (ZgList zgList : values) {

			findWangPingList.add(zgList);
		}
		return findWangPingList;
	}

	public List<ContentInfo> findRectificationConentInfo(String specialty_id,
			String userid, String ryear, HttpServletRequest request)
			throws Exception {
		List<ContentInfo> findConentInfo = infoWangPingMapper
				.findRectificationConentInfo(specialty_id, userid, ryear);

		for (ContentInfo contentInfo : findConentInfo) {
			// 查询总意见
			Assess_comment_rectificationVo wangPingZongComment = infoWangPingMapper
					.getWangPingZongComment(userid, specialty_id, 1 + "");
			if (wangPingZongComment != null) {
				String comment_content = wangPingZongComment
						.getComment_suggestions();
				contentInfo.setContentblack(comment_content);
			}

			String file_address = contentInfo.getFILE_address();
			int index = file_address.lastIndexOf(".");
			String file_TYPE = file_address.substring(index + 1);

			String files_NAME = contentInfo.getFILES_NAME();

			// 处理括号问题
			String fileName1 = files_NAME.replace("(", "");
			String fileName2 = fileName1.replace("（", "");
			String fileName3 = fileName2.replace("）", "");
			files_NAME = fileName3.replace(")", "");
			// 过滤 去掉特殊字符
			files_NAME = StringFilterTest.StringFilter(files_NAME);

			String pingYin = ChineseToEnglish.getPingYin(files_NAME);

			String realPath = request.getSession().getServletContext()
					.getRealPath("/");
			String filePathabsolute = realPath + pingYin + ".html";
			String filePath = pingYin + ".html";
			if ("doc".equals(file_TYPE) || "docx".equals(file_TYPE)) {
				try {
					Boolean flag = JacobUtil.wordToHtml(file_address, filePathabsolute);
					if(!flag){
						// 如果格式不支持
						contentInfo.setStruts(2);
						// 就服务器地址返回出去
						contentInfo.setFilePath(file_address);
					}else{
						contentInfo.setFilePath(filePath);
					}
				} catch (Exception e) {
					// 如果格式不支持
					contentInfo.setStruts(2);
					// 就服务器地址返回出去
					contentInfo.setFilePath(file_address);
					e.printStackTrace();
				}
			} else if ("xls".equals(file_TYPE) || "xlsx".equals(file_TYPE)) {
				try {
					String excel2Hmtl = POIReadExcelToHtml
							.Excel2Hmtl(file_address);
					contentInfo.setContentMessge(excel2Hmtl);
				} catch (Exception e) {
					// 如果格式不支持
					contentInfo.setStruts(2);
					// 就服务器地址返回出去
					contentInfo.setFilePath(file_address);
					e.printStackTrace();
				}
			} else {
				// 如果格式不支持
				contentInfo.setStruts(2);
				// 就服务器地址返回出去
				contentInfo.setFilePath(file_address);
			}
		}

		return findConentInfo;
	}

	public void insertAssess_comment_rectification(String SYSID,
		String COMMENT_USERID, String COMMENT_TIME, String COMMENT_CONTENT,
		String ITEM, String SYEAR, String COMMENT_TYPE,
		String COMMENT_SUGGESTIONS, String specialty_id,
		String syscore, String grade) throws Exception {

		int num = 0;
		// 总意见
		if ("2".equals(COMMENT_TYPE)) {
			num = infoWangPingMapper.findIsHaveAssess_comment_rectification_Zong(COMMENT_USERID, specialty_id, ITEM);
		} else {
			num = infoWangPingMapper.findIsHaveAssess_comment_rectification_TiXi(COMMENT_USERID, specialty_id, ITEM, SYSID);
		}
		//单独意见
		if (num > 0) {
			if ("1".equals(COMMENT_TYPE)) {
				infoWangPingMapper.updateAssess_comment_rectification_comment_content(COMMENT_CONTENT, COMMENT_USERID, specialty_id,ITEM, SYSID,syscore,grade);
			} else if ("2".equals(COMMENT_TYPE)) {
				infoWangPingMapper.updateAssess_comment_rectification_comment_suggestions(COMMENT_CONTENT, COMMENT_USERID, specialty_id,ITEM, COMMENT_SUGGESTIONS);
			}
		} else {
			infoWangPingMapper.insertAssess_comment_rectification(SYSID,COMMENT_USERID, COMMENT_TIME, COMMENT_CONTENT, ITEM, SYEAR,COMMENT_TYPE, COMMENT_SUGGESTIONS, specialty_id,syscore,grade);
		}
	}

	public As_assess_reportVo findReport(String specialty_id, String sysId,
			String userid, HttpServletRequest request, String rYear,String specialty_name)
			throws Exception {

		As_assess_reportVo report = infoWangPingMapper.findReport(specialty_id,
				sysId, userid, rYear,specialty_name);
		
		Assess_comment_rectificationVo wangPingTiXiComment = infoWangPingMapper
				.getWangPingTiXiComment(userid, specialty_id, 2 + "", sysId);
		
		String comment_content = "";
		if (wangPingTiXiComment != null) {
			comment_content = wangPingTiXiComment.getComment_content();
		}

		if (report == null) {
			report = new As_assess_reportVo();
			report.setBLACKCONTENT(comment_content);
		} else {
			// 如果输入内容不为空
			if (wangPingTiXiComment != null) {
				report.setBLACKCONTENT(comment_content);
			}

			if (report.getENTER_CONTENT() == "") {
				String file_address = report.getUPLOAD_ADDRESS();
				// 获得文件名
				String files_NAME = report.getUPLOAD_FILES();
				// 处理括号
				String fileName1 = files_NAME.replace("(", "");
				String fileName2 = fileName1.replace("（", "");
				String fileName3 = fileName2.replace("）", "");
				files_NAME = fileName3.replace(")", "");
				// 过滤 去掉特殊字符
				files_NAME = StringFilterTest.StringFilter(files_NAME);

				int lastIndexOf = file_address.lastIndexOf(".");

				String file_TYPE = file_address.substring(lastIndexOf + 1);

				String pingYin = ChineseToEnglish.getPingYin(files_NAME);

				String realPath = request.getSession().getServletContext()
						.getRealPath("/");
				String filePathabsolute = realPath + pingYin + ".html";
				String filePath = pingYin + ".html";

				if ("doc".equals(file_TYPE) || "docx".equals(file_TYPE)) {
					try {
						Boolean flag = JacobUtil.wordToHtml(file_address, filePathabsolute);
						if(!flag){
							// 如果格式不支持
							report.setStruts(2);
							// 就服务器地址返回出去
							report.setFilePath(file_address);
						}else{
							report.setFilePath(filePath);
						}
					} catch (Exception e) {
						// 如果格式不支持
						report.setStruts(2);
						// 就服务器地址返回出去
						report.setFilePath(file_address);
						e.printStackTrace();
					}
				} else if ("xls".equals(file_TYPE) || "xlsx".equals(file_TYPE)) {
					try {
						String excel2Hmtl = POIReadExcelToHtml
								.Excel2Hmtl(file_address);
						report.setContentMessge(excel2Hmtl);
					} catch (Exception e) {
						// 如果格式不支持
						report.setStruts(2);
						// 就服务器地址返回出去
						report.setFilePath(file_address);
						e.printStackTrace();
					}
				} else {
					// 如果格式不支持
					report.setStruts(2);
					// 就服务器地址返回出去
					report.setFilePath(file_address);
				}
			}
		}

		return report;
	}

	public List<As_Assess_SupportVo> findAs_assess_support(String Sysid,
			String Ryear, String Userid, String Specialty_id, String Report_id,
			HttpServletRequest request,String specialty_name) throws Exception {
		List<As_Assess_SupportVo> findAs_assess_support = infoWangPingMapper
				.findAs_assess_support(Sysid, Ryear, Userid, Specialty_id,
						Report_id,specialty_name);
		List<As_Assess_SupportVo> findAs_assess_support2 = new ArrayList<As_Assess_SupportVo>();

		for (As_Assess_SupportVo as_Assess_SupportVo : findAs_assess_support) {
			String addr = as_Assess_SupportVo.getSUPPORT_ADDRESS();

			String type = addr.substring(addr.lastIndexOf("."));
			as_Assess_SupportVo.setSUPPORT_NAME(as_Assess_SupportVo
					.getSUPPORT_NAME() + type);

			findAs_assess_support2.add(as_Assess_SupportVo);
		}
		return findAs_assess_support2;
	}


	public Assess_comment_rectificationVo getWangPingZongComment(String userid,
			String specialty_id, String item) throws Exception {

		return infoWangPingMapper.getWangPingZongComment(userid, specialty_id,
				item);
	}

	public Assess_comment_rectificationVo getWangPingTiXiComment(String userid,
			String specialty_id, String item, String sysId) throws Exception {
		return infoWangPingMapper.getWangPingTiXiComment(userid, specialty_id,
				item, sysId);
	}

	public void updateAssessment_task_pass(String time, String task_id) {
		infoWangPingMapper.updateAssessment_task_pass(time, task_id);
	}



	public String getUserName(String userId) {
		return infoWangPingMapper.getUserName(userId);
	}

	public List<String> getTypeForSpecialty(String useid, String specialty_id) {
		return infoWangPingMapper.getTypeForSpecialty(useid, specialty_id);
	}

	public As_Assess_SupportVo getAs_assess_supportById(String supportId,
			HttpServletRequest request) {
		As_Assess_SupportVo vo = infoWangPingMapper
				.getAs_assess_supportById(supportId);
		String support_ADDRESS = vo.getSUPPORT_ADDRESS();
		try {
			ContentInfo c = File2Html.fileToHtml(support_ADDRESS, request);
			vo.setConinfo(c);
		} catch (Exception e) {
			// 如果格式不支持
			ContentInfo c = new ContentInfo();
			c.setStruts(2);
			vo.setConinfo(c);
			e.printStackTrace();
		}
		return vo;
	}

	public String selectOrganizationName(String userid, String sp_id) {
		return infoWangPingMapper.selectOrganizationName(userid, sp_id);
	}

	public String selectSysName(String sid) {
		return infoWangPingMapper.selectSysName(sid);
	}

	public String selectUserType(String userid) {
		return infoWangPingMapper.selectUserType(userid);
	}

	public List<String> selectZyName() {
		return infoWangPingMapper.selectZyName();
	}

	public List<LookReportVo> getAllReports(Map<Object, Object> map) {
		return infoWangPingMapper.getAllReports(map);
	}

	
	
	//网评状态表 
	public List<Map<Object, Object>>  selcteWangPStruts(Map<Object, Object> map) {
		return infoWangPingMapper.selcteWangPStruts(map);
	}
	//网评状态表
	public void updateWangPStruts(Map<Object, Object> map) {
		infoWangPingMapper.updateWangPStruts(map);
		
	}
	//网评状态表
	public void insertWangPStruts(Map<Object, Object> map) {
		infoWangPingMapper.insertWangPStruts(map);
	}

	public List<Map<String, Object>> getAllData(Map<Object, Object> map) {
		return infoWangPingMapper.getAllData(map);
	}

	@Override
	public List<Assess_comment_rectificationVo> findAllWangpingInfo(String userid,
			String specialty_id, String item, String SYEAR) {
		return infoWangPingMapper.findAllWangpingInfo(userid, specialty_id, item, SYEAR);
	}

	
}
