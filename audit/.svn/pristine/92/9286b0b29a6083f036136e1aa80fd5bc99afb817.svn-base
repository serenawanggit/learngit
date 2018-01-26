package audit.controller.report;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.apache.tools.ant.taskdefs.condition.Http;
import org.springframework.aop.ThrowsAdvice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sun.xml.rpc.processor.modeler.j2ee.xml.string;

import audit.model.assess.vo.SpecialtyNameAndSelfAndAssessor;
import audit.service.AssessmentInspectService;
import audit.service.assess.AssessmentSpecialtyInfoServices;
import audit.util.CookieUtil;

@Controller
@RequestMapping("assessInspect")
public class AssessmentInspectController {

		@Autowired
		AssessmentInspectService assessmentInspectService;
		@Autowired
		private AssessmentSpecialtyInfoServices assessmentSpecialtyInfoServices;
		
		@ResponseBody
		@RequestMapping("getBySpotPeopleId")
		public String  selectBySpotPeopleId(@RequestParam Map<String,String> map,HttpServletRequest request){
			JSONArray json =  null;
			try {
				int id = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				json = JSONArray.fromObject(assessmentInspectService.selectBySpotPeopleId(id, map.get("syear")));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
				return json.toString();
			}else{
				return 	"";
			}
		}
		
