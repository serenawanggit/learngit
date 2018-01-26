package audit.service.impl.access;

import java.io.File;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.stereotype.Service;

//import com.sun.xml.rpc.processor.modeler.j2ee.xml.string;

import audit.common.Page;
import audit.common.ServiceResult;
import audit.dao.AsAccessDataInfoMapper;
import audit.dao.AsAccessIndexBaseMapper;
import audit.dao.AsAccessInfoMapper;
import audit.dao.AsAccessProfileDataDetailMapper;
import audit.dao.AsAccessProfileDataMapper;
import audit.dao.AsAccessScaleIndexMapper;
import audit.dao.AsAccessScoreScaleMapper;
import audit.dao.AsAccessScoreScaleRecordMapper;
import audit.dao.AsAccessScoreStandardMapper;
import audit.dao.AsAccessSelfEvalutionRecordMapper;
import audit.dao.AsAccessSelfEvalutionReportMapper;
import audit.dao.AsAccessSpecialtyMapper;
import audit.dao.AsAccessStandardDetailMapper;
import audit.dao.AsAccessStandardInfoMapper;
import audit.dao.AsAccessUserMapper;
import audit.dao.AsMManageMapper;
import audit.dao.DwVLeadershipMapper;
import audit.dao.SpecialtyMapper;
import audit.dao.TabSqlMapper;
import audit.model.AsMManage;
import audit.model.Specialty;
import audit.model.TabSql;
import audit.model.assess.AsAccessDataInfo;
import audit.model.assess.AsAccessIndexBase;
import audit.model.assess.AsAccessInfo;
import audit.model.assess.AsAccessProfileData;
import audit.model.assess.AsAccessProfileDataDetail;
import audit.model.assess.AsAccessScoreScale;
import audit.model.assess.AsAccessScoreScaleRecord;
import audit.model.assess.AsAccessScoreStandard;
import audit.model.assess.AsAccessSelfEvalutionRecord;
import audit.model.assess.AsAccessSelfEvalutionReport;
import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.AsAccessStandardDetail;
import audit.model.assess.AsAccessStandardInfo;
import audit.model.assess.AsAccessUser;
import audit.model.quality.query.IndicatorQuery;
import audit.service.access.SelfEvaluationService;
import audit.util.DateTimeUtils;
import audit.util.FileUtil;
import audit.util.Office2Swf;
import audit.util.StringUtil;

@Service("selfEvaluationService")
public class SelfEvaluationServiceImpl implements SelfEvaluationService{

	@Resource
	private AsAccessSpecialtyMapper asAccessSpecialtyMapper;
	
	@Resource
	private AsAccessStandardInfoMapper asAccessStandardInfoMapper;
	
	@Resource
	private AsAccessStandardDetailMapper asAccessStandardDetailMapper;
	
	@Resource
	private AsAccessScoreScaleMapper asAccessScoreScaleMapper;
	
	@Resource
	private AsAccessScaleIndexMapper asAccessScaleIndexMapper;
	
	@Resource
	private AsAccessSelfEvalutionRecordMapper asAccessSelfEvalutionRecordMapper;
	
	@Resource
	private AsAccessScoreStandardMapper asAccessScoreStandardMapper;
	
	@Resource
	private AsAccessSelfEvalutionReportMapper asAccessSelfEvalutionReportMapper;
	
	@Resource
	private AsAccessInfoMapper asAccessInfoMapper;
	
	@Resource
	private AsAccessDataInfoMapper asAccessDataInfoMapper;

	@Resource
	private DwVLeadershipMapper dwVLeadershipMapper;
	
	@Resource
	private AsAccessIndexBaseMapper asAccessIndexBaseMapper;
	
	@Resource
	private AsAccessUserMapper asAccessUserMapper;
	
	@Resource
	private AsAccessScoreScaleRecordMapper asAccessScoreScaleRecordMapper;
	
	@Resource
	private AsMManageMapper asMManageMapper;
	
	@Resource
	private AsAccessProfileDataMapper asAccessProfileDataMapper;

	@Resource
	private AsAccessProfileDataDetailMapper asAccessProfileDataDetailMapper;
	
	@Resource
	private TabSqlMapper tabSqlMapper;
	
	@Resource
	private SpecialtyMapper specialtyMapper;
	
	static ScriptEngine jseval = new ScriptEngineManager().getEngineByName("JavaScript");
	
