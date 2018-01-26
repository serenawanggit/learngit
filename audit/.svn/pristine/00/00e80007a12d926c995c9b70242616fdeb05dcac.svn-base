package audit.controller;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

/**
 * 修改logo
 * @author yjq
 * 2015-5-9
 */
@Controller
@RequestMapping("logo")
public class ChangeLogoController 	{
	
	/**
	 * 
	 * @param request
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-5-9
	 */
	@RequestMapping("changeLogoView")
	public ModelAndView changeLogoView(HttpServletRequest request,
			ModelAndView mav) {
		mav.setViewName("page/changeLogo");
		return mav;
	}
	
	/**
	 * 上传Logo
	 * @param request
	 * @param file
	 * @return
	 * @author yjq
	 * 2015-5-9
	 */
	@RequestMapping("showLogo")
	@ResponseBody
	public String showImg(HttpServletRequest request
			) throws IOException {
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		MultipartFile mFile = multipartRequest.getFile("file");
		String address = System.getProperty("logoAddress");
		InputStream inputStream = mFile.getInputStream();
		byte[] b = new byte[1048576];
		int length = inputStream.read(b);
		//应用平台
		String auditAddress =address + "//audit//images//logo//login2.png";
		FileOutputStream outputStream = new FileOutputStream(auditAddress);
		outputStream.write(b, 0, length);
		
		inputStream.close();
		outputStream.close();
		return "/images//logo//login2.png";
	}
	
	
	/**
	 * 上传Logo
	 * @param request
	 * @param file
	 * @return
	 * @author yjq
	 * 2015-5-9
	 */
	@RequestMapping("changeLogo")
	@ResponseBody
	public String changeLogo(HttpServletRequest request,
			@RequestParam("page")Integer page) throws IOException {
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		  // 得到上传的文件
		MultipartFile mFile = multipartRequest.getFile("file");
		System.out.println(mFile);
		String address = System.getProperty("logoAddress");
		
		//String path ="D://job//apache-tomcat-7.0.57//webapps//";
		// 得到上传的文件的文件名
		InputStream inputStream = mFile.getInputStream();
		byte[] b = new byte[1048576];
		int length = inputStream.read(b);
		if(page == 1){
			//应用平台
			String tqcAddress =address + "//tqc//images//log2.png";
			FileOutputStream outputStream = new FileOutputStream(tqcAddress);
			outputStream.write(b, 0, length);
			
			String auditAddress =address + "//audit//images//login2.png";
			outputStream = new FileOutputStream(auditAddress);
			outputStream.write(b, 0, length);
			
			inputStream.close();
			outputStream.close();
			return "success";
			
		}else if(page == 2){
			//登陆
			address +="//ROOT//images//logo1.png";
		}else if(page == 3){
			//领导视图
			address +="//CHART//images//login2.png";
		}else if(page == 4){
			//导航
			address +="//CHART//images//login1.png";
		}else if(page == 5){
			//后台管理
			address +="//TQCC//images//login2.png";
		}
		// 文件流写到服务器端
		FileOutputStream outputStream = new FileOutputStream(address);
		outputStream.write(b, 0, length);
		inputStream.close();
		outputStream.close();
		return "success";
	}
	
}
