package audit.model;

public class AsCjShRenVo {
 
	/**
	 * 用户id
	 */
	public Integer id;
	
	/**
	 * 机构代码
	 */
	public Integer organization;
	
	public  String showName;
	/**
	 * 机构名称
	 */
	public String orgName;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getOrganization() {
		return organization;
	}
	public void setOrganization(Integer organization) {
		this.organization = organization;
	}
	public String getShowName() {
		return showName;
	}
	public void setShowName(String showName) {
		this.showName = showName;
	}
	public String getOrgName() {
		return orgName;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	
	
}
