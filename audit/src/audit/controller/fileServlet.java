package audit.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import audit.model.Support_File;
import audit.service.SupportFileI;
import audit.util.Common;



public class fileServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(this.getServletContext()); 
		SupportFileI supportFileService = (SupportFileI)context.getBean("supportFileService");
		String id = request.getParameter("id");
		Support_File supportFile = supportFileService.findSupportFileById(Integer.parseInt(id));
		String url = supportFile.getDir();
		String name = url.substring(0,url.lastIndexOf("."));
		String targetdir = "";
		if(supportFile.getFlag() == 1){
			targetdir = name + ".swf";
		}
		if(supportFile.getFlag() == 2){
			targetdir = url;
		}
		if(supportFile.getFlag() == 3){
			targetdir = name + ".flv";
		}
		File file = new File(Common.SAVE_DIR + File.separator + targetdir);
	        response.reset();
	        response.setHeader("Content-Disposition", "attachment; filename=\""
	                + file.getName() + "\"");
	        response.addHeader("Content-Length", "" + file.length());
	        response.setContentType("application/octet-stream;charset=UTF-8");
	        OutputStream outputStream = null;
	        InputStream inStream = null;
	        try {
	            outputStream = new BufferedOutputStream(response.getOutputStream());
	            byte[] byt = new byte[4096];
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

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			doGet(request, response);
	}

}
