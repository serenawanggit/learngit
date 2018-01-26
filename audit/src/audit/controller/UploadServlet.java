package audit.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import audit.util.ExcelOperate;

public class UploadServlet extends HttpServlet {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;


	
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		 PrintWriter out = response.getWriter();
		//判断提交过来的表单是否为文件上传菜单
        boolean isMultipart= ServletFileUpload.isMultipartContent(request);
        if(isMultipart){
            //构造一个文件上传处理对象
            FileItemFactory factory = new DiskFileItemFactory();
            ServletFileUpload upload = new ServletFileUpload(factory);
            Iterator  items;
            try{
                //解析表单中提交的所有文件内容
            	items=upload.parseRequest(request).iterator();
                while(items.hasNext()){
                    FileItem item = (FileItem) items.next();
                    if(!item.isFormField()){
                        //取出上传文件的文件名称
                        String name = item.getName();
                        //取得上传文件以后的存储路径
                        String fileName=name.substring(name.lastIndexOf('\\')+1,name.length());
                        //上传文件以后的存储路径
                        String path= "D:"+File.separatorChar+fileName;
                        //上传文件
                        File uploaderFile = new File(path);
                        item.write(uploaderFile);
                        //打印上传成功信息
                        response.reset();
                        response.setContentType("text/html");
                        response.setCharacterEncoding("GB2312");
                       
                        File tmpFile = new File("D:"+File.separatorChar+fileName);
                        String objclass = request.getParameter("objclass");
                        String year = request.getParameter("year");
                        String cl = "audit.model.gj." + objclass;
						Class<?> cs = null;
						try {
							cs = Class.forName(cl);
						} catch (ClassNotFoundException e) {
							e.printStackTrace();
						}
						//查出所有数据
                       List<?> list =  (ArrayList) new ExcelOperate(tmpFile.getAbsolutePath()).obtain(cs);
                        //插入数据表
                       int value = ExcelOperate.insert(cs, list,Integer.parseInt(year));
                       out.print(value);
                    }
                }
            }catch(Exception e){
            	out.println("error");
                e.printStackTrace();
            }
        }
	}
	
}
