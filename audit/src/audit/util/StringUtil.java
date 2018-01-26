package audit.util;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;

public class StringUtil {
	
	private final static Logger logger = Logger.getLogger(StringUtil.class);
	/**
	 * 字符串判空
	 * @param str
	 * @return boolean
	 */
	public static boolean stringisNull(String str){
		boolean flag = false;
		if(str!= null && str.length() > 0 && !str.trim().equals("")){
			flag = true;
		}else{
			flag = false;
		}
		return flag;
	}
	
	/**
	 * 是否是数字
	 * @param str
	 * @return
	 */
	public static boolean isNumeric(String str){ 
		if(str.equals("") || str.trim().equals("")){
			return false;
		}
		  for (int i = str.length();--i>=0;){    
			   if (!Character.isDigit(str.charAt(i))){ 
			    return false; 
			   } 
		  } 
		  return true; 
		 } 
	
	public static boolean isNumeric2(String str){
		if(str.equals("") || str.trim().equals("")){
			return false;
		}
		int index = str.lastIndexOf(".");
		if(index != -1){
			String str1 = str.substring(0,index);
			String str2 = str.substring(index+1,str.length());
			//isNumeric(str1);
			//isNumeric(str2);
			if(isNumeric(str1) && isNumeric(str2)){
				return true;
			}else{
				return false;
			}
		}else{
			//isNumeric(str);
			if(isNumeric(str)){
				return true;
			}else{
				return false;
			}
		}
		
	}
	
	public static String getString(String str){
		if(str.equals("")||str.equals("null") || str.trim().equals("") || str == null ){
			return "";
		}else{
			return str;
		}
		
	}
	
	public static boolean notIsNull(String str){
		if (str != null && !"".equals(str.trim()) && !"null".equals(str)) {
			return true;
		}
		return false;
	}
	
	//数组去重复字符串
	public static List<String> qcf(List<String> res){
		Set<String> set = new HashSet<String>();
		    if (res!=null && res.size()>1) {
		    	for(int i = 0; i < res.size(); i++) {
		    		set.add(res.get(i));
		    	}
		    	List<String> lis = new ArrayList<String>();
		    	for (String s : set) {
					lis.add(s);
				}
		    	return lis;
			}
		    return res;
	}
	
	//浮点数取整
	public static int DoubleToInt(String db){
		if (db != null && !"".equals(db) && db.indexOf(".")>0) {
			int xs = db.length()-db.lastIndexOf(".")-1;
			if (xs>0) {
				db = db.substring(0,db.lastIndexOf("."));
			}
		}
		return Integer.parseInt(db);
	}
	
	/**
	 * 用于实体类的toString方法
	 * @param object
	 * @return
	 */
	public static String objectToString(Object object){
		ObjectMapper objectMapper = new ObjectMapper();
		String json = null;
		try {
			json = objectMapper.writeValueAsString(object);
		} catch (Exception e) {
			logger.error("转JSON异常", e);
		}
		return json;
	}
	
	/**
	 * 替换html标签特殊字符
	 * @param str
	 * @return str
	 * @author yjq
	 */
	public static String replaceHtmlCh(String str){
		str = str.replace("&","&amp;");   
        str = str.replace("<","&lt;");   
        str = str.replace(">","&gt;");   
		return str;
	}
}
