package audit.controller;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.xssf.eventusermodel.examples.FromHowTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import audit.model.AsCjBmyBmry;
import audit.model.AsCjCjrwztb;
import audit.model.AsCjRwJinDu;
import audit.model.AsCjRwxx;
import audit.model.AsCjRwxx2;
import audit.model.AsCjRwxxGL;
import audit.model.AsCjShxx;
import audit.model.AsCjSyfw;
import audit.model.AsCjZtsjbxx;
import audit.model.DefineObject;
import audit.model.DefineTemplate;
import audit.model.StandardCellField;
import audit.model.StandardTemplate;
import audit.service.AsCjBmyBmryServiceI;
import audit.service.AsCjShxxVoServices;
import audit.service.AsCjSyfwServiceI;
import audit.service.AsCjrwztbServices;
import audit.service.CjRwxxServiceI;
import audit.service.CjZtsjServiceI;
import audit.util.CookieUtil;
import audit.util.ExcelUtils;
import audit.util.ExportExcelUtil;
import audit.util.FileUtil;
import audit.util.PropertiesUtil;

import com.alibaba.fastjson.JSONObject;


@Controller
public class RwxxController{

	private int pageNo;          //当前页码  
	private int pageNum = 8;   //每页行数  
	private int count;      	 //总记录数  
	private int totalPage;       //总页数    
	
	//任务信息
	private CjRwxxServiceI cjRwxxService;
	@Autowired
	public void setAsPlanService(CjRwxxServiceI cjRwxxService){
		this.cjRwxxService = cjRwxxService;
	}
	
	//状态数据表
	private CjZtsjServiceI cjZtsjServiceImpl;
	@Autowired
	public void setCjZtsjServiceImpl(CjZtsjServiceI cjZtsjServiceImpl){
		this.cjZtsjServiceImpl = cjZtsjServiceImpl;
	}
	
	//状态数据表
	private AsCjSyfwServiceI asCjSyfwService;
	@Autowired
	public void setAsCjSyfwService(AsCjSyfwServiceI asCjSyfwService){
		this.asCjSyfwService = asCjSyfwService;
	}
	//部门与部门人员
	private AsCjBmyBmryServiceI asCjBmyBmryService;
	@Autowired
	public void setAsCjBmyBmryService(AsCjBmyBmryServiceI asCjBmyBmryService){
		this.asCjBmyBmryService = asCjBmyBmryService;
	}
	
	@Autowired 
	private AsCjShxxVoServices asCjShxxVoServices;
	@Autowired
	private AsCjrwztbServices asCjrwztbServices;
	@RequestMapping(value="/rwxxController/selectRwByMC",method=RequestMethod.POST)
	@ResponseBody
	public String selectRwByMC(HttpServletRequest request){
		String name = request.getParameter("rName");
		String userId = "";
		String userName = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		
		pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
		//总记录数  
		count = cjRwxxService.findCount(name);
		//共有多少页
		if (count % pageNum == 0) {
			totalPage = count / pageNum;
		} else {
			totalPage = count / pageNum + 1;
		}
		int pageStar = (pageNo-1)*pageNum+1;
		int pageEnd=pageNo*pageNum;
		List<AsCjRwxx2> cjrwList = cjRwxxService.findPageRwxx(name, pageStar,pageEnd);
		JSONObject o = new JSONObject();
		o.put("rwList",cjrwList);
		o.put("totalPage", totalPage);
		o.put("pageNo", pageNo);
		o.put("rName", name);
		return o.toJSONString();
	}
	
	//查询适用范围
	@RequestMapping(value="/rwxxController/findSyfwAll",method=RequestMethod.POST)
	@ResponseBody
	public String findSyfwAll(HttpServletRequest request){
		List<AsCjSyfw> syfwList = asCjSyfwService.selectAsCjSyfws();
		JSONObject o = new JSONObject();
		o.put("syfwList",syfwList);
		return o.toJSONString();
	}
	
	//查询状态数据
	@RequestMapping(value="/rwxxController/selectZtsjBySyfwId",method=RequestMethod.POST)
	@ResponseBody
	public String selectZtsjBySyfwId(HttpServletRequest request){
		String fwdm = request.getParameter("syfwdm");
		Integer syfwdm = (fwdm==null?0:Integer.parseInt(fwdm));
		List<AsCjZtsjbxx> cjZtsjList = null;
		if (syfwdm==0) {
			cjZtsjList = cjZtsjServiceImpl.selectAllZtsj();
		}else{
			cjZtsjList = cjZtsjServiceImpl.selectZtsjBySyfwId(syfwdm);
		}
		
		List<AsCjSyfw> syfwList = asCjSyfwService.selectAsCjSyfws();
		JSONObject o = new JSONObject();
		o.put("ztsjList",cjZtsjList);
		o.put("syfwList",syfwList);
		o.put("syfwdm", syfwdm);

		return o.toJSONString();
	}
	
