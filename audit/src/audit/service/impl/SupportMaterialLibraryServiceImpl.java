package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.SupportMaterialLibraryMapper;
import audit.model.DataTemplate;
import audit.model.SupportMaterialLibraryFile;
import audit.model.SupportMaterialLibraryTemplate;
import audit.model.SupportMaterialLibraryTreeNode;
import audit.model.SupportMaterialLibraryUserInfo;
import audit.service.SupportMaterialLibraryService;

@Service
public class SupportMaterialLibraryServiceImpl implements
		SupportMaterialLibraryService {
	
	@Autowired
	private SupportMaterialLibraryMapper supportMaterialLibraryMapper;

	public Integer saveTreeNode(SupportMaterialLibraryTreeNode treeNode) {
		int node = supportMaterialLibraryMapper.saveTreeNode(treeNode);
		return node;
	}

	public List<SupportMaterialLibraryTreeNode> selectAllSupportFile() {
		List<SupportMaterialLibraryTreeNode> list = supportMaterialLibraryMapper.selectAllSupportFile();
		return list;
	}

	public Integer updateTreeNode(SupportMaterialLibraryTreeNode treeNode) {
		int node = supportMaterialLibraryMapper.updateTreeNode(treeNode);
		return node;
	}

	public Integer deleteTreeNode(Integer id) {
		int node = supportMaterialLibraryMapper.deleteTreeNode(id);
		return node;
	}

	public List<SupportMaterialLibraryTreeNode> selectTreeNodeById(Integer id) {
		List<SupportMaterialLibraryTreeNode> list = supportMaterialLibraryMapper.selectTreeNodeById(id);
		return list;
	}

	public Integer saveUserInfo(SupportMaterialLibraryUserInfo userInfo) {
		int status = supportMaterialLibraryMapper.saveUserInfo(userInfo);
		return status;
	}

	public List<SupportMaterialLibraryUserInfo> selectUserByTreeNodeId(
			List<Integer> ids) {
		List<SupportMaterialLibraryUserInfo> userInfos = supportMaterialLibraryMapper.selectUserByTreeNodeId(ids);
		return userInfos;
	}

	public Integer deleteUserById(Integer id) {
		Integer status = supportMaterialLibraryMapper.deleteUserById(id);
		return status;
	}

	public List<SupportMaterialLibraryUserInfo> selectUserByTreeNodeIdTo(
			Integer id) {
		List<SupportMaterialLibraryUserInfo> list = supportMaterialLibraryMapper.selectUserByTreeNodeIdTo(id);
		return list;
	}

	public Integer saveUploadFile(SupportMaterialLibraryFile libraryFile) {
		supportMaterialLibraryMapper.saveUploadFile(libraryFile);
		return null;
	}

	public List<SupportMaterialLibraryFile> selectAllFileByUserId(Integer userId) {
		List<SupportMaterialLibraryFile> list = supportMaterialLibraryMapper.selectAllFileByUserId(userId);
		return list;
	}

	public SupportMaterialLibraryUserInfo selectUserInfoById(Integer id) {
		SupportMaterialLibraryUserInfo userInfo = supportMaterialLibraryMapper.selectUserInfoById(id);
		return userInfo;
	}

	public SupportMaterialLibraryFile selectFileById(Integer id) {
		SupportMaterialLibraryFile file = supportMaterialLibraryMapper.selectFileById(id);
		return file;
	}

	@Override
	public List<SupportMaterialLibraryFile> selectAllFileByNodeIdAndUserId(
			Map<Integer, Integer> userIdNodeId) {
		List<SupportMaterialLibraryFile> list = supportMaterialLibraryMapper.selectAllFileByNodeIdAndUserId(userIdNodeId);
		return list;
	}

	@Override
	public List<SupportMaterialLibraryUserInfo> selectUserIsStatus(
			Map<String, Integer> map) {
		List<SupportMaterialLibraryUserInfo> userInfos = supportMaterialLibraryMapper.selectUserIsStatus(map);
		return userInfos;
	}

	@Override
	public Integer deleteFiles(Integer[] fileIds) {
		Integer status = supportMaterialLibraryMapper.deleteFiles(fileIds);
		return status;
	}

	@Override
	public List<SupportMaterialLibraryFile> selectFilesUseDeletes(
			Integer[] fileIds) {
		List<SupportMaterialLibraryFile> files = supportMaterialLibraryMapper.selectFilesUseDeletes(fileIds);
		return files;
	}

	@Override
	public Integer deleteFileById(Integer fileId) {
		Integer status = supportMaterialLibraryMapper.deleteFileById(fileId);
		return status;
	}

	@Override
	public Integer updateFileById(SupportMaterialLibraryFile file) {
		Integer status = supportMaterialLibraryMapper.updateFileById(file);
		return status;
	}

	@Override
	public Integer saveTemplate(List<SupportMaterialLibraryTemplate> list) {
		Integer status = supportMaterialLibraryMapper.saveTemplate(list);
		return status;
	}

	@Override
	public Integer selectDataFieldById(SupportMaterialLibraryTemplate template) {
		Integer count = supportMaterialLibraryMapper.selectDataFieldById(template);
		return count;
	}

	@Override
	public List<Integer> selectAllFieldByTreeNodeId(Integer treeNdId) {
		List<Integer> list = supportMaterialLibraryMapper.selectAllFieldByTreeNodeId(treeNdId);
		return list;
	}

	@Override
	public DataTemplate selectByPrimaryKey(Integer id) {
		DataTemplate list = supportMaterialLibraryMapper.selectByPrimaryKey(id);
		return list;
	}

	@Override
	public Integer deleteDataFieldById(Integer id) {
		Integer count = supportMaterialLibraryMapper.deleteDataFieldById(id);
		return count;
	}

	@Override
	public Integer deleteDataFields(Integer[] dataFieldIds) {
		Integer count = supportMaterialLibraryMapper.deleteDataFields(dataFieldIds);
		return count;
	}

	@Override
	public Integer deleteUsers(Integer[] userIds) {
		Integer count = supportMaterialLibraryMapper.deleteUsers(userIds);
		return count;
	}

	@Override
	public List<Map<String,Integer>>  selectAllFieldByTreeNodeIdTO(Integer treeNdId) {
		List<Map<String,Integer>> list = supportMaterialLibraryMapper.selectAllFieldByTreeNodeIdTO(treeNdId);
		return list;
	}

	@Override
	public Integer updateDataField(SupportMaterialLibraryTemplate template) {
		Integer statusInteger = supportMaterialLibraryMapper.updateDataField(template);
		return statusInteger;
	}

	@Override
	public List<Map<String, Object>> findDataTemplateByWhere(
			Map<String, Object> map) {
		return supportMaterialLibraryMapper.findDataTemplateByWhere(map);
	}

	@Override
	public List<Map<String, Object>> findDataTemplateByOrganizationid(
			Map<String, Object> map) {
		return supportMaterialLibraryMapper.findDataTemplateByOrganizationid(map);
	} 
	
}
