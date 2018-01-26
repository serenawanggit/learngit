package audit.model.gj;

import audit.annotation.ExcelAnnotation;

public class AS_GJ_FDNLZWXL {

	private Integer id;
	@ExcelAnnotation(exportname = "合计")
	private String HJ ;
	@ExcelAnnotation(exportname = "其中：女")
	private String QZN ;
	@ExcelAnnotation(exportname = "本专科生专职辅导员合计")
	private String BKSZZFDHJ ;
	@ExcelAnnotation(exportname = "本专科生专职辅导员中：19岁及以下")
	private String BKSZZFDSJYX ;
	@ExcelAnnotation(exportname = "本专科生专职辅导员中：20-29岁")
	private String BKSZZFDESZESJ ;
	@ExcelAnnotation(exportname = "本专科生专职辅导员中：30-39岁")
	private String BKSZZFDSSZSSJ ;
	@ExcelAnnotation(exportname = "本专科生专职辅导员中：40-49岁")
	private String BKSZZFDSIZSIJ ;
	@ExcelAnnotation(exportname = "本专科生专职辅导员中：50岁以上")
	private String BKSZZFDWSYS ;
	@ExcelAnnotation(exportname = "研究生专职辅导员合计")
	private String YJSZZFDHJ ;
	@ExcelAnnotation(exportname = "研究生专职辅导员中：19岁以下")
	private String YJSZZFDSJYX ;
	@ExcelAnnotation(exportname = "研究生专职辅导员中：20-29岁")
	private String YJSZZFDESZESJ ;
	@ExcelAnnotation(exportname = "研究生专职辅导员中：30-39岁")
	private String YJSZZFDSSZSSJ ;
	@ExcelAnnotation(exportname = "研究生专职辅导员中：40-49岁")
	private String YJSZZFDSIZSIJ ;
	@ExcelAnnotation(exportname = "研究生专职辅导员中：50岁及以上")
	private String YJSZZFDWSJYS ;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getHJ() {
		return HJ;
	}
	public void setHJ(String hJ) {
		HJ = hJ;
	}
	public String getQZN() {
		return QZN;
	}
	public void setQZN(String qZN) {
		QZN = qZN;
	}
	public String getBKSZZFDHJ() {
		return BKSZZFDHJ;
	}
	public void setBKSZZFDHJ(String bKSZZFDHJ) {
		BKSZZFDHJ = bKSZZFDHJ;
	}
	public String getBKSZZFDSJYX() {
		return BKSZZFDSJYX;
	}
	public void setBKSZZFDSJYX(String bKSZZFDSJYX) {
		BKSZZFDSJYX = bKSZZFDSJYX;
	}
	public String getBKSZZFDESZESJ() {
		return BKSZZFDESZESJ;
	}
	public void setBKSZZFDESZESJ(String bKSZZFDESZESJ) {
		BKSZZFDESZESJ = bKSZZFDESZESJ;
	}
	public String getBKSZZFDSSZSSJ() {
		return BKSZZFDSSZSSJ;
	}
	public void setBKSZZFDSSZSSJ(String bKSZZFDSSZSSJ) {
		BKSZZFDSSZSSJ = bKSZZFDSSZSSJ;
	}
	public String getBKSZZFDSIZSIJ() {
		return BKSZZFDSIZSIJ;
	}
	public void setBKSZZFDSIZSIJ(String bKSZZFDSIZSIJ) {
		BKSZZFDSIZSIJ = bKSZZFDSIZSIJ;
	}
	public String getBKSZZFDWSYS() {
		return BKSZZFDWSYS;
	}
	public void setBKSZZFDWSYS(String bKSZZFDWSYS) {
		BKSZZFDWSYS = bKSZZFDWSYS;
	}
	public String getYJSZZFDHJ() {
		return YJSZZFDHJ;
	}
	public void setYJSZZFDHJ(String yJSZZFDHJ) {
		YJSZZFDHJ = yJSZZFDHJ;
	}
	public String getYJSZZFDSJYX() {
		return YJSZZFDSJYX;
	}
	public void setYJSZZFDSJYX(String yJSZZFDSJYX) {
		YJSZZFDSJYX = yJSZZFDSJYX;
	}
	public String getYJSZZFDESZESJ() {
		return YJSZZFDESZESJ;
	}
	public void setYJSZZFDESZESJ(String yJSZZFDESZESJ) {
		YJSZZFDESZESJ = yJSZZFDESZESJ;
	}
	public String getYJSZZFDSSZSSJ() {
		return YJSZZFDSSZSSJ;
	}
	public void setYJSZZFDSSZSSJ(String yJSZZFDSSZSSJ) {
		YJSZZFDSSZSSJ = yJSZZFDSSZSSJ;
	}
	public String getYJSZZFDSIZSIJ() {
		return YJSZZFDSIZSIJ;
	}
	public void setYJSZZFDSIZSIJ(String yJSZZFDSIZSIJ) {
		YJSZZFDSIZSIJ = yJSZZFDSIZSIJ;
	}
	public String getYJSZZFDWSJYS() {
		return YJSZZFDWSJYS;
	}
	public void setYJSZZFDWSJYS(String yJSZZFDWSJYS) {
		YJSZZFDWSJYS = yJSZZFDWSJYS;
	}
	
	public String toString(){
		StringBuffer sb = new StringBuffer();
		sb.append(getHJ() + "|" + getQZN() + "|" +getBKSZZFDHJ() + "|" + getBKSZZFDSJYX() + "|" +
				getBKSZZFDESZESJ() + "|" + getBKSZZFDSSZSSJ() + "|" + getBKSZZFDSIZSIJ() + "|" + getBKSZZFDWSYS() + "|" +
				getYJSZZFDHJ() + "|" + getYJSZZFDSJYX() + "|" + getYJSZZFDESZESJ() + "|" + getYJSZZFDSSZSSJ() + "|" +
				getYJSZZFDSIZSIJ() + "|" + getYJSZZFDWSJYS()+ "|" + getId());
		return sb.toString();
	}
}
