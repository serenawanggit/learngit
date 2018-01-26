package audit.controller.access;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


//import com.sun.xml.rpc.processor.modeler.j2ee.xml.string;


import audit.model.AsCtemplateStandard;
import audit.model.AsCustomVo;
import audit.model.DwVLeadership;
import audit.model.assess.AsAccessDataInfo;
import audit.model.assess.AsAccessGeneralScore;
import audit.model.assess.AsAccessSpecialty;
import audit.service.AsCtemplateStandardService;
import audit.service.AsCustomVoServices;
import audit.service.DwVLeadershipI;
import audit.service.access.AsAccessDataInfoServiceI;
import audit.service.access.AsAccessGeneralScoreServicesI;
import audit.service.access.AsAccessScoreScaleDetailI;
import audit.service.access.AsAccessSpecialtyServiceI;
import audit.service.access.AsaccessSelfScoreServerI;
import audit.service.access.AssessmentSelfScoreVoServiceI;
import audit.util.CookieUtil;
import audit.util.DBConnection;

/**
 * 网评Controller
 * @author yuan
 *
 */
@Controller
@RequestMapping("assessmentSelfScoreController")
public class AssessmentSelfScoreController {
	

	@Autowired
	private  AssessmentSelfScoreVoServiceI assessmentSelfScoreVoServiceI;
	
	@Autowired
	private AsaccessSelfScoreServerI aaccessSelfScoreServerI;
	
	@Autowired
	private AsAccessGeneralScoreServicesI asAccessGeneralScoreServicesI;
	
	@Autowired
	private AsAccessScoreScaleDetailI accessScoreScaleDetailI;
	
