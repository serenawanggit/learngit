package audit.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import org.apache.log4j.Logger;

public class ErrorInputStreamWathThread extends Thread {
	 private Process process = null;  
	    private boolean over = false;  
	    private Logger logger = Logger.getLogger(getClass());  
	  
	    public ErrorInputStreamWathThread(Process p) {  
	        process = p;  
	        over = false;  
	    }  
	  
	    public void run() {  
	        try {  
	            if (process == null) {  
	                System.out.println("process为null，无法处理文件转换");  
	                return;  
	            }  
	  
	  
	            //对出错流的处理  
	            BufferedReader br = new BufferedReader(new InputStreamReader(process.getErrorStream()));  
	              
	            while (true) {  
	                if (process == null || over) {  
	                    System.out.println("处理完成");  
	                    break;  
	                }  
	                String temp;  
	                while ((temp = br.readLine()) != null) {  
//	                  System.out.println("出错流信息:" + temp);  
	                    ;  
	                }  
	            }  
	        } catch (Exception e) {  
	            e.printStackTrace();  
	            System.out.println("发生异常" + e.getMessage());  
	        }  
	    }  
	  
	    public void setOver(boolean over) {  
	        this.over = over;  
	    }  
}
