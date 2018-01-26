package audit.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.DefineTemplate;
import audit.service.AsDefineTemplateServiceI;

@Controller("asDefineTemplateController")
public class AsDefineTemplateController {

	private AsDefineTemplateServiceI asDefineTemplateService;
	@Autowired
	public void setAsDefineTemplateService(AsDefineTemplateServiceI asDefineTemplateService){
		this.asDefineTemplateService = asDefineTemplateService;
	}
	
	//保存状态库数据表
	@RequestMapping(value="/asDefineTemplateController/findAllDefine",method = RequestMethod.POST)
	@ResponseBody
	public String findAll(HttpServletRequest request){
		List<DefineTemplate> dts = asDefineTemplateService.selectDefineTemplates();
		return JSONArray.fromObject(dts).toString();
	}
}
