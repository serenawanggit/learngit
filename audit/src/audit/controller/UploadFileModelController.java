package audit.controller;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import audit.model.AsCjCjrwztb;
import audit.model.AsCustomVo;
import audit.service.AsCjrwztbServices;
import audit.service.AsCtemplateStandardService;
import audit.service.AsCustomVoServices;
import audit.service.AsDefineTemplateServiceI;
import audit.util.DBConnection;

@Controller
@RequestMapping("/uploadFile")
public class UploadFileModelController {
	 @Resource
	 private AsDefineTemplateServiceI asDefineTemplateServiceI;
	 @Resource
	 private AsCtemplateStandardService asCtemplateStandardService;
	 @Resource
	 private AsCjrwztbServices asCjrwztbServices;
	 @Resource
	 private AsCustomVoServices asCustomVoServices; 
	 
/*	 *//**
	  * 保存自定义模版信息1
	  * @param model
	  * @param request
	  * @param response
	  * @return
	  *//*
     @RequestMapping("/uploadExcelFile")
	 public String uploadExcelFile(ModelMap model,HttpServletRequest request,HttpServletResponse response){
       String cjmbdm=request.getParameter("cjmbdm");
       String ztbdm=request.getParameter("ztbdm");
        //获取用户信息
 		String userId ="";
		String userName = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		System.out.println("用户id：" + userId+"__"+userName);
       
       // 转型为MultipartHttpRequest：     
       MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;     
       // 获得文件：     
       MultipartFile file = multipartRequest.getFile("file"); 
       //截取模版名称
       String mbName=file.getOriginalFilename().substring(0,file.getOriginalFilename().indexOf("."));
       //  System.out.println("文件名是："+file.getOriginalFilename());
       
        String className="audit.table.";
        		className+=((AsCtemplateStandard)asCtemplateStandardService.selectObjecttable(file.getOriginalFilename())).getObjectTable();
			try {
		         Class cla = Class.forName(className);
				   List<Map<String, String>> list = ExcelUtil.importExcel(file,cla);
				   DBhelp.saveDB(list,cla);
			} catch (NoSuchMethodException e) {
				e.printStackTrace();
			} catch (SecurityException e) {
				e.printStackTrace();
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
          asCjrwztbServices.updateAscjrwztb(Integer.parseInt(ztbdm));
        return null;
	 }*/
     
     /**
	  * 保存自定义模版信息2
	  * @param model
	  * @param request
	  * @param response
	  * @return
	  */
    @RequestMapping("/updateExcel")
    @ResponseBody
	public String updateExcel(ModelMap model,HttpServletRequest request,HttpServletResponse response){
        Integer cjmbdm=Integer.parseInt(request.getParameter("cjmbdm"));
        String ztbdm=request.getParameter("ztbdm");
        String cjrwdm=request.getParameter("cjrwdm");
        AsCjCjrwztb asCjCjrwztb=asCjrwztbServices.findCjRwZtId(Integer.parseInt(cjrwdm), Integer.parseInt(ztbdm));
        String insert_version=asCjCjrwztb.getCjrwnf();
        Integer cjrwztbid=asCjCjrwztb.getId();
        
        
 		//System.out.println("用户id：" + userId+"__"+userName);
     	// 转型为MultipartHttpRequest：     
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;     
        // 获得文件：     
        MultipartFile file = multipartRequest.getFile("file"); 
       
        String	filename=file.getOriginalFilename().substring(0,file.getOriginalFilename().lastIndexOf("."));
        String error="";
         List<AsCustomVo> asCustomVos= asCustomVoServices.searchAsCustomVoByOfn(filename);
         //导入之前先清空
         String sql1="";
	     sql1+="delete from TEM_"+asCustomVos.get(0).getObjectTable()+" where userid="+asCjCjrwztb.getCjr()+" and insert_version='"+asCjCjrwztb.getCjrwnf()+"' and cname='"+filename+"'";
	   
	     try {
    	     DBConnection.Add(sql1);
			} catch (IOException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
         if (!cjmbdm.equals(asCustomVos.get(0).getCtemplateId())) {
        	 error+="提交的文件列数不对,请选择正确的文件提交！";
        	 int a=1/0;
		 }
        /*  for (int i = 0; i <asCustomVos.size(); i++) {
			 System.out.println("--"+asCustomVos.get(i).getObjectFieldName());
		 }*/
         try {
        	/* String deleteSql="delete from  TEM_" + asCustomVos.get(0).getObjectTable()+"";
        	 DBConnection.Add(deleteSql);*/
        	 DBConnection.Add(str( file, asCustomVos,cjrwztbid,asCjCjrwztb.getCjr(),insert_version));
        	 String sql="update AS_CJ_CJRWZTB set CJZT=1, SHZT=0 where ZTBDM="+Integer.parseInt(ztbdm)+" and id=" + cjrwztbid ;
      	     DBConnection.Add(sql);
           //  asCjrwztbServices.updateAscjrwztb(Integer.parseInt(ztbdm),cjrwztbid);
  			 error+="提交成功！";
		} catch (Exception e) {
			 e.printStackTrace();
			 error+="文件列名不符或数据的格式存在错误！";
			return error;
		}
		return error;
	}
    
    public static String str(MultipartFile file, List<AsCustomVo> asCustomVos,Integer cjrwztbid,Integer  useId,String insert_version) throws Exception {
/*			// 将传入的File构造为FileInputStream;
		FileInputStream in = new FileInputStream(file.getContentType());*/
		// // 得到工作表
	    String filename=file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")); 
		String cname=file.getOriginalFilename().substring(0,file.getOriginalFilename().lastIndexOf(".")); 
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
			hashMap.put(asCustomVos.get(i).getCtemplateTitleName().trim(), asCustomVos.get(i).getObjectFieldName().trim());
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
				String value = cell.getStringCellValue().trim();
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
    
    public static void main(String[] args) {
    	String value = "20150915";
    	Date date = new UploadFileModelController().laowang(value);
    	if (date != null) {
			System.out.println(new SimpleDateFormat("yyyy-MM-dd").format(date));
		}else{
			System.out.println(value + "失败");
		}
	}
    
    public Date laowang(String value){
    	String [] format = {"yyyy-MM-dd","yyyy/MM/dd","yyyyMMdd","yyyy年MM月dd日"};
		Date date = null;
		for (String string : format) {
			try {
				date = new SimpleDateFormat(string).parse(value);
				System.out.println(string);
				return date;
			} catch (ParseException e) {
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
}
