package audit.service;

import java.util.List;
import java.util.Map;


import audit.model.DataTemplate;
import audit.model.SupportMaterialLibraryFile;
import audit.model.SupportMaterialLibraryTemplate;
import audit.model.SupportMaterialLibraryTreeNode;
import audit.model.SupportMaterialLibraryUserInfo;

public interface SupportMaterialLibraryService {
	Integer saveTreeNode(SupportMaterialLibraryTreeNode treeNode);
	List<SupportMaterialLibraryTreeNode> selectAllSupportFile();
	Integer updateTreeNode(SupportMaterialLibraryTreeNode treeNode);
	Integer deleteTreeNode(Integer id);
	List<SupportMaterialLibraryTreeNode> selectTreeNodeById(Integer id);
	Integer saveUserInfo(SupportMaterialLibraryUserInfo userInfo);
	List<SupportMaterialLibraryUserInfo> selectUserByTreeNodeId(List<Integer> ids);
	List<SupportMaterialLibraryUserInfo> selectUserByTreeNodeIdTo(Integer id);
	Integer deleteUserById(Integer id);
	Integer saveUploadFile(SupportMaterialLibraryFile libraryFile);
	List<SupportMaterialLibraryFile> selectAllFileByUserId(Integer userId);
	SupportMaterialLibraryUserInfo selectUserInfoById(Integer id);
	SupportMaterialLibraryFile selectFileById(Integer id);
	List<SupportMaterialLibraryFile> selectAllFileByNodeIdAndUserId(Map<Integer, Integer> userIdNodeId);
	List<SupportMaterialLibraryUserInfo> selectUserIsStatus(Map<String, Integer> map);
	Integer deleteFiles(Integer [] fileIds);
	List<SupportMaterialLibraryFile> selectFilesUseDeletes(Integer [] fileIds);
	Integer deleteFileById(Integer fileId);
	Integer updateFileById(SupportMaterialLibraryFile file);
	Integer saveTemplate(List<SupportMaterialLibraryTemplate> list);
	Integer selectDataFieldById(SupportMaterialLibraryTemplate template);
	List<Integer> selectAllFieldByTreeNodeId(Integer treeNdId);
	List<Map<String,Integer>> selectAllFieldByTreeNodeIdTO(Integer treeNdId);
	DataTemplate selectByPrimaryKey(Integer id);
	Integer deleteDataFieldById(Integer id);
	Integer deleteDataFields(Integer [] dataFieldIds);
	Integer deleteUsers(Integer [] userIds);
	Integer updateDataField(SupportMaterialLibraryTemplate template);
	
	//根据条件查询data_template表的数据
	List<Map<String, Object>> findDataTemplateByWhere(Map<String, Object> map);
	
	//根据类型查询template表的数据
	List<Map<String, Object>> findDataTemplateByOrganizationid(Map<String, Object> map);
}
