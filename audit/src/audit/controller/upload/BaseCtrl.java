package audit.controller.upload;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

public class BaseCtrl {
	/**
	 * 文件上传
	 * 
	 * @param file
	 *            文件对象
	 * @param path
	 *            存储路径
	 * @return
	 */
	public static String uploadFile(MultipartFile file,HttpServletRequest request, String path,String userFilePath) {
		if (!file.isEmpty()) {
			try {
				// // 获取文件名
				// String ext = ".docx";
				String name = file.getOriginalFilename();
				// System.out.println(name);
				// if (name.lastIndexOf(".") >= 0)
				// ext = name.substring(name.lastIndexOf("."));
				// String filename = DigestUtils.md5Hex(file.getInputStream())
				// + ext.toLowerCase();
				// 创建文件夹
				String savePath = request.getSession().getServletContext().getRealPath(path);
				File folder = new File(savePath);

				if (!folder.exists())
					folder.mkdirs();
				File file2 = new File(savePath + "/" + name);
				if (!file2.exists()) {
					file.transferTo(file2);
				} else {
					return "文件名重复";
				}
				
				copyFile(file2,new File(userFilePath +  "/" + name));
				return path + "/" + name;
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
		}
		return null;
	}
	
	/**
	 * 复制文件
	 * @param sourceFile file文件
	 * @param targetFile 移动路径
	 * @throws IOException
	 */
    public static void copyFile(File sourceFile, File targetFile) throws IOException {
        BufferedInputStream inBuff = null;
        BufferedOutputStream outBuff = null;
        try {
            // 新建文件输入流并对它进行缓冲
            inBuff = new BufferedInputStream(new FileInputStream(sourceFile));

            // 新建文件输出流并对它进行缓冲
            outBuff = new BufferedOutputStream(new FileOutputStream(targetFile));

            // 缓冲数组
            byte[] b = new byte[1024 * 5];
            int len;
            while ((len = inBuff.read(b)) != -1) {
                outBuff.write(b, 0, len);
            }
            // 刷新此缓冲的输出流
            outBuff.flush();
        } finally {
            // 关闭流
            if (inBuff != null)
                inBuff.close();
            if (outBuff != null)
                outBuff.close();
        }
    }
}