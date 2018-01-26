package audit.controller;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import audit.model.AsCjCjrwztb;
import audit.model.AsCjZtsjbxx;
import audit.model.AsCtemplateStandard;
import audit.model.AsCustomVo;
import audit.model.DefineObjectVo;
import audit.model.DefineObjectVoDefault;
import audit.model.Sbprofession;
import audit.model.Sbunit;
import audit.model.UpdateCheckModel;
import audit.service.AsCjrwztbServices;
import audit.service.AsCtemplateStandardService;
import audit.service.AsCustomVoServices;
import audit.service.CjRwxxServiceI;
import audit.service.CjZtsjServiceI;
import audit.service.ExtractDataServers;
import audit.service.quality.OrganizationServiceI;
import audit.service.quality.SpecialtyServiceI;
import audit.util.CookieUtil;
import audit.util.DBConnection;
import audit.util.ExportExcelUtil;
import audit.util.ShSjbUtil;


@Controller
@RequestMapping("/asShZtsjbController")
public class AsShZtsjbController {
	private int pageNo;          //当前页码  
	private int pageNum = 10;   //每页行数  
	private int count;      	 //总记录数  
	private int totalPage;       //总页数  
	
	  @Autowired
	  private AsCjrwztbServices asCjrwztbServices;
	  @Autowired
	  private AsCtemplateStandardService asCtemplateStandardService;
	  @Autowired
	  private AsCustomVoServices asCustomVoServices;
	  @Autowired
	  private CjZtsjServiceI cjZtsjServiceI;
	  @Autowired
	  private  CjRwxxServiceI cjRwxxServiceI;
	  @Autowired
	  private ExtractDataServers extractDataServers;
	  @Autowired
	  private OrganizationServiceI organizationServiceI;
	  @Autowired
	  private SpecialtyServiceI specialtyServiceI;
	  
	  
		@RequestMapping(value="/selectCjZtSjbs",method = RequestMethod.POST)
		@ResponseBody
		public String selectCjZtSjbs(HttpServletRequest request){
			String flag = request.getParameter("flag");
			String param = request.getParameter("param");
			String datatype=request.getParameter("datatype");
			pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
			String userId = "";
			String userName = "";
			try {
				userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
				userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
			} catch (UnsupportedEncodingException e) {
				System.out.println(e.getMessage());
			}
			count = ShSjbUtil.countCjZtSjbs(Integer.parseInt(userId),flag,param,datatype);
			//共有多少页
			if (count % pageNum == 0) {
				totalPage = count / pageNum;
			} else {
				totalPage = count / pageNum + 1;
			}
			List<Object[]> list = ShSjbUtil.selectCjZtSjbs(Integer.parseInt(userId),pageNo,pageNum,flag,param,datatype);
			JSONObject o = new JSONObject();
			o.put("list",list);
			o.put("totalPage", totalPage);
			o.put("pageNo", pageNo);
			return o.toString();
			
		}
	  //采集人和审核人查看提交信息
	  @RequestMapping( value="/selectCjrwxx",method = RequestMethod.POST)
	  @ResponseBody
	  public  String selectCjrwxx (HttpServletRequest request ,HttpServletResponse response){
		  String rwid=request.getParameter("rwid");
		  String cjmbdm=request.getParameter("cjmbdm");
		  //获取当前的模版名
		  String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
		  String mbname=null;
		  try {
			  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
			  mbname= oArrayList.get(0).get("ctemplate_name").toString();
		  } catch (Exception e1) {
				e1.printStackTrace();
		  }
		  
		  Integer state=Integer.parseInt(request.getParameter("state"));
		  //查询未通过理由
		  AsCjZtsjbxx asCjZtsjbxx= cjZtsjServiceI.findZtsjbById(Integer.parseInt(rwid));
		  //根据任务id查询采集状态表
		  AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
		  //根据 标准模版查询对应数据库表名
		  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(cjmbdm));
		  //查询状态未校验的数据
		  String sql="select * from TEM_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"' and userid="+asCjCjrwztb.getCjr()+" and cname='"+mbname+"'";
          if (state==2) {
			sql+=" and state="+state;
		  }
		  //根据自定义模版id查询字段对照
		  List<AsCustomVo> asCustomVos=asCustomVoServices.findCTNAndOFN(Integer.parseInt(cjmbdm));
		   String[] ctemplateTitleName=new String[asCustomVos.size()+1];
		   String[] objectFieldName =new String[asCustomVos.size()+1];
		  for (int i = 0; i < asCustomVos.size(); i++) {
			  //获取自定义列表名
			  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
			  //获取列对应的数据库字段名
			  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
		   }
		    ctemplateTitleName[asCustomVos.size()]="错误信息";
		   //参数集合
           ArrayList<Object> pList=new ArrayList<Object>();
           //存放得到的数据集合
           ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQuery(sql, pList);
           List a=new ArrayList();
           //得到自定义模版所需的数据
           for (int i = 0; i < oArrayList.size(); i++) {
        	   String[] b= new String[objectFieldName.length];
        	   for (int j = 0; j < objectFieldName.length-1; j++) {
        		   try {
        			   b[j]= oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
				   } catch (Exception e) {
					   
				   }
        	   }
        	   String errorLog= (String) oArrayList.get(i).get("error_log");
        	   b[asCustomVos.size()]=(errorLog==null?" ":errorLog);
			   a.add(b);
			   b = null;
		   }
         //测试用的
    /*     String[] b= new String[objectFieldName.length];
           for (int i = 0; i < a.size(); i++) {
                 b=(String[]) a.get(i);
                 for (int j = 0; j < b.length; j++) {
				}
		   }*/
		 
