package audit.service.impl;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AssessmentSystemMapper;
import audit.dao.AssessmentUserInfoMapper;
import audit.service.AssessmentSystemService;

@Service
public class AssessmentSystemServiceImpl implements AssessmentSystemService {
	@Autowired
	AssessmentSystemMapper assessmentSystemMapper;
	@Autowired
	AssessmentUserInfoMapper assessmentUserInfoMapper;
	
	/* (non-Javadoc)
	 * @see audit.service.impl.AssessmentSystemService#getSystemByType(java.lang.Integer)
	 */
	public List<Map<String,Object>> getSystemByType(Integer id,String syear){
		
		return assessmentSystemMapper.getSystemByType(id,syear);
	}
	public List<Map<String,Object>> getSystemSonByType(Integer id,String syear){
		
		return assessmentSystemMapper.getSystemSonByType(id,syear);
	}
	
	public List<Map<String,Object>> getByUserId(Integer id){
		
		return	assessmentUserInfoMapper.selectByUserId(id);
	}
	public List<Map<String, Object>> getSystemById(Integer id,Integer syear) {
		return assessmentSystemMapper.getSystemById(id,syear);
	}
	public int insertTaskInfo(Map<String, Object> map) {
		try {
			int rows = assessmentSystemMapper.insertTaskInfo(map);
			if(rows>0){
				return rows;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return 0;
	}
	public List<Map<String, Object>> getRolecategoryByUserId(Integer id){
		
		return assessmentUserInfoMapper.getRolecategoryByUserId(id);
	}
	public List<Map<String,Object>> selectTask(String tYear,Integer specialtyId,Integer item){
		return assessmentSystemMapper.selectTask(tYear, specialtyId, item);
	}
	
	
	public int updateTaskInfo(Integer selfId, Integer id){
		
		return assessmentSystemMapper.updateTaskInfo(selfId, id);
	}
	
	public List<Map<String,Object>> getUserNameById(Integer id){
		return assessmentUserInfoMapper.getUserNameById(id);
	}
	
	public List<Map<String,Object>> getOrg(){
		return assessmentSystemMapper.getOrg();
	}
	public List<Map<String,Object>>  selectAllIndexFile(Map<String,Object> map){
		return assessmentSystemMapper.selectAllIndexFile(map);
	}
	public int deleteIndexFile(Map<String,Object> map){
		return assessmentSystemMapper.deleteIndexFile(map);
	}
	public int insertIndexFile(List<Map<String,Object>> list){
		return assessmentSystemMapper.insertIndexFile(list);
	}
	public  List<Map<String,Object>> selectFormula(Map<String,Object> map){
		return assessmentSystemMapper.selectFormula(map);
	}
	public  List<Map<String,Object>> selectByIdFormula(Map<String,Object> map){
		return assessmentSystemMapper.selectByIdFormula(map);
	}
	public int deleteFormula(Map<String,Object> map){
		
		/*List<Map<String, Object>> listfile = assessmentSystemMapper.selectByIdFormula(map);
  		if(listfile.get(0).get("variables").equals("filesum")){
  			Map<String,Object> map1 = new HashMap<String, Object>();
  			map1.put("syear", map.get("syear"));
  			map1.put("sysid", map.get("sysid"));
  			map1.put("variables", "realsum");
  			assessmentSystemMapper.deleteFormalByrealsum(map1);
  		}*/
		return assessmentSystemMapper.deleteFormula(map);
	}
	
	public int insertFormula(Map<String,Object> map){
		return assessmentSystemMapper.insertFormula(map);
	}
	
	public int updateFormula(Map<String,Object> map){
		return assessmentSystemMapper.updateFormula(map);
	}
	public int updateSystem(Map<String,Object> map){
		return assessmentSystemMapper.updateSystem(map);
	}
	public List<Map<String,Object>> selectAllIndexFileByPerson(Map<String,Object> map){
		return assessmentSystemMapper.selectAllIndexFileByPerson(map);
	}
	public int insertSystemType(Map<String,Object> map){
		return assessmentSystemMapper.insertSystemType(map);
	}
	public int deleteSystemType(Map<String,Object> map){
		return assessmentSystemMapper.deleteSystemType(map);
	}

	@Override
	public List<Map<String, Object>> findTemplateAndTaskInfo(Map<String,Object> map) {
		return assessmentSystemMapper.findTemplateAndTaskInfo(map);
	}
	@Override
	public List<Map<String, Object>> getAssessReportBySysid(Map<String,Object> map) {
		return assessmentSystemMapper.getAssessReportBySysid(map);
	}
	@Override
	public Map<String, Object> getDataTemplateById(Integer id) {
		return assessmentSystemMapper.getDataTemplateById(id);
	}
	@Override
	public List<Map<String, Object>> findSelfDataFileBySysid(
			Map<String, Object> map) {
		return assessmentSystemMapper.findSelfDataFileBySysid(map);
	}
	@Override
	public int deleteSelfDataFileById(Integer id) {
		return assessmentSystemMapper.deleteSelfDataFileById(id);
	}

	
	//查看所属分类
	public  List<Map<String, Object>> queryAllAMC(){
		return assessmentSystemMapper.queryAllAMC();
	}
	//指标分类
	public List<Map<String, Object>> queryAllManage(){
		return assessmentSystemMapper.queryAllManage();
	}
	
	public List<Map<String, Object>> queryAllManageById(Map<String,Object> map) {
		return assessmentSystemMapper.queryAllManageById(map);
	}
	
	
	//添加
	public int insertfiledsum(Map<String, Object> map) {
		return assessmentSystemMapper.insertfiledsum(map);
	}
	//修改
	public int updateFiledsum(Map<String, Object> map) {
		return assessmentSystemMapper.updateFiledsum(map);
	}
	
	//删除
	public int deleteFiledsum(Map<String, Object> map) {
		return assessmentSystemMapper.deleteFiledsum(map);
	}
	
	//查询
	public List<Map<String, Object>> selectByIdfiledsum(Map<String, Object> map) {
		return assessmentSystemMapper.selectByIdfiledsum(map);
	}
	@Override  
	public List<Map<String, String>> findFieldByTemplateid(Integer id) {
		return assessmentSystemMapper.findFieldByTemplateid(id);
	}
	@Override
	public List<Map<String, Object>> queryAllManageByName(
			Map<String, Object> map) {
		return assessmentSystemMapper.queryAllManageByName(map);
	}
	@Override
	public List<Map<String, Object>> selectAllTable(Map<String, Object> map) {
		return assessmentSystemMapper.selectAllTable(map);
	}
	@Override
	public Map<String, Object> getAssessmentTypeById(Integer id) {
		return assessmentSystemMapper.getAssessmentTypeById(id);
	}
	/*@Override
	public int deleteFormalByrealsum(Map<String, Object> map) {
		// TODO Auto-generated method stub
		return assessmentSystemMapper.deleteFormalByrealsum(map);
	}*/
	@Override
	public int updateTaskInfoToWangping(String interZT, String id,
			String interTime) {
		return assessmentSystemMapper.updateTaskInfoToWangping(interZT, id, interTime);
	}
	@Override
	public Map<String, Object> getTaskToShenheOrWangping(String tYear,
			String specialtyId, String item, String id,String human) {
		if("sh".equals(human))
			return assessmentSystemMapper.getTaskToShenhe(tYear, specialtyId, item, id);
		else 
			return assessmentSystemMapper.getTaskToWangping(tYear, specialtyId, item, id);
	}
	@Override
	public int updateWangPStruts(Map<String, String> map) {
		return assessmentSystemMapper.updateWangPStruts(map);
	}
	@Override
	public List<Map<String, Object>> findDataTypeToParentName() {
		return assessmentSystemMapper.findDataTypeToParentName();
	}
	@Override
	public List<Map<String, Object>> findDataTypeToChild(Map<String, String> map) {
		return assessmentSystemMapper.findDataTypeToChild(map);
	}
	@Override
	public List<Map<String, Object>> getSystemThreeByType(Integer id) {
		return assessmentSystemMapper.getSystemThreeByType(id);
	}
	@Override
	public List<Map<String, Object>> findAllAssessmentSytem() {
		return assessmentSystemMapper.findAllAssessmentSytem();
	}
	@Override
	public List<Map<String, Object>> findSystemInfoByStypt(Integer stype,String syear,Integer id) {
		return assessmentSystemMapper.findSystemInfoByStypt(stype, syear,id);
	}
	@Override
	public List<Map<String, Object>> findThreeSystemByStype(Integer stype) {
		return assessmentSystemMapper.findThreeSystemByStype(stype);
	}
	@Override
	public List<Map<String, Object>> findSystemInfoAndReportByStype(
			Map<String, Object> map) {
		return assessmentSystemMapper.findSystemInfoAndReportByStype(map);
	}
	@Override
	public List<Map<String, Object>> getSytemContentBySyid(
			Map<String, Object> map) {
		return assessmentSystemMapper.getSytemContentBySyid(map);
	}
	@Override
	public Map<String, Object> getReportInfoBySysid(
			Map<String, Object> map) {
		return assessmentSystemMapper.getReportInfoBySysid(map);
	}
	@Override
	public List<Map<String, Object>> getTemplateByTableName(
			Map<String, String> map) {
		return assessmentSystemMapper.getTemplateByTableName(map);
	}
	@Override
	public List<Map<String, Object>> findFieldBySdtId(Map<String, String> map) {
		return assessmentSystemMapper.findFieldBySdtId(map);
	}
	@Override
	public List<Map<String, Object>> findTableDataByXY(Map<String, String> map) {
		return assessmentSystemMapper.findTableDataByXY(map);
	}
	@Override
	public Map<String, Object> getUserById(String id) {
		return assessmentSystemMapper.getUserById(id);
	}
	@Override
	public List<Map<String, Object>> findTableDataBySY(Map<String, String> map) {
		return assessmentSystemMapper.findTableDataBySY(map);
	}
	@Override
	public List<Map<String, Object>> findTableDataByGH(Map<String, String> map) {
		return assessmentSystemMapper.findTableDataByGH(map);
	}
	@Override
	public List<Map<String, Object>> findTableDataByZYDM(Map<String, String> map) {
		return assessmentSystemMapper.findTableDataByZYDM(map);
	}
	@Override
	public List<Map<String, Object>> findTableDataByKCH(Map<String, String> map) {
		return assessmentSystemMapper.findTableDataByKCH(map);
	}
	@Override
	public List<Map<String, Object>> findTableDataByXH(Map<String, String> map) {
		return assessmentSystemMapper.findTableDataByXH(map);
	}
	@Override
	public List<Map<String, Object>> findTableDataByZYTo1_5(
			Map<String, String> map) {
		return assessmentSystemMapper.findTableDataByZYTo1_5(map);
	}
	@Override
	public List<Map<String, Object>> findTableDataByZYTo1_5And6_2_1(
			Map<String, String> map) {
		return assessmentSystemMapper.findTableDataByZYTo1_5And6_2_1(map);
	}
	@Override
	public Map<String, Object> getUserToRole(String id) {
		return assessmentSystemMapper.getUserToRole(id);
	}

}
