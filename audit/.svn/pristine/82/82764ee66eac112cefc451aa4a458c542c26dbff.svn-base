package audit.model;

import java.sql.Timestamp;
import java.util.List;

public class SupportMaterialLibraryUserInfo {
	private Integer id;
	private Integer treeNdId;
	private Integer dutyPersonId;
	private String dutyPersonName;
	private String organizationName;
	private Timestamp startTime;
	private Timestamp endTime;
	private Integer status;//0 未上传 1 已上传    2 已提交  3. 未通过 4 审核通过
	private List<SupportMaterialLibraryFile> files;
	 /*create table  support_material_library_userinfo 
	 (id int identity(1,1),primary key(id),
	 treendid int,
	 dutypersonid int,
	 dutypersonname varchar(100),
	 organizationname varchar(100),
	 starttime datetime,
	 endtime datetime,
	 status int, 
	 foreign key(treendid) references support_material_library_treenode_table(id)
	 )*/
	public Integer getTreeNdId() {
		return treeNdId;
	}
	public void setTreeNdId(Integer treeNdId) {
		this.treeNdId = treeNdId;
	}
	public Integer getDutyPersonId() {
		return dutyPersonId;
	}
	public void setDutyPersonId(Integer dutyPersonId) {
		this.dutyPersonId = dutyPersonId;
	}
	public String getDutyPersonName() {
		return dutyPersonName;
	}
	public void setDutyPersonName(String dutyPersonName) {
		this.dutyPersonName = dutyPersonName;
	}
	public String getOrganizationName() {
		return organizationName;
	}
	public void setOrganizationName(String organizationName) {
		this.organizationName = organizationName;
	}
	public Timestamp getStartTime() {
		return startTime;
	}
	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}
	public Timestamp getEndTime() {
		return endTime;
	}
	public void setEndTime(Timestamp endTime) {
		this.endTime = endTime;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public List<SupportMaterialLibraryFile> getFiles() {
		return files;
	}
	public void setFiles(List<SupportMaterialLibraryFile> files) {
		this.files = files;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
}
