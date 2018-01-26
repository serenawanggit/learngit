package audit.util;

import java.util.regex.Pattern;

public class isValidSQL {

	
	  
	static String reg = "(?:')|(?:--)|(/\\*(?:.|[\\n\\r])*?\\*/)|"  
	            + "(\\b(select|update|and|or |or=|delete|insert|trancate|char |into|substr|ascii|declare|exec|count|master|drop|execute)\\b)";  
	  
	static Pattern sqlPattern = Pattern.compile(reg, Pattern.CASE_INSENSITIVE);  
	  
	/*************************************************************************** 
	 * 参数校验 
	 *  
	 * @param str 
	 */  
	public static boolean isValid(String str) {  
	    if (sqlPattern.matcher(str).find()) {  
	        return false;  
	    }  
	    return true;  
	}  
}
