package audit.util;

/**
 * 解析需要 一个插件  pdf2htmlEX
 * @author Administrator
 *
 */

public class Pdf2htmlEXUtil {
	public static boolean pdf2html(String command,String pdfFile,String htmlName){
		Runtime rt = Runtime.getRuntime();
		System.out.println(command+" "+pdfFile+" "+htmlName);
		try {
			Process p = rt.exec(command+" "+pdfFile+" "+htmlName);
			StreamGobbler errorGobbler = new StreamGobbler(p.getErrorStream(), "ERROR");              
		      // kick off stderr  
		    errorGobbler.start();  
		    StreamGobbler outGobbler = new StreamGobbler(p.getInputStream(), "STDOUT");  
		      // kick off stdout  
		    outGobbler.start(); 
			int w = p.waitFor();
			System.out.println(w);
			int v = p.exitValue();
			System.out.println(v);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public static void main(String[] args) {
		pdf2html("D:\\pdf2htmlEX\\pdf2htmlEX\\pdf2htmlEX.exe","D:\\pdf2htmlEX\\pdf2htmlEX\\test\\test_data\\1-page.pdf","77.html");
	}
}
