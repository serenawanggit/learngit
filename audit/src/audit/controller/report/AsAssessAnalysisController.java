package audit.controller.report;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import audit.jdbc.AnaliysisJdbcDao;
import audit.model.report.Retification;
import audit.service.AsAssessAnalysisService;
import audit.util.CookieUtil;
import audit.util.DownUtil;

@Controller
@RequestMapping("asAssessAnalysis")
public class AsAssessAnalysisController {
	
	@Autowired
	AnaliysisJdbcDao analiysisJdbcDao;
	
	@Autowired
	AsAssessAnalysisService analysisService;
	
	@ResponseBody
	@RequestMapping("getZRJSQKB")
	public String getAllFiles(@RequestParam Map<String,String> map,HttpServletRequest request){
		JSONArray obj = null;
		try {
			Map<String,Object> map1  = new HashMap<String, Object>();
				map1.put("syear",request.getParameter("syear"));
				map1.put("depart", request.getParameter("depart"));
				//map1.put("depart", "英语学院");
				map1.put("bname", map.get("bname"));
				obj = 	JSONArray.fromObject(analiysisJdbcDao.getZRJSQKB(map1));
				
				if(obj!=null){
					return obj.toString();
				}
		} catch (Exception e){
			e.printStackTrace();
		}
		return "";
	}
	@ResponseBody
	@RequestMapping("getRecPlan")
	public String getRecPlan(@RequestParam Map<String,String> map,HttpServletRequest request){
		JSONArray obj = null;
		try {
			Map<String,Object> map1  = new HashMap<String, Object>();
				map1.put("rYear",request.getParameter("rYear"));
				map1.put("specialtyId", request.getParameter("specialtyId"));
				map1.put("userId", CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				obj = 	JSONArray.fromObject(analysisService.selectRecPlan(map1));
				if(obj!=null){
					return obj.toString();
				}
		} catch (Exception e){
			e.printStackTrace();
		}
		return "";
	}
	@ResponseBody
	@RequestMapping("getRecPlanByShid")
	public String getRecPlanByShid(@RequestParam Map<String,String> map,HttpServletRequest request){
		JSONArray obj = null;
		try {
			Map<String,Object> map1  = new HashMap<String, Object>();
				map1.put("rYear",request.getParameter("rYear"));
				map1.put("specialtyId", request.getParameter("specialtyId"));
				map1.put("userId", CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				obj = 	JSONArray.fromObject(analysisService.selectRecPlanByShid(map1));
				if(obj!=null){	
					return obj.toString();
				}
		} catch (Exception e){
			e.printStackTrace();
		}
		return "";
	}
	@ResponseBody
	@RequestMapping("saveRecPlan")
	public String saveRecPlan(@RequestParam Map<String,String> map,HttpServletRequest request){
		JSONArray obj = null;
		try {
			Map<String,Object> map1  = new HashMap<String, Object>();
				int id =Integer.parseInt(map.get("id"));
				map1.put("rYear",request.getParameter("rYear"));
				map1.put("write_content", request.getParameter("enterContent"));
				map1.put("id", id);
				map1.put("specialtyId", map.get("specialtyId"));
				map1.put("userId", CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				
				if(id==0){
					map1.put("upload_url", map.get("uurl"));
					map1.put("upload_File",map.get("uFile"));
					obj = 	JSONArray.fromObject(analysisService.insertRecPlan(map1));
				}else{
					obj = 	JSONArray.fromObject(analysisService.updateRecPlan(map1));
				}
				if(obj!=null){
					return obj.toString();
				}
		} catch (Exception e){
			e.printStackTrace();
		}
		return "";
	}
	@ResponseBody
	@RequestMapping("uploadRecPlan")
	 public  String uploadRecPlan(@RequestParam("file") CommonsMultipartFile[] files,HttpServletRequest request,@RequestParam Map<String,String> map){  
        
        for(int i = 0;i<files.length;i++){  
          
            if(!files[i].isEmpty()){  
                int pre = (int) System.currentTimeMillis();  
                try {  
                	Map<String,Object> map1 = new HashMap<String, Object>();
                	String fn = files[i].getOriginalFilename();
                	String filesName = fn.substring(0,fn.lastIndexOf("."));
                	filesName= filesName.replaceAll(" ", "");
                	String filen=System.getProperty("assessFileUser");
                	String userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
                	String filea = filen+"/"+userId +"_"+new Date().getTime()+"_"+ files[i].getOriginalFilename();
                   
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
                    int id = Integer.parseInt(map.get("id"));
                    map1.put("upload_File",filesName);
                    map1.put("upload_url",filea);
                	map1.put("rYear",map.get("rYear"));
                	map1.put("specialtyId",Integer.parseInt(map.get("specialtyId")));//需输入专业id
                	map1.put("userId",Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id")));//需输入上传人id
                	map1.put("id", id);
                    if(id==0){
                    	map1.put("write_content", map.get("wcontent"));
                    	analysisService.insertRecPlan(map1);
                    }else{
                    	analysisService.updateRecPlan(map1);
                    }
                                    	//asAssessRectificationService.insertFiles(record);
                } catch (Exception e) {  
                    e.printStackTrace();  
                    return "上传出错";  
                }  
        }  
        }  
       return "上传成功";
    }  
	@ResponseBody
	@RequestMapping("updateRecPlan")
	public String updateRecPlan(@RequestParam Map<String,String> map,HttpServletRequest request){
		JSONArray obj = null;
		try {
			Map<String,Object> map1  = new HashMap<String, Object>();
				map1.put("id",request.getParameter("rid"));
				map1.put("upload_File", request.getParameter("uFile"));
				//map1.put("depart", "英语学院");
				map1.put("write_content", map.get("wcontent"));
				map1.put("upload_url", map.get("uurl"));
				obj = 	JSONArray.fromObject(analysisService.updateRecPlan(map1));
				if(obj!=null){
					return obj.toString();
				}
		} catch (Exception e){
			e.printStackTrace();
		}
		return "";
	}
	
	@ResponseBody
	@RequestMapping("downRecPlan")
	public String downRecPlan(HttpServletRequest request,HttpServletResponse response){
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("id", request.getParameter("uid"));
		List<Map<String,Object>> list = analysisService.selectRecPlanById(map);
		String filePath = list.get(0).get("upload_url").toString();
		String fileName = list.get(0).get("upload_File").toString();
		String type = filePath.substring(filePath.lastIndexOf("."));
		DownUtil.down(filePath, fileName, type, request, response);
		return null;
	}
}
