package audit.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class DownUtil {
	 public static String down(String filePath,String fileName,String type, HttpServletRequest request,
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
