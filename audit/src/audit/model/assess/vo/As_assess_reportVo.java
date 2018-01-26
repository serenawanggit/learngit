package audit.model.assess.vo;

public class As_assess_reportVo {
	private  int report_id; //report表的id
	private String ENTER_CONTENT="";
	private String UPLOAD_CONTENT;
	private String UPLOAD_FILES ;/*上传文件名*/
	private String UPLOAD_ADDRESS ;/*上传地址*/
	private String RYEAR ;/*年份*/
	private  int USERID ;/*上传人ID*/	
	private  int SPECIALTY_ID ;
	private String BLACKCONTENT ;     /*审核返回内容*/
	private String contentMessge;
	private String COMMENT_CONTENT; /*网评意见*/
	
	private  int sysId;
	private String SYSTEM_NAME;
	
	private String filePath;
	
	private String remark;
	
	
	private int  struts ; //1表示成功  2表示系统不支持解析
	
	
	
	public String getCOMMENT_CONTENT() {
		return COMMENT_CONTENT;
	}
	public void setCOMMENT_CONTENT(String cOMMENT_CONTENT) {
		COMMENT_CONTENT = cOMMENT_CONTENT;
	}
	public int getStruts() {
		return struts;
	}
	public void setStruts(int struts) {
		this.struts = struts;
	}
	public String getContentMessge() {
		return contentMessge;
	}
	public void setContentMessge(String contentMessge) {
		this.contentMessge = contentMessge;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public int getReport_id() {
		return report_id;
	}
	public void setReport_id(int report_id) {
		this.report_id = report_id;
	}
	public int getSysId() {
		return sysId;
	}
	public void setSysId(int sysId) {
		this.sysId = sysId;
	}
	public String getSYSTEM_NAME() {
		return SYSTEM_NAME;
	}
	public void setSYSTEM_NAME(String sYSTEM_NAME) {
		SYSTEM_NAME = sYSTEM_NAME;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getENTER_CONTENT() {
		return ENTER_CONTENT;
	}
	public void setENTER_CONTENT(String eNTER_CONTENT) {
		ENTER_CONTENT = eNTER_CONTENT;
	}
	public String getUPLOAD_CONTENT() {
		return UPLOAD_CONTENT;
	}
	public void setUPLOAD_CONTENT(String uPLOAD_CONTENT) {
		UPLOAD_CONTENT = uPLOAD_CONTENT;
	}
	public String getUPLOAD_FILES() {
		return UPLOAD_FILES;
	}
	public void setUPLOAD_FILES(String uPLOAD_FILES) {
		UPLOAD_FILES = uPLOAD_FILES;
	}
	public String getUPLOAD_ADDRESS() {
		return UPLOAD_ADDRESS;
	}
	public void setUPLOAD_ADDRESS(String uPLOAD_ADDRESS) {
		UPLOAD_ADDRESS = uPLOAD_ADDRESS;
	}
	public String getRYEAR() {
		return RYEAR;
	}
	public void setRYEAR(String rYEAR) {
		RYEAR = rYEAR;
	}
	public int getUSERID() {
		return USERID;
	}
	public void setUSERID(int uSERID) {
		USERID = uSERID;
	}
	public int getSPECIALTY_ID() {
		return SPECIALTY_ID;
	}
	public void setSPECIALTY_ID(int sPECIALTY_ID) {
		SPECIALTY_ID = sPECIALTY_ID;
	}
	public String getBLACKCONTENT() {
		return BLACKCONTENT;
	}
	public void setBLACKCONTENT(String bLACKCONTENT) {
		BLACKCONTENT = bLACKCONTENT;
	}
	
	
	
}
