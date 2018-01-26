package audit.controller.report;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.poifs.filesystem.DirectoryEntry;
import org.apache.poi.poifs.filesystem.DocumentEntry;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xwpf.extractor.XWPFWordExtractor;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.pdfbox.pdfparser.PDFParser;
import org.pdfbox.pdmodel.PDDocument;
import org.pdfbox.util.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import audit.jdbc.AnaliysisJdbcDao;
import audit.model.AsCjSyfw;
import audit.model.quality.vo.ContentInfo;
import audit.model.report.AssessReport;
import audit.model.report.AssessSupport;
import audit.service.AsAssessReportService;
import audit.service.AsAssessSupportService;
import audit.service.AssessmentAllReportService;
import audit.service.AssessmentSystemService;
import audit.service.assess.AssessmentSpecialtyInfoServices;
import audit.service.assess.AssessmentSpecialtyInfoXueYuanServices;
import audit.util.CookieUtil;
import audit.util.File2Html;
import audit.util.Office2Swf;
import audit.util.test.TestJsoupComponent;



@Controller
@RequestMapping("asAssessReport")
public class AsAssessReportController {
	@Autowired
	AsAssessReportService asAssessReportService; 
	@Autowired
	AsAssessSupportService asAssessSupportService;
	@Autowired 
	AssessmentSystemService assessmentSystemService;
	@Autowired
	AssessmentSpecialtyInfoServices assessmentSpecialtyInfoServices;
	@Autowired
	AssessmentAllReportService assessmentAllReportService;
	@Autowired
	AnaliysisJdbcDao analiysisJdbcDao;
	
