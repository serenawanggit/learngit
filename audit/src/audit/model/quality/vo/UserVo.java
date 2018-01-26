package audit.model.quality.vo;

import audit.model.quality.AsZlZlrwbmry;

public class UserVo extends AsZlZlrwbmry{

	/**
	 * 
	 * UserVo.java
	 */
	private static final long serialVersionUID = -5879503835676405573L;

	private String userName;
	private String showname;
	

	public String getShowname() {
		return showname;
	}

	public void setShowname(String showname) {
		this.showname = showname;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
