package audit.controller;

import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import audit.model.ViewPic;
import audit.service.ViewPicI;

import com.alibaba.fastjson.JSONObject;


@Controller
@Scope("prototype")  
@RequestMapping("/garphController") 
public class GraphController
{
	private int pageNo;          //当前页码  
	private int pageNum = 10;   //每页行数  
	private int count;      	 //总记录数  
	private int totalPage;       //总页数  
	
	private ViewPicI viewPicService;
	@Autowired
	public void setViewPicService(ViewPicI viewPicService){
		this.viewPicService = viewPicService;
	}
	

	//查询---------------------------------------------------------
	@RequestMapping(value="/findPIC",method = RequestMethod.POST)
	@ResponseBody
	public String findPIC(HttpServletRequest request){
		
		String pic_name = request.getParameter("pic_name");
		pic_name = (pic_name==null?"":pic_name);
		//当前页码  
		pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
		//总记录数  
		count = viewPicService.findCount(pic_name);
		//共有多少页
		if (count % pageNum == 0) {
			totalPage = count / pageNum;
		} else {
			totalPage = count / pageNum + 1;
		}
		int pageStar = (pageNo-1)*pageNum;
		List<ViewPic> vps = viewPicService.findPageVp(pic_name, pageStar);
		JSONObject o = new JSONObject();
		o.put("count",count);
		o.put("totalPage",totalPage);
		o.put("pageNo",pageNo);
		o.put("vps",vps);
		return o.toJSONString();
	}
	
}
