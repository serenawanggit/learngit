package audit.controller.quality;

import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.quality.vo.AsZljdrwkgbzVo;
import audit.model.quality.vo.Aszlrwxxkgb;
import audit.model.quality.vo.JdTaskVo;
import audit.service.quality.AsJDrwxxServiceI;
import audit.service.quality.AsZlJdrwkgzbServiceI;
@Controller
@RequestMapping("asZLJDrwxxController")
public class AsZLJDrwxxController {
	@Autowired
	private AsJDrwxxServiceI asJDrwxxService;
	@Autowired
	private AsZlJdrwkgzbServiceI asZlJdrwkgzbService;
	/**
	 * 查询阶段任务
	 * @param request
	 * @return
	 */
	@RequestMapping(value="selectJDrw",method=RequestMethod.POST)
	@ResponseBody
	public String selectJDrw(HttpServletRequest request){
		int glJDRWID =Integer.parseInt(request.getParameter("glJDRWID"));
		List<JdTaskVo> list=asJDrwxxService.selectJDRW(glJDRWID);
		return JSONArray.fromObject(list).toString();
	}
	/**
	 * 通过拿到jdrwid 循环比对客观表 jdid得到指标id 在指标表得到值
	 * @param request
	 * @return
	 */
	@RequestMapping(value="selectjdrwzb",method=RequestMethod.POST)
	@ResponseBody
	public String selectjdrwzb(HttpServletRequest request){
		Integer jdid=Integer.parseInt(request.getParameter("jdrwid"));
		if (jdid==null) {
			jdid=0;
		}
		//拿到了部门 部门名称 等几 jgbmdm 阶段任务名称 阶段任务id
		//查询 客观指标 id
		List<AsZljdrwkgbzVo> listzljdrwkgzb=asZlJdrwkgzbService.selectAllZbByJdRwJDRWID(jdid);
		
		int zhibiao=0;
		int weiwangcheng=0;
		ScriptEngineManager scriptEngineMgr = new ScriptEngineManager();
        ScriptEngine jsEngine = scriptEngineMgr.getEngineByName("JavaScript");
			for (int j = 0; j < listzljdrwkgzb.size(); j++) {
				AsZljdrwkgbzVo zlrwkgzb=listzljdrwkgzb.get(j);
				
				String suanfa=zlrwkgzb.getSf();
				if (suanfa==null) {
					suanfa="";
				}
				Integer qiwangzhi=zlrwkgzb.getQwz();
				if (qiwangzhi==null) {
					qiwangzhi=0;
				}
				Integer zhi=zlrwkgzb.getZhi();
				if (zhi==null) {
					zhi=0;
				}
				try {
					if ((jsEngine.eval(qiwangzhi+suanfa+zhi)).equals("true")) {
						zhibiao++;
					}
				} catch (ScriptException e) {
					e.printStackTrace();
				}
		}
		weiwangcheng=(listzljdrwkgzb.size()-zhibiao);
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("listzljdrwkgzb", listzljdrwkgzb);
		map.put("zhibiao",zhibiao);
		map.put("weiwangcheng",weiwangcheng);
		JSONObject result = JSONObject.fromObject(map);
		return result.toString();
	}
	/**
	 * 查询所有阶段任务
	 * @param request
	 * @return
	 */
	@RequestMapping(value="selectAlljdrwzb",method=RequestMethod.POST)
	@ResponseBody
	public String selectAlljdrwzb(HttpServletRequest request){
		List<JdTaskVo> jdTaskVoList=asJDrwxxService.selectAllJDRW();
		return JSONArray.fromObject(jdTaskVoList).toString();
	}
}