		@ResponseBody
		@RequestMapping("getInspectBySysId")
		public String  getInspectBySysId(@RequestParam Map<String,String> map,HttpServletRequest request){
			JSONArray json =  null;
			try {
				String userId = null;
				String specialtyId = null ;
				String userName = map.get("userName");
				if(userName==null||"".equals(userName.trim())){
						userId = map.get("userId");
					if("0".equals(userId)){
						 userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
					}
				}else{
					userName="%"+userName+"%";
				}
				String specialtyName = map.get("specialtyName");
				if(specialtyName==null||"".equals(specialtyName.trim())){
					 specialtyId = map.get("specialtyId");
				}else{
					specialtyName="%"+specialtyName+"%";
				}
				String sysid = map.get("sysid");
				String syear = map.get("syear");
				Map<String,Object> maps = new HashMap<String, Object>(); 
				maps.put("sysid",sysid);
				maps.put("syear",syear);
				maps.put("specialtyId", specialtyId);
				maps.put("userId", userId);
				maps.put("specialtyName", specialtyName);
				maps.put("userName", userName);
				List<Map<String, Object>> selectInspectBySysid = assessmentInspectService.selectInspectBySysid(maps);
				json = JSONArray.fromObject(selectInspectBySysid);
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null&&json.length()>0){
				return json.toString();
			}else{
				return 	"";
			}
		}
		@ResponseBody
		@RequestMapping("getAllData")
		public String  getAllData(@RequestParam Map<String,String> map,HttpServletRequest request){
			JSONArray json =  null;
			String specialtyId = null;
			String specialtyName = request.getParameter("sepcialtyName");
			if(specialtyName==null||"".equals(specialtyName.trim())){
				 specialtyId = map.get("specialtyId");
			}else{
				specialtyName="%"+specialtyName+"%";
			}
			
			Map<String,Object> maps = new HashMap<String, Object>();
			
			try {
				int id = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				maps.put("id", id);
				maps.put("specialtyName",specialtyName);
				maps.put("specialtyId",specialtyId);
				json = JSONArray.fromObject(assessmentInspectService.getAllData(maps));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
				return json.toString();
			}else{
				return 	"";
			}
		}
		@ResponseBody
		@RequestMapping("getAllData1")
		public String  getAllData1(@RequestParam Map<String,String> map,HttpServletRequest request){
			JSONArray json =  null;
			String specialtyName = map.get("specialtyName");
			
			Map<String,Object> maps = new HashMap<String, Object>();
			try {
				maps.put("specialtyName",specialtyName);
				json = JSONArray.fromObject(assessmentInspectService.getAllData1(maps));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
				return json.toString();
			}else{
				return 	"";
			}
		}
		@ResponseBody
		@RequestMapping("getInspectSysInfo")
		public String  getInspectSysInfo(@RequestParam Map<String,String> map,HttpServletRequest request){
			Map<String, Object> maps=new HashMap<String, Object>();
			maps.put("stype", map.get("stype"));
			JSONArray json =  null;
			try {
				json = JSONArray.fromObject(assessmentInspectService.getInspectSysInfo(maps));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
				return json.toString();
			}else{
				return 	"";
			}
		}
		@ResponseBody
		@RequestMapping("selectOneList")
		public String  selectOneList(@RequestParam Map<String,String> map,HttpServletRequest request){
			Map<String, Object> maps=new HashMap<String, Object>();
			maps.put("stype", map.get("stype"));
			maps.put("syear", map.get("syear"));
			String message="[";
			List<Map<String, Object>> inspectSysInfo = assessmentInspectService.getInspectSysInfo(maps);
			//刚开始不知道一级节点有多少个，所以先声明一个临时的数组
			Object [] objtestID=new Object [20];
			Object [] objtestName=new Object [20];
			
			//一级数组ID
			Object [] objOneID=null;
			Object [] objOneName=null;
			//一级数组长度
			int index=0;
			//检索一级节点
			for (int i = 0; i < inspectSysInfo.size(); i++) {
				Map<String, Object> map2 = inspectSysInfo.get(i);
				if((map2.get("LEVEL").toString()).equals("1")){
					objtestID[index]=map2.get("ID");
					objtestName[index]=map2.get("SYSTEM_NAME");
					index++;
				}
			}
			//有一级节点
			if(index!=0){
				objOneID=new Object[index];
				objOneName=new Object[index];
				//遍历数组的下标标记
				int index2=0;
				//复制数组 1复制对象  2复制开始位置 3新对象 4新对象的开始位置 5复制开始位置(指新对象) 
				System.arraycopy(objtestID, 0, objOneID, 0, index);
				System.arraycopy(objtestName, 0, objOneName, 0, index);
				for (int j = 0; j < objOneID.length; j++) {
				for (int i = 0; i < inspectSysInfo.size(); i++) {
					Map<String, Object> map2 = inspectSysInfo.get(i);
					//1二级节点的父节点ID   2一级节点ID
					System.out.println(map2.get("PARENT_ID"));
					if(map2.get("PARENT_ID").equals(objOneID[index2])){
						int countChilds,cols,countTwo=0;
						//获得一级子节点下面的二级子节点数目  param是一级节点的ID
						maps.put("pid", Integer.parseInt(objOneID[index2].toString()));
						// countTwo=assessmentInspectService.selectParentId(maps).size();
						//获得一级节点下所有的子节点的个数， param是一级节点的ID
						 countChilds=assessmentInspectService.selectChildensCount(Integer.parseInt(objOneID[index2].toString()));
						//获得一级节点的列宽 countChilds包括了它本身自己一个需减一
						 cols=countChilds;
						 //cols=countChilds-countTwo-1;
						message=message+"{'ID':'"+objOneID[index2]+"','name':'"+objOneName[index2]+"','cols':'"+cols+"'},";
						/*switch (key) {
						case 1:
							break;
						case 2:
							//获得二级级子节点下面的三级子节点数目  param是二级节点的ID
							 countTwo=assessmentInspectService.selectParentId(Integer.parseInt(map2.get("ID").toString())).size();
							 cols=countTwo;
								message=message+"{'ID':'"+map2.get("ID")+"','name':'"+map2.get("SYSTEM_NAME")+"','cols':'"+cols+"'},";
							break;
						case 3:
							message=message+"{ID:"+objOneID[index2]+",name:"+objOneName[index2]+",cols:"+1+"},";
							break;
						default:
							throw new RuntimeException("请求key发生错误");
						}*/
						break;
					}
				}
				index2++;
			}
				//去逗号
				message=message.substring(0, message.length()-1);
				message=message+"]";
			}
			return 	message;
			
		}
		
		
		@ResponseBody
		@RequestMapping("selectTwoList")
		public String  selectTwoList(@RequestParam Map<String,String> map,HttpServletRequest request){
			Map<String, Object> maps=new HashMap<String, Object>();
			maps.put("stype", map.get("stype"));
			maps.put("syear", map.get("syear"));
			String message="[";
			List<Map<String, Object>> inspectSysInfo = assessmentInspectService.getInspectSysInfo(maps);
			//刚开始不知道一级节点有多少个，所以先声明一个临时的数组
			Object [] objtestID=new Object [20];
			Object [] objtestName=new Object [20];
			
			//一级数组ID
			Object [] objOneID=null;
			Object [] objOneName=null;
			//一级数组长度
			int index=0;
			//检索一级节点
			for (int i = 0; i < inspectSysInfo.size(); i++) {
				Map<String, Object> map2 = inspectSysInfo.get(i);
				if((map2.get("LEVEL").toString()).equals("1")){
					objtestID[index]=map2.get("ID");
					objtestName[index]=map2.get("SYSTEM_NAME");
					index++;
				}
			}
			//有一级节点
			if(index!=0){
				objOneID=new Object[index];
				objOneName=new Object[index];
				//遍历数组的下标标记
				int index2=0;
				//复制数组 1复制对象  2复制开始位置 3新对象 4新对象的开始位置 5复制开始位置(指新对象) 
				System.arraycopy(objtestID, 0, objOneID, 0, index);
				System.arraycopy(objtestName, 0, objOneName, 0, index);
				for (int j = 0; j < objOneID.length; j++) {
				for (int i = 0; i < inspectSysInfo.size(); i++) {
					Map<String, Object> map2 = inspectSysInfo.get(i);
					//1二级节点的父节点ID   2一级节点ID
					if(map2.get("PARENT_ID").equals(objOneID[index2])){
						int cols,countTwo=0;
						maps.put("pid", Integer.parseInt(objOneID[index2].toString()));
						//二级节点集合
						 List<Map<String, Object>> listTwo = assessmentInspectService.selectParentId(maps);
						 for (int k = 0; k < listTwo.size(); k++) {
							 //单个二级节点下的子节点数
							 maps.put("pid", Integer.parseInt(listTwo.get(k).get("ID").toString()));
							 countTwo= assessmentInspectService.selectParentId(maps).size();
							 cols=countTwo;
							 if(countTwo==0){
								 message=message+"{'ID':'"+listTwo.get(k).get("ID")+"','name':'"+listTwo.get(k).get("SYSTEM_NAME")+"','cols':'"+1+"','rows':'"+2+"'},";
							 }else{
								 message=message+"{'ID':'"+listTwo.get(k).get("ID")+"','name':'"+listTwo.get(k).get("SYSTEM_NAME")+"','cols':'"+cols+"','rows':'"+1+"'},";
							 }
						}
						break;
					}
				}
				index2++;
			}
				//去逗号
				message=message.substring(0, message.length()-1);
				message=message+"]";
			}
			return 	message;
			
		}
		
