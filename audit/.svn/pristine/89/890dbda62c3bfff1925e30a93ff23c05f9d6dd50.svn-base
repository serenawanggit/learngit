package audit.service.impl;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import audit.common.ServiceResult;
import audit.dao.AsCustomVoMapper;
import audit.dao.MoeImportMapper;
import audit.model.AsCtemplateStandard;
import audit.model.AsCustomVo;
import audit.service.AsCtemplateStandardService;
import audit.service.AsCustomVoServices;
import audit.service.MoeImportServices;
import audit.util.CookieUtil;
import audit.util.DBConnection;
import audit.util.ExportExcelUtil;

@Service("moeImportServices")
public class MoeImportServicesImpl implements MoeImportServices {

	@Autowired 
	private MoeImportMapper moeImportMapper;
	@Autowired
	private AsCustomVoServices asCustomVoServices;
    @Autowired
	private AsCtemplateStandardService asCtemplateStandardService;
	
	@Autowired
	private AsCustomVoMapper asCustomVoMapper;
	public ServiceResult<Object> findMOETable(HttpServletRequest request) {
	     ServiceResult<Object> sResult=	new ServiceResult<Object>();
	 	int userId = 0;
		String userName = "";
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		//Integer.parseInt(userId) 
	      List<Map<String, Object>> userlist=   moeImportMapper.findShowCan(userId);
	      int roleid=Integer.parseInt(moeImportMapper.findUserByid(userId).get(0).get("role").toString());
		  String rolename = moeImportMapper.findRolebyid(roleid).get(0).get("name").toString();
	      JSONObject jObject=new JSONObject();
		  //查询出当前登陆人是否是填报人和审核人
		  if (userlist.size()>0 ) {
			  for (int i = 0; i < userlist.size(); i++) {
		    	  String a=userlist.get(i).get("ROLE_STATE").toString();
			      if (a.equals("0")) {
			    	  //填报人
			    	  jObject.accumulate("tbr", a);
				  }else if (a.equals("1")) {
					  //审核人
					  jObject.accumulate("shr", a);
				  } else if (a.equals("2")) {
					  //再授权 未开始
				  }
			  }
		  }
		  jObject.accumulate("userRole", rolename);
		  if (rolename.equals("校级管理员")) {
			 /* jObject.accumulate("tablelist", moeImportMapper.findAllTable());*/
			  jObject. accumulate("content", moeImportMapper.findMOETableByAdmin());
		  }else{
			  if(userlist.size()>0){
			  jObject.accumulate("content", moeImportMapper.findMOETable(userId));
			/*  jObject.accumulate("tablelist", moeImportMapper.findAllTable());*/
			  }
		  }
	      sResult.setData(jObject.toString());
		  return sResult;
	}
    
	
	public void importMOETable(MultipartFile file, String insert_version, int id,int userid) {
		   List<Map<String, Object>> list=	moeImportMapper.findMOETableById(id);
		   String	filename=file.getOriginalFilename().substring(0,file.getOriginalFilename().indexOf("."));
	         List<AsCustomVo> asCustomVos= asCustomVoServices.searchAsCustomVoByOfn(filename);
	      /*   //教师激励计划
		   List<AsCustomVo> asCustomVos=  asCustomVoServices.searchAsCustomVoByOfn(list.get(0).get("TEMPLATE_NAME").toString());*/
		   try {
		     String sql =	MoeImportServicesImpl.str(file, asCustomVos, 0, userid, insert_version);
			  DBConnection.Add(sql);
			/*  //上理工教师激励计划打开
			  String sql1="update MOE_REPORT_TABLE set TBZT=1 ,SHZT=0 , insert_version='"+insert_version+"' where  TABLE_ID="+id+" and tbr="+userid+";";
			  DBConnection.Add(sql1);*/
		   } catch (Exception e) {
				e.printStackTrace();
		   }
	}

