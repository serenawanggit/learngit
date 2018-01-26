package audit.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import audit.model.ReportTable;
import audit.service.AsReportTableServiceI;
import audit.util.Common;

public class DownReportServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String reportid = request.getParameter("reportid");
		WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(this.getServletContext()); 
		AsReportTableServiceI reportTableService = (AsReportTableServiceI)context.getBean("asReportTableService");
		ReportTable rt = reportTableService.findRTbyReportId(Integer.parseInt(reportid));
		String path = Common.REPORT__DIR + File.separator + rt.getReportName();
		String filename = rt.getReportName();
		if(request.getHeader("User-Agent").toUpperCase().indexOf("MSIE") > 0){
			filename = URLEncoder.encode(filename,"UTF-8");
    	}else{
    		filename = new String(filename.getBytes("UTF-8"), "ISO8859-1");  
    	}
		response.reset();
        response.setHeader("Content-Disposition", "attachment; filename=\""
                + filename + "\"");
        response.addHeader("Content-Length", "" + new File(path).length());
        response.setContentType("application/octet-stream;charset=UTF-8");
         OutputStream outputStream = response.getOutputStream();
         InputStream inputStream = new FileInputStream(path);
         byte[] buffer = new byte[1024];
         int i = -1;
         while ((i = inputStream.read(buffer)) != -1) {
          outputStream.write(buffer, 0, i);
         }
         outputStream.flush();
	}

}
