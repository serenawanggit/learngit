package audit.dao;

import java.util.List;
import java.util.Map;

import audit.model.DataTemplate;
import audit.model.SupportMaterialLibraryFile;
import audit.model.SupportMaterialLibraryTemplate;
import audit.model.SupportMaterialLibraryTreeNode;
import audit.model.SupportMaterialLibraryUserInfo;

public interface SupportMaterialLibraryMapper {
	public int saveTreeNode(SupportMaterialLibraryTreeNode treeNode);
	public List<SupportMaterialLibraryTreeNode> selectAllSupportFile();
	public int updateTreeNode(SupportMaterialLibraryTreeNode treeNode);
	public int deleteTreeNode(Integer id);
	public List<SupportMaterialLibraryTreeNode> selectTreeNodeById(Integer id);
	public int saveUserInfo(SupportMaterialLibraryUserInfo userInfo);
	public List<SupportMaterialLibraryUserInfo> selectUserByTreeNodeId(List<Integer> ids);
	public List<SupportMaterialLibraryUserInfo> selectUserByTreeNodeIdTo(Integer id);
	public Integer deleteUserById(Integer id);
	public Integer saveUploadFile(SupportMaterialLibraryFile libraryFile);
	public List<SupportMaterialLibraryFile> selectAllFileByUserId(Integer userId);
	public SupportMaterialLibraryUserInfo selectUserInfoById(Integer userId);
	public SupportMaterialLibraryFile selectFileById(Integer id);
	public List<SupportMaterialLibraryFile> selectAllFileByNodeIdAndUserId(Map<Integer, Integer> map);
	public List<SupportMaterialLibraryUserInfo> selectUserIsStatus(Map<String, Integer> map);
	public Integer deleteFiles(Integer [] fileIds);
	public List<SupportMaterialLibraryFile> selectFilesUseDeletes(Integer [] fileIds);
	public Integer deleteFileById(Integer fileId);
	public Integer updateFileById(SupportMaterialLibraryFile file);
	public Integer saveTemplate(List<SupportMaterialLibraryTemplate> list);
	public Integer selectDataFieldById(SupportMaterialLibraryTemplate template);
	public List<Integer> selectAllFieldByTreeNodeId(Integer treeNdId);
	public List<Map<String, Integer>> selectAllFieldByTreeNodeIdTO(Integer treeNdId);
	public DataTemplate selectByPrimaryKey(Integer id);
	public Integer deleteDataFieldById(Integer id);
	public Integer deleteDataFields(Integer [] dataFieldIds);
	public Integer deleteUsers(Integer [] userIds);
	public Integer updateDataField(SupportMaterialLibraryTemplate template);
	
	//根据条件查询data_template表的数据
	List<Map<String, Object>> findDataTemplateByWhere(Map<String, Object> map);
	
	//根据类型查询template表的数据
	List<Map<String, Object>> findDataTemplateByOrganizationid(Map<String, Object> map);
}