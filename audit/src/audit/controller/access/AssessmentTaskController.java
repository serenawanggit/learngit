package audit.controller.access;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.alibaba.fastjson.JSONObject;
import audit.model.Userinfo;
import audit.model.assess.vo.AssessmentTaskVo;
import audit.service.UserinfoServiceI;
import audit.service.access.AssessmentTaskVoServices;
import audit.util.CookieUtil;
/**
 * 查看网评任务
 * @author yuan
 *
 */
@Controller
@RequestMapping("assessmentTask")
public class AssessmentTaskController {
	@Autowired
	private AssessmentTaskVoServices assessmentTaskVoServices;
	@Autowired
	private UserinfoServiceI  userinfoServiceI;
	
	@RequestMapping("showAssessmentTask")
	public String showAssessmentTask(HttpServletRequest request,HttpServletResponse response){
		Integer syear=Integer.parseInt(request.getParameter("syear"));
		Integer userId =null;
		String userName = "";
		Integer status=2;//此状态为网评专用
		try {
			userId =Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
			System.out.println("用户id："+userId);
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		List<Map<String, Object>> lists= assessmentTaskVoServices.findOnLineUserStatus(userId,status);
	    Object operateType=lists.get(0).get("operate_type");
	    //operateType等于1表示可以操作网评 2为只能查看
	    List<AssessmentTaskVo> assessmentTaskVos=null;
	    Integer userType=Integer.parseInt( lists.get(0).get("user_type").toString());
	    if (userType==2) {
	    	assessmentTaskVos=assessmentTaskVoServices.findAssessmentTaskByuserId(userId,syear);
		}else  if (userType==6 ||userType==7) {
			assessmentTaskVos=assessmentTaskVoServices.findAllAssessmentTask(syear);
		}else if (userType==8) {
		    Userinfo userinfo=	userinfoServiceI.findOrganizationIdByUserId(userId);
			assessmentTaskVos=assessmentTaskVoServices.findAcademyAssessmentTask(userinfo.getOrganization());
		}
	    
	    JSONObject jsonObject=new JSONObject();
	    jsonObject.put("assessment", assessmentTaskVos);
	    jsonObject.put("operateType", operateType);
	    try {
	    	response.setCharacterEncoding("utf-8");
			response.getWriter().write(jsonObject.toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
	    return null;
	}

}
