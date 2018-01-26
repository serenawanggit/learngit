package audit.model;

public class AsPRelevanceItem {
	
	//标识
	private int rid;
	
	//方案id
	private int pid;
	
	//关联方案ID
	private int rpid;
	
	//关联方案的观测指标ID
	private int rvid;
	
	//关联方案名称
	private String rpname;
		
	//关联方案的观测指标名称
	private String rvqname;


	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public int getRpid() {
		return rpid;
	}

	public void setRpid(int rpid) {
		this.rpid = rpid;
	}

	public int getRvid() {
		return rvid;
	}

	public void setRvid(int rvid) {
		this.rvid = rvid;
	}

	public String getRpname() {
		return rpname;
	}

	public void setRpname(String rpname) {
		this.rpname = rpname;
	}

	public String getRvqname() {
		return rvqname;
	}

	public void setRvqname(String rvqname) {
		this.rvqname = rvqname;
	}

	
	
	
}