	public ServiceResult<Object> showData(int state, int id,String insert_version,int userid) throws Exception {
		//获取当前导入表的字段
		List<AsCustomVo> asCustomVos= asCustomVoMapper.findCTNAndOFNByTid(id);
		//获取当前导入表对应的数据库表名
		List<Map<String, Object>> list=	moeImportMapper.findMOETableById(id);
		
		 //根据 标准模版查询对应数据库表名
		 AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(id);
		
		 String sql="select * from TEM_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+insert_version+"' and userid="+userid+" and cname='"+asCustomVos.get(0).getCtemplateName()+"'";
			    sql+=" and state="+1;
          String[] ctemplateTitleName=new String[asCustomVos.size()+1];
		  String[] objectFieldName =new String[asCustomVos.size()+1];
		  for (int i = 0; i < asCustomVos.size(); i++) {
			  //获取自定义列表名
			  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
			  //获取列对应的数据库字段名
			  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
		   }
		    ctemplateTitleName[asCustomVos.size()]="错误信息";
         //存放得到的数据集合
         ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQueryNoParams(sql);
         List a=new ArrayList();
         //得到自定义模版所需的数据
         for (int i = 0; i < oArrayList.size(); i++) {
      	   String[] b= new String[objectFieldName.length+1];
      	   for (int j = 0; j < objectFieldName.length-1; j++) {
      			   b[j+1]= oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
      			   b[0]=oArrayList.get(i).get("id").toString();
      	   }
      	  
      	   String errorLog= (String) oArrayList.get(i).get("error_log");
      	   b[asCustomVos.size()+1]=(errorLog==null?" ":errorLog);
			   a.add(b);
			   b = null;
		   }
              
			  JSONArray jsontitle=JSONArray.fromObject(ctemplateTitleName);
			  JSONArray jsontablename=JSONArray.fromObject(objectFieldName);
			  JSONArray jsoncontent=JSONArray.fromObject(a);
			  //获取当前用户数据表提交记录  用户暂时死的
			  JSONArray jsonuserstate=JSONArray.fromObject(moeImportMapper.findUserSubmitState(id, userid,insert_version));
	    	  JSONObject jObject=new JSONObject();
	    	  jObject.accumulate("title", jsontitle);
	    	  jObject.accumulate("tablename", jsontablename);
	    	  jObject.accumulate("content", jsoncontent);
	    	  jObject.accumulate("size", a.size());
	    	  jObject.accumulate("tableType", asCustomVos.get(0).getCategoryId());
	    	  jObject.accumulate("userstate", jsonuserstate);
	    	  if (oArrayList.size()!=0) {
	    		  jObject.accumulate("rname", oArrayList.get(0).get("rname"));
			  }
	    	 ServiceResult<Object> serviceResult= new ServiceResult<Object>();
	    	 serviceResult.setData(jObject.toString());
		     return serviceResult;
	}


	public void updateTBZTByid(int id) {
		moeImportMapper.updateTBZTByid(id);
	}


	public ServiceResult<Object> findSHRLookData(
			String insert_version, int tableid,int userid) {
		//获取当前登录
		int orgid=Integer.parseInt(moeImportMapper.findUserByid(userid).get(0).get("organization").toString());
		ServiceResult<Object> serviceResult =new ServiceResult<Object>();
		serviceResult.setData(moeImportMapper.findSHRLookData(orgid, insert_version, tableid));
		return serviceResult;
	}
    
	public void passOrNotPass(int state,int id){
		//state==1表示未通过 state==2 表示通过
		if (state==1) {
			moeImportMapper.updateNotPass(id);
		}else if (state==2) {
			moeImportMapper.updatePass(id);
		}
		
	}

