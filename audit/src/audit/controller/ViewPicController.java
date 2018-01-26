package audit.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsMManage;
import audit.model.Diemn;
import audit.model.ReportModel;
import audit.model.TabModel;
import audit.model.ZbbEntity;
import audit.service.AsManageServiceI;
import audit.service.AsViewQuotaServiceI;
import audit.service.DiemnI;
import audit.service.ReportModelI;
import audit.service.TabMI;
import audit.util.Base64Pic;
@Controller
public class ViewPicController {

	private ReportModelI reportModelService;
	@Autowired
	public void setReportModelService(ReportModelI reportModelService){
		this.reportModelService = reportModelService;
	}
	
	private DiemnI diemnService;
	@Autowired
	public void setDiemnService(DiemnI diemnService){
		this.diemnService = diemnService;
	}
	
	private AsManageServiceI asManageService;
	@Autowired
	public void setAsMManageService(AsManageServiceI asManageService){
		this.asManageService = asManageService;
	}
	
	private AsViewQuotaServiceI asViewQuotaService;
	@Autowired
	public void setAsViewQuotaService(AsViewQuotaServiceI asViewQuotaService){
		this.asViewQuotaService = asViewQuotaService;
	}
	
	private TabMI tabModelService;
	@Autowired
	public void setTabModelService(TabMI tabModelService){
		this.tabModelService = tabModelService;
	}
	
	@RequestMapping(value="/viewPic/saveVp",method=RequestMethod.GET)
	@ResponseBody
	public String saveVp(HttpServletRequest request){
		String rtid = request.getParameter("rtid");
		ReportModel rm = reportModelService.select(Integer.parseInt(rtid));
		TabModel tm = tabModelService.findTabModel(Integer.parseInt(rm.getTmid()));
		/*列维度:   0 时间维度   1:组织维度     2:指标 */
		/*行维度 ：     0 时间维度   1:组织维度     2:指标   */
		/*过滤条件： 0 时间维度   1:组织维度     2:指标   */
		List<String> rows = new ArrayList<String>();
		List<String> cols = new ArrayList<String>();
		List<AsMManage> sxs = new ArrayList<AsMManage>();
		if(rm != null){
			List<Diemn> diemnRowCols = diemnService.select(Integer.parseInt(rm.getTmid())); 
			if(diemnRowCols != null){
				for(Diemn d: diemnRowCols){
					if(d.getPmsflm().equals("0")){
						cols.add(d.getDimenname());
					}
					
					if(d.getPmsflm().equals("1")){
						rows.add(d.getDimenname());
					}
					
					if(d.getPmsflm().equals("2")){
						AsMManage am = asManageService.findAsMManageByName(d.getDimenname());
						sxs.add(am);
					}
				}
			}
		}
		Map<String, Object> parms = new HashMap<String, Object>();
		List<ZbbEntity> zbList = new ArrayList<ZbbEntity>();
		//DBO.SP_R_ZLSJ_ZB'SYEAR','DEPARTMENT',
		//'2010,2011,2012,2013,2014',
		//'''化工学院'',''国际教育学院'',''生物工程学院''',
		//'046199510'
		for(int s = 0; s < sxs.size(); s++){
			for(int r = 0; r < rows.size(); r++){
				for(int c = 0; c < cols.size(); c++){
					//列为组织维度 行为时间维度
						if(tm.getTmCols() == 1 && tm.getTmRows() == 0){
							parms.put("qid", sxs.get(s).getMeasureId()); 
							parms.put("school", "'" + cols.get(c) +"'");
							parms.put("year", rows.get(r)); 
						}
					//列为时间维度，行为组织维度	
						if(tm.getTmCols() == 0 && tm.getTmRows() == 1){
							parms.put("qid", sxs.get(s).getMeasureId()); 
							parms.put("school", "'" + rows.get(r) +"'");
							parms.put("year", cols.get(c)); 
						}
					//列为组织维度，行为指标（未做待定）
					//列为时间维度；行为指标（未做待定）
						ZbbEntity zbz = asViewQuotaService.findQuotaVal(parms);
						zbList.add(zbz);
				}
			}
		}
		
		Map<String,List<ZbbEntity>> map = new HashMap<String,List<ZbbEntity>>();
		//遍历集合以指标id为键
		  for (Iterator it = zbList.iterator(); it.hasNext();){
			  //将循环读取的结果放入对象中
			  ZbbEntity ze = (ZbbEntity) it.next();
		   //如果在这个map中包含有相同的键，这创建一个集合将其存起来
		   if (map.containsKey(ze.getZbid())){
			   List<ZbbEntity> zey = map.get(ze.getZbid());
			   zey.add(ze);
			   //如果没有包含相同的键，在创建一个集合保存数据
		   }else{
			   List<ZbbEntity> zeys = new ArrayList<ZbbEntity>();
			   zeys.add(ze);
			   map.put(ze.getZbid(), zeys);
		   }
		  }
		  JSONObject o = new JSONObject();
		  o.put("zb", map);
		return o.toString();
	}
	
	
	@RequestMapping(value="/viewPic/createImage",method=RequestMethod.POST)
	@ResponseBody
	public String createImage(HttpServletRequest request) throws IOException{
		 String a = request.getParameter("image");
		 //解码
		 a = java.net.URLDecoder.decode(a,"UTF-8");
		    try {
		        String[] url = a.split(",");
		        String u = url[1];
		        Base64Pic.convertBase64DataToImage(u,"D:\\"+System.currentTimeMillis()+".png");
		    } catch (Exception e) {
		        e.printStackTrace();
		    }
			return "ok";
	}
}
