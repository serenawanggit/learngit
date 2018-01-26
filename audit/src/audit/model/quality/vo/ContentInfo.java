package audit.model.quality.vo;
/**
 * 整改报告内容显示vo
 * @author Administrator
 *
 */
public class ContentInfo {
	private int  specialty_id;
	
	private  int task_id;
	private  int rectification_id;//评估整改id
	private String SPECIALTY_NAME;

	private String FILES_NAME;
	private String FILE_address;
	private String ContentMessge;
	private String FILE_TYPE;
	private String pingGuShijian;// 评估时间
	private int struts;
	private String RYEAR;
	private String userid; 
	
	private  String  contentblack;
	
	private String item;
	private String ASSESS_TYPE;
	
	
	
	public String getASSESS_TYPE() {
		return ASSESS_TYPE;
	}
	public void setASSESS_TYPE(String aSSESS_TYPE) {
		ASSESS_TYPE = aSSESS_TYPE;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getRYEAR() {
		return RYEAR;
	}
	public void setRYEAR(String rYEAR) {
		RYEAR = rYEAR;
	}
	public String getContentblack() {
		return contentblack;
	}
	public void setContentblack(String contentblack) {
		this.contentblack = contentblack;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public int getStruts() {
		return struts;
	}
	public void setStruts(int struts) {
		this.struts = struts;
	}
	public String getPingGuShijian() {
		return pingGuShijian;
	}
	public void setPingGuShijian(String pingGuShijian) {
		this.pingGuShijian = pingGuShijian;
	}
	private String BLACKCONTENT;//返回的意见
	private String filePath ;
	
	
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getFILE_TYPE() {
		return FILE_TYPE;
	}
	public void setFILE_TYPE(String fILE_TYPE) {
		FILE_TYPE = fILE_TYPE;
	}
	public int getRectification_id() {
		return rectification_id;
	}
	public void setRectification_id(int rectification_id) {
		this.rectification_id = rectification_id;
	}
	public int getTask_id() {
		return task_id;
	}
	public void setTask_id(int task_id) {
		this.task_id = task_id;
	}
	public String getBLACKCONTENT() {
		return BLACKCONTENT;
	}
	public void setBLACKCONTENT(String bLACKCONTENT) {
		BLACKCONTENT = bLACKCONTENT;
	}
	public String getContentMessge() {
		return ContentMessge;
	}
	public void setContentMessge(String contentMessge) {
		ContentMessge = contentMessge;
	}
	public String getSPECIALTY_NAME() {
		return SPECIALTY_NAME;
	}
	public void setSPECIALTY_NAME(String sPECIALTY_NAME) {
		SPECIALTY_NAME = sPECIALTY_NAME;
	}
	public String getFILES_NAME() {
		return FILES_NAME;
	}
	public void setFILES_NAME(String fILES_NAME) {
		FILES_NAME = fILES_NAME;
	}
	public String getFILE_address() {
		return FILE_address;
	}
	public void setFILE_address(String fILE_address) {
		FILE_address = fILE_address;
	}
	
	public int getSpecialty_id() {
		return specialty_id;
	}
	public void setSpecialty_id(int specialty_id) {
		this.specialty_id = specialty_id;
	}
}
