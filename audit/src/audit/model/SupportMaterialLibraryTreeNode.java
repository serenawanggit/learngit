package audit.model;

import java.sql.Timestamp;

public class SupportMaterialLibraryTreeNode {

	/**
	 * 支撑材料方案树
	 * @author zdl
	 *
	 */

		//id
		private int id;
		//name(节点名称)
		private String treename;
		//level(节点等级)
		private int level;
		//parent(节点父节点)
		private int parentId;
		//备注内容
		private String remarks;
		//是否启用
		private String isenabled;
		//创建时间
		private Timestamp createTime;


		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getTreename() {
			return treename;
		}

		public void setTreename(String treename) {
			this.treename = treename;
		}

		public int getLevel() {
			return level;
		}

		public void setLevel(int level) {
			this.level = level;
		}

		public int getParentId() {
			return parentId;
		}

		public void setParentId(int parentId) {
			this.parentId = parentId;
		}

		public String getRemarks() {
			return remarks;
		}

		public void setRemarks(String remarks) {
			this.remarks = remarks;
		}

		public String getIsenabled() {
			return isenabled;
		}

		public void setIsenabled(String isenabled) {
			this.isenabled = isenabled;
		}

		public Timestamp getCreateTime() {
			return createTime;
		}

		public void setCreateTime(Timestamp createTime) {
			this.createTime = createTime;
		}

}
