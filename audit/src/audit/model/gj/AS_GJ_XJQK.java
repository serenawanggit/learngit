package audit.model.gj;

import audit.annotation.ExcelAnnotation;

public class AS_GJ_XJQK {

	private Integer id;
	@ExcelAnnotation(exportname = "网络信息点数合计（个）")
	private String WLXXD;
	@ExcelAnnotation(exportname = "网络信息点中：无线接入（个）")
	private String WXJRGS;
	@ExcelAnnotation(exportname = "上网课程数（门）")
	private String SWKCMS;
	@ExcelAnnotation(exportname = "电子邮件系统用户数（个）")
	private String DZYJYHS;
	@ExcelAnnotation(exportname = "管理信息系统数据总量（GB）")
	private String GLXXXTZL;
	@ExcelAnnotation(exportname = "数字资源量合计（GB）")
	private String SZZYHJ;
	@ExcelAnnotation(exportname = "数字资源量中：电子图书（GB）")
	private String SZZYDT;
	@ExcelAnnotation(exportname = "信息化培训人次（人次）")
	private String XXHPXRC;
	@ExcelAnnotation(exportname = "信息化工作人员数（人）")
	private String XXHRYS;
	
	
	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getWLXXD() {
		return WLXXD;
	}


	public void setWLXXD(String wLXXD) {
		WLXXD = wLXXD;
	}


	public String getWXJRGS() {
		return WXJRGS;
	}


	public void setWXJRGS(String wXJRGS) {
		WXJRGS = wXJRGS;
	}


	public String getSWKCMS() {
		return SWKCMS;
	}


	public void setSWKCMS(String sWKCMS) {
		SWKCMS = sWKCMS;
	}


	public String getDZYJYHS() {
		return DZYJYHS;
	}


	public void setDZYJYHS(String dZYJYHS) {
		DZYJYHS = dZYJYHS;
	}


	public String getGLXXXTZL() {
		return GLXXXTZL;
	}


	public void setGLXXXTZL(String gLXXXTZL) {
		GLXXXTZL = gLXXXTZL;
	}


	public String getSZZYHJ() {
		return SZZYHJ;
	}


	public void setSZZYHJ(String sZZYHJ) {
		SZZYHJ = sZZYHJ;
	}


	public String getSZZYDT() {
		return SZZYDT;
	}


	public void setSZZYDT(String sZZYDT) {
		SZZYDT = sZZYDT;
	}


	public String getXXHPXRC() {
		return XXHPXRC;
	}


	public void setXXHPXRC(String xXHPXRC) {
		XXHPXRC = xXHPXRC;
	}


	public String getXXHRYS() {
		return XXHRYS;
	}


	public void setXXHRYS(String xXHRYS) {
		XXHRYS = xXHRYS;
	}


	public String toString(){
		StringBuffer sb = new StringBuffer();
		sb.append(getWLXXD() + "|" + getWXJRGS() + "|" + getSWKCMS() + "|" +
				getDZYJYHS() + "|" + getGLXXXTZL() + "|" + getSZZYHJ() + "|" + 
				getSZZYDT() + "|" + getXXHPXRC() + "|" + getXXHRYS()+ "|" + getId());
		return sb.toString();
	}
}