		@ResponseBody
		@RequestMapping("selectThreeList")
		public String  selectThreeList(@RequestParam Map<String,String> map,HttpServletRequest request){
			Map<String, Object> maps=new HashMap<String, Object>();
			maps.put("stype", map.get("stype"));
			maps.put("syear", map.get("syear"));
			String message="[";
			List<Map<String, Object>> inspectSysInfo = assessmentInspectService.getInspectSysInfo(maps);
			//刚开始不知道一级节点有多少个，所以先声明一个临时的数组
			Object [] objtestID=new Object [20];
			Object [] objtestName=new Object [20];
			
			//一级数组ID
			Object [] objOneID=null;
			Object [] objOneName=null;
			//一级数组长度
			int index=0;
			//检索一级节点
			for (int i = 0; i < inspectSysInfo.size(); i++) {
				Map<String, Object> map2 = inspectSysInfo.get(i);
				if((map2.get("LEVEL").toString()).equals("1")){
					objtestID[index]=map2.get("ID");
					objtestName[index]=map2.get("SYSTEM_NAME");
					index++;
				}
			}
			//有一级节点
			if(index!=0){
				objOneID=new Object[index];
				objOneName=new Object[index];
				//遍历数组的下标标记
				int index2=0;
				//复制数组 1复制对象  2复制开始位置 3新对象 4新对象的开始位置 5复制开始位置(指新对象) 
				System.arraycopy(objtestID, 0, objOneID, 0, index);
				System.arraycopy(objtestName, 0, objOneName, 0, index);
				for (int j = 0; j < objOneID.length; j++) {
				for (int i = 0; i < inspectSysInfo.size(); i++) {
					Map<String, Object> map2 = inspectSysInfo.get(i);
					//1二级节点的父节点ID   2一级节点ID
					if(map2.get("PARENT_ID").equals(objOneID[index2])){
						//二级节点集合
						maps.put("pid",Integer.parseInt(objOneID[index2].toString()));
						 List<Map<String, Object>> listTwo = assessmentInspectService.selectParentId(maps);
						 for (int k = 0; k < listTwo.size(); k++) {
							 maps.put("pid", Integer.parseInt(listTwo.get(k).get("ID").toString()));
							 //单个二级节点下的三级子节点
							 List<Map<String, Object>> listthree= assessmentInspectService.selectParentId(maps);
							 for (int l = 0; l < listthree.size(); l++) {
								 message=message+"{'ID':'"+listthree.get(l).get("ID")+"','name':'"+listthree.get(l).get("SYSTEM_NAME")+"','cols':'"+1+"'},";
							}
						}
						break;
					}
				}
				index2++;
			}
				//去逗号
				message=message.substring(0, message.length()-1);
				message=message+"]";
			}
			return 	message;
			
		}
		
		
		/*@ResponseBody
		@RequestMapping("selectelementList")
		public List<Object[]>  selectelementList(@RequestParam Map<String,String> map,HttpServletRequest request,HttpServletResponse response,@RequestParam("indexs[]")int[] indexs){
			List<SpecialtyNameAndSelfAndAssessor> find = assessmentSpecialtyInfoServices.findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor("",""+ 5);
			String[] split = find.get(0).getXianChangKaoChaZuZhangId().split(",");
			//获得组长ID
			int zzID=Integer.parseInt(split[0]);
			String [] dbls=new String[indexs.length+2];
			//总分数
			double sum=0;
			Map<String, Object> map4=new HashMap<String, Object>();
			//返回出去的集合
			List<Object[]> list=new ArrayList<Object[]>();
			
			//是工科还是非工科
			 map4.put("zyId", map.get("stype"));
			 //代表是专业评估的
			 map4.put("stype", map.get("pgtx"));
			 //查询专业课程有哪些
			 List<Map<String, Object>> selectSpectyList = assessmentInspectService.selectSpectyList(map4);
			 // List<Map<String, Object>> selectSpectyList = assessmentSpecialtyInfoServices.findSpecialtyInfo("",map.get("pgtx"));

			 for (int j = 0; j < selectSpectyList.size(); j++) {
				 //当前专业课程下的三级节点
				for (int i = 0; i < indexs.length; i++) {

					map4 =new HashMap<String, Object>();
					 //年份
					 map4.put("syear", map.get("syear"));
					 
					 //节点ID
					 map4.put("pid",indexs[i]);
					 
					 //组长ID
					 map4.put("usreid",zzID);
					 
					 //专业ID
					 map4.put("specialtyId",selectSpectyList.get(j).get("ID"));
					 
					 //查询指标量分数score
					 List<Map<String, Object>> selectContent = assessmentInspectService.selectContent(map4);
					 //查看ranks等级
					 List<Map<String, Object>> selectRecord = assessmentInspectService.selectRecord(map4);
					double dsocre=0;
					if(selectRecord.size()!=0 &&selectContent.size()!=0){
					switch (selectRecord.get(0).get("ranks").toString()) {
						case "优":
							dsocre=1;
							break;
						case "良":
							dsocre=0.8;
							break;
						case "中":
							dsocre=0.6;
							break;
						case "差":
							dsocre=0.4;
							break;
					default:
							break;
					}
					dbls[i]=""+dsocre*Float.parseFloat(selectContent.get(0).get("score").toString());
				}else{
					dbls[i]=""+0D;
				}
					sum+=Double.parseDouble(dbls[i].toString());
				}
				dbls[dbls.length-2]=""+sum;
				//
				dbls[dbls.length-1]=selectSpectyList.get(j).get("SPECIALTY_NAME").toString();
				list.add(dbls);
				//清除
				dbls=new String[indexs.length+2];
				sum=0;
			}
			 
			 //将list的元素进行排序
			  Collections.sort(list, new Comparator<Object []>(){

				@Override
				public int compare(Object[] o1, Object[] o2) {
					Double d1=Double.parseDouble(o1[o1.length-2].toString());
					Double d2=Double.parseDouble(o2[o2.length-2].toString());
					if(d1-d2>0)
						return -1;
					else if(d1-d2<0)
							return 1;
						return 0;
				}
				
				        });
				return list;
		}*/
		
