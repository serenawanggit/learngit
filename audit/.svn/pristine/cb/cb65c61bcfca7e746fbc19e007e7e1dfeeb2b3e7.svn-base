package audit.dao;

import java.util.List;
import java.util.Map;

public interface AssessmentSystemMapper {


	List<Map<String,Object>> getSystemByType(Integer id,String syear);
	
	List<Map<String,Object>> getSystemSonByType(Integer id,String syear);
	
	//根据专业查询内容和自评人信息
	List<Map<String,Object>> findSystemInfoByStypt(Integer stype,String syear,Integer id);
	
	List<Map<String,Object>> getSystemById(Integer id,Integer syear);
	
	int insertTaskInfo(Map<String,Object> map);	
	
	List<Map<String,Object>> selectTask(String tYear,Integer specialtyId,Integer item);
	
	//获取到机构
	List<Map<String,Object>> getOrg();
	
	int updateTaskInfo(Integer selfId ,Integer id);
	
	List<Map<String,Object>> selectAllIndexFile(Map<String,Object> map);
	
	int deleteIndexFile(Map<String,Object> map);
	
	int insertIndexFile(List<Map<String,Object>> list);
	
	List<Map<String,Object>> selectFormula(Map<String,Object> map);
	
	List<Map<String,Object>> selectByIdFormula(Map<String,Object> map);
	
	int deleteFormula(Map<String,Object> map);
	
	int insertFormula(Map<String,Object> map);
	
	int updateFormula(Map<String,Object> map);
	
	int updateSystem(Map<String,Object> map);
	
	List<Map<String,Object>> selectAllIndexFileByPerson(Map<String,Object> map);
	
	int insertSystemType(Map<String,Object> map);
	
	int deleteSystemType(Map<String,Object> map);

	
	//查询数据表信息
	List<Map<String, Object>> findTemplateAndTaskInfo(Map<String,Object> map);
	
	//根据指标id查询专业建设报告内容表的信息
	List<Map<String, Object>> getAssessReportBySysid(Map<String,Object> map);
	
	//查询校级数据表的详细信息
	Map<String, Object> getDataTemplateById(Integer id);
	
	//查询自评得分表信息
	List<Map<String, Object>> findSelfDataFileBySysid(Map<String, Object> map);
	
	//删除上传的材料表
	int deleteSelfDataFileById(Integer id);

	
	//同步修改
	int udpateinsertSystemInfo(Map<String,Object> map);
	
	
	
	//查询 指标所属分类
	List<Map<String, Object>> queryAllAMC();
			
	//查询指标所属分类
	List<Map<String, Object>> queryAllManage();
	
	//根据ID查询所属分类
	List<Map<String, Object>> queryAllManageById(Map<String,Object> map);
	//根据名字查询
	List<Map<String, Object>> queryAllManageByName(Map<String,Object> map);
	
	
	int insertfiledsum(Map<String,Object> map);
	int  updateFiledsum(Map<String,Object> map);
	int deleteFiledsum(Map<String,Object> map);
	List<Map<String, Object>> selectByIdfiledsum(Map<String,Object> map);
	
	//根据templateid查询表头信息(sdt_id)
	List<Map<String, String>> findFieldByTemplateid(Integer id);
	
	
	//查询所有的学院填表
	List<Map<String, Object>> selectAllTable(Map<String,Object> map);
	
	
	//判断课程评估和学院评估
	Map<String ,Object> getAssessmentTypeById(Integer id);

	int deleteFormalByrealsum(Map<String, Object> map);
	
	//修改网评状态
	int updateTaskInfoToWangping(String interZT,String id,String interTime);
	
	//查询网评和审核人的状态
	Map<String, Object> getTaskToShenhe(String tYear,String specialtyId,String item,String id);
	
	//查询网评和审核人的状态
	Map<String, Object> getTaskToWangping(String tYear,String specialtyId,String item,String id);
	
	//修改网评的状态SPECIALTY_ID
	int updateWangPStruts(Map<String, String> map);
	
	//查询父节点的信息
	List<Map<String, Object>> findDataTypeToParentName();
	
	//查询父节点的信息
	List<Map<String, Object>> findDataTypeToChild(Map<String, String> map);
	
	//查询三级指标
	List<Map<String, Object>> getSystemThreeByType(Integer id);
	
	//查询assessment_system_info全部的数据 
	List<Map<String, Object>> findAllAssessmentSytem();
	
	//根据评估类型查询有没有三级指标
	List<Map<String,Object>> findThreeSystemByStype(Integer stype);
	
	//查询指标，和报表数据
	List<Map<String, Object>> findSystemInfoAndReportByStype(Map<String, Object> map);
	
	//根据指标id查询指标内容
	List<Map<String, Object>> getSytemContentBySyid(Map<String, Object> map);
	
	//根据指标id查询自评人的内容
	Map<String, Object> getReportInfoBySysid(Map<String, Object> map);
	
	//根据表明查询表信息
	List<Map<String, Object>> getTemplateByTableName(Map<String, String> map);

	//根据表明查询表信息
	List<Map<String, Object>> findFieldBySdtId(Map<String, String> map);

	//根据表明查询表信息
	List<Map<String, Object>> findTableDataByXY(Map<String, String> map);

	//查询用户信息
	Map<String, Object> getUserById(String id);
	
	//根据表明查询表信息
	List<Map<String, Object>> findTableDataBySY(Map<String, String> map);

	//根据表明查询表信息
	List<Map<String, Object>> findTableDataByGH(Map<String, String> map);

	//根据表明查询表信息
	List<Map<String, Object>> findTableDataByZYDM(Map<String, String> map);

	//根据表明查询表信息
	List<Map<String, Object>> findTableDataByKCH(Map<String, String> map);

	//根据表明查询表信息
	List<Map<String, Object>> findTableDataByXH(Map<String, String> map);

	//根据表明查询表信息
	List<Map<String, Object>> findTableDataByZYTo1_5(Map<String, String> map);

	//根据表明查询表信息
	List<Map<String, Object>> findTableDataByZYTo1_5And6_2_1(Map<String, String> map);

	//查询用户角色
	Map<String, Object> getUserToRole(String id);
}
