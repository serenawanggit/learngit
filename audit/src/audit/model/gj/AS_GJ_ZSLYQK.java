package audit.model.gj;

import audit.annotation.ExcelAnnotation;

public class AS_GJ_ZSLYQK {

	private Integer id;
	@ExcelAnnotation(exportname = "招生数合计")
	private String ZSSHJ ;
	@ExcelAnnotation(exportname = "招收普通专科生数")
	private String ZSPZSS ;
	@ExcelAnnotation(exportname = "招收普通本科生数")
	private String ZSPBSS ;
	@ExcelAnnotation(exportname = "在校生数合计")
	private String ZXSHJ ;
	@ExcelAnnotation(exportname = "普通专科在校生")
	private String PZZXS ;
	@ExcelAnnotation(exportname = "普通本科在校生")
	private String PBZXS ;
	@ExcelAnnotation(exportname = "成人专科在校生")
	private String CZZXS ;
	@ExcelAnnotation(exportname = "成人本科在校生")
	private String CBZXS ;
	@ExcelAnnotation(exportname = "网络专科在校生")
	private String WZZXS ;
	@ExcelAnnotation(exportname = "网络本科在校生")
	private String WBZXS ;
	@ExcelAnnotation(exportname = "硕士研究在校生")
	private String SYZXS ;
	@ExcelAnnotation(exportname = "博士研究在校生")
	private String BYZXS ;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getZSSHJ() {
		return ZSSHJ;
	}
	public void setZSSHJ(String zSSHJ) {
		ZSSHJ = zSSHJ;
	}
	public String getZSPZSS() {
		return ZSPZSS;
	}
	public void setZSPZSS(String zSPZSS) {
		ZSPZSS = zSPZSS;
	}
	public String getZSPBSS() {
		return ZSPBSS;
	}
	public void setZSPBSS(String zSPBSS) {
		ZSPBSS = zSPBSS;
	}
	public String getZXSHJ() {
		return ZXSHJ;
	}
	public void setZXSHJ(String zXSHJ) {
		ZXSHJ = zXSHJ;
	}
	public String getPZZXS() {
		return PZZXS;
	}
	public void setPZZXS(String pZZXS) {
		PZZXS = pZZXS;
	}
	public String getPBZXS() {
		return PBZXS;
	}
	public void setPBZXS(String pBZXS) {
		PBZXS = pBZXS;
	}
	public String getCZZXS() {
		return CZZXS;
	}
	public void setCZZXS(String cZZXS) {
		CZZXS = cZZXS;
	}
	public String getCBZXS() {
		return CBZXS;
	}
	public void setCBZXS(String cBZXS) {
		CBZXS = cBZXS;
	}
	public String getWZZXS() {
		return WZZXS;
	}
	public void setWZZXS(String wZZXS) {
		WZZXS = wZZXS;
	}
	public String getWBZXS() {
		return WBZXS;
	}
	public void setWBZXS(String wBZXS) {
		WBZXS = wBZXS;
	}
	public String getSYZXS() {
		return SYZXS;
	}
	public void setSYZXS(String sYZXS) {
		SYZXS = sYZXS;
	}
	public String getBYZXS() {
		return BYZXS;
	}
	public void setBYZXS(String bYZXS) {
		BYZXS = bYZXS;
	}
	
	
	public String toString(){
		StringBuffer sb = new StringBuffer();
		sb.append(getZSSHJ() + "|" + getZSPZSS() + "|" + getZSPBSS() + "|" + 
				getZXSHJ() + "|" + getPZZXS() + "|" + getPBZXS() + "|" + 
				getCZZXS() + "|" + getCBZXS() + "|" + getWZZXS() + "|" + 
				getWBZXS() + "|" + getSYZXS() + "|" + getBYZXS()+ "|" + getId());
		return sb.toString();
	}
}
