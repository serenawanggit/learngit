package audit.model;

public class AsPViewQuota {
	//标识
	private int vid;
	
	//指标id
	private String qid;
	
	//指标名称
	private String qname;
	
	//指标所属分类
	private String qcategory;
		
	//指标分类
	private String qtype;
	
	//方案id
	private int pid;
	
	//方案名称
	private String rpname;

	public int getVid() {
		return vid;
	}

	public void setVid(int vid) {
		this.vid = vid;
	}

	public String getQid() {
		return qid;
	}

	public void setQid(String qid) {
		this.qid = qid;
	}

	public String getQname() {
		return qname;
	}

	public void setQname(String qname) {
		this.qname = qname;
	}

	public String getQcategory() {
		return qcategory;
	}

	public void setQcategory(String qcategory) {
		this.qcategory = qcategory;
	}

	public String getQtype() {
		return qtype;
	}

	public void setQtype(String qtype) {
		this.qtype = qtype;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getRpname() {
		return rpname;
	}

	public void setRpname(String rpname) {
		this.rpname = rpname;
	}

	
}
