package audit.util;

import com.jacob.activeX.ActiveXComponent;
import com.jacob.com.Dispatch;
import com.jacob.com.Variant;

public class JacobUtil {
    public static final int WORD_TXT = 7;  
    public static final int EXCEL_HTML = 44;  
	 public static final int WORD_HTML = 8;   
	  
	    public static void main(String[] args) {  
//	        String docfile = "D:\\assessFileUser\\gongke.doc";  
//	        String htmlfile = "D:\\assessFileUser\\gongke.html"; 
//	    	FileUtils.writeStringToFile(file, data, append);
	        try {
				JacobUtil.wordToHtml("E:/assessFileUser/解析不了的乱码文件.doc","E:\\assessFileUser\\old123jjj6.html");
			//	JacobUtil.htmlToWord("", "D:\\assessFileUser\\xx.doc");
			} catch (Exception e) {
				e.printStackTrace();
			}  
	    }  
	    /**   
	     * WORD转HTML   
	     * @param docfile WORD文件全路径   
	     * @param htmlfile 转换后HTML存放路径   
	     */    
	    public static Boolean wordToHtml(String docfile, String htmlfile)  {     
	    	boolean falg= true;
	    	// 启动word  
	    	System.out.println("开始解析。。。");
	        ActiveXComponent app = new ActiveXComponent("Word.Application");    
	        
	        try{ //设置word不可见  
	            app.setProperty("Visible", new Variant(false));   
	          Dispatch docs= app.getProperty("Documents").toDispatch();     
	          //打开word文件  
	            Dispatch doc = Dispatch.invoke(     
	                    docs,     
	                    "Open",     
	                    Dispatch.Method,     
	                    new Object[] { docfile, new Variant(false),     
	                            new Variant(true) }, new int[1]).toDispatch();     
	          //作为html格式保存到临时文件  
	            Dispatch.invoke(doc, "SaveAs", Dispatch.Method, new Object[] {     
	                    htmlfile, new Variant(WORD_HTML) }, new int[1]);     
	          Variant f = new Variant(false);     
	          Dispatch.call(doc, "Close", f);     
	        }     
	        catch (Exception e)     
	        {     
	        	falg=false;
	            e.printStackTrace();     
	        }     
	        finally    
	        {     
	        	 //关闭word应用程序 
	          app.invoke("Quit", new Variant[] {});  
	        }    
	        System.out.println("结束解析。。。");
			return falg;
	    }  
	   /**   
	     * EXCEL转HTML   
	     * @param xlsfile EXCEL文件全路径   
	     * @param htmlfile 转换后HTML存放路径   
	     */    
	    public static void excelToHtml(String xlsfile, String htmlfile)     
	    {     
	    	System.out.println("开始解析excel");
	    	
	        // 启动excel  
	        ActiveXComponent app = new ActiveXComponent("Excel.Application");      
	        try    
	        {     
	            //设置excel不可见  
	           app.setProperty("Visible", new Variant(false));     
	          Dispatch excels = app.getProperty("Workbooks").toDispatch();    
	            //打开excel文件  
	            Dispatch excel = Dispatch.invoke(     
	                    excels,     
	                    "Open",     
	                    Dispatch.Method,     
	                    new Object[] { xlsfile, new Variant(false),     
	                            new Variant(true) }, new int[1]).toDispatch();     
	          //作为html格式保存到临时文件  
	            Dispatch.invoke(excel, "SaveAs", Dispatch.Method, new Object[] {     
	                    htmlfile, new Variant(EXCEL_HTML) }, new int[1]);     
	          Variant f = new Variant(false);     
	          Dispatch.call(excel, "Close", f);     
	        }     
	        catch (Exception e)     
	        {     
	            e.printStackTrace();     
	        }     
	        finally    
	        {     
	            app.invoke("Quit", new Variant[] {});     
	        }     
	        System.out.println("结束解析excel");
	    }     
	  
}
