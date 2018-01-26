package audit.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsEstimate;
import audit.service.AsEstimateServiceI;
import audit.util.Common;

/**
 * @content 自我评估树目录操作
 * @author mooc
 *
 */
@Controller

public class AsEstimateController {

	private AsEstimateServiceI asEstimateService;
	@Autowired
	public void setAsEstimateService(AsEstimateServiceI asEstimateService){
		this.asEstimateService = asEstimateService;
	}
	
	//>>自我评估里面显示的方案树
	@RequestMapping(value="/asEstimate/showAsEstimates",method=RequestMethod.GET)
	@ResponseBody
	public String showAsEstimates(){
		List<AsEstimate> asEstimates = asEstimateService.selectAllAsEstimames();
		List<String> lstTree = new ArrayList<String>();
		for(AsEstimate ae : asEstimates){
			
			//拼成json串
			String str = "";
			str += "{id:" + ae.getId();
			str += ",level:" + ae.getLevel();
			str += ",pId:" + ae.getParent();
			str += ",open:true";
			str += ",name:\"" +ae.getName();
			str += "\",icon:\"";
			if(ae.getLevel() == 2){
				str += "/audit/css/zTreeStyle/img/diy/green.png";
			}
			if(ae.getLevel() == 3){
				str += "/audit/css/zTreeStyle/img/diy/p1.png";
			}
			str += "\"}";
			System.out.println(str);
			lstTree.add(str);
		}
		return JSONArray.fromObject(lstTree).toString();
	}
	
	//>>自我评估里面保存方案树节点
		@RequestMapping(value="/asEstimate/saveAsEstimate",method = RequestMethod.POST)
		@ResponseBody
		public int saveAsEstimate(HttpServletRequest request){
			String level = request.getParameter("level");
			String name = request.getParameter("name");
			String parent = request.getParameter("parent");
			AsEstimate ae = new AsEstimate();
			ae.setName(name);
			ae.setLevel(Integer.parseInt(level)+2);
			ae.setParent(Integer.parseInt(parent));
			int status = asEstimateService.save(ae);
			return status;
		}
		
		//>>自我评估里面更新方案树节点
			@RequestMapping(value="/asEstimate/updateAsEstimate",method = RequestMethod.POST)
			@ResponseBody
			public int updateAsEstimate(HttpServletRequest request){
				String id = request.getParameter("id");
				String level = request.getParameter("level");
				String name = request.getParameter("name");
				String parent = request.getParameter("parent");
				AsEstimate ae = new AsEstimate();
				ae.setId(Integer.parseInt(id));
				ae.setName(name);
				ae.setLevel(Integer.parseInt(level)+1);
				ae.setParent(Integer.parseInt(parent));
				int status = asEstimateService.update(ae);
				return status;
			}
		//>>自我评估里面删除方案树节点
			@RequestMapping(value="/asEstimate/deleteAsEstimate",method = RequestMethod.GET)
			@ResponseBody
			public int deleteAsEstimate(HttpServletRequest request){
				String id = request.getParameter("id");
				int status = asEstimateService.delete(Integer.parseInt(id));
				return status;
			}
		//>>自我评估里面删除方案树节点
			@RequestMapping(value="/asEstimate/findAsEstimate",method = RequestMethod.GET)
			@ResponseBody
			public String findAsEstimate(HttpServletRequest request){
				String id = request.getParameter("id");
				AsEstimate ae = asEstimateService.selectSingleById(Integer.parseInt(id));
				JSONObject object = new JSONObject();
				object.put("id", ae.getId());
				object.put("name", ae.getName());
				object.put("level", ae.getLevel());
				object.put("parent", ae.getParent());
				return object.toString();
			}
			@RequestMapping(value="/asEstimate/updateNowAsEstimate",method=RequestMethod.POST)
			@ResponseBody
			public String updateNowAsEstimate(HttpServletRequest request){
				try {
					asEstimateService.updateNowAsEstimate();
				} catch (Exception e) {
					e.printStackTrace();
				}
				return null;
			}
}