	//查询部门人员
	@RequestMapping(value="/rwxxController/selectBmry",method=RequestMethod.POST)
	@ResponseBody
	public String selectBmry(HttpServletRequest request){
			String fwdm = request.getParameter("syfwdm");
			String cjbm = request.getParameter("cjbm");
			Integer syfwdm = (fwdm==null?0:Integer.parseInt(fwdm));
			List<AsCjShxx> asCjShxxs= asCjShxxVoServices.findByuserId(cjbm);
			List<AsCjBmyBmry> bmryList = asCjBmyBmryService.selectJsUsers();
			JSONObject o = new JSONObject();
			o.put("bmryList",bmryList);
			o.put("bmryList1",asCjShxxs);
			return o.toJSONString();
	}
	
	
	//保存任务
	@RequestMapping(value="/rwxxController/saveRw",method=RequestMethod.POST)
	@ResponseBody
	public String saveRw(HttpServletRequest request){
		String rwid = request.getParameter("rwid");
		String rwTitle = request.getParameter("rwTitle");
		String fbTime = request.getParameter("fbTime");
		String jzTime = request.getParameter("jzTime");
		String ztsjArr = request.getParameter("ztsjArr");
		/*System.out.println("ztsjArr是:"+ztsjArr);
		System.out.println("rwid是:"+rwid);*/
		String [] ztsj = ztsjArr.split(",");
		String userId = "";
		String userName = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		
		AsCjRwxx rw = new AsCjRwxx();
		rw.setCjrwmc(rwTitle);
		SimpleDateFormat sdf=new SimpleDateFormat( "yyyy-MM-dd");  //格式化时间
	    java.util.Date sDate;
	    java.util.Date eDate;
		try {
			sDate = sdf.parse(fbTime);
			eDate=sdf.parse(jzTime);
			Date staDate = new Date(sDate.getTime()); 
			Date endDate = new Date(eDate.getTime());
			rw.setFbsj(staDate);
			rw.setJzsj(endDate);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} //格式化startDate 开始时间为 Date类型
	    
		rw.setRwzt(0);
		rw.setFbrdm(Integer.parseInt(userId));
		//保存任务
		int state = 0;
		if (rwid == null || "0".equals(rwid)) {
			//新增
			state = cjRwxxService.insertRW(rw);
		}else {
			rw.setId(Integer.parseInt(rwid));
			//修改
			state = cjRwxxService.updateRW(rw);
		}
		
		if (ztsj != null && ztsj[0].length()>0) {
			for (int i = 0; i < ztsj.length; i++) {
				String [] zt = ztsj[i].split("\\$");
				//System.out.println(ztsj[i]+"----"+rwid);
			    int size=	cjRwxxService.findCjztbCount(Integer.parseInt(rwid), Integer.parseInt(zt[0]));
				if (size>0) {
					cjRwxxService.updateCjrwztb(Integer.parseInt(zt[1]), Integer.parseInt(zt[2]), zt[3], Integer.parseInt(rwid), Integer.parseInt(zt[0]));
				}else {
					int rwId = 0;
					if (rwid == null || "0".equals(rwid)) {
						rwId = cjRwxxService.findMaxId();
					}else {
						rwId = Integer.parseInt(rwid);
					}
					AsCjCjrwztb cjrwztb = new AsCjCjrwztb();
					cjrwztb.setCjrwdm(rwId);
					cjrwztb.setZtbdm(Integer.parseInt(zt[0]));
					cjrwztb.setCjr(Integer.parseInt(zt[1]));
					cjrwztb.setShr(Integer.parseInt(zt[2]));
					cjrwztb.setCjrwnf(zt[3]);//统计时间
					cjrwztb.setCjzt(0);
					cjrwztb.setShzt(0);
					cjrwztb.setSftjsh(0);
					//保存关联
					cjRwxxService.insertRWglZTB(cjrwztb);
				}	
			}
		}
		/*if (state>0) {
			//查询新增的任务
			int rwId = 0;
			if (rwid == null || "0".equals(rwid)) {
				rwId = cjRwxxService.findMaxId();
			}else {
				rwId = Integer.parseInt(rwid);
			}
			
			//删除关联
			if (rwid != null && !"0".equals(rwid)) {
				cjRwxxService.deleteRwxxGL(rwId);
			}
			if (ztsj != null) {
				for (int i = 0; i < ztsj.length; i++) {
					String []zt = ztsj[i].split("\\$");
					AsCjCjrwztb cjrwztb = new AsCjCjrwztb();
					cjrwztb.setCjrwdm(rwId);
					cjrwztb.setZtbdm(Integer.parseInt(zt[0]));
					cjrwztb.setCjr(Integer.parseInt(zt[1]));
					cjrwztb.setShr(Integer.parseInt(zt[2]));
					cjrwztb.setCjrwnf(zt[3]);//统计时间
					cjrwztb.setCjzt(0);
					cjrwztb.setShzt(0);
					cjrwztb.setSftjsh(0);
					
					//保存关联
					cjRwxxService.insertRWglZTB(cjrwztb);
					
				}
			}
		}*/
		return null;
	}
	
