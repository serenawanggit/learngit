package audit.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.common.ManageTreeListToJson;
import audit.common.ModuleTreeEnttryHelper;
import audit.model.AsPModule;
import audit.model.AsPViewQuota;
import audit.model.AsPlan;
import audit.model.Support_File;
import audit.model.ZbbEntity;
import audit.service.AsModuleServiceI;
import audit.service.AsPlanServiceI;
import audit.service.AsViewQuotaServiceI;
import audit.service.SupportFileI;
import audit.util.Common;
import audit.util.FileUtil;
import audit.util.NumberUtil;

import com.alibaba.fastjson.JSONObject;


@Controller
@Scope("prototype")  
@RequestMapping("/statusDataController") 
public class StatusDataController
{
	
	private AsModuleServiceI asModuleService; //模块
	@Autowired
	public void setAsModuleService(AsModuleServiceI asModuleService){
		this.asModuleService = asModuleService;
	}
	
	private AsViewQuotaServiceI asViewQuotaService;
	@Autowired
	public void setAsViewQuotaService(AsViewQuotaServiceI asViewQuotaService){
		this.asViewQuotaService = asViewQuotaService;
	}
	
	private SupportFileI supportFileService; //支撑文件接口
	@Autowired
	public void setSupportFileService(SupportFileI supportService){
		this.supportFileService = supportService;
	}

	 @Autowired
	 private AsPlanServiceI asPlanServiceI;
	//树形菜单查询-------------------查询全部模块----------------------------------------------------------
	@RequestMapping(value="/findModuleTree",method = RequestMethod.POST)
	@ResponseBody
	public String findModuleTree(HttpServletRequest request){
		List<AsPModule> modules = asModuleService.findModulePlan();
		List<ModuleTreeEnttryHelper> moduleTree = ManageTreeListToJson.getModuleTreeList(modules);
		JSONObject o = new JSONObject();
		o.put("ztree",moduleTree);
		return o.toJSONString();
	}
	
	//-------------------查询方案对应的指标和支撑材料----------------------------------------------------------
	@RequestMapping(value="/findZBorCL",method = RequestMethod.POST)
	@ResponseBody
	public String findZBorCL(HttpServletRequest request){
		String pid = request.getParameter("pid");
		String year1 = request.getParameter("year1");
		String year2 = request.getParameter("year2");
		System.out.println(pid+"========="+year1+"======="+year2);
		//根据方案ID查询出方案的观测指标
		List<AsPViewQuota> vqList = asViewQuotaService.findViewQuotaByPid(Integer.parseInt(pid));
		//查询出观测指标的值----全校---选择年份
		Map<String, Object> parms = new HashMap<String, Object>();  
		if (vqList != null && vqList.size()>0) {
			String qids = "";
			for (int i = 0; i < vqList.size(); i++) {
				qids += vqList.get(i).getQid();
				if (i != vqList.size()-1) {
					qids += ",";
				}
			}
	        parms.put("qid", qids);  
		}
		parms.put("school", "'全校'");  
		int y1 = Integer.parseInt(year1);
		int y2 = Integer.parseInt(year2);
		String year = "";
		for (int i = y1; i <= y2; i++) {
			year += i;
			if (i!=y2) {
				year += ",";
			}
		}
		parms.put("year", year); 
		
		List<ZbbEntity> zbz = null;
		if (parms.get("qid") != null) {
			zbz = asViewQuotaService.findQuotaValByQId(parms);
			if (zbz != null) {
				List<ZbbEntity> zbz2 = new ArrayList<ZbbEntity>();
				for (int i = 0; i < zbz.size(); i++) {
					ZbbEntity zb = zbz.get(i);
					String zhi = zb.getZhi()==null?"":zb.getZhi();
					String str = "";
					if(NumberUtil.isDouble(zhi)){  
						double vals = NumberUtil.roundForNumber(Double.valueOf((String) zhi),2);  
						str = String.valueOf(vals);  
					}else{  
						str = (String) zhi;  
					}  
					zb.setZhi(str);
					zbz2.add(zb);
				}
				
				zbz = zbz2;
			}
		}
		
		
		//查询支撑材料
		List<Support_File> sflile = supportFileService.selectFileByPid(Integer.parseInt(pid));
	    //查询评估方案设计 
		AsPlan asPlan=	asPlanServiceI.findAsPlanById(Integer.parseInt(pid));
		JSONObject o = new JSONObject();
		o.put("zbz",zbz);
		o.put("sflile",sflile);
		o.put("asPlan",asPlan);
		return o.toJSONString();
	}
	@RequestMapping(value="/downFile",method=RequestMethod.POST)
	@ResponseBody
	public String downFile(HttpServletRequest request,HttpServletResponse response){
        String sid= request.getParameter("sid");
        Support_File sFile=supportFileService.findSupportFileById(Integer.parseInt(sid));
        String path=System.getProperty("upload")+"//"+sFile.getDir();
        FileUtil.fileDownload(response,path,sFile.getFilename());
		return null;
	}
}
