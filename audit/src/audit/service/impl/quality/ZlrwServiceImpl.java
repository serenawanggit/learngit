package audit.service.impl.quality;

import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Service;

import audit.common.Page;
import audit.common.ServiceResult;
import audit.dao.AsZlJdrwkgzbMapper;
import audit.dao.AsZlJdrwryglbMapper;
import audit.dao.AsZlJdrwxxMapper;
import audit.dao.AsZlZlrwxxMapper;
import audit.dao.DwVLeadershipMapper;
import audit.dao.OrganizationMapper;
import audit.dao.UserinfoMapper;
import audit.model.Organization;
import audit.model.Userinfo;
import audit.model.quality.AsZlJdrwkgzb;
import audit.model.quality.AsZlJdrwryglb;
import audit.model.quality.AsZlJdrwxx;
import audit.model.quality.AsZlZlrwxx;
import audit.model.quality.query.JdTaskQuery;
import audit.model.quality.query.JdZbQuery;
import audit.model.quality.query.TaskQuery;
import audit.model.quality.query.UserQuery;
import audit.model.quality.vo.JdTaskVo;
import audit.model.quality.vo.JdZbVo;
import audit.model.quality.vo.TaskUserVo;
import audit.model.quality.vo.TaskVo;
import audit.service.quality.ZlrwService;
import audit.util.DateTimeUtils;

@Service("zlrwService")
public class ZlrwServiceImpl implements ZlrwService{

	@Resource
	private AsZlZlrwxxMapper asZlZlrwxxMapper;
	
	@Resource
	private AsZlJdrwxxMapper asZlJdrwxxMapper;
	
	@Resource
	private AsZlJdrwkgzbMapper asZlJdrwkgzbMapper;
	
	@Resource
	private AsZlJdrwryglbMapper asZlJdrwryglbMapper;
	
	@Resource
	private UserinfoMapper userinfoMapper;
	
	@Resource
	private DwVLeadershipMapper dwVLeadershipMapper;
	
	@Resource
	private OrganizationMapper organizationMapper;
	
