package audit.model.quality.vo;
/**
 * 管理员进度跟踪listVo
 * @author Administrator
 *
 */
public class JDuGenZ {
	private String  self_assess_zt;
	private String  audit_zt; // 审核状态
	private String  item;//1 整改 2质量
	private String  struts;//网评状态
	private String  zgStruts;//整改状态
	private String  zlStruts;//质量状态
	private String  xcStruts;//现场考察状态
	private String  zjjhStruts;//整改计划状态
	private String  SITE_VISITS;// 现场考察时间
	
	private String specialty_id;//专业id
	private String showname;//自评人名字
	private String oName;
	private String sp_name;
	
	
	
	
	public String getSITE_VISITS() {
		return SITE_VISITS;
	}
	public void setSITE_VISITS(String sITE_VISITS) {
		SITE_VISITS = sITE_VISITS;
	}
	public String getXcStruts() {
		return xcStruts;
	}
	public void setXcStruts(String xcStruts) {
		this.xcStruts = xcStruts;
	}
	public String getZjjhStruts() {
		return zjjhStruts;
	}
	public void setZjjhStruts(String zjjhStruts) {
		this.zjjhStruts = zjjhStruts;
	}
	public String getSp_name() {
		return sp_name;
	}
	public void setSp_name(String sp_name) {
		this.sp_name = sp_name;
	}
	
	public String getoName() {
		return oName;
	}
	public void setoName(String oName) {
		this.oName = oName;
	}
	public String getShowname() {
		return showname;
	}
	public void setShowname(String showname) {
		this.showname = showname;
	}
	public String getAudit_zt() {
		return audit_zt;
	}
	public void setAudit_zt(String audit_zt) {
		this.audit_zt = audit_zt;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getStruts() {
		return struts;
	}
	public void setStruts(String struts) {
		this.struts = struts;
	}
	public String getZgStruts() {
		return zgStruts;
	}
	public void setZgStruts(String zgStruts) {
		this.zgStruts = zgStruts;
	}
	public String getZlStruts() {
		return zlStruts;
	}
	public void setZlStruts(String zlStruts) {
		this.zlStruts = zlStruts;
	}
	public String getSpecialty_id() {
		return specialty_id;
	}
	public void setSpecialty_id(String specialty_id) {
		this.specialty_id = specialty_id;
	}
	public String getSelf_assess_zt() {
		return self_assess_zt;
	}
	public void setSelf_assess_zt(String self_assess_zt) {
		this.self_assess_zt = self_assess_zt;
	}

	
	
}
