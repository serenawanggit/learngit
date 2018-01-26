package audit.util.lzr;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

/**
 * 
 * @author Administrator
 * 初始化前台参数 
 */
public class LzrInitParma {
	/**
	 * 
	 * 把前台参数封装成map集合  
	 * @param request
	 * @param parmas
	 * @return
	 */
	public static Map<Object, Object> getMap(HttpServletRequest request,String... parmas){
		Map<Object, Object> map=new HashMap<Object, Object>();
		if(parmas!=null){
			for (int i = 0; i < parmas.length; i++) {
				String value = request.getParameter(parmas[i]);
				map.put(parmas[i], value);
			}
		}
		return map;
	}
}
