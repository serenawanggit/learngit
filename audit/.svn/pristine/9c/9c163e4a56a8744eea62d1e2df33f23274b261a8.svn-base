package audit.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import net.sf.json.JSONArray;
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
import audit.model.ViewReportTab;
import audit.model.ZbbEntity;
import audit.service.AsManageServiceI;
import audit.service.AsViewQuotaServiceI;
import audit.service.DiemnI;
import audit.service.ReportModelI;
import audit.service.TabMI;
import audit.service.ViewReportTabI;
import audit.util.FindDataTable;

@Controller
public class ViewReportTabController {

	private ViewReportTabI viewReportTabService;
	@Autowired
	public void setViewReportTabService(ViewReportTabI viewReportTabService){
		this.viewReportTabService = viewReportTabService;
	}
	
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
	@RequestMapping(value="/viewReportTab/showViewReportTabs",method=RequestMethod.POST)
	@ResponseBody
	public String showViewReportTabs(HttpServletRequest request){
//		String sql = "select * from tqc_view_reporttab";
		String currentpage = request.getParameter("currentpage");
		int cp = Integer.parseInt(currentpage);
		String tab_name = request.getParameter("tab_name");
	   // String tab_level = request.getParameter("tab_level");
	   // String tab_year = request.getParameter("tab_year");
		cp--;
		
		String sql = "";
			   sql += "SELECT TOP 10 * FROM ( SELECT ROW_NUMBER() OVER (ORDER BY tmid) ";
			   sql += "AS RowNumber,* FROM TQC_VIEW_TABMODEL WHERE 1=1" ;
		if(!tab_name.equals("")){
		    	   sql += " AND tabmodel_name LIKE '%" + tab_name + "%'";
		}
		/*if(!tab_level.equals("")){
		   	   sql += " AND reportlevel LIKE '%" + tab_level + "%'";
		}
		if(!tab_year.equals("")){
		   	   sql += " AND report_zyear LIKE '%" + tab_year + "%'";
		}*/
			   sql += ") A WHERE RowNumber > ";
			   sql += 10 * cp;
	    System.out.println(sql);
	 //  List<ViewReportTab> viewReportTabs = viewReportTabService.selectAllViewReportTabs(sql);
	    List<TabModel> tabModels=tabModelService.selectAll(sql);
	    for (int i = 0; i < tabModels.size(); i++) {
	    	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");  
	 	    java.util.Date date=tabModels.get(i).getTmtime();
	 	    tabModels.get(i).setShowTime(sdf.format(date));
		}
		return JSONArray.fromObject(tabModels).toString();
	}
	
	@RequestMapping(value="/viewReportTab/showCountViewReportTabs",method=RequestMethod.POST)
	@ResponseBody
	public int showCountViewReportTabs(HttpServletRequest request){
		String tab_name = request.getParameter("tab_name");
	    //String tab_level = request.getParameter("tab_level");
	    String tab_year = request.getParameter("tab_year");
	    String sql = "select count(*) from TQC_VIEW_TABMODEL where 1=1";
	    if(!tab_name.equals("")){
	    	   sql += " AND tabmodel_name LIKE '%" + tab_name + "%'";
	    }
	   /* if(!tab_level.equals("")){
	    	   sql += " AND reportlevel LIKE '%" + tab_level + "%'";
	    }*/
	/*    if(!tab_year.equals("")){
	    	   sql += " AND report_zyear LIKE '%" + tab_year + "%'";
	    }*/
	    System.out.println(sql);
	    int count = viewReportTabService.selectCountViewReportTabs(sql);
		return count;
	}
	
