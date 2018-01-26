package audit.model;

import java.util.List;

/**
 * 部门与部门人员关联
 * @author Administrator
 *
 */

public class AsCjBmyBmry {

	private Integer id;
	
	/**
	 * 采集部门代码
	 */
	private Integer cjbmdm;
	
	/**
	 * 人员代码
	 */
	private Integer userid;
	
	/**
	 * 人员角色
	 */
	private Integer bmryjs;
	
	private List<User> users;
	
	private List<AsCjBmxx> asCjBmxxs;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getCjbmdm() {
		return cjbmdm;
	}

	public void setCjbmdm(Integer cjbmdm) {
		this.cjbmdm = cjbmdm;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public Integer getBmryjs() {
		return bmryjs;
	}

	public void setBmryjs(Integer bmryjs) {
		this.bmryjs = bmryjs;
	}

	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	public List<AsCjBmxx> getAsCjBmxxs() {
		return asCjBmxxs;
	}

	public void setAsCjBmxxs(List<AsCjBmxx> asCjBmxxs) {
		this.asCjBmxxs = asCjBmxxs;
	}
	
	
}
