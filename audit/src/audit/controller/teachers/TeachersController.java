package audit.controller.teachers;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sun.xml.rpc.processor.modeler.j2ee.xml.string;

import audit.service.TeachersServices;
import audit.util.CookieUtil;

@Controller
@RequestMapping("teachersController")
public class TeachersController {
	
	@Autowired
	private TeachersServices teacherServices;
	
	@RequestMapping("/selectTeacher")
	@ResponseBody
	public List<Map<String, Object>> selectTeacher(@RequestParam Map<String, String> map,HttpServletRequest request){
		List<Map<String, Object>> list=new ArrayList<Map<String,Object>>();
		String uid="";
		try {
			 uid=CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Map<String, String> map1=new HashMap<String, String>();
		map1.put("uid","349");
		list=teacherServices.selectTeacher(map1);
		return list;
	}
}
