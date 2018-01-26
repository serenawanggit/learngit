package audit.service.impl.assess;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentSpecialtyInfoMapper;
import audit.model.assess.vo.SpecialtyNameAndSelfAndAssessor;
import audit.model.assess.vo.UserInfoVo;
import audit.service.assess.AssessmentSpecialtyInfoServices;

@Service("ssessmentSpecialtyInfoServices")
public class AssessmentSpecialtyInfoServicesImpl implements
		AssessmentSpecialtyInfoServices {

	@Autowired
	private AssessmentSpecialtyInfoMapper assessmentSpecialtyInfoMapper;

	public String insertspecialty(String scode, String sname, String sfgk,
			String rz,int id,int schoolid) {
		int a = assessmentSpecialtyInfoMapper.insertspecialty(scode, sname,
				sfgk, rz, id,schoolid);
		if (a >= 1) {
			return "添加成功！";
		}
		return "添加失败！";
	}

	public List<Map<String, Object>> findSpecialtyInfo(String seachvalue,String id) {
		return assessmentSpecialtyInfoMapper.findSpecialtyInfo(seachvalue, id);
	}

	public String updateSpecialtyInfo(String sname, String scode, String sfgk,
			String rz, String id) {
		int a = assessmentSpecialtyInfoMapper.updateSpecialtyInfo(sname, scode,
				sfgk, rz, id);
		if (a >= 1) {
			return "修改成功！";
		}
		return "修改失败";
	}

	public String delSpecialtyInfo(String id) {
		int a = assessmentSpecialtyInfoMapper.delSpecialtyInfo(id);
		if (a >= 1) {
			return "删除成功！";
		}
		return "删除失败";
	}
	
	public String insertAssessDate(JSONArray jsonArray){
		for (int i = 0; i < jsonArray.length(); i++) {
		      assessmentSpecialtyInfoMapper.insertAssessDate(
		    		  JSONObject.fromObject(jsonArray.get(i)).getString("syear"),
		    		  JSONObject.fromObject(jsonArray.get(i)).getString("zpdate"),
		              JSONObject.fromObject(jsonArray.get(i)).getString("wpdate"),
		              JSONObject.fromObject(jsonArray.get(i)).getString("xcksdate"),
		              JSONObject.fromObject(jsonArray.get(i)).getString("zyid"),
		              JSONObject.fromObject(jsonArray.get(i)).getString("pgtype")
		    		  );
			}
		return null;
	}
	
	public List<Map<String, Object>> findSpecialtyAndDate(String searchvalue,String pgid){
		return assessmentSpecialtyInfoMapper.findSpecialtyAndDate(searchvalue,pgid);
	}
   public String updateSpecialtyAndDateInfo(String syearh,String zpdate,String wpdate,String xcksdate,String id,String pgid){
	   int a=assessmentSpecialtyInfoMapper.updateSpecialtyAndDateInfo(syearh,zpdate,wpdate,xcksdate,id,pgid);
		 if (a>=1) {
				return "修改成功！";
			  }
		return "修改失败";
   }
   
	public String delSpecialtyAndDateInfo(String id) {
		 int a=assessmentSpecialtyInfoMapper.delSpecialtyAndDateInfo(id);
		 if (a>=1) {
				return "删除成功！";
			  }
		return "删除失败";
	}
	public List<SpecialtyNameAndSelfAndAssessor> findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor(
			String searchvalue,String pgid) {
		// 查询所有的数据
		List<SpecialtyNameAndSelfAndAssessor> list = assessmentSpecialtyInfoMapper
				.findSpecialtyInfoBySpecialtyNameAndSelfAndAssessor(searchvalue,pgid);
		// 重新创建map集合
		Map<String, SpecialtyNameAndSelfAndAssessor> map = new HashMap<String, SpecialtyNameAndSelfAndAssessor>();
		// 遍历所有数据
		for (SpecialtyNameAndSelfAndAssessor specialtyNameAndSelfAndAssessor : list) {
			// 获得专业名称
			String specialty_NAME = specialtyNameAndSelfAndAssessor
					.getSPECIALTY_NAME();
			map.put(specialty_NAME,specialtyNameAndSelfAndAssessor);
		}
		for (SpecialtyNameAndSelfAndAssessor specialtyNameAndSelfAndAssessor : list) {
			// 获得专业名称
			String specialty_NAME = specialtyNameAndSelfAndAssessor
					.getSPECIALTY_NAME();
			String showname = specialtyNameAndSelfAndAssessor
					.getShowname();
			String assess_TYPE = specialtyNameAndSelfAndAssessor
					.getASSESS_TYPE();
			//用户 的uid
			int uid = specialtyNameAndSelfAndAssessor.getUID();
			// 通过专业获取对象
			SpecialtyNameAndSelfAndAssessor specialtyNameAndSelfAndAssessor2 = map
					.get(specialty_NAME);
			
			int user_INFO_ID = specialtyNameAndSelfAndAssessor.getUSER_INFO_ID();
			// 1自评人2审核人
			if ("1".equals(assess_TYPE)) {
				//填充自评
				specialtyNameAndSelfAndAssessor2
						.setASSESS_REMARK_USER(showname);
				//填补自评ZID
				specialtyNameAndSelfAndAssessor2.setZID(uid);
				//填充Z_u_id
				specialtyNameAndSelfAndAssessor2.setZ_u_id(user_INFO_ID);
			}
			if ("2".equals(assess_TYPE)) {
				//填充审核
				specialtyNameAndSelfAndAssessor2
						.setASSESS_USER_ASSESSOR(showname);
				//填补审核SID
				specialtyNameAndSelfAndAssessor2.setSID(uid);
				//填充Z_u_id
				specialtyNameAndSelfAndAssessor2.setS_u_id(user_INFO_ID);
			}
			
			if("3".equals(assess_TYPE)){
				//网评专家
				String wangPingZhuanJiaId = specialtyNameAndSelfAndAssessor2.getWangPingZhuanJiaId();
				if(wangPingZhuanJiaId==null){
					wangPingZhuanJiaId="";
				}
				wangPingZhuanJiaId+=uid+",";
				String wangPingZhuanJiaName = specialtyNameAndSelfAndAssessor2.getWangPingZhuanJiaName();
				if(wangPingZhuanJiaName==null){
					wangPingZhuanJiaName="";
				}
				wangPingZhuanJiaName+=showname+",";
				//存网评对应的 w_u_id
				String w_u_id = specialtyNameAndSelfAndAssessor2.getW_u_id();
				if(w_u_id==null){
					w_u_id="";
				}
				w_u_id+=user_INFO_ID+",";
				
				specialtyNameAndSelfAndAssessor2.setWangPingZhuanJiaId(wangPingZhuanJiaId);
				specialtyNameAndSelfAndAssessor2.setWangPingZhuanJiaName(wangPingZhuanJiaName);
				specialtyNameAndSelfAndAssessor2.setW_u_id(w_u_id);
			}if("4".equals(assess_TYPE)){
				//现场考察专家 id 
				String xianChangKaoChaZhuanJiaId = specialtyNameAndSelfAndAssessor2.getXianChangKaoChaZhuanJiaId();
				if(xianChangKaoChaZhuanJiaId==null){
					xianChangKaoChaZhuanJiaId="";
				}
				xianChangKaoChaZhuanJiaId+=uid+",";
				//现场考察专家 名字
				String xianChangKaoChaZhuanJiaName = specialtyNameAndSelfAndAssessor2.getXianChangKaoChaZhuanJiaName();
				if(xianChangKaoChaZhuanJiaName==null){
					xianChangKaoChaZhuanJiaName="";
				}
				xianChangKaoChaZhuanJiaName+=showname+",";
				//现场考察专家 对应的xckc_u_id
				String xckc_u_id = specialtyNameAndSelfAndAssessor2.getXckc_u_id();
				if(xckc_u_id==null){
					xckc_u_id="";
				}
				xckc_u_id+=user_INFO_ID+",";
				
				
				specialtyNameAndSelfAndAssessor2.setXianChangKaoChaZhuanJiaId(xianChangKaoChaZhuanJiaId);
				specialtyNameAndSelfAndAssessor2.setXianChangKaoChaZhuanJiaName(xianChangKaoChaZhuanJiaName);
				specialtyNameAndSelfAndAssessor2.setXckc_u_id(xckc_u_id);
				
			}
			if("5".equals(assess_TYPE)){
				String xianChangKaoChaZuZhangId = specialtyNameAndSelfAndAssessor2.getXianChangKaoChaZuZhangId();
				if(xianChangKaoChaZuZhangId==null){
					xianChangKaoChaZuZhangId="";
				}
				xianChangKaoChaZuZhangId+=uid+",";
				
				
				String xianChangKaoChaZuZhangName = specialtyNameAndSelfAndAssessor2.getXianChangKaoChaZuZhangName();
				if(xianChangKaoChaZuZhangName==null){
					xianChangKaoChaZuZhangName="";
				}
				xianChangKaoChaZuZhangName+=showname+",";
				
				
				String xckczj_u_id = specialtyNameAndSelfAndAssessor2.getXckczj_u_id();
				if(xckczj_u_id==null){
					xckczj_u_id="";
				}
				
				xckczj_u_id+=user_INFO_ID+",";
				
				specialtyNameAndSelfAndAssessor2.setXianChangKaoChaZuZhangId(xianChangKaoChaZuZhangId);
				specialtyNameAndSelfAndAssessor2.setXianChangKaoChaZuZhangName(xianChangKaoChaZuZhangName);
				specialtyNameAndSelfAndAssessor2.setXckczj_u_id(xckczj_u_id);
				
			}
		
			map.put(specialty_NAME, specialtyNameAndSelfAndAssessor2);
		}
		
		Collection<SpecialtyNameAndSelfAndAssessor> values = map.values();
		List<SpecialtyNameAndSelfAndAssessor> showList=new ArrayList<SpecialtyNameAndSelfAndAssessor>();
		
		for (SpecialtyNameAndSelfAndAssessor specialtyNameAndSelfAndAssessor : values) {
			//网评人
			String wangPingZhuanJiaId = specialtyNameAndSelfAndAssessor.getWangPingZhuanJiaId();
			//去掉末尾逗号
			if(wangPingZhuanJiaId!=null){
				String substring = wangPingZhuanJiaId.substring(0, wangPingZhuanJiaId.length()-1);
				specialtyNameAndSelfAndAssessor.setWangPingZhuanJiaId(substring);
			}
			
			String wangPingZhuanJiaName = specialtyNameAndSelfAndAssessor.getWangPingZhuanJiaName();
			//去掉末尾逗号
			if(wangPingZhuanJiaName!=null){
				String substring = wangPingZhuanJiaName.substring(0, wangPingZhuanJiaName.length()-1);
				specialtyNameAndSelfAndAssessor.setWangPingZhuanJiaName(substring);
			}
			
			//现场考察
			String xianChangKaoChaZhuanJiaId = specialtyNameAndSelfAndAssessor.getXianChangKaoChaZhuanJiaId();
			//去掉末尾逗号
			if(xianChangKaoChaZhuanJiaId!=null){
				String substring = xianChangKaoChaZhuanJiaId.substring(0, xianChangKaoChaZhuanJiaId.length()-1);
				specialtyNameAndSelfAndAssessor.setXianChangKaoChaZhuanJiaId(substring);
			}

			
			String xianChangKaoChaZhuanJiaName = specialtyNameAndSelfAndAssessor.getXianChangKaoChaZhuanJiaName();
			//去掉末尾逗号
			if(xianChangKaoChaZhuanJiaName!=null){
				String substring = xianChangKaoChaZhuanJiaName.substring(0, xianChangKaoChaZhuanJiaName.length()-1);
				specialtyNameAndSelfAndAssessor.setXianChangKaoChaZhuanJiaName(substring);
			}
			
			//现场考察组长
			
			String xianChangKaoChaZuZhangName = specialtyNameAndSelfAndAssessor.getXianChangKaoChaZuZhangName();
			//去掉末尾逗号
			if(xianChangKaoChaZuZhangName!=null){
				String substring = xianChangKaoChaZuZhangName.substring(0, xianChangKaoChaZuZhangName.length()-1);
				specialtyNameAndSelfAndAssessor.setXianChangKaoChaZuZhangName(substring);
			}
			
			
			
			String w_u_id = specialtyNameAndSelfAndAssessor.getW_u_id();
			
			if(w_u_id!=null){
				String substring = w_u_id.substring(0, w_u_id.length()-1);
				specialtyNameAndSelfAndAssessor.setW_u_id(substring);
			}
//			int num1=specialtyNameAndSelfAndAssessor.getDATE_SPECIALTY_ID();
//			System.out.println("！！！！！！！！！！！！！！！！"+num1);
//			if(specialtyNameAndSelfAndAssessor.getDATE_SPECIALTY_ID()==23){
//				String id=specialtyNameAndSelfAndAssessor.getXianChangKaoChaZhuanJiaId();
//				System.out.println(id);
//			}
			showList.add(specialtyNameAndSelfAndAssessor);
		}
		return showList;
	}
	/**
	 * 修改(自评人+审核人)
	 * @param andAssessor 包含参数 ASSESS_SITE_USER,UID
	 */
	public int updateSpecialtyInfoBySelfAndAssessor(
			SpecialtyNameAndSelfAndAssessor andAssessor) {
		assessmentSpecialtyInfoMapper.updateSpecialtyInfoBySelfAndAssessor(andAssessor);
		return 0;
	}
	
	/**
	 * 查询userinfo 
	 * 
	 */
	public List<Map<String, Object>> findUserInfo(UserInfoVo infoVo){
		List<Map<String, Object>> findUserInfo = assessmentSpecialtyInfoMapper.findUserInfo(infoVo);
		return  findUserInfo;
	}

	public List<Map<String, Object>> findUserInfoByType(UserInfoVo infoVo) {
		List<Map<String, Object>> findUserInfoByType = assessmentSpecialtyInfoMapper.findUserInfoByType(infoVo);
		return findUserInfoByType;
	}
	public List<Map<String, Object>> getAllData(Integer id,Integer speId) {
		
		return	assessmentSpecialtyInfoMapper.getAllData(id,speId);
	}

	public  List<Map<String, Object>> selectById(Integer id) {
		return		assessmentSpecialtyInfoMapper.selectById(id);
	}
	public List<Map<String, Object>> getAllSpecialty(Integer id,String syear,Integer pgtype) {
		return assessmentSpecialtyInfoMapper.getAllSpecialty(id,syear,pgtype);
	}

	
	@Override
	public List<Map<String, Object>> loadtitle() {
		return assessmentSpecialtyInfoMapper.loadtitle();
	}

	
	public String saveUserAndSpecialty(String date_specialty_id,String s_u_id,String z_u_id,
    		String saveuserid,String type,String old_ids,String new_ids,String _u_id) {
		//表示选中的是自评
		if("1".equals(type)){
			//表示没有，需要插入
			if("0".equals(z_u_id)){
				assessmentSpecialtyInfoMapper.insertSpecialtyInfoByASSESSMENT_USER_INFO(date_specialty_id, saveuserid, type);
			}else{//表示有， 需要修改
				assessmentSpecialtyInfoMapper.updateSpecialtyInfoByASSESSMENT_USER_INFO(saveuserid, z_u_id);
			}
		}else if("2".equals(type)){//表示选中的审核
			//表示没有，需要插入
			if("0".equals(s_u_id)){
				assessmentSpecialtyInfoMapper.insertSpecialtyInfoByASSESSMENT_USER_INFO(date_specialty_id, saveuserid, type);
			}else{//表示有， 需要修改
				assessmentSpecialtyInfoMapper.updateSpecialtyInfoByASSESSMENT_USER_INFO(saveuserid, s_u_id);
			}
		}else if("3".equals(type)){//表示选择网评人
			
			String[] _u_ids =_u_id.split(",");
			
			String[] old_ids2 = old_ids.split(",");
			List<String> old_ids2list=new ArrayList<String>();
			for (int i = 0; i < old_ids2.length; i++) {
				old_ids2list.add(old_ids2[i]);
			}
			String[] new_ids2 = new_ids.split(",");
			List<String> new_ids2list=new ArrayList<String>();
			for (int i = 0; i < new_ids2.length; i++) {
				new_ids2list.add(new_ids2[i]);
			}
			
			for (int i = 0; i < old_ids2list.size(); i++) {
				String old_id = old_ids2list.get(i);
				//如果新的里面没有老的 delete
				if(!new_ids2list.contains(old_id)){
					String  user_info_id=_u_ids[i];
					assessmentSpecialtyInfoMapper.deleteSpecialtyInfoByASSESSMENT_USER_INFO(user_info_id);
				};
			}
			for (String new_id : new_ids2list) {
				//老的没有新的 inert
				if(!old_ids2list.contains(new_id)){
					assessmentSpecialtyInfoMapper.insertSpecialtyInfoByASSESSMENT_USER_INFO(date_specialty_id, new_id, type);
				}
			}
		}else if("4".equals(type)){//表示选择网评人
			
			String[] _u_ids =_u_id.split(",");
			
			String[] old_ids2 = old_ids.split(",");
			List<String> old_ids2list=new ArrayList<String>();
			for (int i = 0; i < old_ids2.length; i++) {
				old_ids2list.add(old_ids2[i]);
			}
			String[] new_ids2 = new_ids.split(",");
			List<String> new_ids2list=new ArrayList<String>();
			for (int i = 0; i < new_ids2.length; i++) {
				new_ids2list.add(new_ids2[i]);
			}
			
			for (int i = 0; i < old_ids2list.size(); i++) {
				String old_id = old_ids2list.get(i);
				//如果新的里面没有老的 delete
				if(!new_ids2list.contains(old_id)){
					String  user_info_id=_u_ids[i];
					assessmentSpecialtyInfoMapper.deleteSpecialtyInfoByASSESSMENT_USER_INFO(user_info_id);
				};
			}
			for (String new_id : new_ids2list) {
				//老的没有新的 inert
				if(!old_ids2list.contains(new_id)){
					assessmentSpecialtyInfoMapper.insertSpecialtyInfoByASSESSMENT_USER_INFO(date_specialty_id, new_id, type);
				}
			}
		}else if("5".equals(type)){//表示选择网评人
			
			String[] _u_ids =_u_id.split(",");
			
			String[] old_ids2 = old_ids.split(",");
			List<String> old_ids2list=new ArrayList<String>();
			for (int i = 0; i < old_ids2.length; i++) {
				old_ids2list.add(old_ids2[i]);
			}
			String[] new_ids2 = new_ids.split(",");
			List<String> new_ids2list=new ArrayList<String>();
			for (int i = 0; i < new_ids2.length; i++) {
				new_ids2list.add(new_ids2[i]);
			}
			
			for (int i = 0; i < old_ids2list.size(); i++) {
				String old_id = old_ids2list.get(i);
				//如果新的里面没有老的 delete
				if(!new_ids2list.contains(old_id)){
					String  user_info_id=_u_ids[i];
					assessmentSpecialtyInfoMapper.deleteSpecialtyInfoByASSESSMENT_USER_INFO(user_info_id);
				};
			}
			for (String new_id : new_ids2list) {
				//老的没有新的 inert
				if(!old_ids2list.contains(new_id)){
					assessmentSpecialtyInfoMapper.insertSpecialtyInfoByASSESSMENT_USER_INFO(date_specialty_id, new_id, type);
				}
			}
		}
		return "";
	}

	
	/*查询专业评估*/
	@Override
	public List<Map<String, Object>> selecttype_name(int id) {
		return assessmentSpecialtyInfoMapper.selectTYPE_NAME(id);
	}

	/**
	 * 查询全部专业信息
	 */
	@Override
	public List<Map<String, Object>> findAllSpecialtyInfo(Integer pgType) {
		return assessmentSpecialtyInfoMapper.findAllSpecialtyInfo(pgType);
	}

	@Override
	public List<Map<String, Object>> findSpecialtyInfoBySpecialtyId(
			String id) {
		return assessmentSpecialtyInfoMapper.findSpecialtyInfoBySpecialtyId(id);
	}

	@Override
	public List<Map<String, Object>> getSpecialtyIdByName(String name) {
		return assessmentSpecialtyInfoMapper.getSpecialtyIdByName(name);
	}

}
