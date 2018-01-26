package audit.model.gj;

import audit.annotation.ExcelAnnotation;

public class AS_GJ_XXJQK {

	private Integer id;
	@ExcelAnnotation(exportname = "内容")
	private String LR;
	@ExcelAnnotation(exportname = "单位")
	private String DW;
	@ExcelAnnotation(exportname = "备注")
	private String BZ;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLR() {
		return LR;
	}

	public void setLR(String lR) {
		LR = lR;
	}

	public String getDW() {
		return DW;
	}

	public void setDW(String dW) {
		DW = dW;
	}

	public String getBZ() {
		return BZ;
	}

	public void setBZ(String bZ) {
		BZ = bZ;
	}
	
	public String toString(){
		StringBuffer sb = new StringBuffer();
		sb.append(getLR() + "|" + getDW() 
				 + "|" + getBZ()+ "|" + getId());
		return sb.toString();
	}
}