	@Autowired	
	AssessmentSpecialtyInfoXueYuanServices services;
	
	
	@ResponseBody
	@RequestMapping("getAllReport")
	public String getAllReport(@RequestParam Map<String,String> map,HttpServletRequest request){
		if(map.get("sysid")=="undefined") map.put("sysid", "0");
		
		JSONArray json= null;
		try {
			String specialtyId = map.get("specialtyId");
			String specialtyName =  map.get("specialtyName");
			if(specialtyName!=null&&!"".equals(specialtyName)){
				Map<String,Object> map1 = new HashMap<String, Object>();
				map1.put("specialtyName", map.get("specialtyName"));
				map1.put("sysid", map.get("sysid"));
				map1.put("syear", map.get("rYear"));
				map1.put("readRole", map.get("readRole"));
				json = JSONArray.fromObject(asAssessReportService.getAllReportZu(map1));
			}else{
				String string = map.get("sysid");
				if(("undefined").equals(string) || string==null) string="0";
				AssessReport report = 	asAssessReportService.getAllReport(Integer.parseInt(string),
				Integer.parseInt(map.get("specialtyId")),Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie","id")), map.get("rYear"));
				json = JSONArray.fromObject(report);
			}
				
		} catch (Exception e) {
			e.printStackTrace();
		}
		if(json!=null){
			return json.toString();
		}else{
			return "";
		}
		
	}
	/**
	 * 删除报告
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping("deleteReportById")
	public String deleteReportById(@RequestParam Integer id){
		AssessReport report = 	asAssessReportService.selectById(id);
		if(report.getUploadAddress()!=null){
			File file = new File(report.getUploadAddress());
			if(file.exists()){
				file.delete();
			}
		}
		int row =	asAssessReportService.deleteById(id);
		if(row>0){
			return "修改成功";
		}else{
			return "修改失败";
		}
	}
	
	/**
	 * 上传保存报告
	 * @param map
	 * @param files
	 * @param request
	 * @return
	 * 内容上传
	 */
	@ResponseBody
	@RequestMapping("uploadReport")
	public String insertReport(@RequestParam Map<String,String> map,
			@RequestParam("file") CommonsMultipartFile[] files,HttpServletRequest request){
			DecimalFormat df = new DecimalFormat("0.00");//格式化小数   
		  	for(int i = 0;i<files.length;i++){  
	            if(!files[i].isEmpty()){
	            	double format = (int) files[i].getSize() / 1000;
	            	String size = df.format(format);
	                int pre = (int) System.currentTimeMillis();  
	                try {  
	                	String fn = files[i].getOriginalFilename();
	                	String filesName = fn.substring(0, fn.lastIndexOf("."));
	                	filesName= filesName.replaceAll(" ", "");
	                	String type = fn.substring((fn.lastIndexOf(".")+1));
	                	String filen=System.getProperty("assessFileUser");
	                	String filea = filen+"/"+CookieUtil.getValueByCookie(request, "uvocookie", "id")+"_"+new Date().getTime()+"_"+ files[i].getOriginalFilename();
	                   
	                	File file_filen = new File(filen);
	                	File file = new File(filea);
	                	if(!file_filen.exists()){
	                		//文件夹不存在，先创建文件夹
		                	file_filen.mkdirs();
	                	}
	                	if(file.exists()){
	                		return "上传文件已经存在！";
	                	}
	                	file.createNewFile();
	                	
//	                	CommonsMultipartFile cmfile = files[i];
	                	
	                	//文件上传
	                	String text = this.uploadFileMethod(filea, files[i], type);
	                    
	                	//上传在线预览文件
	                	Map<String, String> map2 = OnlinePreview(request, type, files[i], filea);
	                	
	                    //把数据存入数据库
	                	AssessReport report = new AssessReport();
	                	String uids = map.get("uid");
	                	report.setrYear(map.get("dateYear"));
	            		report.setSpecialtyId(Integer.parseInt(map.get("specialtyId")));
	            		report.setSysid(Integer.parseInt(map.get("sysId")));
//	            		report.setUploadContent(text);//文件的内容
	            		report.setUploadFiles(filesName);
	            		report.setUploadAddress(filea);
	            		report.setSize(size + "K");
	            		int	userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
	            		report.setUserId(userId);
	            		report.setFileOnlineName(map2.get("currentTime"));
	            		report.setFileOnlineUrl(map2.get("outFilePath"));
	            		if(uids!=null && !uids.equals("0")){
	                		report.setId(Integer.parseInt(uids));
	                		int rows = asAssessReportService.updateReport(report);
	                	}else{
	                		int rows = asAssessReportService.insert(report);
	                	}
	                } catch (Exception e) {  
	                    e.printStackTrace();
	                    return "上传出错";
	                }  
	        }  
	    }
		return "上传成功";
	}
	
	//文件上传
	private String uploadFileMethod(String filea,CommonsMultipartFile cmfile,String type) throws IOException{
		//拿到输出流，同时重命名上传的文件 
        FileOutputStream os = new FileOutputStream(filea);
        //拿到上传文件的输入流  
        InputStream in =  cmfile.getInputStream();  
        
        byte[] butter = new byte[1024];
      
        //以写字节的方式写文件  
        int b = 0;  
        while((b=in.read(butter)) != -1){  
            os.write(butter,0,b);  
        }  
        os.flush();  
        os.close();  
        in.close();
        String text ="";
        if(type.equals("doc")||type.equals("docx")){
        	File f = new File(filea);
        	FileInputStream fis = new FileInputStream(f);  
        	if(type.equals("doc")){
	            HWPFDocument doc = new HWPFDocument(fis);
	            text = doc.getDocumentText();
//	            StringBuilder doc2 = doc.getText();
//	            Range rang = doc.getRange();
//	            String doc3 = rang.text();
	            fis.close();
        	}else{
		        XWPFDocument doc = new XWPFDocument(fis);//
		        XWPFWordExtractor extractor = new XWPFWordExtractor(doc);  
		        text = extractor.getText();        
		        fis.close();    
        	}
        }else if(type.equals("xlsx")||type.equals("xls")){
        	//上传xlsx的文件
        	
        	StringBuffer buff = new StringBuffer();
        	if(type.equals("xlsx")) buff = uploadXlsxFile(filea);
        	else if(type.equals("xls")) buff = uploadExcelToxls(filea);
        	
        	text = buff.toString();
        }else if(type.equals("pdf")){
             FileInputStream is = null;   
             PDDocument document = null;   
                 is = new FileInputStream(filea);   
                 PDFParser parser = new PDFParser(is);   
                 parser.parse();   
                 document = parser.getPDDocument();   
                 PDFTextStripper stripper = new PDFTextStripper();   
                 text = stripper.getText(document);  
                is.close();
                document.close();
        }
        return text;
	}
	
	//上传xls文件
	private StringBuffer uploadExcelToxls(String filea) throws IOException,
			FileNotFoundException {
		StringBuffer buff = new StringBuffer();   
		//创建对Excel工作簿文件的引用   
		HSSFWorkbook wb = new HSSFWorkbook(new FileInputStream(filea));   
		//创建对工作表的引用。           
		for (int numSheets = 0; numSheets < wb.getNumberOfSheets(); numSheets++) {
		      if (null != wb.getSheetAt(numSheets)) { 
//    		    	  wb.getSheetAt(numSheets);
		          HSSFSheet aSheet = (HSSFSheet) wb.getSheetAt(numSheets);//获得一个sheet   
		          buff.append("<table style='width:96%' cellspacing='0' cellpadding='0'>");
		          for (int rowNumOfSheet = 0; rowNumOfSheet <= aSheet.getLastRowNum(); rowNumOfSheet++) {   
		              if (null != aSheet.getRow(rowNumOfSheet)) {   
		                  HSSFRow aRow = aSheet.getRow(rowNumOfSheet); //获得一个行   
		                  buff.append("<tr>");
		                  for (int cellNumOfRow = 0; cellNumOfRow <= aRow.getLastCellNum(); cellNumOfRow++) {   
		                      if (null != aRow.getCell(cellNumOfRow)) {   
		                    	  buff.append("<td>");
		                          HSSFCell aCell = aRow.getCell(cellNumOfRow);//获得列值   
		                          switch(aCell.getCellType()){   
		                              case HSSFCell.CELL_TYPE_FORMULA:   
		                                  break;    
		                              case HSSFCell.CELL_TYPE_NUMERIC:   
		                                  buff.append(aCell.getNumericCellValue()).append("</td>");break;   
		                              case HSSFCell.CELL_TYPE_STRING:   
		                                  buff.append(aCell.getStringCellValue()).append("</td>");break;                                                                
		                      }                              
		              }                                                                                   
		          }   
		          buff.append("</tr>");
		          }   
		      }  
		      buff.append("</table>");
		  }              
		}
		return buff;
	}
	
	
	//上传xlsx文件
	private StringBuffer uploadXlsxFile(String filea) throws IOException,
			FileNotFoundException {
		StringBuffer buff = new StringBuffer();   
		//创建对Excel工作簿文件的引用   
		XSSFWorkbook wb = new XSSFWorkbook(new FileInputStream(filea));   
		//创建对工作表的引用。           
		for (int numSheets = 0; numSheets < wb.getNumberOfSheets(); numSheets++) {
		      if (null != wb.getSheetAt(numSheets)) {   
		          XSSFSheet aSheet = wb.getSheetAt(numSheets);//获得一个sheet   
		          buff.append("<table style='width:96%' cellspacing='0' cellpadding='0'>");
		          for (int rowNumOfSheet = 0; rowNumOfSheet <= aSheet.getLastRowNum(); rowNumOfSheet++) {   
		              if (null != aSheet.getRow(rowNumOfSheet)) {   
		                  XSSFRow aRow = aSheet.getRow(rowNumOfSheet); //获得一个行   
		                  buff.append("<tr>");
		                  for (int cellNumOfRow = 0; cellNumOfRow <= aRow.getLastCellNum(); cellNumOfRow++) {   
		                      if (null != aRow.getCell(cellNumOfRow)) {   
		                    	  buff.append("<td>");
		                          XSSFCell aCell = aRow.getCell(cellNumOfRow);//获得列值   
		                          switch(aCell.getCellType()){   
		                              case HSSFCell.CELL_TYPE_FORMULA:   
		                                  break;    
		                              case HSSFCell.CELL_TYPE_NUMERIC:   
		                                  buff.append(aCell.getNumericCellValue()).append("</td>");break;   
		                              case HSSFCell.CELL_TYPE_STRING:   
		                                  buff.append(aCell.getStringCellValue()).append("</td>");break;                                                                
		                      }                              
		              }                                                                                   
		          }   
		          buff.append("</tr>");
		          }   
		      }  
		      buff.append("</table>");
		  }              
      }
		return buff;
	}
	
	/**
	 * 保存文本框编辑内容
	 * @param map
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping("saveReport")
	public String saveReport(@RequestParam Map<String,String> map,HttpServletRequest request){
		try {
			int userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			
			int reportId = Integer.parseInt(map.get("id"));
			
			AssessReport report = new AssessReport();
			int rows ;
			
			//如果没有数据就插入一条数据
			if(Integer.parseInt(map.get("id"))==0){
				report.setrYear(map.get("dateYear"));
				report.setSpecialtyId(Integer.parseInt(map.get("specialtyId")));
				report.setSysid(Integer.parseInt(map.get("sysId")));
				report.setEnterContent(map.get("enterContent"));
				report.setUserId(userId);
				report.setScore(map.get("score"));
				report.setGrade(map.get("grade"));
				report.setProblem(map.get("problem"));
				rows = asAssessReportService.insertContent(report);
			}else{//如果有数据就修改数据
				AssessReport selectReport = asAssessReportService.selectById(reportId);
				
				if(selectReport.getUploadFiles() == null){
					report.setEnterContent(map.get("enterContent"));
				}
				
				report.setUploadContent(map.get("uploadContent"));
				report.setUploadFiles(map.get("uploadFiles"));
				report.setUploadAddress(map.get("uploadAddress"));
				report.setId(reportId);
				
				report.setScore(map.get("score"));
				report.setGrade(map.get("grade"));
				report.setProblem(map.get("problem"));
				
				rows = asAssessReportService.updateReport(report);
			}
			if(rows>0){
				return "保存成功";
			}else{
				return "保存失败";	
			}
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
			return "保存失败";
		}
		
	}
	
	/**
	 * 提交自评报告
	 * @param map
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping("submitAssessmentTask")
	public String submitAssessmentTask(@RequestParam Map<String,Object> map,HttpServletRequest request){
		try {
			int userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			
			map.put("userId", userId);
			
			int rows =0;
			
			if(rows>0){
				return "修改成功";
			}else{
				return "修改失败";	
			}
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
			return "修改失败";
		}
		
	}

	/**
	 * 获得支撑材料信息
	 * @param id
	 * @return
	 */
	@ResponseBody
	@RequestMapping("getAllSupportById")
	public String getAllSupportById(@RequestParam Map<String,String> map,HttpServletRequest request){
		List<AssessSupport> list = null;
		try {
			int sysId = 0;
			if(map.get("sysid")!=null && !"undefined".equals(map.get("sysid"))) sysId = Integer.parseInt(map.get("sysid"));
			String rYear = map.get("rYear");
			int userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			int specialtyId =Integer.parseInt(map.get("specialtyId"));
			list = asAssessSupportService.getAllSuportById(sysId,  rYear,  userId,  specialtyId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONArray.fromObject(list).toString();
	} 
	
	@ResponseBody
	@RequestMapping("DeleteSupById")
	public String DeleteSupById(@RequestParam Integer id){
		AssessSupport support = 	asAssessSupportService.selectByid(id);
		if(support.getSupportAddress()!=null){
			File file = new File(support.getSupportAddress());
			if(file.exists()){
				file.delete();
			}
		}
		int row = asAssessSupportService.deleteById(id);
		if(row > 0){
			return "修改成功";
		}else{
			return "修改失败";
		}
		
	}
	@ResponseBody
	@RequestMapping("uploadSupport")
	public String insertSupport(@RequestParam Map<String,String> map,
			@RequestParam("file") CommonsMultipartFile[] files,HttpServletRequest request){
		int rows = 0;
		  for(int i = 0;i<files.length;i++){  
	          
	            if(!files[i].isEmpty()){  
	                int pre = (int) System.currentTimeMillis();  
	                try {  
	                	String fn = files[i].getOriginalFilename();
	                	String filesName = fn.substring(0, fn.lastIndexOf("."));
	                	filesName= filesName.replaceAll(" ", "");
	                	String filen=System.getProperty("assessFileUser");
	                	String filea = filen+"/"+CookieUtil.getValueByCookie(request, "uvocookie", "id")+"_"+new Date().getTime()+"_"+ files[i].getOriginalFilename();
	                   
	                	File file = new File(filea);
	                	if(file.exists()){
	                		return "上传文件已经存在！";
	                	}
	                	 //拿到输出流，同时重命名上传的文件 
	                    FileOutputStream os = new FileOutputStream(filea);  
	                    //拿到上传文件的输入流  
	                    InputStream in =  files[i].getInputStream();  
	                  
	                    //以写字节的方式写文件  
	                    int b = 0;  
	                    while((b=in.read()) != -1){  
	                        os.write(b);  
	                    }  
	                    os.flush();  
	                    os.close();  
	                    in.close();  
	                    Map<String,Object> map1 = new HashMap<String, Object>();
	                    map1.put("supportName", filesName);
	                    map1.put("supportAddress", filea);
	                    map1.put("sysId", Integer.parseInt(map.get("sysId")));
	                    map1.put("rYear", map.get("dateYear"));
	                    map1.put("type", map.get("type"));
	                    map1.put("userId", Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id")));
	                    map1.put("specialtyId", Integer.parseInt(map.get("specialtyId")));
	                    rows =  asAssessSupportService.insert(map1);
	            		
	                } catch (Exception e) {  
	                    e.printStackTrace();  
	                    return "上传出错";  
	                }  
	        }  
	        } 
		  if(rows>0){
  			return "上传成功";
  		}else{
  			return "上传出错";
  		}
	}
	
	@ResponseBody
	@RequestMapping("getSystemByType")
	public String getSystemByType(@RequestParam Integer id,@RequestParam String syear){
		JSONArray json = null;
		try {
			List<Map<String,Object>> list = assessmentSystemService.getSystemByType(id,syear);
			json = JSONArray.fromObject(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return json.toString();
	}
	
	@ResponseBody
	@RequestMapping("getSystemSonByType")
	public String getSystemSonByType(@RequestParam Integer id,@RequestParam String syear){
		JSONArray json = null;
		try {
			List<Map<String,Object>> list = 	assessmentSystemService.getSystemSonByType(id,syear);
			json = JSONArray.fromObject(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return json.toString();
	}
	
	@ResponseBody
	@RequestMapping("getSystemThreeByType")
	public String getSystemThreeByType(@RequestParam Integer id){
		JSONArray json = null;
		try {
			List<Map<String,Object>> list = 	assessmentSystemService.getSystemThreeByType(id);
			json = JSONArray.fromObject(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return json.toString();
	}
	
	@ResponseBody
	@RequestMapping("findAllAssessmentSytem")
	public List<Map<String,Object>> findAllAssessmentSytem(){
		JSONArray json = null;
		List<Map<String, Object>> list = null;
		try {
			list = 	assessmentSystemService.findAllAssessmentSytem();
//			json = JSONArray.fromObject(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	@ResponseBody
	@RequestMapping("getUserInfo")
	public String getByUserId(HttpServletRequest request){
		JSONArray json = null;
		try {
			int id = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			List<Map<String,Object>> list = 	assessmentSystemService.getByUserId(id);
			json = JSONArray.fromObject(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return json.toString();
	}
	
	@ResponseBody
	@RequestMapping("getRolecategoryByUserId")
	public String getRolecategoryByUserId(HttpServletRequest request){
		JSONArray json = null;
		try {
			int id = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			List<Map<String,Object>> list = assessmentSystemService.getRolecategoryByUserId(id);
			json = JSONArray.fromObject(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return json.toString();
	}
	
	@ResponseBody
	@RequestMapping("getAllData")
	public String getAllData(HttpServletRequest request,@RequestParam Map<String,String> map){
		JSONArray json = null;
		try {
			int id = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		 List<Map<String,Object>> list	 = assessmentSpecialtyInfoServices.getAllData(id,Integer.parseInt(map.get("specialtyId")));
		 if(list!=null)
		 json = JSONArray.fromObject(list);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return json.toString();
	}
	
	/*
	 * 根据id查询指标信息
	 */
	@ResponseBody
	@RequestMapping("getSystemById")
	public String getSpecialtyById(HttpServletRequest request,@RequestParam Integer id,@RequestParam Integer dateYear){
			JSONArray json = null;
			try {
			 List<Map<String,Object>> list	 = assessmentSystemService.getSystemById(id,dateYear);
			 json = JSONArray.fromObject(list);
			} catch (Exception e) {
				e.printStackTrace();
			}
		return json.toString();
	}
	@ResponseBody
	@RequestMapping("getAllSpecialtyByItem")
	public String getAllSpecialtyByItem(HttpServletRequest request){
			JSONArray json = null;
			try {
				int userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			 List<Map<String,Object>> list	 = assessmentSystemService.getSystemById(userId,0);
			 json = JSONArray.fromObject(list);
			} catch (Exception e) {
				e.printStackTrace();
			}
		return json.toString();
	}
	/**
	 * 插入任务信息
	 * @param request
	 * @param map
	 * @return
	 */
	@ResponseBody
	@RequestMapping("insertTaskInfo")
	public String insertTaskInfo(HttpServletRequest request,@RequestParam Map<String,String> map){
			Map<String,Object> map1 = new HashMap<String,Object>();
			map1.put("tYear", map.get("dateYear"));
			map1.put("specialty_id", map.get("specialtyId"));
			map1.put("item", map.get("item"));
			map1.put("self_assess_zt", 1);
			map1.put("audit_zt", 0);
			map1.put("inter_people_zt", 0);
			map1.put("spot_zt", 0);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String date = 	sdf.format(new Date());
			map1.put("self_assess_time", date);
			int rows = assessmentSystemService.insertTaskInfo(map1);
			if(rows>0){
				return "提交成功";
			}else{
				return "提交失败";
			}
	}
	
	/**
	 * 插入任务信息,网评提交
	 * @param request
	 * @param map
	 * @return
	 */
	@ResponseBody
	@RequestMapping("updateTaskInfoToWangping")
	public String updateTaskInfoToWangping(HttpServletRequest request,@RequestParam Map<String,String> map){
		int userid = 0;
		try {
			userid = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		map.put("userid", userid+"");
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		int rows = assessmentSystemService.updateTaskInfoToWangping(1+"", map.get("taskId"), sdf.format(new Date()));
		if(rows>0){
			assessmentSystemService.updateWangPStruts(map);
			return "提交成功";
		}else{
			return "提交失败";
		}
	}
	
	//自评提交,改变状态
	@ResponseBody
	@RequestMapping("updateTaskInfo")
	public String updateTaskInfo(@RequestParam Map<String,String> map){
		int selfId = 1;
		int id = Integer.parseInt(map.get("id"));
		int rows = assessmentSystemService.updateTaskInfo(selfId, id);
		if(rows>0){
			return "提交成功";
		}else{
			return "提交失败";
		}
	}
	@ResponseBody
	@RequestMapping("getAllReports")
	public String getAllReports(@RequestParam Map<String,String> map,HttpServletRequest request){
		
		try {
			int userid = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		
		List<Map<String,Object>> list = assessmentAllReportService.getAllReports(userid, map.get("dateYear"), Integer.parseInt( map.get("specialtyId")));
		if(list!=null){
			JSONArray json =	JSONArray.fromObject(list);
			if(json==null){
				return "";
			}else{
				return json.toString();
			}
		}else{
			return "";
		}
		} catch (Exception e) {
			e.printStackTrace();
			return "";
		}
		
	}
	@ResponseBody
	@RequestMapping("uploadAllReports")
	public String insertAllReports(@RequestParam Map<String,String> map,HttpServletRequest request,
					@RequestParam("file") CommonsMultipartFile[] files){
		 for(int i = 0;i<files.length;i++){  
	          
	            if(!files[i].isEmpty()){  
	                int pre = (int) System.currentTimeMillis();  
	                try {  
	                	String fn = files[i].getOriginalFilename();
	                	String filesName = fn.substring(0, fn.lastIndexOf("."));
	                	filesName= filesName.replaceAll(" ", "");
	                	String filen=System.getProperty("assessFileUser");
	                	String filea = filen+"/"+CookieUtil.getValueByCookie(request, "uvocookie", "id")+"_"+new Date().getTime()+"_"+ files[i].getOriginalFilename();
	                   
	                	File file = new File(filea);
	                	if(file.exists()){
	                		return "上传文件已经存在！";
	                	}
	                	 //拿到输出流，同时重命名上传的文件 
	                    FileOutputStream os = new FileOutputStream(filea);  
	                    //拿到上传文件的输入流  
	                    InputStream in = files[i].getInputStream();  
	                  
	                    //以写字节的方式写文件  
	                    int b = 0;  
	                    while((b=in.read()) != -1){  
	                        os.write(b);  
	                    }  
	                    os.flush();  
	                    os.close();  
	                    in.close();  
	                    Map<String,Object> map1 = new HashMap<String,Object>();
	                    map1.put("tYear", map.get("dateYear"));
	                    map1.put("specialty_id", Integer.parseInt(map.get("specialtyId")));
	                    map1.put("userid", Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id")));
	                    map1.put("upload_files", filesName);
	                    map1.put("upload_address", filea);
	                    SimpleDateFormat smf = new SimpleDateFormat("yyyy-MM-dd");
	                    map1.put("upload_time", smf.format(new Date()));
	            		int rows =  assessmentAllReportService.insert(map1);
	            		
	                } catch (Exception e) {  
	                    e.printStackTrace();  
	                    return "上传出错";  
	                }  
	        }  
	        } 
		return 	"上传成功";
	}
	@ResponseBody
	@RequestMapping("deletetAllReports")
	public String deletetAllReports(@RequestParam Map<String,String> map,HttpServletRequest request){
	Map<String,Object> map1 = assessmentAllReportService.getById(Integer.parseInt(map.get("id")));
	File file = new File((String)map1.get("upload_address"));
	if(file.exists()){
		file.delete();
	}
		int rows  = assessmentAllReportService.delete(Integer.parseInt(map.get("id")));
		if(rows>0){
			return "删除成功";
		}else{
			return "删除失败";
		}
		
	}
	@ResponseBody
	@RequestMapping("downSupport")
	 public String downSupport(@RequestParam Integer id, HttpServletRequest request,
	            HttpServletResponse response) {
		AssessSupport report = asAssessSupportService.selectByid(id);
		
        String filePath = report.getSupportAddress();
        String fileName = report.getSupportName();
        String type = filePath.substring(filePath.lastIndexOf("."));
        return down(filePath, fileName, type, request, response);
	}
	@ResponseBody
	@RequestMapping("downReport")
	 public String downReport(@RequestParam Integer id, HttpServletRequest request,
	            HttpServletResponse response) {
		AssessReport report = asAssessReportService.selectById(id);
		
        String filePath = report.getUploadAddress();
        String fileName = report.getUploadFiles();
        String type = filePath.substring(filePath.lastIndexOf("."));
        return down(filePath, fileName, type, request, response);
	}
	
	
	@ResponseBody
	@RequestMapping("downAllReport")
	 public String downAllReport(@RequestParam Integer id, HttpServletRequest request,
	            HttpServletResponse response) {
		Map<String,Object> map1 = assessmentAllReportService.getById(id);
		
        String filePath = (String)map1.get("upload_address");
        String fileName = (String)map1.get("upload_files");
        
        String type = filePath.substring(filePath.lastIndexOf("."));
        return down(filePath, fileName, type, request, response);
	}
	@ResponseBody
	@RequestMapping("downTQCCSupport")
	 public String downTQCCSupport( HttpServletRequest request,
	            HttpServletResponse response) throws UnsupportedEncodingException {
		String filePath;
		String fileName;
		String type;
			filePath = URLDecoder.decode(request.getParameter("furl")).replaceAll(" ", "");
			filePath = new String(filePath.getBytes("iso-8859-1"),"utf-8");
	         fileName =	URLDecoder.decode(request.getParameter("fname"));
	         fileName=	new String(fileName.getBytes("iso-8859-1"),"utf-8").replaceAll(" ", "");
	         type = fileName.substring(fileName.lastIndexOf("."));
	         fileName=fileName.substring(0,fileName.lastIndexOf("."));
		 return down(filePath, fileName, type, request, response);
       
	} 
	@ResponseBody
	@RequestMapping("getFileContent")
	 public ContentInfo getFileContent( HttpServletRequest request,
	            HttpServletResponse response) throws UnsupportedEncodingException {
		String filePath = request.getParameter("furl").replaceAll(" ", "");
    	try {
			ContentInfo content = File2Html.fileToHtml(filePath, request);
			return content;
		} catch (Exception e) {
			// 如果格式不支持
			ContentInfo c = new ContentInfo();
			c.setStruts(2);
			e.printStackTrace();
			return c;
		}
	}  
	  public String down(String filePath,String fileName,String type, HttpServletRequest request,
	            HttpServletResponse response) {
			try {
				  response.setCharacterEncoding("utf-8");
					response.setContentType("application/octet-stream");
					response.setHeader("Content-Disposition", "attachment;fileName="
							+ new String(fileName.getBytes(), "iso-8859-1")+type);
				
				InputStream inputStream = new FileInputStream(new File(filePath));

				OutputStream os = response.getOutputStream();
				byte[] b = new byte[2048];
				int length;
				while ((length = inputStream.read(b)) > 0) {
					os.write(b, 0, length);
				}

				 // 这里主要关闭。
				os.close();

				inputStream.close();
			} catch (FileNotFoundException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
	            //  返回值要注意，要不然就出现下面这句错误！
	            //java+getOutputStream() has already been called for this response
			return null;
  }
	  /**
	   * 获取到当前任务根据专业id，时间
	   * @param map
	   * @return
	   */
	  @ResponseBody
	  @RequestMapping("selectTask")
	  public String selectTask(@RequestParam Map<String,String> map){
		  String tYear = map.get("dateYear");
		  int specialtyId = Integer.parseInt(map.get("specialtyId"));
		  int item = Integer.parseInt(map.get("itemId"));
		  try {
			List<Map<String,Object>> list= assessmentSystemService.selectTask(tYear, specialtyId, item);
			  JSONArray json = JSONArray.fromObject(list);
			  if(json!=null){
				  return json.toString();
			  }else{
				  return "";
			  }
		} catch (Exception e) {
			e.printStackTrace();
			return "";
		}
	  }
	  
	  /**
	   * getTaskToShenheOrWangping
	   */
	  @ResponseBody
	  @RequestMapping("getTaskToShenheOrWangping")
	  public String getTaskToShenheOrWangping(@RequestParam Map<String,String> map){
		  String tYear = map.get("dateYear");
		  int specialtyId = Integer.parseInt(map.get("specialtyId"));
		  int item = Integer.parseInt(map.get("itemId"));
		  
		  try {
			  //审核
			  if(map.get("shId")!=null && !map.get("shId").equals("")) {
				   return JSONArray.fromObject(assessmentSystemService.getTaskToShenheOrWangping(tYear, map.get("specialtyId"), map.get("itemId"), map.get("shId"),"sh")).toString();
			  }
			  //网评
			  if(map.get("wpId")!=null && !map.get("wpId").equals("")) {
				   return JSONArray.fromObject(assessmentSystemService.getTaskToShenheOrWangping(tYear, map.get("specialtyId"), map.get("itemId"),  map.get("wpId"),"wp")).toString();
			  }
//			  List<Map<String,Object>> list= assessmentSystemService.selectTask(tYear, specialtyId, item);
//			  JSONArray json = JSONArray.fromObject(list);
//			  if(json!=null){
//				  return json.toString();
//			  }else{
//				  return "";
//			  }
		} catch (Exception e) {
			e.printStackTrace();
			return "";
		}
		  return null;
	  }
	  
	  /**
	   * 根据专业的id获取全文的内容
	   * @param map
	   * @param request
	   * @return
	   */
	  @ResponseBody
	  @RequestMapping("getAllReportBySpeId")
	  public String getAllReportBySpeId(@RequestParam Map<String,String> map,HttpServletRequest request){
		  String rYear = map.get("dateYear");
		  int specialtyId = Integer.parseInt(map.get("specialtyId"));
		  int type = Integer.parseInt(map.get("type"));
		  try {
			  int userId  = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			List<Map<String,Object>> list= asAssessReportService.getAllReportBySpeId(rYear, userId, specialtyId, type);
			  JSONArray json = JSONArray.fromObject(list);
			  if(json!=null){
				  return json.toString();
			  }else{
				  return "";
			  }
		} catch (Exception e) {
			e.printStackTrace();
			return "";
		}
	  }
	  /**
	   * 根据专业id获取所有的支撑材料
	   * @param map
	   * @param request
	   * @return
	   */
	  @ResponseBody
	  @RequestMapping("selectAllSupportBySpeId")
	  public String selectAllSupportBySpeId(@RequestParam Map<String,String> map,HttpServletRequest request){
		  String rYear = map.get("dateYear");
		  int specialtyId = Integer.parseInt(map.get("specialtyId"));
		  int type = Integer.parseInt(map.get("type"));
		  try {
			  int userId  = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			List<Map<String,Object>> list= asAssessSupportService.selectAllSupportBySpeId(rYear, userId, specialtyId, type);
			  JSONArray json = JSONArray.fromObject(list);
			  if(json!=null){
				  return json.toString();
			  }else{
				  return "";
			  }
		} catch (Exception e) {
			e.printStackTrace();
			 return "";
		}
	  }
	  @ResponseBody
	  @RequestMapping("getCookie")
	  public String getCookie(HttpServletRequest request){
		 JSONArray json = null;
		try {
			int sid = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		List<Map<String, Object>> list = 	assessmentSystemService.getUserNameById(sid);
		if(list!=null){
			
			 json = JSONArray.fromObject(list);
		}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		  return json.toString();
	  }
	  @ResponseBody
		@RequestMapping("downWordHtml")
		 public String exportWordHtml(@RequestParam Map<String,String> params,
				 		HttpServletRequest request,
		            HttpServletResponse response){
		  String content2 = params.get("contents");
		  String speName = params.get("speName");
		 String contents = content2.replaceAll("<br>", "");
		  if(null!=contents&&!"".equals(contents.trim())){  
			//html拼接出word内容  
			  try {
				  String content="<html ><body>'";    
				 
			    //html拼接出word内容  
			    content+="<div style=\"text-align: left\">"+contents+"</div>";  
			    
			    //插入分页符  
			    content+="<span lang=EN-US style='font-size:12.0pt;line-height:150%;mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all style='page-break-before:always'></span>";  
			    content+="<p class=MsoNormal style='line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%'><o:p> </o:p></span></p>";  
			  
			content += "</body></html>";  
			//String content1 = new String(content.getBytes(), "iso-8859-1");
		//String content1 =  new String(content.getBytes("ISO8859-1"),"UTF-8");
			String content1 =  content;
				byte b[] = content1.getBytes();    
				ByteArrayInputStream bais = new ByteArrayInputStream(b);    
				POIFSFileSystem poifs = new POIFSFileSystem();    
				DirectoryEntry directory = poifs.getRoot();    
				DocumentEntry documentEntry = directory.createDocument("WordDocument", bais);    
				//输出文件  
				response.reset();  
				response.setHeader("Content-Disposition",  
				                     "attachment;filename=" +new String((speName + ".doc").getBytes(),"iso-8859-1")  
				                      )  
				                                ;  
				response.setContentType("application/msword");  
				OutputStream ostream = response.getOutputStream();   
				//输出文件的话，new一个文件流  
				//FileOutputStream ostream = new FileOutputStream(path+ fileName);    
				poifs.writeFilesystem(ostream);    
				ostream.flush();  
				ostream.close();   
				bais.close();
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} 
		}
		  return null;
	  }
	  
	  @ResponseBody
		@RequestMapping("downWordHtml1")
		 public String exportWordHtml1(@RequestParam Map<String,String> params,
				 		HttpServletRequest request,
		            HttpServletResponse response){
		  String content2 = params.get("contents");
		  String speName = params.get("speName");
		 String contents = content2.replaceAll("textarea", "div");
		  if(null!=contents&&!"".equals(contents.trim())){  
			//html拼接出word内容  
			  try {
			String content="<html xmlns:v='urn:schemas-microsoft-com:vml"+
					"xmlns:o='urn:schemas-microsoft-com:office:office'"+
					"xmlns:w='urn:schemas-microsoft-com:office:word'"+
					"xmlns:m='http://schemas.microsoft.com/office/2004/12/omml'"+
					"xmlns='http://www.w3.org/TR/REC-html40' xmlns='http://www.w3.org/1999/xhtml'>" +
					"<head><!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:TrackMoves>false</w:TrackMoves><w:TrackFormatting/><w:ValidateAgainstSchemas/><w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid><w:IgnoreMixedContent>false</w:IgnoreMixedContent><w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText><w:DoNotPromoteQF/><w:LidThemeOther>EN-US</w:LidThemeOther><w:LidThemeAsian>ZH-CN</w:LidThemeAsian><w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript><w:Compatibility><w:BreakWrappedTables/><w:SnapToGridInCell/><w:WrapTextWithPunct/><w:UseAsianBreakRules/><w:DontGrowAutofit/><w:SplitPgBreakAndParaMark/><w:DontVertAlignCellWithSp/><w:DontBreakConstrainedForcedTables/><w:DontVertAlignInTxbx/><w:Word11KerningPairs/><w:CachedColBalance/><w:UseFELayout/></w:Compatibility><w:BrowserLevel>MicrosoftInternetExplorer4</w:BrowserLevel><m:mathPr><m:mathFont m:val='Cambria Math'/><m:brkBin m:val='before'/><m:brkBinSub m:val='--'/><m:smallFrac m:val='off'/><m:dispDef/><m:lMargin m:val='0'/> <m:rMargin m:val='0'/><m:defJc m:val='centerGroup'/><m:wrapIndent m:val='1440'/><m:intLim m:val='subSup'/><m:naryLim m:val='undOvr'/></m:mathPr></w:WordDocument></xml><![endif]--></head><body>'" ;
				content+="<div style=\"text-align: center\"><span style=\"font-size: 24px\"><span style=\"font-family: 黑体\">"     
					+speName+"<br /> <br /> </span></span></div>";
			    //html拼接出word内容  
			    content+="<div style=\"text-align: left\">"+contents+"</div>";  
			    
			    //插入分页符  
			    content+="<span lang=EN-US style='font-size:12.0pt;line-height:150%;mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all style='page-break-before:always'></span>";  
			    content+="<p class=MsoNormal style='line-height:150%'><span lang=EN-US style='font-size:12.0pt;line-height:150%'><o:p> </o:p></span></p>";  
			  
			content += "</body></html>";  
			//String content1 = new String(content.getBytes(), "iso-8859-1");
					String content1 =  content;
				byte b[] = content1.getBytes();    
				ByteArrayInputStream bais = new ByteArrayInputStream(b);    
				POIFSFileSystem poifs = new POIFSFileSystem();    
				DirectoryEntry directory = poifs.getRoot();    
				DocumentEntry documentEntry = directory.createDocument("WordDocument", bais);    
				//输出文件  
				response.reset();  
				response.setHeader("Content-Disposition",  
				                     "attachment;filename=" +new String((speName + ".doc").getBytes(),"iso-8859-1")  
				                      )  
				                                ;  
				response.setContentType("application/msword");  
				OutputStream ostream = response.getOutputStream();   
				//输出文件的话，new一个文件流  
				//FileOutputStream ostream = new FileOutputStream(path+ fileName);    
				poifs.writeFilesystem(ostream);    
				ostream.flush();  
				ostream.close();   
				bais.close();
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			} 
		}
		  return null;
	  }
	  
	    @ResponseBody
		@RequestMapping("getOrg")
		public String getOrg(){
			JSONArray json =  null;
			try {
				json = JSONArray.fromObject(assessmentSystemService.getOrg());
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
			return json.toString();
			}else{
			return "";	
			}
		}
	    @ResponseBody
	    @RequestMapping("insertReportRead")
	  	public String insertReportRead(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("reportId", request.getParameter("reportId"));
	  		map.put("readRole",request.getParameter("readRole"));
	  		int rows = asAssessReportService.insertReportRead(map);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  
	  @ResponseBody
	  @RequestMapping("insertIndexFile")
	  	public String insertIndexFile(HttpServletRequest request,@RequestParam("ids[]") int[] ids){
		  List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
		  Map<String,Object> map = null;
		  for (int i = 0; i < ids.length; i++) {
			  map = new HashMap<String, Object>();
			  map.put("sysid", request.getParameter("sysid"));
		  		map.put("syear",request.getParameter("syear"));
		  		map.put("type",request.getParameter("stype"));
			  map.put("templateId", ids[i]);
			  list.add(map);
		  }
	  		
	  		int rows = assessmentSystemService.insertIndexFile(list);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  
	  @ResponseBody
	  @RequestMapping("deleteIndexFile")
	  	public String deleteIndexFile(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("id", request.getParameter("id"));
	  		int rows = assessmentSystemService.deleteIndexFile(map);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  
	  @ResponseBody
	  @RequestMapping("selectIndexFile")
	  	public List<Map<String,Object>> selectIndexFile(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("sysid", request.getParameter("sysid"));
	  		map.put("type", request.getParameter("stype"));
	  		map.put("syear", request.getParameter("syear"));
	  		 return  assessmentSystemService.selectAllIndexFile(map);
	  	}
	  @ResponseBody
	  @RequestMapping("selectFormula")
	  	public List<Map<String,Object>> selectFormula(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("sysid", request.getParameter("sysid"));
	  		map.put("syear", request.getParameter("syear"));
	  		 return  assessmentSystemService.selectFormula(map);
	  	}
	  
	  @ResponseBody
	  @RequestMapping("selectByIdFormula")
	  	public List<Map<String,Object>> selectByIdFormula(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("id", request.getParameter("id"));
	  		 return  assessmentSystemService.selectByIdFormula(map);
	  	}
	  
	  @ResponseBody
	  @RequestMapping("deleteFormula")
	  	public String deleteFormula(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("id", request.getParameter("id"));
	  		map.put("sysid", request.getParameter("sysid"));
	  		map.put("syear", request.getParameter("syear"));
	  		int rows = assessmentSystemService.deleteFormula(map);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  
	 
	  
	  @ResponseBody
	  @RequestMapping("insertFormula")
	  	public String insertFormula(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("variables", request.getParameter("objName"));
	  		map.put("formula", request.getParameter("content"));
	  		map.put("num", request.getParameter("inum"));
	  		map.put("syear", request.getParameter("syear"));
	  		map.put("sysid", request.getParameter("sysid"));
	  		int rows = assessmentSystemService.insertFormula(map);
	  		/*if(request.getParameter("objName").equals("filesum")){
	  			Map<String,Object> map1 = new HashMap<String, Object>();
	  			map1.put("variables", "realsum");
	  			map1.put("formula", "实际上传材料数目");
	  			map1.put("num", "6");
	  			map1.put("syear", request.getParameter("syear"));
	  			map1.put("sysid", request.getParameter("sysid"));
		  		assessmentSystemService.insertFormula(map1);
	  		}*/
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  @ResponseBody
	  @RequestMapping("updateFormula")
	  	public String updateFormula(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("variables", request.getParameter("objName"));
	  		map.put("formula", request.getParameter("content"));
	  		map.put("num", request.getParameter("inum"));
	  		map.put("id", request.getParameter("id"));
	  		map.put("sysid", request.getParameter("sysid"));
	  		int rows = assessmentSystemService.updateFormula(map);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  @ResponseBody
	  @RequestMapping("updateSystem")
	  	public String updateSystem(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("id", request.getParameter("id"));
	  		map.put("meaning", request.getParameter("meaning"));
	  		map.put("score", request.getParameter("score"));
	  		map.put("ratio", request.getParameter("ratio"));
	  		map.put("parent_id", request.getParameter("parent_id"));
	  		map.put("stype", request.getParameter("stype"));
	  		map.put("remark", request.getParameter("remark"));
	  		map.put("level", request.getParameter("level"));
	  		map.put("num", request.getParameter("num"));
	  		map.put("system_name", request.getParameter("system_name"));
	  		int rows = assessmentSystemService.updateSystem(map);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  @ResponseBody
	  @RequestMapping("insertSystem")
	  	public String insertSystem(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("parent_id", request.getParameter("parent_id"));
	  		map.put("stype", request.getParameter("stype"));
	  		map.put("remark", request.getParameter("remark"));
	  		map.put("level", request.getParameter("level"));
	  		map.put("num", request.getParameter("num"));
	  		map.put("system_name", request.getParameter("system_name"));
	  		int rows = assessmentSystemService.insertSystemType(map);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  @ResponseBody
	  @RequestMapping("deleteSystem")
	  	public String deleteSystem(HttpServletRequest request){
	  		Map<String,Object> map = new HashMap<String, Object>();
	  		map.put("id", request.getParameter("id"));
	  		int rows = assessmentSystemService.deleteSystemType(map);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  	}

	  
	  /**
	   * 删除材料表
	   * @param request
	   * @return
	   */

	  

	  @ResponseBody
	  @RequestMapping("deleteSelfDataFileById")
	  	public String deleteSelfDataFileById(HttpServletRequest request,@RequestParam Integer id){
	  		int rows = assessmentSystemService.deleteSelfDataFileById(id);
	  		if(rows>0){
	  			return "操作成功";
	  		}else{
	  			return "操作失败";
	  		}
	  		
	  	}
	  
		@ResponseBody
		@RequestMapping("selectAllIndexFileByPerson")
		public List<Map<String,Object>> selectAllIndexFileByPerson(HttpServletRequest request){
			Map<String,Object> map = new HashMap<String, Object>();
			map.put("sysid", request.getParameter("sysid"));
			map.put("type", request.getParameter("stype"));
			map.put("syear", request.getParameter("syear"));
			try {
				map.put("userId", Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id")));
			} catch (Exception e) {
				e.printStackTrace();
			} 
			 return  assessmentSystemService.selectAllIndexFileByPerson(map);
		}
	  
		/*
		 * 查询数据表的数据
		 */
	    @ResponseBody
	    @RequestMapping("findTemplateAndTaskInfo")
	  	public List<Map<String,Object>> findTemplateAndTaskInfo(HttpServletRequest request,@RequestParam Integer id,@RequestParam Integer dateYear,@RequestParam Integer type){
	    	List<Map<String,Object>> list = null;
	    	try {
				int userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			
		    	Map<String,Object> map = new HashMap<String, Object>();
		    	map.put("sysid", id);
		    	map.put("INSERT_VSERSION", dateYear+"%");
		    	map.put("type", type);
		    	map.put("TBR", userId);
				list = assessmentSystemService.findTemplateAndTaskInfo(map);
	    	} catch (Exception e1) {
				e1.printStackTrace();
			} 
	    	return  list;
	  	}

	    
	    /*
	     * 根据sysid查询专业建设报告内容表的信息
	     * //select * from AS_ASSESS_REPORT where SYSID=13 and RYEAR=2016 and USERID=372 and SPECIALTY_ID=34
	     */
	    @ResponseBody
	    @RequestMapping("getAssessReportBySysid")
	  	public List<Map<String,Object>> getAssessReportBySysid(HttpServletRequest request,@RequestParam Integer sysid,@RequestParam Integer ryear,@RequestParam Integer specialtyId){
	    	List<Map<String,Object>> list = null;
	    	try {
		    	Map<String,Object> map = new HashMap<String, Object>();
		    	map.put("SYSID", sysid);
		    	map.put("RYEAR", ryear);
		    	map.put("SPECIALTY_ID", specialtyId);
				map.put("USERID", CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				list = assessmentSystemService.getAssessReportBySysid(map);
			} catch (Exception e) {
				e.printStackTrace();
			}		  
	    	return  list;
	  	}
	    
	    
	    /*
	     * 根据id查询校级数据表的详细信息
	     */
	    @ResponseBody
	    @RequestMapping("getDataTemplateById")
	  	public Map<String,Object> getDataTemplateById(HttpServletRequest request,@RequestParam Integer id){
	    	Map<String,Object> map = null;
	    	try {
				map = assessmentSystemService.getDataTemplateById(id);
			} catch (Exception e) {
				e.printStackTrace();
			}		  
	    	return  map;
	  	}
	    
	    /*
	     * 根据id获取表格数据
	     */
	    @ResponseBody
	    @RequestMapping("findTableData")
	  	public List<Map<String,Object>> findTableData(HttpServletRequest request,@RequestParam Integer id,@RequestParam Integer year){
	    	List<Map<String,Object>> tableData = null;
	    	try {
	    		Map<String,Object> map = assessmentSystemService.getDataTemplateById(id);//查询表格名
				
				if(map!=null && map.size()>0){
					tableData = analiysisJdbcDao.findTableData(assessmentSystemService.findFieldByTemplateid(id), map.get("OBJECT_NAME").toString(), 
							Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id")),year);
				}
				
			} catch (Exception e) {
				e.printStackTrace();
			}		  
	    	return  tableData;
	  	}
	    
	    /*
	     * 根据id获取表格数据
	     */
	    @ResponseBody
	    @RequestMapping("findTableDataToWp")
	  	public List<Map<String,Object>> findTableDataToWp(HttpServletRequest request,@RequestParam Integer id,@RequestParam Integer year){
		    Map<String, Object> map1=new HashMap<String, Object>();
			map1.put("specialtyId", request.getParameter("specialtyId"));
			List<Map<String, Object>> list = services.getDataToSchool(map1);
	    	Integer userId = (Integer) list.get(0).get("userId");
	    	List<Map<String,Object>> tableData = null;
	    	try {
	    		Map<String,Object> map = assessmentSystemService.getDataTemplateById(id);//查询表格名
				
				if(map!=null && map.size()>0){
					tableData = analiysisJdbcDao.findTableData(assessmentSystemService.findFieldByTemplateid(id), map.get("OBJECT_NAME").toString(), 
							userId,year);
				}
				
			} catch (Exception e) {
				e.printStackTrace();
			}		  
	    	return  tableData;
	  	}
	    
	    /*
	     * 根据templateid查询表头信息
	     */
	    @ResponseBody
	    @RequestMapping("findFieldByTemplateid")
	  	public List<Map<String,String>> findFieldByTemplateid(HttpServletRequest request,@RequestParam Integer id){
	    	List<Map<String,String>> map = null;
	    	try {
				map = assessmentSystemService.findFieldByTemplateid(id);
			} catch (Exception e) {
				e.printStackTrace();
			}		  
	    	return  map;
	  	}
	    
	    /*
	     * 根据专业id和自评id查询材料信息，查询自评得分表
	     */
	    @ResponseBody
	    @RequestMapping("findSelfDataFileBySysid")
	  	public List<Map<String, Object>> findSelfDataFileBySysid(HttpServletRequest request,@RequestParam Integer sysid,@RequestParam Integer specialtyId){
	    	List<Map<String, Object>> list = null;
	    	try {
		    	Map<String,Object> map = new HashMap<String, Object>();
		    	map.put("SYSID", sysid);
		    	map.put("SPECIALTY_ID", specialtyId);
				map.put("USERID", CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				list = assessmentSystemService.findSelfDataFileBySysid(map);
			} catch (Exception e) {
				e.printStackTrace();
			}		  
	    	return  list;
	  	}
	    
	    
	    /*
	     * 下载建设内容文件
	     */
	    @ResponseBody
	    @RequestMapping("downloadReport")
	    public void downloadReport(@RequestParam Integer id,HttpServletRequest request, HttpServletResponse response) {
	    	AssessReport report = asAssessReportService.selectById(id);
	    	int lastIndexOf = report.getUploadAddress().lastIndexOf(".");//获取文件类型
	    	String fileName = report.getUploadFiles() + "." +report.getUploadAddress().substring(lastIndexOf+1);
	    	this.downFileIO(response, request, fileName, report.getUploadAddress());
//	         return "下载成功";
	     }
	    
	    /*
	     * 下载自评报告
	     */
	    @ResponseBody
	    @RequestMapping("downloadSelfData")
	    public void downloadSelfData(@RequestParam Integer id,HttpServletRequest request, HttpServletResponse response) {
	    	Map<String, Object> map = asAssessReportService.getSelfDataById(id);
	    	String fileName = map.get("FILE_NAME")+"."+map.get("FILE_TYPE");
	    	this.downFileIO(response, request,fileName , map.get("FILE_URL")+"");
//	         return "下载成功";
	     }
	    
	    
	    //上传自评材料
	    @ResponseBody
		@RequestMapping("uploadData")
		public String uploadData(@RequestParam Map<String,Object> map,
				@RequestParam("fileData") CommonsMultipartFile[] files,HttpServletRequest request){
          		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			  	for(int i = 0;i<files.length;i++){  
		            if(!files[i].isEmpty()){
		                int pre = (int) System.currentTimeMillis();  
		                try {  
		                	String fn = files[i].getOriginalFilename();
		                	String filesName = fn.substring(0, fn.lastIndexOf("."));
		                	filesName= filesName.replaceAll(" ", "");
		                	String type = fn.substring((fn.lastIndexOf(".")+1));
		                	String filen=System.getProperty("assessFileUser");
		                	String userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		                	String filea = filen+"/"+userId+"_"+new Date().getTime()+"_"+ files[i].getOriginalFilename();
		                   
		                	File file_filen = new File(filen);
		                	File file = new File(filea);
		                	if(!file_filen.exists()){
		                		//文件夹不存在，先创建文件夹
			                	file_filen.mkdirs();
		                	}
		                	if(file.exists()){
		                		return "上传文件已经存在！";
		                	}
		                	file.createNewFile();
		                	
//		                	CommonsMultipartFile cmfile = files[i];
		                	
		                	//文件上传
		                	String text = this.uploadFileMethod(filea, files[i], type);
		                	
		                	Map<String, String> map2 = OnlinePreview(request, type, files[i], filea);
				          	
		                    //把数据存入数据库
		                	map.put("FILE_NAME", filesName);//文件名
		                	map.put("FILE_URL", filea);//文件路径 
		                	map.put("FILE_ONLINE_NAME", map2.get("currentTime"));//在线浏览文件名
		                	map.put("FILE_ONLINE_URL", map2.get("outFilePath"));//在线浏览文件路径
		                	map.put("SELF_USER", userId);//自评人
		                	map.put("FILE_TYPE", type);//文件类型
//		                	map.put("FILE_TYPE", type);//文件类型
		                	map.put("UPLOAD_TIME", sdf.format(new Date(System.currentTimeMillis())));//当前时间
		                	int rows = asAssessReportService.insertSelfDataFile(map);
		                	if(rows<=0) return "上传失败";
		                } catch (Exception e) {  
		                    e.printStackTrace();
		                    return "上传出错";
		                }  
		        }  
		    }  
			return "上传成功";
		}  
	    
	 // 上传文件IO操作过程
		private void uploadFileIO(CommonsMultipartFile file,String uploadFilePath) {
			FileOutputStream os = null;
			InputStream in = null;
			try {
				os = new FileOutputStream(uploadFilePath);
				in= file.getInputStream(); 
		         int b = 0; 
		         while((b=in.read()) != -1){ 
		           os.write(b); 
		         } 
		         os.flush(); 
			} catch (Exception e) {
				e.printStackTrace();
			} finally{
		        try {
					os.close();
					in.close(); 
				} catch (IOException e) {
					e.printStackTrace();
				} 
		        
			}
		}
		
		/**
		 * 文件在线预览
		 * @param request
		 * @param type 文件类型
		 * @param file 文件
		 * @param filea  文件路径
		 */
		private Map<String, String> OnlinePreview(HttpServletRequest request,String type,CommonsMultipartFile file,String filea){
			Map<String, String> map = new HashMap<String, String>();
			
			// 文件后缀  以下后缀的文件支持在线预览
    		String[] OfficePostFixs = { "doc", "docx", "xls", "xlsx", "ppt" , "pptx", "pdf", "txt" };
    		ArrayList<String> office_Formats = new ArrayList<String>();
    		Collections.addAll(office_Formats, OfficePostFixs);
        	
    		//文件在线预览  E:\wang\ZS1-tomcat\apache-tomcat-7.0.69\webapps\audit\
        	String serverRealPath = request.getSession().getServletContext().getRealPath("/");
          	long currentTime = System.currentTimeMillis();
          	map.put("currentTime", currentTime+"");
          	String outFilePath = null;
          	String fileOnlineName = null;
          	String fileUrl = null;
          	if (office_Formats.contains(type)){
          		uploadFileIO(file,filea);//文件上传
				// 需要对文件进行格式转换
				//String online_url = Office2Swf.office2Swf(uploadFilePath, null);
          		outFilePath = serverRealPath.replace("\\", "\\\\") + "upload\\\\" + currentTime + ".swf";
//				System.out.println("---" + outFilePath);
				String uploadFilePathTO = filea.replace("//", "\\\\");
				fileOnlineName = currentTime + ".swf";
				fileUrl = filea;
				if ("pdf".equals(type)) {
					Office2Swf.pdf2Swf(uploadFilePathTO, outFilePath);
				} else { 	
					Office2Swf.office2Swf(uploadFilePathTO, outFilePath);
					//Office2Swf.office2Swf("E:\\assessFileUser\\343_201703130748138841.xls","E:\\assessFileUser\\swf\\343_201703130748138841.swf");
				}
				// 删除文件格式转换过程中产生的pdf文件
				File filePdf = new File(serverRealPath + "upload\\" + currentTime + ".pdf");
				filePdf.delete();
			}else{
				outFilePath = serverRealPath.replace("\\", "\\\\") + "upload\\" + currentTime + "." + type;
				uploadFileIO(file,outFilePath);
				fileOnlineName = currentTime +"."+ type;
				fileUrl = outFilePath;
			}
          	map.put("outFilePath", outFilePath);
          	return map;
		}
		
		
		/**
		 * 下载文件
		 * @param response 响应
		 * @param request  请求
		 * @param filename 文件名
		 * @param fullFileName 文件路径，目标文件的绝对路径 HttpServletResponse 
		 */
		private void downFileIO(HttpServletResponse response,HttpServletRequest request,String filename,String fullFileName){
			//获得请求文件名  
//			String filename = "aaa.txt";  
			System.out.println(filename);
			String newName = filename;
			try {
				newName = new String(filename.getBytes("gb2312"),"ISO8859-1");
			} catch (UnsupportedEncodingException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			
			//设置文件MIME类型  
			response.setContentType(request.getSession().getServletContext().getMimeType(newName));  
			//设置Content-Disposition  
			response.setHeader("Content-Disposition", "attachment;filename=\""+newName+"\"");  
			//读取目标文件，通过response将目标文件写到客户端  
			//获取目标文件的绝对路径
//			String fullFileName = "f:/" + filename;  
			//System.out.println(fullFileName);  
			//读取文件  
			InputStream in;
			OutputStream out;
			try {
				in = new FileInputStream(fullFileName);
				out = response.getOutputStream();
				//写文件  
//				int b;  
//				while((b=in.read())!= -1)  
//				{  
//					out.write(b);  
//				}    
				
				
				byte[] bytes = new byte[1024];
		        int len = 0;
		        while((len = in.read(bytes))>0){
		            out.write(bytes,0,len);
		        }

				
				in.close();  
				out.close(); 
			} catch (Exception e) {
				e.printStackTrace();
			}
		}


	  @ResponseBody
	  @RequestMapping("testParent")
	  public List<AsCjSyfw> testParent(int pid){
		  List<AsCjSyfw> list=new ArrayList<AsCjSyfw>();
		  AsCjSyfw acf1=null;
		  AsCjSyfw acf2=null;
		  System.out.println("我是父级"+pid);
			  acf1=new AsCjSyfw();
			  acf1.setId(1);
			  acf1.setSyfwmc("我是指标父级一");
			  acf2=new AsCjSyfw();
			  acf2.setId(2);
			  acf2.setSyfwmc("我是指标父级二");
			  list.add(acf1);
			  list.add(acf2);
			  return list;
		  
	  }
	  
	  @ResponseBody
	  @RequestMapping("queryAllAMC")
	  	public List<Map<String,Object>> queryAllAMC(HttpServletRequest request){
		  List<Map<String, Object>> queryAllAMC = assessmentSystemService.queryAllAMC();
		  System.out.println(queryAllAMC);
	  	  return assessmentSystemService.queryAllAMC();
	  	}
	  
	  @ResponseBody
	  @RequestMapping("queryAllManage")
	  	public List<Map<String,Object>> queryAllManage(HttpServletRequest request){
	  		return assessmentSystemService.queryAllManage();
	  	}

	  
	  @ResponseBody
	  @RequestMapping("queryAllManageById")
	  	public List<Map<String,Object>> queryAllManageById(HttpServletRequest request){
		  Map<String, Object> map=new HashMap<String, Object>();
		  map.put("pid", request.getParameter("pid"));
	  		return assessmentSystemService.queryAllManageById(map);
	  	}
	  
	  
	  @ResponseBody
	  @RequestMapping("insertFiledsum")
	  	public int insertFiledsum(HttpServletRequest request){
		  	Map<String, Object> map=new HashMap<String, Object>();
		  	map.put("sysid", request.getParameter("sysid"));
	  		map.put("syear", request.getParameter("syear"));
	  		map.put("filesum", request.getParameter("filesum"));
	  	  return assessmentSystemService.insertfiledsum(map);
	  	}
	  
	  
	  @ResponseBody
	  @RequestMapping("deleteFiledsum")
	  	public int deleteFiledsum(HttpServletRequest request){
		  Map<String, Object> map=new HashMap<String, Object>();
			map.put("sysid", request.getParameter("sysid"));
	  		map.put("syear", request.getParameter("syear"));
	  		return assessmentSystemService.deleteFiledsum(map);
	  	}
	  
	  @ResponseBody
	  @RequestMapping("updateFiledsum")
	  	public String updateFiledsum(HttpServletRequest request){
		  Map<String, Object> map=new HashMap<String, Object>();
			map.put("sysid", request.getParameter("sysid"));
	  		map.put("syear", request.getParameter("syear"));
	  		map.put("filesum", request.getParameter("filesum"));
	  		if( assessmentSystemService.updateFiledsum(map)>0){
	  		return "修改成功";
	  		}
	  		return "修改失败";
	  	}
	  @ResponseBody
	  @RequestMapping("selectFiledsum")
	  	public List<Map<String,Object>> selectFiledsum(HttpServletRequest request){
		  Map<String, Object> map=new HashMap<String, Object>();
			map.put("sysid", request.getParameter("sysid"));
	  		map.put("syear", request.getParameter("syear"));
	  		return assessmentSystemService.selectByIdfiledsum(map);
	  	}
	  
	  @ResponseBody
	  @RequestMapping("queryAllManageByName")
	  	public List<Map<String,Object>> queryAllManageByName(HttpServletRequest request){
		  Map<String, Object> map=new HashMap<String, Object>();
		  map.put("managename","%"+ request.getParameter("managename")+"%");
	  		return assessmentSystemService.queryAllManageByName(map);
	  	}
	  
	  @ResponseBody
	  @RequestMapping("selectAllTable")
	  	public List<Map<String,Object>> selectAllTable(HttpServletRequest request){
		  Map<String, Object> map=new HashMap<String, Object>();
		  	map.put("sysid", request.getParameter("sysid"));
	  		map.put("syear", request.getParameter("syear"));
	  		map.put("stype", request.getParameter("stype"));
	  		return assessmentSystemService.selectAllTable(map);
	  	}
	  
	  /**
	   * getAssessmentTypeById
	   * 判断课程评估和学院评估
	   */
	@ResponseBody
	@RequestMapping("getAssessmentTypeById")
  	public String getAssessmentTypeById(HttpServletRequest request,@RequestParam Integer id){
		Map<String, Object> map = assessmentSystemService.getAssessmentTypeById(id);
  		return map.get("TYPE_NAME")+"";
  	}
	
	
	@ResponseBody
	@RequestMapping("downloadWord")
  	public String downloadWord(HttpServletResponse response,HttpServletRequest request,@RequestParam String bodyData){
	    StringBuffer html = new StringBuffer();
	    html.append("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">");
	    html.append("<html xmlns=\"http://www.w3.org/1999/xhtml\">");
	    html.append("<head>");
	    
	    html.append("<style type=\"text/css\">");
	    html.append("body{");
	    html.append("font-family:SimSun;");
	    html.append("} table{border: 0px ; width:100%;}\t\t  " +
	    		".tab-1 td {border: 1px solid #D7D7D7;height:40px;}\t\t  .tab-2_1 td{border: 1px solid #ccc;height:40px;}");
//	    table thead{background-color: #eee; border: 0px solid #ccc;}\t\t  table td{border: 0px ;text-align: center; height:30px;}
	    
	    html.append(".tb_title{background-color:#eee;border:1px solid #ccc; font-weight:bold; height:30px; margin-top: 15px;}.tb_title h4{float: left; color:#4A8BC2; padding-left:10px; line-height:30px;position: relative;}.tb_main table{border: 1px solid #ccc;  border-collapse: collapse; width:100%;margin:5px 0;}.tb_main table td{border: 1px solid #ccc;text-align: center; height:30px;}.tb_main table thead{background-color: #eee; border: 1px solid #ccc;}.tb_main table tfoot td{text-align: left; padding-left:10px; }.tb_main table thead h4{float: left; line-height: 30px; padding-left:15px;}.f1class{ border: 1px solid #ccc;text-align: center; height:30px; width:30%;}");

	    html.append("</style>");
	    html.append("<meta http-equiv=\"Content-Type\" content=\"text/html;charset=GBK\"></meta>").append("</head>");
	    html.append("<body>");
	    html.append("<img src=\"/audit/page/analysisReport/img/bjgy_report.png\" style=\"width:800px;height:260px;\" /><br><br><br><br>");
	    html.append("<center><font style=\"font-size:24px;font-weight:bold;text-align:center;\">本科教学学生评教数据统计分析报告</font><br>")
	    .append("<font style=\"font-size:20px;font-weight:bold;text-align:center;\">（2015-2016学年第二学期）</font><br><br><br><br><br><br><br><br>");
	    html.append("<font style=\"font-size:20px;font-weight:bold;text-align:center;\">北京工业大学教务处</font><br>")
	    .append("<font style=\"font-size:20px;font-weight:bold;text-align:center;\">2016年9月</font></center><br><br><br><br><br>");
	    html.append("<span lang=EN-US style='font-size:12.0pt;line-height:150%;font-family:\"Times New Roman\";mso-fareast-font-family:宋体;mso-font-kerning:1.0pt;mso-ansi-language:EN-US;mso-fareast-language:ZH-CN;mso-bidi-language:AR-SA'><br clear=all  style='mso-special-character:page-break;page-break-before:always'></span>");
	    html.append(bodyData);
	    html.append("</body>");
	    html.append("</html>");
	    String path = System.getProperty("ASDS_PDF_Path") + "\\";   // + "\\template.doc";
	    SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
	    String dateString = sdf.format(new Date());
		TestJsoupComponent.htmlConvertWord(html.toString(), path,dateString);//"D:" + File.separator + "template.doc");
	/*	try {
//			String str = "<script>";
			//response.getWriter().print(dateString);
		} catch (IOException e) {
			e.printStackTrace();
		}*/
//		return "123456789";
		return dateString;
  	};
	
	@ResponseBody
	@RequestMapping("wordLoad")
	public void wordLoad(HttpServletResponse response,HttpServletRequest request,@RequestParam String filename,@RequestParam String dateString){
		response.setContentType("text/html");
	    response.setCharacterEncoding("gbk");
		String path = System.getProperty("ASDS_PDF_Path") + "\\";
		downFileIO(response, request, filename + ".doc", path+dateString+".doc");
	}

}
