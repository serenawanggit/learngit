package audit.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.ReportTable;
import audit.service.AsReportTableServiceI;

@Controller
public class ReportTableController {

	
	private AsReportTableServiceI asReportTableService;
	@Autowired
	public void setAsReportTableService(AsReportTableServiceI asReportTableServiceI){
		this.asReportTableService = asReportTableServiceI;
	}
	@RequestMapping(value="/reportTable/listReportTables",method=RequestMethod.GET)
	@ResponseBody
	public String listReportTables(){
		List<ReportTable> reportTables = asReportTableService.selectRTs();
		JSONArray array = JSONArray.fromObject(reportTables);
		return array.toString();
	}
	
	@RequestMapping(value="/reportTable/findReportTable",method=RequestMethod.GET)
	@ResponseBody
	public String findReportTable(HttpServletRequest request){
		String reportid = request.getParameter("reportid");
		ReportTable rt = asReportTableService.findRTbyReportId(
				Integer.parseInt(reportid));
		JSONObject object = new JSONObject();
		object.put("reportid", rt.getReportid());
		object.put("reportName", rt.getReportName());
		object.put("reportUrl",rt.getReportUrl());
		object.put("reportContent", rt.getReportContent());
		return object.toString();
	}
}
