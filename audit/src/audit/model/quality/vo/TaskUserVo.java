package audit.model.quality.vo;

import audit.model.quality.AsZlJdrwryglb;

public class TaskUserVo extends AsZlJdrwryglb{

	/**
	 * 
	 * UserVo.java
	 */
	private static final long serialVersionUID = -5879503835676405573L;
	
	private String organizateName;
	
	private String specialtyName;
	
	private String userName;
	
	private Integer organization;
	
	private Integer specialty;

	public Integer getOrganization() {
		return organization;
	}

	public void setOrganization(Integer organization) {
		this.organization = organization;
	}

	public Integer getSpecialty() {
		return specialty;
	}

	public void setSpecialty(Integer specialty) {
		this.specialty = specialty;
	}

	public String getOrganizateName() {
		return organizateName;
	}

	public void setOrganizateName(String organizateName) {
		this.organizateName = organizateName;
	}

	public String getSpecialtyName() {
		return specialtyName;
	}

	public void setSpecialtyName(String specialtyName) {
		this.specialtyName = specialtyName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
