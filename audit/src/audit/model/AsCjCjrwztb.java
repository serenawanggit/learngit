package audit.model;


public class AsCjCjrwztb {

	private Integer id;
//	采集任务代码	CJRWDM
	private Integer cjrwdm;
//	状态表代码	ZTBDM
	private Integer ztbdm;
//	采集人	CJR
	private Integer cjr;
//	采集状态	CJZT
	private Integer cjzt;
//	审核人	SHR
	private Integer shr;
//	审核状态	SHZT
	private Integer shzt;
//	是否提交审核	SFTJSH
	private Integer sftjsh;
//	统计时间	CJRWNF
	private String cjrwnf;
	
	private AsCjZtsjbxx asCjZtsjbxx;
	private AsCjRwxx asCjRwxx;
	private User user;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getCjrwdm() {
		return cjrwdm;
	}
	public void setCjrwdm(Integer cjrwdm) {
		this.cjrwdm = cjrwdm;
	}
	public Integer getZtbdm() {
		return ztbdm;
	}
	public void setZtbdm(Integer ztbdm) {
		this.ztbdm = ztbdm;
	}
	public Integer getCjr() {
		return cjr;
	}
	public void setCjr(Integer cjr) {
		this.cjr = cjr;
	}
	public Integer getCjzt() {
		return cjzt;
	}
	public void setCjzt(Integer cjzt) {
		this.cjzt = cjzt;
	}
	public Integer getShr() {
		return shr;
	}
	public void setShr(Integer shr) {
		this.shr = shr;
	}
	public Integer getShzt() {
		return shzt;
	}
	public void setShzt(Integer shzt) {
		this.shzt = shzt;
	}
	public Integer getSftjsh() {
		return sftjsh;
	}
	public void setSftjsh(Integer sftjsh) {
		this.sftjsh = sftjsh;
	}
	public String getCjrwnf() {
		return cjrwnf;
	}
	public void setCjrwnf(String cjrwnf) {
		this.cjrwnf = cjrwnf;
	}
	public AsCjZtsjbxx getAsCjZtsjbxx() {
		return asCjZtsjbxx;
	}
	public void setAsCjZtsjbxx(AsCjZtsjbxx asCjZtsjbxx) {
		this.asCjZtsjbxx = asCjZtsjbxx;
	}
	public AsCjRwxx getAsCjRwxx() {
		return asCjRwxx;
	}
	public void setAsCjRwxx(AsCjRwxx asCjRwxx) {
		this.asCjRwxx = asCjRwxx;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
	
}