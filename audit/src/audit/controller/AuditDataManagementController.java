package audit.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import audit.model.AsCjCjrwztb;
import audit.model.AsCtemplateStandard;
import audit.service.AsCjrwztbServices;
import audit.service.AsCtemplateStandardService;
import audit.service.AuditDataManagementServices;
import audit.util.DBConnection;
import audit.util.ShSjbUtil;

@Controller
@RequestMapping("auditDataManagementController")
public class AuditDataManagementController {
  
	@Autowired
	private AuditDataManagementServices auditDataManagementServices;
	
	  @Autowired
	  private AsCjrwztbServices asCjrwztbServices;
	  @Autowired
	  private AsCtemplateStandardService asCtemplateStandardService;
	/**
	 * 查看审核通过的数据
	 * @param request
	 * @return
	 */
	@RequestMapping("showAuditData")
	@ResponseBody
	public String showAuditData(HttpServletRequest request ){
		//auditDataManagementServices.findAllAuditPassData();
		Integer pageSize=10;
		int count=0;
		int totalPage=0;
		String flag = request.getParameter("flag");
		String param = request.getParameter("param");
	    Integer	pageNo = (request.getParameter("pageNo")!=null?Integer.parseInt(request.getParameter("pageNo")):1);
		JSONObject jsonObject=new JSONObject();
		count = auditDataManagementServices.countCjZtSjbs(flag, param);
		System.out.println("总数是："+count);
		//共有多少页
		if (count % pageSize == 0) {
			totalPage = count / pageSize;
		} else {
			totalPage = count / pageSize + 1;
		}
		jsonObject.accumulate("auditData", auditDataManagementServices.findAllAuditPassData(pageNo,pageSize,flag,param));
		jsonObject.accumulate("totalPage", totalPage);
		jsonObject.accumulate("pageNo", pageNo);
		return jsonObject.toString();
	}
	/**
	 * 管理员删除已入库的数据
	 * @param request
	 * @return
	 */
	@RequestMapping("deleteAuditData")
	@ResponseBody
	public String deleteAuditData(HttpServletRequest request){
	    int rwid=Integer.parseInt(request.getParameter("rwid"));
	    int cjmbdm=Integer.parseInt(request.getParameter("cjmbdm"));
	    String MbNameSql=" select * from dbo.AS_C_TEMPLATE where CTEMPLATE_ID="+cjmbdm;
		  String mbname=null;
		  try {
			  ArrayList<HashMap<String, Object>> oArrayList=DBConnection.executeQueryNoParams(MbNameSql);
			  mbname= oArrayList.get(0).get("ctemplate_name").toString();
		  } catch (Exception e1) {
				e1.printStackTrace();
		  }
		  //根据任务id查询采集状态表
		  AsCjCjrwztb asCjCjrwztb= asCjrwztbServices.findCjrecjr(rwid);
		  //根据 标准模版查询对应数据库表名
		  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(cjmbdm);
		  String sql=" update AS_CJ_CJRWZTB set CJZT=0,SHZT=0 where ID="+rwid;
		   sql+="; delete ODS_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+asCjCjrwztb.getCjrwnf()+"' and userid="+asCjCjrwztb.getCjr()+" and cname='"+mbname+"'";
		   System.out.println("呵呵："+sql);
		   try {
			DBConnection.Add(sql);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	/**
	 * 管理员下载已入库的数据
	 */
	@RequestMapping("downPassData")
	@ResponseBody
	public String downPassData(HttpServletRequest request){
		return null;
	}
}
