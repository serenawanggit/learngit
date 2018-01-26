package audit.model.assess.tack;

import java.io.Serializable;

/**
 * 我的资料库 文件夹 初始化 附加类
 * @author LLP
 *
 */
public class AsAccessDataTableTack implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -5412749229235093031L;
	private Integer tableId;
	/**
	 * 文件夹名
	 */
	private String tablbName;
	/**
	 * 父类id
	 */
	private Integer parentId;
	/**
	 * roomid
	 */
	private Integer dataTableRoomId;
	/**
	 * 用户id
	 */
	private Integer userId;
	
	private Integer counts;
	
	private String filePath;
	
	
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public Integer getCounts() {
		return counts;
	}
	public void setCounts(Integer counts) {
		this.counts = counts;
	}
	public Integer getTableId() {
		return tableId;
	}
	public void setTableId(Integer tableId) {
		this.tableId = tableId;
	}
	public String getTablbName() {
		return tablbName;
	}
	public void setTablbName(String tablbName) {
		this.tablbName = tablbName;
	}
	public Integer getParentId() {
		return parentId;
	}
	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}
	public Integer getDataTableRoomId() {
		return dataTableRoomId;
	}
	public void setDataTableRoomId(Integer dataTableRoomId) {
		this.dataTableRoomId = dataTableRoomId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
}
