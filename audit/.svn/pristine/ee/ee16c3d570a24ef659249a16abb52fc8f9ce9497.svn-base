package audit.controller.access;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.common.JsonResult;
import audit.common.ServiceResult;
import audit.controller.quality.UserTaskController;
import audit.model.assess.AsAccessStatusEstimationModel;
import audit.service.access.AsAccessStatusServiceI;
import audit.util.CookieUtil;

@Controller
@RequestMapping("asAccessStatusController")
public class AsAccessStatusController {
	private final static Logger log = Logger.getLogger(UserTaskController.class); 
	@Autowired
	  private AsAccessStatusServiceI asAccessStatusServiceI ;
	
		/**
		 * 获取评估体系列表
		 * @return
		 */
	@RequestMapping(value="getSumEstimationData",method=RequestMethod.POST)
	@ResponseBody
	public String getSumEstimationData(){
		JSONObject jsonObject=new JSONObject();
		ArrayList<Map<String, Object>> estimationList=asAccessStatusServiceI.getSumEstimationData();
		ArrayList<Map<String, Object>> yearList=asAccessStatusServiceI.getYearData();
		if(estimationList.size()>0){
			jsonObject.put("flag",1);//成功
			JSONArray jsonArray=JSONArray.fromObject(estimationList);
			jsonObject.accumulate("estimationList", jsonArray);
			
			JSONArray yearArray=JSONArray.fromObject(yearList);
			jsonObject.accumulate("yearList", yearArray);
		}
		else{
			jsonObject.put("flag",0);//失败
		}
		
		return jsonObject.toString();
	}
	/**
	 * 获取对应评估体系下的三级指标 以及明细数据
	 * @return
	 */
	@RequestMapping(value="getSumMingXiData",method=RequestMethod.POST)
	@ResponseBody
	public String getSumMingXiData(HttpServletRequest request,@RequestParam("estimationId")Integer estimationId,@RequestParam("year")Integer year){
		String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
			log.error("获取用户id失败:"+userId);
		}
		JSONObject jsonObject=new JSONObject();
		//获取三级指标
		List<AsAccessStatusEstimationModel> estimationModel=asAccessStatusServiceI.getSumEstimationModel(estimationId);
		//获取专业的明细数据
		List<Map<String, Object>> mingXiList=asAccessStatusServiceI.getSumMingXiData(Integer.parseInt(userId),estimationId,year);
		if(estimationModel.size()>0){
			jsonObject.put("flag",1);//成功
			jsonObject.put("estimationList", estimationModel);
			jsonObject.put("mingXijsonArray", mingXiList);
			
		}
		else{
			jsonObject.put("flag",0);//失败
		}
		return jsonObject.toString();
	}

	/**
	 * 获取存在数据的 年份数据
	 * @return
	 */
	@RequestMapping(value="getYearData",method=RequestMethod.POST)
	@ResponseBody
	public String getYearData(){
		JSONObject jsonObject=new JSONObject();
		ArrayList<Map<String, Object>> yearList=asAccessStatusServiceI.getYearData();
		if(yearList.size()>0){
			jsonObject.put("flag",1);//成功
			JSONArray jsonArray=JSONArray.fromObject(yearList);
			jsonObject.accumulate("yearList", jsonArray);
		}
		else{
			jsonObject.put("flag",0);//失败
		}
		
		return jsonObject.toString();
	}
	/**
	 * 获取评估状态数据
	 * @return
	 */
	@RequestMapping(value="getStatusEstimationData",method=RequestMethod.POST)
	@ResponseBody
	public String getStatusEstimationData(HttpServletRequest request,@RequestParam("year")Integer year){
		JSONObject jsonObject=new JSONObject();
		ArrayList<Map<String, Object>> statusEstimation=asAccessStatusServiceI.getStatusEstimationData(year);
		if(statusEstimation.size()>0){
			jsonObject.put("flag",1);//成功
			JSONArray jsonArray=JSONArray.fromObject(statusEstimation);
			jsonObject.accumulate("statusList", jsonArray);
		}
		else{
			jsonObject.put("flag",0);//失败
		}
		
		return jsonObject.toString();
	}
	/**
	 * 获取一级评估指标和专业分数 进行均值分析
	 * year:年份  estimationID：评估体系类型  specialityID：专业id
	 * @return
	 */
	@RequestMapping(value="getAnalysisAvgData",method=RequestMethod.POST)
	@ResponseBody
	public String getAnalysisAvgData(HttpServletRequest request,
			@RequestParam("year")Integer year,
			@RequestParam("estimationID")Integer estimationID){
		JSONObject jsonObject=new JSONObject();
		ArrayList<Map<String, Object>> dataList=asAccessStatusServiceI.getAnalysisAvgData(year,estimationID);
		if(dataList.size()>0){
			jsonObject.put("flag",1);//成功
			JSONArray jsonArray=JSONArray.fromObject(dataList);
			jsonObject.accumulate("analysisAvgList", jsonArray);
		}
		else{
			jsonObject.put("flag",0);//失败
		}
		
		return jsonObject.toString();
	}
	/**
	 * 获取 均值分析界面的初始化数据
	 * @return 年份 评估体系  专业
	 */
	@RequestMapping(value="getAnalysisInitData",method=RequestMethod.POST)
	@ResponseBody
	public String getAnalysisInitData(){
		JSONObject jsonObject=new JSONObject();
		ArrayList<Map<String, Object>> yearList=asAccessStatusServiceI.getYearData();
		ArrayList<Map<String, Object>> estimationList=asAccessStatusServiceI.getSumEstimationData();
		if(yearList.size()>0){
			jsonObject.put("flag",1);//成功
			JSONArray yearArray=JSONArray.fromObject(yearList);
			JSONArray estimationArray=JSONArray.fromObject(estimationList);
			jsonObject.accumulate("yearList", yearArray);
			jsonObject.accumulate("estimationList", estimationArray);
			System.out.println("##############   "+yearList.get(0).get("access_year").toString());
			ArrayList<Map<String, Object>> specialityList=asAccessStatusServiceI.getSpecialityData(Integer.parseInt(yearList.get(0).get("access_year").toString()));
			JSONArray specialityArray=JSONArray.fromObject(specialityList);
			jsonObject.accumulate("specialityList", specialityArray);
		}
		else{
			jsonObject.put("flag",0);//失败
		}
		
		return jsonObject.toString();
	}
	/**
	 * 结果分析-均值分析--根据年份获取专业列表
	 * @return 专业列表
	 */
	@RequestMapping(value="changeAvgAccessYear",method=RequestMethod.POST)
	@ResponseBody
	public String changeAvgAccessYear(HttpServletRequest request,@RequestParam("year")Integer year){
		JSONObject jsonObject=new JSONObject();
		ArrayList<Map<String, Object>> specialityList=asAccessStatusServiceI.getSpecialityData(year);
		if(specialityList.size()>0){
			jsonObject.put("flag",1);//成功
			JSONArray specialityArray=JSONArray.fromObject(specialityList);
			jsonObject.accumulate("specialityList", specialityArray);
		}
		else{
			jsonObject.put("flag",0);//失败
		}
		
		return jsonObject.toString();
	}
	
	/**
	 * 评分总表--大分类数据
	 * @param request
	 * @param year
	 * @param standardId
	 * @return
	 * @author yjq
	 * 2015-7-10
	 */
	@RequestMapping("getBigCategoryData")
	@ResponseBody
	public String getFirstLevelScore(HttpServletRequest request,
			@RequestParam("year")String year,
			@RequestParam("standardId")Integer standardId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = asAccessStatusServiceI.getFirstLevelScore(year, standardId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 分项分析
	 * @param request
	 * @param year
	 * @param standardId
	 * @return
	 * @author yjq
	 * 2015-7-14
	 */
	@RequestMapping("subAnalysis")
	@ResponseBody
	public String subAnalysis(HttpServletRequest request,
			@RequestParam("year")String year,
			@RequestParam("standardId")Integer standardId) {
		JsonResult jsonResult = new JsonResult();
		ServiceResult<Map<String,Object>> serviceResult = asAccessStatusServiceI.subAnalysis(year, standardId);
		jsonResult.setData(serviceResult.getData());
		jsonResult.setOk(serviceResult.isOk());
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	
	
}
