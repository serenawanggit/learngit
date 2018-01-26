package audit.controller;

import java.io.IOException;
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
import com.alibaba.fastjson.JSONObject;
import audit.util.ExportExcelUtil;

import audit.model.AsPModule;
import audit.service.AsModuleServiceI;


@Controller
@Scope("prototype")  
@RequestMapping("/homeContro") 
public class HomeController
{
	
	private AsModuleServiceI asModuleService; //模块
	@Autowired
	public void setAsModuleService(AsModuleServiceI asModuleService){
		this.asModuleService = asModuleService;
	}
	

	//-------------------查询全部模块----------------------------------------------------------
	@RequestMapping(value="/findAllModule",method = RequestMethod.POST)
	@ResponseBody
	public String findAllModule(HttpServletRequest request){
//		String mid = request.getParameter("mid");
		List<AsPModule> modules = asModuleService.findAllModule();
		JSONObject o = new JSONObject();
		o.put("modules",modules);
		return o.toJSONString();
	}
	
	//-------------------查询全部模块----------------------------------------------------------
	@RequestMapping(value="/exportExcel",method = RequestMethod.POST)
	@ResponseBody
	public void exportExcel(HttpServletRequest request,HttpServletResponse response){
		String tabValue = request.getParameter("tabValue");
		List<List<String[]>> tbList = new ArrayList<List<String[]>>();
		String [] trStr = tabValue.split("<tr>");
		Map<String, String> tdMap = new HashMap<String, String>();
		int celCount = 0;
		
		String title = "表";
		//循环行
		for (int i = 0,len = trStr.length; i < len; i++) {
			List<String[]> tdList = new ArrayList<String[]>();
			
			String []tdStr = trStr[i].split("<td>");
			int nowCell = 0;
			int celCount2 = 0;
			for (int j = 0; j < tdStr.length; j++) {
				String []styles = tdStr[j].split("<style>");
				if (i==0 && j==0) {
					title += "-"+styles[0];
				}
				celCount2 += Integer.parseInt((styles[2]!=""?styles[2]:"1"));
				tdList.add(styles);
				int ncel = Integer.parseInt((styles[2]!=""?styles[2]:"1"));
				if (styles[1]!="" && Integer.parseInt(styles[1])>1) {
					String className = styles[3];//样式
					int kuaHan = Integer.parseInt(styles[1]);//跨行数
					int kuaLie = Integer.parseInt((styles[2]!=""?styles[2]:"1"));
					for (int r = i+1; r < i+kuaHan; r++) {
						if (kuaLie==1) {
							if (j==0 && tdMap.get(i+"-0") != null) {
								for (int k = 0; k < celCount; k++) {
									if (tdMap.get(i+"-"+k) == null) {
										nowCell = k;
										break;
									}
								}
							}
							tdMap.put(r+"-"+(nowCell), className);
						}else {
							if (j==0 && tdMap.get(i+"-0") != null) {
								for (int k = 0; k < celCount; k++) {
									if (tdMap.get(i+"-"+k) == null) {
										nowCell = k;
										break;
									}
								}
							}
							for (int c = nowCell; c <(nowCell+kuaLie); c++) {
								tdMap.put(r+"-"+(c), className);
							}
						}
					}
				}
				nowCell += ncel;
				
			}
			if (celCount2>celCount) {
				celCount = celCount2;
			}
			tbList.add(tdList);
		}
		System.out.println(tdMap.size());
		try {
			ExportExcelUtil.exportMergeExcel(tbList,title,response,tdMap,celCount);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
