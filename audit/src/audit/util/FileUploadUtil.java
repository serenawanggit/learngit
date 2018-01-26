package audit.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;


public class FileUploadUtil {
	
	private static String hzStr = "xls,doc,ppt,pdf,mht,rtf,txt,log,docx,xlsx,pptx,png," +
			"bmp,jpg,tiff,gif,pcx,tga,exif,fpx,svg,psd,cdr,pcd,dxf,ufo,eps,ai,raw," +
			"avi,mpg,mpeg,mpe,m1v,m2v,mpv2,mp2v,dat,ts,tp,tpr,pva,pss,mp4,m4v,m4p,m4b,3gp,3gpp,3g2,3gp2,ogg,mov,qt,amr,rm,ram,rmvb,rpm";
	
	public static String uploadFile(HttpServletRequest request) {
		String fileSaveUrl = "";
		long fileMaxSize = 104857600; 
		SimpleDateFormat s = new SimpleDateFormat("yyyyMMdd");
		String dateStr = s.format(new Date());
		String year = dateStr.substring(0,4);
		String month = dateStr.substring(4,6);
		String day = dateStr.substring(6,dateStr.length());
		dateStr = year+"/"+month+"/"+day;
		fileSaveUrl="/"+dateStr+"/";
		
		try {
			DiskFileItemFactory factory= new DiskFileItemFactory();
			ServletFileUpload upload= new ServletFileUpload(factory);
			upload.setHeaderEncoding("UTF-8");
			@SuppressWarnings("unchecked")
			List<FileItem>  list = upload.parseRequest(request);
			String encoding=request.getCharacterEncoding();
			upload.setHeaderEncoding(encoding);
			upload.setFileSizeMax(fileMaxSize);
			
			String pname="";
			String pid="";
			
			for(FileItem  fileItem : list){
				String fileName = fileItem.getFieldName();
				if(fileItem.isFormField()){
					 String field = fileItem.getFieldName();
		             if(field.equals("pname")){
		            	 pname = fileItem.getString();
		            	 pname =new String(pname.getBytes("ISO-8859-1"),"UTF-8");
		                    continue;
		             }else if(field.equals("pid")){
		            	 pid = fileItem.getString();
		                     continue;
		             }
				}
				else{
					if("Filedata".equals(fileName)){
						String saveFileName = fileItem.getName();
						if(saveFileName!=""){
//							int fileType = FileUploadUtil.checkFileFormat(saveFileName);
//							if (fileType<0) {
//								return "GSCW";//格式不支持
//							}
							if(fileItem.getSize()>fileMaxSize){
								return "size";//文件超过规定大小
							}
//							HttpSession session =request.getSession();
//							String serverPath = session.getServletContext().getRealPath("");
							InputStream in = fileItem.getInputStream();
							
							String savePath=Common.SAVE_DIR+"/"+pname+"/"+dateStr+"/"; //��ŵ�·�� 
							FileUploadUtil.isexistdir(savePath); //判断文件夹是否存在，不存在就创建
							
							FileUploadUtil.saveFile(savePath,saveFileName, in);
							fileSaveUrl = pid+"&"+pname+fileSaveUrl+saveFileName;
							Office2Swf.office2Swf(savePath+saveFileName,null);
						}	
					}	
				}
			}
		} catch (IOException e) {
			return "false";
		}catch (FileUploadException e) {
			return "false";
		}
		return fileSaveUrl;
	}

	//保存到磁盘
	public static void saveFile(String savePath,String saveFileName,InputStream in){
		FileOutputStream out;
		try {
			out = new FileOutputStream(savePath+"\\"+saveFileName);
			byte [] b =new byte[1024];
			int len = in.read(b);
			while(len!=-1){
				out.write(b, 0, len);
				out.flush();
				len = in.read(b);
			}
			out.close();
			in.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
		}
	}
	
	/**
	 * 判断文件路径是否存在，不存在就创建
	 * @param folder TODO
	 * 
	 * @return
	 */
	public static void isexistdir(String folder) {
		File dir = new File(folder);
		if (!dir.exists()) {
			dir.mkdirs();
		}
	}
	
	/**
	 * 查询文件类型
	 * @param folder TODO
	 * 
	 * @return int -1(不支持文件格式)
	 * 	1.文件  2.图片 3.视频 
	 */
	public static int checkFileFormat(String filePath) {
		String fileType = filePath.substring(filePath.lastIndexOf(".")+1);
		String[] suppotFile = hzStr.split(",");
		for ( int i = 0; i < suppotFile.length; i++) {
			if (fileType.equals(suppotFile[i])) {
				if(i<=10){
					return 1;
				}else if(i<=28){
					return 2;
				}else {
					return 3;
				}
			} else {
				continue;
			}
		}
		return -1;
	}
	
}
