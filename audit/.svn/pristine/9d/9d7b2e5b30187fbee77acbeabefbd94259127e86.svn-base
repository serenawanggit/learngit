package audit.service.impl.hr;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import javax.annotation.Resource;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.yourcompany.DemoDelegate;
import com.yourcompany.DemoService;

import audit.common.ServiceResult;
import audit.controller.AsShZtsjbController;
import audit.dao.HrTableCategoryMapper;
import audit.dao.HrTableFieldMapper;
import audit.dao.HrTableOperationLogMapper;
import audit.dao.HrTableTotalMapper;
import audit.dao.MoeImportMapper;
import audit.dao.UserinfoMapper;
import audit.model.Userinfo;
import audit.model.hr.HrTableCategoryVo;
import audit.model.hr.HrTableField;
import audit.model.hr.HrTableOperationLog;
import audit.model.hr.HrTableTotal;
import audit.model.hr.HrTableTotalVo;
import audit.model.shb.CourseTableEntity;
import audit.model.shb.RequsetStuEntity;
import audit.model.shb.SelfStudy;
import audit.model.shb.TeacherInfoEntity;
import audit.service.hr.HrImportService;
import audit.util.DBConnection;

@Service("hrImportService")
public class HrImportServiceImpl implements HrImportService{

	@Resource
	private HrTableCategoryMapper hrTableCategoryMapper;
	
	@Resource
	private HrTableTotalMapper hrTableTotalMapper;
	
	@Resource  
	private HrTableOperationLogMapper hrTableOperationLogMapper;
	
	@Resource
	private HrTableFieldMapper hrTableFieldMapper;
	
	@Resource
	private UserinfoMapper userinfoMapper;
	@Autowired 
	private MoeImportMapper moeImportMapper;
	
	public ServiceResult<List<HrTableCategoryVo>> getAllCategoryVo() {
		ServiceResult<List<HrTableCategoryVo>>  serviceResult = new ServiceResult<List<HrTableCategoryVo>>();
		List<HrTableCategoryVo> list = hrTableCategoryMapper.getAllCategoryVo();
		serviceResult.setData(list);
		return serviceResult;
	}

	public ServiceResult<List<HrTableTotalVo>> getTableByCategoryId(
			Integer categoryId) {
		ServiceResult<List<HrTableTotalVo>> serviceResult = new ServiceResult<List<HrTableTotalVo>>();
		List<HrTableTotalVo> list = hrTableTotalMapper.getTableByCategoryId(categoryId);
		serviceResult.setData(list);
		return serviceResult;
	}
	
	public ServiceResult<List<HrTableOperationLog>> getImportHistory(
		 Integer tableId) {
		ServiceResult<List<HrTableOperationLog>> serviceResult = new ServiceResult<List<HrTableOperationLog>>();
		List<HrTableOperationLog> list = hrTableOperationLogMapper.getImportHistory(tableId);
		serviceResult.setData(list);
		return serviceResult;
	}

	public ServiceResult<Boolean> saveData(Integer tableId, String data, String userId, String statisticsTime) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		
		Userinfo user = userinfoMapper.selectByPrimaryKey(Integer.parseInt(userId));//操作用户
		HrTableTotal hrTableTotal = hrTableTotalMapper.selectByPrimaryKey(tableId);	//数据表表名
		List<HrTableField> list = hrTableFieldMapper.getAllFieldByTableId(tableId);	//数据表字段
		StringBuffer insertSql = new StringBuffer();
		
