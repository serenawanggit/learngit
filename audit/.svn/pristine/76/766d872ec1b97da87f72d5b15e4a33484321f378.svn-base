package audit.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import audit.model.Support_File;
import audit.model.ViewPic;
import audit.service.SupportFileI;
import audit.service.ViewPicI;
import audit.util.Common;



public class GraphServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String id = request.getParameter("id");
		//查询图片路径
		WebApplicationContext context = WebApplicationContextUtils.getWebApplicationContext(this.getServletContext()); 
		ViewPicI viewPicService = (ViewPicI)context.getBean("viewPicService");
		ViewPic vip = viewPicService.findByVpid(id!=null?Integer.parseInt(id):0);
		if (vip != null) {
			String paths = vip.getPaths();
			File file = new File(paths);
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
	
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
			doGet(request, response);
	}

}
