package audit.controller;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

import audit.model.AsPModule;
import audit.model.gj.AS_GJ_GJXJTB;
import audit.util.ExcelOperate;

@Controller
public class ShowGjController {

	@RequestMapping(value="/gj/showgjs",method = RequestMethod.GET)
	@ResponseBody
	public String showgjs(HttpServletRequest request){
		UUID uuid=UUID.randomUUID();
		System.out.println(uuid.toString());
		
		//0 查看 1 编辑
		String status = request.getParameter("status");
		//获得年份
		String year = request.getParameter("year");
		//获取高基表名
		String clazzName = request.getParameter("objclass");
		String colsCount = request.getParameter("colsCount");
		String inputWidth = request.getParameter("inputWidth");//文本框宽度
		String [] iwidths = inputWidth.split("-");
		
		//获得高基表class
		String cl = "audit.model.gj." + clazzName;
		Class<?> cs = null;
		try {
			cs = Class.forName(cl);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		String htmlStr = "";
		List list = ExcelOperate.huoqudata(cs,Integer.parseInt(year));
		System.out.println(cs.getSimpleName());
		if(list != null){
			for(int i = 0; i < list.size(); i++){
				String[] kvs = list.get(i).toString().split("\\|");
				htmlStr += "<tr class='Gj_tab_text' name='gjdata'>";
				for(int k = 0; k < kvs.length-1; k++){
					if(kvs[k].equals("null")){
						kvs[k] = "";
					}
					if(status.equals("0")){
						htmlStr += "<td colspan='1' title='"+kvs[k]+"' style='height:22px'>"+kvs[k]+"</td>";
					}
					if(status.equals("1")){
						htmlStr += "<td colspan='1' title='"+kvs[k]+"'><input type='text' class='Gj_input0"+iwidths[k]+"' value='"+kvs[k]+"' trid='"+kvs[kvs.length-1]+"'/></td>";
					}
				}
				if (status.equals("1")) {
					htmlStr += "<td colspan='1' style='width: 60px;'><input type='button' value='删除' onclick='del(this)'></td>";
				}
				htmlStr += "</tr>";
			}
			if (list.size()==0 && status.equals("1")) {
				htmlStr += "<tr class='Gj_tab_text' name='gjdata'>";
				int count = Integer.parseInt(colsCount!=null?colsCount:"0");
				for (int i = 0; i < iwidths.length; i++) {
					htmlStr += "<td colspan='1' title=''><input type='text' class='Gj_input0"+iwidths[i]+"' trid='-1' value='' /></td>";
				}
				htmlStr += "<td colspan='1'><input type='button' value='删除' onclick='del(this)'></td>";
				htmlStr += "</tr>";
			}
		}
		return htmlStr;
	}
	@RequestMapping(value="/gj/showgjjcs",method = RequestMethod.GET)
	@ResponseBody
	public String showgjjcs(HttpServletRequest request){
		//0 查看 1 编辑
		String status = request.getParameter("status");
		//获得年份
		String year = request.getParameter("year");
		//获取高基表名
		String clazzName = request.getParameter("objclass");
		
		String inputWidth = request.getParameter("inputWidth");//文本框宽度
		String [] iwidths = inputWidth.split("-");
		//获得高基表class
		String cl = "audit.model.gj." + clazzName;
		Class<?> cs = null;
		try {
			cs = Class.forName(cl);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		String htmlStr = "";
		if ("AS_GJ_GJXJTB".equals(clazzName)) {
			//G111
			List<AS_GJ_GJXJTB> modules = ExcelOperate.huoqudata2(cs,Integer.parseInt(year));
			JSONObject o = new JSONObject();
			o.put("modules",modules);
			return o.toJSONString();
		}else{
			List list = ExcelOperate.huoqudata(cs,Integer.parseInt(year));
		//	System.out.println("list "+cs.getSimpleName());
			Field fields[] = cs.getDeclaredFields();
		//	System.out.println("fields："+fields.length);
			int t = 0;
			if(list != null){
				for(int i = 0; i < list.size(); i++){
					t++;
					String[] kvs = list.get(i).toString().split("\\|");
					for(int k = 0; k < kvs.length-1; k++){
						if(kvs[k].equals("null")){
							kvs[k] = "";
						}
						if(status.equals("0")){
							htmlStr += t + "-<td name='jctd' colspan='1' title='"+kvs[k]+"'>"+kvs[k]+"</td>|";
						}
						if(status.equals("1")){
							htmlStr += t + "-<td name='jctd' colspan='1' title='"+kvs[k]+"'><input type='text' class='Gj_input0"+iwidths[k]+"' value='"+kvs[k]+"' trid='"+kvs[kvs.length-1]+"'/></td>|";
						}
					}
				}
			}
			if (list.size()==0) {
					if(status.equals("0")){
						htmlStr +="<td name='jctd' colspan='1' title=''></td>|"+fields.length;
					}
					if(status.equals("1")){
						htmlStr +="<td name='jctd' colspan='1' title=''><input type='text' class='Gj_input0' value='' trid='' style='width:80px;height:15px'/></td>|"+fields.length;
					}
			}
		}
		return htmlStr;
	}
	
	//在线编辑保存
	@RequestMapping(value="/gj/saveEditGJB",method = RequestMethod.POST)
	@ResponseBody
	public String saveEditGJB(HttpServletRequest request) throws UnsupportedEncodingException{
		//0 查看 1 编辑
		String status = request.getParameter("status");
		status = java.net.URLDecoder.decode(status,"UTF-8");
		//获得年份
		String year = request.getParameter("year");
		year = java.net.URLDecoder.decode(year,"UTF-8");
		//获取高基表名
		String clazzName = request.getParameter("objclass");
		clazzName = java.net.URLDecoder.decode(clazzName,"UTF-8");
		String trArray = request.getParameter("trArray");
		trArray = java.net.URLDecoder.decode(trArray,"UTF-8");
		
		
		List<String> trList = new ArrayList<String>();
		String[] trarr = trArray.split(",");
		for (int i = 0; i < trarr.length; i++) {
			if ("".equals(trarr[i])) {
				continue;
			}
			trList.add(trarr[i]);
		}
		
		//获得高基表class
		String cl = "audit.model.gj." + clazzName;
		Class<?> cs = null;
		try {
			cs = Class.forName(cl);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		int value = 0;
		try {
			value = ExcelOperate.saveEdit(cs, trList,Integer.parseInt(year));
		} catch (NumberFormatException e) {
			value = 0;
			e.printStackTrace();
		} catch (InstantiationException e) {
			value = 0;
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			value = 0;
			e.printStackTrace();
		}
		return value+"";
	}
	
	//在线编辑保存G111
	@RequestMapping(value="/gj/saveEditG111",method = RequestMethod.POST)
	@ResponseBody
	public String saveEditG111(HttpServletRequest request) throws UnsupportedEncodingException{
		//0 查看 1 编辑
		String status = request.getParameter("status");
		status = java.net.URLDecoder.decode(status,"UTF-8");
		//获得年份
		String year = request.getParameter("year");
		year = java.net.URLDecoder.decode(year,"UTF-8");
		//获取高基表名
		String clazzName = request.getParameter("objclass");
		clazzName = java.net.URLDecoder.decode(clazzName,"UTF-8");
		String trArray = request.getParameter("trArray");
		trArray = java.net.URLDecoder.decode(trArray,"UTF-8");
		List<String> trList = new ArrayList<String>();
		trList.add(trArray);
//		String[] trarr = trArray.split(",");
//		for (int i = 0; i < trarr.length; i++) {
//			if ("".equals(trarr[i])) {
//				continue;
//			}
//			trList.add(trarr[i]);
//		}
		//获得高基表class
		String cl = "audit.model.gj." + clazzName;
		Class<?> cs = null;
		try {
			cs = Class.forName(cl);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		int value = 0;
		try {
			value = ExcelOperate.saveEdit(cs, trList,Integer.parseInt(year));
		} catch (NumberFormatException e) {
			value = 0;
			e.printStackTrace();
		} catch (InstantiationException e) {
			value = 0;
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			value = 0;
			e.printStackTrace();
		}
		return value+"";
	}	
	
}
