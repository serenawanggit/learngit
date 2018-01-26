package audit.controller.hr;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONObject;

import audit.model.hr.HrTableCategory;
import audit.service.hr.HrTableCategoryServiceI;

@Controller
@RequestMapping("hrTableCategoryController")
public class HrTableCategoryController {
	@Autowired
	private HrTableCategoryServiceI categoryService;
	/**
	 * 查询所有分类
	 * @return
	 */
	@RequestMapping("selectAll")
	public ModelAndView selectAll(HttpServletRequest request,ModelAndView mav){
		List<HrTableCategory> list = categoryService.selectAll();
		mav.addObject("categoryList", list);
		mav.setViewName("page/hr/hr_main");
		return mav;
	}
	/**
	 * 修改
	 * @return
	 */
	@RequestMapping("updateByPrimaryKeySelective")
	@ResponseBody
	public String updateByPrimaryKeySelective(){
		return null;
		
	}
	/**
	 * 新增
	 * @return
	 */
	@RequestMapping("insertSelective")
	@ResponseBody
	public String insertSelective(@RequestParam("parentCategory")String parentCategory,@RequestParam("parentId")String parentId){
		HrTableCategory record=new HrTableCategory();
		record.setParentId(Integer.parseInt(parentId));
		record.setCategoryName(parentCategory);
		int i = categoryService.insertSelective(record);
		return JSONObject.toJSONString(i);
		
	}
}
