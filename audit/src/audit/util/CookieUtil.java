package audit.util;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CookieUtil {

	/**
	 * 设置cookie
	 * @param response
	 * @param name  cookie名字
	 * @param value cookie值
	 * @param maxAge cookie生命周期  以秒为单位
	 */
	public static void addCookie(HttpServletRequest request,HttpServletResponse response,String name,String value){
		Cookie cookie = new Cookie(name,value);
	    cookie.setPath("/");
	    int maxAge = 10*24*60*60;//10天有效期
	    cookie.setMaxAge(maxAge);
	    response.addCookie(cookie);
	}
	
	
	/**
	 * 根据名字获取cookie
	 * @param request
	 * @param name cookie名字
	 * @return
	 */
	public static Cookie getCookieByName(HttpServletRequest request,String name){
	    Map<String,Cookie> cookieMap = ReadCookieMap(request);
	    if(cookieMap.containsKey(name)){
	        Cookie cookie = (Cookie)cookieMap.get(name);
	        return cookie;
	    }else{
	        return null;
	    }   
	}
	
	public static String getValueByCookie(HttpServletRequest request,String name,String value) throws UnsupportedEncodingException{
		Cookie[] cookies = request.getCookies();
		Map<String,String> map = new HashMap<String, String>();
		if(cookies != null){
			for(Cookie cookie : cookies){
				if(cookie.getName().equals(name)){
					String [] array = cookie.getValue().toString().replace("\"", "").split("&");
					map.put("id", array[0]);
					map.put("name", URLEncoder.encode(array[1], "utf-8"));
					map.put("password", URLEncoder.encode(array[2], "utf-8"));
					map.put("number", URLEncoder.encode(array[3], "utf-8"));
					map.put("sex", URLEncoder.encode(array[4], "utf-8"));
					map.put("showName", URLEncoder.encode(array[5], "utf-8"));
					map.put("organization", URLEncoder.encode(array[6], "utf-8"));
					map.put("role", URLEncoder.encode(array[7], "utf-8"));
					map.put("specialty", URLEncoder.encode(array[8], "utf-8"));
					map.put("xuek", URLEncoder.encode(array[9], "utf-8"));
					map.put("statu", URLEncoder.encode(array[10], "utf-8"));
				}
	        }
		}
		
		return map.get(value);
	}
	
	/**
	 * 将cookie封装到Map里面
	 * @param request
	 * @return
	 */
	private static Map<String,Cookie> ReadCookieMap(HttpServletRequest request){  
	    Map<String,Cookie> cookieMap = new HashMap<String,Cookie>();
	    Cookie[] cookies = request.getCookies();
	    if(null!=cookies){
	        for(Cookie cookie : cookies){
	            cookieMap.put(cookie.getName(), cookie);
	        }
	    }
	    return cookieMap;
	}
	
	
}


