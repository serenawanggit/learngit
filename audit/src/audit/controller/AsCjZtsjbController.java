package audit.controller;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;


import org.apache.poi.xssf.eventusermodel.examples.FromHowTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsCjZtsjbxx;
import audit.service.CjZtsjServiceI;
import audit.util.CookieUtil;

import com.alibaba.fastjson.JSONObject;
@Controller("asCjZtsjbController")
public class AsCjZtsjbController {

	private int pageNo;          //当前页码  
	private int pageNum = 10;   //每页行数  
	private int count;      	 //总记录数  
	private int totalPage;       //总页数    
	
	
	private CjZtsjServiceI cjZtsjService;
	
	@Autowired
	public void setCjZtsjService(CjZtsjServiceI cjZtsjService){
		this.cjZtsjService = cjZtsjService;
	}
	
	
	//保存状态库数据表
	@RequestMapping(value="/asCjZtsjbController/saveAsCjZtsjb",method = RequestMethod.POST)
	@ResponseBody
	public int saveAsCjZtsjb(HttpServletRequest request){
		int count = 0;
		String sjbmc = request.getParameter("sjbmc");
		String cjbmdm = request.getParameter("cjbmdm");
		String shbmdm = request.getParameter("shbmdm");
		//System.out.println("shbmdm:"+shbmdm);
		String cjmbdm = request.getParameter("cjmbdm");
		String syfwdm = request.getParameter("syfwdm");
		String userId = "";
		String userName = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		AsCjZtsjbxx  aczj = new AsCjZtsjbxx();
		aczj.setSjbmc(sjbmc);
		aczj.setCjbmdm(Integer.parseInt(cjbmdm));
		aczj.setShbmdm(Integer.parseInt(shbmdm));
		aczj.setCjmbdm(Integer.parseInt(cjmbdm));
		aczj.setSyfwdm(Integer.parseInt(syfwdm));
		aczj.setCjsj(new Date());
		aczj.setUserid(Integer.parseInt(userId));
		count = cjZtsjService.save(aczj);
		return count;
	}
	
	
	//删除状态库数据表
	@RequestMapping(value="/asCjZtsjbController/deleteAsCjZtsjb",method = RequestMethod.POST)
	@ResponseBody
	public int deleteAsCjZtsjb(HttpServletRequest request){
			int count = 0;
			String id = request.getParameter("id");
			count = cjZtsjService.deleteAsZtsjbById(Integer.parseInt(id));
		return count;
	}
	
	//更新状态库数据表
	@RequestMapping(value="/asCjZtsjbController/updateAsCjZtsjb",method = RequestMethod.POST)
	@ResponseBody
	public int updateAsCjZtsjb(HttpServletRequest request){
		int count = 0;
		String id = request.getParameter("id");
		String sjbmc = request.getParameter("sjbmc");
		String cjbmdm = request.getParameter("cjbmdm");
		String shbmdm = request.getParameter("shbmdm");
		//System.out.println("shbmdm2:"+shbmdm);
		String cjmbdm = request.getParameter("cjmbdm");
		String syfwdm = request.getParameter("syfwdm");
		String userId = "";
		String userName = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		AsCjZtsjbxx  aczj = new AsCjZtsjbxx();
		aczj.setId(Integer.parseInt(id));
		aczj.setSjbmc(sjbmc);
		aczj.setCjbmdm(Integer.parseInt(cjbmdm));
		aczj.setCjmbdm(Integer.parseInt(cjmbdm));
		aczj.setShbmdm(Integer.parseInt(shbmdm));
		aczj.setSyfwdm(Integer.parseInt(syfwdm));
		aczj.setCjsj(new Date(0));
		aczj.setUserid(Integer.parseInt(userId));
		count = cjZtsjService.update(aczj);
		return count;
	}	
	
	//查询单个
	@RequestMapping(value="/asCjZtsjbController/findAsCjZtsjb",method = RequestMethod.POST)
	@ResponseBody
	public String findAsCjZtsjb(HttpServletRequest request){
			String id = request.getParameter("id");
			AsCjZtsjbxx acjb = cjZtsjService.findZtsjbById(Integer.parseInt(id));
			 JSONObject o = new JSONObject();
			 o.put("id", acjb.getId());
			 o.put("sjbmc", acjb.getSjbmc());
			 o.put("cjbmdm", acjb.getCjbmdm());
			 o.put("cjmbdm",acjb.getCjmbdm());
			 o.put("shbmdm",acjb.getShbmdm());
			 o.put("syfwdm", acjb.getSyfwdm());
			 o.put("cjsj", acjb.getCjsj());
		return o.toString();
	}
	
