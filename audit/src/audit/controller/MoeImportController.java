package audit.controller;

import java.io.UnsupportedEncodingException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import com.alibaba.fastjson.JSONObject;
import audit.common.ServiceResult;
import audit.service.MoeImportServices;
import audit.util.CookieUtil;
import audit.util.DBConnection;

@Controller
@RequestMapping("moeImport")
public class MoeImportController   {
 
	@Autowired
	 private MoeImportServices moeImportServices;
	
	private static int ccc=0;
	
	
    @RequestMapping("showPage")
    @ResponseBody
	public String showPage(HttpServletRequest request){
    	ServiceResult<Object> serviceResult= moeImportServices.findMOETable(request);
		return JSONObject.toJSONString(serviceResult);
	}
    /**
     *填报人导入数据
     * @param request
     * @param response
     * @return
     */
    @RequestMapping("importMORTable")
    @ResponseBody
    public String importMORTable(HttpServletRequest request,HttpServletResponse response){
    	int id =Integer.parseInt(request.getParameter("idxxx"));
    	String insert_version=request.getParameter("insert_version");
    	int userId = 0;
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie( request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
    	// 转型为MultipartHttpRequest：     
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;     
        // 获得文件：     
        MultipartFile file = multipartRequest.getFile("file");
    	moeImportServices.importMOETable(file, insert_version, id,userId);
		return null;
    }
    
    /**
     * 填报人查看数据
     * @param request
     * @param response
     * @return
     */
    @RequestMapping("showData")
    @ResponseBody
    public String showData(HttpServletRequest request,HttpServletResponse response){
    //	int state=Integer.parseInt(request.getParameter("state"));
    	int state=1;
    	int tableid =Integer.parseInt(request.getParameter("id"));
    	String insert_version= request.getParameter("insert_version");
    	ServiceResult<Object> result=new ServiceResult<Object>();
    	int userId = 0;
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie( request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
    	try {
    		result=	moeImportServices.showData(state, tableid, insert_version,userId);
		} catch (Exception e) {
			e.printStackTrace();
		}
    	return JSONObject.toJSONString(result);
    }
    
    /**
     * 填报人提交
     * @param request
     * @return
     */
    @RequestMapping("TBRsubmitData")
    @ResponseBody
    public String TBRsubmitData(HttpServletRequest request){
    	int tbztid=Integer.parseInt(request.getParameter("tbztid"));
    	moeImportServices.updateTBZTByid(tbztid);
		return null;
    }
    
    /**
     * 审核人查看任务进度
     * @param request
     * @return
     */
    @RequestMapping("SHRLookFirstData")
    @ResponseBody
    public String SHRLookFirstData(HttpServletRequest request) {
    	int tableid=Integer.parseInt(request.getParameter("tableid"));
    	String insert_version=request.getParameter("insert_version");
    	
    	String userId = "";
		String userName = "";
		try {
			userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
			userName = CookieUtil.getValueByCookie(request, "uvocookie", "name");
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
		ServiceResult<Object> serviceResult=moeImportServices.findSHRLookData(insert_version, tableid,Integer.parseInt(userId));
		return JSONObject.toJSONString(serviceResult);
	}
    /**
     * 审核人查看数据
     * @return
     */
    @RequestMapping("SHRLooksecondData")
    @ResponseBody
    public String SHRLooksecondData(HttpServletRequest request){
    	int tableid=Integer.parseInt(request.getParameter("tableid"));
    	String insert_version=request.getParameter("insert_version");
    	int tbr=Integer.parseInt(request.getParameter("tbr"));
    	ServiceResult<Object> result=new ServiceResult<Object>();
    	int userId = 0;
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie( request, "uvocookie", "id"));
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		}
    	try {
    		result=moeImportServices.showData(1, tableid, insert_version,tbr);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return JSONObject.toJSONString(result);
    }
    
    
    @RequestMapping("passOrNotPass")
    @ResponseBody
    public String passOrNotPass(HttpServletRequest request ){
    	int state=Integer.parseInt(request.getParameter("state"));
    	int id=Integer.parseInt(request.getParameter("id"));
    	moeImportServices.passOrNotPass(state, id);
		return null;
    }
    
    
    @RequestMapping("showsbdata")
    @ResponseBody
    public String showsbdata(HttpServletRequest request){
         String insert_version=request.getParameter("time");
         int id=Integer.parseInt(request.getParameter("id"));
		 return JSONObject.toJSONString( moeImportServices.findSBData(id, insert_version));
    }
    
    
    @RequestMapping("confirmPass")
    @ResponseBody
    public String confirmPass(HttpServletRequest request){
    	String userlist =request.getParameter("userlist");
    	String showName =request.getParameter("showname");
    	String time=request.getParameter("time");
    	int tableid=Integer.parseInt(request.getParameter("tableid"));
		return JSONObject.toJSONString(moeImportServices.extractData(userlist,showName,time,tableid));
    }

    @RequestMapping("editdata")
    @ResponseBody
    public String editdata(HttpServletRequest request){
    	String value= request.getParameter("value");
    	int dataid=Integer.parseInt(request.getParameter("dataid"));
        int tablename=Integer.parseInt(request.getParameter("tablename"));
        String dataname=request.getParameter("dataname");
        moeImportServices.editdata(value,dataid,tablename,dataname);
		return null;
    }
    
    @RequestMapping("downdata")
    @ResponseBody
    public String downdata(HttpServletRequest request,HttpServletResponse response){
    	int id =Integer.parseInt(request.getParameter("id"));
    	String insert_version=request.getParameter("Tinsert_version");
    	int userId = 0;
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie( request, "uvocookie", "id"));
			moeImportServices.downdata(id, insert_version, userId, response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
    }
    
    @RequestMapping("newCheck")
    @ResponseBody
    public String newCheck(HttpServletRequest request){
        int id=	Integer.parseInt(request.getParameter("id"));
        String insert_version=request.getParameter("version");
        int userId = 0;
		try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie( request, "uvocookie", "id"));
			moeImportServices.checkdata(id, insert_version, userId);
			String sql="update MOE_REPORT_TABLE set TBZT=3 ,SHZT=0  where  TABLE_ID="+id+" and tbr="+userId+" and insert_version='"+insert_version+"';";
			DBConnection.Add(sql);
		} catch (Exception e) {
			String sql="update MOE_REPORT_TABLE set TBZT=2 ,SHZT=0  where  TABLE_ID="+id+" and tbr="+userId+" and insert_version='"+insert_version+"';";
			try {
				DBConnection.Add(sql);
			} catch (Exception e1) {
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
		return null;
    }
    
    @RequestMapping("cleanData")
    @ResponseBody
    public String cleanData(HttpServletRequest request){
    	 int id=	Integer.parseInt(request.getParameter("id"));
         String insert_version=request.getParameter("version");
         int userId = 0;
         try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie( request, "uvocookie", "id"));
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
         moeImportServices.cleanData(id,insert_version,userId);
		return null;
    }
    
    @RequestMapping("importdowndata")
    @ResponseBody
    public String importdowndata(HttpServletRequest request,HttpServletResponse response){
    	int id=Integer.parseInt(request.getParameter("id"));
    	String inser_version=request.getParameter("Tinsert_version");
    	try {
			moeImportServices.importSBdata(id,inser_version,response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
    }
    
    @RequestMapping("shDataImport")
    @ResponseBody
    public String shDataImport(HttpServletRequest request,HttpServletResponse response){
    	int id=Integer.parseInt(request.getParameter("id"));
    	String inser_version=request.getParameter("Tinsert_version");
    	int tbr=Integer.parseInt(request.getParameter("tbr"));
    	try {
			moeImportServices.shDataImport(id,inser_version,tbr,response);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
    }
    
    @RequestMapping("showsbdataForJYB")
    @ResponseBody
    public String showsbdataForJYB(HttpServletRequest request,HttpServletResponse response){
    	String insert_version=request.getParameter("time");
        int id=Integer.parseInt(request.getParameter("id"));
        int userId = 0;
    	ServiceResult<Object> result=new ServiceResult<Object>();
        try {
			userId = Integer.parseInt(CookieUtil.getValueByCookie( request, "uvocookie", "id"));
			result = moeImportServices.findsbdataForJYB(id,insert_version,userId);
		}catch (Exception e) {
			e.printStackTrace();
		}
		return JSONObject.toJSONString(result);
    }
}
