package audit.model;

public class AS_ASSESS_INDEX_FORMULA {
    private  Integer id;
    private String variables;
    private String formula;
    private String num;
    private String syear;
    private Integer sysId;
    private String total;
    private Integer filedsum;
    public Integer getId() {
    	return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getVariables() {
		return variables;
	}
	public void setVariables(String variables) {
		this.variables = variables;
	}
	
	public String getFormula() {
		return formula;
	}
	public void setFormula(String formula) {
		this.formula = formula;
	}
	public String getNum() {
		return num;
	}
	public void setNum(String num) {
		this.num = num;
	}
	public String getSyear() {
		return syear;
	}
	public void setSyear(String syear) {
		this.syear = syear;
	}
	public Integer getSysId() {
		return sysId;
	}
	public void setSysId(Integer sysId) {
		this.sysId = sysId;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public Integer getFiledsum() {
		return filedsum;
	}
	public void setFiledsum(Integer filedsum) {
		this.filedsum = filedsum;
	}
}