		@ResponseBody
		@RequestMapping("selectPFNoDJ")
		public List<Object[]> selectPFNoDJ(@RequestParam Map<String, String> param){
			List<SpecialtyNameAndSelfAndAssessor> find = assessmentSpecialtyInfoServices.findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor("",""+ 5);
			String[] split = find.get(0).getXianChangKaoChaZuZhangId().split(",");
			//获得组长ID
			int zzID=Integer.parseInt(split[0]);
			Map<String, Object> map1=new HashMap<String, Object>();
			map1.put("zzID", zzID);
			
			map1.put("syear", param.get("syear"));
			//是类别 是工科还是非工科 ，文科还是理科
			map1.put("zyId", param.get("stype"));
			//map1.put("stype", param.get("stype"));
			//是学院评估还是专业评估 还是课程评估
			map1.put("stype", param.get("pgtx"));
			
			
			Map<String, Object> tempMap=new HashMap<String, Object>();
			tempMap.put("stype", param.get("stype"));
			tempMap.put("pid", 0);
			tempMap.put("syear", param.get("syear"));
			//获得一级节点集合
			List<Map<String, Object>> oneList = assessmentInspectService.selectParentId(tempMap);
			int selectChildensCount=0;
			//求总节点个数
			for (int i = 0; i < oneList.size(); i++) {
				selectChildensCount+= assessmentInspectService.selectChildensCount(Integer.parseInt(oneList.get(i).get("ID").toString()));
			}
			
			String [] dbls=new String[selectChildensCount+2];
			List<Object[]> list=new ArrayList<Object[]>();
			 //查询专业课程有哪些
			 List<Map<String, Object>> selectSpectyList = assessmentInspectService.selectSpectyList(map1);
			 //记录评分等级对应的分值
			 double dsocre=0;
			//总分数
				double sum=0;
				if(selectChildensCount>0){
			 for (int j = 0; j < selectSpectyList.size(); j++) {
				 map1.put("specialtyId", selectSpectyList.get(j).get("ID"));
				 //	 List<Map<String, Object>> selectPFNoDJ = assessmentInspectService.selectPFDJ(map1);
				 List<Map<String, Object>> selectPFNoDJ = assessmentInspectService.selectLastEnd(map1);
				 for (int i = 0; i < selectPFNoDJ.size(); i++) {
					 if(selectPFNoDJ.get(i).get("ranks")!=null&&selectPFNoDJ.get(i).get("ranks")!=""&&
							 selectPFNoDJ.get(i).get("score")!=null&&selectPFNoDJ.get(i).get("score")!=""){
							 switch (selectPFNoDJ.get(i).get("ranks").toString()) {
										case "优":
											dsocre=1;
											break;
										case "良":
											dsocre=0.8;
											break;
										case "中":
											dsocre=0.6;
											break;
										case "差":
											dsocre=0.4;
											break;
										default:
												break;
							 		}
							 dbls[i]=""+dsocre*Float.parseFloat(selectPFNoDJ.get(i).get("score").toString());
					 }else{
							dbls[i]=""+0D;
						}
					 sum+=Double.parseDouble(dbls[i].toString());
				}
				 dbls[dbls.length-2]=""+sum;
					//
				dbls[dbls.length-1]=selectSpectyList.get(j).get("SPECIALTY_NAME").toString();
					list.add(dbls);
					//清除
					dbls=new String[selectChildensCount+2];
					sum=0;
			 }
				}
				
				//将list的元素进行排序
				  Collections.sort(list, new Comparator<Object []>(){
					@Override
					public int compare(Object[] o1, Object[] o2) {
						Double d1=Double.parseDouble(o1[o1.length-2].toString());
						Double d2=Double.parseDouble(o2[o2.length-2].toString());
						if(d1-d2>0)
							return -1;
						else if(d1-d2<0)
								return 1;
							return 0;
					}
					
					        });
			return list;
		}
		
