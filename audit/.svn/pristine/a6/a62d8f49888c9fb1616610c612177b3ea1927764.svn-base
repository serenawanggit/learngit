package audit.controller.upload;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Collections;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import audit.model.assess.AsAccessDataInfo;
import audit.service.access.AsAccessDataInfoServiceI;
import audit.util.FileUtil;


@Controller
@RequestMapping("loadController")
public class LoadController  {
	
	@Autowired
	private AsAccessDataInfoServiceI asAccessDataInfoService;
	
	/**
	 * 文件下载
	 * @param uri 资源路径
	 * @throws IOException
	 */
	@RequestMapping("download")
	public void DownLoad(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String uri = request.getParameter("filepath");
		
		File file = new File(uri);
		
		if (file.exists()) {
			
			OutputStream outputStream = response.getOutputStream();
			FileInputStream inputStream = new FileInputStream(file);
			
			String fileName = new String(file.getName().getBytes("UTF-8"),"ISO-8859-1");
			byte cache[] = new byte[1024];
			// 设置response的Header
			response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
			OutputStream toClient = new BufferedOutputStream(response.getOutputStream());
			response.setContentType("application/octet-stream");
			toClient.write(cache);
			
			
			int n = 0;
			
			while ((n = inputStream.read(cache)) != -1) {  
				outputStream.write(cache, 0, n);
			}
			inputStream.close();
			toClient.flush();
			toClient.close();
			outputStream.close();
		}
	}
	

	/**
	 * 文件上传
	 * @throws IOException
	 */
	@RequestMapping("upload")
	@ResponseBody
	public String UpLoad(HttpServletRequest request, HttpServletResponse response,
			@RequestParam("file") MultipartFile file,
			@RequestParam("userFilePath") String userFilePath,
			@RequestParam("tableid")Integer tableid) throws IOException {
		
		// 上传文件   移动文件 
		String filename = BaseCtrl.uploadFile(file, request, "upload",userFilePath);
		// 添加记录
		String fn=file.getOriginalFilename();
		String name=fn.substring(0, fn.indexOf("."));
		String houzhui=fn.substring(fn.indexOf(".")+1);
		
		AsAccessDataInfo info=new AsAccessDataInfo();
		info.setTableId(tableid);
		info.setDataType(houzhui);
		info.setName(name);
		info.setSrc(userFilePath);
		int count = asAccessDataInfoService.searchFileCount(tableid, name, houzhui);
		if(0!=count){
			return "count";
		}
		String[] OfficePostFixs = {"doc", "docx", "xls","xlsx", "ppt", "pptx","pdf","txt"};
		ArrayList<String> office_Formats = new ArrayList<String>();
		Collections.addAll(office_Formats, OfficePostFixs);
		if(!office_Formats.contains(houzhui)){
			info.setDataOnlineSrc("upload/"+fn);
		}
		Integer i= asAccessDataInfoService.insertSelective(info);
		if (i!=null) {
			System.out.println(i);
		}else{
			System.out.println(0);
		}
		// 删除文件  转文件swf （老王）---- 未实现
		String filen=request.getSession().getServletContext().getRealPath("/upload")+"/"+file.getOriginalFilename();
		FileUtil filtUtil=new FileUtil();
		filtUtil.deleteFile(filen);
		
		return "success";
	}
}
