package audit.controller.access;

import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import audit.common.JsonResult;
import audit.common.ServiceResult;
import audit.model.assess.AsAccessDataInfo;
import audit.service.access.AsAccessDataInfoServiceI;
import audit.util.FileUtil;

@Controller
@RequestMapping("asAccessDataInfoController")
public class AsAccessDataInfoController {
	@Autowired
	private AsAccessDataInfoServiceI asAccessDataInfoService;
	/**
	 * 初始化文件
	 * @author LLP
	 * @return
	 */
	@RequestMapping("searchAssessDataInfo")
	@ResponseBody
	public String searchAssessDataInfo(){
		JsonResult jsonResult=new JsonResult();
		ServiceResult<List<AsAccessDataInfo>> serviceResult = asAccessDataInfoService.searchAssessDataInfo();
		if (serviceResult.isOk()) {
			jsonResult.setData(serviceResult.getData());
			JSONObject json = JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	/**
	 * 查询文件夹下的文件 根据文件夹id查询
	 * @param dataTableId 文件夹id
	 * @author LLP
	 * @return
	 */
	@RequestMapping("searchAssessDataTableInfo")
	@ResponseBody
	public String searchAssessDataTableInfo(@RequestParam("dataTableId")int dataTableId){
		JsonResult jsonResult=new JsonResult();
		ServiceResult<List<AsAccessDataInfo>> serviceResult=asAccessDataInfoService.searchAssessDataTableInfo(dataTableId);
		if (serviceResult.isOk()) {
			jsonResult.setData(serviceResult.getData());
			JSONObject json= JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	/**
	 * 根据主键删除文件
	 * @param dataInfoId
	 * @author LLP
	 * @return
	 */
	@RequestMapping("deleteDataInfoByKey")
	@ResponseBody
	public String deleteDataInfoByKey(@RequestParam("infoIds")String infoIds,
			@RequestParam("dataInfoNames")String dataInfoNames,
			@RequestParam("userFilePath")String userFilePath,
			@RequestParam("dataType")String dataType){
		String[] type=dataType.split(",");
		String[] name=dataInfoNames.split(",");
		FileUtil fileutil=new FileUtil();
		for (int i = 0; i < name.length; i++) {
			String InfoType=type[i];
			String infoname=name[i];
			fileutil.DeleteFolder(userFilePath+"/"+infoname+"."+InfoType);
		}
		
		JsonResult jsonResult=new JsonResult();
		String[] id=infoIds.split(",");
		List<Integer> infoId=new ArrayList<Integer>();
		for (int i = 0; i < id.length; i++) {
			int wenjianid=Integer.parseInt(id[i]);
			infoId.add(wenjianid);
		}
		ServiceResult<Integer> serviceResult = asAccessDataInfoService.deleteByPrimaryKey(infoId);
		if (serviceResult.isOk()) {
			jsonResult.setData(serviceResult.getData());
			JSONObject json= JSONObject.fromBean(jsonResult);
			return json.toString();
		}
		jsonResult.setComment(serviceResult.getComment());
		JSONObject json = JSONObject.fromBean(jsonResult);
		return json.toString();
	}
	
	public static void main(String[] args) {
		FileUtil fileutil=new FileUtil();
		fileutil.DeleteFolder("D://accessFileUser/2123213/scroll.html");
	}
}
