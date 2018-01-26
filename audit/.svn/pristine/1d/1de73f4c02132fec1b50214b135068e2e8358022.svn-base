package audit.controller;

import javax.servlet.http.HttpServletRequest;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsECkeditorContent;
import audit.model.AsEstimate;
import audit.service.AsECkeditorContentI;
import audit.service.AsEstimateServiceI;

@Controller
public class AsCkeditorContentController {

	private AsECkeditorContentI asEckeditorContentService;
	@Autowired
	public void setAsEckeditorContentService(AsECkeditorContentI asEckeditorContentService){
		this.asEckeditorContentService = asEckeditorContentService;
	}
	@Autowired
	private AsEstimateServiceI asEstimateServiceI;
	
	@RequestMapping(value="/asCkeditorContent/obtainContent",method=RequestMethod.GET)
	@ResponseBody
	public String obtainContent(){
		return "";
	}
	
	//保存
	@RequestMapping(value="/asCkeditorContent/saveContent",method=RequestMethod.POST)
	@ResponseBody
	public int saveContent(HttpServletRequest request){
		String eid = request.getParameter("eid");
		String content = request.getParameter("content");
		System.out.println("*********");
		System.out.println(eid+": " + content);
		System.out.println("*********");
		AsECkeditorContent ascc = new AsECkeditorContent();
		ascc.setEid(Integer.parseInt(eid));
		ascc.setContent(content);
		int status = asEckeditorContentService.saveAsCkeditorContent(ascc);
		asEstimateServiceI.updateContent(content, Integer.parseInt(eid));
		return status;
	}
	
	//更新
	@RequestMapping(value="/asCkeditorContent/updateContent",method=RequestMethod.POST)
	@ResponseBody
	public int updateContent(HttpServletRequest request){
		String eid = request.getParameter("eid");
		String content = request.getParameter("content");
		System.out.println("*********");
		System.out.println(eid+": " + content);
		System.out.println("*********");
		System.out.println("content: " + content);
		 content=content.replaceAll("\"", "'");
		AsECkeditorContent ascc = new AsECkeditorContent();
		ascc.setEid(Integer.parseInt(eid));
		ascc.setContent(content);
		asEstimateServiceI.updateContent(content, Integer.parseInt(eid));
		int status = asEckeditorContentService.updateAsCkeditorContent(ascc);
		return status;
	}
	//查询
	@RequestMapping(value="/asCkeditorContent/findascc",method=RequestMethod.POST)
	@ResponseBody
	public String findascc(HttpServletRequest request){
		String eid = request.getParameter("eid");
		System.out.println("eid:"+eid);
		//AsECkeditorContent ascc = asEckeditorContentService.asEckcontentsByEid(Integer.parseInt(eid));
		AsEstimate asestimate= 	asEstimateServiceI.selectSingleById(Integer.parseInt(eid));
		JSONObject o = new JSONObject();
		if(asestimate != null){
			o.put("id", asestimate.getId());
			o.put("content",asestimate.getContent());
			o.put("eid", asestimate.getId());
		}
		return o.toString();
	}
}
