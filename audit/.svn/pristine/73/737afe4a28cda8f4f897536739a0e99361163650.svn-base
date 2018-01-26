package audit.controller.report;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import audit.model.report.Retification;
import audit.service.AsAssessRectificationService;
import audit.util.CookieUtil;

@Controller
@RequestMapping("asAssessRetification")
public class AsAssessRectificationController {
	@Autowired
	AsAssessRectificationService asAssessRectificationService;
	
	@ResponseBody
	@RequestMapping("getAllFiles")
	public String getAllFiles(@RequestParam Map<String,String> map,HttpServletRequest request){
		JSONArray obj = null;
		try {
			int userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie","id"));
			List<Retification> list = asAssessRectificationService.getAllFiles(Integer.parseInt(map.get("specialtyId")),map.get("rYear"),userId);
			obj = JSONArray.fromObject(list);
			if(obj==null){
				return JSONArray.fromObject("没有任何可操作数据").toString();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return obj.toString();
		
	}
	@ResponseBody
	@RequestMapping("deleteFile")
	public String deleteFile(@RequestParam Map<String,String> map){
		
	Retification ret = asAssessRectificationService.selectById(Integer.parseInt(map.get("id")));
	
	File file = new  File(ret.getFileAddress());
	if(file.exists()){
		file.delete();
	}
	int rows =	asAssessRectificationService.deleteFile(Integer.parseInt(map.get("id")));
	if(rows>0){
		return "删除成功";
	}else{
		return "删除失败";
	}
	
}	
	
@ResponseBody
@RequestMapping("/upload")  
	    public  String ddUser(@RequestParam("file") CommonsMultipartFile[] files,HttpServletRequest request,@RequestParam Map<String,String> map){  
	          
	        for(int i = 0;i<files.length;i++){  
	          
	            if(!files[i].isEmpty()){  
	                int pre = (int) System.currentTimeMillis();  
	                try {  
	                	Retification record = new Retification();
	                	String fn = files[i].getOriginalFilename();
	                	String fileType = fn.substring((fn.lastIndexOf(".")+1));
	                	String filesName = fn.substring(0,fn.lastIndexOf("."));
	                	filesName= filesName.replaceAll(" ", "");
	                	String filen=System.getProperty("assessFileUser");
	                	String userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
	                			
	                	String filea = filen+"/"+userId +"_"+ files[i].getOriginalFilename();
	                    
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
	                    record.setFilesName(filesName);
	                	record.setFileAddress(filea);
	                	SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
	                	String date=simpleDateFormat.format(new Date());
	                	record.setUploadTime(date);
	                	record.setFileType(fileType);//需输入文件类型
	                	record.setrYear(map.get("rYear"));
	                	record.setSpecialtyId(Integer.parseInt(map.get("specialtyId")));//需输入专业id
	                	record.setUploadPerson(Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id")));//需输入上传人id
	                	asAssessRectificationService.insertFiles(record);
	                } catch (Exception e) {  
	                    e.printStackTrace();  
	                    return "上传出错";  
	                }  
	        }  
	        }  
	       return "上传成功";
	    }  
@ResponseBody
@RequestMapping("downRectification")
 public String downRectification(@RequestParam Integer id, HttpServletRequest request,
            HttpServletResponse response) {
	Retification ret = asAssessRectificationService.selectById(id);
	
    String filePath = ret.getFileAddress();
    String fileName = ret.getFilesName();
    String type = filePath.substring(filePath.lastIndexOf("."));
    return down(filePath, fileName, type, request, response);
}
         
  public String down(String filePath,String fileName,String type, HttpServletRequest request,
            HttpServletResponse response) {
	
		try {
			  response.setCharacterEncoding("utf-8");
				response.setContentType("application/octet-stream");
				response.setHeader("Content-Disposition", "attachment;fileName="+new String(fileName.getBytes(),"ISO8859-1")+type);
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
	
	
	
	
}
