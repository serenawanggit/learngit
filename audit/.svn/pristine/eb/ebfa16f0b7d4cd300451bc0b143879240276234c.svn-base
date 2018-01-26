package audit.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.DwVLeadership;
import audit.service.DwVLeadershipI;

@Controller
public class DwVLeadershipController {

	private DwVLeadershipI dwvleadershipService;
	@Autowired
	public void setDwVLeadershipService(DwVLeadershipI dwvleadershipService){
		this.dwvleadershipService = dwvleadershipService;
	}
	
	@RequestMapping(value="/dwVleadership/showDwvleaderships",method=RequestMethod.POST)
	@ResponseBody
	public String showDwvleaderships(HttpServletRequest request){
		String currentpage = request.getParameter("currentpage");
		int cp = Integer.parseInt(currentpage);
		String zbname = request.getParameter("zbname");
	    String department = request.getParameter("department");
	    String profession = request.getParameter("profession");
	    String syear = request.getParameter("syear");
		cp--;
		String sql = "";
			   sql += "SELECT TOP 10 * FROM ( SELECT ROW_NUMBER() OVER (ORDER BY ID) ";
			   sql += "AS RowNumber,* FROM DW_V_LEADERSHIP WHERE 1=1" ;
		if(!zbname.equals("")){
		    	   sql += " AND ZB LIKE '%" + zbname + "%'";
		}
		if(!department.equals("")){
		   	   sql += " AND DEPARTMENT LIKE '%" + department + "%'";
		}
		if(!profession.equals("")){
		   	   sql += " AND PROFESSION LIKE '%" + profession + "%'";
		}
		if(!syear.equals("")){
		   	   sql += " AND SYEAR LIKE '%" + syear + "%'";
		}
			   sql += ") A WHERE RowNumber > ";
			   sql += 10 * cp;
	    
	   
	    System.out.println(sql);
	    List<DwVLeadership> dwVleaderships = dwvleadershipService.selectAllDwVLeaderships(sql);
		return JSONArray.fromObject(dwVleaderships).toString();
	}
	
	@RequestMapping(value="/dwVleadership/showCountDwvleaderships",method=RequestMethod.POST)
	@ResponseBody
	public int showCountDwvleaderships(HttpServletRequest request){
		String zbname = request.getParameter("zbname");
	    String department = request.getParameter("department");
	    String profession = request.getParameter("profession");
	    String syear = request.getParameter("syear");
	    String sql = "select count(*) from dw_v_leadership where 1 = 1";
	    if(!zbname.equals("")){
	    	   sql += " AND ZB LIKE '%" + zbname + "%'";
	    }
	    if(!department.equals("")){
	    	   sql += " AND DEPARTMENT LIKE '%" + department + "%'";
	    }
	    if(!profession.equals("")){
	    	   sql += " AND PROFESSION LIKE '%" + profession + "%'";
	    }
	    if(!syear.equals("")){
	    	   sql += " AND SYEAR LIKE '%" + syear + "%'";
	    }
		int count = dwvleadershipService.selectCountDwVLeaderships(sql);
		return count;
	}
	
	
}
