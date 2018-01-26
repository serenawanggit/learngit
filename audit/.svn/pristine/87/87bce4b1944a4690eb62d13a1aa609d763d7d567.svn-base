package audit.controller.ods;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.ods.OdsTTeachTask;
import audit.service.ods.OdsTTeachServices;
import audit.service.ods.OdsTTeachStatusServices;
import audit.service.ods.OdsTTeachTaskServices;
import audit.util.CookieUtil;

@Controller
@RequestMapping("odsTTeachStatusController")
public class OdsTTeachStatusController {
    @Autowired
	private OdsTTeachServices odsTTeachServices;
	@Autowired
	private OdsTTeachTaskServices odsTTeachTaskServices;
    @Autowired
    private OdsTTeachStatusServices odsTTeachStatusServices;
	
    /**
     * 查看补录数据
     * @param request
     * @return
     */
	@RequestMapping("showOdsTTeachInfo")
	@ResponseBody
	public String showOdsTTeachInfo(HttpServletRequest request){
		Integer userId = null;
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		Integer pageNo=Integer.parseInt(request.getParameter("pageNo"));
		Integer pageSize=10;
		Integer pageEnd=0;
		Integer state=0;//这个是0表示需要补录的数据
		Integer pagestart=(pageNo-1)*pageSize+1;
		pageEnd=pageNo*pageSize;
		OdsTTeachTask odsTTeachTask=new OdsTTeachTask();
		 odsTTeachTask=odsTTeachTaskServices.selectByAddUserid(userId);
		ArrayList<Object> params1=new ArrayList<Object>();
		Integer syear=Integer.parseInt(odsTTeachTask.getSyear())+1;
		params1.add(odsTTeachTask.getAcademeId());
		params1.add(state);
		//根据年份学院code 查询总数
		ArrayList<HashMap<String, Object>> odstt =  odsTTeachServices.findOdsTTeach(params1,syear);
		//根据年份学院code 查询对应年份的专业
		ArrayList<Object> params2=new ArrayList<Object>();
		params2.add(odsTTeachTask.getAcademeId());
		ArrayList<HashMap<String, Object>> odsProfessionlists=odsTTeachServices.findOdsBProfessionByYearAndCode(params2, syear);
		HashMap<String, Object> boring= new HashMap<String, Object>();
		boring.put("profession_id","NoMajor");
		boring.put("profession_name","无分配专业");
		odsProfessionlists.add(boring);
		Integer count=odstt.size();
		Integer totalPage=0;
			if (count % pageSize == 0) {
				totalPage = count / pageSize;
			} else {
				totalPage = count / pageSize + 1;
			}
		ArrayList<HashMap<String, Object>>  odstteachlists=new ArrayList<HashMap<String,Object>>();
         if (odsTTeachTask!=null) {
     		ArrayList<Object> params=new ArrayList<Object>();
    		params.add(odsTTeachTask.getAcademeId());
    		params.add(state);
    		params.add(pagestart);
    		params.add(pageEnd);
    		odstteachlists =  odsTTeachServices.findOdsTTeachByfy(params,syear);
		 }
         JSONArray jsonArray=JSONArray.fromObject(odstteachlists);
         JSONArray js=JSONArray.fromObject(odsProfessionlists);
         JSONObject jsonObject=new JSONObject();
         jsonObject.accumulate("odstteachlists", jsonArray);
         jsonObject.accumulate("count", count);
         jsonObject.accumulate("totalPage", totalPage);
         jsonObject.accumulate("pageNo", pageNo);
         jsonObject.accumulate("odsProfessionlists", js);
		return jsonObject.toString();
	}
	/**
	 * 保存数据
	 * @param request
	 * @return
	 */
	@RequestMapping("saveOdsTTeachInfo")
	@ResponseBody
	public String saveOdsTTeachInfo(HttpServletRequest request){
		String str=request.getParameter("data");
		JSONArray  jsonArray=JSONArray.fromObject(str);
		  for (int i = 0; i < jsonArray.length(); i++) {
			  JSONObject object = jsonArray.getJSONObject(i);
			  String specailtyName=object.get("specailtyName").toString().trim();
			  if (specailtyName.equals("--请选择--")) {
				  specailtyName="";
			  }
			  String specailtyId=object.get("specailtyId").toString().trim();
			  if (specailtyId.equals("0")) {
				  specailtyId="";
			  }
			  Integer id =Integer.parseInt(object.get("id").toString().trim());
			  odsTTeachStatusServices.updateOdsTTeachById(specailtyName, specailtyId,id);
		  }
		return null;
	 }
	/**
	 * 提交数据
	 * @param request
	 * @return
	 */
	@RequestMapping("submitOdsTTeachInfo")
	@ResponseBody
	public String submitOdsTTeachInfo(HttpServletRequest request){
		Integer userId = null;
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		OdsTTeachTask odsTTeachTask=odsTTeachTaskServices.selectByAddUserid(userId);
		ArrayList<Object> params1=new ArrayList<Object>();
		Integer syear=Integer.parseInt(odsTTeachTask.getSyear())+1;
		params1.add(odsTTeachTask.getAcademeId());
		params1.add(0);
        //根据年份学院code 查询对应年份的专业
		ArrayList<HashMap<String, Object>> odsProfessionlists=odsTTeachServices.findOdsTTeach(params1, syear);
		for (int i = 0; i < odsProfessionlists.size(); i++) {
			 odsTTeachStatusServices.updateOdsTTeachByTeacherId(odsProfessionlists.get(i).get("teacher_num").toString());
		}
		return null;
	}
	
