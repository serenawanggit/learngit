package audit.model.quality.vo;
/**
 * 专业审核  列表vo
 * @author Administrator
 *
 */
public class ZgList {
	private int s_info_id;
	
	private int t_task_id;//任务id
	private int zg_task_id;//整改任务id
	private int zy_task_id;//专业质量报告id
	private String SPECIALTY_CODE;
	private String SPECIALTY_NAME;
	private int item;///1整改2质量报告
	private int self_assess_zt;//*自评人提交否*/0审核 1已提交 待审核 2未通过 3通过
	private int  IS_RZ;// 是否认证
	
	private  String   zG_self_assess_zt="";
	private  String   zLBG_self_assess_zt="";
	
	private  String COMMENT_DATE;
	private  String SITE_VISITS;
	
	private  int  ispass;//网评 1过期了  0 没过期
	private  int  xispass;//现场考察 1过期了  0 没过期
	
	
	private  int  struts;//网评是是否通过 1提交2 未提交
	private  int userid;
	
	
	private  int engineering;
	
	
	
	public int getEngineering() {
		return engineering;
	}
	public void setEngineering(int engineering) {
		this.engineering = engineering;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public int getIS_RZ() {
		return IS_RZ;
	}
	public void setIS_RZ(int iS_RZ) {
		IS_RZ = iS_RZ;
	}
	public int getXispass() {
		return xispass;
	}
	public void setXispass(int xispass) {
		this.xispass = xispass;
	}
	public String getSITE_VISITS() {
		return SITE_VISITS;
	}
	public void setSITE_VISITS(String sITE_VISITS) {
		SITE_VISITS = sITE_VISITS;
	}
	
	public int getIspass() {
		return ispass;
	}
	public int getStruts() {
		return struts;
	}
	public void setStruts(int struts) {
		this.struts = struts;
	}
	public void setIspass(int ispass) {
		this.ispass = ispass;
	}
	public int getT_task_id() {
		return t_task_id;
	}
	public void setT_task_id(int t_task_id) {
		this.t_task_id = t_task_id;
	}
	public int getZg_task_id() {
		return zg_task_id;
	}
	public void setZg_task_id(int zg_task_id) {
		this.zg_task_id = zg_task_id;
	}
	public int getZy_task_id() {
		return zy_task_id;
	}
	public void setZy_task_id(int zy_task_id) {
		this.zy_task_id = zy_task_id;
	}
	public String getCOMMENT_DATE() {
		return COMMENT_DATE;
	}
	public void setCOMMENT_DATE(String cOMMENT_DATE) {
		COMMENT_DATE = cOMMENT_DATE;
	}
	public String getzG_self_assess_zt() {
		return zG_self_assess_zt;
	}
	public void setzG_self_assess_zt(String zG_self_assess_zt) {
		this.zG_self_assess_zt = zG_self_assess_zt;
	}
	public String getzLBG_self_assess_zt() {
		return zLBG_self_assess_zt;
	}
	public void setzLBG_self_assess_zt(String zLBG_self_assess_zt) {
		this.zLBG_self_assess_zt = zLBG_self_assess_zt;
	}
	public int getS_info_id() {
		return s_info_id;
	}
	public void setS_info_id(int s_info_id) {
		this.s_info_id = s_info_id;
	}
	public String getSPECIALTY_CODE() {
		return SPECIALTY_CODE;
	}
	public void setSPECIALTY_CODE(String sPECIALTY_CODE) {
		SPECIALTY_CODE = sPECIALTY_CODE;
	}
	public String getSPECIALTY_NAME() {
		return SPECIALTY_NAME;
	}
	public void setSPECIALTY_NAME(String sPECIALTY_NAME) {
		SPECIALTY_NAME = sPECIALTY_NAME;
	}
	public int getItem() {
		return item;
	}
	public void setItem(int item) {
		this.item = item;
	}
	public int getSelf_assess_zt() {
		return self_assess_zt;
	}
	public void setSelf_assess_zt(int self_assess_zt) {
		this.self_assess_zt = self_assess_zt;
	}
	
	
	
	
}
