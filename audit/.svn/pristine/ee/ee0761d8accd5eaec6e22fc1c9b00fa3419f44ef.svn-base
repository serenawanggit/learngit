package audit.controller.hr;

import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.util.CellRangeAddress;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import audit.common.ServiceResult;
import audit.model.hr.HrTableCategoryVo;
import audit.model.hr.HrTableOperationLog;
import audit.model.hr.HrTableTotalVo;
import audit.service.hr.HrImportService;
import audit.util.CookieUtil;
import audit.util.StringUtil;

/**
 * 历史数据导入管理
 * @author yjq
 * 2015-10-15
 */
@Controller
@RequestMapping("hrImport")
public class HrImportController {

	private POIFSFileSystem fs;
    private HSSFWorkbook wb;
    private HSSFSheet sheet;
    private HSSFRow row;
    private List<CellRangeAddress> list;
    private String contents[][] ;
	
	@Resource
	private HrImportService hrImportService;
	
	/**
	 * 数据导入的主页面
	 * @param request
	 * @param mav
	 * @return
	 * @author yjq
	 * 2015-10-9
	 */
	@RequestMapping("viewhighSchool")
	public ModelAndView viewhighSchool(HttpServletRequest request, 
			ModelAndView mav) {
		mav.setViewName("page/hr/highSchoolPage");
		return mav;
	}
	
	
    /*数据的链接*/
  	@RequestMapping("view")
	public ModelAndView view(HttpServletRequest request, 
			ModelAndView mav) {
		mav.setViewName("page/hr/dataImport");
		return mav;
	}
	/**
	 * 树状表结构的加载
	 * @param request
	 * @return 表分类--表--表字段
	 * @author yjq
	 * 2015-10-9
	 */
	@RequestMapping("getAllCategory")
	@ResponseBody
	public String getAllCategory(HttpServletRequest request) {
		ServiceResult<List<HrTableCategoryVo>> serviceResult = hrImportService.getAllCategoryVo();
		return JSONObject.toJSONString(serviceResult);
	}
	
	/**
	 * 树状表结构的加载--这个方法不用了
	 * @param request
	 * @return
	 * @author yjq
	 * 2015-10-9
	 */
	@RequestMapping("getTableByCategoryId")
	@ResponseBody
	@Deprecated
	public String getTableByCategoryId(HttpServletRequest request,
			@RequestParam("categoryId")Integer categoryId) {
		ServiceResult<List<HrTableTotalVo>> serviceResult = hrImportService.getTableByCategoryId(categoryId);
		return JSONObject.toJSONString(serviceResult);
	}
	
	/**
	 * 根据所选表获取历史导入记录
	 * @param request
	 * @param tableId
	 * @return
	 * @author yjq
	 * 2015-10-9
	 */
	@RequestMapping("getImportHistory")
	@ResponseBody
	public String getImportHistory(HttpServletRequest request,
			@RequestParam("tableId")Integer tableId) {
		ServiceResult<List<HrTableOperationLog>> serviceResult = hrImportService.getImportHistory( tableId);
		return JSONObject.toJSONString(serviceResult);
	}
	
	//根据所选表下载模板--调用TQCC里的方法 com/zenith/tqcc/servlet/ExportTableToExcel.java
	
	/**
	 * 导入模板，提取数据并返回给页面
	 * @param request
	 * @param file
	 * @return
	 * @author yjq
	 * 2015-10-20
	 */
	@RequestMapping("importData")
    @ResponseBody
    public String importTest(HttpServletRequest request,
    		@RequestParam("file") MultipartFile file) {
    	InputStream is2 = null;
		try {
			is2 = file.getInputStream();
		} catch (IOException e) {
			e.printStackTrace();
		}
        String[][] contents = readExcelContent(is2);
        return JSONArray.toJSONString(contents);
	}
	 /**
     * 读取Excel数据内容
     * @param InputStream
     * @return Map 包含单元格数据内容的Map对象
     */
    public String[][] readExcelContent(InputStream is) {
        list = new ArrayList<CellRangeAddress>();
        try {
            fs = new POIFSFileSystem(is);
            wb = new HSSFWorkbook(fs);
        } catch (IOException e) {
            e.printStackTrace();
        }
        sheet = wb.getSheetAt(0);
        // 得到总行数
        int rowNum = sheet.getLastRowNum();
        // 正文内容应该从第二行开始,第一行为表头的标题
        contents = new String[rowNum+2][];//方便查看
        
        for (int i = 0; i <= rowNum; i++) {
            row = sheet.getRow(i);
            if(row == null){
            	continue;
            }
            int j = 0;//循环所有的列
            int k = 0;//存储列值的编号
            int colNum = sheet.getRow(0).getPhysicalNumberOfCells();
            contents[i+1] = new String[colNum+1];//方便查看
            while (j < colNum) {
                // 每个单元格的数据内容用"-"分割开，以后需要时用String类的replace()方法还原数据
                // 也可以将每个单元格的数据设置到一个javabean的属性中，此时需要新建一个javabean
                // str += getStringCellValue(row.getCell((short) j)).trim() +
                // "-";
            	HSSFCell cell = row.getCell(j);
            	/*if(cell == null){
            		colNum ++;
            		j++;
            		continue;
            	}*/
            	if(isMergedRegion(sheet, i, j)){
            		 j++;
            		 continue;
            	}
            	String cellvalue=" ";
            	if (cell==null) {
            		cellvalue=" ";
				}else{
            	cell.setCellType(HSSFCell.CELL_TYPE_STRING);
            	cellvalue = cell.getRichStringCellValue().getString();
				}
                contents[i+1][k+1] = cellvalue;
                j++;
                k++;
            }
        }
        return contents;
    }
    
