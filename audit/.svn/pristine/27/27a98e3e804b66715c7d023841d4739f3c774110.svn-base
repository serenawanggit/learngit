package audit.controller.access;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

import audit.model.assess.AsAccessDataInfo;
import audit.service.access.AsAccessDataInfoServiceI;

@Controller
@RequestMapping("asAccessDataOnLineController")
public class AsAccessDataOnLineController {
    
	@Autowired
	  private AsAccessDataInfoServiceI asAccessDataInfoServiceI ;
	 /**
	 * 显示要下载的评估材料
	 * @return
	 */
	   @RequestMapping("showData")
	   @ResponseBody
	   public String showData(HttpServletRequest request,HttpServletResponse response){
		   List<AsAccessDataInfo> asAccessDataInfos= asAccessDataInfoServiceI.findDataOnline();
		   JSONObject o = new JSONObject();
			o.put("list",asAccessDataInfos);
			try {
				response.setCharacterEncoding("utf-8");
				response.getWriter().write(o.toString());
			} catch (IOException e) {
				e.printStackTrace();
			}
		return null;
	   }
	   /**
	    * 	下载文件
	    */
	   @RequestMapping("downfile")
	   public String downfile(HttpServletRequest request,HttpServletResponse response){
		   String filename= request.getParameter("filename");
		   String type=request.getParameter("datatype");
		   File file = new File(System.getProperty("accessFileAdmin")+"\\"+filename+"."+type); 
		  // File userDir = new File(System.getProperty("accessFileUser")+"\\"+filename+"."+type);
	        try {  
	     	    String name=file.getName().trim();
	     	    name=new String(name.getBytes("utf-8"),"ISO8859-1");
		        response.setContentType("multipart/form-data");  
		        response.setHeader("Content-Disposition", "attachment;fileName="+name);  
		        ServletOutputStream out;  
	            FileInputStream inputStream = new FileInputStream(file);  
	            out = response.getOutputStream();  
	            int len = 0;
	 			while (len==0) {
	 			   len=inputStream.available();
	 			}
	 			byte[] buffer = new byte[len];
	 			inputStream.read(buffer);
	 			out.write(buffer);
	 			out.flush();
	            
	          /*  int b = 0;  
	            byte[] buffer = new byte[1024];  
	            while (b != -1){  
	                b = inputStream.read(buffer);  
	                //4.写到输出流(out)中  
	                out.write(buffer,0,b);  
	            }  
	            inputStream.close();  
	            out.close();  
	            out.flush();  */
	  
	        } catch (IOException e) {  
	            e.printStackTrace();  
	        }  
		return null;
	   }
}

