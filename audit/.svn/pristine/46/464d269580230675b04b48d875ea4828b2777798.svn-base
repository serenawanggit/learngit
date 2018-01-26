package audit.util;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

public class FileUtil {
	private boolean flag;
	private File file;
	public boolean isFlag() {
		return flag;
	}

	public void setFlag(boolean flag) {
		this.flag = flag;
	}

	public static File createDir(String rootDir) {
		File dir = new File(rootDir);
		if (!dir.exists()) {
			dir.mkdirs();
		}
		Date date = new Date();
		String year = dateToString(date, "yyyy");
		String month = dateToString(date, "MM");
		String day = dateToString(date, "dd");
		File dirYear = createDir(dir, year);
		File dirMonth = createDir(dirYear, month);
		File dirDay = createDir(dirMonth, day);
		return dirDay;
	}

	/**
	 * 创建目录
	 * 
	 * @param parent
	 *            父目录
	 * @param dirName
	 *            目录名
	 * @return
	 */
	private static File createDir(File parent, String dirName) {
		File childDir = new File(parent, dirName);
		if (!childDir.exists()) {
			childDir.mkdirs();
		}
		return childDir;
	}

	/**
	 * 日期转字符串
	 * 
	 * @param date
	 * @param pattern
	 * @return
	 */
	public static String dateToString(Date date, String pattern) {
		SimpleDateFormat format = new SimpleDateFormat(pattern);
		return format.format(date);
	}

	/**
	 * 
	 * @param inFile
	 *            输入文件
	 * @param outFile
	 *            输出文件
	 */
	public static void save(File inFile, File outFile) {
		InputStream in = null;
		OutputStream out = null;
		try {
			in = new FileInputStream(inFile);
			if (!outFile.exists()) {
				outFile.createNewFile();
			}
			out = new FileOutputStream(outFile);
			int len;
			byte[] buffer = new byte[1024];
			while ((len = in.read(buffer)) != -1) {
				out.write(buffer, 0, len);
				out.flush();
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				in.close();
				out.close();
			} catch (IOException e) {
				e.printStackTrace();
			}

		}
	}

	
	
	
	
	
	/**
	 * 根据路径删除指定的目录或文件，无论存在与否
	 * 
	 * @param sPath
	 *            要删除的目录或文件
	 * @return 删除成功返回 true，否则返回 false。
	 */
	public boolean DeleteFolder(String sPath) {
		flag = false;
		file = new File(sPath);
		// 判断目录或文件是否存在
		if (!file.exists()) { // 不存在返回 false
			return flag;
		} else {
			// 判断是否为文件
			if (file.isFile()) { // 为文件时调用删除文件方法
				return deleteFile(sPath);
			} else { // 为目录时调用删除目录方法
				return deleteDirectory(sPath);
			}
		}
	}

	/**
	 * 删除单个文件
	 * 
	 * @param sPath
	 *            被删除文件的文件名
	 * @return 单个文件删除成功返回true，否则返回false
	 */
	public boolean deleteFile(String sPath) {
		flag = false;
		file = new File(sPath);
		// 路径为文件且不为空则进行删除
		if (file.isFile() && file.exists()) {
			file.delete();
			flag = true;
		}
		return flag;
	}
	

	/**
	 * 删除目录（文件夹）以及目录下的文件
	 * 
	 * @param sPath
	 *            被删除目录的文件路径
	 * @return 目录删除成功返回true，否则返回false
	 */
	public boolean deleteDirectory(String sPath) {

		// 如果sPath不以文件分隔符结尾，自动添加文件分隔符
		if (!sPath.endsWith(File.separator)) {
			sPath = sPath + File.separator;
		}
		File dirFile = new File(sPath);
		// 如果dir对应的文件不存在，或者不是一个目录，则退出
		if (!dirFile.exists() || !dirFile.isDirectory()) {
			return false;
		}
		flag = true;
		// 删除文件夹下的所有文件(包括子目录)
		File[] files = dirFile.listFiles();
		for (int i = 0; i < files.length; i++) {
			// 删除子文件
			if (files[i].isFile()) {
				flag = deleteFile(files[i].getAbsolutePath());
				if (!flag)
					break;
			} // 删除子目录
			else {
				flag = deleteDirectory(files[i].getAbsolutePath());
				if (!flag)
					break;
			}
		}
		if (!flag)
			return false;
		// 删除当前目录
		if (dirFile.delete()) {
			return true;
		} else {
			return false;
		}
	}
	
	
	/**   
     *    
     * @param inputFileName 输入一个文件夹   
     * @param zipFileName   输出一个压缩文件夹，打包后文件名字   
     * @throws Exception   
     */    
    public void zip(String inputFileName, String zipFileName) throws Exception {     
        zip(zipFileName, new File(inputFileName));     
    }     
    
    private void zip(String zipFileName, File inputFile) throws Exception {   
        ZipOutputStream out = new ZipOutputStream(new FileOutputStream(zipFileName));    
        zip(out, inputFile, "");     
        System.out.println("zip done");     
        out.close();     
    }     
    
    private void zip(ZipOutputStream out, File f, String base) throws Exception {
        if (f.isDirectory()) {  //判断是否为目录     
            File[] fl = f.listFiles();     
//            out.putNextEntry(new org.apache.tools.zip.ZipEntry(base + "/"));     
            out.putNextEntry(new ZipEntry(base + "/"));     
            base = base.length() == 0 ? "" : base + "/";     
            for (int i = 0; i < fl.length; i++) {
                zip(out, fl[i], base + fl[i].getName());     
            }     
        } else {                //压缩目录中的所有文件     
//            out.putNextEntry(new org.apache.tools.zip.ZipEntry(base));
            out.putNextEntry(new ZipEntry(base));     
            FileInputStream in = new FileInputStream(f);     
            int b;     
            while ((b = in.read()) != -1) {     
                out.write(b);     
            }     
            in.close();     
        }     
    }     
    
    public static void main(String[] temp) {     
        String inputFileName = "D:\\accessFileUser";    //你要压缩的文件夹     
        String zipFileName = "D:\\123\\test.zip";  //压缩后的zip文件     
    
        FileUtil book = new FileUtil();     
        try {     
            book.zip(inputFileName, zipFileName); 
            
        } catch (Exception ex) {     
            ex.printStackTrace();     
        }     
    }    
    
    public static void fileDownload(HttpServletResponse response,String path,String filename){  
        //获取网站部署路径(通过ServletContext对象)，用于确定下载文件位置，从而实现下载  
        //1.设置文件ContentType类型，这样设置，会自动判断下载文件类型  
        response.setContentType("multipart/form-data");  
        //2.设置文件头：最后一个参数是设置下载文件名
        try {
		 filename=new String(filename.getBytes("utf-8"),"ISO8859-1");
		} catch (UnsupportedEncodingException e1) {
			e1.printStackTrace();
		}
        response.setHeader("Content-Disposition", "attachment;fileName="+filename);  
        ServletOutputStream out;  
        //通过文件路径获得File对象 
        File file = new File(path);  
  
        try {  
            FileInputStream inputStream = new FileInputStream(file);  
  
            //3.通过response获取ServletOutputStream对象(out)  
            out = response.getOutputStream();  
  
            int b = 0;  
            while ((b = inputStream.read()) != -1){  
                //4.写到输出流(out)中  
                out.write(b);  
            }  
            inputStream.close();  
            out.close();  
            out.flush();  
  
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
    }  

}
