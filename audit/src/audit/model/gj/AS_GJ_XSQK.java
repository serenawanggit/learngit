package audit.model.gj;

import audit.annotation.ExcelAnnotation;

public class AS_GJ_XSQK {

	private Integer id;
	@ExcelAnnotation(exportname = "学校产权校舍建筑面积合计")
	private String XSJZMJHJ;
	@ExcelAnnotation(exportname = "学校产权校舍建筑面积中：危房")
	private String XSJZWFHJ;
	@ExcelAnnotation(exportname = "学校产权校舍建筑面积中：当年新增校舍")
	private String XSJZXZHJ;
	@ExcelAnnotation(exportname = "学校产权校舍建筑面积中：被外单位借用	")
	private String XSJZWJHJ;
	@ExcelAnnotation(exportname = "正在施工校舍建筑面积")
	private String XSJZZSGHJ;
	@ExcelAnnotation(exportname = "非学校产权校舍建筑面积合计")
	private String FXSJZHJ;
	@ExcelAnnotation(exportname = "非学校产权校舍建筑面积中：独立使用")
	private String FXSJZDS;
	@ExcelAnnotation(exportname = "非学校产权校舍建筑面积中：共同使用")
	private String FXSJZGS;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getXSJZMJHJ() {
		return XSJZMJHJ;
	}

	public void setXSJZMJHJ(String xSJZMJHJ) {
		XSJZMJHJ = xSJZMJHJ;
	}

	public String getXSJZWFHJ() {
		return XSJZWFHJ;
	}

	public void setXSJZWFHJ(String xSJZWFHJ) {
		XSJZWFHJ = xSJZWFHJ;
	}

	public String getXSJZXZHJ() {
		return XSJZXZHJ;
	}

	public void setXSJZXZHJ(String xSJZXZHJ) {
		XSJZXZHJ = xSJZXZHJ;
	}

	public String getXSJZWJHJ() {
		return XSJZWJHJ;
	}

	public void setXSJZWJHJ(String xSJZWJHJ) {
		XSJZWJHJ = xSJZWJHJ;
	}

	public String getXSJZZSGHJ() {
		return XSJZZSGHJ;
	}

	public void setXSJZZSGHJ(String xSJZZSGHJ) {
		XSJZZSGHJ = xSJZZSGHJ;
	}

	public String getFXSJZHJ() {
		return FXSJZHJ;
	}

	public void setFXSJZHJ(String fXSJZHJ) {
		FXSJZHJ = fXSJZHJ;
	}

	public String getFXSJZDS() {
		return FXSJZDS;
	}

	public void setFXSJZDS(String fXSJZDS) {
		FXSJZDS = fXSJZDS;
	}

	public String getFXSJZGS() {
		return FXSJZGS;
	}

	public void setFXSJZGS(String fXSJZGS) {
		FXSJZGS = fXSJZGS;
	}
	
	
	public String toString(){
		StringBuffer sb = new StringBuffer();
		sb.append(getXSJZMJHJ() + "|" + getXSJZWFHJ() + "|" + getXSJZXZHJ() + "|"
				 + getXSJZWJHJ()	 + "|" + getXSJZZSGHJ() + "|" + getFXSJZHJ()	 + "|" 
				 + getFXSJZDS() + "|" + getFXSJZGS()+ "|" + getId());
		return sb.toString();
	}
}
