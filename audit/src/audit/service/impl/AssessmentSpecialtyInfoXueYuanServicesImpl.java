package audit.service.impl;

import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
import audit.dao.AssessmentSpecialtyInfoXueYuanMapper;
import audit.model.AS_ASSESS_INDEX_FORMULA;
import audit.model.Asses_filedsum;
import audit.model.DW_V_LEADERSHIP;
import audit.model.assess.vo.As_assess_reportVo;
import audit.model.assess.vo.ZYJSMessgeVo;
import audit.model.quality.Assessment_system_info;
import audit.model.quality.vo.Assess_comment_rectificationVo;
import audit.model.quality.vo.ContentInfo;
import audit.model.quality.vo.LookReportVo;
import audit.model.quality.vo.UserVo;
import audit.model.quality.vo.ZgList;
import audit.service.assess.AssessmentSpecialtyInfoXueYuanServices;
import audit.util.ChineseToEnglish;
import audit.util.CookieUtil;
import audit.util.JacobUtil;
import audit.util.POIReadExcelToHtml;
import audit.util.StringFilterTest;

@Service("AssessmentSpecialtyInfoXueYuanServices")
public class AssessmentSpecialtyInfoXueYuanServicesImpl implements
		AssessmentSpecialtyInfoXueYuanServices {
	@Autowired
	AssessmentSpecialtyInfoXueYuanMapper infoXueYuanMapper;
	@Autowired
	AssessmentSpecialtyInfoWangpingMapper infoWangPingMapper;

	public List<ZgList> findAssessmentList(String tYear, String userid,int pgid)
			throws ParseException {
		List<ZgList> findAssessmentList = infoXueYuanMapper.findAssessmentList(
				tYear, userid,pgid);

		Map<Integer, ZgList> map = new HashMap<Integer, ZgList>();
		for (int i = 0; i < findAssessmentList.size(); i++) {
			ZgList zgList = findAssessmentList.get(i);
			map.put(zgList.getS_info_id(), zgList);
		}

		Map<Integer, ZgList> map2 = new HashMap<Integer, ZgList>();
		for (ZgList zgList : findAssessmentList) {
			int item = zgList.getItem();
			int self_assess_zt = zgList.getSelf_assess_zt();
			// 任务id
			int t_task_id = zgList.getT_task_id();
			int s_info_id = zgList.getS_info_id();
			ZgList zgList2 = map.get(s_info_id);

			
			// 如果专业质量报告
			if (item == 0) {
				zgList2.setZy_task_id(t_task_id);
				// 1已提交 待审核 2未通过 3通过
				switch (self_assess_zt) {
				case 1:
					zgList2.setzLBG_self_assess_zt("待审核");
					break;
				case 2:
					zgList2.setzLBG_self_assess_zt("未通过");
					break;
				case 3:
					zgList2.setzLBG_self_assess_zt("已通过");
					break;
				default:
					zgList2.setzG_self_assess_zt("未知");
					break;
				}
			}
			// 如果是整改报告
						if (item == 1) {
							zgList2.setZg_task_id(t_task_id);
							// 1已提交 待审核 2未通过 3通过
							switch (self_assess_zt) {
							case 1:
								zgList2.setzG_self_assess_zt("待审核");
								break;
							case 2:
								zgList2.setzG_self_assess_zt("未通过");
								break;
							case 3:
								zgList2.setzG_self_assess_zt("已通过");
								break;
							default:
								zgList2.setzG_self_assess_zt("未知");
								break;
							}

						}
						// 如果是整改报告
						if (item == 2) {
							zgList2.setZg_task_id(t_task_id);
							// 1已提交 待审核 2未通过 3通过
							switch (self_assess_zt) {
							case 1:
								zgList2.setzG_self_assess_zt("待审核");
								break;
							case 2:
								zgList2.setzG_self_assess_zt("未通过");
								break;
							case 3:
								zgList2.setzG_self_assess_zt("已通过");
								break;
							default:
								zgList2.setzG_self_assess_zt("未知");
								break;
							}

						}
			// 进行一个覆盖
			map2.put(s_info_id, zgList2);
		}

		// 清空
		findAssessmentList.clear();
		Collection<ZgList> values = map2.values();
		Date nowdate = new Date();
		for (ZgList zgList : values) {
			// 做时间的判断
			String comment_DATE = zgList.getCOMMENT_DATE();
			String[] split = comment_DATE.split("~");
			if (split.length != 0) {
				String time = split[1];
				// 默认给他推迟一天 避免日期为当天日期，显示过期
				Integer num = time.lastIndexOf("-");
				String ri = time.substring(num + 1);
				Integer ri1 = Integer.parseInt(ri);
				ri1 = ri1 + 1;
				time = time.substring(0, num + 1) + ri1;
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd",
						Locale.CHINA);
				Date d;
				d = sdf.parse(time);
				boolean flag = d.after(nowdate);
				if (!flag) {
					zgList.setIspass(1);// 表示过期了
				}
			} else {
				zgList.setIspass(1);// 表示过期了
			}
			findAssessmentList.add(zgList);
		}
		return findAssessmentList;
	}

	public List<ContentInfo> findConentInfo(ContentInfo c,
			HttpServletRequest request) {
		
		
		
		List<ContentInfo> findConentInfo = infoXueYuanMapper
				.findRectificationConentInfo(c);
		for (ContentInfo contentInfo : findConentInfo) {
			
			//如果是网评
			if(c!=null&&"3".equals(c.getASSESS_TYPE())){
				String userid;
				try {
					userid = CookieUtil.getValueByCookie(request, "uvocookie",
							"id");
					// 查询总意见
					Assess_comment_rectificationVo wangPingZongComment = infoWangPingMapper
							.getWangPingZongComment(userid, c.getSpecialty_id()+"", 1 + "");
					if (wangPingZongComment != null) {
						String comment_content = wangPingZongComment
								.getComment_suggestions();
						contentInfo.setContentblack(comment_content);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
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

	public void updateAssessment_task(String self_assess_zt, String audit_zt,
			String audit_time, String specialty_id, String item) {
		infoXueYuanMapper.updateAssessment_task(self_assess_zt, audit_zt,
				audit_time, specialty_id, item);
	}

	public void updateAs_assess_rectification(String blackcontent,
			String ASSESS_userid, String ASSESS_time, String ID) {
		infoXueYuanMapper.updateAs_assess_rectification(blackcontent,
				ASSESS_userid, ASSESS_time, ID);
	}

	public As_assess_reportVo findReportConentInfo(String Specialty_id,
			String Sysid, String userid, HttpServletRequest request,
			String tYear) {
		// 如果有全文预览,就不显示单位
		LookReportVo lrv = infoXueYuanMapper.getAllReports(userid, tYear,
				Specialty_id);
		As_assess_reportVo findReportConentInfo = null;
		if (lrv == null) {
			findReportConentInfo = infoXueYuanMapper.findReportConentInfo(
					Specialty_id, Sysid, userid);
			// 如果输入内容不为空
			if (findReportConentInfo != null) {
				if (findReportConentInfo.getENTER_CONTENT() == "") {

					String file_address = findReportConentInfo
							.getUPLOAD_ADDRESS();
					// 获得文件名
					String files_NAME = findReportConentInfo.getUPLOAD_FILES();
					// 处理括号问题
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
							Boolean flag = JacobUtil
									.wordToHtml(file_address, filePathabsolute);
							if(!flag){
								// 如果格式不支持
								findReportConentInfo.setStruts(2);
								// 就服务器地址返回出去
								findReportConentInfo.setFilePath(file_address);
							}else{
								findReportConentInfo.setFilePath(filePath);
							}
						} catch (Exception e) {
							// 如果格式不支持
							findReportConentInfo.setStruts(2);
							// 就服务器地址返回出去
							findReportConentInfo.setFilePath(file_address);
							e.printStackTrace();
						}
					} else if ("xls".equals(file_TYPE)
							|| "xlsx".equals(file_TYPE)) {
						try {
							String excel2Hmtl = POIReadExcelToHtml
									.Excel2Hmtl(file_address);
							findReportConentInfo.setContentMessge(excel2Hmtl);
						} catch (Exception e) {
							// 如果格式不支持
							findReportConentInfo.setStruts(2);
							// 就服务器地址返回出去
							findReportConentInfo.setFilePath(file_address);
							e.printStackTrace();
						}
					} else {
						// 如果格式不支持
						findReportConentInfo.setStruts(2);
						// 就服务器地址返回出去
						findReportConentInfo.setFilePath(file_address);
					}
				}
			}
		}

		return findReportConentInfo;
	}

	public void updateAs_assess_report_blackcontent(String blackcontent,
			String userid, String report_id) {
		infoXueYuanMapper.updateAs_assess_report_blackcontent(blackcontent,
				userid, report_id);
	}
	public void updateAs_assess_report_blackcontent1(String blackcontent, int userid, int sysId, int specialtyId,String dateYear,String SHDJ,String SHFS ) {
		infoXueYuanMapper.updateAs_assess_report_blackcontent1(blackcontent, userid, sysId,specialtyId,dateYear,SHDJ,SHFS);
	}

	public List<ZYJSMessgeVo> findZYJSMessge(String specialty_id, String userid) {
		// 查询是否工科 1 非工科 2 工科
		String Is_engineering = infoXueYuanMapper
				.findAssessment_specialty_info_Is_engineering(specialty_id);
		List<ZYJSMessgeVo> findZYJSMessge = null;
		if ("1".equals(Is_engineering)) {
			// 1 非工科 <!-- 非工科 id 11-12-->
			findZYJSMessge = infoXueYuanMapper.findZYJSMessge(specialty_id,
					userid, 12 + "");
		} else {
			// null工科 <!-- 工科 id 1-10-->
			findZYJSMessge = infoXueYuanMapper.findZYJSMessge(specialty_id,
					userid, 1 + "");
		}
		return findZYJSMessge;
	}

	public List<ZYJSMessgeVo> findZYQKGY(String specialty_id, String userid) {
		List<ZYJSMessgeVo> findZYQKGY = infoXueYuanMapper.findZYQKGY(
				specialty_id, userid);
		return findZYQKGY;
	}

	public List<ZYJSMessgeVo> findZYJSPMessge(String specialty_id, String userid) {
		List<ZYJSMessgeVo> findZYJSPMessge = infoXueYuanMapper.findZYJSPMessge(
				specialty_id, userid);
		return findZYJSPMessge;
	}

	public void insertASSESSMENT_ALLREPORT(String tYear, String specialty_id,
			String USERID, String BLACKCONTENT) {
		infoXueYuanMapper.insertASSESSMENT_ALLREPORT(tYear, specialty_id,
				USERID, BLACKCONTENT);
	}

	public void updateAssessment_allreportBlackcontent(String blackcontent,
			String specialty_id) {
		infoXueYuanMapper.updateAssessment_allreportBlackcontent(blackcontent,
				specialty_id);
	}

	public int selectAssessment_allreportNum(String specialty_id) {
		int selectAssessment_allreportNum = infoXueYuanMapper
				.selectAssessment_allreportNum(specialty_id);
		return selectAssessment_allreportNum;
	}

	public String findAssessment_specialty_info_Name(String specialty_id) {
		String findAssessment_specialty_info_Name = infoXueYuanMapper
				.findAssessment_specialty_info_Name(specialty_id);
		return findAssessment_specialty_info_Name;
	}

	public As_assess_reportVo zhuanHuanHtml(String addr, String fileName,
			HttpServletRequest request) {

		As_assess_reportVo vo = new As_assess_reportVo();

		int lastIndexOf = addr.lastIndexOf(".");

		String file_TYPE = addr.substring(lastIndexOf + 1);

		// 处理括号问题
		String fileName1 = fileName.replace("(", "");
		String fileName2 = fileName1.replace("（", "");
		String fileName3 = fileName2.replace("）", "");
		fileName = fileName3.replace(")", "");
		fileName = StringFilterTest.StringFilter(fileName);
		String pingYin = ChineseToEnglish.getPingYin(fileName);

		String realPath = request.getSession().getServletContext()
				.getRealPath("/");
		String filePathabsolute = realPath + pingYin + ".html";
		String filePath = pingYin + ".html";

		if ("doc".equals(file_TYPE) || "docx".equals(file_TYPE)) {
			try {
				Boolean falg = JacobUtil.wordToHtml(addr, filePathabsolute);
				// 如果插件有异常
				if(!falg){
					// 如果格式不支持
					vo.setStruts(2);
					// 就服务器地址返回出去
					vo.setFilePath(filePath);
				}
				vo.setFilePath(filePath);
			} catch (Exception e) {
				// 如果格式不支持
				vo.setStruts(2);
				// 就服务器地址返回出去
				vo.setFilePath(filePath);
				e.printStackTrace();
			}
			vo.setFilePath(filePath);
		} else if ("xls".equals(file_TYPE) || "xlsx".equals(file_TYPE)) {
			try {
				String excel2Hmtl = POIReadExcelToHtml.Excel2Hmtl(addr);
				vo.setContentMessge(excel2Hmtl);
			} catch (Exception e) {
				// 如果格式不支持
				vo.setStruts(2);
				// 就服务器地址返回出去
				vo.setFilePath(filePath);
				e.printStackTrace();
			}
		} else {
			// 如果格式不支持
			vo.setStruts(2);
			// 就服务器地址返回出去
			vo.setFilePath(filePath);
		}
		return vo;
	}

	public int selectAssessment_allreportNumById(String id) {
		int numById = infoXueYuanMapper.selectAssessment_allreportNumById(id);
		return numById;
	}

	public void updateAssessment_allreportBlackcontentById(String blackcontent,
			String id) {
		infoXueYuanMapper.updateAssessment_allreportBlackcontentById(
				blackcontent, id);
	}

	public LookReportVo getAllReports(String USERID, String tYear,
			String specialty_id) {
		return infoXueYuanMapper.getAllReports(USERID, tYear, specialty_id);
	}

	public String findAssessment_allreport_BLACKCONTENT(String specialty_id,
			String userid) {
		return infoXueYuanMapper.findAssessment_allreport_BLACKCONTENT(
				specialty_id, userid);
	}

	public UserVo findUserInfo(String userid) {
		return infoXueYuanMapper.findUserInfo(userid);
	}

	public String getSelf_assessment_date(String specialty_id) {
		return infoXueYuanMapper.getSelf_assessment_date(specialty_id);
	}

	public List<Map<String, Object>> getAllData(String id, String speId) {
		return infoXueYuanMapper.getAllData(id, speId);
	}

	public String selectAssessment_allreport(String userid, String sp_id,
			String tYear) {
		return infoXueYuanMapper.selectAssessment_allreport(userid, sp_id,
				tYear);
	}

	@Override
	public List<Map<String,Object>> getData(int id,String dateYear) {
		return infoXueYuanMapper.getData(id,dateYear);
	}
	@Override
	public List<Map<String,Object>> getASSESSMENT_TASK(String dateYear,int specialtyId) {
		
		return infoXueYuanMapper.getASSESSMENT_TASK(dateYear,specialtyId);
	}

	@Override
	public List<Map<String, Object>> getDataReport(int sysId,int specialtyId,String dateYear) {
		
		return infoXueYuanMapper.getDataReport(sysId,specialtyId,dateYear);
	}

	@Override
	public List<Map<String, Object>> getDataCailiao(int sysId, int specialtyId,
			String dateYear) {
	
		return infoXueYuanMapper.getDataCailiao(sysId,specialtyId,dateYear);
	}

	@Override
	public List<Map<String, Object>> getDataDLSJB(int sysId, int userId,
			String dateYear) {
		
		return infoXueYuanMapper.getDataDLSJB(sysId,userId,dateYear);
	}

	@Override
	public List<Map<String, Object>> getDataQXSJB(int sysId, int userId,
			String dateYear) {
		return infoXueYuanMapper.getDataQXSJB(sysId, userId, dateYear);
	}
	
	@Override
	public void UpdateASSESSMENT_TASKNoPass(String dateYear, int specialtyId,String date) {
		
		infoXueYuanMapper.UpdateASSESSMENT_TASKNoPass(dateYear,specialtyId,date);
		
	}

	@Override
	public void UpdateASSESSMENT_TASKPass(int audit_zt, String dateYear,
			int specialtyId,String date) {
		
		infoXueYuanMapper.UpdateASSESSMENT_TASKPass(audit_zt,dateYear,specialtyId,date);
	}

	@Override
	public List<AS_ASSESS_INDEX_FORMULA> getAS_ASSESS_INDEX_FORMULA(int sysId,
			String dateYear) {
		return infoXueYuanMapper.getAS_ASSESS_INDEX_FORMULA(sysId, dateYear);
	}

	@Override
	public Asses_filedsum Selectas_asses_filedsum(int sysId, String dateYear) {
		
		return infoXueYuanMapper.Selectas_asses_filedsum(sysId,dateYear);
	}

	@Override
	public int SelectReal(int sysId, String dateYear, int specialtyId) {
		return infoXueYuanMapper.SelectReal(sysId, dateYear, specialtyId);
	}

	@Override
	public DW_V_LEADERSHIP SelectDW_V_LEADERSHIPZHI(int specialtyId, String dateYear,
			String chinase) {
		
		return infoXueYuanMapper.SelectDW_V_LEADERSHIPZHI(specialtyId,dateYear,chinase);
	}
	@Override
	public List<Map<String, Object>> getDataById(int id) {
		return infoXueYuanMapper.getDataById(id);
	}

//	@Override
//	public List<ZgList> getAllSpecialty(int id, String string, int parseInt) {
//		return infoXueYuanMapper.getAllSpecialty(id,string,parseInt);
//	}

	/**
	 * 查看网评人的信息
	 */
	public List<Map<String, Object>> selectWpr(Map<String, Object> map) {
		return infoWangPingMapper.selectWpr(map);
	}

	@Override
	public List<Map<String, Object>> selectWprTx(Map<String, Object> ma) {
		return infoWangPingMapper.selectWprTx(ma);
	}

	@Override
	public int insertRecord(Map<String, Object> map) {
		return infoWangPingMapper.insertRecord(map);
	}


	@Override
	public List<Map<String, Object>> selectRecords(Map<String, Object> map) {
		return infoWangPingMapper.selectRecord(map);
	}

	@Override
	public List<Map<String, Object>> selectWpID(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoWangPingMapper.selectWpID(map);
	}

	@Override
	public int updateRecord(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoWangPingMapper.updateRecord(map);
	}

	@Override
	public List<Map<String, Object>> selectAssessreport(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectAssessreport(map);
	}
	//查询现场考所有的信息
	@Override
	public List<Map<String, Object>> selectAllrecodrd(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectAllrecodrd(map);
	}

	@Override
	public List<Map<String, Object>> selectSpecialtyId(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoWangPingMapper.selectSpecialtyId(map);
	}

	@Override
	public  List<Map<String, Object>> initSHRdata(int sysid, int specialtyId, String datayear) {
		
		return infoXueYuanMapper.initSHRdata(sysid,specialtyId,datayear);
	}

	@Override
	public List<Map<String, Object>> selectSpecialtyInfoByname(
			Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectSpecialtyInfoByname(map);
	}

	@Override
	public List<Map<String, Object>> selectwpzyj(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectwpzyj(map);
	}

	@Override
	public List<Map<String, Object>> selectxckczjzyj(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectxckczjzyj(map);
	}

	@Override
	public List<Map<String, Object>> selectshzyj(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectshzyj(map);
	}

	@Override
	public List<Map<String, Object>> selectXckcZyj(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectXckcZyj(map);
	}

	@Override
	public List<Map<String, Object>> selectzjdyj(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectzjdyj(map);
	}

	@Override
	public List<Map<String, Object>> selectspecialtyById(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.selectspecialtyById(map);
	}

	@Override
	public List<Map<String, Object>> getDataToSchool(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return infoXueYuanMapper.getDataToSchool(map);
	}

	@Override
	public boolean getAssessmentReportInfo(Map<String, String> map) {
		if(infoXueYuanMapper.getAssessmentReportInfo(map)!=null && infoXueYuanMapper.getAssessmentReportInfo(map).size()>0)
			return true;
		else
			return false;
	}

	@Override
	public int insertReportBlackcontent(Map<String, String> map) {
		return infoXueYuanMapper.insertReportBlackcontent(map);
	}

	

}