	//删除任务
	@RequestMapping(value="/rwxxController/deleteRwxx",method=RequestMethod.POST)
	@ResponseBody
	public String deleteRwxx(HttpServletRequest request){
			String rwId = request.getParameter("rwId");
			Integer id = (rwId==null?0:Integer.parseInt(rwId));
			int state = cjRwxxService.deleteRwxx(id);
			return null;
	}
	
	//批量删除任务
	@RequestMapping(value="/rwxxController/plDeleteRwxx",method=RequestMethod.POST)
	@ResponseBody
	public String plDeleteRwxx(HttpServletRequest request){
			String rwIds = request.getParameter("rwIds");
			String [] ids = rwIds.split("\\$");
			for (int i = 0; i < ids.length; i++) {
				Integer id = (ids[i]==null?0:Integer.parseInt(ids[i]));
				int state = cjRwxxService.deleteRwxx(id);
			}
			return null;
	}
	
	//编辑任务
	@RequestMapping(value="/rwxxController/bjRwxx",method=RequestMethod.POST)
	public String bjRwxx(HttpServletRequest request){
			String rwId = request.getParameter("id");
			if (rwId!=null && !"undefined".equals(rwId)) {
				//编辑
				request.setAttribute("rwid", rwId);
			}else {
				request.setAttribute("rwid", 0);
			}
			return "page/dataAcquisition/addTask";
	}
	
	//任务进度查看
	@RequestMapping(value="/rwxxController/showRwjd",method=RequestMethod.POST)
	public String showRwjd(HttpServletRequest request){
			String rwId = request.getParameter("id");
			request.setAttribute("rwid", rwId);
			return "page/dataAcquisition/progress";
	}
	
	
	//根据任务id查询任务
	@RequestMapping(value="/rwxxController/findRwById",method=RequestMethod.POST)
	@ResponseBody
	public String findRwById(HttpServletRequest request){
		String rwid = request.getParameter("rwid");
		Integer id = (rwid!=null?Integer.parseInt(rwid):0);
		List<AsCjRwxxGL> cjrwList = cjRwxxService.findRwxxById(id);
		List<AsCjShxx> bmryList = asCjBmyBmryService.selectJsUsers1();
		JSONObject o = new JSONObject();
		o.put("bmryList",bmryList);
		o.put("rwList",cjrwList);
		return o.toJSONString();
	}
	
	//根据任务id查询任务进度
	@RequestMapping(value="/rwxxController/findRwjdById",method=RequestMethod.POST)
	@ResponseBody
	public String findRwjdById(HttpServletRequest request){
		String rwid = request.getParameter("rwid");
		//查询任务
		String name = request.getParameter("rName");
		name = (name==null?"":name);
		Integer id = (rwid!=null?Integer.parseInt(rwid):0);
		AsCjRwxx2 rw = cjRwxxService.findRwById(id);
		pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
		//总记录数  
		count = cjRwxxService.findRwJdCount(id, name);
		int ysh = cjRwxxService.findYshCount(id);
		int zcount = cjRwxxService.findRwJdCount(id, "");
		Double shs = (double) ysh;
		Double jd = shs / zcount * 100.00;
		//共有多少页
		if (count % pageNum == 0) {
			totalPage = count / pageNum;
		} else {
			totalPage = count / pageNum + 1;
		}
		int pageStar = (pageNo-1)*pageNum;
		
		List<AsCjRwJinDu> rwjdList = cjRwxxService.findPageRwxxZtb(id, name, pageStar);
		JSONObject o = new JSONObject();
		o.put("rw",rw);
		o.put("rwjdList",rwjdList);
		o.put("totalPage", totalPage);
		o.put("pageNo", pageNo);
		o.put("rName", name);
		o.put("jd", jd);
		return o.toJSONString();
	}
	
