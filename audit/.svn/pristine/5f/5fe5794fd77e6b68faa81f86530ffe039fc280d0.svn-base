package audit.util;
import java.util.regex.Matcher;  
import java.util.regex.Pattern;  
public class StringFilterTest {
	public static void main(String[] args) {
		String str="行政管理专业－本科专业质量报告.docx";
//		  String str = "(新闻)*?%%*(*.中国}34《》{45[ddd]12.fd'*&999<中国新闻>下面\\是  中/文  的//字符￥……{}【】。-_--，；’“‘”？";  
	        System.out.println("原字符串  = "+str);  
	        System.out.println("匹配后的字符串 = "+StringFilter(str));  
	}
	  public static String StringFilter(String str){  
		  //-_--
	        String regEx = "[`~!@#$%^&*()+=|{}': ;',--\\[\\]_.－<>/?~！@#￥%……&*（）\"\"《》\\\\——+|{}【】‘；：”“’。，、？]";  
	        Pattern p = Pattern.compile(regEx);  
	        Matcher m = p.matcher(str);  
	        return m.replaceAll("").trim();  
	    }  
	  
	  
	 
}
