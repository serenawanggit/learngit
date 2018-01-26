package audit.controller.hr;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import audit.model.hr.HrTableField;
import audit.service.hr.HrTableFieldServiceI;

@Controller
@RequestMapping("hrTableFieldController")
public class HrTableFieldController {
	@Autowired
	HrTableFieldServiceI hrTableFieldService;
	
	/**
	 * 更具 表id 查询表字段
	 * @param request
	 * @param mav
	 * @param hrtableid
	 * @return
	 */
	@RequestMapping("selectByTableId")
	public ModelAndView selectByTableId(HttpServletRequest request,ModelAndView mav,
			@RequestParam("hrtableid")String hrtableid,@RequestParam("isOnlyOne")String isOnlyOne){
		List<HrTableField> list = hrTableFieldService.selectByTableId(Integer.parseInt(hrtableid));
		mav.addObject("list", list);
		mav.addObject("isOnlyOne", isOnlyOne);
		mav.addObject("hrTableId", hrtableid);
		mav.setViewName("page/hr/hr_table_field");
		return mav;
	}
	/**
	 * 创建数据库表
	 * @param hrTableId
	 * @return
	 */
	@RequestMapping("createTable")
	@ResponseBody
	public String createTable(@RequestParam("hrTableId")String hrTableId){
		hrTableFieldService.insertDataTable(hrTableId);
		return hrTableId;
	}
	/**
	 * 新增
	 * @param fieldName
	 * @param fieldDataName
	 * @param hrTableId
	 * @param fieldType
	 * @param fieldLength
	 * @param measureId
	 * @param measureName
	 * @param remark
	 * @return
	 */
	@RequestMapping("insertSelective")
	@ResponseBody
	public String insertSelective(@RequestParam("fieldName")String fieldName,
			@RequestParam("fieldDataName")String fieldDataName,
			@RequestParam("hrTableId")String hrTableId,
			@RequestParam("fieldType")String fieldType,
			@RequestParam("fieldLength")String fieldLength,
			@RequestParam("measureId")String measureId,
			@RequestParam("measureName")String measureName,
			@RequestParam("remark")String remark){
		HrTableField record=new HrTableField();
		record.setFieldName(fieldName);
		record.setFieldDataName(fieldDataName);
		record.setHrTableId(Integer.parseInt(hrTableId));
		record.setFieldType(Integer.parseInt(fieldType));
		record.setFieldLength(fieldLength.equals("") ? 0:Integer.parseInt(fieldLength));
		record.setMeasureId(measureId.equals("") ? 0 :Integer.parseInt(measureId));
		record.setMeasureName(measureName);
		record.setRemark(remark);
		
		int i = hrTableFieldService.insertSelective(record);
		return JSONObject.fromObject(i).toString();
	}
	/**
	 * 更新 位置
	 * @param position
	 * @param where
	 * @return
	 */
	@RequestMapping("updatePosition")
	@ResponseBody
	public String updatePosition(@RequestParam("position")String position,
			@RequestParam("where")String where){
		int i = hrTableFieldService.updatePosition(position, where);
		return JSONObject.fromObject(i).toString();
	}
	/**
	 * 根据表名查询该表是否被创建
	 * @param tabName
	 * @return
	 */
	@RequestMapping("searchTab")
	@ResponseBody
	public String searchTab(@RequestParam("tabID")String tabID){
		int i = hrTableFieldService.searchTab(tabID);
		return i > 0 ? "true":"false";
	}
	
	@RequestMapping("addField")
	@ResponseBody
	public String addField(@RequestParam("hrTableId")String hrTableId,
						@RequestParam("fieldDataName")String fieldDataName,
						@RequestParam("fieldType")String fieldType,
						@RequestParam("fieldLength")String fieldLength,
						@RequestParam("fieldName")String fieldName,
						@RequestParam("measureId")String measureId,
						@RequestParam("measureName")String measureName,
						@RequestParam("remark")String remark){
		//执行新增字段
		hrTableFieldService.addField(hrTableId,fieldDataName,fieldType,fieldLength);
		//新增表字段到记录表中
		HrTableField record=new HrTableField();
		record.setFieldName(fieldName);
		record.setFieldDataName(fieldDataName);
		record.setHrTableId(Integer.parseInt(hrTableId));
		record.setFieldType(Integer.parseInt(fieldType));
		record.setFieldLength(fieldLength.equals("") ? 0:Integer.parseInt(fieldLength));
		record.setMeasureId(measureId.equals("") ? 0 :Integer.parseInt(measureId));
		record.setMeasureName(measureName);
		record.setRemark(remark);
		
		int i = hrTableFieldService.insertSelective(record);
		return JSONObject.fromObject(i).toString();
		
	}
	
}