 	public ServiceResult<Map<String, Object>> getAssessSpecialty(String year,
			String userId, Byte type, Integer orgId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		
		//根据年份和用户id及类型找到评估专业
		List<Map<String, Object>> mapList = asAccessSpecialtyMapper.getSpecialtyByYearAndUserId(year, userId, type, orgId, null);
		if(mapList == null || mapList.size() == 0){
			serviceResult.setComment("该用户没有自评专业");
			return serviceResult;
		}
		allMessage.put("specialtyList", mapList);
		for (int i = 0; i < mapList.size(); i++) {
			Map<String, Object> map = mapList.get(i);
			//开始时间转换
			Date startDateTime = DateTimeUtils.parseStr(map.get("start_datetime")+"");
			if(startDateTime != null){
				String start = DateTimeUtils.format(startDateTime,DateTimeUtils.dateString);
				map.put("start", start);
			}
			
			//结束时间转换
			Date endDateTime = DateTimeUtils.parseStr(map.get("end_datetime")+"");
			if(endDateTime != null){
				String end = DateTimeUtils.format(endDateTime,DateTimeUtils.dateString);
				map.put("end", end);
			}
			
			//剩余天数
			Date now = new Date();
			long beginTime = now.getTime(); 
			long endTime2 = endDateTime.getTime(); 
			long betweenDays = (long)((endTime2 - beginTime) / (1000 * 60 * 60 *24) + 0.5); 
			map.put("surplusDay", betweenDays);
		}
		
		//获取所有的评估体系
		List<AsAccessStandardInfo> list = asAccessStandardInfoMapper.getAllStandard();
		allMessage.put("standardList", list);
		
		//参与的年度
		List<AsAccessInfo> infoList = asAccessInfoMapper.getAllAccessByUserId(userId);
		allMessage.put("infoList", infoList);
		
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
 	
	public ServiceResult<Map<String, Object>> getAssessStandardDetailById(
			Integer standardId, Integer parentId, Integer specialtyId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		List<Map<String, Object>> list = asAccessStandardDetailMapper.getDetailList(standardId, parentId, specialtyId);
		if(list == null || list.size() ==0){
			return serviceResult;
		}
		for (int i = 0; i < list.size(); i++) {
			Map<String, Object> mapList = list.get(i);
			Integer detail = Integer.parseInt(mapList.get("id")+"");
			List<Map<String, Object>> childlist = asAccessStandardDetailMapper.getDetailList(standardId, detail, specialtyId);
			if(childlist == null || childlist.size() ==0){
				mapList.put("isLast", 1);
			}
		}
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", list);
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Map<String, Object>> getAllStandardByDetailById(
			Integer detailId, Integer accessSpecialtyId, String year) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> map = new HashMap<String, Object>();
		
		AsAccessStandardDetail detail = asAccessStandardDetailMapper.selectByPrimaryKey(detailId);
		
		List<Map<String, Object>> detaillist = asAccessStandardDetailMapper.getDetailList(detail.getStandardId(), detailId, accessSpecialtyId);
		if(detaillist != null && detaillist.size() != 0){
			return serviceResult;
		}
		
		//获取评分标准
		AsAccessScoreStandard scoreStandard = asAccessScoreStandardMapper.getByDetailId(detailId);
		map.put("scoreStandard", scoreStandard);
		
		//获取评分量表
		List<AsAccessScoreScale> list = asAccessScoreScaleMapper.getlistByDetailId(detailId);
		map.put("scoreScale", list);
		
		//获取量化指标
		List<Map<String,Object>> indexList = asAccessScaleIndexMapper.getListByDetailId(detailId);
		map.put("indexList", indexList);
		
		//评估专业
		AsAccessSpecialty specialty = asAccessSpecialtyMapper.selectByPrimaryKey(accessSpecialtyId);
		//状态数据
		List<Map<String,Object>> statusList = new ArrayList<Map<String,Object>>();
		map.put("statusList", statusList);
		for (int i = 0; i < indexList.size(); i++) {
			Map<String,Object> indexMap =indexList.get(i);
			String measure_id = indexMap.get("measure_id")+"";
			Integer zbValue = dwVLeadershipMapper.getValueByQuery(Integer.parseInt(year), null, 
					specialty.getSpecialtyId(), measure_id);
			Map<String,Object> statusMap = new HashMap<String, Object>();
			statusMap.put("zbValue", zbValue == null ? 0 : zbValue);
			statusMap.put("name", indexMap.get("MEASURE_NAME"));
			statusList.add(statusMap);
		}
		
		
		//获取评分记录
		AsAccessSelfEvalutionRecord record = asAccessSelfEvalutionRecordMapper.getRecordByDetailIdAndSpecialtyId(detailId, accessSpecialtyId);
		if(record != null){
			map.put("record", record);
			if(record.getDatas() != null && record.getDatas() !=""){
				String[] ids = record.getDatas().split(",");
				List<AsAccessDataInfo> dataList = new ArrayList<AsAccessDataInfo>();
				//获取支撑材料
				for (int i = 0; i < ids.length; i++) {
					if(!StringUtil.stringisNull(ids[i])){
						continue;
					}
					AsAccessDataInfo info = asAccessDataInfoMapper.selectByPrimaryKey(Integer.parseInt(ids[i]));
					dataList.add(info);
				}
				map.put("dataList", dataList);
			}
		}
		
		//根据评分量表计算分值
		double score = 0;
		List<AsAccessScoreScaleRecord> scaleRecordList = new ArrayList<AsAccessScoreScaleRecord>();
		for (int i = 0; i < list.size(); i++) {
			AsAccessScoreScale scale = list.get(i);
			AsAccessScoreScaleRecord scaleRecord = asAccessScoreScaleRecordMapper.selectByAccessSpecialtyIdAndScale(accessSpecialtyId, scale.getId());
			if(scaleRecord != null){
				scaleRecordList.add(scaleRecord);
				continue;
			}
			
			scaleRecord = new AsAccessScoreScaleRecord();
			scaleRecord.setAccessSpecialtyId(accessSpecialtyId);
			scaleRecord.setScaleId(scale.getId());
			if(scale.getScale() == null || scale.getScale().equals("")){
				score += scale.getScore().doubleValue();
				scaleRecord.setScore(scale.getScore().doubleValue());
				scaleRecordList.add(scaleRecord);
				continue;
			}
		
			String sf[] = scale.getScale().split("\\|");
			Integer zbValue = dwVLeadershipMapper.getValueByQuery(Integer.parseInt(year), null, 
					specialty.getSpecialtyId(), sf[1]);
			boolean a=false;
			String fenshu=null;
			try {
				a = (Boolean) jseval.eval(zbValue+sf[2]+sf[3]);
			} catch (ScriptException e2) {
				e2.printStackTrace();
			}
			if (a) {
				fenshu=scale.getScore().toString();
			}else {
				fenshu="0";
			}
			scaleRecord.setScore(fenshu == null ? 0 : Double.parseDouble(fenshu));
			scaleRecordList.add(scaleRecord);
			
			if(zbValue == null){
	        	continue;
	        }
			
			ScriptEngineManager scriptEngineMgr = new ScriptEngineManager();
	        ScriptEngine jsEngine = scriptEngineMgr.getEngineByName("JavaScript" );
	        try {
				System.out.println(jsEngine.eval(zbValue + sf[2] + sf[3] +""));
			} catch (ScriptException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
	        try {
				if((Boolean) jsEngine.eval(zbValue + sf[2] + sf[3] +"")){
					score += scale.getScore().doubleValue();
				  }
			} catch (ScriptException e) {
				e.printStackTrace();
			}   
		}
		if(record == null){
			record = new AsAccessSelfEvalutionRecord();
			record.setScore(score);
			map.put("record", record);
		}
		
		map.put("scaleRecordList", scaleRecordList);
		
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Map<String,Object>> saveSelfScore(Integer detailId,
			Double score, String dataIds, Integer accessSpecialtyId, String str, HttpServletRequest request) {
		ServiceResult<Map<String,Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		AsAccessStandardDetail detail= asAccessStandardDetailMapper.selectByPrimaryKey(detailId);
		if(detail.getScore() < (score == null ? 0:score)){
			serviceResult.setComment(detail.getName()+"评分分值过大,请重新评分");
			return serviceResult;
		}
		
		//保存评分量表的分值
		JSONArray array = JSONArray.fromString(str);
		for (int i = 0; i < array.length(); i++) {
			JSONObject object = array.getJSONObject(i);
			AsAccessScoreScaleRecord scaleRecord = 
					asAccessScoreScaleRecordMapper.selectByAccessSpecialtyIdAndScale(accessSpecialtyId, object.getInt("scaleId"));
			if(scaleRecord != null){
				scaleRecord.setScore(object.getDouble("score"));
				asAccessScoreScaleRecordMapper.updateByPrimaryKeySelective(scaleRecord);
				continue;
			}
			scaleRecord = new AsAccessScoreScaleRecord();
			scaleRecord.setAccessSpecialtyId(accessSpecialtyId);
			scaleRecord.setScaleId(object.getInt("scaleId"));
			scaleRecord.setScore(object.getDouble("score"));
			asAccessScoreScaleRecordMapper.insertSelective(scaleRecord);
		}
		
		AsAccessSelfEvalutionRecord record = asAccessSelfEvalutionRecordMapper.getRecordByDetailIdAndSpecialtyId(detailId, accessSpecialtyId);
		if(record == null){
			record = new AsAccessSelfEvalutionRecord();
			record.setDatas(dataIds);
			record.setScore(score);
			record.setAccessSpecialtyId(accessSpecialtyId);
			record.setDetailId(detailId);
			record.setStandardId(detail.getStandardId());
			asAccessSelfEvalutionRecordMapper.insertSelective(record);
		}else{
			record.setDatas(dataIds);
			record.setScore(score);
			asAccessSelfEvalutionRecordMapper.updateByPrimaryKeySelective(record);
		}

		String ids[] = dataIds.split(",");
		for (int j = 0; j < ids.length; j++) {
			if(ids[j].equals("")){
				continue;
			}
			Integer id = Integer.parseInt(ids[j]);
			try {
				getAccessDataOnline( id, request);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		//计算父级分值
		Map<String,Object> map = new HashMap<String, Object>();
		List<Integer> detailIdList = new ArrayList<Integer>();
		List<Double> scoreList = new ArrayList<Double>();
		detailIdList.add(detailId);
		scoreList.add(score);
		map.put("detailIdList", detailIdList);
		map.put("scoreList", scoreList);
		
		parentScoreScale(detailId,scoreList,detailIdList,accessSpecialtyId);
		
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}
	
	private boolean getAccessDataOnline(Integer id, HttpServletRequest request) {
		AsAccessDataInfo info = asAccessDataInfoMapper.selectByPrimaryKey(id);
		String[] OfficePostFixs = {"doc", "docx", "xls","xlsx", "ppt", "pptx","pdf","txt"};
		 ArrayList<String> office_Formats = new ArrayList<String>();
		 Collections.addAll(office_Formats, OfficePostFixs);
		if(!office_Formats.contains(info.getDataType())){
			return false;
		}
		if(info.getAccessDataOnline() != null && !info.getAccessDataOnline().equals("")){
			return true;
		}
		
		HttpSession session=request.getSession();
		ServletContext  application = session.getServletContext();    
	    String serverRealPath = application.getRealPath("/") ;
	    Long currentTime = System.currentTimeMillis();
	    String outFilePath = serverRealPath+"upload\\"+currentTime+".swf";
	    if("pdf".equals(info.getDataType())){
	    	Office2Swf.pdf2Swf(info.getSrc()+"/"+info.getName()+"."+info.getDataType(),outFilePath);
	    }else{
		    Office2Swf.office2Swf(info.getSrc()+"/"+info.getName()+"."+info.getDataType(),outFilePath);
	    }
	    info.setAccessDataOnline(currentTime+".swf");
	    info.setDataOnlineSrc("upload/"+currentTime+".swf");
	    asAccessDataInfoMapper.updateByPrimaryKeySelective(info);
	    return true;
	}
	
	
	/**
	 * 计算父级分数
	 * @return
	 * @author yjq
	 * 2015-5-22
	 */
	private boolean parentScoreScale(Integer detailId, List<Double> scoreList, List<Integer> detailIdList,  Integer specialtyId) {
		AsAccessStandardDetail detail= asAccessStandardDetailMapper.selectByPrimaryKey(detailId);
		if(detail.getParentId() != 0){
			List<AsAccessSelfEvalutionRecord> recordList = asAccessSelfEvalutionRecordMapper.getAllByParentId(detail.getParentId(), specialtyId);
			Double allScore = (double) 0;
			for (int i = 0; i < recordList.size(); i++) {
				allScore +=recordList.get(i).getScore();
			}
			AsAccessSelfEvalutionRecord record = asAccessSelfEvalutionRecordMapper.getRecordByDetailIdAndSpecialtyId(detail.getParentId() , specialtyId);
			if(record == null){
				record = new AsAccessSelfEvalutionRecord();
				record.setScore(allScore);
				record.setAccessSpecialtyId(specialtyId);
				record.setDetailId(detail.getParentId());
				record.setStandardId(detail.getStandardId());
				asAccessSelfEvalutionRecordMapper.insertSelective(record);
				parentScoreScale(detail.getParentId(), scoreList, detailIdList, specialtyId);
				detailIdList.add(detail.getParentId());
				scoreList.add(allScore);
				return true;
			}
			record.setScore(allScore);
			asAccessSelfEvalutionRecordMapper.updateByPrimaryKeySelective(record);
			detailIdList.add(detail.getParentId());
			scoreList.add(allScore);
			parentScoreScale(detail.getParentId(), scoreList, detailIdList, specialtyId);
		}
		return true;
	}
	
	public ServiceResult<Boolean> saveSelfReport(String str) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		
		str = str.replaceAll("#keng", "&nbsp;");
		
		JSONArray array = JSONArray.fromString(str);
		for (int i = 0; i < array.length(); i++) {
			JSONObject object = array.getJSONObject(i);
			Integer accessSpecialtyId = object.getInt("specialtyId");
			if(i == 0 ){
				//第一次循环，删除之前的数据
				asAccessSelfEvalutionReportMapper.deleteByAccessSpecialtyId(accessSpecialtyId);
			}
			if(object.getString("parentId").equals("0")){
				AsAccessSelfEvalutionReport report = new AsAccessSelfEvalutionReport();
				report.setAccessSpecialtyId(accessSpecialtyId);
				report.setContent(object.getString("content"));
				report.setListName(object.getString("listName"));
				report.setParentId(0);
				asAccessSelfEvalutionReportMapper.insertSelective(report);
				addChild(object.getString("id"),report.getId(),array,accessSpecialtyId); 
			}
		}
		serviceResult.setOk(true);
		return serviceResult;
	}

	public void addChild(String parentId,Integer realParentId,JSONArray array,Integer accessSpecialtyId) {
		for (int i = 0; i < array.length(); i++) {
			JSONObject object = array.getJSONObject(i);
			String thisParentId = object.getString("parentId");
			if(thisParentId.equals(parentId)){
				AsAccessSelfEvalutionReport report = new AsAccessSelfEvalutionReport();
				report.setAccessSpecialtyId(accessSpecialtyId);
				report.setContent(object.getString("content"));
				report.setListName(object.getString("listName"));
				report.setParentId(realParentId);
				asAccessSelfEvalutionReportMapper.insertSelective(report);
				addChild(object.getString("id"),report.getId(),array,accessSpecialtyId); 
			}
		}
	}
	
	public ServiceResult<List<AsAccessDataInfo>> getUserDataByName(HttpServletRequest request, String name, String userId) {
		ServiceResult<List<AsAccessDataInfo>> serviceResult = new ServiceResult<List<AsAccessDataInfo>>();
		List<AsAccessDataInfo> list = asAccessDataInfoMapper.getUserDataByName(name, userId);
		//文件路径修改
		for (int i = 0; i < list.size(); i++) {
			AsAccessDataInfo info  = list.get(i);
			String src = info.getSrc();
			File file = new File(src+"\\"+info.getName()+"."+info.getDataType());
			
			File outFile = new File(request.getSession().getServletContext().getRealPath("/upload")+"\\"+info.getName()+"."+info.getDataType());
			try{
				FileUtil.save(file, outFile);
			}catch (Exception e) {
				serviceResult.setOk(false);
				serviceResult.setComment(info.getName()+"文件找不到");
				return serviceResult;
			}
			
			String path = request.getContextPath();
			String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
			info.setSrc(basePath+"/upload"+"//"+info.getName()+"."+info.getDataType());
		}
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<List<AsAccessSelfEvalutionReport>> getSelfReport(
			Integer specialtyId) {
		ServiceResult<List<AsAccessSelfEvalutionReport>> serviceResult = new ServiceResult<List<AsAccessSelfEvalutionReport>>();
		List<AsAccessSelfEvalutionReport> list = asAccessSelfEvalutionReportMapper.selectAllBySpecialtyId( specialtyId);
		if(list != null){
			for (int i = 0; i < list.size(); i++) {
				AsAccessSelfEvalutionReport report = list.get(i);
				report.setContent(report.getContent().replaceAll("\n", "\\\n"));
			}
		}
		
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Page<AsAccessIndexBase>> getIndicatorsByQuery(
			IndicatorQuery query) {
		ServiceResult<Page<AsAccessIndexBase>> serviceResult = new ServiceResult<Page<AsAccessIndexBase>>();
		int countRecord = asAccessIndexBaseMapper.selectCountByQuery(query);
		Page<AsAccessIndexBase> page = new Page<AsAccessIndexBase>(query.getCurrentPage(), countRecord, query.getOnePageCount());
		List<AsAccessIndexBase> list = asAccessIndexBaseMapper.getListByQuery(query, page.getStartIndex(), page.getEndIndex());
		if(list.isEmpty()){
			serviceResult.setComment("没有符合条件的指标项");
			serviceResult.setData(page);
			return serviceResult;
		}
		page.setList(list);
		serviceResult.setData(page);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Integer> checkCouldIn(String year,
			String userId, Integer type) {
		ServiceResult<Integer> serviceResult = new ServiceResult<Integer>();
		List<String> yearList = new ArrayList<String>();
		yearList.add(year);
		if(!StringUtil.stringisNull(year)){
			List<AsAccessInfo> list = asAccessInfoMapper.getAllYear();
			for (int i = 0; i < list.size(); i++) {
				yearList.add(list.get(i).getAccessYear());
			}
		}
		for (int j = 0; j < yearList.size(); j++) {
			year = yearList.get(j);
			//根据年份和用户id及类型找到评估专业
			List<Map<String, Object>> mapList = asAccessSpecialtyMapper.getSpecialtyByYearAndUserId(year, userId, type.byteValue(), null, null);
			if(mapList == null || mapList.size() == 0){
				continue;
			}
			for (int i = 0; i < mapList.size(); i++) {
				Map<String, Object> map = mapList.get(i);
				Integer userGroupId = Integer.parseInt(map.get("user_group_id")+"");
				AsAccessUser record = new AsAccessUser();
				record.setUserGroupId(userGroupId);
				record.setUserId(Integer.parseInt(userId));
				List<AsAccessUser> list = asAccessUserMapper.getUserListByQuery(record);
				for (int k = 0; k < list.size(); k++) {
					AsAccessUser user = list.get(k);
					System.out.println("权限是："+type.intValue()+"----"+user.getUserType().intValue());
					//自评
					if(type.intValue() == 1 && user.getUserType().intValue() == 1 ){
						serviceResult.setOk(true);
						serviceResult.setData(user.getOperateType().intValue());
						serviceResult.setComment(year);
						return serviceResult;
					}
					//网评
					if(type.intValue() == 2 && user.getUserType().intValue() == 2 ){
						serviceResult.setOk(true);
						serviceResult.setData(user.getOperateType().intValue());
						serviceResult.setComment(year);
						return serviceResult;
					}
					//现场考察
					if(type.intValue() == 3 && (user.getUserType().intValue() == 3 || user.getUserType().intValue() == 4)){
						serviceResult.setOk(true);
						serviceResult.setData(user.getOperateType().intValue());
						serviceResult.setComment(year);
						return serviceResult;
					}
					//评估状态
					if(type.intValue() == 4 && (
							user.getUserType().intValue() == 5 || user.getUserType().intValue() == 6 || user.getUserType().intValue() == 7 || user.getUserType().intValue() == 8) ){
						serviceResult.setOk(true);
						serviceResult.setData(user.getOperateType().intValue());
						serviceResult.setComment(year);
						return serviceResult;
					}
				}
			}
		}
		serviceResult.setComment("没有权限进入");
		return serviceResult;
	}

	public ServiceResult<List<Map<String, Object>>> getUserGroup(String year,
			String userId, byte type) {
		ServiceResult<List<Map<String, Object>>> serviceResult = new ServiceResult<List<Map<String, Object>>>();
		List<Map<String, Object>> list = asAccessSpecialtyMapper.getUserGroup(year, userId, type);
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> changeStatus(Integer accessSpecailtyId,
			String type) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		AsAccessSpecialty record = new AsAccessSpecialty();
		record.setId(accessSpecailtyId);
		record.setIsComplete(Byte.parseByte(type));
		asAccessSpecialtyMapper.updateByPrimaryKeySelective(record );
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<String> onlinePreview(Integer id, HttpServletRequest request) {
		ServiceResult<String> serviceResult = new ServiceResult<String>();
		AsAccessDataInfo info = asAccessDataInfoMapper.selectByPrimaryKey(id);
		
		String[] OfficePostFixs = {"doc", "docx", "xls","xlsx", "ppt", "pptx","pdf","txt"};
		 ArrayList<String> office_Formats = new ArrayList<String>();
		 Collections.addAll(office_Formats, OfficePostFixs);
		if(!office_Formats.contains(info.getDataType())){
			serviceResult.setComment("error");
			serviceResult.setOk(false);
			return serviceResult;
		}
		if(info.getAccessDataOnline() != null && !info.getAccessDataOnline().equals("")){
			serviceResult.setData(info.getAccessDataOnline());
			serviceResult.setOk(true);
			return serviceResult;
		}
		
		HttpSession session=request.getSession();
		ServletContext  application = session.getServletContext();    
	    String serverRealPath = application.getRealPath("/") ;
	    Long currentTime = System.currentTimeMillis();
	    String outFilePath = serverRealPath+"upload\\"+currentTime+".swf";
	    if("pdf".equals(info.getDataType())){
	    	Office2Swf.pdf2Swf(info.getSrc()+"//"+info.getName()+"."+info.getDataType(),outFilePath);
	    }else{
		    Office2Swf.office2Swf(info.getSrc()+"//"+info.getName()+"."+info.getDataType(),outFilePath);
	    }
	    info.setAccessDataOnline(currentTime+".swf");
	    info.setDataOnlineSrc("upload/"+currentTime+".swf");
	    asAccessDataInfoMapper.updateByPrimaryKeySelective(info);
	    
	    serviceResult.setData(currentTime+".swf");
	    serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<List<AsAccessSelfEvalutionReport>> getSelfReportP(
			Integer specialtyId, String year) {
		ServiceResult<List<AsAccessSelfEvalutionReport>> serviceResult = new ServiceResult<List<AsAccessSelfEvalutionReport>>();
		Integer accessSpecialtyId = 0;
		AsAccessSpecialty accessSpecialty= asAccessSpecialtyMapper.getSpecialtyByYearAndSpecialtyId(year, (byte)1, specialtyId);
		if(accessSpecialty != null){
			accessSpecialtyId = accessSpecialty.getId();
		}else{
			return serviceResult;
		}
		List<AsAccessSelfEvalutionReport> list = asAccessSelfEvalutionReportMapper.selectAllBySpecialtyId( accessSpecialtyId);
		if(list != null){
			for (int i = 0; i < list.size(); i++) {
				AsAccessSelfEvalutionReport report = list.get(i);
				report.setContent(report.getContent().replaceAll("\n", "\\\n"));
			}
		}
		
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> updateReportDate(Integer specialtyId) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		AsAccessSpecialty accessSpecialty = asAccessSpecialtyMapper.selectByPrimaryKey(specialtyId);
		AsAccessInfo info = asAccessInfoMapper.selectByPrimaryKey(accessSpecialty.getAccessId());
		List<AsAccessSelfEvalutionReport> list = asAccessSelfEvalutionReportMapper.selectAllBySpecialtyId( specialtyId);
		if(list != null){
			for (int i = 0; i < list.size(); i++) {
				AsAccessSelfEvalutionReport report = list.get(i);
				report.setContent(report.getContent().replaceAll("\n", "\\\n"));
				//去除c标签
				String content = report.getContent();
				String[] c = content.split("<c>");
				content = c[0];
				for (int j = 1; j < c.length; j++) {
					String[] c2 = c[j].split("</c>");
					if(c2.length > 1){
						content += c2[1];
					}
				}
				//TODO 获取指标值
				String[] strs = content.split("<b>");
				content = strs[0];
				for (int j = 1; j < strs.length; j++) {
					String[] str2 = strs[j].split("</b>");
					AsMManage index = asMManageMapper.selectByName(str2[0]);
					if(index == null){
						content += "<b>"+str2[0]+"</b><c>(非标准指标名</c>";
						if(str2.length > 1){
							content += str2[1];
						}
						continue;
					}
					Integer zbValue = dwVLeadershipMapper.getValueByQuery(Integer.parseInt(info.getAccessYear()), null, 
							accessSpecialty.getSpecialtyId(), index.getMeasureId());
					if(zbValue == null){
						zbValue = 0;
					}
					content += "<b>"+str2[0]+"</b><c>("+zbValue+"</c>";
					if(str2.length > 1){
						content += str2[1];
					}
				}
				report.setContent(content);
				asAccessSelfEvalutionReportMapper.updateByPrimaryKeySelective(report);
			}
		}
		
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Integer> getIndexValue(Integer specialtyId,
			String measureId) {
		ServiceResult<Integer> serviceResult = new ServiceResult<Integer>();
		AsAccessSpecialty accessSpecialty = asAccessSpecialtyMapper.selectByPrimaryKey(specialtyId);
		AsAccessInfo info = asAccessInfoMapper.selectByPrimaryKey(accessSpecialty.getAccessId());
		Integer zbValue = dwVLeadershipMapper.getValueByQuery(Integer.parseInt(info.getAccessYear()), null, 
				accessSpecialty.getSpecialtyId(), measureId);
		serviceResult.setData(zbValue == null ? 0 : zbValue);
		serviceResult.setOk(true);
		return serviceResult;
	}
	
	public ServiceResult<List<AsAccessProfileData>> getAllVersion(Integer year,
			Integer accessSpecialtyId) {
		ServiceResult<List<AsAccessProfileData>> serviceResult = new ServiceResult<List<AsAccessProfileData>>();
		AsAccessSpecialty asAccessSpecialty = asAccessSpecialtyMapper.selectByPrimaryKey(accessSpecialtyId);
		List<AsAccessProfileData> list = asAccessProfileDataMapper.getAllVersion(year, asAccessSpecialty.getSpecialtyId());
		if(list != null && list.size() != 0){
			serviceResult.setOk(true);
			serviceResult.setData(list);
		}
		return serviceResult;
	}

	public ServiceResult<List<AsAccessProfileDataDetail>> getProfileDataDetail(
			Integer versionId) {
		ServiceResult<List<AsAccessProfileDataDetail>> serviceResult = new ServiceResult<List<AsAccessProfileDataDetail>>();
		List<AsAccessProfileDataDetail> list = asAccessProfileDataDetailMapper.getProfileDataDetail(versionId,"");
		if(list != null && list.size() != 0){
			serviceResult.setOk(true);
			serviceResult.setData(list);
		}
		return serviceResult;
	}

	public ServiceResult<Integer> createNewVersion(Integer year,
			Integer accessSpecialtyId, String specialtyName) {
		ServiceResult<Integer> serviceResult = new ServiceResult<Integer>();
		AsAccessProfileData record = new AsAccessProfileData();
		AsAccessSpecialty asAccessSpecialty = asAccessSpecialtyMapper.selectByPrimaryKey(accessSpecialtyId);
		record.setSpecialtyId(asAccessSpecialty.getSpecialtyId());
		record.setSpecialtyName(specialtyName);
		record.setYear(year);
		record.setState(0);
		record.setSaveTime(new Date());
		asAccessProfileDataMapper.insertSelective(record);
		serviceResult.setData(record.getId());
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> saveProfileData(String title,
			Integer versionId, String data) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		List<AsAccessProfileDataDetail> list = asAccessProfileDataDetailMapper.getProfileDataDetail(versionId, title);
		if(list != null && list.size() != 0){
			AsAccessProfileDataDetail record= list.get(0);
			record.setData(data);
			asAccessProfileDataDetailMapper.updateByPrimaryKeySelective(record);
		}else{
			AsAccessProfileDataDetail record= new AsAccessProfileDataDetail();
			record.setData(data);
			record.setProId(versionId);
			record.setTitle(title);
			asAccessProfileDataDetailMapper.insertSelective(record);
		}
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<List<Map<String, Object>>> getProfileDataBySql(
			String title, Integer year ,Integer accessSpecialtyId) {
		ServiceResult<List<Map<String, Object>>> serviceResult = new ServiceResult<List<Map<String,Object>>>();
		TabSql tabSql = tabSqlMapper.selectByCodeAndType(title,2);
		if(tabSql == null){
			serviceResult.setOk(false);
			return serviceResult;
		}
		String sql = tabSql.getTabSql();
		String searchNames = tabSql.getSearchNames();
		String names[] = searchNames.split(",");
		
		AsAccessSpecialty asAccessSpecialty = asAccessSpecialtyMapper.selectByPrimaryKey(accessSpecialtyId);
		
	/*	Date startTime = asAccessSpecialty.getStartDatetime();
		Calendar start = Calendar.getInstance();
		start.setTime(startTime);
		if(start.get(Calendar.YEAR) != year){
			if(start.get(Calendar.MONTH) < 8){
				year = start.get(Calendar.YEAR) -1;
			}else{
				year = start.get(Calendar.YEAR);
			}
		}*/
		
		sql = sql.replaceAll("@date", "'"+year+"'").replaceAll("@DATE", "'"+year+"'");
		sql = sql.replaceAll("\\{specialtyId\\}", asAccessSpecialty.getSpecialtyId()+"");
		List<Map<String,Object>> list = tabSqlMapper.selectBySql(sql);
		//重新赋值
		for (int i = 0; i < list.size(); i++) {
			Map<String,Object> map = list.get(i);
			if(map == null){
				continue;
			}
			
			for (int j = 0; j < names.length; j++) {
				String name[] = names[j].split("_");
				if(map.get(name[0]) != null){
					map.put(name[1], map.get(name[0]));
				}
			}
		}
		
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Boolean> deleteProfile(Integer versionId) {
		ServiceResult<Boolean> serviceResult = new ServiceResult<Boolean>();
		AsAccessProfileData record = new AsAccessProfileData();
		record.setId(versionId);
		record.setState(1);//逻辑删除
		asAccessProfileDataMapper.updateByPrimaryKeySelective(record);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Map<String, Object>> getSpecialtyMsg(
			Integer accessSpecialtyId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> map = new HashMap<String, Object>();
		AsAccessSpecialty asAccessSpecialty = asAccessSpecialtyMapper.selectByPrimaryKey(accessSpecialtyId);
		Specialty specialty = specialtyMapper.selectByPrimaryKey(asAccessSpecialty.getSpecialtyId());
		
		map.put("specialtyName", specialty.getName());
		map.put("specialtyCode", specialty.getCode());
		map.put("orgName", specialty.getOrganame());
		
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}

}