	@SuppressWarnings("unused")
	@RequestMapping("showCheckOdsTTeachInfo")
	@ResponseBody
	public String showCheckOdsTTeachInfo(HttpServletRequest request){
		Integer userId = null;
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		Integer pageNo=Integer.parseInt(request.getParameter("pageNo"));
		Integer pageSize=10;
		Integer pageEnd=0;
		Integer state=null;//根据下面的判断会给它不同的状态
		Integer passState=null;//不同角色通过后赋予不同的状态
		Integer pagestart=(pageNo-1)*pageSize+1;
		pageEnd=pageNo*pageSize;
		Integer count=null;
		ArrayList<HashMap<String, Object>>  odstteachlists=new ArrayList<HashMap<String,Object>>();
		OdsTTeachTask orgOdsTTeachTask=odsTTeachTaskServices.findByOrgCheckUserId(userId);
		if (orgOdsTTeachTask!=null) {
			String code=	orgOdsTTeachTask.getAcademeId();
			Integer syear=Integer.parseInt(orgOdsTTeachTask.getSyear())+1;
		    state=1;//此时为已提交状态
		    ArrayList<Object> params1=new ArrayList<Object>();
		    params1.add(code);
			params1.add(state);
			//根据年份学院code 查询总数
			ArrayList<HashMap<String, Object>> odstt =  odsTTeachServices.findOdsTTeach(params1,syear);
			count=odstt.size();
			ArrayList<Object> params=new ArrayList<Object>();
			params.add(code);
	   		params.add(state);
	   		params.add(pagestart);
	   		params.add(pageEnd);
	   		odstteachlists = odsTTeachServices.findOdsTTeachByfy(params,syear);
	   		passState=2;//此时为院级审核通过状态
		}else {
			OdsTTeachTask orgTTeachTask= odsTTeachTaskServices.findByColCheckUserId(userId);
			Integer syear=Integer.parseInt(orgTTeachTask.getSyear())+1;
			state=2;//此时为院级审核通过状态
			passState=3;//此时为校级审核通过状态
			ArrayList<Object> params1=new ArrayList<Object>();
			params1.add(state);
			params1.add(passState);
			ArrayList<HashMap<String, Object>> odstt=	odsTTeachServices.findOdsTTeachCount(params1,syear);
			count=Integer.parseInt(odstt.get(0).get("num").toString());
			ArrayList<Object> params2=new ArrayList<Object>();
			params2.add(state);
			params2.add(passState);
			params2.add(pagestart);
			params2.add(pageEnd);
			odstteachlists=odsTTeachServices.findOdsTTeachByStateTwoToThree(params2, syear);
		}
		Integer totalPage=0;
		if (count % pageSize == 0) {
			totalPage = count / pageSize;
		} else {
			totalPage = count / pageSize + 1;
		}
		 JSONArray jsonArray=JSONArray.fromObject(odstteachlists);
         JSONObject jsonObject=new JSONObject();
         jsonObject.accumulate("odstteachlists", jsonArray);
         jsonObject.accumulate("count", count);
         jsonObject.accumulate("totalPage", totalPage);
         jsonObject.accumulate("pageNo", pageNo);
         jsonObject.accumulate("passState", passState);
		return jsonObject.toString();
	}
	/**
	 * 根据登录人 确定审核通过
	 * @param request
	 * @return
	 */
	@RequestMapping("approvedBy")
	@ResponseBody
	public String approvedBy(HttpServletRequest request){
		Integer passState=Integer.parseInt(request.getParameter("passState"));
		String teacherinfo=request.getParameter("teacher");
		JSONArray  jsonArray=JSONArray.fromObject(teacherinfo);
		for (int i = 0; i < jsonArray.length(); i++) {
			  JSONObject object = jsonArray.getJSONObject(i);
			   String id=object.get("id").toString();
			   odsTTeachStatusServices.updateTeachByTIdForExamine(passState,id);
		}
		return null;
	}
	/**
	 * 审核未通过
	 * @param request
	 * @return
	 */
	@RequestMapping("notPass")
	@ResponseBody
	public String notPass(HttpServletRequest request){
		String teacherinfo=request.getParameter("teacher");
		JSONArray  jsonArray=JSONArray.fromObject(teacherinfo);
		for (int i = 0; i < jsonArray.length(); i++) {
			  JSONObject object = jsonArray.getJSONObject(i);
			   String id=object.get("id").toString();
			   odsTTeachStatusServices.updateNoPass(id);
		}
		return null;
	}
}
