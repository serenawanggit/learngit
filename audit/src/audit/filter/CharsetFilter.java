package audit.filter;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Enumeration;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import audit.model.Userinfo;
import audit.service.UserinfoServiceI;
import audit.util.CookieUtil;
import audit.util.isValidSQL;

public class CharsetFilter extends OncePerRequestFilter{
	
    protected FilterConfig filterConfig = null;
	@Override
	protected void doFilterInternal(HttpServletRequest arg0,
			HttpServletResponse arg1, FilterChain arg2)
			throws ServletException, IOException {
		arg0.setCharacterEncoding("UTF-8");
		arg1.setContentType("text/html;charset=UTF-8");
		arg1.setCharacterEncoding("UTF-8");
		//isValidSQL.isValid(str);
		boolean flag=true;
		String userId = "";
		
		// 从 HTTP 头中取得 Referer 值
		String referer=arg0.getHeader("Referer"); 
		// 判断 Referer 是否以 bank.example 开头
		if((referer==null || referer.trim().indexOf("audit")>0) || referer.trim().indexOf("CHART")>0 || referer.trim().indexOf("datareport")>0 || referer.trim().indexOf("TQCC")>0|| referer.trim().indexOf("tqc")>0 || referer.trim().indexOf("TQCSERVER")>0){ 
			//arg2.doFilter(arg0, arg1); 
		}else{ 
			//arg0.getRequestDispatcher("500.jsp").forward(arg0, arg1); 
			 flag=false;
		}
		
		try {
			userId = CookieUtil.getValueByCookie(arg0, "uvocookie", "id");
			if (userId==null) {
				flag=false;
			}else {
				WebApplicationContext webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(arg0.getSession().getServletContext()); 
				UserinfoServiceI userservice=(UserinfoServiceI) webApplicationContext.getBean("UserinfoService");
			    Userinfo userinfo=	userservice.findOrganizationIdByUserId(Integer.parseInt(userId));
				if(userinfo==null){
					flag=false;
				}
			}
		} catch (UnsupportedEncodingException e) {
		}
	    String qurystr = arg0.getQueryString()==null?"": arg0.getQueryString();  
	    if (!qurystr.equals("")) {  
	            try {  
	            qurystr = java.net.URLDecoder.decode(qurystr);  
		            if (isValidSQL.isValid(qurystr)) {
					}else {
						flag=false;
					}
	            } catch (Exception e1) {  
	            }  
	    }  
		Enumeration enu=arg0.getParameterNames();  
		
		while(enu.hasMoreElements()){  
		    String paraName=(String)enu.nextElement();  
			if (isValidSQL.isValid(arg0.getParameter(paraName))){
				
			}else {
				flag=false;
				break;
			}
		}
		if (flag) {
			arg2.doFilter(arg0, arg1);  
		}else {
		//	arg0.getRequestDispatcher("/audit/500.jsp").forward(arg0, arg1); 
			arg1.sendRedirect("/audit/500.jsp");
		}
	}
	

}