	//退回
	@RequestMapping(value="/rwxxController/thRwZtb",method=RequestMethod.POST)
	@ResponseBody
	public String thRwZtb(HttpServletRequest request){
			String id = request.getParameter("id");
			Integer rwztbId = (id!=null ? Integer.parseInt(id):0);
			AsCjCjrwztb rwztb = new AsCjCjrwztb();
			rwztb.setId(rwztbId);
			rwztb.setShzt(0);
			cjRwxxService.updateRwZtb(rwztb);
			return null;
	}
	
	//填报
	@RequestMapping(value="/rwxxController/tbRwxx",method=RequestMethod.POST)
	public String tbRwxx(HttpServletRequest request){
			String rwId = request.getParameter("id");
			request.setAttribute("rwid", rwId);
			return "page/dataAcquisition/dataTianbao";
	}
	
	//根据任务id查询任务进度
	@RequestMapping(value="/rwxxController/showTianbao",method=RequestMethod.POST)
	@ResponseBody
	public String showTianbao(HttpServletRequest request){
		String rwid = request.getParameter("rwid");
		//查询任务
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		Integer id = (rwid!=null?Integer.parseInt(rwid):0);
		AsCjRwxx2 rw = cjRwxxService.findRwById(id);
		//
		int ysh = cjRwxxService.findYshCount(id);
		int zcount = cjRwxxService.findRwJdCount(id, "");
		Double shs = (double) ysh;
		Double jd = zcount==0?0:(shs / zcount * 100.00);
		//查询数据
		List<AsCjZtsjbxx> ztsj = cjZtsjServiceImpl.findZtbByRwId(id,Integer.parseInt(userId));
		JSONObject o = new JSONObject();
		o.put("rw",rw);
		o.put("jd", jd);
		o.put("ztsj", ztsj);
		return o.toJSONString();
	}
	
	@RequestMapping(value="/rwxxController/exportMB",method = RequestMethod.POST)
	@ResponseBody
	public void exportMB(HttpServletRequest request,HttpServletResponse response){
		String id = request.getParameter("mbid");
		int mbid = (id==null?0:Integer.parseInt(id));
		//查出自定义模版
		DefineTemplate dt = cjRwxxService.findDiyMbById(mbid);
 		//查出正式表名称
//		String clazzname = standardTemplateService.findStandardTemplate(dt.getTEMPLATE_ID()).getOBJECT_TABLE();
//		if (StringUtil.notIsNull(clazzname)) {
//			clazzname = Common.ODS_PREFIX+clazzname;
//		}
		if (dt == null) {
			return;
		}
 		//查出列头
		List<DefineObject> defineObjList  = cjRwxxService.findYsbBymbId(dt.getCTEMPLATE_ID());
		String[] head = new String[(defineObjList!= null?defineObjList.size():0)];
		if (defineObjList != null) {
			for (int i = 0,len = defineObjList.size(); i < len; i++) {
				DefineObject df = defineObjList.get(i);
				//判断是否为交叉表
				StandardCellField scf = cjRwxxService.findBZYS(df.getSID());
				if (scf != null && scf.getIS_CROSSTAB()==1 && i!=0) {
					//是交叉表字段
					DefineObject ldf = defineObjList.get(0);
					defineObjList.set(0, defineObjList.get(i));
					defineObjList.set(i, ldf);
					String lsdx = head[0];
					head[0] = df.getCTEMPLATE_TITLE_NAME();
					head[i] = lsdx;
					continue;
				}
				head[i] = df.getCTEMPLATE_TITLE_NAME();
			}
		}
//		//查出正式表数据
//		List ammList = defineTemplateService.findOdsObject(clazzname, dt.getCTEMPLATE_NAME(), insertVersion, defineObjList);
 		//导出
		try {
			ExportExcelUtil.exportExcel(null, head, dt.getCTEMPLATE_NAME().replace(" ", ""), dt.getCTEMPLATE_NAME().replace(" ", ""), response,(short)0,(short)11);
		} catch (IOException e) {
			e.printStackTrace();
		}
//		return "";
	}
	
