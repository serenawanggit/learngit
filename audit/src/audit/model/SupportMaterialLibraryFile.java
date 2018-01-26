package audit.model;


public class SupportMaterialLibraryFile {
	private Integer id;
	//审核评估材料人员表 id
	private Integer userId;
	//文件名称
	private String fileName;
	//文件类型
	private String fileType;
	//文件URL地址
	private String fileUrl;
	//在线预览URL
	private String fileOnlineUrl;
	//在线预览文件名
	private String fileOnlineName;
	// 上传时间
	private String uploadTime;
	// 排序字段
	private Integer tableSort;
	// 树节点
	private Integer treeNodeId;
	/*create table  support_material_library_file(
			 id int identity(1,1),primary key(id),
			 userid int, //审核评估材料人员表 id
			 file_name,//文件名称
			 file_type,//文件类型
			 file_url,//文件URL地址
			 file_online_url,//在线预览URL
			 file_online_name//在线预览文件名
			 foreign key(userid) references support_material_library_userinfo(id)
			 )*/
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public String getFileUrl() {
		return fileUrl;
	}
	public void setFileUrl(String fileUrl) {
		this.fileUrl = fileUrl;
	}
	public String getFileOnlineUrl() {
		return fileOnlineUrl;
	}
	public void setFileOnlineUrl(String fileOnlineUrl) {
		this.fileOnlineUrl = fileOnlineUrl;
	}
	public String getFileOnlineName() {
		return fileOnlineName;
	}
	public void setFileOnlineName(String fileOnlineName) {
		this.fileOnlineName = fileOnlineName;
	}
	public String getUploadTime() {
		return uploadTime;
	}
	public void setUploadTime(String uploadTime) {
		this.uploadTime = uploadTime;
	}
	public Integer getTableSort() {
		return tableSort;
	}
	public void setTableSort(Integer tableSort) {
		this.tableSort = tableSort;
	}
	public Integer getTreeNodeId() {
		return treeNodeId;
	}
	public void setTreeNodeId(Integer treeNodeId) {
		this.treeNodeId = treeNodeId;
	}
}
