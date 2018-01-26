package audit.model;

public class AsCjShxx {
	
     /**
      * as_cj_cjbmybmry里面的  id
      */
	 public Integer id;
	 /**
	  * 用户id
	  */
	 
	 public Integer userid;
	 /**
	  * 用户名
	  */
	 public String showName;
	 /**
	  * 机构代码
	  */
	 public Integer organization;
	 /**
	  * 机构名
	  */
	 public String name;
	 /**
	  * 人员角色状态 1:采集人， 2:审核人
	  */
	 public Integer bmryjs;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getShowName() {
		return showName;
	}
	public void setShowName(String showName) {
		this.showName = showName;
	}
	public Integer getOrganization() {
		return organization;
	}
	public void setOrganization(Integer organization) {
		this.organization = organization;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getBmryjs() {
		return bmryjs;
	}
	public void setBmryjs(Integer bmryjs) {
		this.bmryjs = bmryjs;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	 
	 
	 
	 
}