	public ServiceResult<Integer> addRw(AsZlZlrwxx rw) {
		ServiceResult<Integer> serviceResult = new ServiceResult<Integer>();
		rw.setRwzt(1);
		Integer insert = asZlZlrwxxMapper.insertSelective(rw);
		if(insert == 0){
			return serviceResult;
		}
		serviceResult.setData(rw.getId());
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Integer> addJdRw(JSONObject obj) {
		ServiceResult<Integer> serviceResult = new ServiceResult<Integer>();
		//插入阶段任务
		AsZlJdrwxx before = asZlJdrwxxMapper.getBeforeJdRw(Integer.parseInt(obj.get("zlRwId")+""),null);
		
		Date start = DateTimeUtils.parseStr(obj.get("jdRwStartTime")+"");
		Date end = DateTimeUtils.parseStr(obj.get("jdRwEndTime")+"");
		if(before != null){
			if(start.before(before.getJzsj())){
				serviceResult.setComment("此阶段任务开始时间应在上一阶段任务结束时间之后："+DateTimeUtils.format(before.getJzsj(), DateTimeUtils.dateString));
				serviceResult.setOk(false);
				return serviceResult;
			}
		}
		
		AsZlJdrwxx asZlJdrwxx = new AsZlJdrwxx();
		asZlJdrwxx.setJdrwmc(obj.get("jdRwName")+"");
		asZlJdrwxx.setFbsj(start);
		asZlJdrwxx.setJzsj(end);
		asZlJdrwxx.setRwfw(Integer.parseInt(obj.get("jdRwFw")+""));
		asZlJdrwxx.setZlrwid(Integer.parseInt(obj.get("zlRwId")+""));
		
		Integer maxXh = asZlJdrwxxMapper.getMaxJdXhByZlRwId(Integer.parseInt(obj.get("zlRwId")+""));
		asZlJdrwxx.setRwxh(maxXh == null ? 1:maxXh.intValue()+1);
		asZlJdrwxx.setSflgrw(1);
		asZlJdrwxx.setRwzt(1);
		asZlJdrwxxMapper.insertSelective(asZlJdrwxx);
		//插入人员
		JSONArray userIds =  obj.getJSONArray("userIds");
		for (int i = 0; i < userIds.length(); i++) {
			AsZlJdrwryglb asZlJdrwryglb = new AsZlJdrwryglb();
			asZlJdrwryglb.setJdrwid(asZlJdrwxx.getId());
			asZlJdrwryglb.setTbrid(userIds.getInt(i));
			asZlJdrwryglb.setStatus(0);
			asZlJdrwryglbMapper.insertSelective(asZlJdrwryglb);
		}
		//插入指标
		JSONObject zb =  obj.getJSONObject("zbs");
		JSONArray ids = zb.getJSONArray("ids");
		JSONArray values = zb.getJSONArray("values");
		JSONArray sfs = zb.getJSONArray("sfs");
		for (int i = 0; i < ids.length(); i++) {
			AsZlJdrwkgzb asZlJdrwkgzb = new AsZlJdrwkgzb();
			asZlJdrwkgzb.setJdrwid(asZlJdrwxx.getId());
			asZlJdrwkgzb.setKgzbdm(ids.getString(i));
			asZlJdrwkgzb.setQwz(values.getDouble(i));
			asZlJdrwkgzb.setSf(sfs.getString(i));
			asZlJdrwkgzbMapper.insertSelective(asZlJdrwkgzb);
		}
		serviceResult.setOk(true);
		return serviceResult;
		
	}

	public ServiceResult<Page<JdTaskVo>> getJdTaskListByQuery(
			JdTaskQuery query) {
		ServiceResult<Page<JdTaskVo>> serviceResult = new ServiceResult<Page<JdTaskVo>>();
		int countRecord = asZlJdrwxxMapper.getJdTaskCountByQuery(query);
		Page<JdTaskVo> page = new Page<JdTaskVo>(query.getCurrentPage(), countRecord, query.getOnePageCount());
		List<JdTaskVo> list = asZlJdrwxxMapper.getJdTaskListByQuery(query, page.getStartIndex(), page.getEndIndex());
		if(list.isEmpty()){
			serviceResult.setComment("没有符合条件的阶段任务");
			serviceResult.setData(page);
			return serviceResult;
		}
		
		
		page.setList(list);
		serviceResult.setData(page);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Map<String,Object>> getJdTaskDetails(JdTaskQuery query) {
		ServiceResult<Map<String,Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String,Object> map = new HashMap<String, Object>();
		//任务信息
		JdTaskVo taskDetails = asZlJdrwxxMapper.getTaskDetailsByQuery(query);
		if(taskDetails == null){
			serviceResult.setComment("没有相应的阶段任务");
			return serviceResult;
		}
		map.put("jdRw", taskDetails);
		
		ServiceResult<TaskVo> taskResult = selectByPrimaryKey(taskDetails.getZlrwid());
		map.put("zlRw", taskResult.getData());
		
		//人员信息
		List<TaskUserVo> list = asZlJdrwryglbMapper.getAllUserByJdRwId(taskDetails.getId());
		int[] groupIds = {};
		int[] userIds = {};
		String names = "";
		if(!list.isEmpty()){
			groupIds = new int[list.size()];
			userIds = new int[list.size()];
			for (int i = 0; i < list.size(); i++) {
				TaskUserVo user = list.get(i);
				groupIds[i] = user.getOrganization();
				userIds[i] = user.getTbrid();
				names += user.getUserName()+";";
			}
		}
		map.put("groupIds", groupIds);
		map.put("userIds", userIds);
		map.put("names", names);
		//指标信息
		List<JdZbVo> zbList = asZlJdrwkgzbMapper.getAllZbByJdRwId(taskDetails.getId());
		map.put("zbList", zbList);
		
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> updateUserTaskByQuery(JdTaskQuery query) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		List<JdZbVo> list = asZlJdrwkgzbMapper.getAllZbByJdRwId(query.getId());
		if(!list.isEmpty()){
			//获取用户信息
			Userinfo user = userinfoMapper.selectByPrimaryKey(query.getUserId());
			//获取当前年份
			Calendar now = Calendar.getInstance();
			now.setTime(new Date());
			int year = now.get(Calendar.YEAR);
			String comment ="";
			for (int i = 0; i < list.size(); i++) {
				JdZbVo vo = list.get(i);
				Integer zbValue = null;
				if(vo.getTaskLevel().intValue() == 3){
					zbValue = dwVLeadershipMapper.getValueByQuery(year, null, user.getSpecialty(), vo.getKgzbdm());
					if(zbValue == null ){
						zbValue = dwVLeadershipMapper.getValueByQuery((year-1), null, user.getSpecialty(), vo.getKgzbdm());
					}
				}else{
					zbValue = dwVLeadershipMapper.getValueByQuery(year, user.getOrganization(), null, vo.getKgzbdm());
					if(zbValue == null ){
						zbValue = dwVLeadershipMapper.getValueByQuery((year-1), user.getOrganization(), null, vo.getKgzbdm());
					}
				}
				vo.setNowValue(zbValue);
				//期望值
	           ScriptEngineManager scriptEngineMgr = new ScriptEngineManager();
	           ScriptEngine jsEngine = scriptEngineMgr.getEngineByName("JavaScript" );
	           try {
	        	   //获取
					if((jsEngine.eval(zbValue +vo.getSf()+vo.getQwz())+"").equals("false")){
						comment +="指标项："+vo.getZbName()+",尚未完成\n";
					   }
				} catch (ScriptException e) {
					e.printStackTrace();
				}
			}
			if(!comment.equals("")){
				serviceResult.setComment(comment);
				return serviceResult;
			}
		}
		int num = asZlJdrwryglbMapper.updateByUserIdAndJdId(query.getId(), query.getUserId());
		if(num == 1){
			serviceResult.setOk(true);
			return serviceResult;
		}
		return serviceResult;
	}

	public ServiceResult<Page<TaskVo>> getZlRwListByQuery(TaskQuery query) {
		ServiceResult<Page<TaskVo>> serviceResult = new ServiceResult<Page<TaskVo>>();
		int countRecord = asZlZlrwxxMapper.selectCountByQuery(query);
		Page<TaskVo> page = new Page<TaskVo>(query.getCurrentPage(), countRecord, query.getOnePageCount());
		List<TaskVo> list = asZlZlrwxxMapper.selectListByQuery(query, page.getStartIndex(), page.getEndIndex());
		if(list.isEmpty()){
			serviceResult.setComment("没有符合条件的质量任务");
			serviceResult.setData(page);
			return serviceResult;
		}
		page.setList(list);
		serviceResult.setData(page);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<String> deleteZlRw(String ids) {
		ServiceResult<String> serviceResult = new ServiceResult<String>();
		String[] id = ids.split(",");
		String hasChangeId = "";
		/*//查看是否有已更新的任务
		for (int i = 0; i < id.length; i++) {
			int hasChange = asZlJdrwryglbMapper.getChangeCountbyZlRwId(Integer.parseInt(id[i]));
			if(hasChange >=1){
				if(hasChangeId.equals("")){
					hasChangeId += id[i];
				}else{
					hasChangeId += "," + id[i];
				}
			}
		}*/
		//没有已更新的，可以删除
		if(hasChangeId.equals("")){
			for (int i = 0; i < id.length; i++) {
				AsZlZlrwxx record = new AsZlZlrwxx();
				record.setRwzt(4);
				record.setId(Integer.parseInt(id[i]));
				asZlZlrwxxMapper.updateByPrimaryKeySelective(record);
				//asZlZlrwxxMapper.deleteByPrimaryKey(Integer.parseInt(id[i]));
			}
			serviceResult.setOk(true);
			return serviceResult;
		}
		serviceResult.setData(hasChangeId);
		return serviceResult;
	}

	public ServiceResult<TaskVo> selectByPrimaryKey(Integer id) {
		ServiceResult<TaskVo> serviceResult = new ServiceResult<TaskVo>();
		TaskQuery query = new TaskQuery();
		query.setId(id);
		List<TaskVo> list = asZlZlrwxxMapper.selectListByQuery(query, 0, 1);
		serviceResult.setData(list.get(0));
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> updateZlRw(AsZlZlrwxx rw) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		/*Integer id = rw.getId();
		//检查是否有阶段任务更新
		int hasChange = asZlJdrwryglbMapper.getChangeCountbyZlRwId(id);
		if(hasChange >= 1){
			serviceResult.setComment("已有任务执行人更新任务，该任务不可更改");
			return serviceResult;
		}*/
		//更新
		asZlZlrwxxMapper.updateByPrimaryKeySelective(rw);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Map<String, Object>> getProgress(Integer userId, Integer rwId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String, Object>>();
		Map<String, Object> map = asZlJdrwryglbMapper.getFastTask(userId, rwId);
		if(map != null){
			map.put("xh", map.get("RWXH")+"");
			Integer level = Integer.parseInt(map.get("LEVEL")+"");
			Integer bmId = Integer.parseInt(map.get("CJBMDM")+"");
			if(level.intValue() == 3){
				Integer zySsXyId = Integer.parseInt(map.get("zyssxyid")+"");
				Organization organization = organizationMapper.selectByPrimaryKey(zySsXyId);
				map.put("name", organization.getName());
			}else{
				Organization organization = organizationMapper.selectByPrimaryKey(bmId);
				map.put("name", organization.getName());
			}
			serviceResult.setData(map);
			serviceResult.setOk(true);
		}
		return serviceResult;
	}

	public ServiceResult<Boolean> checkUpdate(Integer id, Integer userId) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		//阶段任务信息
		AsZlJdrwxx jd = asZlJdrwxxMapper.selectByPrimaryKey(id);
		//非连贯任务，可以更新
		if(jd.getSflgrw() == 2){
			serviceResult.setOk(true);
			return serviceResult;
		}
		
		Map<String, Object> map = asZlJdrwryglbMapper.getFastTask(userId, jd.getZlrwid());
		if(map == null){
			AsZlJdrwxx nextJd = asZlJdrwxxMapper.getNextByRwId(userId, jd.getZlrwid(), 0);
			if(jd.getRwxh().intValue() == nextJd.getRwxh().intValue()){
				serviceResult.setOk(true);
				return serviceResult;
			}
			serviceResult.setComment("请优先完成任务序号为"+nextJd.getRwxh()+"的阶段任务");
		}else{
			Integer xh = Integer.parseInt(map.get("RWXH")+"");
			AsZlJdrwxx nextJd = asZlJdrwxxMapper.getNextByRwId(userId, jd.getZlrwid(), xh);
			if(jd.getRwxh().intValue() == nextJd.getRwxh().intValue()){
				serviceResult.setOk(true);
				return serviceResult;
			}
			serviceResult.setComment("请优先完成任务序号为"+(xh.intValue()+1)+"的阶段任务");
		}
		return serviceResult;
	}

	public ServiceResult<Page<TaskUserVo>> getUserListByQuery(UserQuery query) {
		ServiceResult<Page<TaskUserVo>> serviceResult = new ServiceResult<Page<TaskUserVo>>();
		int countRecord = asZlJdrwryglbMapper.selectCountByQuery(query);
		Page<TaskUserVo> page = new Page<TaskUserVo>(query.getCurrentPage(), countRecord, query.getOnePageCount());
		List<TaskUserVo> list = asZlJdrwryglbMapper.selectByQuery(query, page.getStartIndex(), page.getEndIndex());
		if(list != null && !list.isEmpty()){
			page.setList(list);
			serviceResult.setData(page);
			serviceResult.setOk(true);
			return serviceResult;
		}
		serviceResult.setComment("暂无人员分配");
		return serviceResult;
	}

	public ServiceResult<Boolean> deleteJdRwById(Integer id) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		//删除阶段任务下的人员信息
		asZlJdrwryglbMapper.deleteByJdRwId(id);
		//删除阶段任务下的指标信息
		asZlJdrwkgzbMapper.deleteByJdRwId(id);
		int num = asZlJdrwxxMapper.deleteByPrimaryKey(id);
		if(num == 1){
			serviceResult.setOk(true);
		}
		
		return serviceResult;
	}

	public ServiceResult<Boolean> deleteUserById(Integer id) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		int num = asZlJdrwryglbMapper.deleteByPrimaryKey(id);
		if(num == 1){
			serviceResult.setOk(true);
		}
		return serviceResult;
	}

	public ServiceResult<Page<JdZbVo>> getJdZbList(JdZbQuery query) {
		ServiceResult<Page<JdZbVo>> serviceResult = new ServiceResult<Page<JdZbVo>>();
		int countRecord = asZlJdrwkgzbMapper.selectCountByQuery(query);
		Page<JdZbVo> page = new Page<JdZbVo>(query.getCurrentPage(), countRecord, query.getOnePageCount());
		List<JdZbVo> list = asZlJdrwkgzbMapper.selectByQuery(query, page.getStartIndex(), page.getEndIndex());
		if(list != null && !list.isEmpty()){
			//获取用户信息
			Userinfo user = userinfoMapper.selectByPrimaryKey(query.getUserId());
			//获取当前年份
			Calendar now = Calendar.getInstance();
			now.setTime(new Date());
			int year = now.get(Calendar.YEAR);
			for (int i = 0; i < list.size(); i++) {
				JdZbVo vo = list.get(i);
				Integer zbValue = null;
				if(vo.getTaskLevel().intValue() == 3){
					zbValue = dwVLeadershipMapper.getValueByQuery(year, null, user.getSpecialty(), vo.getKgzbdm());
					if(zbValue == null){
						zbValue = dwVLeadershipMapper.getValueByQuery((year-1), null, user.getSpecialty(), vo.getKgzbdm());
					}
				}else{
					zbValue = dwVLeadershipMapper.getValueByQuery(year, user.getOrganization(), null, vo.getKgzbdm());
					if(zbValue == null){
						zbValue = dwVLeadershipMapper.getValueByQuery((year-1), user.getOrganization(), null, vo.getKgzbdm());
					}
				}
				vo.setNowValue(zbValue);
			}
			page.setList(list);
			serviceResult.setData(page);
			serviceResult.setOk(true);
			return serviceResult;
		}
		return serviceResult;
	}

	public ServiceResult<Integer> updateJdRw(JSONObject obj) {
		ServiceResult<Integer> serviceResult = new ServiceResult<Integer>();
		
		//插入阶段任务
		AsZlJdrwxx before = asZlJdrwxxMapper.getBeforeJdRw(Integer.parseInt(obj.get("zlRwId")+""),Integer.parseInt(obj.get("jdRwId")+""));
		
		Date start = DateTimeUtils.parseStr(obj.get("jdRwStartTime")+"");
		Date end = DateTimeUtils.parseStr(obj.get("jdRwEndTime")+"");
		if(before != null){
			if(start.before(before.getJzsj())){
				serviceResult.setComment("此阶段任务开始时间应在上一阶段任务结束时间之后："+DateTimeUtils.format(before.getJzsj(), DateTimeUtils.dateString));
				serviceResult.setOk(false);
				return serviceResult;
			}
		}
		
		
		AsZlJdrwxx asZlJdrwxx = new AsZlJdrwxx();
		asZlJdrwxx.setJdrwmc(obj.get("jdRwName")+"");
		asZlJdrwxx.setFbsj(start);
		asZlJdrwxx.setJzsj(end);
		asZlJdrwxx.setRwfw(Integer.parseInt(obj.get("jdRwFw")+""));
		asZlJdrwxx.setZlrwid(Integer.parseInt(obj.get("zlRwId")+""));
		asZlJdrwxx.setId(Integer.parseInt(obj.get("jdRwId")+""));
		//删除阶段任务下的人员信息
		asZlJdrwryglbMapper.deleteByJdRwId(asZlJdrwxx.getId());
		//删除阶段任务下的指标信息
		asZlJdrwkgzbMapper.deleteByJdRwId(asZlJdrwxx.getId());
		
		asZlJdrwxx.setSflgrw(1);
		asZlJdrwxx.setRwzt(1);
		asZlJdrwxxMapper.updateByPrimaryKeySelective(asZlJdrwxx);
		//插入人员
		JSONArray userIds =  obj.getJSONArray("userIds");
		for (int i = 0; i < userIds.length(); i++) {
			AsZlJdrwryglb asZlJdrwryglb = new AsZlJdrwryglb();
			asZlJdrwryglb.setJdrwid(asZlJdrwxx.getId());
			asZlJdrwryglb.setTbrid(userIds.getInt(i));
			asZlJdrwryglb.setStatus(0);
			asZlJdrwryglbMapper.insertSelective(asZlJdrwryglb);
		}
		//插入指标
		JSONObject zb =  obj.getJSONObject("zbs");
		JSONArray ids = zb.getJSONArray("ids");
		JSONArray values = zb.getJSONArray("values");
		JSONArray sfs = zb.getJSONArray("sfs");
		for (int i = 0; i < ids.length(); i++) {
			AsZlJdrwkgzb asZlJdrwkgzb = new AsZlJdrwkgzb();
			asZlJdrwkgzb.setJdrwid(asZlJdrwxx.getId());
			asZlJdrwkgzb.setKgzbdm(ids.getString(i));
			asZlJdrwkgzb.setQwz(values.getDouble(i));
			asZlJdrwkgzb.setSf(sfs.getString(i));
			asZlJdrwkgzbMapper.insertSelective(asZlJdrwkgzb);
		}
		serviceResult.setOk(true);
		return serviceResult;
	}

}
