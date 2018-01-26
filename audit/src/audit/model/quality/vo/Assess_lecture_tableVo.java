package audit.model.quality.vo;

public class Assess_lecture_tableVo {
	private int ID;  /*ID*/
	private String COURSE_SHITUATION;   /*课程情况*/
	private String TEACHER_SHITUATION; /*授课教师情况*/
	private String FROM_INSPECTION; /*考察形式*/
	private String OVERALL_EVALUA; 	/*总体评价*/
	private String PROBLEMS_AND_SUGGESTTIONS;/*问题及意见*/
	private String USERID;							  /*现场考察人id*/
	private String SYEAR;					/*年份*/
	private String OBJECTID;						/*评估对象id*/
	private String TYPE;							/*评估数据插入类型*/
	private String EVELUATION_DATE;/*评价时间*/
	
	private String user_name;
	private String sp_name;
	
	
	
	
	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getSp_name() {
		return sp_name;
	}

	public void setSp_name(String sp_name) {
		this.sp_name = sp_name;
	}

	public void setOBJECTID(String oBJECTID) {
		OBJECTID = oBJECTID;
	}

	public Assess_lecture_tableVo() {
		super();
	}
	
	public Assess_lecture_tableVo(String cOURSE_SHITUATION,
			String tEACHER_SHITUATION, String fROM_INSPECTION,
			String oVERALL_EVALUA, String pROBLEMS_AND_SUGGESTTIONS,
			String uSERID, String sYEAR, String oBJECT_ID, String tYPE,
			String eVELUATION_DATE) {
		super();
		COURSE_SHITUATION = cOURSE_SHITUATION;
		TEACHER_SHITUATION = tEACHER_SHITUATION;
		FROM_INSPECTION = fROM_INSPECTION;
		OVERALL_EVALUA = oVERALL_EVALUA;
		PROBLEMS_AND_SUGGESTTIONS = pROBLEMS_AND_SUGGESTTIONS;
		USERID = uSERID;
		SYEAR = sYEAR;
		OBJECTID = oBJECT_ID;
		TYPE = tYPE;
		EVELUATION_DATE = eVELUATION_DATE;
	}

	public Assess_lecture_tableVo(String uSERID, String sYEAR,
			String oBJECT_ID, String tYPE) {
		super();
		USERID = uSERID;
		SYEAR = sYEAR;
		OBJECTID = oBJECT_ID;
		TYPE = tYPE;
	}



	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public String getCOURSE_SHITUATION() {
		return COURSE_SHITUATION;
	}
	public void setCOURSE_SHITUATION(String cOURSE_SHITUATION) {
		COURSE_SHITUATION = cOURSE_SHITUATION;
	}
	public String getTEACHER_SHITUATION() {
		return TEACHER_SHITUATION;
	}
	public void setTEACHER_SHITUATION(String tEACHER_SHITUATION) {
		TEACHER_SHITUATION = tEACHER_SHITUATION;
	}
	public String getFROM_INSPECTION() {
		return FROM_INSPECTION;
	}
	public void setFROM_INSPECTION(String fROM_INSPECTION) {
		FROM_INSPECTION = fROM_INSPECTION;
	}
	public String getOVERALL_EVALUA() {
		return OVERALL_EVALUA;
	}
	public void setOVERALL_EVALUA(String oVERALL_EVALUA) {
		OVERALL_EVALUA = oVERALL_EVALUA;
	}
	public String getPROBLEMS_AND_SUGGESTTIONS() {
		return PROBLEMS_AND_SUGGESTTIONS;
	}
	public void setPROBLEMS_AND_SUGGESTTIONS(String pROBLEMS_AND_SUGGESTTIONS) {
		PROBLEMS_AND_SUGGESTTIONS = pROBLEMS_AND_SUGGESTTIONS;
	}
	public String getUSERID() {
		return USERID;
	}
	public void setUSERID(String uSERID) {
		USERID = uSERID;
	}
	public String getSYEAR() {
		return SYEAR;
	}
	public void setSYEAR(String sYEAR) {
		SYEAR = sYEAR;
	}
	public String getOBJECTID() {
		return OBJECTID;
	}
	public void setOBJECT_ID(String oBJECTID) {
		OBJECTID = oBJECTID;
	}
	public String getTYPE() {
		return TYPE;
	}
	public void setTYPE(String tYPE) {
		TYPE = tYPE;
	}
	public String getEVELUATION_DATE() {
		return EVELUATION_DATE;
	}
	public void setEVELUATION_DATE(String eVELUATION_DATE) {
		EVELUATION_DATE = eVELUATION_DATE;
	}
	
	
	
	
}
