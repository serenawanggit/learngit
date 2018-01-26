package audit.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.sun.xml.rpc.processor.modeler.j2ee.xml.string;

import audit.model.AsCjBmyBmry;
import audit.model.AsCjShxx;
import audit.model.CjJsUser;
import audit.service.AsCjBmyBmryServiceI;
import audit.service.AsCjShxxVoServices;
import audit.util.CjDbUtil;
import audit.util.DBConnection;

@Controller("asBmyBmryController")
public class AsBmyBmryController {

	private AsCjBmyBmryServiceI asBmryService;
	@Autowired
	public void setAsCjBmyBmryService(AsCjBmyBmryServiceI asBmryService){
		this.asBmryService = asBmryService;
	}
	
	@Autowired
	public AsCjShxxVoServices asCjShxxVoServices;
	
	@RequestMapping(value="/asBmyBmryController/saveAsBmyBmry",method = RequestMethod.POST)
	@ResponseBody
	public String saveAsBmyBmry(HttpServletRequest request){
		String cjbmdm = request.getParameter("cjbmdm");
		String cjrstr = request.getParameter("cjrstr");
		String shrstr = request.getParameter("shrstr");
		String message = "";
		List<String> list = new ArrayList<String>();
		if(cjrstr.length() != 0){
			for(int i = 0; i < cjrstr.split(";").length;i++){
				list.add(cjrstr.split(";")[i]);
			}
		}
		
		if(shrstr.length() != 0){
			for(int j = 0; j < shrstr.split(";").length;j++){
				list.add(shrstr.split(";")[j]);
			}
		}
		if(list != null && list.size() != 0){
			for(int i = 0; i < list.size(); i++){
				List<AsCjBmyBmry> asCjBmyBmries=asBmryService.findByuserIdAndZt(Integer.parseInt(list.get(i).split("-")[0]), Integer.parseInt(list.get(i).split("-")[1]));
				if (asCjBmyBmries.size()>0) {
					message="选中的人员已存在！";
				}else {
					AsCjBmyBmry acbb  = new AsCjBmyBmry();
					acbb.setCjbmdm(Integer.parseInt(cjbmdm));
					acbb.setUserid(Integer.parseInt(list.get(i).split("-")[0]));
					acbb.setBmryjs(Integer.parseInt(list.get(i).split("-")[1]));
					try{
						asBmryService.insertAsCjBmyBmry(acbb);
						message = "ok";
					}catch (Exception e) {
						message = "error";
						e.printStackTrace();
					}
				}
			}
			
		}
		return message;
	}
	
	
	@RequestMapping(value="/asBmyBmryController/selectJsUsers",method=RequestMethod.POST)
	@ResponseBody
	public String selectJsUsers(HttpServletRequest request){
		String cjbm=request.getParameter("cjbm").trim();
	    Integer	pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
	    Integer count= asCjShxxVoServices.findByuserId(cjbm).size();
	    Integer pageSize=10;
	    Integer totalPage=0;
	    Integer pageEnd=0;
	   //共有多少页
		if (count % pageSize == 0) {
			totalPage = count / pageSize;
		} else {
			totalPage = count / pageSize + 1;
		}
	    Integer pagestart=(pageNo-1)*pageSize+1;
		pageEnd=pageNo*pageSize;
		List<AsCjShxx> asCjShxxs=asCjShxxVoServices.selectByuserId(cjbm,pagestart,pageEnd);
		//List<CjJsUser> cjUsers = CjDbUtil.selectCjBmUser();
		//System.out.println("里面有呵呵："+asCjShxxs.size());
		 JSONObject jsonObject=new JSONObject();
		 jsonObject.put("asCjShxxs", asCjShxxs);
		 jsonObject.put("pageNo", pageNo);
		 jsonObject.put("totalPage", totalPage);
//		JSONArray jsons = new JSONArray();
//		 JSONObject fy = new JSONObject();
//		 fy.put("pageNo", pageNo);
//		 fy.put("totalPage", totalPage);
//		for(AsCjShxx cju : asCjShxxs){
//			 JSONObject o = new JSONObject();
//			 o.put("cju", cju);
//			 jsons.add(o);
//		}
//		jsons.add(fy);
		return jsonObject.toString();
	}
	
	@RequestMapping(value="/asBmyBmryController/deleteJsUsers",method=RequestMethod.GET)
	@ResponseBody
	public int deleteJsUsers(HttpServletRequest request){
		//System.out.println("你来了");
		String id = request.getParameter("id");
		String sql = "delete from AS_CJ_CJBMYBMRY where id =?";
		//System.out.println(sql);
		//int count = CjDbUtil.deleteObject(sql);
		String[] ids= new String[1];
		ids[0]=id;
		int count = CjDbUtil.deleteObject(sql,ids);
		return count;
	}
	
	@RequestMapping(value="/asBmyBmryController/deleteSomeUsers",method=RequestMethod.POST)
	@ResponseBody
	public String deleteSomeUsers(HttpServletRequest request){
		String id=request.getParameter("id");
		String[] ids=id.split("\\$");
		String sql="";
		for (int i = 0; i < ids.length; i++) {
			sql+="delete from AS_CJ_CJBMYBMRY where id = ?;";
		}
		int count = CjDbUtil.deleteObject(sql,ids);
		return null;
	}
	
}
