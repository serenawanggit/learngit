package audit.controller.hr;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import audit.model.hr.HRZBResultVo;
import audit.model.hr.HrTableTotal;
import audit.service.hr.HrTableTotalServiceI;

@Controller
@RequestMapping("hrTableTotalController")
public class HrTableTotalController {
	@Autowired
	private HrTableTotalServiceI hrTableTotalService;
	
	/**
	 * 分页查询第一页
	 * @param start
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("searchAll")
	@ResponseBody
	public String searchAll(@RequestParam("start")String start,@RequestParam("pageSize")String pageSize,@RequestParam("tabName")String tabName){ 
		List<HrTableTotal> list = hrTableTotalService.searchAll(Integer.parseInt(start), Integer.parseInt(pageSize),tabName);
		return JSONArray.fromObject(list).toString();
	}
	/**
	 * 查询总记录条数
	 * @return
	 */
	@RequestMapping("searchPageCount")
	@ResponseBody
	public String searchPageCount(@RequestParam("tabName")String tabName){ 
		return JSONArray.fromObject(hrTableTotalService.searchCount(tabName)).toString();
	}
	/**
	 * 修改
	 * @param id
	 * @param tablename
	 * @param tabledataname
	 * @param belongtype
	 * @param ismust
	 * @param categoryid
	 * @param isoriginal
	 * @param remark
	 * @param isonlyone
	 * @param tablestyle
	 * @return
	 */
	@RequestMapping("updateByPrimaryKeySelective")
	@ResponseBody
	public String updateByPrimaryKeySelective(@RequestParam("id")String id,@RequestParam("tablename")String tablename,@RequestParam("tabledataname")String tabledataname,
			@RequestParam("belongtype")String belongtype,@RequestParam("ismust")String ismust,@RequestParam("categoryid")String categoryid,
			@RequestParam("isoriginal")String isoriginal,@RequestParam("remark")String remark,@RequestParam("isonlyone")String isonlyone){
		HrTableTotal record=new HrTableTotal();
		record.setId(Integer.parseInt(id));//id
		record.setTableName(tablename);//中文表名
		record.setTableDataName(tabledataname);//数据库表名
		record.setBelongType(Integer.parseInt(belongtype));
		record.setIsMust(Integer.parseInt(ismust));
		record.setCategoryId(categoryid.equals("") ? 0:Integer.parseInt(categoryid));//分类id
		record.setIsOriginal(Integer.parseInt(isoriginal));
		record.setIsOnlyOne(Integer.parseInt(isonlyone));//是否存储一条记录 （0,是;1,不是）
		record.setRemark(remark);//备注
		
		int i = hrTableTotalService.updateByPrimaryKeySelective(record);
		return JSONObject.fromObject(i).toString();
	}
	/**
	 * 修改时候的初始化数据显示
	 * @param id
	 * @return
	 */
	@RequestMapping("selectByPrimaryKey")
	@ResponseBody
	public String selectByPrimaryKey(@RequestParam("id")String id){
		HrTableTotal htableTotal = hrTableTotalService.selectByPrimaryKey(Integer.parseInt(id));
		return JSONObject.fromBean(htableTotal).toString();
	}
	
	/**
	 * 新增
	 * @param tablename
	 * @param tabledataname
	 * @param belongtype
	 * @param ismust
	 * @param categoryid
	 * @param isoriginal
	 * @param remark
	 * @param isonlyone
	 * @return
	 */
	@RequestMapping("insertSelective")
	@ResponseBody
	public String insertSelective(@RequestParam("tablename")String tablename,@RequestParam("tabledataname")String tabledataname,
			@RequestParam("belongtype")String belongtype,@RequestParam("ismust")String ismust,@RequestParam("categoryid")String categoryid,
			@RequestParam("isoriginal")String isoriginal,@RequestParam("remark")String remark,@RequestParam("isonlyone")String isonlyone){
		HrTableTotal record=new HrTableTotal();
		record.setTableName(tablename);//中文表名
		record.setTableDataName(tabledataname);//数据库表名
		record.setBelongType(Integer.parseInt(belongtype));
		record.setIsMust(Integer.parseInt(ismust));
		record.setCategoryId(categoryid.equals("") ? 0:Integer.parseInt(categoryid));//分类id
		record.setIsOriginal(Integer.parseInt(isoriginal));
		record.setIsOnlyOne(Integer.parseInt(isonlyone));//是否存储一条记录 （0,是;1,不是）
		record.setRemark(remark);//备注
		
		int i = hrTableTotalService.insertSelective(record);
		return JSONObject.fromObject(i).toString();
	}
	/**
	 * 批量删除
	 * @param id
	 * @return
	 */
	@RequestMapping("deleteMore")
	@ResponseBody
	public String deleteMore(@RequestParam("id")String id){//批量删除
		List<Integer> listID=new ArrayList<Integer>();
		String ids[]=id.split(",");
		for (int i = 0; i < ids.length; i++) {
			listID.add(Integer.parseInt(ids[i]));
		}
		int i = hrTableTotalService.deleteMore(listID);
		return JSONObject.fromObject(i).toString();
	}
	/**
	 * 删除
	 * @param id
	 * @return
	 */
	@RequestMapping("deleteByPrimaryKey")
	@ResponseBody
	public String deleteByPrimaryKey(@RequestParam("id")String id){
		int i = hrTableTotalService.deleteByPrimaryKey(Integer.parseInt(id));
		return JSONObject.fromObject(i).toString();
	}
	/**
	 * 更新tableStyle
	 * @param id
	 * @param tableStyle
	 * @return
	 */
	@RequestMapping("updatetableStyle")
	@ResponseBody
	public String updatetableStyle(@RequestParam("id")String id,@RequestParam("tableStyle")String tableStyle){
		int i = hrTableTotalService.updatetableStyle(Integer.parseInt(id),tableStyle);
		return JSONObject.fromObject(i).toString();
	}
	/**
	 * 获取指标
	 * @return
	 */
	@RequestMapping("searchAllZB")
	@ResponseBody
	public String searchAllZB(@RequestParam("zbfl")String zbfl,
							  @RequestParam("zbName")String zbName,
							  @RequestParam("start")String start,
							  @RequestParam("pageSize")String pageSize){
		List<HRZBResultVo> list = hrTableTotalService.searchAllZB(Integer.parseInt(start), Integer.parseInt(pageSize), zbfl.equals("") ? "":zbfl,zbName.equals("")?"":zbName);
		return JSONArray.fromObject(list).toString();
	}
	/**
	 * 获取指标总记录数
	 * @return
	 */
	@RequestMapping("searchZBCount")
	@ResponseBody
	public String searchZBCount(){
		int i = hrTableTotalService.searchZBCount();
		return JSONArray.fromObject(i).toString();
	}
}