    /**  
     * 判断指定的单元格是否是合并单元格  
     * @param sheet  
     * @param row  
     * @param column  
     * @return  
     */  
    public boolean isMergedRegion(HSSFSheet sheet , int row , int column){  
        int sheetMergeCount = sheet.getNumMergedRegions();  
          
        for(int i = 0 ; i < sheetMergeCount ; i++ ){  
        	CellRangeAddress ca = sheet.getMergedRegion(i);
            int firstColumn = ca.getFirstColumn();  
            int lastColumn = ca.getLastColumn();  
            int firstRow = ca.getFirstRow();  
            int lastRow = ca.getLastRow();  
              
            if(row >= firstRow && row <= lastRow){  
                if(column >= firstColumn && column <= lastColumn){  
                    if(list.contains(ca)){
                    	return true ;  
                    }else{
                    	list.add(ca);
                    }
                }  
            }  
        }  
        return false ;  
    } 
    
    
	/**
	 * 保存数据
	 * @param request
	 * @param data
	 * @param tableId
	 * @return
	 * @author yjq
	 * 2015-10-14
	 */
    @RequestMapping("saveData")
	@ResponseBody
	public String saveData(HttpServletRequest request,
			@RequestParam("dataStr")String data,
			@RequestParam("statisticsTime")String statisticsTime,
			@RequestParam("tableId")Integer tableId) {
    	String userId = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
		} catch (UnsupportedEncodingException e) {
		}
    	ServiceResult<Boolean> serviceResult = hrImportService.saveData(tableId, data, userId, statisticsTime);
    	return JSONObject.toJSONString(serviceResult);
	}
	
    /**
	 * 删除数据
	 * @param request
	 * @param data
	 * @param tableId
	 * @return
	 * @author yjq
	 * 2015-10-14
	 */
    @RequestMapping("deleteData")
	@ResponseBody
	public String deleteData(HttpServletRequest request,
			@RequestParam("ids")String ids) {
    	ServiceResult<Boolean> serviceResult = hrImportService.deleteData(ids);
    	return JSONObject.toJSONString(serviceResult);
	}
	
	/**
	 * 根据记录获取数据
	 * @param request
	 * @param id
	 * @return
	 * @author yjq
	 * 2015-10-14
	 */
    @RequestMapping("getDataByHistoryId")
	@ResponseBody
	public String getDataByHistoryId(HttpServletRequest request,
			@RequestParam("id")Integer id) {
		ServiceResult<Object> serviceResult = hrImportService.getDataByHistoryId(id);
		return JSONObject.toJSONString(serviceResult);
	}
    /**
     * 校验教师激励计划 数据
     * @param request
     * @param id
     * @return
     */
    @RequestMapping("checkDataByHistoryId")
   	@ResponseBody
   	public String checkDataByHistoryId(HttpServletRequest request,
   			@RequestParam("id")Integer id) {
   		ServiceResult<Object> serviceResult = hrImportService.CDataByHistoryId(id);
   		return JSONObject.toJSONString(serviceResult);
   	}
    /**
     * 教师激励计划最终提交上报
     * @param request
     * @param id
     * @return
     */
    @RequestMapping("subDataStatusByHistoryId")
   	@ResponseBody
   	public String subDataStatusByHistoryId(HttpServletRequest request,
   			@RequestParam("id")Integer id) {
   		 hrImportService.subDataStatusByHistoryId(id);
   		return null;
   	}
    /**
     * 查询上报拼接结果
     * @param request
     * @param tablename
     * @return
     */
    @RequestMapping("subup")
   	@ResponseBody
   	public String subup(HttpServletRequest request,
   			@RequestParam("tablename")String tablename,@RequestParam("tdtime")String tdtime) {
    	ServiceResult<Object> serviceResult=hrImportService.findTableData(tablename,tdtime);
   		return JSONObject.toJSONString(serviceResult);
   	}
    /**
     * 验证上报用户信息
     * @param request
     * @param username
     * @param pwd
     * @return
     */
    @RequestMapping("loginyz")
   	@ResponseBody
   	public String loginyz(HttpServletRequest request,
   			@RequestParam("username")String username,@RequestParam("pwd")String pwd) {
    /*	ServiceResult<Object> serviceResult=hrImportService.loginyz(username, pwd);*/
    	ServiceResult<Object> serviceResult=hrImportService.loginyzTwo(username, pwd);
   		return JSONObject.toJSONString(serviceResult);
    	/*return null;*/
   	}
    
    @RequestMapping("confirmation")
   	@ResponseBody
   	public String confirmation(HttpServletRequest request) {
    	String userxx=  request.getParameter("userxx");
    	String tablename=   request.getParameter("tablename");
    	String tbtime= request.getParameter("tdtime");
    	int id=Integer.parseInt(request.getParameter("id"));
    	ServiceResult<Object> serviceResult= hrImportService.confirmationReport(userxx,tablename,tbtime,id);
   		return JSONObject.toJSONString(serviceResult);
   	}
}