	@RequestMapping(value="/viewReportTab/showTabRowCols",method=RequestMethod.GET)
	@ResponseBody
	public String showTabRowCols(HttpServletRequest request){
		String tmid = request.getParameter("rtid");
		// System.out.println(FindDataTable.querydatareportmodel(tmid).toString()); 
		//ReportModel rm = reportModelService.select(Integer.parseInt(rtid));
		//System.out.println("rtid:"+tmid);
		List<ReportModel> rms=reportModelService.selectByTmid(Integer.parseInt(tmid));
		int [] str=new int[rms.size()];
		for (int i = 0; i < rms.size(); i++) {
			str[i]=Integer.parseInt(rms.get(i).getTmid());
		}
		List<TabModel> tms=tabModelService.selectByTmid(str);
		//TabModel tm = tabModelService.findTabModel(Integer.parseInt(rm.getTmid()));
		List<String> rows = new ArrayList<String>();
		List<String> cols = new ArrayList<String>();
		List<AsMManage> sxs = new ArrayList<AsMManage>();

		//最好留着rm != null
		if(rms.size() != 0){
			//List<Diemn> diemnRowCols = diemnService.select(Integer.parseInt(rm.getTmid())); 
			List<Diemn> diemnRowCols = diemnService.selectByTmid(str);
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
		//System.out.println("cols的大小是:"+cols.size());
		Map<String, Object> parms = new HashMap<String, Object>(); 
		String wholehtml = "";
		for(int s = 0; s < sxs.size(); s++){
			//" + tm.getTmName() + "
			wholehtml += "<span style='height:30px;line-height:30px;'><label style='font-size:14px;color:#ccc;'><label style='font-size:14px;font-weight:bold;color:#313031'>" + sxs.get(s).getMeasureName() +"</label></span>";
			String tabhtml = "<table>";
			if(rows!= null && cols != null){
				tabhtml += "<tr><td nowrap='nowrap' style='text-align:center;border:solid 1px #cccccc;padding:0px 5px;height:30px;'></td>";
				for(int c = 0; c < cols.size(); c++){
					tabhtml += "<td nowrap='nowrap' style='text-align:center;border:solid 1px #cccccc;padding:0px 5px;height:30px'>" + cols.get(c) + "</td>";
				}
				tabhtml += "</tr>";
				for(int r = 0; r < rows.size(); r++){
					tabhtml += "<tr><td nowrap='nowrap' style='text-align:center;border:solid 1px #cccccc;padding:0px 5px;height:30px'>" + rows.get(r) + "</td>";
					for(int c = 0; c < cols.size(); c++){
//						//列为组织维度 行为时间维度
//							if(tm.getTmCols() == 1 && tm.getTmRows() == 0){
//								parms.put("qid", sxs.get(s).getMeasureId()); 
//								parms.put("school", "'" + cols.get(c) +"'");
//								parms.put("year", rows.get(r)); 
//							}
//						//列为时间维度，行为组织维度	
//							if(tm.getTmCols() == 0 && tm.getTmRows() == 1){
//								parms.put("qid", sxs.get(s).getMeasureId()); 
//								parms.put("school", "'" + rows.get(r) +"'");
//								parms.put("year", cols.get(c)); 
//							}
							for (int i = 0; i < tms.size(); i++) {
								//列为组织维度 行为时间维度
								if(tms.get(i).getTmCols() == 1 && tms.get(i).getTmRows() == 0){
									parms.put("qid", sxs.get(s).getMeasureId()); 
									parms.put("school", "'" + cols.get(c) +"'");
									parms.put("year", rows.get(r)); 
								}
								//列为时间维度，行为组织维度	
								if(tms.get(i).getTmCols() == 0 && tms.get(i).getTmRows() == 1){
									parms.put("qid", sxs.get(s).getMeasureId()); 
									parms.put("school", "'" + rows.get(r) +"'");
									parms.put("year", cols.get(c)); 
								}
						    }
							
						//列为组织维度，行为指标（未做待定）
						//列为时间维度；行为指标（未做待定）
							List<ZbbEntity> zbz = asViewQuotaService.findQuotaValByQId(parms);
							String zhi = "";
							if(zbz != null){
								if(zbz.get(0).getZhi() == null){
									zhi = "0";
								}else{
									zhi = zbz.get(0).getZhi();
								}
								tabhtml += "<td nowrap='nowrap'  style='text-align:center;border:solid 1px #cccccc;padding:0px 50px;height:30px'>"+zhi+"</td>";
							}
					}
					tabhtml += "</tr>";
				}
			}
			tabhtml += "</table><br/>&nbsp;";
			wholehtml += tabhtml;
		}
		return wholehtml;
	}
}
