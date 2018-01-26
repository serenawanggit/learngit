package audit.service.impl;

import java.text.ParseException;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentSpecialtyInfoGuanliyuanMapper;
import audit.model.quality.vo.JDuGenZ;
import audit.service.assess.AssessmentSpecialtyInfoGuanliyuanServices;
import audit.util.lzr.LzrTimeUntil;

@Service("AssessmentSpecialtyInfoGuanliyuanServices")
public class AssessmentSpecialtyInfoGuanliyuanServicesImpl implements
		AssessmentSpecialtyInfoGuanliyuanServices {
	@Autowired
	AssessmentSpecialtyInfoGuanliyuanMapper guanliyuanMapper;
	
	/**
	 * 整改列表
	 */
	public List<Map<Object, Object>> selectZgList(Map<Object, Object> map) {
		return guanliyuanMapper.selectZgList(map);
	}

	public  List<JDuGenZ>  selectJdlt(Map<Object, Object> map) {
		 List<JDuGenZ> selectJdlt = guanliyuanMapper.selectJdlt(map);
		 //初始化map 数量
		Map<String, JDuGenZ> map1=new HashMap<String, JDuGenZ>();
		for (JDuGenZ jDuGenZ : selectJdlt) {
			if(jDuGenZ!=null){
				String specialty_id = jDuGenZ.getSpecialty_id();
				if(specialty_id!=null){
					map1.put(specialty_id, jDuGenZ);
				}
			}
		}
		
		for (JDuGenZ jDuGenZ : selectJdlt) {
			if(jDuGenZ!=null){
				String audit_zt = jDuGenZ.getAudit_zt();//获得审核状态；
				String self_zt = jDuGenZ.getSelf_assess_zt();
				if(audit_zt!=null&&self_zt!=null){
					//获得map1里面的当前对象
					JDuGenZ jDuGenZ2 = map1.get(jDuGenZ.getSpecialty_id());
					String item = jDuGenZ.getItem();//获得item
					if("1".equals(item)){
						//如果是整改
						if(Integer.parseInt(self_zt)==1){
							jDuGenZ2.setZgStruts("已提交未审核");
						}else if("0".equals(self_zt)){
							jDuGenZ2.setZgStruts("未提交");
						}else if("2".equals(self_zt)){
							jDuGenZ2.setZgStruts("审核未通过");
						}else if("1".equals(audit_zt)){
							jDuGenZ2.setZgStruts("审核已通过");
						}
					}
					if("2".equals(item)){
						//如果是质量
						if(Integer.parseInt(self_zt)==1){
							jDuGenZ2.setZlStruts("已提交未审核");
						}else if("0".equals(self_zt)){
							jDuGenZ2.setZlStruts("未提交");
						}else if("2".equals(self_zt)){
							jDuGenZ2.setZlStruts("审核未通过");
						}else if("1".equals(audit_zt)){
							jDuGenZ2.setZlStruts("审核已通过");
						}
					}
					//判断现场考查时间 状态
					String site_VISITS = jDuGenZ.getSITE_VISITS();
					try {
						int num = LzrTimeUntil.returnDateNumOfToday(site_VISITS);
						jDuGenZ2.setXcStruts(num+"");
					} catch (ParseException e) {
						jDuGenZ2.setXcStruts(0+"");
						e.printStackTrace();
					}
					map1.put(jDuGenZ.getSpecialty_id(), jDuGenZ2);
				}else{
					//移除没有任务的
					map1.remove(jDuGenZ);
				}
			}
		}
		Collection<JDuGenZ> values = map1.values();
		selectJdlt.clear();
		selectJdlt.addAll(values);
		return selectJdlt;
	}

	public List<String> selectOrganization() {
		return guanliyuanMapper.selectOrganization();
	}

	public List<String> selectZjName() {
		return guanliyuanMapper.selectZjName();
	}
	
	
}
