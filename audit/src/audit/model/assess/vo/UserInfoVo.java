package audit.model.assess.vo;

public class UserInfoVo {
	private int id; 
	private String showname;
	private String  searchvalue;// 查询值
	private String  name ;//所属机构  
	private String searchvalue3;//所属机构查询
	
	
	
	public String getSearchvalue3() {
		return searchvalue3;
	}
	public void setSearchvalue3(String searchvalue3) {
		this.searchvalue3 = searchvalue3;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	private int assess_type;//类型 1,自评，2 审核
	
	public int getAssess_type() {
		return assess_type;
	}
	public void setAssess_type(int assess_type) {
		this.assess_type = assess_type;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getShowname() {
		return showname;
	}
	public void setShowname(String showname) {
		this.showname = showname;
	}
	public String getSearchvalue() {
		return searchvalue;
	}
	public void setSearchvalue(String searchvalue) {
		this.searchvalue = searchvalue;
	}
	
}