		@ResponseBody
		@RequestMapping("saveInspect")
		public String saveInspect(HttpServletRequest request ,@RequestParam("achieves[]") String[] achieves,
									@RequestParam("scores[]") String[] scores,
									@RequestParam("ids[]") String[] ids){
			try {
				int userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				String dateYear = request.getParameter("syear");
				int specialtyId  = Integer.parseInt(request.getParameter("specialtyId"));
				int sysid = Integer.parseInt(request.getParameter("sysid"));
				int juge = Integer.parseInt(request.getParameter("juge"));
				List<Map<String,Object>> list = new ArrayList<Map<String,Object>>();
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
				String dates = sdf.format(new Date());
				if(juge==0){
					for (int i = 0; i < scores.length; i++) {
						Map<String,Object> map = new HashMap<String, Object>();
						map.put("sysId", sysid);
						map.put("achieveSituation", achieves[i]);
						map.put("userId", userId);
						map.put("sYear", dateYear);
						map.put("objectId", specialtyId);
						map.put("sysType", (i+1));
						map.put("score", scores[i]);
						map.put("evaluationDate", dates);
						list.add(map);
					}
				int rows = 	assessmentInspectService.insert(list);
				if(rows>0){
					return "操作成功";
				}else{
					return "操作失败";
				}
				}else{
					int rows = 0;
					//判断是否已经进入此方法
					boolean bool=false;
					for (int j = 0; j < scores.length; j++) {
						Map<String,Object> map = new HashMap<String, Object>();
						map.put("achieveSituation", achieves[j]);
						map.put("score", scores[j]);
						map.put("evaluationDate", dates);
						//assessmentInspectService.selectBoolean(map)>0
						//用来判断是否是存在此ID来决定是执行添加还是修改
						if(ids[j]!=""){
							map.put("id", Integer.parseInt(ids[j]));
							rows = 	assessmentInspectService.updateInspect(map);
						}else{
							Map<String,Object> map1 = new HashMap<String, Object>();
							map1.put("sysId", sysid);
							map1.put("achieveSituation", achieves[j]);
							map1.put("userId", userId);
							map1.put("sYear", dateYear);
							map1.put("objectId", specialtyId);
							map1.put("sysType", (j+1));
							map1.put("score", scores[j]);
							map1.put("evaluationDate", dates);
							list.add(map1);
							bool=true;
						}
					}
					if(bool)assessmentInspectService.insert(list);
					if(rows>0){
						return "操作成功";
					}else{
						return "操作失败";
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
			return "";
		}
		/*public static void main(String[] args) {
			String[] aa = {"","","ddd","","asdf" };
	        List<String> tmp = new ArrayList<String>();
	        for(String str:aa){
	            if(str!=null && str.length()!=0){
	                tmp.add(str);
	            }
	        }
	        aa = tmp.toArray(new String[0]);
	        for (int i = 0; i < aa.length; i++) {
				System.out.println(aa[i]);
			}
		}*/
	/*	@ResponseBody
		@RequestMapping("saveInspect")
		public String ExportExcel(){
			
			ExportExcelUtil.exportPassExcel(list, head, titleStr, excelName, response, 1, (short) 11);
		}*/
		
		@ResponseBody
		@RequestMapping("selectExpedition")
		public String selectExpedition(){
			JSONArray json =  null;
			try {
				json = JSONArray.fromObject(assessmentInspectService.selectExpedition());
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
			return json.toString();
			}else{
			return "";	
			}
			
		}
		
		@ResponseBody
		@RequestMapping("selectFieldRecord")
		public String selectFieldRecord(@RequestParam Map<String,String> map,HttpServletRequest request){
		
			String syear = request.getParameter("syear");
			JSONArray json =  null;
			try {
				String specialtyId = null ;
				String userId = null;
				String userName = map.get("userName");
				if(userName==null||"".equals(userName.trim())){
						userId = map.get("userId");
					if("0".equals(userId)){
						 userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
					}
				}else{
					userName="%"+userName+"%";
				}
				String specialtyName = map.get("specialtyName");
				if(specialtyName==null||"".equals(specialtyName.trim())){
					 specialtyId = map.get("specialtyId");
				}else{
					specialtyName="%"+specialtyName+"%";
				}
				Map<String,Object> maps = new HashMap<String, Object>();
				maps.put("rid", map.get("rid"));
				maps.put("syear",syear);
				maps.put("specialtyId", specialtyId);
				maps.put("userId", userId);
				maps.put("specialtyName", specialtyName);
				maps.put("userName", userName);
				json = JSONArray.fromObject(assessmentInspectService.selectFieldRecord(maps));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
			return json.toString();
			}else{
			return "";	
			}
		}
		@ResponseBody
		@RequestMapping("insertTestRecord")
		public String insertTestRecord(HttpServletRequest request){
			Map<String,Object> map = new  HashMap<String, Object>();
			try {
				map.put("rid", Integer.parseInt(request.getParameter("rid")));
				map.put("fieldRecord", request.getParameter("fieldRecord"));
				map.put("userID", Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id")));
				map.put("content", request.getParameter("content"));
				map.put("objectId", Integer.parseInt(request.getParameter("specialtyId")));
				map.put("sYear", request.getParameter("syear"));
			} catch (Exception e) {
				e.printStackTrace();
			} 
		int rows = 	assessmentInspectService.insertTestRecor(map);
		if(rows>0){
			return "操作成功";
		}else{
			return "操作失败";
		}
			
		}
		@ResponseBody
		@RequestMapping("updateTestRecord")
		public String updateTestRecord(HttpServletRequest request){
			
			Map<String,Object> map = new  HashMap<String, Object>();
			map.put("id", Integer.parseInt(request.getParameter("id")));
			map.put("fieldRecord", request.getParameter("fieldRecord"));
			map.put("content", request.getParameter("content"));
		int rows = 	assessmentInspectService.updateTestRecord(map);
		if(rows>0){
			return "操作成功";
		}else{
			return "操作失败";
		}
			
		}
		@ResponseBody
		@RequestMapping("insertGraduation")
		public String insertGraduation(HttpServletRequest request,@RequestParam Map<String,String> map){
			
			int rows = 0;
			try {
				String jsonData = request.getParameter("jsonData");
				JSONArray json = JSONArray.fromString(jsonData);
				@SuppressWarnings("unchecked")
				List<Map<String,Object>> lists = JSONArray.toList(json, Map.class);
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
				String ss =	sdf.format(new Date());
				
				for (int i = 0; i < lists.size(); i++) {
					lists.get(i).put("object_id", Integer.parseInt(map.get("specialtyId")));
					lists.get(i).put("userId", Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id")));
					lists.get(i).put("syear",map.get("syear"));
					lists.get(i).put("evaluation_date", ss);
					 rows = assessmentInspectService.insertGraduation(lists.get(i));
				}
			
			} catch (Exception e) {
				e.printStackTrace();
				return "操作失败";
			}
			
		if(rows>0){
			return "操作成功";
		}else{
			return "操作失败";
		}
		}
		@ResponseBody
		@RequestMapping("updateGraduation")
		public String updateGraduation(HttpServletRequest request){
			int rows = 0;
			String jsonData = request.getParameter("jsonData");
			JSONArray json = JSONArray.fromString(jsonData);
			@SuppressWarnings("unchecked")
			List<Map<String,Object>> lists = JSONArray.toList(json, Map.class);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
			String ss =	sdf.format(new Date());
			for (int i = 0; i < lists.size(); i++) {
				lists.get(i).put("evaluation_date", ss);
				 rows = 	assessmentInspectService.updateGraduation(lists.get(i));
			}
		if(rows>0){
			return "操作成功";
		}else{
			return "操作失败";
		}
		}
		@ResponseBody
		@RequestMapping("selectGraduation")
		public String selectGraduation(@RequestParam Map<String,String> map,HttpServletRequest request){
			
			JSONArray json =  null;
			try {
				String specialtyId = null ;
				String userId = null;
				String userName = map.get("userName");
				if(userName==null||"".equals(userName.trim())){
						userId = map.get("userId");
					if("0".equals(userId)){
						 userId = CookieUtil.getValueByCookie(request, "uvocookie", "id");
					}
				}else{
					userName="%"+userName+"%";
				}
				String specialtyName = map.get("specialtyName");
				if(specialtyName==null||"".equals(specialtyName.trim())){
					 specialtyId = map.get("specialtyId");
				}else{
					specialtyName="%"+specialtyName+"%";
				}
				String syear = request.getParameter("syear");
				Map<String,Object> maps = new HashMap<String, Object>();
				maps.put("syear",syear);
				maps.put("specialtyId", specialtyId);
				maps.put("userId", userId);
				maps.put("specialtyName", specialtyName);
				maps.put("userName", userName);
				json = JSONArray.fromObject(assessmentInspectService.selectGraduation(maps));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
			return json.toString();
			}else{
			return "";	
			}
		}
		@ResponseBody
		@RequestMapping("deleteGraduation")
		public String deleteGraduation(@RequestParam("ids[]")int[] ids){
			int rows = 0;
			for (int i = 0; i < ids.length; i++) {
				rows = 	assessmentInspectService.deleteGraduation(ids[i]);	
			}
			if(rows>0){
				return "删除成功";
			}else{
				return "删除失败";
			}
		}
		
		@ResponseBody
		@RequestMapping("getRole")
		public String selectRoleBySpeId(HttpServletRequest request){
			JSONArray json =  null;
			try {
				Integer specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
				Integer userId = Integer.parseInt(CookieUtil.getValueByCookie(request, "uvocookie", "id"));
				json = JSONArray.fromObject(assessmentInspectService.selectRoleBySpeId(specialtyId, userId));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
			return json.toString();
			}else{
			return "";	
			}
		}
		@ResponseBody
		@RequestMapping("getPeople")
		public String selectPeopleBySpeId(HttpServletRequest request){
			JSONArray json =  null;
			try {
				Integer specialtyId = Integer.parseInt(request.getParameter("specialtyId"));
				String syear = request.getParameter("syear");
				json = JSONArray.fromObject(assessmentInspectService.selectPeopleBySpeId(specialtyId, syear));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
			return json.toString();
			}else{
			return "";	
			}
		}
		
		@ResponseBody
		@RequestMapping("selectSpecInfo")
		public String selectSpecInfo(HttpServletRequest request){
			JSONArray json =  null;
			try {
				Map<String,Object> map = new HashMap<String, Object>();
				map.put("syear", request.getParameter("syear"));
				map.put("engineer", request.getParameter("engineer"));
				json = JSONArray.fromObject(assessmentInspectService.selectSpecInfo(map));
			} catch (Exception e) {
				e.printStackTrace();
			}
			if(json!=null){
			return json.toString();
			}else{
			return "";	
			}
		}
}
