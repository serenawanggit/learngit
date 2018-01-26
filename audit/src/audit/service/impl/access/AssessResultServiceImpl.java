package audit.service.impl.access;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsAccessExamineSceneVoMapper;
import audit.dao.AsAccessSelfEvalutionReportMapper;
import audit.dao.AsAccessSiteCheckRecordMapper;
import audit.dao.AsAccessSiteCheckRecordideaMapper;
import audit.dao.AsAccessSpecialtyMapper;
import audit.dao.AsAccessUserMapper;
import audit.dao.AssessResultVoMapper;
import audit.model.assess.AsAccessSelfEvalutionReport;
import audit.model.assess.AsAccessSiteCheckRecord;
import audit.model.assess.AsAccessSiteCheckRecordidea;
import audit.model.assess.AsAccessSpecialty;
import audit.model.assess.AsAccessUser;
import audit.model.assess.vo.AsAccessExamineSceneVo;
import audit.model.assess.vo.AsAccessSceneScoreVo;
import audit.service.access.IAssessResultService;
import audit.util.DBConnection;

/**
 * @author xfwang 20150623
 * 专家现场考查评估结论
 *
 */
@Service("assessResultServiceImpl")
public class AssessResultServiceImpl implements IAssessResultService {

	@Resource
	private AsAccessSelfEvalutionReportMapper asAccessSelfEvalutionReportMapper;
	
    @Autowired
	private AsAccessExamineSceneVoMapper asAccessExamineSceneVoMapper;
    
    @Autowired
	private AssessResultVoMapper assessResultVoMapper;
    
    @Autowired
	private AsAccessSiteCheckRecordMapper asAccessSiteCheckRecordMapper;
    @Autowired
	private AsAccessSiteCheckRecordideaMapper asAccessSiteCheckRecordideaMapper;
   
    @Autowired
    private AsAccessSpecialtyMapper asAccessSpecialtyMapper;
    @Resource
	private AsAccessUserMapper asAccessUserMapper;
    /*@Resource
	public AsAssessResultMapper asAssessResultMapper;

	public ArrayList<AsAssessResultVo> showAssessmentSelfScore(
			Integer id) {
		ArrayList<AsAssessResultVo> arrayList = asAssessResultMapper.showAssessmentSelfScore(id);
		return arrayList;
	}*/
	
