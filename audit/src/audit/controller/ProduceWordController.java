package audit.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsECkeditorContent;
import audit.model.AsEstimate;
import audit.service.AsECkeditorContentI;
import audit.service.AsEstimateServiceI;
import audit.util.Common;
import audit.util.PoiWord;

@Controller
public class ProduceWordController {

	private AsEstimateServiceI asEstimateService;
	@Autowired
	public void setAsEstimateService(AsEstimateServiceI asEstimateService){
		this.asEstimateService = asEstimateService;
	}
	private AsECkeditorContentI asEckeditorContentService;
	@Autowired
	public void setAsEckeditorContentService(AsECkeditorContentI asEckeditorContentService){
		this.asEckeditorContentService = asEckeditorContentService;
	}
	
	@RequestMapping(value="/produce/word",method=RequestMethod.GET)
	@ResponseBody
	public String word(){
		String contentstr = "<html>";
		contentstr += "<head><meta http-equiv='Content-Type' content='text/html'; charset='UTF-8'/></head>";
		contentstr += "<body>";
//		contentstr += "<p style='width:200px;height:80px;'><img src='/audit/images/word/hlg.png'></p>";
		contentstr += "<p style='color:#4F81BD;font-size:36px;font-weight:bold'>本科教学质量报告</p>";
//		contentstr += "<br /><br /><p style='width:200px;height:200px;'><img src='/audit/images/word/logo.png'></p>";
//		contentstr += "<br /><br /><p style='color:#4F81BD;font-size:20px;font-weight:bold'>2014年10月</p>";
		List<AsEstimate> asEstimates = asEstimateService.selectAllRoot2s();
		int xh = 0;
		for (AsEstimate ae : asEstimates){  
			xh++;
				contentstr += "<div style='color:#C0003A;font-size:20px;font-weight:blod;margin-top:20px;'><strong>" + xh+ " " + ae.getName() + "</strong></div>";
				List<AsEstimate> asEstimates2 = asEstimateService.selectAllSub2s(ae.getId());
		         if(asEstimates2 != null){
		        	 int subxh = 0;
		        	 for(AsEstimate ae2:asEstimates2){
		        		 subxh++;
		        		 contentstr += "<div style='color:#7081BD;font-size:16px;margin-left:20px;margin-top:10px;'><strong>" + xh+"." + subxh + " " +ae2.getName() + "</strong></div>";
		        		 contentstr += "<br />"; 
		        		 AsECkeditorContent acc = asEckeditorContentService.asEckcontentsByEid(ae2.getId());
		        		 if(acc != null){
		        			 contentstr += "<div style='margin-left:40px;width:800px;'>"+acc.getContent()+"</div>";
		        		 }
		        	 }
		         }
		}
		contentstr+="</body></html>";
		PoiWord.writeWord(contentstr, Common.SAVE_DIR + File.separator, "本科教学质量报告.doc");
		return "ok";
	}
	
	
	@RequestMapping(value="/produce/downWord",method=RequestMethod.GET)
	public void downWord(HttpServletRequest request,HttpServletResponse response){
		File file = new File(Common.SAVE_DIR + File.separator + "本科教学质量报告.doc");
		String fileName = null ;
	    try {
	    	if(request.getHeader("User-Agent").toUpperCase().indexOf("MSIE") > 0){
	    		fileName = URLEncoder.encode(file.getName(),"UTF-8");
	    	}else{
	    		fileName = new String(file.getName().getBytes("UTF-8"), "ISO8859-1");  
	    	}
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
	        response.reset();
	        response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
	        response.addHeader("Content-Length", "" + file.length());
	        response.setContentType("application/octet-stream;charset=UTF-8");
	        OutputStream outputStream = null;
	        InputStream inStream = null;
	        try {
	            outputStream = new BufferedOutputStream(response.getOutputStream());
	            byte[] byt = new byte[1024];
	            int leng;
	            inStream = new FileInputStream(file);
	            while ((leng = inStream.read(byt)) > 0) {
	                outputStream.write(byt, 0, leng);
	            }
	        } catch (IOException e) {
	            e.printStackTrace();
	        } finally {
	            try {
	                if (inStream != null) {
	                    inStream.close();
	                }
	                if (outputStream != null) {
	                    outputStream.flush();
	                    outputStream.close();
	                }
	            } catch (IOException e) {
	                e.printStackTrace();
	            }

	        }
	   
	}
}
