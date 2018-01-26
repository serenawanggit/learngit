package audit.util;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.hwpf.extractor.WordExtractor;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

public class Word2Text {
	/***
	 * 依赖jar包：
	 * poi-3.11-20141221.jar
	 * poi-scratchpad-3.11-20141221.jar
	 */
		public static void main(String args[]) {
			String context = null;
			context = readDoc("E:\\桌面\\WordDemo\\document\\魔兽争霸中所有单位的英文名大全.doc");
//			context = readDoc("E:\\kanba\\develepDocument\\Legion\\军团TD的介绍.doc");
			//System.out.println(context);
			
			
//			context = "NewFile";
//			context+="\n"+
//					"1234"+"\r\n"+
//					"abcdef";
			System.out.println(context);
//			writeDoc("document\\myWritedFile.doc",context);
		}

		/**
		 * 读取Word文件
		 */
		public static String  readDoc(String doc) {
			FileInputStream in = null;
			WordExtractor extractor = null;
			String text = null;
			try {
				// 创建输入流读取DOC文件
				in = new FileInputStream(new File(doc));
				// 创建WordExtractor
				extractor = new WordExtractor(in);
				// 对DOC文件进行提取
				//text = extractor.extractText(in);
				text = extractor.getTextFromPieces();
				// text = extractor.getText();
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				/*if (extractor != null) try {extractor.close();} catch (Exception e) {e.printStackTrace();}
				if (in != null) try {in.close();} catch (Exception e) {e.printStackTrace();}*/
			}
			return text;
		}

		 /**
		  * 将内容写成一个doc文件，保存在磁盘上。
		  */
		public static boolean writeDoc(String path, String content) { 
			ByteArrayInputStream bais = null;
			FileOutputStream ostream = null;
			boolean w = false; 
			try {
				content+="\r\n";
				//byte b[] = content.getBytes("ISO-8859-1");
				//byte b[] = content.getBytes("gbk");
				//byte b[] = content.getBytes("GB2312");
				//byte b[] = content.getBytes("UTF-8");
				byte b[] = content.getBytes();

				bais = new ByteArrayInputStream(b);
				POIFSFileSystem fs = new POIFSFileSystem(); 
				fs.getRoot().createDocument("WordDocument", bais);

				ostream = new FileOutputStream(path);

				fs.writeFilesystem(ostream);
			} catch (IOException e) { 
				e.printStackTrace(); 
			} finally {
				if(bais!=null) try {bais.close(); } catch(Exception e) {e.printStackTrace();} 
				if(ostream!=null) try {ostream.close(); } catch(Exception e) {e.printStackTrace();} 
			}
			
			return w; 
		}
}
