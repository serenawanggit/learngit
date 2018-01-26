package audit.model.assess.vo;


/**
 * 
 * @author 李志荣
 * 
 */
public class SpecialtyNameAndSelfAndAssessor {
	/**
	 * 专业id
	 */
	private int  ID;
	/**
	 * 用户id
	 */
	private int  UID;
	/**
	 * ASSESSMENT_USER_INFO.id
	 */
	private int USER_INFO_ID;
	
	/**
	 * 这个 id是用来插入的
	 */
	private int DATE_SPECIALTY_ID;
	
	/**
	 * 专业名称
	 */
	private String  SPECIALTY_NAME;
	/**
	 * 身份
	 */
	private String  ASSESS_TYPE;
	/**
	 * 自评人
	 */
	private String   ASSESS_REMARK_USER;
	/*
	 * 人名
	 */
	private String showname;
	/**
	 * 审核人
	 */
	private String   ASSESS_USER_ASSESSOR;
	/**
	 * 自评用户id
	 */
	private int  ZID;
	/**
	 * 审核用户id
	 */
	private int  SID;
	/**
	 * ASSESSMENT_USER_INFO 的审核s_u_id
	 */
	private int s_u_id;
	/**
	 * ASSESSMENT_USER_INFO 的自评z_u_id
	 */
	private int z_u_id; 
	/**
	 * ASSESSMENT_USER_INFO 对应你 网评 的id  
	 */
	private String w_u_id;
	
	/**
	 * 网评专家集合(姓名+id)
	 */
	private String wangPingZhuanJiaId; 
	private String wangPingZhuanJiaName; 
	/**
	 * 现场考察专家集合(姓名+id)
	 */
	private String xckc_u_id;
	private String xianChangKaoChaZhuanJiaId;
	private String xianChangKaoChaZhuanJiaName;
	/**
	 * 现场考察专家组长集合(姓名+id)
	 */
	private String xckczj_u_id;
	private String xianChangKaoChaZuZhangId;
	private String xianChangKaoChaZuZhangName;
	
	private String assessType;
	
	
	
	
	public String getAssessType() {
		return assessType;
	}
	public void setAssessType(String assessType) {
		this.assessType = assessType;
	}
	public String getXckc_u_id() {
		return xckc_u_id;
	}
	public void setXckc_u_id(String xckc_u_id) {
		this.xckc_u_id = xckc_u_id;
	}
	public String getXckczj_u_id() {
		return xckczj_u_id;
	}
	public void setXckczj_u_id(String xckczj_u_id) {
		this.xckczj_u_id = xckczj_u_id;
	}
	public String getXianChangKaoChaZuZhangId() {
		return xianChangKaoChaZuZhangId;
	}
	public void setXianChangKaoChaZuZhangId(String xianChangKaoChaZuZhangId) {
		this.xianChangKaoChaZuZhangId = xianChangKaoChaZuZhangId;
	}
	public String getXianChangKaoChaZuZhangName() {
		return xianChangKaoChaZuZhangName;
	}
	public void setXianChangKaoChaZuZhangName(String xianChangKaoChaZuZhangName) {
		this.xianChangKaoChaZuZhangName = xianChangKaoChaZuZhangName;
	}
	public String getW_u_id() {
		return w_u_id;
	}
	public String getXianChangKaoChaZhuanJiaId() {
		return xianChangKaoChaZhuanJiaId;
	}
	public void setXianChangKaoChaZhuanJiaId(String xianChangKaoChaZhuanJiaId) {
		this.xianChangKaoChaZhuanJiaId = xianChangKaoChaZhuanJiaId;
	}
	public String getXianChangKaoChaZhuanJiaName() {
		return xianChangKaoChaZhuanJiaName;
	}
	public void setXianChangKaoChaZhuanJiaName(String xianChangKaoChaZhuanJiaName) {
		this.xianChangKaoChaZhuanJiaName = xianChangKaoChaZhuanJiaName;
	}
	public void setW_u_id(String w_u_id) {
		this.w_u_id = w_u_id;
	}
	public String getWangPingZhuanJiaId() {
		return wangPingZhuanJiaId;
	}
	public void setWangPingZhuanJiaId(String wangPingZhuanJiaId) {
		this.wangPingZhuanJiaId = wangPingZhuanJiaId;
	}
	public String getWangPingZhuanJiaName() {
		return wangPingZhuanJiaName;
	}
	public void setWangPingZhuanJiaName(String wangPingZhuanJiaName) {
		this.wangPingZhuanJiaName = wangPingZhuanJiaName;
	}
	public int getS_u_id() {
		return s_u_id;
	}
	public int getZ_u_id() {
		return z_u_id;
	}
	public void setZ_u_id(int z_u_id) {
		this.z_u_id = z_u_id;
	}
	public void setS_u_id(int s_u_id) {
		this.s_u_id = s_u_id;
	}
	public String getASSESS_REMARK_USER() {
		return ASSESS_REMARK_USER;
	}
	public void setASSESS_REMARK_USER(String aSSESS_REMARK_USER) {
		ASSESS_REMARK_USER = aSSESS_REMARK_USER;
	}
	public String getASSESS_USER_ASSESSOR() {
		return ASSESS_USER_ASSESSOR;
	}
	public void setASSESS_USER_ASSESSOR(String aSSESS_USER_ASSESSOR) {
		ASSESS_USER_ASSESSOR = aSSESS_USER_ASSESSOR;
	}
	public SpecialtyNameAndSelfAndAssessor() {
		super();
	}
	public String getSPECIALTY_NAME() {
		return SPECIALTY_NAME;
	}
	public void setSPECIALTY_NAME(String sPECIALTY_NAME) {
		SPECIALTY_NAME = sPECIALTY_NAME;
	}
	public String getASSESS_TYPE() {
		return ASSESS_TYPE;
	}
	public void setASSESS_TYPE(String aSSESS_TYPE) {
		this.assessType = aSSESS_TYPE;
		ASSESS_TYPE = aSSESS_TYPE;
	}
	public int getID() {
		return ID;
	}
	public void setID(int ID) {
		this.ID = ID;
	}
	public int getUID() {
		return UID;
	}
	public void setUID(int uID) {
		UID = uID;
	}
	public int getZID() {
		return ZID;
	}
	public void setZID(int zID) {
		ZID = zID;
	}
	public int getSID() {
		return SID;
	}
	public void setSID(int sID) {
		SID = sID;
	}
	public String getShowname() {
		return showname;
	}
	public void setShowname(String showname) {
		this.showname = showname;
	}
	public int getDATE_SPECIALTY_ID() {
		return DATE_SPECIALTY_ID;
	}
	public void setDATE_SPECIALTY_ID(int dATE_SPECIALTY_ID) {
		DATE_SPECIALTY_ID = dATE_SPECIALTY_ID;
	}
	public int getUSER_INFO_ID() {
		return USER_INFO_ID;
	}
	public void setUSER_INFO_ID(int uSER_INFO_ID) {
		USER_INFO_ID = uSER_INFO_ID;
	}
}