		if(hrTableTotal.getIsOnlyOne() == 0){//统计表
			JSONObject object = JSONObject.parseObject(data);
			insertSql.append("insert into " + hrTableTotal.getTableDataName() + " (");
			for (int i = 0; i < list.size(); i++) {
				insertSql.append(list.get(i).getFieldDataName()+",");
			}
			insertSql.append("statistics_time ) values (");
			for (int i = 0; i < list.size(); i++) {				
				insertSql.append("'"+object.get(list.get(i).getFieldDataName())+"',");
			}
			insertSql.append("'"+statisticsTime+"')");
			//插入数据
			hrTableTotalMapper.saveData(insertSql);
			//记录操作
			HrTableOperationLog log = new HrTableOperationLog();
			log.setHrTableId(tableId);
			log.setHrTableName(hrTableTotal.getTableName());
			log.setIsSuccess(0);
			log.setOperationYear(statisticsTime);
			log.setRowsNumber(1);
			log.setUserId(user.getId());
			log.setUserName(user.getName());
			log.setCreateDatetime(new Date());
			hrTableOperationLogMapper.insertSelective(log);
		}else{//明细表
			JSONArray array = JSONArray.parseArray(data);
			
			for (int i = 0; i < array.size(); i++) {
				insertSql.append("insert into " + hrTableTotal.getTableDataName() + " (");
				for (int k = 0; k < list.size(); k++) {
					insertSql.append(list.get(k).getFieldDataName()+",");
				}
				insertSql.append("statistics_time) values ");
				JSONObject object = array.getJSONObject(i);
				insertSql.append("(");
				for (int j = 0; j < list.size(); j++) {
					insertSql.append("'"+object.get(list.get(j).getFieldDataName())+"',");
				}
				if(i+1 == array.size()){
					insertSql.append("'"+statisticsTime + "')");
				}else{
					insertSql.append("'"+statisticsTime + "');");
				}
			}
			//插入数据
			//hrTableTotalMapper.saveData(insertSql);
			try {
				DBConnection.Add(insertSql.toString());
			} catch (Exception e) {
				e.printStackTrace();
			}
			//记录操作
			HrTableOperationLog log = new HrTableOperationLog();
			log.setHrTableId(tableId);
			log.setHrTableName(hrTableTotal.getTableName());
			log.setIsSuccess(0);
			log.setOperationYear(statisticsTime);
			log.setRowsNumber(array.size());
			log.setUserId(user.getId());
			log.setUserName(user.getName());
			log.setCreateDatetime(new Date());
			hrTableOperationLogMapper.insertSelective(log);
		}
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> deleteData(String ids) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		String id[] = ids.split(",");
		for (int i = 0; i < id.length; i++) {
			if(id[i] == null || id[i].equals("")){
				continue;
			}
			HrTableOperationLog log = hrTableOperationLogMapper.selectByPrimaryKey(Integer.parseInt(id[i]));
			HrTableTotal hrTableTotal = hrTableTotalMapper.selectByPrimaryKey(log.getHrTableId());	//数据表表名
			StringBuffer deleteSql = new StringBuffer();
			deleteSql.append("delete from "+ hrTableTotal.getTableDataName()+" where statistics_time ='"+log.getOperationYear()+"'");
			//删除数据
			hrTableTotalMapper.deleteData(deleteSql);
			//删除记录
			hrTableOperationLogMapper.deleteByPrimaryKey(log.getId());
		}
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Object> getDataByHistoryId(Integer id) {
		ServiceResult<Object> serviceResult = new ServiceResult<Object>();
		//获取记录
		HrTableOperationLog log = hrTableOperationLogMapper.selectByPrimaryKey(id);
		//数据表表名
		HrTableTotal hrTableTotal = hrTableTotalMapper.selectByPrimaryKey(log.getHrTableId());	
		StringBuffer selectSql = new StringBuffer();
		selectSql.append("select * from " + hrTableTotal.getTableDataName() + " where statistics_time='"+log.getOperationYear()+"'");
		//查询数据
		List<Map<String,Object>> list = hrTableTotalMapper.selectData(selectSql);
		if(hrTableTotal.getIsOnlyOne() == 0){
			serviceResult.setData(list.get(0));
			return serviceResult;
		}
		serviceResult.setData(list);
		return serviceResult;
	}

	
	public ServiceResult<Object> CDataByHistoryId(Integer id) {
		ServiceResult<Object> serviceResult = new ServiceResult<Object>();
		//获取记录
		HrTableOperationLog log = hrTableOperationLogMapper.selectByPrimaryKey(id);
		//数据表表名
		HrTableTotal hrTableTotal = hrTableTotalMapper.selectByPrimaryKey(log.getHrTableId());	
		StringBuffer selectSql = new StringBuffer();
		selectSql.append("select * from " + hrTableTotal.getTableDataName() + " where statistics_time='"+log.getOperationYear()+"'");
		//查询数据
		List<Map<String,Object>> list = hrTableTotalMapper.selectData(selectSql);
		List<Map<String, Object>> listteacher=hrTableTotalMapper.selectteacher();
		//课表信息的校验
		if (hrTableTotal.getTableDataName().equals("HR_SCHEDULE_INFORMATION")) {
			boolean isNameAndNum=false;
			boolean isWeek=false;
			boolean isNum=false;
			boolean issection=false;
			for (int i = 0; i < list.size(); i++) {
				StringBuffer errorstr=new StringBuffer();
				 for (int j = 0; j < listteacher.size(); j++) {
					if (list.get(i).get("class_teacher").equals(listteacher.get(j).get("teacher_name")) && list.get(i).get("class_teacher_num").equals(listteacher.get(j).get("teacher_num"))){
						isNameAndNum=true;
						break;
					}
				}
				if (list.get(i).get("class_week").equals("星期一") || list.get(i).get("class_week").equals("星期二") || list.get(i).get("class_week").equals("星期三")|| list.get(i).get("class_week").equals("星期四")|| list.get(i).get("class_week").equals("星期五")|| list.get(i).get("class_week").equals("星期六")|| list.get(i).get("class_week").equals("星期日")) {
					isWeek=true;
				}
			    String[] classWeekNum=list.get(i).get("class_week_num").toString().split("-");
			    for (int j = 0; j < classWeekNum.length; j++) {
			    	isNum=AsShZtsjbController.isNumeric(classWeekNum[j]);
			    	if (!isNum) {
			    		break;
					}
				}
			    
			     String classsection =  list.get(i).get("class_section").toString();
			     if (classsection.indexOf(",")>0) {
			    	String[]  classsectionL= classsection.split(",");
			    	for (int j = 0; j < classsectionL.length; j++) {
			    		if (!isClassSection(classsection)) {
			    			if (classsectionL[j].indexOf("-")>0) {
								 String[] classsection1=classsectionL[j].split("-");
								 for (int k = 0; k < classsection1.length; k++) {
								     issection=	AsShZtsjbController.isNumeric(classsection1[k]);
								     if (!issection) {
										break;
									 }
								 }
							}
							else {
								issection=AsShZtsjbController.isNumeric(classsection);
								if (!issection) {
									break;
								 }
							}
						}
			    		if (!issection) {
							break;
						 }
					}
				 }else {
					 if (!isClassSection(classsection)) {
							if (classsection.indexOf("-")>0) {
							    String[] classsection1=classsection.split("-");
							    for (int j = 0; j < classsection1.length; j++) {
							     issection=	AsShZtsjbController.isNumeric(classsection1[j]);
							     if (!issection) {
										break;
									 }
								}
							}else {
								issection=AsShZtsjbController.isNumeric(classsection);
								if (!issection) {
									break;
								 }
							}
					 }
				 }
			     
			 	if (!isNameAndNum) {
					errorstr.append("工号或老师姓名不一致 ");
				}
				if (!isWeek) {
					errorstr.append(" 上课时间（星期）格式不对 ");
				}
				if (!isNum) {
					errorstr.append(" 上课时间（周次）格式不对 "); 
				}
				if (!issection) {
					errorstr.append(" 上课时间（节次）格式不对 "); 
				}
				String updatestr="update HR_SCHEDULE_INFORMATION set error_log='"+errorstr.toString()+"' where id="+list.get(i).get("id");
				try {
					DBConnection.Add(updatestr);
				    
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			int count=	hrTableTotalMapper.findErrorRecord("HR_SCHEDULE_INFORMATION");
		    if (count>0) {
		    	//校验带有错误数据
		    	hrTableTotalMapper.updateTableECount("HR_TABLE_OPERATION_LOG", count, id,1);
			}else {
				//校验无错误数据
		    	hrTableTotalMapper.updateTableECount("HR_TABLE_OPERATION_LOG", count, id,2);
			}
		}
		
		//答疑信息
		if (hrTableTotal.getTableDataName().equals("HR_ANSWER_INFORMATION")) {
			
			boolean isNameAndNum=false;
			boolean isWeek=false;
			boolean isth=false;
			boolean iszc=false;
			for (int i = 0; i < list.size(); i++) {
				StringBuffer errorstr=new StringBuffer();
				 for (int j = 0; j < listteacher.size(); j++) {
					if (list.get(i).get("answer_teacher").equals(listteacher.get(j).get("teacher_name")) && list.get(i).get("answer_teacher_num").equals(listteacher.get(j).get("teacher_num"))){
						isNameAndNum=true;
						break;
					}
				}
				if (list.get(i).get("answer_time").equals("星期一") || list.get(i).get("answer_time").equals("星期二") || list.get(i).get("answer_time").equals("星期三")|| list.get(i).get("answer_time").equals("星期四")|| list.get(i).get("answer_time").equals("星期五")|| list.get(i).get("answer_time").equals("星期六")|| list.get(i).get("answer_time").equals("星期日")) {
					isWeek=true;
				}
				
				  String answer_time_h=	list.get(i).get("answer_time_h").toString();
				  if (answer_time_h.indexOf("-")>0) {
					  String [] a= answer_time_h.split("-");
					  for (int j = 0; j < a.length; j++) {
						  isth= istime(a[j]);
						  if (!isth) {
							break;
						  }
					  }
				  }else {
					  isth=false;
				  }
				  String answer_time_zc=list.get(i).get("answer_time_zc").toString();
				  iszc=AsShZtsjbController.isNumeric(answer_time_zc);
				  
				  if (!isNameAndNum) {
						errorstr.append("工号或老师姓名不一致 ");
					}
					if (!isWeek) {
						errorstr.append(" 答疑时间（星期）格式不对 ");
					}
					if (!isth) {
						errorstr.append(" 答疑时间（时间）格式不对 "); 
					}
					if (!iszc) {
						errorstr.append(" 答疑时间（周次）格式不对 "); 
					}
					String updatestr="update HR_ANSWER_INFORMATION set error_log='"+errorstr.toString()+"' where id="+list.get(i).get("id");
					try {
						DBConnection.Add(updatestr);
					} catch (Exception e) {
						e.printStackTrace();
					}
			}
			 int count=	hrTableTotalMapper.findErrorRecord("HR_ANSWER_INFORMATION");
			    if (count>0) {
			    	//校验带有错误数据
			    	hrTableTotalMapper.updateTableECount("HR_TABLE_OPERATION_LOG", count, id,1);
				}else {
					//校验无错误数据
			    	hrTableTotalMapper.updateTableECount("HR_TABLE_OPERATION_LOG", count, id,2);
				}
		}
		//自习辅导信息
        if (hrTableTotal.getTableDataName().equals("HR_STUDY_INFORMATION")) {
        	boolean isNameAndNum=false;
			boolean isWeek=false;
			boolean isWeekNum=false;
			boolean istimenum=false;
        	for (int i = 0; i < list.size(); i++) {
        		StringBuffer errorstr=new StringBuffer();
				 for (int j = 0; j < listteacher.size(); j++) {
					if (list.get(i).get("coach_teacher").equals(listteacher.get(j).get("teacher_name")) && list.get(i).get("coach_teacher_num").equals(listteacher.get(j).get("teacher_num"))){
						isNameAndNum=true;
						break;
					}
				}
				if (list.get(i).get("coach_time_week").equals("星期一") || list.get(i).get("coach_time_week").equals("星期二") || list.get(i).get("coach_time_week").equals("星期三")|| list.get(i).get("coach_time_week").equals("星期四")|| list.get(i).get("coach_time_week").equals("星期五")|| list.get(i).get("coach_time_week").equals("星期六")|| list.get(i).get("coach_time_week").equals("星期日")) {
					isWeek=true;
				}
				String coach_week_num=list.get(i).get("coach_week_num").toString();
				if (coach_week_num.indexOf(",")>0) {
					String[] a= coach_week_num.split(",");
					for (int j = 0; j < a.length; j++) {
						isWeekNum= AsShZtsjbController.isNumeric(a[j]);
						if (!isWeekNum) {
							break;
						}
					}
				}
				if (coach_week_num.indexOf("-")>0) {
					String[] a= coach_week_num.split("-");
					for (int j = 0; j < a.length; j++) {
						isWeekNum= AsShZtsjbController.isNumeric(a[j]);
						if (!isWeekNum) {
							break;
						}
					}
				}
				String coach_time_num=list.get(i).get("coach_time_num").toString();
				istimenum=AsShZtsjbController.isNumeric(coach_time_num);
				    if (!isNameAndNum) {
						errorstr.append("工号或老师姓名不一致 ");
					}
					if (!isWeek) {
						errorstr.append(" 辅导时间（星期）格式不对 ");
					}
					if (!isWeekNum) {
						errorstr.append(" 辅导时间（节次）格式不对 "); 
					}
					if (!istimenum) {
						errorstr.append(" 辅导时间（周次）格式不对 "); 
					}
					String updatestr="update HR_STUDY_INFORMATION set error_log='"+errorstr.toString()+"' where id="+list.get(i).get("id");
					
					try {
						 DBConnection.Add(updatestr);
						
					} catch (Exception e) {
						e.printStackTrace();
					}
        	}
        	 int count=	hrTableTotalMapper.findErrorRecord("HR_ANSWER_INFORMATION");
			    if (count>0) {
			    	//校验带有错误数据
			    	hrTableTotalMapper.updateTableECount("HR_TABLE_OPERATION_LOG", count, id,1);
				}else {
					//校验无错误数据
			    	hrTableTotalMapper.updateTableECount("HR_TABLE_OPERATION_LOG", count, id,2);
				}
		}
    	//教师信息（基础表）
		if (hrTableTotal.getTableDataName().equals("HR_TEACHERS_INFORMATION")) {
			boolean isNameAndNum=false;
			boolean isDirthdate=false;
			boolean entrance_date=false;
			boolean latest_promote_date=false;
			for (int i = 0; i < list.size(); i++) {
				StringBuffer errorstr=new StringBuffer();
				 for (int j = 0; j < listteacher.size(); j++) {
					if (list.get(i).get("teacher_name").equals(listteacher.get(j).get("teacher_name")) && list.get(i).get("teacher_num").equals(listteacher.get(j).get("teacher_num"))){
						isNameAndNum=true;
						break;
					}
				 }
				 //判断生日格式
				 isDirthdate= isYMD(list.get(i).get("birthdate").toString());
				 entrance_date=isYMD(list.get(i).get("entrance_date").toString());
				 latest_promote_date=isYMD(list.get(i).get("latest_promote_date").toString());
				  if (!isNameAndNum) {
						errorstr.append("工号或老师姓名不一致 ");
				  }
				  if (!entrance_date) {
					  errorstr.append(" 老师入校日期格式不对 ");
				  }
				  if (!isDirthdate) {
					  errorstr.append(" 老师出生日期格式不对 ");
				  }
				  if (!latest_promote_date) {
					  errorstr.append(" 老师最近晋升日期格式不对 ");
				  }
				  String updatestr="update HR_TEACHERS_INFORMATION set error_log='"+errorstr.toString()+"' where id="+list.get(i).get("id");

				  try {
					DBConnection.Add(updatestr);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
				 int count=	hrTableTotalMapper.findErrorRecord("HR_TEACHERS_INFORMATION");
				    if (count>0) {
				    	//校验带有错误数据
				    	hrTableTotalMapper.updateTableECount("HR_TABLE_OPERATION_LOG", count, id,1);
					}else {
						//校验无错误数据
				    	hrTableTotalMapper.updateTableECount("HR_TABLE_OPERATION_LOG", count, id,2);
					}
		}
		List<Map<String,Object>> list1 = hrTableTotalMapper.selectData(selectSql);
		//装数据
		serviceResult.setData(list1);
		return serviceResult;
		
	}
/*	public static void main(String[] args) {
		 Pattern p = Pattern.compile("\\d\\d\\d\\d-[0-1]\\d-[0-3]\\d");
		 System.out.println(p.matcher("1992-5-20").matches()); 
	}*/
	//验证带有单双格式的
	public static boolean isClassSection(String str){
	    Pattern pattern = Pattern.compile("(单|双)\\[\\d{1,}-\\d{1,}\\]");
	    return pattern.matcher(str).matches();   
   } 
	//验证08:30这样的时间格式
	public static boolean istime(String str){
		Pattern p = Pattern.compile("[0-2]\\d:[0,6][0-9]");
		return p.matcher(str).matches();   
	}
	//验证1991-10-13这样的时间格式
		public static boolean isYMD(String str){
			Pattern p = Pattern.compile("\\d\\d\\d\\d-[0-1]\\d-[0-3]\\d");
			return p.matcher(str).matches();   
		}
    // 提交教师激励计划
	public void subDataStatusByHistoryId(Integer id) {
		hrTableTotalMapper.updateTableStatus("HR_TABLE_OPERATION_LOG",id,3);
	}
	//根据传入的不同表名 获取相应的数据
	public ServiceResult<Object> findTableData(String tablename,String tdtime){
		ServiceResult<Object>  serviceResult=new ServiceResult<Object>();
		serviceResult.setData(findTableData1(tablename, tdtime));
		serviceResult.setMsgCode(tablename);
		return serviceResult;
	}
	
	public  ServiceResult<Object> loginyz(String username,String pwd){
		//[{ username: 010278, pwd: 111111 }]
	    String userinfo="{\"username\":\""+username+"\", \"pwd\":\""+pwd+"\"}";
		String result=null;
		ServiceResult<Object> serviceResult=new ServiceResult<Object>();
	    System.out.println(userinfo);
		String cString = "<?xml version=\"1.0\" encoding=\"utf-8\"?>"
				+ "<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"
				+ " <soap:Body>"
				+ " <LogInVaild   xmlns=\"http://tempuri.org/\">"
				+ "   <userinfo>"+userinfo+"</userinfo>"
				+ " </LogInVaild >" 
				+ " </soap:Body>" + 
				"</soap:Envelope>";
		// 请求路径
		String urlString = "http://192.168.1.9/TQCCTest.asmx";
		String soapActionString = "http://tempuri.org/LogInVaild";
		try {
			URL url = new URL(urlString);
			HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
			httpConn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");
			// 请求头参数
			httpConn.setRequestProperty("Content-Length",String.valueOf(cString.length()));
			httpConn.setRequestProperty("Content-Type", "text/xml; charset=utf-8");
			httpConn.setRequestProperty("soapActionString", soapActionString);
			// 请求方式
			httpConn.setRequestMethod("POST");
			httpConn.setDoOutput(true);
			httpConn.setDoInput(true);
			// 发送请求内容
			OutputStream out = httpConn.getOutputStream();
			out.write(cString.getBytes());
			out.close();
			// 响应流
			InputStream is = httpConn.getInputStream();
			BufferedReader reader = new BufferedReader(new InputStreamReader(is,"UTF-8"));
	        StringBuilder sb = new StringBuilder();

	        String line = null;
	        try {
	            while ((line = reader.readLine()) != null) {
	            	sb.append(line);
	            	sb.append("\n"); //appende a new line
	            }
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	        
	        String xmlString = sb.toString();
			// close stream
			out.close();
			is.close();
		
			try {
				StringReader sr = new StringReader(xmlString);
				InputSource isSource = new InputSource(sr);
				DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
				DocumentBuilder builder = factory.newDocumentBuilder();
				Document document = builder.parse(isSource);

				Element rootElement = document.getDocumentElement(); // 获取根节点
				NodeList childNodes = rootElement.getChildNodes(); // 根节点下所有子节点
				result = childNodes.item(0).getTextContent();
			} catch (Exception ex) {
                ex.printStackTrace();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		serviceResult.setOk(true);
		serviceResult.setData(result);
		return serviceResult;
	}
	public ServiceResult<Object> confirmationReport(String userxx,String tablename,String tdtime,int id) {
		// a[0] 校历  a[1] 学校id a[2] 用户id
		String[] a=userxx.split("#");
		ArrayList<HashMap<String, Object>> lists1=findTableData1(tablename,tdtime);
		
		SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
		String result=null;
		//存放webservice的请求和方式
		String soapActionString =null;
		String  cString = null;
		
		   List<Map<String, Object>> sql=	moeImportMapper.findtablesql(id);
		    String time="'"+tdtime+"'";
		    String newSQL=sql.get(0).get("sql").toString().replace("@date",time);
		    System.out.println("这里的sql："+newSQL);
		    ArrayList<HashMap<String, Object>> lists =new ArrayList<HashMap<String,Object>>();
		    try {
				lists=DBConnection.executeQueryNoParams(newSQL);
			} catch (Exception e1) {
				e1.printStackTrace();
			}
		ServiceResult<Object> serviceResult=new ServiceResult<Object>();
		if (tablename.equals("课表信息")) {
			List<CourseTableEntity> listCourseTableEntities=new ArrayList<CourseTableEntity>();
			for (int i = 0; i < lists.size(); i++) {
				CourseTableEntity courseTableEntity=new CourseTableEntity();
				courseTableEntity.setDepartmentname(lists.get(i).get("course_department").toString());
				courseTableEntity.setCoursename(lists.get(i).get("curriculum_name").toString());
				courseTableEntity.setCoursecode(lists.get(i).get("curriculum_num").toString());
				courseTableEntity.setBearhours(lists.get(i).get("take_class").toString());
				courseTableEntity.setCampus(lists.get(i).get("campus").toString());
				courseTableEntity.setCommencementno(lists.get(i).get("class_num").toString());
				courseTableEntity.setCoursehours(lists.get(i).get("class_hour").toString());
				courseTableEntity.setCourselocation(lists.get(i).get("class_place").toString());
				courseTableEntity.setCoursetime(lists.get(i).get("hebingzhi").toString());
				courseTableEntity.setCoursetype(lists.get(i).get("curriculum_type").toString());
				courseTableEntity.setGrade(lists.get(i).get("student_class").toString());
				courseTableEntity.setImptime(simpleDateFormat.format(new Date()));
				courseTableEntity.setJobtitle(lists.get(i).get("technical_titles").toString());
				courseTableEntity.setRemark(lists.get(i).get("remarks").toString());
				courseTableEntity.setSchoolid(a[1]);
				courseTableEntity.setStudentnums(lists.get(i).get("students_num").toString());
				courseTableEntity.setTeachercode(lists.get(i).get("class_teacher_num").toString());
				courseTableEntity.setTeachername(lists.get(i).get("class_teacher").toString());
				courseTableEntity.setTeachernature(lists.get(i).get("teachers_attribute").toString());
				courseTableEntity.setUserid(a[2]);
				courseTableEntity.setXid(a[0]);
				listCourseTableEntities.add(courseTableEntity);
			}
		      result=JSONObject.toJSONString(listCourseTableEntities);
			  DemoService service =new DemoService();
			  DemoDelegate dd=service.getDemoPort();
			  serviceResult.setData(dd.insertListIntoCourse(result));
		}
		
		
		if (tablename.equals("坐班答疑信息表")) {
			// a[0] 校历  a[1] 学校id a[2] 用户id
			List<RequsetStuEntity> listsEntitysts=new ArrayList<RequsetStuEntity>();
			for (int i = 0; i < lists.size(); i++) {
				RequsetStuEntity requsetStuEntity=new RequsetStuEntity();
				requsetStuEntity.setAnnounceform(lists.get(i).get("report_form").toString());
				requsetStuEntity.setCampus(lists.get(i).get("answer_campus").toString());
				requsetStuEntity.setCoachhours(lists.get(i).get("answer_hour_sum").toString());
				requsetStuEntity.setCoachlocation(lists.get(i).get("answer_place").toString());
				requsetStuEntity.setCoachtime(lists.get(i).get("hebingzhi").toString());
				requsetStuEntity.setCoursecode(lists.get(i).get("curriculum_num").toString());
				requsetStuEntity.setCoursename(lists.get(i).get("curriculum_name").toString());
				requsetStuEntity.setDepartmentname(lists.get(i).get("course_department").toString());
				requsetStuEntity.setImptime(simpleDateFormat.format(new Date()));
				requsetStuEntity.setJobtitle(lists.get(i).get("technical_titles").toString());
				requsetStuEntity.setRemark(lists.get(i).get("remarks").toString());
				requsetStuEntity.setSchoolid(a[1]);
				requsetStuEntity.setTeachercode(lists.get(i).get("answer_teacher_num").toString());
				//lists.get(i).get("teachers_attribute").toString()
				requsetStuEntity.setTeachernature("");
				requsetStuEntity.setTeachername(lists.get(i).get("answer_teacher").toString());
				requsetStuEntity.setUserid(a[2]);
				requsetStuEntity.setXid(a[0]);
				listsEntitysts.add(requsetStuEntity);
			}
			  result=JSONObject.toJSONString(listsEntitysts);
			  DemoService service =new DemoService();
			  DemoDelegate dd=service.getDemoPort();
			  serviceResult.setData(dd.insertAnswerquestionInfoFromList(result));
		}
		
		if (tablename.equals("自习辅导信息")) {
			// a[0] 校历  a[1] 学校id a[2] 用户id
			List<SelfStudy> listsSelfStudies=new ArrayList<SelfStudy>();
			for (int i = 0; i < lists.size(); i++) {
				SelfStudy selfStudy=new SelfStudy(); 
				//lists.get(i).get("report_form").toString() 后期需要添加
				selfStudy.setAnnounceform("");
				selfStudy.setCampus(lists.get(i).get("campus").toString());
				selfStudy.setCoachhours(lists.get(i).get("cocah_last_total").toString());
				selfStudy.setCoachlocation(lists.get(i).get("cocah_place").toString());
				selfStudy.setCoachtime(lists.get(i).get("hebingzhi").toString());
				selfStudy.setCoursecode(lists.get(i).get("curriculum_num").toString());
				selfStudy.setCoursename(lists.get(i).get("curriculum_name").toString());
				selfStudy.setDepartmentname(lists.get(i).get("course_department").toString());
				selfStudy.setImptime(simpleDateFormat.format(new Date()));
				selfStudy.setJobtitle(lists.get(i).get("technical_titles").toString());
				selfStudy.setRemark(lists.get(i).get("remarks").toString());
				selfStudy.setSchoolid(a[1]);
				selfStudy.setSsid("");
				selfStudy.setTeachbuilding("");
				selfStudy.setTeachercode(lists.get(i).get("cocah_teacher_num").toString());
				selfStudy.setTeachername(lists.get(i).get("cocah_teacher").toString());
				//lists.get(i).get("teachers_attribute").toString()  后期需要添加
				selfStudy.setTeachernature("");
				selfStudy.setUserid(a[2]);
				selfStudy.setXid(a[0]);
				listsSelfStudies.add(selfStudy);
			}
			    result=JSONObject.toJSONString(listsSelfStudies);
				  DemoService service =new DemoService();
				  DemoDelegate dd=service.getDemoPort();
				  serviceResult.setData(dd.insertSelfStudyList(result));
		}
		if (tablename.equals("教师信息")) {
			List<TeacherInfoEntity> lEntities=new ArrayList<TeacherInfoEntity>();
			for (int i = 0; i < lists.size(); i++) {
				int sex=0;
				if (lists.get(i).get("teachers_attribute").toString().equals("男")) {
					sex=0;
				}else {
					sex=1;
				}
				TeacherInfoEntity teacherInfoEntity=new TeacherInfoEntity();
				teacherInfoEntity.setAddtime(simpleDateFormat.format(new Date()));
				teacherInfoEntity.setBirthdate(lists.get(i).get("birthdate").toString());
				teacherInfoEntity.setDepartment(lists.get(i).get("departments").toString());
				teacherInfoEntity.setDisciplines(lists.get(i).get("discipline").toString());
				teacherInfoEntity.setEdubackground(lists.get(i).get("academic_background").toString());
				teacherInfoEntity.setEnterdate(lists.get(i).get("entrance_date").toString());
				teacherInfoEntity.setGender(sex);
				teacherInfoEntity.setJobtitle(lists.get(i).get("technical_titles").toString());
				teacherInfoEntity.setLearnedge(lists.get(i).get("xy").toString());
				teacherInfoEntity.setPromotiondate(lists.get(i).get("latest_promote_date").toString());
				teacherInfoEntity.setRemark(lists.get(i).get("remarks").toString());
				teacherInfoEntity.setTeachername(lists.get(i).get("teacher_name").toString());
				teacherInfoEntity.setSchoolid(a[1]);
				teacherInfoEntity.setTeachernature(lists.get(i).get("teachers_attribute").toString());
				teacherInfoEntity.setTopdegree(lists.get(i).get("highest_degree").toString());
				teacherInfoEntity.setUserid(a[2]);
				teacherInfoEntity.setXid(a[0]);
				teacherInfoEntity.setTeachercode(lists.get(i).get("teacher_num").toString());
				lEntities.add(teacherInfoEntity);
			}
			  result=JSONObject.toJSONString(lEntities);
			  DemoService service =new DemoService();
			  DemoDelegate dd=service.getDemoPort();
			  serviceResult.setData(dd.insertTeacherInfoFromList(result));
		}
			return serviceResult;
	}
	
	public static ArrayList<HashMap<String, Object>> findTableData1(String tablename,String tdtime){
		if (tablename.equals("课表信息")) {
			StringBuffer kbxx=new StringBuffer();
			kbxx.append("select course_department,curriculum_name,curriculum_num,curriculum_type,class_hour, ");
			kbxx.append("class_num,hebingzhi, ");
			kbxx.append("campus,class_place, ");
			kbxx.append("students_num,student_class,class_teacher,class_teacher_num, ");
			kbxx.append("technical_titles,take_class,teachers_attribute,remarks, ");
			kbxx.append("statistics_time  into  #A1  ");
			kbxx.append("from  ");
			kbxx.append("(select course_department,curriculum_name,curriculum_num,curriculum_type,class_hour, ");
			kbxx.append("class_num, ");
			kbxx.append("case when SUBSTRING(class_section,0,1)='单' or  SUBSTRING(class_section,0,1)='双' ");
			kbxx.append("then class_week+'_'+class_week_num+'_'+class_section ");
			kbxx.append("else class_week+'_'+class_week_num+'_['+class_section+']' ");
			kbxx.append("end as hebingzhi, ");
			kbxx.append("campus,class_place, ");
			kbxx.append("students_num,student_class,class_teacher,class_teacher_num, ");
			kbxx.append("technical_titles,take_class,teachers_attribute,remarks, ");
			kbxx.append("statistics_time ");
			kbxx.append("from HR_SCHEDULE_INFORMATION where statistics_time='");
			kbxx.append(tdtime);
			kbxx.append("')t ");
			kbxx.append("select course_department,curriculum_name,curriculum_num,curriculum_type,class_hour, ");
			kbxx.append("class_num,hebingzhi, ");
			kbxx.append("campus,class_place, ");
			kbxx.append("students_num,student_class,class_teacher,class_teacher_num, ");
			kbxx.append("technical_titles,take_class,teachers_attribute,remarks, ");
			kbxx.append("statistics_time ");
			kbxx.append("from  ");
			kbxx.append("( ");
			kbxx.append("select DISTINCT course_department,curriculum_name,curriculum_num,curriculum_type,class_hour, ");
			kbxx.append("class_num,hebingzhi, ");
			kbxx.append("campus,class_place, ");
			kbxx.append("students_num,student_class,class_teacher,class_teacher_num, ");
			kbxx.append("technical_titles,take_class,teachers_attribute,remarks, ");
			kbxx.append("statistics_time ");
			kbxx.append("from #A1 ");
			kbxx.append(" ");
			kbxx.append(")A   OUTER APPLY( ");
			kbxx.append("SELECT [values]= STUFF(REPLACE(REPLACE( ");
			kbxx.append("( ");
			kbxx.append("SELECT hebingzhi FROM #A1 N ");
			kbxx.append("WHERE curriculum_name = A.curriculum_name and class_num=A.class_num and class_place=A.class_place and class_teacher_num=A.class_teacher_num ");
			kbxx.append("FOR XML AUTO ");
			kbxx.append("), '<N hebingzhi=\"', ','), '\"/>', ''), 1, 1, '') ");
			kbxx.append(")N ");
			kbxx.append("drop table #A1"); 
			try {
				ArrayList<HashMap<String, Object>> hashMaps= DBConnection.executeQueryNoParams(kbxx.toString());
				return hashMaps;
			} catch (Exception e) {
				e.printStackTrace();
			}
		 }
			if (tablename.equals("答疑信息")) {
				StringBuffer xyxx=new StringBuffer();
				xyxx.append("select  course_department,curriculum_name,curriculum_num,");
				xyxx.append("hebingzhi, ");
				xyxx.append("answer_time_zc,campus, ");
				xyxx.append("answer_place,answer_teacher, ");
				xyxx.append("answer_teacher_num,technical_titles,report_form,remarks,statistics_time  into  #A1 ");
				xyxx.append("from ");
				xyxx.append("(select course_department,curriculum_name,curriculum_num, ");
				xyxx.append("case when SUBSTRING(answer_time_h,0,1)='单' or  SUBSTRING(answer_time_h,0,1)='双' ");
				xyxx.append("then answer_hour+'_'+answer_time+'_'+answer_time_h ");
				xyxx.append("else answer_hour+'_'+answer_time+'_['+answer_time_h+']' ");
				xyxx.append("end as hebingzhi, ");
				xyxx.append("answer_time_zc,campus, ");
				xyxx.append("answer_place,answer_teacher, ");
				xyxx.append("answer_teacher_num,technical_titles,report_form,remarks,statistics_time ");
				xyxx.append("from HR_ANSWER_INFORMATION where statistics_time='");
				xyxx.append(tdtime);
				xyxx.append("')t ");
				xyxx.append("select course_department,curriculum_name,curriculum_num, ");
				xyxx.append("hebingzhi, ");
				xyxx.append("answer_time_zc,campus, ");
				xyxx.append("answer_place,answer_teacher, ");
				xyxx.append("answer_teacher_num,technical_titles,report_form,remarks,statistics_time ");
				xyxx.append("from ( ");
				xyxx.append("select DISTINCT course_department,curriculum_name,curriculum_num, ");
				xyxx.append("hebingzhi, ");
				xyxx.append("answer_time_zc,campus, ");
				xyxx.append("answer_place,answer_teacher, ");
				xyxx.append("answer_teacher_num,technical_titles,report_form,remarks,statistics_time ");
				xyxx.append("from #A1 ");
				xyxx.append(")A   OUTER APPLY( ");
				xyxx.append("  SELECT [values]= STUFF(REPLACE(REPLACE( ");
				xyxx.append("( ");
				xyxx.append(" SELECT hebingzhi FROM #A1 N ");
				xyxx.append("  WHERE curriculum_name = A.curriculum_name and answer_time_zc=A.answer_time_zc and answer_place=A.answer_place and answer_teacher_num=A.answer_teacher_num");
				xyxx.append(" FOR XML AUTO");
				xyxx.append(" ), '<N hebingzhi=\"', ','), '\"/>', ''), 1, 1, '') ");
				xyxx.append(")N ");
				xyxx.append("drop table #A1");
				try {
					ArrayList<HashMap<String, Object>> hashMaps= DBConnection.executeQueryNoParams(xyxx.toString());
					return hashMaps;
				} catch (Exception e) {
					e.printStackTrace();
				}
			} 
			if (tablename.equals("自习辅导信息")) {
				StringBuffer zxfdxx=new StringBuffer();
				zxfdxx.append("select  course_department,curriculum_name,curriculum_num, ");
				zxfdxx.append("hebingzhi, ");
				zxfdxx.append("campus,coach_place,coach_teacher, ");
				zxfdxx.append("coach_teacher_num,technical_titles,report_form,remarks,statistics_time ");
				zxfdxx.append("  into  #A1 ");
				zxfdxx.append("from ");
				zxfdxx.append("(select course_department,curriculum_name,curriculum_num, ");
				zxfdxx.append(" case when SUBSTRING(coach_time_num,0,1)='单' or  SUBSTRING(coach_time_num,0,1)='双' ");
				zxfdxx.append(" then coach_hour+'_'+coach_time_week+'_'+coach_time_num ");
				zxfdxx.append(" else coach_hour+'_'+coach_time_week+'_['+coach_time_num+']' ");
				zxfdxx.append(" end as hebingzhi,");
				zxfdxx.append("campus,coach_place,coach_teacher,");
				zxfdxx.append("coach_teacher_num,technical_titles,report_form,remarks,statistics_time ");
				zxfdxx.append("from HR_STUDY_INFORMATION where statistics_time='");
				zxfdxx.append(tdtime);
				zxfdxx.append("')t ");
				zxfdxx.append("select  course_department,curriculum_name,curriculum_num, ");
				zxfdxx.append("hebingzhi,");
				zxfdxx.append("campus,coach_place,coach_teacher, ");
				zxfdxx.append("coach_teacher_num,technical_titles,report_form,remarks,statistics_time ");
				zxfdxx.append("from (");
				zxfdxx.append(" select DISTINCT  course_department,curriculum_name,curriculum_num,");
				zxfdxx.append("hebingzhi, ");
				zxfdxx.append("campus,coach_place,coach_teacher, ");
				zxfdxx.append("coach_teacher_num,technical_titles,report_form,remarks,statistics_time ");
				zxfdxx.append("from #A1");
				zxfdxx.append(")A   OUTER APPLY(");
				zxfdxx.append("SELECT [values]= STUFF(REPLACE(REPLACE(");
				zxfdxx.append("(");
				zxfdxx.append("  SELECT hebingzhi FROM #A1 N");
				zxfdxx.append("  WHERE curriculum_name = A.curriculum_name and technical_titles=A.technical_titles and coach_place=A.coach_place and coach_teacher_num=A.coach_teacher_num");
				zxfdxx.append("  FOR XML AUTO");
				zxfdxx.append("), '<N hebingzhi=\"', ','), '\"/>', ''), 1, 1, '')");
				zxfdxx.append(")N ");
				zxfdxx.append("drop table #A1");
				try {
					ArrayList<HashMap<String, Object>> hashMaps= DBConnection.executeQueryNoParams(zxfdxx.toString());
					return hashMaps;
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			if (tablename.equals("教师信息（基础表）")) {
				StringBuffer kbxx=new StringBuffer();
				kbxx.append("select * from HR_TEACHERS_INFORMATION where statistics_time='"+tdtime+"'");
				try {
					ArrayList<HashMap<String, Object>> hashMaps= DBConnection.executeQueryNoParams(kbxx.toString());
					return hashMaps;
				} catch (Exception e) {
					e.printStackTrace();
				}
				
			}
			return null;
	}
	
	
	public  ServiceResult<Object> loginyzTwo(String username,String pwd){
	  
	      String serviceURL = "http://202.120.199.112/JWInterface/demoPort?wsdl";  
	      //  org.codehaus.xfire.service.Service serviceModel = new ObjectServiceFactory().create(xxx.class);  
	       // XFireProxyFactory serviceFactory = new XFireProxyFactory();  
	    /*    try{  
	            xxxservice = (xxx) serviceFactory.create(serviceModel, serviceURL);  
	            System.out.println(service.xxxx());  
	        }catch (Exception e){  
	            e.printStackTrace();  
	        } */ 
	      
	      DemoService service =new DemoService();
		  DemoDelegate dd=service.getDemoPort();
		  String userinfo="{\"username\":\""+username+"\", \"pwd\":\""+pwd+"\"}";
		  ServiceResult<Object> serviceResult=new ServiceResult<Object>();
		  serviceResult.setData(dd.logInVaild(userinfo));
		  if (dd.logInVaild(userinfo).equals("user is not exsit")) {
			  serviceResult.setOk(false);
		  }else {
			  serviceResult.setOk(true);
		  }
		  return serviceResult;
	}
	
	
	public static void main(String[] args) {
		//loginyz("010278","111111");
//		DemoService service =new DemoService();
//		DemoDelegate dd=service.getDemoPort();
//		System.out.println(dd.myHelloworld("hello"));
//		
		//loginyzTwo("010278","111111");
		
	}

	
}
