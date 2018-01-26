package audit.model.gj;

import audit.annotation.ExcelAnnotation;

public class AS_GJ_ZCQK {

	private Integer id;
	@ExcelAnnotation(exportname = "占地面积合计（平方米）")
	private String ZDMJHJ ;
	@ExcelAnnotation(exportname = "占地面积中：绿化用地面积（平方米）")
	private String ZDLH ;
	@ExcelAnnotation(exportname = "占地面积中：运动场地面积（平方米）")
	private String ZDYC ;
	@ExcelAnnotation(exportname = "图书合计（万册）")
	private String TSHJ ;
	@ExcelAnnotation(exportname = "当年新增图书（万册）")
	private String DNXZ ;
	@ExcelAnnotation(exportname = "计算机数合计（台）")
	private String JSJS ;
	@ExcelAnnotation(exportname = "计算机中：教学用计算机合计（台）")
	private String JSJJX ;
	@ExcelAnnotation(exportname = "教学用计算机中：平板电脑（台）")
	private String JSJPB ;
	@ExcelAnnotation(exportname = "教室合计（间）")
	private String JSHJ ;
	@ExcelAnnotation(exportname = "教室中：网络多媒体教室（间）")
	private String WLJS ;
	@ExcelAnnotation(exportname = "固定资产总值合计（万元）")
	private String GDZCHJ ;
	@ExcelAnnotation(exportname = "固定资产中：教学、科研仪器设备资产值（万元）")
	private String GDZCJXKY ;
	@ExcelAnnotation(exportname = "教学、科研仪器设备中：当年新增（万元）")
	private String JXKYXZ ;
	@ExcelAnnotation(exportname = "固定资产中：信息化设备资产值（万元）")
	private String XXHSBZC ;
	@ExcelAnnotation(exportname = "信息化设备中：软件（万元）")
	private String XXHSBRJ ;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getZDMJHJ() {
		return ZDMJHJ;
	}
	public void setZDMJHJ(String zDMJHJ) {
		ZDMJHJ = zDMJHJ;
	}
	public String getZDLH() {
		return ZDLH;
	}
	public void setZDLH(String zDLH) {
		ZDLH = zDLH;
	}
	public String getZDYC() {
		return ZDYC;
	}
	public void setZDYC(String zDYC) {
		ZDYC = zDYC;
	}
	public String getTSHJ() {
		return TSHJ;
	}
	public void setTSHJ(String tSHJ) {
		TSHJ = tSHJ;
	}
	public String getDNXZ() {
		return DNXZ;
	}
	public void setDNXZ(String dNXZ) {
		DNXZ = dNXZ;
	}
	public String getJSJS() {
		return JSJS;
	}
	public void setJSJS(String jSJS) {
		JSJS = jSJS;
	}
	public String getJSJJX() {
		return JSJJX;
	}
	public void setJSJJX(String jSJJX) {
		JSJJX = jSJJX;
	}
	public String getJSJPB() {
		return JSJPB;
	}
	public void setJSJPB(String jSJPB) {
		JSJPB = jSJPB;
	}
	public String getJSHJ() {
		return JSHJ;
	}
	public void setJSHJ(String jSHJ) {
		JSHJ = jSHJ;
	}
	public String getWLJS() {
		return WLJS;
	}
	public void setWLJS(String wLJS) {
		WLJS = wLJS;
	}
	public String getGDZCHJ() {
		return GDZCHJ;
	}
	public void setGDZCHJ(String gDZCHJ) {
		GDZCHJ = gDZCHJ;
	}
	public String getGDZCJXKY() {
		return GDZCJXKY;
	}
	public void setGDZCJXKY(String gDZCJXKY) {
		GDZCJXKY = gDZCJXKY;
	}
	public String getJXKYXZ() {
		return JXKYXZ;
	}
	public void setJXKYXZ(String jXKYXZ) {
		JXKYXZ = jXKYXZ;
	}
	public String getXXHSBZC() {
		return XXHSBZC;
	}
	public void setXXHSBZC(String xXHSBZC) {
		XXHSBZC = xXHSBZC;
	}
	public String getXXHSBRJ() {
		return XXHSBRJ;
	}
	public void setXXHSBRJ(String xXHSBRJ) {
		XXHSBRJ = xXHSBRJ;
	}
	
	public String toString(){
		StringBuffer sb = new StringBuffer();
		sb.append(getZDMJHJ() + "|" + getZDLH() + "|" + getZDYC() + "|" + getTSHJ() + "|" +
				getDNXZ() + "|" +getJSJS() + "|" +getJSJJX() + "|" +getJSJPB(	) + "|" +
				getJSHJ() + "|" +getWLJS() + "|" +getGDZCHJ() + "|" +getGDZCJXKY() + "|" +
				getJXKYXZ() + "|" +getXXHSBZC() + "|" +getXXHSBRJ()+ "|" + getId());
		return sb.toString();
	}
}