			  JSONArray jsontitle=JSONArray.fromObject(ctemplateTitleName);
			  JSONArray jsontablename=JSONArray.fromObject(objectFieldName);
			  JSONArray jsoncontent=JSONArray.fromObject(a);
			  //System.out.println("标题里面的："+jsontitle);
			  //System.out.println("内容里面的："+jsoncontent);
			 // System.out.println("我想看到的 自定义模版名："+oArrayList.get(0).get("cname"));
	    	  JSONObject jObject=new JSONObject();
	    	  jObject.accumulate("title", jsontitle);
	    	  jObject.accumulate("tablename", jsontablename);
	    	  jObject.accumulate("content", jsoncontent);
	    	  jObject.accumulate("size", a.size());
	    	  if (oArrayList.size()!=0) {
	    		  jObject.accumulate("cname", oArrayList.get(0).get("cname"));
			  }
	    	  try {
	    		  if (asCjZtsjbxx.getBhly()!=null ) {
		    			 jObject.accumulate("bhly", asCjZtsjbxx.getBhly());
				  }
		      } catch (Exception e) {
			  	  jObject.accumulate("bhly", " ");
		      }
	    	  //jObject.accumulate("rwid", rwid);
              try {
            	response.setCharacterEncoding("utf-8");
				response.getWriter().write(jObject.toString());
			} catch (IOException e) {
				e.printStackTrace();
			}
		  return null;
	  }
	  //审核通过
	  @RequestMapping( value="/updateCjRwPass",method = RequestMethod.POST)
	  @ResponseBody
	  public  String updateCjRwPass(HttpServletRequest request ,HttpServletResponse response){
		  String rwid= request.getParameter("rwid");
		  String cname= request.getParameter("cname");
		  int cjmbdm=Integer.parseInt(request.getParameter("cjmbdm"));
		  AsCjCjrwztb asCjCjrwztb=asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
		  String error=null;
				//抽取数据到正式表
			/*    Map<String, String> map= extractDataServers.extractdata(cname, asCjCjrwztb.getCjrwnf(), asCjCjrwztb.getCjr(),"");
			     JSONObject jsonObject=new JSONObject();
				 jsonObject.accumulate("error", map);
				 System.out.println("错误信息是："+jsonObject);*/
			/*	String sql=" INSERT INTO AS_C_TEMPLATE_HISTORY (CTEMPLATE_ID,OBJECT_TYPE,TJ_TIME,OPERATE_TYPE,OPERATE_TIME,USER_ID,LOG,IS_DELE) VALUES("+cjmbdm+","+2+","+asCjCjrwztb.getCjrwnf()+","+2+",getdate(),'成功导入数据',"+0+");";
				DBConnection.Add(sql);*/
			   String sql="{call SP_UP_ODS_S(?,?,?,?)}";
			   try {
				   error=DBConnection.procOutSimple(sql,cname,asCjCjrwztb.getCjrwnf().toString(),asCjCjrwztb.getCjr(),"");
				} catch (Exception e) {
					e.printStackTrace();
				}
			/*  ArrayList<Object> params=new ArrayList<Object>();
			    params.add(cname);
			    params.add(asCjCjrwztb.getCjrwnf());
			    params.add(asCjCjrwztb.getCjr());
			    params.add("");
			    ArrayList<Hashtable<String, Object>> list=  DBConnection.executeQuery(sql, params);
			     JSONObject jsonObject=new JSONObject();
				 jsonObject.accumulate("error", list);*/
				 //System.out.println("错误信息是："+jsonObject);
			   if (error.equals("导入成功")) {
				   asCjrwztbServices.updateAsRWtg(Integer.parseInt(rwid));
			   }else {
				   asCjrwztbServices.updateAsRWtgX(Integer.parseInt(rwid));
			   }
		  return error;
	  }
	  //审核未通过
	  @RequestMapping(value="/updateCjRwNoPass",method=RequestMethod.POST)
	  @ResponseBody
	  public String updateCjRwNoPass(HttpServletRequest request ,HttpServletResponse response){
		      String rwid= request.getParameter("rwid");
		      String wtgContent=request.getParameter("wtgContent");
		      String cjmbdm=request.getParameter("cjmbdm");
		      //获取当前的模版名
			  String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
			  String mbname=null;
			  try {
				  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
				  mbname= oArrayList.get(0).get("ctemplate_name").toString();
			  } catch (Exception e1) {
					e1.printStackTrace();
			  }
			  //根据 标准模版查询对应数据库表名
			  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(cjmbdm));
			  //根据任务id查询采集状态表
			  AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
		      asCjrwztbServices.updateAsRWbh(Integer.parseInt(rwid));
		      cjZtsjServiceI.updateBhly(wtgContent, Integer.parseInt(rwid));
		      String sql="";
		      sql+="delete from TEM_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"'  and userid="+asCjCjrwztb.getCjr()+" and cname='"+mbname+"'";
		      try {
		    	   // DBConnection.Add(sql);
					response.getWriter().write("审核成功");
				} catch (IOException e) {
					e.printStackTrace();
				} catch (Exception e) {
					e.printStackTrace();
				}
		      return null;
	  }
	  

	  //检验excel的内容
	  @RequestMapping(value="/checkExcel",method=RequestMethod.POST)
	  @ResponseBody
	  public String checkExcel(HttpServletRequest request,HttpServletResponse response){
		  //sjbmc+"---"+cjmbdm+"---"+rwid
		//获取全部的机构
		List<Sbunit> organizations;
		//将全部的机构放入机构omap
		Map<String, String> oMap;
		//获取全部的专业
		List<Sbprofession> specialties;
		//将全部专业放入smap
		Map<String, String> sMap;
		//取出全部需要做对比的ods表
		Map<String, ArrayList<HashMap<String, Object>>> odsMap;
		//存放得到的数据集合
		ArrayList<HashMap<String, Object>> oArrayList;
		//  JSONArray jsonArray=JSONArray.fromObject(lCheckModels);
		try {
			System.gc();
			String sjbmc= request.getParameter("sjbmc");
			int cjmbdm=Integer.parseInt(request.getParameter("cjmbdm"));
			String rwid=request.getParameter("rwid");
			String odsTable=null;//存放当前需要校验的ods表名
			organizations = organizationServiceI.selectAllOrganization();
			oMap = new HashMap<String, String>();
			for (int i = 0; i < organizations.size(); i++) {
			  oMap.put(organizations.get(i).getDepartment_id(), organizations.get(i).getDepartment_name());	
			  oMap.put(organizations.get(i).getDepartment_name(), organizations.get(i).getDepartment_id());
			}
			organizations=null;
			specialties = specialtyServiceI.findAllSpecialty();
			sMap = new HashMap<String, String>();
			for (int i = 0; i < specialties.size(); i++) {
				sMap.put(specialties.get(i).getProfession_id(), specialties.get(i).getProfession_name());
				sMap.put(specialties.get(i).getProfession_name(),specialties.get(i).getProfession_id());
			}
			specialties=null;
			String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
			  String mbname=null;
				  mbname= DBConnection.executeQueryNoParams(MbNameSql).get(0).get("ctemplate_name").toString();
				  odsMap = AsShZtsjbController.checkODSlist(cjmbdm);
			   //获取需要校验的列名和校验的方式和数据对应的列名
			List<DefineObjectVo> defineObjects= cjRwxxServiceI.findACOTMByCid(cjmbdm);
			  //取出重复规则代码对应的字段名
			List<Map<String, Object>> defineList=cjRwxxServiceI.findAllByCid(cjmbdm);
			
			//根据任务id查询采集状态表
			AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
			//根据 标准模版查询对应数据库表名
			AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(cjmbdm);
			String  sqlTableName="ODS_"+asCtemplateStandard.getObjectTable();
			String  resqlTableName="tem_"+asCtemplateStandard.getObjectTable();
			//查询状态为1的未校验的数据
			String sql="select * from TEM_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"' and userid="+asCjCjrwztb.getCjr()+" and state=1 and cname='"+mbname+"'";
			//参数集合 无参数
			ArrayList<Object> pList=new ArrayList<Object>(); 
			oArrayList = DBConnection.executeQuery(sql, pList);
/*		//查询状态为1的全部数据正式表
			String sql1=null;
			ArrayList<Hashtable<String, Object>> odsList=new ArrayList<Hashtable<String,Object>>(); 
			sql1="select * from ODS_"+asCtemplateStandard.getObjectTable()+" where  state=1 ";
			System.out.println("现在的sql："+sql1);
			try {
				odsList=DBConnection.executeQueryNoParams(sql1);
			} catch (Exception e1) {
				e1.printStackTrace();
			}*/
			//拼错误信息格式为：id#错误内容%id#错误内容%....
			 StringBuilder str=new StringBuilder();
			 List<UpdateCheckModel> lCheckModels=new ArrayList<UpdateCheckModel>();
			 for (int i = 0; i < oArrayList.size(); i++) {
				   //创建错误信息对象 保存所有的数据id
			    UpdateCheckModel uModel=new UpdateCheckModel();
				uModel.setId(oArrayList.get(i).get("id").toString());
				lCheckModels.add(uModel);
			 }
			 
			 StringBuilder updatesql=new StringBuilder();
			 Boolean isTrue=null;
			 String [] strtable={"ODS_B_UNIT"};
			 for (int i = 0; i < strtable.length; i++) {
				if (sqlTableName.equals(strtable[i].trim())) {
					isTrue=false;
					break;
				}else {
					isTrue=true;
				}
				
			 }
			 
			 if (isTrue) {
				 for (int k = 0; k < oArrayList.size(); k++) {
			     	StringBuffer    sqlUpdate = new StringBuffer(" update TEM_" + asCtemplateStandard.getObjectTable() + " set ");
			    	  //默认存在校验 和关联存在校验-------------start---------------------
				//得到所有的值  定义校验的字段名
					String DEPARTMENT_ID = "";   //单位代码
					String DEPARTMENT_NAME = ""; //单位名称
					String TEACHER_NUM = "";     //教师工号
					String TEACHER_NAME = "";    //教师姓名
					String PROFESSION_ID = "";   //专业编号
					String PROFESSION_NAME = ""; //专业名称
					String STUDENT_CODE = "";    //学号
					String STUDENT_NAME = "";    //学生姓名
					//当前循环取出的里列名
					 Integer id=Integer.parseInt(oArrayList.get(k).get("id").toString());
					    DEPARTMENT_ID=(String) oArrayList.get(k).get("department_id");
					    DEPARTMENT_ID=DEPARTMENT_ID==null?"":DEPARTMENT_ID;
					    /*if (DEPARTMENT_ID!=null) {
					      str.append(id.toString()+"#");
					      str.append(isExist(DEPARTMENT_ID.trim(),"DEPARTMENT_ID",defineObjectVoDefaults).toString());
						}*/
						
						DEPARTMENT_NAME=(String) oArrayList.get(k).get("department_name");
						DEPARTMENT_NAME=DEPARTMENT_NAME==null?"":DEPARTMENT_NAME;
						/*if (DEPARTMENT_NAME!=null) {
							str.append(id.toString()+"#");
							str.append(isExist(DEPARTMENT_NAME.trim(),"DEPARTMENT_NAME",defineObjectVoDefaults).toString());
						}*/
						
						TEACHER_NUM=(String) oArrayList.get(k).get("teacher_num");
						TEACHER_NUM=TEACHER_NUM==null?"":TEACHER_NUM;
						/*if (TEACHER_NUM!=null) {
							str.append(id.toString()+"#");
							str.append(isExist(TEACHER_NUM.trim(),"TEACHER_NUM",defineObjectVoDefaults).toString());
						}*/
						
						TEACHER_NAME=(String) oArrayList.get(k).get("teacher_name");
						TEACHER_NAME=TEACHER_NAME==null?"":TEACHER_NAME;
						/*if (TEACHER_NAME!=null) {
							str.append(id.toString()+"#");
							str.append(isExist(TEACHER_NAME.trim(),"TEACHER_NAME",defineObjectVoDefaults).toString());
						}*/
						
						PROFESSION_ID=(String) oArrayList.get(k).get("profession_id");
						PROFESSION_ID=PROFESSION_ID==null?"":PROFESSION_ID;
						/*if (PROFESSION_ID!=null) {
							str.append(id.toString()+"#");
							str.append(isExist(PROFESSION_ID.trim(),"PROFESSION_ID",defineObjectVoDefaults).toString());
						}*/
						
						PROFESSION_NAME=(String) oArrayList.get(k).get("profession_name");
						PROFESSION_NAME=PROFESSION_NAME==null?"":PROFESSION_NAME;
						/*if (PROFESSION_NAME!=null) {
							str.append(id.toString()+"#");
							str.append(isExist(PROFESSION_NAME.trim(),"PROFESSION_NAME",defineObjectVoDefaults).toString());
						}
						*/
						STUDENT_CODE=(String) oArrayList.get(k).get("student_code");
						STUDENT_CODE=STUDENT_CODE==null?"":STUDENT_CODE;
						/*if (STUDENT_CODE!=null) {
							str.append(id.toString()+"#");
							str.append(isExist(STUDENT_CODE.trim(),"STUDENT_CODE",defineObjectVoDefaults).toString());
						}*/
						
						STUDENT_NAME=(String) oArrayList.get(k).get("student_name");
						STUDENT_NAME=STUDENT_NAME==null?"":STUDENT_NAME;
						/*if (STUDENT_NAME!=null) {
							str.append(id.toString()+"#");
							str.append(isExist(STUDENT_NAME.trim(),"STUDENT_NAME",defineObjectVoDefaults));
						}*/
						/*
						  //组合校验
// 						教师姓名+工号
							if (StringUtil.stringisNull(TEACHER_NAME) && !"null".equals(TEACHER_NAME) && StringUtil.stringisNull(TEACHER_NUM) && !"null".equals(TEACHER_NUM)) {
							       int state=1;
							       str.append(id.toString()+"#");
							       str.append( isDefaultCombination(state,"TEACHER_NAME","TEACHER_NUM",TEACHER_NAME,TEACHER_NUM,"教师姓名和工号").toString());
							}
// 						学生姓名+学号
							if (StringUtil.stringisNull(STUDENT_NAME) && !"null".equals(STUDENT_NAME) && StringUtil.stringisNull(STUDENT_CODE) && !"null".equals(STUDENT_CODE)) {
								   int state=2;
								   str.append(id.toString()+"#");
								   str.append( isDefaultCombination(state,"STUDENT_NAME","STUDENT_CODE",STUDENT_NAME,STUDENT_CODE,"学生姓名和学号"));
							}
// 						单位名称（代码）+教师姓名
// 						if (StringUtil.stringisNull(DEPARTMENT_NAME) && !"null".equals(DEPARTMENT_NAME) && StringUtil.stringisNull(TEACHER_NAME) && !"null".equals(TEACHER_NAME)) {
// 							System.out.println("单位名称+教师姓名");
// 							   int state=1;
// 							   str.append(id.toString()+"#");
// 							   str.append( isDefaultCombination(state,"DEPARTMENT_NAME","TEACHER_NAME",DEPARTMENT_NAME,TEACHER_NAME,"单位名称和教师姓名").toString());
// 						}
// 						if (StringUtil.stringisNull(DEPARTMENT_ID) && !"null".equals(DEPARTMENT_ID) && StringUtil.stringisNull(TEACHER_NAME) && !"null".equals(TEACHER_NAME)) {
// 							System.out.println("单位名称代码+教师姓名");
// 							   int state=1;
// 							   str.append(id.toString()+"#");
// 							   str.append( isDefaultCombination(state,"DEPARTMENT_ID","TEACHER_NAME",DEPARTMENT_ID,TEACHER_NAME,"单位名称代码和教师姓名"));
// 						}
// 						单位名称（代码）+学生姓名
							if (StringUtil.stringisNull(DEPARTMENT_NAME) && !"null".equals(DEPARTMENT_NAME) && StringUtil.stringisNull(STUDENT_NAME) && !"null".equals(STUDENT_NAME)) {
								System.out.println("单位名称+学生姓名");
								   int state=2;
								   str.append(id.toString()+"#");
								   str.append( isDefaultCombination(state,"DEPARTMENT_NAME","STUDENT_NAME",DEPARTMENT_NAME,STUDENT_NAME,"单位名称和学生姓名").toString());
							}
							if (StringUtil.stringisNull(DEPARTMENT_ID) && !"null".equals(DEPARTMENT_ID) && StringUtil.stringisNull(STUDENT_NAME) && !"null".equals(STUDENT_NAME)) {
								System.out.println("单位名称代码+学生姓名");
								   int state=2;
								   str.append(id.toString()+"#");
								   str.append( isDefaultCombination(state,"DEPARTMENT_ID","STUDENT_NAME",DEPARTMENT_ID,STUDENT_NAME,"单位名称代码和学生姓名").toString());
							}
// 						专业名称（代码）+教师姓名
							if (StringUtil.stringisNull(PROFESSION_NAME) && !"null".equals(PROFESSION_NAME) && StringUtil.stringisNull(TEACHER_NAME) && !"null".equals(TEACHER_NAME)) {
								System.out.println("专业名称+教师姓名");
								   int state=1;
								   str.append(id.toString()+"#");
								   str.append(isDefaultCombination(state,"PROFESSION_NAME","TEACHER_NAME",PROFESSION_NAME,TEACHER_NAME,"专业名称和教师姓名").toString());
							}
							if (StringUtil.stringisNull(PROFESSION_ID) && !"null".equals(PROFESSION_ID) && StringUtil.stringisNull(TEACHER_NAME) && !"null".equals(TEACHER_NAME)) {
								System.out.println("专业名称代码+教师姓名");
								   int state=1;
								   str.append(id.toString()+"#");
							       str.append(isDefaultCombination(state,"PROFESSION_ID","TEACHER_NAME",PROFESSION_ID,TEACHER_NAME,"专业名称代码和教师姓名"));
							}
// 						专业名称（代码）+学生姓名
							if (StringUtil.stringisNull(PROFESSION_NAME) && !"null".equals(PROFESSION_NAME) && StringUtil.stringisNull(STUDENT_NAME) && !"null".equals(STUDENT_NAME)) {
								System.out.println("专业名称+学生姓名");
								   int state=2;
								   str.append(id.toString()+"#");
								   str.append( isDefaultCombination(state,"PROFESSION_NAME","PROFESSION_NAME",PROFESSION_NAME,PROFESSION_NAME,"专业名称和学生姓名"));
							}
							if (StringUtil.stringisNull(PROFESSION_ID) && !"null".equals(PROFESSION_ID) && StringUtil.stringisNull(STUDENT_NAME) && !"null".equals(STUDENT_NAME)) {
								System.out.println("专业名称代码+学生姓名");
								   int state=2;
								   str.append(id.toString()+"#");
								   str.append(isDefaultCombination(state,"PROFESSION_ID","STUDENT_NAME",PROFESSION_ID,STUDENT_NAME,"专业名称代码和学生姓名"));
							}

// 					单位代码+单位名称
						if (StringUtil.stringisNull(DEPARTMENT_NAME) && !"null".equals(DEPARTMENT_NAME) && StringUtil.stringisNull(DEPARTMENT_ID) && !"null".equals(DEPARTMENT_ID)) {
							   int state=3;
							   str.append(id.toString()+"#");
							   str.append( isDefaultCombination(state,"name","code",DEPARTMENT_NAME,DEPARTMENT_ID,"单位代码和单位名称"));
						}
// 					专业代码+专业名称
						if (StringUtil.stringisNull(PROFESSION_ID) && !"null".equals(PROFESSION_ID) && StringUtil.stringisNull(PROFESSION_NAME) && !"null".equals(PROFESSION_NAME)) {
							   int state=4;
							   str.append(id.toString()+"#");
							   str.append( isDefaultCombination(state,"code","name",PROFESSION_ID,PROFESSION_NAME,"专业代码和专业名称"));
						}*/
				  //默认存在校验 和关联存在校验-------------end---------------------
			    
			    // 携带      ------------------------- start ------------------ 
			      //携带教师信息
			      if (TEACHER_NAME.trim().length()>0 || TEACHER_NUM.trim().length()>0) {

							StringBuffer teachSql = new StringBuffer("select distinct TEACHER_NUM,TEACHER_NAME,DEPARTMENT_ID,DEPARTMENT_NAME,PROFESSION_ID,PROFESSION_NAME from S_T_TEACH where ");
							if (TEACHER_NUM.trim().length()>0) {
								teachSql.append("TEACHER_NUM='"+TEACHER_NUM+"' ");
							}
							if (TEACHER_NAME.trim().length()>0) {
								if (teachSql.indexOf("=")>0) {
									teachSql.append("and ");
								}
								teachSql.append("TEACHER_NAME='"+TEACHER_NAME+"' ");
							}
							if (DEPARTMENT_ID.trim().length()>0) {
								if (teachSql.indexOf("=")>0) {
									teachSql.append("and ");
								}
								teachSql.append("DEPARTMENT_ID='"+DEPARTMENT_ID+"' ");
							}
							if (DEPARTMENT_NAME.trim().length()>0) {
								if (teachSql.indexOf("=")>0) {
									teachSql.append("and ");
								}
								teachSql.append("DEPARTMENT_NAME='"+DEPARTMENT_NAME+"' ");
							}
							if (PROFESSION_ID.trim().length()>0) {
								if (teachSql.indexOf("=")>0) {
									teachSql.append("and ");
								}
								teachSql.append("PROFESSION_ID='"+PROFESSION_ID+"' ");
							}
							if (PROFESSION_NAME.trim().length()>0) {
								if (teachSql.indexOf("=")>0) {
									teachSql.append("and ");
								}
								teachSql.append("PROFESSION_NAME='"+PROFESSION_NAME+"' ");
							}
							teachSql.append(" and (state!=9 or state is null)");
							if (teachSql.indexOf("=")>0) {
								ArrayList<HashMap<String, Object>> tlist = DBConnection.executeQueryNoParams(teachSql.toString());
								if (tlist != null && tlist.size()==1) {
									//得到携带值
									HashMap<String, Object> techateObj = tlist.get(0);
									if (TEACHER_NUM.trim().length()==0 && techateObj.get("teacher_num")!=null && !"".equals(techateObj.get("teacher_num"))) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("TEACHER_NUM='"+techateObj.get("teacher_num")+"' ");
									}
									if (!notIsNull(TEACHER_NAME) && techateObj.get("teacher_name")!=null && !"".equals(techateObj.get("teacher_name")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("TEACHER_NAME='"+techateObj.get("teacher_name")+"' ");
									}
									if (!notIsNull(DEPARTMENT_ID) && techateObj.get("department_id")!=null && !"".equals(techateObj.get("department_id")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("DEPARTMENT_ID='"+techateObj.get("department_id")+"' ");
										DEPARTMENT_ID = techateObj.get("department_id")+"";
									}
									if (!notIsNull(DEPARTMENT_NAME) && techateObj.get("department_name")!=null && !"".equals(techateObj.get("department_name")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("DEPARTMENT_NAME='"+techateObj.get("department_name")+"' ");
										DEPARTMENT_NAME = techateObj.get("department_name")+"";
									}
									if (!notIsNull(PROFESSION_ID) && techateObj.get("profession_id")!=null && !"".equals(techateObj.get("profession_id")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("PROFESSION_ID='"+techateObj.get("profession_id")+"' ");
										PROFESSION_ID = techateObj.get("profession_id")+"";
									}
									if (!notIsNull(PROFESSION_NAME) && techateObj.get("profession_name")!=null && !"".equals(techateObj.get("profession_name")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("PROFESSION_NAME='"+techateObj.get("profession_name")+"' ");
										PROFESSION_NAME = techateObj.get("profession_name")+"";
									}
									
								}
								if (sqlUpdate.indexOf("=")>0) {
									sqlUpdate.append(" where id="+id );
									try {
										DBConnection.Add(sqlUpdate.toString());
									} catch (Exception e) {
										e.printStackTrace();
									}
								}
							}
							 
				  }
			    
			     //携带学生 
			      if (STUDENT_NAME.length()>0 || STUDENT_CODE.length()>0) {

							StringBuffer stSql = new StringBuffer("select distinct STUDENT_CODE,STUDENT_NAME,DEPARTMENT_ID,DEPARTMENT_NAME,PROFESSION_ID,PROFESSION_NAME from ODS_S_STUDENT where ");
							if (notIsNull(STUDENT_CODE)) {
								stSql.append("STUDENT_CODE='"+STUDENT_CODE+"' ");
							}
							if (notIsNull(STUDENT_NAME)) {
								if (stSql.indexOf("=")>0) {
									stSql.append("and ");
								}
								stSql.append("STUDENT_NAME='"+STUDENT_NAME+"' ");
							}
							if (notIsNull(DEPARTMENT_ID)) {
								if (stSql.indexOf("=")>0) {
									stSql.append("and ");
								}
								stSql.append("DEPARTMENT_ID='"+DEPARTMENT_ID+"' ");
							}
							if (notIsNull(DEPARTMENT_NAME)) {
								if (stSql.indexOf("=")>0) {
									stSql.append("and ");
								}
								stSql.append("DEPARTMENT_NAME='"+DEPARTMENT_NAME+"' ");
							}
							if (notIsNull(PROFESSION_ID)) {
								if (stSql.indexOf("=")>0) {
									stSql.append("and ");
								}
								stSql.append("PROFESSION_ID='"+PROFESSION_ID+"' ");
							}
							if (notIsNull(PROFESSION_NAME)) {
								if (stSql.indexOf("=")>0) {
									stSql.append("and ");
								}
								stSql.append("PROFESSION_NAME='"+PROFESSION_NAME+"' ");
							}
							if (stSql.indexOf("=")>0) {
								ArrayList<HashMap<String, Object>> tlist = null;
									try {
										tlist = DBConnection.executeQueryNoParams(stSql.toString());
									} catch (Exception e) {
										e.printStackTrace();
									}
								if (tlist != null && tlist.size()==1) {
									//得到携带值
									HashMap<String, Object> studentObj = tlist.get(0);
									
									if (!notIsNull(STUDENT_CODE) && studentObj.get("student_code")!=null && !"".equals(studentObj.get("student_code")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("STUDENT_CODE='"+studentObj.get("student_code")+"' ");
									}
									if (!notIsNull(STUDENT_NAME) && studentObj.get("student_name")!=null && !"".equals(studentObj.get("student_name")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("STUDENT_NAME='"+studentObj.get("student_name")+"' ");
									}
									if (!notIsNull(DEPARTMENT_ID) && studentObj.get("department_id")!=null && !"".equals(studentObj.get("department_id")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("DEPARTMENT_ID='"+studentObj.get("department_id")+"' ");
										DEPARTMENT_ID = studentObj.get("department_id")+"";
									}
									if (!notIsNull(DEPARTMENT_NAME) && studentObj.get("department_name")!=null && !"".equals(studentObj.get("department_name")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("DEPARTMENT_NAME='"+studentObj.get("department_name")+"' ");
										DEPARTMENT_NAME = studentObj.get("department_name")+"";
									}
									if (!notIsNull(PROFESSION_ID) && studentObj.get("profession_id")!=null && !"".equals(studentObj.get("profession_id")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("PROFESSION_ID='"+studentObj.get("profession_id")+"' ");
										PROFESSION_ID = studentObj.get("profession_id")+"";
									}
									if (!notIsNull(PROFESSION_NAME) && studentObj.get("profession_name")!=null && !"".equals(studentObj.get("profession_name")+"")) {
										if (sqlUpdate.indexOf("=")>0) {
											sqlUpdate.append(", ");
										}
										sqlUpdate.append("PROFESSION_NAME='"+studentObj.get("profession_name")+"' ");
										PROFESSION_NAME = studentObj.get("profession_name")+"";
									}
								}
								if (sqlUpdate.indexOf("=")>0) {
									sqlUpdate.append(" where id="+id );
									try {
										DBConnection.Add(sqlUpdate.toString());
									} catch (Exception e) {
										e.printStackTrace();
									}
								}
							}
						// System.out.println("插入携带学生id的sql"+sqlUpdate);
					  }
			      
			      //携带机构
			  	   StringBuffer    osql = new StringBuffer(" update TEM_" + asCtemplateStandard.getObjectTable() + " set ");
			       if (notIsNull(DEPARTMENT_ID) && DEPARTMENT_NAME.trim().length()<=0) {
						   String oname=oMap.get(DEPARTMENT_ID);
						   if (osql.indexOf("=")>0) {
							   osql.append(", ");
							}
						   osql.append("DEPARTMENT_NAME='"+oname+"' ");
					   }else if (notIsNull(DEPARTMENT_NAME) && DEPARTMENT_ID.trim().length()<=0) {
						   String ocode=oMap.get(DEPARTMENT_NAME);
						   if (osql.indexOf("=")>0) {
							   osql.append(", ");
							}
						   osql.append("DEPARTMENT_ID='"+ocode+"' ");
					   }
			       if (osql.indexOf("=")>0) {
			    	   osql.append(" where id="+id );
						   try {
							DBConnection.Add(osql.toString());
						} catch (Exception e) {
							e.printStackTrace();
						}
						}
			       
			      //携带专业
			       StringBuffer    ssql = new StringBuffer(" update TEM_" + asCtemplateStandard.getObjectTable() + " set ");
			       if (notIsNull(PROFESSION_ID) && PROFESSION_NAME.trim().length()<=0) {
						   String oname=sMap.get(PROFESSION_ID);
						   if (ssql.indexOf("=")>0) {
							   ssql.append(", ");
							}
						   ssql.append("PROFESSION_NAME='"+oname+"' ");
					   }else if (notIsNull(PROFESSION_NAME) && PROFESSION_ID.trim().length()<=0) {
						   String ocode=sMap.get(PROFESSION_NAME);
						   if (ssql.indexOf("=")>0) {
							   ssql.append(", ");
							}
						   ssql.append("PROFESSION_ID='"+ocode+"' ");
					   }
			       if (ssql.indexOf("=")>0) {
			    	    ssql.append(" where id="+id );
							try {
								DBConnection.Add(ssql.toString());
							} catch (Exception e) {
								e.printStackTrace();
							}
						}
			    // 携带      ------------------------- end ------------------ 
				}
			  
			 // System.out.println(lCheckModels);
			  //循环要判断的列名
			 for (int i = 0; i < defineObjects.size(); i++) {
			 	 //每列的值存入a中
			 	  String[] a=new String[oArrayList.size()];
			 	  // System.out.println("我就嘻嘻了："+defineObjects.get(i).getObjectFieldName());
			 	  //再循环数据的总条数
			 	  for (int j = 0; j < oArrayList.size(); j++) {
			 		  Integer id=Integer.parseInt(oArrayList.get(j).get("id").toString());
			 		  str.append(id.toString()+"#");
			 		  //取出需要校验的每列的值
			 		  a[j]= oArrayList.get(j).get(defineObjects.get(i).getObjectFieldName().toLowerCase()).toString();
			 		  if (defineObjects.get(i).getIsRepeat()==1) {
						String objectFieldName1=null;
					    String objectFieldName2=null;
					    String jbfieldName1=null;
					    String jbfieldName2=null;
						// System.out.println("所有列的大小："+defineList.size());
					    //循环判断取出重复规则代码对应的字段名
						for (int k = 0; k < defineList.size(); k++) {
							//System.out.println(defineObjects.get(i).getRepeatId()+"*****"+defineList.get(k).get("SID"));
							//System.out.println(defineObjects.get(i).getRepeatId2()+"////////"+defineList.get(k).get("SID"));
							if (defineObjects.get(i).getRepeatId().equals(defineList.get(k).get("SID"))) {
								objectFieldName1=defineList.get(k).get("EXIST_TFIELD").toString();//第一个重复校验条件
								odsTable=defineObjects.get(i).getExistTable();
								jbfieldName1=defineList.get(k).get("OBJECT_FIELD_NAME").toString();
							}
							if (defineObjects.get(i).getRepeatId2().equals(defineList.get(k).get("SID"))) {
								objectFieldName2=defineList.get(k).get("EXIST_TFIELD").toString();//第二个重复校验条件 可为空
								odsTable=defineObjects.get(i).getExistTable();
								jbfieldName2=defineList.get(k).get("OBJECT_FIELD_NAME").toString();
							}
							
						}
						//System.out.println("呵呵："+jbfieldName1+"----"+jbfieldName2);
						//取出重复规则代码对应的字段名对应的数值
						String	objectFieldName3=null;
						if (objectFieldName1!=null) {
							 	objectFieldName3= oArrayList.get(j).get(jbfieldName1.toLowerCase()).toString();
						}
						String	objectFieldName4=null;
						if (objectFieldName2!=null) {
							 	objectFieldName4=oArrayList.get(j).get(jbfieldName2.toLowerCase()).toString();
						}
// 					//判断是否存在
						//str.append(isExist(a[j],defineObjectVoDefaults,odsList).toString());
						//System.out.println(objectFieldName1+"******"+objectFieldName2+"******"+odsTable.toLowerCase());
					    ArrayList<HashMap<String, Object>> odsList=odsMap.get(odsTable.toLowerCase());
						str.append(isRepeat(defineObjects.get(i).getExistTfield().toLowerCase(),a[j],odsList,objectFieldName1,objectFieldName2,objectFieldName3,objectFieldName4));
// 				    //判断是否重复
/*  				    ArrayList<Hashtable<String, Object>> oList=new ArrayList<Hashtable<String,Object>>();
			    		  oList.addAll(oArrayList);
			    		  oList.remove(j);	
						//  System.out.println("集合里面的大小是："+oList.size());
						for (int k = 0; k < oList.size(); k++) {
							String b=null;
							String c=null;
							String d=null;
							String e=null;
							if (objectFieldName1!=null) {
								b=oList.get(k).get(objectFieldName1.toLowerCase()).toString();
								d=oList.get(k).get(jbfieldName1.toLowerCase()).toString();
								
							}
							if (objectFieldName2!=null) {
								c=oList.get(k).get(objectFieldName2.toLowerCase()).toString();
							    e=oList.get(k).get(jbfieldName2.toLowerCase()).toString();
							}
							//System.out.println(b+" *********** "+c);
							if (objectFieldName3!=null && objectFieldName4!=null && b!=null && c!=null) {
								System.out.println(1);
								if (objectFieldName3.equals(b)&&objectFieldName4.equals(c)) {
									str.append(id.toString()+"#这条数据重复了%");
									//System.out.println("这条数据重复了");
									break;
								}
							}
							if (objectFieldName3==null) {
								System.out.println(2);
								if (objectFieldName4.equals(c)&& jbfieldName4.equals(e)) {
									str.append(id.toString()+"#这条数据重复了%");
									//System.out.println("这条数据重复了");
									break;
								}
							}
							if (objectFieldName4==null ) {
								System.out.println(3);
								System.out.println(objectFieldName3+"---"+b+"---"+a[j]);
								if (objectFieldName3.equals(b) && jbfieldName3.equals(d)) {
									str.append(id.toString()+"#这条数据重复了%");
									//System.out.println("这条数据重复了");
									break;
								}
							}
						}*/
			 		  }
			 		  if (defineObjects.get(i).getIsDate()==1) {
			 			  if (isDate(a[j].toString()).equals("")) {
			 				  str.append(" %");
						  }else {
							  str.append("校验"+defineObjects.get(i).getCtemplateTitleName()+"的"+isDate(a[j].toString())+"%");
						  }
			 			 
					  }
			 		  if (defineObjects.get(i).getIsNull()==1) {
			 			  if (a[j]==null || a[j].trim().equals("")) {
			 				  str.append("校验"+defineObjects.get(i).getCtemplateTitleName()+"不能为空失败%");
						  }else {
							  str.append(" %");
						  }
					  }
			 		  if (defineObjects.get(i).getIsNum()==1) {
			 			  if (isNumeric(a[j])) {
			 				  str.append(" %");
						  }else {
							  str.append("校验"+defineObjects.get(i).getCtemplateTitleName()+"必须为数字失败%");
						  }
			 			  
					  }
			 		  
			 	  }
			 }
			 defineObjects=null;
			   //校验excel是否有重复行  select zhi1,zhi2,zhi3 from [11111]    group by zhi1,zhi2,zhi3 having count(*)>1
			 List<AsCustomVo> asCustomVos=asCustomVoServices.findCTNAndOFN(cjmbdm);
			    String repeatSql="select * from "+resqlTableName+" e where ( ";
			           repeatSql+=" select count(*) from "+resqlTableName+" emp where ";
			           for (int k = 0; k < asCustomVos.size(); k++) {
				      	   if (k==(asCustomVos.size()-1)) {
			            	   repeatSql+="e."+asCustomVos.get(k).getObjectFieldName()+"= emp."+asCustomVos.get(k).getObjectFieldName()+"";
						   }else {
			                    repeatSql+="e."+asCustomVos.get(k).getObjectFieldName()+"= emp."+asCustomVos.get(k).getObjectFieldName()+" and ";
						   }
					   }
			           repeatSql+=	")>1 ";
			           asCustomVos=null;
			   ArrayList<HashMap<String, Object>> repArrayList= new ArrayList<HashMap<String,Object>>();
			//  System.out.println(repeatSql);
			    try {
			    	repArrayList=DBConnection.executeQueryNoParams(repeatSql);
				} catch (Exception e1) {
					e1.printStackTrace();
				}
			    if (repArrayList.size()>0) {
			    	 for (int k = 0; k < repArrayList.size(); k++) {
			             String id= 	repArrayList.get(k).get("id").toString();
			             str.append(id+"#"+"这条数据重复了%");
					}
				}
			   repArrayList=null;
			    //将错误信息分割，给对应的错误信息id，装入错误信息
			    String [] d=str.toString().split("%");
			   for (int l = 0; l < lCheckModels.size(); l++) {
					   //System.out.println(lCheckModels.get(l).getId());
					   String f="";
					   for (int k = 0; k < d.length; k++) {
							 String[] e= d[k].split("#");
					        // System.out.println(e[0]+"---"+e[1]);
						     if (lCheckModels.get(l).getId().equals(e[0])) {
							     if (e[1]==null||e[1].trim().equals("")) {
									f+="";
								 }
							     else {
							    	 f+=e[1]+".";
								}
							     lCheckModels.get(l).setError_log(f);
							 }
				        }
					   String error=  lCheckModels.get(l).getError_log()==null?"":lCheckModels.get(l).getError_log();
					   updatesql.append("update TEM_"+asCtemplateStandard.getObjectTable()+" set error_log='"+error+"' where id="+Integer.parseInt(lCheckModels.get(l).getId())+";\n");
			   }
				
			 }
			   lCheckModels=null;
			
			   try {
				   DBConnection.Add(updatesql.toString());
				   String sqlSuccess="update AS_CJ_CJRWZTB set CJZT=2, SHZT=0 where id=" + rwid ;
				   DBConnection.Add(sqlSuccess);
				} 
				catch (Exception e) {
					e.printStackTrace();
				}
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		 //  System.out.println(jsonObject.toString());
		   oArrayList=null;
		   odsMap=null;
		   oMap=null;
		   organizations=null;
		   sMap=null;
		   specialties=null;
		   JSONObject jsonObject = new JSONObject();
		   jsonObject.accumulate("success", "校验完成");
		   return jsonObject.toString();
	  }
	  /**
	   * 判断是否重复
	   * @param basisTable
	   * @param basisField
	   * @param str
	   * @param objectTable
	   * @param rwid
	   * @param id
	   */
	  public static String isRepeat(String basisField,String str,ArrayList<HashMap<String, Object>> odsList,String objectFieldName1,String objectFieldName2,String objectFieldName3,String objectFieldName4){
		  //String sql="select * from "+basisTable+" where "+basisField+"= '" +str+"' and state=1;";
		boolean is = false;
		for (int i = 0; i < odsList.size(); i++) {
			// 1 odsList.get(i).get(basisField) 默认效验
			// 2 objectFieldName1 组合条件1
			// 3 objectFieldName2 组合条件2
			// 基础表 odsList.get(i).get(basisField)
			// str cloumn
			// 1 + 2 + 3
			if (objectFieldName1 != null && objectFieldName2 != null
					&& objectFieldName1.length() > 0
					&& objectFieldName2.length() > 0) {
			/*	System.out.println(odsList.get(i).get(basisField)+"---"+str);
				System.out.println(odsList.get(i)
								.get(objectFieldName1.toLowerCase())+"---"+objectFieldName3);
				System.out.println(objectFieldName2+"+++"+odsList.get(i)
								.get(objectFieldName2.toLowerCase())+"---"+objectFieldName4);*/
				if (odsList.get(i).get(basisField).toString().trim().equals(str.trim())
						&&  odsList.get(i)
								.get(objectFieldName1.toLowerCase()).toString().trim()
								.equals(objectFieldName3)
						&& odsList.get(i)
								.get(objectFieldName2.toLowerCase()).toString().trim()
								.equals(objectFieldName4)) {
					is = true;
					break;
				} else {
					is = false;
					
				}
			}
			
			
			// 1 + 2
			if (objectFieldName1 != null && objectFieldName2 == null && objectFieldName1.length() > 0) {
				
//				System.out.println(objectFieldName1+"****"+odsList.get(i).get(objectFieldName1.toLowerCase())+"===="+objectFieldName3);
				if (odsList.get(i).get(basisField).toString().trim().equals(str.trim())
						&& odsList.get(i).get(objectFieldName1.toLowerCase()).toString().trim().equals(objectFieldName3.trim())) {
					//System.out.println(odsList.get(i).get(basisField)+"---"+str.trim());
					is = true;
					break;
				} else {
					is = false;
					
				}
			}
			
			if (objectFieldName1 == null && objectFieldName2 != null && objectFieldName2.length() > 0 ) {
				if (odsList.get(i).get(basisField).toString().trim().equals(str.trim())
						&& odsList.get(i).get(objectFieldName2.toLowerCase()).toString().trim().equals(objectFieldName4)) {
					is = true;
					break;
				} else {
					is = false;
					
				}
			}
		}
		if (is) {
			return " %";
		}else {
			return str+"-"+objectFieldName3+"-"+(objectFieldName4==null?"":objectFieldName4)+ "不匹配或不存在%";
		}
	  }
	  /**
	    * 判断是否存在
	    * @param str
	    * @return
	    */
	   public static String isExist(String str, List<DefineObjectVoDefault> defineObjectVoDefaults,ArrayList<Hashtable<String, Object>> odsList){
		    if (str.length()>0) {
		             /*for (int i = 0; i < defineObjectVoDefaults.size(); i++) {
						 String exisTable=	 defineObjectVoDefaults.get(i).getExistTable();//表名
						 String existTfield= defineObjectVoDefaults.get(i).getExistTfield();//字段名
						 // String sql="select * from "+exisTable+" where "+existTfield+"= '" +str+"';";
						 
					 }*/
		    	for (int i = 0; i < odsList.size(); i++) {
				}
			}
		    return " %";
	   }
	  
	  
	  /**
	   * 判断是否时间
	   * @param date
	   * @return
	   */
	   public static String isDate(String date){
		   SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");//小写的mm表示的是分钟  
		   try {
			java.util.Date date1=sdf.parse(date);
			} catch (ParseException e) {
				return date+"转日期格式错误";
			}
		   return "";
	   }
	   /**
	    * 判断是否数字
	    * @param str
	    * @return
	    */
	   public static boolean isNumeric(String str){
		    Pattern pattern = Pattern.compile("^[0-9]+(\\.[0-9]+)?$");
		    return pattern.matcher(str).matches();   
	   } 
	 

	   /**
	    * 下载excel文件
	    * @param request
	    * @param response
	    * @return
	    */
	   @RequestMapping(value="/exportExcel",method=RequestMethod.POST)
	   @ResponseBody
	   public void exportExcel(HttpServletRequest request,HttpServletResponse response){
		   //  String[] head= request.getParameterValues("head");
		    response.setCharacterEncoding("utf-8");
			String cjmbdm= request.getParameter("cjmbdm");
			String rwid=request.getParameter("rwid");
			Integer state=Integer.parseInt(request.getParameter("state"));
			 String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
			  String mbname=null;
			  try {
				  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
				  mbname= oArrayList.get(0).get("ctemplate_name").toString();
			  } catch (Exception e1) {
					e1.printStackTrace();
			  }
			  //根据任务id查询采集状态表
			  AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
			  //根据 标准模版查询对应数据库表名
			  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(cjmbdm));
			  //查询状态为1的经过校验后的数据
			  String sql=null;
			  if (state==1) {
				  sql="select * from TEM_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"' and userid="+asCjCjrwztb.getCjr()+"and state>="+state+" and cname='"+mbname+"'";
			  }else {
				  sql="select * from ODS_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"' and userid="+asCjCjrwztb.getCjr()+" and cname='"+mbname+"'";

			   }
	           //根据自定义模版id查询字段对照
			  List<AsCustomVo> asCustomVos=asCustomVoServices.findCTNAndOFN(Integer.parseInt(cjmbdm));
			  //列名 
			  String[] ctemplateTitleName=new String[asCustomVos.size()+1];
			   String[] objectFieldName =new String[asCustomVos.size()+1];
			  for (int i = 0; i < asCustomVos.size(); i++) {
				  //获取自定义列表名
				  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
				  //获取列对应的数据库字段名
				  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
			   }
			      ctemplateTitleName[asCustomVos.size()]="错误信息";
			   //参数集合
	           ArrayList<Object> pList=new ArrayList<Object>();
	           //存放得到的数据集合
	           ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQuery(sql, pList);
	           
	           List<Object[]> a=new ArrayList<Object[]>();
	           //得到自定义模版所需的数据
	           for (int i = 0; i < oArrayList.size(); i++) {
	        	   String[] b= new String[objectFieldName.length];
	        	   for (int j = 0; j < objectFieldName.length-1; j++) {
				        b[j]=oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
	        	   }
	        	   String errorLog= (String) oArrayList.get(i).get("error_log");
	        	   b[asCustomVos.size()]=(errorLog==null?" ":errorLog);
				   a.add(b);
				   b = null;
			   }
	           try {
				ExportExcelUtil.exportExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
			} catch (IOException e) {
				e.printStackTrace();
			}
		   // return null;
	   }
	   //确认提交
	   @RequestMapping(value="/confirmSubmit",method=RequestMethod.POST)
	   public String confirmSubmit(HttpServletRequest request,HttpServletResponse response){
		   String rwid= request.getParameter("rwid");
		   String cjmbdm=request.getParameter("cjmbdm");
		   String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
			  String mbname=null;
			  try {
				  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
				  mbname= oArrayList.get(0).get("ctemplate_name").toString();
			  } catch (Exception e1) {
					e1.printStackTrace();
			  }
		   //根据 标准模版查询对应数据库表名
		   AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(cjmbdm));
		   //根据任务id查询采集状态表
		   AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
		   String str="update TEM_"+asCtemplateStandard.getObjectTable()+" SET STATE=2 where insert_version ='"+asCjCjrwztb.getCjrwnf()+"' and userid ="+asCjCjrwztb.getCjr()+" and cname='"+mbname+"'";
		   try {
			   DBConnection.Add(str);
			   String sqlSuccess="update AS_CJ_CJRWZTB set CJZT=3, SHZT=0 where id=" + rwid ;
			   DBConnection.Add(sqlSuccess);
			} catch (Exception e) {
				int a=1/0;
			}
		   return null;
	   }
	   
		  //任务取消
		  @RequestMapping(value="/updateCjRwCancel",method=RequestMethod.POST)
		  @ResponseBody
		  public String updateCjRwCancel(HttpServletRequest request ,HttpServletResponse response){
			      String rwid= request.getParameter("rwidg");
				  String cjmbdm=request.getParameter("cjmbdm");
				  String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
				  String mbname=null;
				  try {
					  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
					  mbname= oArrayList.get(0).get("ctemplate_name").toString();
				  } catch (Exception e1) {
						e1.printStackTrace();
				  }
				  //根据 标准模版查询对应数据库表名
				  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(cjmbdm));
				  //查询状态未校验的数据
				  AsCjCjrwztb aCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
			      asCjrwztbServices.updateAsRWqx(Integer.parseInt(rwid));
			      String sql="";
			      sql+="delete from TEM_"+asCtemplateStandard.getObjectTable()+" where userid="+aCjCjrwztb.getCjr()+" and insert_version='"+aCjCjrwztb.getCjrwnf()+"' and cname='"+mbname+"'";
			      try {
			    	     DBConnection.Add(sql);
						response.getWriter().write("审核成功");
					} catch (IOException e) {
						e.printStackTrace();
					} catch (Exception e) {
						e.printStackTrace();
					}
			      return null;
		  }
		  
		  
		  //审核人查看已通过的提交信息
		  @RequestMapping( value="/selectPassrwxx",method = RequestMethod.POST)
		  @ResponseBody
		  public  String selectPassrwxx (HttpServletRequest request ,HttpServletResponse response){
			  String rwid=request.getParameter("rwid");
			  String cjmbdm=request.getParameter("cjmbdm");
			  String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
			  String mbname=null;
			  try {
				  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
				  mbname= oArrayList.get(0).get("ctemplate_name").toString();
			  } catch (Exception e1) {
					e1.printStackTrace();
			  }
			  //查询未通过理由
//			  System.out.println("任务id："+rwid);
			  AsCjZtsjbxx asCjZtsjbxx= cjZtsjServiceI.findZtsjbById(Integer.parseInt(rwid));
			  //根据任务id查询采集状态表
			  AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
			  //根据 标准模版查询对应数据库表名
			  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(cjmbdm));
			  //查询状态未校验的数据
			  String sql="select * from ODS_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"' and userid="+asCjCjrwztb.getCjr()+" and cname='"+mbname+"'";
			  //根据自定义模版id查询字段对照
			  List<AsCustomVo> asCustomVos=asCustomVoServices.findCTNAndOFN(Integer.parseInt(cjmbdm));
			   String[] ctemplateTitleName=new String[asCustomVos.size()];
			   String[] objectFieldName =new String[asCustomVos.size()];
			  for (int i = 0; i < asCustomVos.size(); i++) {
				  //获取自定义列表名
				  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
				  //获取列对应的数据库字段名
				  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
			   }
			   //参数集合
	           ArrayList<Object> pList=new ArrayList<Object>();
	           //存放得到的数据集合
	           ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQuery(sql, pList);
	           List<Object> a=new ArrayList<Object>();
	           //得到自定义模版所需的数据
	           for (int i = 0; i < oArrayList.size(); i++) {
	        	   Object[] b= new Object[objectFieldName.length];
	        	   for (int j = 0; j < objectFieldName.length; j++) {
				        b[j]= oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
	        	   }
				   a.add(b);
				   b = null;
			   }
				  JSONArray jsontitle=JSONArray.fromObject(ctemplateTitleName);
				  JSONArray jsontablename=JSONArray.fromObject(objectFieldName);
				  JSONArray jsoncontent = JSONArray.fromObject(a);
				  //System.out.println("标题里面的："+jsontitle);
				  //System.out.println("内容里面的："+jsoncontent);
				 // System.out.println("我想看到的 自定义模版名："+oArrayList.get(0).get("cname"));
		    	  JSONObject jObject=new JSONObject();
		    	  jObject.accumulate("title", jsontitle);
		    	  jObject.accumulate("tablename", jsontablename);
		    	  jObject.accumulate("content", jsoncontent);
		    	  jObject.accumulate("size", a.size());
	              try {
	            	response.setCharacterEncoding("utf-8");
					response.getWriter().write(jObject.toString());
				} catch (IOException e) {
					e.printStackTrace();
				}
			  return null;
		  }
		  
		   /**
		    * 默认的组合校验
		    * @return
		    */
		   public static String isDefaultCombination(int state,String strname,String strname1,String strval,String str1val,String condition){
			   String  sql="";
			   try {
				   if (state==1) {
				        sql+="select * from ods_t_teach where state=1 and "+strname+"='"+strval+"' and "+strname1+"='"+str1val+"'";
					    ArrayList<HashMap<String, Object>> list=	DBConnection.executeQueryNoParams(sql);
					    if (list.size()<=0) {
							return condition+"不匹配%";
				     	}
			       }
				   if (state==2) {
					   sql+="select * from ODS_S_STUDENT where state=1 and "+strname+"='"+strval+"' and "+strname1+"='"+str1val+"'";
					   ArrayList<HashMap<String, Object>> list=	DBConnection.executeQueryNoParams(sql);
					    if (list.size()<=0) {
							return condition+"不匹配%";
				     	}
				   }
				   
				   if (state==3) {
					   sql+="select * from organization where "+strname+"='"+strval+"' and "+strname1+"='"+str1val+"'";
					   ArrayList<HashMap<String, Object>> list=	DBConnection.executeQueryNoParams(sql);
					    if (list.size()<=0) {
							return condition+"不匹配%";
				     	}
				   }
				   if (state==4) {
					   sql+="select * from specialty where "+strname+"='"+strval+"' and "+strname1+"='"+str1val+"'";
					   ArrayList<HashMap<String, Object>> list=	DBConnection.executeQueryNoParams(sql);
					    if (list.size()<=0) {
							return condition+"不匹配%";
				     	}
				   }
			   } catch (Exception e) {
					e.printStackTrace();
			   }
			  return " %";
		   }
		   
		   public static boolean notIsNull(String str){
				if (str != null && !"".equals(str.trim()) && !"null".equals(str)) {
					return true;
				}
				return false;
			}
		   /** 
		    * 
		    * 下载未通过的文件
		    * **/
		   @RequestMapping(value="/downNoPassData",method=RequestMethod.POST)
		   @ResponseBody
		   public void downNoPassData(HttpServletRequest request,HttpServletResponse response){
			   //  String[] head= request.getParameterValues("head");
			    response.setCharacterEncoding("utf-8");
				String cjmbdm= request.getParameter("cjmbdm");
				String rwid=request.getParameter("rwid");
				String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
				  String mbname=null;
				  try {
					  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
					  mbname= oArrayList.get(0).get("ctemplate_name").toString();
				  } catch (Exception e1) {
						e1.printStackTrace();
				  }
				  //根据任务id查询采集状态表
				  AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
				  //根据 标准模版查询对应数据库表名
				  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(cjmbdm));
				  //查询状态为1的经过校验后的数据
				  String sql="select * from tem_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"' and userid="+asCjCjrwztb.getCjr()+" and cname='"+mbname+"'";
		           //根据自定义模版id查询字段对照
				  List<AsCustomVo> asCustomVos=asCustomVoServices.findCTNAndOFN(Integer.parseInt(cjmbdm));
				  //列名 
				  String[] ctemplateTitleName=new String[asCustomVos.size()];
				   String[] objectFieldName =new String[asCustomVos.size()];
				  for (int i = 0; i < asCustomVos.size(); i++) {
					  //获取自定义列表名
					  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
					  //获取列对应的数据库字段名
					  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
				   }
				   //参数集合
		           ArrayList<Object> pList=new ArrayList<Object>();
		           //存放得到的数据集合
		           ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQuery(sql, pList);
		           
		           List<Object[]> a=new ArrayList<Object[]>();
		           //得到自定义模版所需的数据
		           for (int i = 0; i < oArrayList.size(); i++) {
		        	   String[] b= new String[objectFieldName.length];
		        	   for (int j = 0; j < objectFieldName.length; j++) {
					        b[j]=oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
		        	   }
					   a.add(b);
					   b = null;
				   }
		           try {
					ExportExcelUtil.exportPassExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
				} catch (IOException e) {
					e.printStackTrace();
				}
		   }
		   public static Map<String, ArrayList<HashMap<String, Object>>> checkODSlist(int cjmbdm) throws Exception{
			   String   sql="  select DISTINCT ISNULL(acms.EXIST_TABLE,1) as exist_table  ";
					    sql+=" from( select * from AS_C_OBJECT" +
					    		"_TABLE_MAPPING where CTEMPLATE_ID="+cjmbdm+") a ";
					    sql+=" left join AS_C_TABLE_MAPPING_sjsj acms on acms.ID= a.SID where  EXIST_TABLE!=''  order by exist_table desc";
					    ArrayList<HashMap<String, Object>> maps=   DBConnection.executeQueryNoParams(sql);
					    Map<String, ArrayList<HashMap<String, Object>>> odsMap=new HashMap<String, ArrayList<HashMap<String,Object>>>();
					    for (int i = 0; i < maps.size(); i++) {
							if (!maps.get(i).get("exist_table").toString().equals("1")) {
								String sql2="select * from "+ maps.get(i).get("exist_table")+" ";
								 ArrayList<HashMap<String, Object>> maps2=DBConnection.executeQueryNoParams(sql2);
								 odsMap.put(maps.get(i).get("exist_table").toString().toLowerCase(),maps2);
							}
						}
			  return odsMap;
		   }
		   /** 
		    * 
		    * 批量通过
		    * **/
		   @RequestMapping(value="/allTaskPass",method=RequestMethod.POST)
		   @ResponseBody
		   public String allTaskPass(HttpServletRequest request,HttpServletResponse response){
			   String arr=request.getParameter("arr");
			   JSONArray  jsonArray=JSONArray.fromObject(arr);
			   String error="";
			   for (int i = 0; i < jsonArray.length(); i++) {
				String message="";
				JSONObject object=jsonArray.getJSONObject(i);
				AsCjCjrwztb asCjCjrwztb=asCjrwztbServices.findCjrecjr(Integer.parseInt(object.getString("rwid")));
				  
						//抽取数据到正式表
					/*    Map<String, String> map= extractDataServers.extractdata(cname, asCjCjrwztb.getCjrwnf(), asCjCjrwztb.getCjr(),"");
					     JSONObject jsonObject=new JSONObject();
						 jsonObject.accumulate("error", map);
						 System.out.println("错误信息是："+jsonObject);*/
					/*	String sql=" INSERT INTO AS_C_TEMPLATE_HISTORY (CTEMPLATE_ID,OBJECT_TYPE,TJ_TIME,OPERATE_TYPE,OPERATE_TIME,USER_ID,LOG,IS_DELE) VALUES("+cjmbdm+","+2+","+asCjCjrwztb.getCjrwnf()+","+2+",getdate(),'成功导入数据',"+0+");";
						DBConnection.Add(sql);*/
					   String sql="{call SP_UP_ODS_S(?,?,?,?)}";
					   try {
						   message+=DBConnection.procOutSimple(sql,object.getString("cname"),asCjCjrwztb.getCjrwnf().toString(),asCjCjrwztb.getCjr(),"");
						} catch (Exception e) {
							e.printStackTrace();
						}
					/*  ArrayList<Object> params=new ArrayList<Object>();
					    params.add(cname);
					    params.add(asCjCjrwztb.getCjrwnf());
					    params.add(asCjCjrwztb.getCjr());
					    params.add("");
					    ArrayList<Hashtable<String, Object>> list=  DBConnection.executeQuery(sql, params);
					     JSONObject jsonObject=new JSONObject();
						 jsonObject.accumulate("error", list);*/
						 //System.out.println("错误信息是："+jsonObject);
					   if (message.equals("导入成功")) {
						   asCjrwztbServices.updateAsRWtg(Integer.parseInt(object.getString("rwid")));
						   error+=object.getString("cname")+" :"+message+"#";
					   }else {
						   asCjrwztbServices.updateAsRWtgX(Integer.parseInt(object.getString("rwid")));
						   error+=object.getString("cname")+" :"+message+"#";
					   }
			}
			return error;
		   }
		   
		   @RequestMapping(value="/exportPassExcel",method=RequestMethod.POST)
		   @ResponseBody
		   public void exportPassExcel(HttpServletRequest request,HttpServletResponse response){
			   //  String[] head= request.getParameterValues("head");
			    response.setCharacterEncoding("utf-8");
				String cjmbdm= request.getParameter("cjmbdm");
				String rwid=request.getParameter("rwid");
				String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
				  String mbname=null;
				  try {
					  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
					  mbname= oArrayList.get(0).get("ctemplate_name").toString();
				  } catch (Exception e1) {
						e1.printStackTrace();
				  }
				  //根据任务id查询采集状态表
				  AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(Integer.parseInt(rwid));
				  //根据 标准模版查询对应数据库表名
				  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(cjmbdm));
				  //查询状态为1的经过校验后的数据
				  String sql="select * from ODS_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"' and userid="+asCjCjrwztb.getCjr()+" and cname='"+mbname+"'";
		           //根据自定义模版id查询字段对照
				  List<AsCustomVo> asCustomVos=asCustomVoServices.findCTNAndOFN(Integer.parseInt(cjmbdm));
				  //列名 
				  String[] ctemplateTitleName=new String[asCustomVos.size()];
				   String[] objectFieldName =new String[asCustomVos.size()];
				  for (int i = 0; i < asCustomVos.size(); i++) {
					  //获取自定义列表名
					  ctemplateTitleName[i]=asCustomVos.get(i).getCtemplateTitleName();
					  //获取列对应的数据库字段名
					  objectFieldName[i]=asCustomVos.get(i).getObjectFieldName();
				   }
				   //参数集合
		           ArrayList<Object> pList=new ArrayList<Object>();
		           //存放得到的数据集合
		           ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQuery(sql, pList);
		           
		           List<Object[]> a=new ArrayList<Object[]>();
		           //得到自定义模版所需的数据
		           for (int i = 0; i < oArrayList.size(); i++) {
		        	   String[] b= new String[objectFieldName.length];
		        	   for (int j = 0; j < objectFieldName.length; j++) {
					        b[j]=oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
		        	   }
					   a.add(b);
					   b = null;
				   }
		           try {
					ExportExcelUtil.exportPassExcel(a, ctemplateTitleName, asCustomVos.get(0).getCtemplateName(), asCustomVos.get(0).getCtemplateName(), response, (short)0, (short)11);
				} catch (IOException e) {
					e.printStackTrace();
				}
		   }
		   
		   //打印栈和堆的方法
		   public static void printCallStatck() {
		        Throwable ex = new Throwable();
		        StackTraceElement[] stackElements = ex.getStackTrace();
		        if (stackElements != null) {
		            for (int i = 0; i < stackElements.length; i++) {
		                System.out.print(stackElements[i].getClassName()+"/t");
		                System.out.print(stackElements[i].getFileName()+"/t");
		                System.out.print(stackElements[i].getLineNumber()+"/t");
		                System.out.println(stackElements[i].getMethodName());
		                System.out.println("-----------------------------------");
		            }
		        }
		    }
		   
		   @RequestMapping(value="/searchAll",method=RequestMethod.POST)
		   @ResponseBody
		   public String  searchAll(HttpServletRequest request,HttpServletResponse response){
			String searchValue=   request.getParameter("searchValue");
			String startdate=   request.getParameter("startdate");
			String enddate=   request.getParameter("enddate");
			 String sql="{call table_Search(?,?,?)}";
			  JSONObject jObject=new JSONObject();
				HashMap<String, Object> map= new HashMap<String, Object>();
				map.put("field_cname", "版本时间");
				map.put("field_ename", "REPORT_DATE");
			 try {
				//searchValue=new String(searchValue.getBytes("ISO-8859-1"),"UTF-8");
				DBConnection.procOutSimpleByValue(sql, searchValue,startdate,enddate);
				String sql1= "select distinct cd.TABLE_ENAME,cd.TABLE_CNAME,cd.TABLE_COLUMN,cd.TABLE_SELECT+replace(STUFF((select ';'+a.TABLE_TEXT from(select TABLE_TEXT,TABLE_ENAME,c.id from table_search_index b ";
				sql1+=" left join (select id,REPLACE ( object_name,'TEM' , 'ODS') as yw,table_name from SHUTCM_DATA_TEMPLATE)c on b.TABLE_ENAME=c.yw)a  ";
				sql1+=" where a.id=x.id for XML path('')),1,1,''),';',' or ')+')' as TABLE_SELECT ";
				sql1+=" from table_search_index cd left join (select TABLE_TEXT,TABLE_ENAME,c.id from table_search_index b ";
				sql1+=" left join (select id,REPLACE ( object_name,'TEM' , 'ODS') as yw,table_name from SHUTCM_DATA_TEMPLATE)c on b.TABLE_ENAME=c.yw)x ";
				sql1+=" on cd.TABLE_ENAME=x.TABLE_ENAME";
				ArrayList<HashMap<String, Object>> list=   	DBConnection.executeQueryNoParams(sql1);
				ArrayList<Object> returnlist=new ArrayList<Object>();
				for (int i = 0; i < list.size(); i++) {
					ArrayList<Object> list3=new ArrayList<Object>();
					ArrayList<HashMap<String, Object>> list1 = DBConnection.executeQueryNoParams(list.get(i).get("table_select").toString());
					String sql2 ="select FIELD_CNAME,FIELD_ENAME from SHUTCM_DATA_FIELD where SDT_ID=(select ID from SHUTCM_DATA_TEMPLATE where TABLE_NAME='"+list.get(i).get("table_cname").toString()+"' ) and FIELD_CNAME not in ('主键','错误信息');"; 
					ArrayList<HashMap<String, Object>> list2 =	DBConnection.executeQueryNoParams(sql2);
					ArrayList<Object> list5=new ArrayList<Object>();
					list2.add(map);
					for (int j = 0; j < list1.size(); j++) {
						//System.out.println(list2.get(j).get("field_ename").toString().toLowerCase());
						ArrayList<String> list4=new ArrayList<String>();
						for (int j2 = 0; j2 < list2.size(); j2++) {
							list4.add(list1.get(j).get(list2.get(j2).get("field_ename").toString().toLowerCase()).toString());
						}
						list5.add(list4);
						list4=null;
					}
					list3.add(list2);
					list3.add(list5);
					list5=null;
					list3.add(list.get(i).get("table_cname"));
					returnlist.add(list3);
					list3=null;
				}
				  JSONArray jsontitle=JSONArray.fromObject(returnlist);
				  jObject.put("title",jsontitle);
			} catch (Exception e) {
				e.printStackTrace();
			}
			 return jObject.toString();
		    }
		   
		   public static void main(String[] args) {
			  String a="12";
			  if (isNumeric(a)) {
				 System.out.println("是数字");
			  }else {
				  System.out.println("非数字");
			  }
			  
		   }
}