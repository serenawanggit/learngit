package audit.model.gj;

import audit.annotation.ExcelAnnotation;

public class AS_GJ_BYFX {
	//G318
	private int id;
	@ExcelAnnotation(exportname = "学科")
	private String xk;
	@ExcelAnnotation(exportname = "专业分类")
	private String zyfl;
	@ExcelAnnotation(exportname = "专业名称")
	private String zymc;
	@ExcelAnnotation(exportname = "自主专业名称")
	private String zzzymc;
	@ExcelAnnotation(exportname = "专业代码")
	private String zydm;
	@ExcelAnnotation(exportname = "年制")
	private String nz;
	@ExcelAnnotation(exportname = "毕业生数")
	private String byrs;
	@ExcelAnnotation(exportname = "授予学位数")
	private String syxws;
	@ExcelAnnotation(exportname = "招生数合计")
	private String zsshj;
	@ExcelAnnotation(exportname = "招收应届毕业生")
	private String zsyjbys;
	@ExcelAnnotation(exportname = "在校生合计")
	private String zxshj;
	@ExcelAnnotation(exportname = "一年级在校生")
	private String ynjzxs;
	@ExcelAnnotation(exportname = "二年级在校生")
	private String enjzxs;
	@ExcelAnnotation(exportname = "三年级在校生")
	private String sanjzxs;
	@ExcelAnnotation(exportname = "四年级在校生")
	private String sinjzxs;
	@ExcelAnnotation(exportname = "五年级及以上在校生")
	private String wnjzxs;
	@ExcelAnnotation(exportname = "预计毕业生数")
	private String yjbyss;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getXk() {
		return xk;
	}
	public void setXk(String xk) {
		this.xk = xk;
	}
	public String getZyfl() {
		return zyfl;
	}
	public void setZyfl(String zyfl) {
		this.zyfl = zyfl;
	}
	public String getZymc() {
		return zymc;
	}
	public void setZymc(String zymc) {
		this.zymc = zymc;
	}
	public String getZzzymc() {
		return zzzymc;
	}
	public void setZzzymc(String zzzymc) {
		this.zzzymc = zzzymc;
	}
	public String getZydm() {
		return zydm;
	}
	public void setZydm(String zydm) {
		this.zydm = zydm;
	}
	public String getNz() {
		return nz;
	}
	public void setNz(String nz) {
		this.nz = nz;
	}
	public String getByrs() {
		return byrs;
	}
	public void setByrs(String byrs) {
		this.byrs = byrs;
	}
	public String getSyxws() {
		return syxws;
	}
	public void setSyxws(String syxws) {
		this.syxws = syxws;
	}
	public String getZsshj() {
		return zsshj;
	}
	public void setZsshj(String zsshj) {
		this.zsshj = zsshj;
	}
	public String getZsyjbys() {
		return zsyjbys;
	}
	public void setZsyjbys(String zsyjbys) {
		this.zsyjbys = zsyjbys;
	}
	public String getZxshj() {
		return zxshj;
	}
	public void setZxshj(String zxshj) {
		this.zxshj = zxshj;
	}
	public String getYnjzxs() {
		return ynjzxs;
	}
	public void setYnjzxs(String ynjzxs) {
		this.ynjzxs = ynjzxs;
	}
	public String getEnjzxs() {
		return enjzxs;
	}
	public void setEnjzxs(String enjzxs) {
		this.enjzxs = enjzxs;
	}
	public String getSanjzxs() {
		return sanjzxs;
	}
	public void setSanjzxs(String sanjzxs) {
		this.sanjzxs = sanjzxs;
	}
	public String getSinjzxs() {
		return sinjzxs;
	}
	public void setSinjzxs(String sinjzxs) {
		this.sinjzxs = sinjzxs;
	}
	public String getWnjzxs() {
		return wnjzxs;
	}
	public void setWnjzxs(String wnjzxs) {
		this.wnjzxs = wnjzxs;
	}
	public String getYjbyss() {
		return yjbyss;
	}
	public void setYjbyss(String yjbyss) {
		this.yjbyss = yjbyss;
	}
	
	
	public String toString(){
		StringBuffer sb = new StringBuffer();
//		sb.append("xk:" + getXk() + "|" + "zyfl:" + getZyfl() + "|" + "zymc:" +getZymc() + 
//				"|" + "zzzymc:" + getZzzymc()+"|" + "zydm:" + getZydm() + "|" + "nz:" + getNz() +
//				"|" + "byrs:" + getByrs() + "|"+ "syxws:" + getSyxws() + "|" + "zsshj:" + getZsshj() + 
//				"|" + "zsyjbys:" + getZsyjbys() + "|"  + "zxshj:" + getZxshj() + 
//				"|" + "ynjzxs: " + getYnjzxs() + "|" + "enjzxs: " + getEnjzxs()+ 
//				"|" + "sanjzxs: " + getSanjzxs() + "|" + "sinjzxs:" + getSinjzxs() + 
//				"|" + "winjzxs:" +getWnjzxs() + "|" + "yjbyss: " + getYjbyss());
		sb.append(getXk() + "|" + getZyfl() + "|"  +getZymc() + 
				"|" +  getZzzymc()+"|" +  getZydm() + "|" + getNz() +
				"|" +  getByrs() + "|"+  getSyxws() + "|" + getZsshj() + 
				"|" +  getZsyjbys() + "|"  +  getZxshj() + 
				"|" +  getYnjzxs() + "|" +  getEnjzxs()+ 
				"|" +  getSanjzxs() + "|" + getSinjzxs() + 
				"|" + getWnjzxs() + "|" + getYjbyss() + "|" + getId());
		return sb.toString();
	}
}