	//提交数据
	@RequestMapping(value="/rwxxController/uploadData",method = RequestMethod.POST)
	@ResponseBody
	public void uploadData(HttpServletRequest request,HttpServletResponse response,File file){
		String message = "";
		
		String fileFileName = request.getParameter("fileFileName");
//		File file = request.getParameter("file");
		
		String id = request.getParameter("mbid");
		int mbid = (id==null?0:Integer.parseInt(id));
		//查出自定义模版
		DefineTemplate dt = cjRwxxService.findDiyMbById(mbid);
		
		String dtname = dt.getCTEMPLATE_NAME() + ".xls";
		String standardname = cjRwxxService.findStandardTemplate(dt.getTEMPLATE_ID()).getTEMPLATE_NAME();
		StandardTemplate BZtemp = cjRwxxService.findStandardTemplate(dt.getTEMPLATE_ID());
		
		
		if(!dtname.trim().equals(fileFileName)){
			try {
				message = "namefail|选择文件名称与模板名不一致";
//				message = new String(message.getBytes("ISO8859-1"),"UTF-8");
				response.setCharacterEncoding("UTF-8");
				response.getWriter().print(message);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}else{
			File dir = new File(PropertiesUtil.getProperty("excel.tmp"));
			if(!dir.exists()){
				dir.mkdirs();
			}
			
			File outFile = new File(dir,fileFileName);
			Map<String,String> map = new HashMap<String,String>();
			Map<String,String> omap = new HashMap<String,String>();
			Map<String,String> rowsmap = new HashMap<String,String>();//存放行头
			StandardTemplate st = cjRwxxService.findStandardTemplate(dt.getTEMPLATE_ID());
			try{
				FileUtil.save(file, outFile);
				int a = 0;
//			
					List<String> headers = ExcelUtils.getExcelHeaders("F:\\tmp" + File.separator + fileFileName);;
					StringBuffer sb = new StringBuffer();
					for(int i = 0; i < headers.size();i++){
						if(!omap.containsKey(headers.get(i))){
							sb.append("[" + headers.get(i) + "]");
						}
					}
					if(!"".equals(sb.toString())){
						message = "cellerror|" + sb.toString() + "与标准模板列不符合";
						try {
							response.setCharacterEncoding("UTF-8");
							response.getWriter().print(message);
						} catch (IOException e) {
							e.printStackTrace();
						}
					}else{
						String cl = "com.zenith.tqcc.excel.tem." + st.getOBJECT_TABLE();
						Class<?> cs = null;
						try {
							cs = Class.forName(cl);
						} catch (ClassNotFoundException e) {
							e.printStackTrace();
						}
//						UVO uvo = (UVO)session.get(Common.UVO);
//						String id2 = CookieUtil.getValueByCookie(request, "uvocookie", "id");
//						String schoolName = asCschooService.findSchool().getSCHOOL_NAME();
//						String path = Common.EXCEL_TMP + File.separator + this.getFileFileName();
//						int flag = DButil.insert(st.getOBJECT_TABLE(), cs, path,
//								map, schoolName, dt.getCTEMPLATE_NAME(),
//								Integer.parseInt(id2), insert_version, standardname);
						//导入是否成功
					}
//				}
//				new File(Common.EXCEL_TMP + File.separator + this.getFileFileName()).delete();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return ;
	}
	
	//删除数据
	@RequestMapping(value="/rwxxController/deleteRW",method = RequestMethod.POST)
	@ResponseBody
	public String deleteRW(HttpServletRequest request,HttpServletResponse response){
		 response.setCharacterEncoding("utf-8");
		 String ztbid=request.getParameter("ztbid");
		 asCjrwztbServices.deleteRW(Integer.parseInt(ztbid));
		 return "删除成功！";
	}
	
	
   @RequestMapping(value="/rwxxController/showTaskSchedule",method=RequestMethod.POST)
   @ResponseBody
   public String showTaskSchedule(HttpServletRequest request,HttpServletResponse response){
	  int rwid=Integer.parseInt(request.getParameter("id"));
	   List<AsCjRwxxGL> list= cjRwxxService.findRwxxByIdforSchedule(rwid);
	   JSONObject o = new JSONObject();
	   o.put("list",list);
	return o.toString();
   }
   
    //批量删除数据
 	@RequestMapping(value="/rwxxController/deleteRWpl",method = RequestMethod.POST)
 	@ResponseBody
 	public String deleteRWpl(HttpServletRequest request,HttpServletResponse response){
 		 response.setCharacterEncoding("utf-8");
 		 String ztbid=request.getParameter("ztbid");
 		 String [] id=ztbid.split("\\&");
 		 for (int i = 0; i < id.length; i++) {
 			 asCjrwztbServices.deleteRW(Integer.parseInt(id[i]));
		 }
 		 return "删除成功！";
 	}
}