	@Autowired
	private AsAccessSpecialtyServiceI asAccessSpecialtyServiceI;
	@Autowired
	private AsAccessDataInfoServiceI asAccessDataInfoServiceI;
	@Autowired
	private DwVLeadershipI dwVLeadershipI;
	  @Autowired
	  private AsCtemplateStandardService asCtemplateStandardService;
	  @Autowired
	  private AsCustomVoServices asCustomVoServices;
	/**
	 * 查看自评分
	 * @param request
	 * @return
	 */
	@RequestMapping("showAssessmentSelfScore")
	@ResponseBody
	public String showAssessmentSelfScore(HttpServletRequest request,HttpServletResponse response){
		//assessmentSelfScoreVoServiceI.selectValues()
		Integer specialtyId=Integer.parseInt(request.getParameter("specialtyid"));
		Integer txId=Integer.parseInt(request.getParameter("txId"));
		Integer syear=Integer.parseInt(request.getParameter("syear"));
		   String userId=request.getParameter("userId");
	    AsAccessSpecialty asAccessSpecialty=	asAccessSpecialtyServiceI.findAsAccessApecialtyBySidAndType(specialtyId,syear);
	    String sname=request.getParameter("name");
	
    	String sql=" SELECT distinct  ";
		sql+="	C.id as threeid,";
		sql+="	c.name as threelevelname,";
		sql+="	C.score as threelevelscore,";	
		sql+="	D.SCORE AS selfscore ,";
		sql+="	d.datas as datas ";
		sql+="	,STUFF((SELECT ','+hb.MEASURE_NAME FROM (select aci.detail_id,aci.measure_id, mm.MEASURE_NAME from as_access_scale_index aci,AS_M_MANAGE mm where aci.measure_id = mm.MEASURE_ID) hb where hb.detail_id= x.detail_id FOR XML PATH('')),1,1,'')  as MEASURE_NAME";
		sql+="	FROM AS_ACCESS_STANDARD_DETAIL A ";
		sql+="	 LEFT JOIN AS_ACCESS_STANDARD_DETAIL B ON A.ID=B.PARENT_ID ";
		sql+="	 LEFT JOIN AS_ACCESS_STANDARD_DETAIL C ON B.ID=C.PARENT_ID ";
		sql+=" LEFT JOIN AS_ACCESS_SELF_EVALUTION_RECORD D ON C.id=D.detail_id and d.access_specialty_id = "+asAccessSpecialty.getId();
		sql+=" left join as_access_scale_index e on e.detail_id=C.id ";
		sql+=" left join (select aci.detail_id,aci.measure_id, mm.MEASURE_NAME from as_access_scale_index aci,AS_M_MANAGE mm where aci.measure_id = mm.MEASURE_ID) x ";
		sql+=" on    x.detail_id =  e.detail_id ";
		sql+=" left join as_access_specialty f on d.access_specialty_id= f.id";
		sql+=" left join AS_ACCESS_INFO g on g.id = f.access_id";
		sql+=" where A.PARENT_ID=0 and A.standard_id= "+txId +" and g.access_year="+syear;
 
		String sql1="";
		sql1+=" SELECT distinct a.id as oneid, ";
		sql1+="    a.name  as onelevelname,";
		sql1+="	a.score as oneLevelscore,";
		sql1+="	B.id as twoid, ";
		sql1+="	B.name as twolevelname,";
		sql1+="	b.score as twolevelscore,";
		sql1+="	C.id as threeid,";
		sql1+="	c.name as threelevelname,";
		sql1+="	C.score as threelevelscore,";
		sql1+="	d.content as content";
		sql1+="    FROM AS_ACCESS_STANDARD_DETAIL A ";
		sql1+="	LEFT JOIN AS_ACCESS_STANDARD_DETAIL B ON A.ID=B.PARENT_ID ";
		sql1+="	LEFT JOIN AS_ACCESS_STANDARD_DETAIL C ON B.ID=C.PARENT_ID";
		sql1+="	left join  AS_ACCESS_SCORE_STANDARD d on c.id=d.detail_id";
		sql1+="   where A.PARENT_ID=0 and A.standard_id="+txId +";";
		
		 ArrayList<Object> params=new ArrayList<Object>();
		 List<HashMap<String, Object>> arrayList=new ArrayList<HashMap<String,Object>>();
		try {
			/*arrayList = assessmentSelfScoreVoServiceI.findZCCL(sql);*/
			arrayList=DBConnection.executeQueryNoParams(sql);
		} catch (Exception e1) {
			e1.printStackTrace();
		}
		 JSONObject jsonObject=new JSONObject();
		 try {
			ArrayList<HashMap<String, Object>> tableList=DBConnection.executeQueryNoParams(sql1);
			
			 //观测点对应的文件名
			 List<Map<String, String>> listFile=new ArrayList<Map<String,String>>();
			 //观测点对应的状态数据
			 List<Map<String, String>> listMeasureName=new ArrayList<Map<String,String>>();
			 for (int i = 0; i < arrayList.size(); i++) {
				 //在线预览
				 String datas=arrayList.get(i).get("datas").toString();
				 String threeLevelId=arrayList.get(i).get("threeid").toString();
				 //用来拼接文件名
				 String addData="";
				//System.out.println(arrayList.get(i).get("threeid")+"----"+arrayList.get(i).get("datas"));
				 Map<String, String> mapFile= new HashMap<String, String>();
				 if (datas.indexOf(",")>0) {
				    String [] a=datas.split(",");
				    for (int j = 0; j < a.length; j++) {
				    	if (a[j].trim().length()>0) {
				    		  AsAccessDataInfo accessDataInfo=	asAccessDataInfoServiceI.findFileNameById(Integer.parseInt(a[j]));
							   // addData+=accessDataInfo.getName()+"#"+accessDataInfo.getAccessDataOnline()+",";
						}
				    }
				   mapFile.put("id",threeLevelId);
				   mapFile.put("value",addData);
				   listFile.add(mapFile);
				 }else {
					  if (datas.trim().length()>0) {
						  AsAccessDataInfo accessDataInfo=	asAccessDataInfoServiceI.findFileNameById(Integer.parseInt(datas));
						  addData+=accessDataInfo.getName()+"#"+accessDataInfo.getAccessDataOnline()+",";
					  }
					   mapFile.put("id",threeLevelId);
					   mapFile.put("value",addData);
					   listFile.add(mapFile);
				}
				 try {
					//状态数据
					String measureName = arrayList.get(i).get("MEASURE_NAME")
							.toString();
					String addMeasureName = "";
					Map<String, String> mapName = new HashMap<String, String>();
					if (measureName.indexOf(",") > 0) {
						String[] names = measureName.split(",");
						for (int j = 0; j < names.length; j++) {
							DwVLeadership dwVLeadership = dwVLeadershipI
									.findValueByZBAndSyearAndName(names[j],
											syear, sname);
							System.out.println(dwVLeadership);
							if (dwVLeadership != null) {
								addMeasureName += names[j] + "("
										+ dwVLeadership.getZhi() + ")。";
							} else {
								addMeasureName += names[j] + "(0)。";
							}
						}
						mapName.put("id", threeLevelId);
						mapName.put("value", addMeasureName);
						listMeasureName.add(mapName);
					} else {
						if (measureName.trim().length() > 0) {
							DwVLeadership dwVLeadership = dwVLeadershipI
									.findValueByZBAndSyearAndName(measureName,
											syear, sname);
							System.out.println(dwVLeadership);
							if (dwVLeadership != null) {
								addMeasureName += measureName + "("
										+ dwVLeadership.getZhi() + ")。";
							} else {
								addMeasureName += measureName + "(0)。";
							}
						}
						mapName.put("id", threeLevelId);
						mapName.put("value", addMeasureName);
						listMeasureName.add(mapName);
					}
				} catch (Exception e) {
					continue;
				}
			 }
			  StringBuffer sBuffer=new StringBuffer();
				ArrayList<Object> params1=new ArrayList<Object>();
				 String selectMXF="";
				 String selectZF="";
			 if( userId==null ||  userId.length()>0){
				 
				  selectMXF+="select * from AS_NEW_WPMXF where TXID="+txId+" and USERID="+userId+" and SYEAR="+syear+" and ZYID="+specialtyId+"";
			      selectZF="select * from AS_NEW_WPZF where txid="+txId+" and zyid="+specialtyId+" and syear="+syear+" and userid="+userId+"";

				  
					try {
						String sql3=" select * from AS_ACCESS_SELF_SCORE_OPINION where userid="+userId+" and specialty_id="+specialtyId+" and syear="+syear;
						 ArrayList<HashMap<String, Object>> userList=  DBConnection.executeQueryNoParams(sql3);
						 if (userList.size()!=0) {
							    sBuffer.append(" select a.Id as onelevelid,a.ALLEGEDPOINT as onelevelname,a.SCORE as onescore,a.ACCESS_SELF_ID as ACCESSSELFID,B.Id AS twoid,b.ALLEGEDPOINT as twoname, ");
							    sBuffer.append("  b.SCORE as twoscore,b.DESCRIPTION asdescription,c.SELF_RATING_NAME as SELFRATINGNAME,c.COMPREHENSIVE_OPINION as opinion , ");
							    sBuffer.append(" d.Id as selfscoreid, d.ACCESS_SELF_SCORE as selfscore,d.ACCESS_ELABORATED as ELABORATED ,e.Id as SCOREOPINIONID , e.SCORE as descore ,e.COMPREHENSIVE_OPINION_CONTENT as OPINIONCONTENT ,");
							    sBuffer.append(" E.ACCESS_SELF_DATE");
							    sBuffer.append(" from AS_ACCESS_SELF_RATING_OPINION as a ");
							    sBuffer.append(" left join AS_ACCESS_SELF_RATING_OPINION b on a.Id=b.PARENT_ID ");
							    sBuffer.append(" left join AS_ACCESS_SELF_RATING_USER c on c.Id=b.access_self_id ");
							    sBuffer.append(" left join AS_ACCESS_SELF_SCORE d  on b.Id= d.OPINION_ID ");
							    sBuffer.append(" left join AS_ACCESS_SELF_SCORE_OPINION e on e.Id=d.SCORE_OPINION_ID ");
							    sBuffer.append(" where a.PARENT_ID=0 ");
							    sBuffer.append(" and e.USERID=? and  e.SPECIALTY_ID=? and e.syear=?");
							    params1.add(userId);
							    params1.add(specialtyId);
							    params1.add(syear);
						 }else {
							    sBuffer.append("  select   a.Id as onelevelid,a.ALLEGEDPOINT as onelevelname,a.SCORE as onescore,a.ACCESS_SELF_ID as ACCESSSELFID,B.Id AS twoid,b.ALLEGEDPOINT as twoname, ");
							    sBuffer.append("  b.SCORE as twoscore,b.DESCRIPTION asdescription,c.SELF_RATING_NAME as SELFRATINGNAME,c.COMPREHENSIVE_OPINION as opinion ");
							    sBuffer.append("  from AS_ACCESS_SELF_RATING_OPINION as a ");
							    sBuffer.append("  left join AS_ACCESS_SELF_RATING_OPINION b on a.Id=b.PARENT_ID   ");
							    sBuffer.append("  left join AS_ACCESS_SELF_RATING_USER c on c.Id=b.access_self_id ");
							    sBuffer.append(" where a.PARENT_ID=0 ");
						}
					} catch (UnsupportedEncodingException e) {
						System.out.println(e.getMessage());
					} catch (Exception e) {
						e.printStackTrace();
					}
				 
			 }
			   
		    	ArrayList<HashMap<String, Object>> listMXF=DBConnection.executeQueryNoParams(selectMXF);
		    	ArrayList<HashMap<String, Object>> listZF=DBConnection.executeQueryNoParams(selectZF);
				
				//查网评得分
			ArrayList<HashMap<String, Object>> arrayList2=DBConnection.executeQuery(sBuffer.toString(), params);
		    JSONArray jsonArray2=JSONArray.fromObject(arrayList2);
		    
			JSONArray jsonArray=JSONArray.fromObject(arrayList);
			JSONArray jlistFile=JSONArray.fromObject(listFile);
			JSONArray jtableList=JSONArray.fromObject(tableList);
			JSONArray jNameList=JSONArray.fromObject(listMeasureName);
			jsonObject.accumulate("assessmentSelfScore", jsonArray);
			//jsonObject.accumulate("filelistname", jlistFile);
			jsonObject.accumulate("jtableList", jtableList);
			jsonObject.accumulate("namelist", jNameList);
			jsonObject.accumulate("assessmentSelfScore2", jsonArray2);
			jsonObject.accumulate("listMXF", listMXF);
			jsonObject.accumulate("listZF", listZF);
			//System.out.println(jsonObject.get("namelist").toString());
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		/*try {
			response.setCharacterEncoding("utf-8");
			response.getWriter().write(jsonObject.toString());
		} catch (IOException e) {
			e.printStackTrace();
		}*/
		return jsonObject.toString();
	}
	/**
	 * 查看网评结果
	 * @param request
	 * @return
	 */
	@RequestMapping("showSelfAssessmentComments")
	@ResponseBody
	public String showSelfAssessmentComments(HttpServletRequest request ){
	    Integer specialtyId=Integer.parseInt(request.getParameter("specialtyid"));
	    Integer userId=Integer.parseInt(request.getParameter("userId"));
	    Integer syear=Integer.parseInt(request.getParameter("syear"));
	    Integer txId=Integer.parseInt(request.getParameter("txid"));
	    AsAccessSpecialty asAccessSpecialty=	asAccessSpecialtyServiceI.findAsAccessApecialtyBySidAndType(specialtyId,syear);
	    StringBuffer sBuffer=new StringBuffer();
		ArrayList<Object> params=new ArrayList<Object>();
	/*	try {
			String sql=" select * from AS_ACCESS_SELF_SCORE_OPINION where userid="+userId+" and specialty_id="+specialtyId+" and syear="+syear;
			 ArrayList<HashMap<String, Object>> userList=  DBConnection.executeQueryNoParams(sql);
			 if (userList.size()!=0) {
				    sBuffer.append(" select a.Id as onelevelid,a.ALLEGEDPOINT as onelevelname,a.SCORE as onescore,a.ACCESS_SELF_ID as ACCESSSELFID,B.Id AS twoid,b.ALLEGEDPOINT as twoname, ");
				    sBuffer.append("  b.SCORE as twoscore,b.DESCRIPTION asdescription,c.SELF_RATING_NAME as SELFRATINGNAME,c.COMPREHENSIVE_OPINION as opinion , ");
				    sBuffer.append(" d.Id as selfscoreid, d.ACCESS_SELF_SCORE as selfscore,d.ACCESS_ELABORATED as ELABORATED ,e.Id as SCOREOPINIONID , e.SCORE as descore ,e.COMPREHENSIVE_OPINION_CONTENT as OPINIONCONTENT ,");
				    sBuffer.append(" E.ACCESS_SELF_DATE");
				    sBuffer.append(" from AS_ACCESS_SELF_RATING_OPINION as a ");
				    sBuffer.append(" left join AS_ACCESS_SELF_RATING_OPINION b on a.Id=b.PARENT_ID ");
				    sBuffer.append(" left join AS_ACCESS_SELF_RATING_USER c on c.Id=b.access_self_id ");
				    sBuffer.append(" left join AS_ACCESS_SELF_SCORE d  on b.Id= d.OPINION_ID ");
				    sBuffer.append(" left join AS_ACCESS_SELF_SCORE_OPINION e on e.Id=d.SCORE_OPINION_ID ");
				    sBuffer.append(" where a.PARENT_ID=0 ");
				    sBuffer.append(" and e.USERID=? and  e.SPECIALTY_ID=? and e.syear=?");
				    params.add(userId);
				    params.add(specialtyId);
				    params.add(syear);
			 }else {
				    sBuffer.append("  select   a.Id as onelevelid,a.ALLEGEDPOINT as onelevelname,a.SCORE as onescore,a.ACCESS_SELF_ID as ACCESSSELFID,B.Id AS twoid,b.ALLEGEDPOINT as twoname, ");
				    sBuffer.append("  b.SCORE as twoscore,b.DESCRIPTION asdescription,c.SELF_RATING_NAME as SELFRATINGNAME,c.COMPREHENSIVE_OPINION as opinion ");
				    sBuffer.append("  from AS_ACCESS_SELF_RATING_OPINION as a ");
				    sBuffer.append("  left join AS_ACCESS_SELF_RATING_OPINION b on a.Id=b.PARENT_ID   ");
				    sBuffer.append("  left join AS_ACCESS_SELF_RATING_USER c on c.Id=b.access_self_id ");
				    sBuffer.append(" where a.PARENT_ID=0 ");
			}
		} catch (UnsupportedEncodingException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			e.printStackTrace();
		}*/
		
    	String sql=" SELECT distinct  ";
		sql+="	C.id as threeid,";
		sql+="	c.name as threelevelname,";
		sql+="	C.score as threelevelscore,";	
		sql+="	D.SCORE AS selfscore ,";
		sql+="	d.datas as datas ";
		sql+="	,STUFF((SELECT ','+hb.MEASURE_NAME FROM (select aci.detail_id,aci.measure_id, mm.MEASURE_NAME from as_access_scale_index aci,AS_M_MANAGE mm where aci.measure_id = mm.MEASURE_ID) hb where hb.detail_id= x.detail_id FOR XML PATH('')),1,1,'')  as MEASURE_NAME";
		sql+="	FROM AS_ACCESS_STANDARD_DETAIL A ";
		sql+="	 LEFT JOIN AS_ACCESS_STANDARD_DETAIL B ON A.ID=B.PARENT_ID ";
		sql+="	 LEFT JOIN AS_ACCESS_STANDARD_DETAIL C ON B.ID=C.PARENT_ID ";
		sql+=" LEFT JOIN AS_ACCESS_SELF_EVALUTION_RECORD D ON C.id=D.detail_id and d.access_specialty_id = "+asAccessSpecialty.getId();
		sql+=" left join as_access_scale_index e on e.detail_id=C.id ";
		sql+=" left join (select aci.detail_id,aci.measure_id, mm.MEASURE_NAME from as_access_scale_index aci,AS_M_MANAGE mm where aci.measure_id = mm.MEASURE_ID) x ";
		sql+=" on    x.detail_id =  e.detail_id ";
		sql+=" left join as_access_specialty f on d.access_specialty_id= f.id";
		sql+=" left join AS_ACCESS_INFO g on g.id = f.access_id";
		sql+=" where A.PARENT_ID=0 and A.standard_id= "+txId +" and g.access_year="+syear;
		
		String sql1="";
		sql1+=" SELECT distinct a.id as oneid, ";
		sql1+="    a.name  as onelevelname,";
		sql1+="	a.score as oneLevelscore,";
		sql1+="	B.id as twoid, ";
		sql1+="	B.name as twolevelname,";
		sql1+="	b.score as twolevelscore,";
		sql1+="	C.id as threeid,";
		sql1+="	c.name as threelevelname,";
		sql1+="	C.score as threelevelscore,";
		sql1+="	d.content as content";
		sql1+="    FROM AS_ACCESS_STANDARD_DETAIL A ";
		sql1+="	LEFT JOIN AS_ACCESS_STANDARD_DETAIL B ON A.ID=B.PARENT_ID ";
		sql1+="	LEFT JOIN AS_ACCESS_STANDARD_DETAIL C ON B.ID=C.PARENT_ID";
		sql1+="	left join  AS_ACCESS_SCORE_STANDARD d on c.id=d.detail_id";
		sql1+="   where A.PARENT_ID=0 and A.standard_id="+txId +";";
		
		String selectMXF ="select * from AS_NEW_WPMXF where TXID="+txId+" and USERID="+userId+" and SYEAR="+syear+" and ZYID="+specialtyId+"";
		String  selectZF="select * from AS_NEW_WPZF where txid="+txId+" and zyid="+specialtyId+" and syear="+syear+" and userid="+userId+"";

		JSONObject jsonObject=new JSONObject();
		try {
			ArrayList<HashMap<String, Object>> listMXF=DBConnection.executeQueryNoParams(selectMXF);
			 ArrayList<HashMap<String, Object>> tableList=DBConnection.executeQuery(sql1, params);
			 ArrayList<HashMap<String, Object>> listZF=DBConnection.executeQueryNoParams(selectZF);
			jsonObject.accumulate("listMXF", listMXF);
			jsonObject.accumulate("tableList", tableList);
			jsonObject.accumulate("listZF", listZF);
		} catch (Exception e) {
			e.printStackTrace();
		}
	    ArrayList<HashMap<String, Object>> arrayList=DBConnection.executeQuery(sql, params);
	    JSONArray jsonArray=JSONArray.fromObject(arrayList);
		
		jsonObject.accumulate("assessmentSelfScore", jsonArray);
	    return jsonObject.toString();
	}

	/**
	 * 保存网评自评报告意见表
	 * @return
	 */
	 @RequestMapping("saveSelfAssessmentComments")
	 @ResponseBody
	 public String saveSelfAssessmentComments(HttpServletRequest request){
		 String idAndQkAndScore =request.getParameter("idAndQkAndScore");
		 String hjScore =request.getParameter("hjScore");
		 Float scoreFloat=hjScore.trim()==""?null:Float.parseFloat(hjScore);
		 String yjtext =request.getParameter("yjtext");
		 String date =request.getParameter("date");
		 Integer specialtyId=Integer.parseInt(request.getParameter("specialty_ID"));
		 Integer accessselfid=Integer.parseInt(request.getParameter("accessselfid"));
		 Integer syear=Integer.parseInt(request.getParameter("syear"));
			String userId = "";
			try {
				userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
				String sql=" select * from AS_ACCESS_SELF_SCORE_OPINION where userid="+userId+" and specialty_id="+specialtyId;
				 ArrayList<HashMap<String, Object>> userList=  DBConnection.executeQueryNoParams(sql);
				 if (userList.size()==0) {
					String insertSql=" insert into AS_ACCESS_SELF_SCORE_OPINION values("+Integer.parseInt(userId)+","+scoreFloat+",'"+yjtext+"','"+date+"','"+specialtyId+"','"+syear+"');";
					DBConnection.Add(insertSql);
				    userList=  DBConnection.executeQueryNoParams(sql);
				    Integer id=Integer.parseInt(userList.get(0).get("id").toString());
				    String[] a= idAndQkAndScore.split("%");
				    System.out.println(a[0]);
				    for (int i = 0; i < a.length; i++) {
						String[] b=	a[i].split("#");
							//System.out.println("呵呵："+                b[0]+"--"+b[2]+"--"+b[2]);
						    //                                           b[0]     b[2]   accessSelfId   b[1]               id
							aaccessSelfScoreServerI.insertSelfScore( Integer.parseInt(b[0]), b[2], accessselfid, Integer.parseInt(b[1]), id);
					}
				 }else { 
				    Integer id=Integer.parseInt(userList.get(0).get("id").toString());
					String  updateSql=" update AS_ACCESS_SELF_SCORE_OPINION set SCORE="+scoreFloat+",COMPREHENSIVE_OPINION_CONTENT='"+yjtext+"',ACCESS_SELF_DATE='"+date+"' where id="+id;
					DBConnection.Add(updateSql);
					String[] a= idAndQkAndScore.split("%");
					for (int i = 0; i < a.length; i++) {
						String[] b=	a[i].split("#");
							aaccessSelfScoreServerI.updateSelfScore( b[2], Integer.parseInt(b[1]), Integer.parseInt(b[0]), id);
					}
				 }
			} catch (UnsupportedEncodingException e) {
				System.out.println(e.getMessage());
			} catch (Exception e) {
				e.printStackTrace();
			}

		return null;
	 }
	 
	 /**
	  * 查看专业评估自评分
	  * @param request
	  * @return
	  */
	     @RequestMapping("showSelfConsistentOpinion")
	     @ResponseBody
		 private String showSelfConsistentOpinion(HttpServletRequest request){
			  Integer sid=Integer.parseInt(request.getParameter("sid"));
			  Integer userId=Integer.parseInt(request.getParameter("userId"));
			  Integer txId=Integer.parseInt(request.getParameter("txId"));
			  Integer syear=Integer.parseInt(request.getParameter("syear"));
			  List<Map<String, Object>> list= null;
			  AsAccessGeneralScore accessGeneralScore= asAccessGeneralScoreServicesI.findOnlyUserByspecialtyId(userId, sid);
			  if (accessGeneralScore==null) {
				 // System.out.println("没有该用户");
				  list=  assessmentSelfScoreVoServiceI.InitializationNoUser(sid,sid,txId);
			  }else {
				 //  System.out.println("有该用户");
				  list= assessmentSelfScoreVoServiceI.InitializationByUser(sid ,sid, sid, userId,txId,syear);
			  }
			  //过滤掉没有描述的数据
			  List<Map<String, Object>> list1=new ArrayList<Map<String,Object>>();
			   for (int i = 0; i < list.size(); i++) {
				   if (list.get(i).get("scale_remark").toString().length()>0) {
				 	  list1.add(list.get(i));
				   }
			   } 
			  JSONArray jsonArray=JSONArray.fromObject(list1);
		      JSONObject jsonObject=new JSONObject();
			  jsonObject.accumulate("assessmentSelfScore", jsonArray);
			return jsonObject.toString();
		 }
	     /**
	      * 一次保存支撑材料评分
	      * @param request
	      * @return
	      */
	     @RequestMapping("saveAllPeneralScore")
	     @ResponseBody
	     private String saveAllPeneralScore(HttpServletRequest request){
	    	 String idAndQkAndScore =request.getParameter("idAndQkAndScore");
			 String hjScore =request.getParameter("hjScore");
			 Float scoreFloat=hjScore==""?null:Float.parseFloat(hjScore);
			 String yjtext =request.getParameter("yjtext");
			 String date =request.getParameter("date");
			 Integer specialtyId=Integer.parseInt(request.getParameter("specialty_ID"));
			 Integer syear=Integer.parseInt(request.getParameter("syear"));
			 String userId=null;
			 try {
				userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
				String sql=" select * from AS_ACCESS_GENERAL_SCORE where useid="+userId+" and specialty_id="+specialtyId;
				ArrayList<HashMap<String, Object>> userList=  DBConnection.executeQueryNoParams(sql);
				if (userList.size()==0) {
					String insertSql=" insert into AS_ACCESS_GENERAL_SCORE values("+Integer.parseInt(userId)+","+scoreFloat+",'"+yjtext+"','"+date+"','"+specialtyId+"','"+syear+"');";
					DBConnection.Add(insertSql);
				    userList=  DBConnection.executeQueryNoParams(sql);
				    Integer id=Integer.parseInt(userList.get(0).get("id").toString());
				    String[] a= idAndQkAndScore.split("%");
				    for (int i = 0; i < a.length; i++) {
						String[] b=	a[i].split("#");
							//System.out.println("呵呵："+  b[0]+"--"+b[1]+"--"+b[2]);
							Integer c=b[0]==""?null:Integer.parseInt(b[0]);
							accessScoreScaleDetailI.insertPeneralSelfScore(c, Integer.parseInt(b[1]), Float.parseFloat(b[2]), id);
				    }
				}
				 else {
					    Integer id=Integer.parseInt(userList.get(0).get("id").toString());
						String  updateSql=" update AS_ACCESS_GENERAL_SCORE set GENERAL_SCORE="+scoreFloat+",GENERAL_OPINION='"+yjtext+"',GENERAL_TIME='"+date+"' where id="+id;
						DBConnection.Add(updateSql);
						String[] a= idAndQkAndScore.split("%");
						for (int i = 0; i < a.length; i++) {
							String[] b=	a[i].split("#");
							Integer c=b[0]==""?null:Integer.parseInt(b[0]);
								aaccessSelfScoreServerI.updateSelfScore( b[2], Integer.parseInt(b[1]), Integer.parseInt(b[0]), id);
						        accessScoreScaleDetailI.updatePeneralSelfScore(Integer.parseInt(b[1]), Float.parseFloat(b[2]), c, id);
						}
					}
				
			 }catch (Exception e) {
				e.printStackTrace();
			}
			 return null;
	     }
	     
	     @RequestMapping("showAssessmentSelfZPF")
	     @ResponseBody
	     public String  showAssessmentSelfZPF(HttpServletRequest request){
	    	 Integer detailid=Integer.parseInt(request.getParameter("detailid"));
	    	 Integer syear=Integer.parseInt(request.getParameter("syear"));
	    	 Integer sid=Integer.parseInt(request.getParameter("sid"));
	 		 String sql=" select  b.ID,b.OBJECT_NAME,b.TABLE_NAME from access_data_zcsj a left join SHUTCM_DATA_TEMPLATE b on a.ctemplateid=b.ID where detail_id="+detailid;
	 		 String sql1="  select * from AS_MAINTAIN_TIME where YEAR = "+syear;
	 		 String sql4="  select code from specialty where id ="+sid;
	 		  String sql3="";
	 		  JSONArray result = new JSONArray();
			try {
				//获取填报数据的年份
				ArrayList<HashMap<String, Object>> tableyear=DBConnection.executeQueryNoParams(sql1);
				//得到支撑数据表
				ArrayList<HashMap<String, Object>> tablelist=  DBConnection.executeQueryNoParams(sql);
				
					ArrayList<HashMap<String, Object>> searchzy=  DBConnection.executeQueryNoParams(sql);
				 //循环得到数据
				for (int n = 0; n < tablelist.size(); n++) {
					   //参数集合
			           ArrayList<Object> pList=new ArrayList<Object>();
					 //根据 标准模版查询对应数据库表名
					//  AsCtemplateStandard asCtemplateStandard= asCtemplateStandardService.findObjecttableByTN(Integer.parseInt(tablelist.get(n).get("ctemplateid").toString()));
					  //查询状态未校验的数据
					  String sql2=null;
					//  if (asCtemplateStandard.getTimeType().equals("时点")) {
						  sql3="  select FIELD_CNAME,FIELD_ENAME from SHUTCM_DATA_FIELD where SDT_ID="+Integer.parseInt(tablelist.get(0).get("id").toString())+"  and FIELD_CNAME like '%专业代码%';";
				           ArrayList<HashMap<String, Object>> oArrayList1= DBConnection.executeQuery(sql3, pList);
				           ArrayList<HashMap<String, Object>> oArrayList2= DBConnection.executeQuery(sql4, pList);
						   sql2="select * from "+tablelist.get(n).get("object_name").toString().replace("TEM", "ODS")+" where report_date='"+syear+"/09/30' and "+oArrayList1.get(0).get("field_ename")+"= '"+oArrayList2.get(0).get("code")+"'";
						  /*	  }else if (asCtemplateStandard.getTimeType().equals("学年")) {
						  sql2="select * from ODS_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+(syear)+"-"+(syear+1)+"' and cname='"+tablelist.get(n).get("ctemplate_name")+"'";
					  } else if (asCtemplateStandard.getTimeType().equals("自然年")) {
						  sql2="select * from ODS_"+asCtemplateStandard.getObjectTable()+" where insert_version='"+(syear)+"' and cname='"+tablelist.get(n).get("ctemplate_name")+"'";
					  } */
					
					  //根据自定义模版id查询字段对照
					  List<Map<String, Object>> asCustomVos=asCustomVoServices.findNewTableTemplate(Integer.parseInt(tablelist.get(n).get("id").toString()));
					   String[] ctemplateTitleName=new String[asCustomVos.size()];
					   String[] objectFieldName =new String[asCustomVos.size()];
					  for (int i = 0; i < asCustomVos.size(); i++) {
						  //获取自定义列表名
							  ctemplateTitleName[i]=asCustomVos.get(i).get("FIELD_CNAME").toString();
							  //获取列对应的数据库字段名
							  objectFieldName[i]=asCustomVos.get(i).get("FIELD_ENAME").toString();
					   }
					
			           //存放得到的数据集合
			           ArrayList<HashMap<String, Object>> oArrayList= DBConnection.executeQuery(sql2, pList);
		
			           List<Object> a=new ArrayList<Object>();
			           //得到自定义模版所需的数据
			           for (int i = 0; i < oArrayList.size(); i++) {
			        	   Object[] b= new Object[objectFieldName.length];
			        	   for (int j = 0; j < objectFieldName.length; j++) {
						        b[j]= oArrayList.get(i).get(objectFieldName[j].toLowerCase()).toString();
			        	   }
						   a.add(b);
						   b = null;
					   }
			              JSONArray jsontitle=JSONArray.fromObject(ctemplateTitleName);
						  JSONArray jsontablename=JSONArray.fromObject(objectFieldName);
						  JSONArray jsoncontent = JSONArray.fromObject(a);
						  //System.out.println("标题里面的："+jsontitle);
						  //System.out.println("内容里面的："+jsoncontent);
				    	  JSONObject jObject=new JSONObject();
				    	  jObject.accumulate("title", jsontitle);
				    	  jObject.accumulate("tablename", jsontablename);
				    	  jObject.accumulate("content", jsoncontent);
				    	  jObject.accumulate("table", tablelist.get(n).get("table_name"));
				    	  result.put(jObject);
				}
				
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			return result.toString();
	     }
	     @RequestMapping("showAssessmentSelfZCCL")
	     @ResponseBody
	     public String showAssessmentSelfZCCL(HttpServletRequest request){
	    	 
	 		Integer specialtyId=Integer.parseInt(request.getParameter("specialtyid"));
			Integer txId=Integer.parseInt(request.getParameter("txId"));
			Integer syear=Integer.parseInt(request.getParameter("syear"));
			Integer threeid= Integer.parseInt(request.getParameter("threeid"));
		    AsAccessSpecialty asAccessSpecialty=	asAccessSpecialtyServiceI.findAsAccessApecialtyBySidAndType(specialtyId,syear);
		
			String sql=" SELECT distinct  ";
			sql+="	C.id as threeid,";
			sql+="	c.name as threelevelname,";
			sql+="	C.score as threelevelscore,";
			sql+="	D.SCORE AS selfscore ,";
			sql+="	d.datas as datas ";
			sql+="	,STUFF((SELECT ','+hb.MEASURE_NAME FROM (select aci.detail_id,aci.measure_id, mm.MEASURE_NAME from as_access_scale_index aci,AS_M_MANAGE mm where aci.measure_id = mm.MEASURE_ID) hb where hb.detail_id= x.detail_id FOR XML PATH('')),1,1,'')  as MEASURE_NAME";
			sql+="	FROM AS_ACCESS_STANDARD_DETAIL A ";
			sql+="	 LEFT JOIN AS_ACCESS_STANDARD_DETAIL B ON A.ID=B.PARENT_ID ";
			sql+="	 LEFT JOIN AS_ACCESS_STANDARD_DETAIL C ON B.ID=C.PARENT_ID ";
			sql+=" LEFT JOIN AS_ACCESS_SELF_EVALUTION_RECORD D ON C.id=D.detail_id and d.access_specialty_id = "+asAccessSpecialty.getId();
			sql+=" left join as_access_scale_index e on e.detail_id=C.id ";
			sql+=" left join (select aci.detail_id,aci.measure_id, mm.MEASURE_NAME from as_access_scale_index aci,AS_M_MANAGE mm where aci.measure_id = mm.MEASURE_ID) x ";
			sql+=" on    x.detail_id =  e.detail_id ";
			sql+=" left join as_access_specialty f on d.access_specialty_id= f.id";
			sql+=" left join AS_ACCESS_INFO g on g.id = f.access_id";
			sql+=" where A.PARENT_ID=0 and A.standard_id= "+txId +" and g.access_year="+syear+" and c.id ="+threeid;
		      
		   /* List<Map<String, Object>> list=	assessmentSelfScoreVoServiceI.findZCCL(sql);*/
			List<HashMap<String, Object>> list= new ArrayList<HashMap<String,Object>>();
			try {
				list = DBConnection.executeQueryNoParams(sql);
			} catch (Exception e) {
				e.printStackTrace();
			}
		    JSONArray result = new JSONArray();
		    if (list.size()>0) {
		    	String[] a= list.get(0).get("datas").toString().split(",");
			    for (int i = 0; i < a.length; i++) {
					if (a[i].trim().length()>0) {
						  AsAccessDataInfo accessDataInfo=	asAccessDataInfoServiceI.findFileNameById(Integer.parseInt(a[i]));
						  result.put(accessDataInfo);
					}
				}
			    return result.toString();
			}else {
				return null;
			}
	     }
	     @RequestMapping("saveAllScore")
	     @ResponseBody
	     public String saveAllScore(HttpServletRequest request){
	    	String str= request.getParameter("str");
	    	String specialtyid=  request.getParameter("specialtyid");
	    	String userId= request.getParameter("userId");
	    	String txId=  request.getParameter("txId");
	    	String syear=  request.getParameter("syear");
	    	String zf=  request.getParameter("zf");
	    	String yjtext=  request.getParameter("yjtext");
	    	String insert_time=  request.getParameter("insert_time");
	    	String zjqm=  request.getParameter("zjqm");
		    String deleteMXF="delete from AS_NEW_WPMXF where TXID="+txId+" and USERID="+userId+" and SYEAR="+syear+" and ZYID="+specialtyid+"";
	    	String deleteZF="delete from AS_NEW_WPZF where txid="+txId+" and zyid="+specialtyid+" and syear="+syear+" and userid="+userId+"";
		    try {
				DBConnection.Add(deleteMXF);
				DBConnection.Add(deleteZF);
				StringBuffer string= new StringBuffer();
				String[] a= str.split("@");
				for (int i = 0; i < a.length; i++) {
					String[] b=a[i].split("#");
					string.append(" insert into AS_NEW_WPMXF values('"+txId+"','"+b[0]+"','"+b[1]+"','"+userId+"','"+syear+"','"+specialtyid+"');");
				}
				String sstr="INSERT INTO AS_NEW_WPZF VALUES('"+zf+"','"+yjtext+"','"+insert_time+"','"+txId+"','"+specialtyid+"','"+syear+"','"+zjqm+"','"+userId+"');";
				DBConnection.Add(string.toString());
				DBConnection.Add(sstr);
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
	     }
}