	//查询所有状态数据表
	@RequestMapping(value="/asCjZtsjbController/findAllAsCjZtsjb",method = RequestMethod.POST)
	@ResponseBody
	public String findAllAsCjZtsjb(HttpServletRequest request){
		String flag = request.getParameter("flag");
		String param = request.getParameter("param");
		pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
		//总记录数  
		ArrayList<Object> params=new ArrayList<Object>();
		String sql1 = "select COUNT(*) from AS_CJ_ZTSJBXX z LEFT join AS_C_TEMPLATE CT ON Z.CJMBDM=CT.CTEMPLATE_ID ";
		       sql1 += " LEFT JOIN AS_C_CATEGORY CC ON CT.CATEGORY_ID=CC.CATEGORY_ID ";
		       sql1 += " LEFT JOIN AS_CJ_CJBMXX CJCJ ON Z.CJBMDM=CJCJ.CJBMDM ";
		       sql1 += " LEFT JOIN AS_CJ_SYFW CJSY ON Z.SYFWDM=CJSY.ID";
		       sql1 +=" LEFT JOIN organization o ON Z.CJBMDM=o.id  ";
		       sql1 += " where 1 = 1";
		       if (!param.trim().equals("")) {
		    	   if(flag.equals("SJFL")){
						 sql1 += " and CC.CATEGORY_NAME like" + "'%" + param + "%'";
						 params.add(param);
					}
					if(flag.equals("SJBM")){
						sql1 += " and Z.SJBMC like" + "'%" + param + "%'";
						 params.add(param);
					}
					if(flag.equals("CJDW")){
						sql1 += " and o.name like" + "'%" + param + "%'";
						 params.add(param);
					}
					if(flag.equals("SJMB")){
						sql1 += " and CT.CTEMPLATE_NAME like" + "'%" + param + "%'";
						 params.add(param);
					}
					if(flag.equals("SYFW")){
						sql1 += " and CJSY.SYFWMC like" + "'%" + param + "%'";
						 params.add(param);
					} 
			   }
			//	System.out.println("总数语句："+sql1);
		count = cjZtsjService.countZtsjbs(sql1);
		//共有多少页
		if (count % pageNum == 0) {
			totalPage = count / pageNum;
		} else {
			totalPage = count / pageNum + 1;
		}
		int pageStar = (pageNo-1)*pageNum;
		ArrayList<Object> params1=new ArrayList<Object>();
		params1.add(pageStar);
		String sql = "select top 10 Z.ID,CC.CATEGORY_NAME,Z.SJBMC,CJCJ.name,CT.CTEMPLATE_NAME,CJSY.SYFWMC,CT.TIME_TYPE,CJCJ.id as jgid,shsh.name as shbmdm from AS_CJ_ZTSJBXX z   ";
			   sql += " LEFT join AS_C_TEMPLATE CT ON Z.CJMBDM=CT.CTEMPLATE_ID  ";
			   sql += " LEFT JOIN AS_C_CATEGORY CC ON CT.CATEGORY_ID=CC.CATEGORY_ID ";
			   sql += " LEFT JOIN organization CJCJ ON Z.CJBMDM=CJCJ.id  ";
			   sql += " LEFT JOIN organization shsh ON Z.shbmdm=shsh.id ";
			   sql += " LEFT JOIN AS_CJ_SYFW CJSY ON Z.SYFWDM=CJSY.ID ";
			   sql += " where z.ID not in( ";
			   sql += " select top ? m2.ID from (select  Z.ID as id,CC.CATEGORY_NAME,Z.SJBMC,CJCJ.CJBMMC";
			   sql += " ,CT.CTEMPLATE_NAME,CJSY.SYFWMC,CT.TIME_TYPE,CJCJ.CJBMDM from AS_CJ_ZTSJBXX z ";
			   sql += " LEFT join AS_C_TEMPLATE CT ON Z.CJMBDM=CT.CTEMPLATE_ID ";
			   sql += " LEFT JOIN AS_C_CATEGORY CC ON CT.CATEGORY_ID=CC.CATEGORY_ID";
			   sql += " LEFT JOIN AS_CJ_CJBMXX CJCJ ON Z.CJBMDM=CJCJ.CJBMDM ";
			   sql += " LEFT JOIN AS_CJ_SYFW CJSY ON Z.SYFWDM=CJSY.ID) m2 ) ";
			   if (!param.trim().equals("")) {
				   if(flag.equals("SJFL")){
						 sql += " and CC.CATEGORY_NAME like" + "'%" + param + "%'";
						 params1.add(param);
					}
					if(flag.equals("SJBM")){
						sql += " and Z.SJBMC like" + "'%" + param + "%'";
						 params1.add(param);
					}
					if(flag.equals("CJDW")){
						sql += " and CJCJ.name like" + "'%" + param + "%'";
						 params1.add(param);
					}
					if(flag.equals("SJMB")){
						sql += " and CT.CTEMPLATE_NAME like" + "'%" + param + "%'";
						 params1.add(param);
					}
					if(flag.equals("SYFW")){
						sql += " and CJSY.SYFWMC like" + "'%" + param + "%'";
						 params1.add(param);
					}
			   }
		List<AsCjZtsjbxx> ztsjbs = cjZtsjService.selectZtsjs(sql);
		JSONObject o = new JSONObject();
		o.put("ztsjbs",ztsjbs);
		o.put("totalPage", totalPage);
		o.put("pageNo", pageNo);
		return o.toString();
	}
	
	@RequestMapping(value="/asCjZtsjbController/deleteChecked",method = RequestMethod.POST)
	@ResponseBody
	public String deleteChecked(HttpServletRequest request){
		String id=request.getParameter("id");
		String[] a= id.split("#");
		for (int i = 0; i < a.length; i++) {
		   cjZtsjService.deleteAsZtsjbById(Integer.parseInt(a[i]));
		}
		return null;
	}
	
}