	/** 
	 * 根据专业评估id获得专业自评分
	 *@param id
	 *@return
	 */
	public JSONArray showAssessmentSelfScore(Integer id,Integer txId) {
		StringBuffer sb = new StringBuffer();
		sb.append(" SELECT distinct a.id as oneid, ");
		sb.append("  f.specialty_name,");
		sb.append("  a.name  as onelevelname,");
		sb.append("	a.score as oneLevelscore,");
		sb.append("	B.id as twoid, ");
		sb.append("	B.name as twolevelname,");
		sb.append("	b.score as twolevelscore,");
		sb.append("	C.id as threeid,");
		sb.append("	c.name as threelevelname,");
		sb.append("	C.score as threelevelscore,");
		sb.append("	D.SCORE AS selfscore ,");
		sb.append("	d.datas as datas ");
		sb.append("	,STUFF((SELECT ','+hb.MEASURE_NAME FROM (select aci.detail_id,aci.measure_id, mm.MEASURE_NAME from as_access_scale_index aci,AS_M_MANAGE mm where aci.measure_id = mm.MEASURE_ID) hb where hb.detail_id= x.detail_id FOR XML PATH('')),1,1,'')  as MEASURE_NAME");
		sb.append("	FROM AS_ACCESS_STANDARD_DETAIL A ");
		sb.append("	 LEFT JOIN AS_ACCESS_STANDARD_DETAIL B ON A.ID=B.PARENT_ID ");
		sb.append("	 LEFT JOIN AS_ACCESS_STANDARD_DETAIL C ON B.ID=C.PARENT_ID ");
		/***TODO此处access_specialty_id 需要改成动态的 暂时写死的*/
		sb.append(" LEFT JOIN AS_ACCESS_SELF_EVALUTION_RECORD D ON C.id=D.detail_id and d.access_specialty_id = 68");
		sb.append(" left join as_access_scale_index e on e.detail_id=C.id ");
		sb.append(" left join (select aci.detail_id,aci.measure_id, mm.MEASURE_NAME from as_access_scale_index aci,AS_M_MANAGE mm where aci.measure_id = mm.MEASURE_ID) x ");
		sb.append(" on    x.detail_id =  e.detail_id ");
		sb.append(" left join as_access_specialty f on d.access_specialty_id= f.id");
		sb.append(" where A.PARENT_ID=0 and A.standard_id= "+txId);
		 ArrayList<Object> params=new ArrayList<Object>();
		 ArrayList<HashMap<String, Object>> arrayList=DBConnection.executeQuery(sb.toString(), params);
		JSONArray jsonArray=JSONArray.fromObject(arrayList);
		return jsonArray;
	}
	/**
	 * 根据用户和专业评估id获得专业自评报告
	 * @param userId
	 * @param specialtyId
	 * @return
	 */
	public ServiceResult<List<AsAccessSelfEvalutionReport>> getSelfReport(
			Integer specialtyId) {
		ServiceResult<List<AsAccessSelfEvalutionReport>> serviceResult = new ServiceResult<List<AsAccessSelfEvalutionReport>>();
		List<AsAccessSelfEvalutionReport> selfReportlist = asAccessSelfEvalutionReportMapper.selectAllBySpecialtyId( specialtyId);
		if(selfReportlist != null){
			for (int i = 0; i < selfReportlist.size(); i++) {
				AsAccessSelfEvalutionReport report = selfReportlist.get(i);
				report.setContent(report.getContent().replaceAll("\n", "\\\n"));
			}
		}
		serviceResult.setData(selfReportlist);
		serviceResult.setOk(true);
		return serviceResult;
	}
	/**
	 * 获得专家网评结果
	 * @param request
	 * @return
	 */
	public JSONArray showSelfAssessmentComments(Integer specialtyId,Integer userId,Integer txId){

	    StringBuffer sBuffer=new StringBuffer();
		ArrayList<Object> params=new ArrayList<Object>();
		try {
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
				    sBuffer.append(" and  e.SPECIALTY_ID=? ");
			    params.add(specialtyId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("语句是："+sBuffer.toString());
	    ArrayList<HashMap<String, Object>> arrayList=DBConnection.executeQuery(sBuffer.toString(), params);
	    JSONArray jsonArray=JSONArray.fromObject(arrayList);
	    return jsonArray;
	}
	/**
	 * 获得现场考查任务表内容
	 * @return
	 */
	public JSONArray  selectValues(@Param("accessId")Integer accessId,@Param("academyId")Integer academyId,@Param("specialtyId")Integer specialtyId){
		List<AsAccessExamineSceneVo> list = asAccessExamineSceneVoMapper.selectValues(accessId, academyId, specialtyId);
		JSONArray jsonArray=JSONArray.fromObject(list);
		return jsonArray;
	}
	public ServiceResult<List<AsAccessSceneScoreVo>> showSceneScoreComments(
			Integer architectureId,Integer userId,Integer recordType,int sid) {
		ServiceResult<List<AsAccessSceneScoreVo>> serviceResult = new ServiceResult<List<AsAccessSceneScoreVo>>();
		List<AsAccessSceneScoreVo> list = assessResultVoMapper.showSceneScoreComments(architectureId,userId,recordType,sid);
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<List<AsAccessSceneScoreVo>> showArchitecture(Integer architectureId) {
		ServiceResult<List<AsAccessSceneScoreVo>> serviceResult = new ServiceResult<List<AsAccessSceneScoreVo>>();
		List<AsAccessSceneScoreVo> list = assessResultVoMapper.showArchitecture(architectureId);
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> insertSceneScore(
			List<AsAccessSiteCheckRecord> list) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessSiteCheckRecordMapper.insertSceneScores(list);
		if(count==list.size()){
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(true);
		}else{
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(false);
		}
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> insertSceneIdea(
			List<AsAccessSiteCheckRecordidea> list) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessSiteCheckRecordideaMapper.insertSceneIdeas(list);
		if(count==list.size()){
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(true);
		}else{
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(false);
		}
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> updateScoreBySelectiveSelective(
			AsAccessSiteCheckRecord record) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessSiteCheckRecordMapper.updateBySelectiveSelective(record);
		if(count==0){
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(true);
		}else{
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(false);
		}
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> updateIdeaBySelectiveSelective(
			AsAccessSiteCheckRecordidea record) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		int count = asAccessSiteCheckRecordideaMapper.updateBySelectiveSelective(record);
		if(count==0){
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(true);
		}else{
			allMessage.put("count", count);
			serviceResult.setData(allMessage);
			serviceResult.setOk(false);
		}
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> findRecord(
			Integer accessSpecialtyId,Byte recordType) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String, Object>>();
		//返回的map
		Map<String, Object> map = new HashMap<String, Object>();
		//先找到评估专业
		AsAccessSpecialty accessSpecialty = asAccessSpecialtyMapper.selectByPrimaryKey(accessSpecialtyId);
		Integer standardId = Integer.parseInt(accessSpecialty.getDefaultStandartId());
		//获取现场考察人员
		AsAccessUser record = new AsAccessUser();
		record.setUserGroupId(accessSpecialty.getUserGroupId());
		record.setUserType((byte)4);
		record.setOperateType((byte)1);
		List<AsAccessUser> userList = asAccessUserMapper.getUserListByQuery(record);
		map.put("userList", userList);
		List<AsAccessSiteCheckRecord> recordList = asAccessSiteCheckRecordMapper.getListByRecord(accessSpecialtyId,recordType);
		map.put("recordList", recordList);
		List<AsAccessSiteCheckRecordidea> recordIdeaList = asAccessSiteCheckRecordideaMapper.getListByRecord(accessSpecialtyId, recordType);
		map.put("recordIdeaList", recordIdeaList);
		List<AsAccessSceneScoreVo> sceneScoreList = assessResultVoMapper.showArchitecture(standardId);
		map.put("sceneScoreList", sceneScoreList);
		serviceResult.setData(map);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(
			Integer accessId, Integer academyId, Integer specialtyId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessSpecialty> list = assessResultVoMapper.findSpecialtyByAccessIdAndAcademyIdAndSpecialtyId(accessId,academyId,specialtyId);
		allMessage.put("accessSpecialtyList", list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> findIsRecord(
			Integer accessSpecialtyId, Integer userId, byte recordType) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessSiteCheckRecord> list = asAccessSiteCheckRecordMapper.findIsRecord(accessSpecialtyId,userId,recordType);
		allMessage.put("count", list.size());
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> getExpertInfo(
			Integer accessSpecialtyId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessExamineSceneVo> list = asAccessExamineSceneVoMapper.getExpertInfo(accessSpecialtyId);
		allMessage.put("asAccessExamineSceneVo",list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	public ServiceResult<Map<String, Object>> getExpertInspectInfo(
			Integer userId,Integer accessSpecialtyId) {
		ServiceResult<Map<String, Object>> serviceResult = new ServiceResult<Map<String,Object>>();
		Map<String, Object> allMessage = new HashMap<String, Object>();
		List<AsAccessExamineSceneVo> list = asAccessExamineSceneVoMapper.getExpertInspectInfo(userId, accessSpecialtyId);
		allMessage.put("asAccessExamineSceneVo",list);
		serviceResult.setData(allMessage);
		serviceResult.setOk(true);
		return serviceResult;
	}
	
}