	public ServiceResult<Object> findSBData(int id, String insert_version) {
	    List<Map<String, Object>> sql=	moeImportMapper.findtablesql(id);
	    String time="'"+insert_version+"'";
	    String newSQL=sql.get(0).get("sql").toString().replace("@date",time);
	    ServiceResult<Object> serviceResult=new ServiceResult<Object>();
	    try {
		 serviceResult.setData( DBConnection.executeQueryNoParams(newSQL));
		 serviceResult.setOk(true);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return serviceResult;
	}


	public ServiceResult<Object> extractData(String userlist, String showName,
			String time,int tableid) {
		   StringBuffer error= new StringBuffer();
		   String sql="{call SP_UP_ODS_MOE(?,?,?,?)}";
		   JSONArray jsonArray=JSONArray.fromObject(userlist);
		   for (int i = 0; i < jsonArray.length(); i++) {
			   int userid=Integer.parseInt(jsonArray.get(i).toString());
			   try {
				  String a=DBConnection.procOutSimple(sql,showName,time,userid,"");
				  String sql1="update MOE_REPORT_TABLE set TBZT=4 ,SHZT=3  where tbr="+userid+" and table_id="+tableid;
				 System.out.println("语句："+sql1);
				  DBConnection.Add(sql1);
				  if (a!=null) {
					  error.append("第 "+(i+1)+" 行 : "+a+"!");
				  }else {
					  error.append("第 "+(i+1)+" 行 : 导入成功！");
				  }
				} catch (Exception e) {
					e.printStackTrace();
				}
		    }
		   ServiceResult<Object> serviceResult=new ServiceResult<Object>();
		   serviceResult.setMsgCode(error.toString());
		return serviceResult;
	}
	
	/**
	 * 在线修改
	 */
	public void editdata(String value, int dataid, int tablename,String dataname) {
	   List<Map<String, Object>> list=	moeImportMapper.findField(tablename,dataname);
	      //OBJECT_TABLE
	     String sql= "update TEM_"+ list.get(0).get("OBJECT_TABLE")+" SET "+list.get(0).get("OBJECT_FIELD_NAME")+"='"+value+"' where id="+dataid;
	     try {
			DBConnection.Add(sql);
			} catch (Exception e) {
				e.printStackTrace();
			}
		 
	} 
	

	public void downdata(int id, String insert_version, int userid,HttpServletResponse response) throws Exception {
		
		//获取当前导入表的字段
				List<AsCustomVo> asCustomVos= asCustomVoMapper.findCTNAndOFNByTid(id);
				//获取当前导入表对应的数据库表名
				insert_version= new String(insert_version.getBytes("iso-8859-1"),"UTF-8");
				AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(id);
				List<Map<String, Object>> list=	moeImportMapper.findMOETableById(id);
				 String sql="select * from TEM_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+insert_version+"' and userid="+userid+" and cname='"+asCustomVos.get(0).getCtemplateName()+"'";
					    sql+=" and state="+1;
		          String[] ctemplateTitleName=new String[asCustomVos.size()+1];
				  String[] objectFieldName =new String[asCustomVos.size()+1];
				  for (int i = 0; i < asCustomVos.size(); i++) {
					  //获取自定义列表名
					  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
					  //获取列对应的数据库字段名
					  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
				   }
				    ctemplateTitleName[asCustomVos.size()]="错误信息";
		         //存放得到的数据集合
		         ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQueryNoParams(sql);
		         List a=new ArrayList();
		         //得到自定义模版所需的数据
		         for (int i = 0; i < oArrayList.size(); i++) {
		      	   String[] b= new String[objectFieldName.length];
		      	   for (int j = 0; j < objectFieldName.length-1; j++) {
		      			   b[j]= oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
		      	   }
		      	  
		      	   String errorLog= (String) oArrayList.get(i).get("error_log");
		      	   b[asCustomVos.size()]=(errorLog==null?" ":errorLog);
					   a.add(b);
					   b = null;
				   }
		         ExportExcelUtil.exportPassExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
	}
	
	
	/*
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 下面的方法为导入数据验证
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 */
	
	public static String str(MultipartFile file, List<AsCustomVo> asCustomVos,Integer cjrwztbid,Integer  useId,String insert_version) throws Exception {
		/*			// 将传入的File构造为FileInputStream;
				FileInputStream in = new FileInputStream(file.getContentType());*/
				// // 得到工作表
			    String filename=file.getOriginalFilename().substring(file.getOriginalFilename().indexOf(".")); 
				/*//教师激励计划
			    String cname=asCustomVos.get(0).getTemplateName(); */
			    String cname=asCustomVos.get(0).getCtemplateName();
				String rname=asCustomVos.get(0).getTemplateName();
			    Row title =null;
				Iterator<Row> row=null;
				StringBuilder sql=new StringBuilder();
				String [] str= new String[asCustomVos.size()];
				//System.out.println("现在的大小是："+asCustomVos.size());
				Date date=new Date();
				Map<String, String> hashMap=new HashMap<String, String>();
				// 填充  表头 和 列名
				for (int i = 0; i < asCustomVos.size(); i++) {
					hashMap.put(asCustomVos.get(i).getCtemplateTitleName(), asCustomVos.get(i).getObjectFieldName());
				}
			
				if (filename.equals(".xlsx")) {
						XSSFWorkbook book = new XSSFWorkbook(file.getInputStream());
						 // 得到第一页
						XSSFSheet sheet = book.getSheetAt(0);
						 // 得到第一面的所有行
						row = sheet.rowIterator();
						// 得到第一行，也就是标题行
						 title = row.next();
					}else {
						HSSFWorkbook book = new HSSFWorkbook(file.getInputStream());
						// // 得到第一页
						HSSFSheet sheet = book.getSheetAt(0);
						// // 得到第一面的所有行
						row = sheet.rowIterator();
						// 得到第一行，也就是标题行
						 title = row.next();
					}
					
					// 得到第一行的所有列
					Iterator<Cell> cellTitle = title.cellIterator();
					// 将标题的文字内容放入到一个list中。
					List<String> titlelist = new ArrayList<String>();
					// 从标题第一列开始
					int i = 0;
					// 循环标题所有的列
					while (cellTitle.hasNext()) {
						Cell cell = cellTitle.next();
						String value = cell.getStringCellValue();
					    titlelist.add(hashMap.get(value));
						i = i + 1;
					}
		/*		// 用来格式化日期的DateFormat
					SimpleDateFormat sf;
					if (pattern.length < 1) {
						sf = new SimpleDateFormat("yyyy-MM-dd");
					} else{
						sf = new SimpleDateFormat(pattern[0]);
					}*/
					while (row.hasNext()) {
						// 标题下的第一行
						Row rown = row.next();
						// 得到传入类的实例
						int k = 0;
						// 遍历一行的列
						while (k<i) {
						     	 str[k]=rown.getCell(k)==null?" ":rown.getCell(k).toString();
							     k = k + 1;
						}
						sql.append("insert into TEM_" + asCustomVos.get(0).getObjectTable()+" ( ");
						   for (int j = 0; j < titlelist.size(); j++) {
							   if (j<titlelist.size()-1) {
								   sql.append(titlelist.get(j)+",");
							   }
							   if(j>=titlelist.size()-1){
								   sql.append(titlelist.get(j));
							   }
						   }
						   sql.append(",cname,rname,userid,insert_version,state,insert_time) values ( ");
						   for (int l = 0; l < str.length; l++) {
							   if (l<str.length-1) {
								   		//判断时间格式
										if (str[l].indexOf("月-")>0) {
											  String[] dateStr= str[l].split("-");
											  String dateString=dateStr[2]+"-"+forMartDate(dateStr[1])+"-"+dateStr[0];
											  sql.append("'"+dateString+"',");
										}else {
											   //判断整数去小数点
								            if (str[l].indexOf(".")>0) {
								            	 String num=forInt(str[l].toString());
								            	 if (num.indexOf("E")>0) {
										            	String a=str[l].substring(str[l].indexOf("E")+1);
										            	if (isNumeric(a)) {
										            		BigDecimal db = new BigDecimal(num);
											    			String ii = db.toPlainString();
															sql.append("'"+ii+"',");
														}else {
															sql.append("'"+num+"',");
														};
												 }else {
													 sql.append("'"+num+"',");
												 }
											}else {
												sql.append("'"+str[l]+"',");
											}
										}
								
								   }
							   
							   if (l>=str.length-1) {
							       if (str[l].indexOf("月-")>0) {
									  String[] dateStr= str[l].split("-");
									  String dateString=dateStr[2]+"-"+forMartDate(dateStr[1])+"-"+dateStr[0];
									  sql.append("'"+dateString+"'");
								   }else {
									   //判断整数去小数点
							            if (str[l].indexOf(".")>0) {
							            	 String num=	forInt(str[l].toString());
							            	 if (num.indexOf("E")>0) {
												   String a=str[l].substring(str[l].indexOf("E"));
									            	if (isNumeric(a)) {
									            		BigDecimal db = new BigDecimal(str[l]);
										    			String ii = db.toPlainString();
														sql.append("'"+ii+"'");
													}else {
														sql.append("'"+num+"'");
													};
											  }else {
												  sql.append("'"+num+"'");
											  }
										} 
							            else {
											sql.append("'"+str[l]+"'");
										}
							    	}
							   }
						    }
						   //state为1时表示未检验
						   sql.append(",'"+cname+"'"+",'"+rname+"',"+useId+",'"+insert_version+"',"+1+",getdate());");
					}
					System.out.println(sql);
				return sql.toString();
		    }
	
	 public static String forMartDate(String str){
	    	if (str.equals("一月")) {
				return "1";
			}
	    	if (str.equals("二月")) {
				return "2";
			}
	    	if (str.equals("三月")) {
				return "3";
			}
	    	if (str.equals("四月")) {
				return "4";
			}
	    	if (str.equals("五月")) {
				return "5";
			}
	    	if (str.equals("六月")) {
				return "6";
			}
	    	if (str.equals("七月")) {
				return "7";
			}
	    	if (str.equals("八月")) {
				return "8";
			}
	    	if (str.equals("九月")) {
				return "9";
			}
	    	if (str.equals("十月")) {
				return "10";
			}
	    	if (str.equals("十一月")) {
				return "11";
			}
	    	if (str.equals("十二月")) {
				return "12";
			}
			return null;
	    }
	    public static String forInt(String str){
			   //判断整数去小数点
			         if (str.indexOf(".")>0) {
						  String a=str.toString();
						  String num= a.substring(a.indexOf("."));
						  if (num.equals(".0")) {
							 return a.substring(0,a.indexOf("."));
						  }else {
							 return a;
						}
			         }
			return null;
	    	
	    }
	    
	    public static boolean isNumeric(String str){
	    	/*System.out
			.println("值："+str);*/
		    Pattern pattern = Pattern.compile("^[0-9]*$");
		    if(str.trim().equals("")){
		    	return false;
		    }else {
		    	return pattern.matcher(str).matches(); 
			}
	    }


		public void checkdata(int id, String insert_version, int userid) throws Exception {
         
			List<AsCustomVo> asCustomVos= asCustomVoMapper.findCTNAndOFNByTid(id);
			//获取当前导入表对应的数据库表名
			 List<Map<String, Object>> list=	moeImportMapper.findMOETableById(id);
			 String sql="select * from TEM_"+list.get(0).get("OBJECT_TABLE")+" where insert_version='"+insert_version+"' and userid="+userid+" and rname='"+list.get(0).get("TEMPLATE_NAME")+"'";
				    sql+=" and state="+1;
	         //存放得到的数据集合
	         ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQueryNoParams(sql);
	         //获取当前上报版本的教师全部信息
	         List<Map<String, Object>> listTeacher= moeImportMapper.findMoeTeacherInfo(insert_version);
	         boolean flag=false;
	         //此处校验规则写死 ， 重科需要灵活 ，MOE_TEACHER_INFO
	         StringBuffer stringBuffer=new StringBuffer();
	         if (list.get(0).get("OBJECT_TABLE").equals("MOE_ANSWER_INFORMATION")) {
	        	 for (int i = 0; i < oArrayList.size(); i++) {
					for (int j = 0; j < listTeacher.size(); j++) {
						if (listTeacher.get(j).get("teacher_name").equals(oArrayList.get(i).get("answer_teacher")) &&  listTeacher.get(j).get("teacher_num").equals(oArrayList.get(i).get("answer_teacher_num"))){
							  flag=false;
							  break;
						}else {
							  flag=true;
						}
					}
					if (flag) {
						 stringBuffer.append("update TEM_MOE_ANSWER_INFORMATION set error_log='教师姓名和工号，不存在或者不匹配' where id="+oArrayList.get(i).get("id")+";");
					}
				 }
			 }
	         DBConnection.Add(stringBuffer.toString());
		}


		public void cleanData(int id, String insert_version, int userid) {
			 //根据 标准模版查询对应数据库表名
		   AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(id);
		   String sql="DELETE FROM TEM_"+asCtemplateStandard.getObjectTable()+" where userid="+userid+" and insert_version='"+insert_version+"';";
		          sql+="update MOE_REPORT_TABLE set TBZT=0,SHZT=0 where tbr="+userid+" and TABLE_ID="+id+" and insert_version='"+insert_version+"';";
		   try {
				DBConnection.Add(sql);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}


		public void importSBdata(int id, String insert_version,HttpServletResponse response) throws Exception {
			List<AsCustomVo> asCustomVos= asCustomVoMapper.findCTNAndOFNByTid(id);
			//获取当前导入表对应的数据库表名
			insert_version= new String(insert_version.getBytes("iso-8859-1"),"UTF-8");
		 	List<Map<String, Object>> sql1=	moeImportMapper.findtablesql(id);
		    String time="'"+insert_version+"'";
		    String newSQL=sql1.get(0).get("sql").toString().replace("@date",time);
			if (id==254) {
		        String[] ctemplateTitleName={"开课院系","课程名称","课程代码","本学期答疑总时数","答疑时间","校区","答疑地点","答疑教师","答疑教师工号","答疑教师专业技术职称","答疑时间地点公布形式","备注","统计时间"};
		        List<Object[]> a= DBConnection.executeQueryNoParamsList(newSQL);
		        ExportExcelUtil.exportPassExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
		    }
			if (id==257) {
		        String[] ctemplateTitleName={"教师工号","教师姓名","性别","教师属性","出生日期","入校日期","所属院系","学历","最高学位","学缘","专业技术职称","最近晋升日期","学科门类","备注"};
		        List<Object[]> a= DBConnection.executeQueryNoParamsList(newSQL);
		        ExportExcelUtil.exportPassExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
		    }
			if (id==258) {
				//,"辅导时间地点公布形式"
		        String[] ctemplateTitleName={"开课院系","课程名称","课程代码","本学期辅导总时数","辅导时间","校区","辅导地点","辅导教师","辅导教师工号","辅导教师专业技术职称","备注","统计时间"};
		        List<Object[]> a= DBConnection.executeQueryNoParamsList(newSQL);
		        ExportExcelUtil.exportPassExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
		    }
			if (id==259) {
		        String[] ctemplateTitleName={"开课院系","课程名称","课程代码","课程类型","课时总数","开课号","上课时间","校区","上课地点","选课人数","所在班级","任课教师","任课教师工号","任课教师专业技术职称","任课教师承担课时","教师属性","备注","统计时间"};
		        List<Object[]> a= DBConnection.executeQueryNoParamsList(newSQL);
		        ExportExcelUtil.exportPassExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
		    }
		}


		public void shDataImport(int id, String inser_version, int tbr,
				HttpServletResponse response) throws Exception {
			//获取当前导入表的字段
			List<AsCustomVo> asCustomVos= asCustomVoMapper.findCTNAndOFNByTid(id);
			//获取当前导入表对应的数据库表名
			inser_version= new String(inser_version.getBytes("iso-8859-1"),"UTF-8");
			List<Map<String, Object>> list=	moeImportMapper.findMOETableById(id);
			 String sql="select * from TEM_"+list.get(0).get("OBJECT_TABLE")+" where insert_version='"+inser_version+"' and userid="+tbr+" and rname='"+list.get(0).get("TEMPLATE_NAME")+"'";
	          String[] ctemplateTitleName=new String[asCustomVos.size()+1];
			  String[] objectFieldName =new String[asCustomVos.size()+1];
			  for (int i = 0; i < asCustomVos.size(); i++) {
				  //获取自定义列表名
				  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
				  //获取列对应的数据库字段名
				  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
			   }
			 ctemplateTitleName[asCustomVos.size()]="错误信息";
	         //存放得到的数据集合
	         ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQueryNoParams(sql);
	         List a=new ArrayList();
	         //得到自定义模版所需的数据
	         for (int i = 0; i < oArrayList.size(); i++) {
	      	   String[] b= new String[objectFieldName.length];
	      	   for (int j = 0; j < objectFieldName.length-1; j++) {
	      			   b[j]= oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
	      	   }
	      	  
	      	   String errorLog= (String) oArrayList.get(i).get("error_log");
	      	   b[asCustomVos.size()]=(errorLog==null?" ":errorLog);
				   a.add(b);
				   b = null;
			   }
	         ExportExcelUtil.exportPassExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
		}


		public ServiceResult<Object> findsbdataForJYB(int id, String insert_version,int userid) throws Exception {
			//获取当前导入表的字段
			List<AsCustomVo> asCustomVos= asCustomVoMapper.findCTNAndOFNByTid(id);
			//获取当前导入表对应的数据库表名
			List<Map<String, Object>> list=	moeImportMapper.findMOETableById(id);
			
			 //根据 标准模版查询对应数据库表名
			 AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(id);
			
			 String sql="select * from ODS_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+insert_version+"' and cname='"+asCustomVos.get(0).getCtemplateName()+"'";
	          String[] ctemplateTitleName=new String[asCustomVos.size()];
			  String[] objectFieldName =new String[asCustomVos.size()];
			  for (int i = 0; i < asCustomVos.size(); i++) {
				  //获取自定义列表名
				  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
				  //获取列对应的数据库字段名
				  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
			   }
	         //存放得到的数据集合
	         ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQueryNoParams(sql);
	         List a=new ArrayList();
	         //得到自定义模版所需的数据
	         for (int i = 0; i < oArrayList.size(); i++) {
	      	   String[] b= new String[objectFieldName.length];
	      	   for (int j = 0; j < objectFieldName.length; j++) {
	      			   b[j]= oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
	      	   }
				   a.add(b);
				   b = null;
			   }
				  JSONArray jsontitle=JSONArray.fromObject(ctemplateTitleName);
				  JSONArray jsontablename=JSONArray.fromObject(objectFieldName);
				  JSONArray jsoncontent=JSONArray.fromObject(a);
				  JSONArray jsonuserstate=JSONArray.fromObject(moeImportMapper.findUserSubmitState(id, userid,insert_version));
		    	  JSONObject jObject=new JSONObject();
		    	  jObject.accumulate("title", jsontitle);
		    	  jObject.accumulate("tablename", jsontablename);
		    	  jObject.accumulate("content", jsoncontent);
		    	  jObject.accumulate("size", a.size());
		    	  jObject.accumulate("tableType", asCustomVos.get(0).getCategoryId());
		    	  jObject.accumulate("userstate", jsonuserstate);
		    	  if (oArrayList.size()!=0) {
		    		  jObject.accumulate("rname", oArrayList.get(0).get("rname"));
				  }
		    	 ServiceResult<Object> serviceResult= new ServiceResult<Object>();
		    	 serviceResult.setData(jObject.toString());
			     return serviceResult;
		}
		
		
}
