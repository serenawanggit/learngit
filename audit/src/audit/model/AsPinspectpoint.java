package audit.model;

public class AsPinspectpoint {
	
	//标识
	private int id;
	
	//方案id
	private int pid;
	
	//考察重点名
	private String title;
	
	//考察重点内容
	private String icontent;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getIcontent() {
		return icontent;
	}

	public void setIcontent(String icontent) {
		this.icontent = icontent;
	}

	
	
}
