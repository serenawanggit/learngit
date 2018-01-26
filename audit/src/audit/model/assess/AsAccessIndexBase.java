package audit.model.assess;

/**
 * AsAccessIndexBase entity. @author MyEclipse Persistence Tools
 */

public class AsAccessIndexBase implements java.io.Serializable {

	// Fields

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String measureId;
	private String measureName;
	private Integer categoryId;
	private String classify;
	private String level;
	private String isSchool;
	private String isDepartment;
	private String isProfession;
	private String isAssess;
	private String notice;
	private String equation;
	private Integer states;
	private Integer isQuery;
	private Integer indexClassificationId;

	// Constructors

	/** default constructor */
	public AsAccessIndexBase() {
	}

	/** full constructor */
	public AsAccessIndexBase(String measureName, Integer categoryId, String classify,
			String level, String isSchool, String isDepartment,
			String isProfession, String isAssess, String notice,
			String equation, Integer states, Integer isQuery,
			Integer indexClassificationId) {
		this.measureName = measureName;
		this.categoryId = categoryId;
		this.classify = classify;
		this.level = level;
		this.isSchool = isSchool;
		this.isDepartment = isDepartment;
		this.isProfession = isProfession;
		this.isAssess = isAssess;
		this.notice = notice;
		this.equation = equation;
		this.states = states;
		this.isQuery = isQuery;
		this.indexClassificationId = indexClassificationId;
	}

	// Property accessors

	public String getMeasureId() {
		return this.measureId;
	}

	public void setMeasureId(String measureId) {
		this.measureId = measureId;
	}

	public String getMeasureName() {
		return this.measureName;
	}

	public void setMeasureName(String measureName) {
		this.measureName = measureName;
	}

	public Integer getCategoryId() {
		return this.categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}

	public String getClassify() {
		return this.classify;
	}

	public void setClassify(String classify) {
		this.classify = classify;
	}

	public String getLevel() {
		return this.level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getIsSchool() {
		return this.isSchool;
	}

	public void setIsSchool(String isSchool) {
		this.isSchool = isSchool;
	}

	public String getIsDepartment() {
		return this.isDepartment;
	}

	public void setIsDepartment(String isDepartment) {
		this.isDepartment = isDepartment;
	}

	public String getIsProfession() {
		return this.isProfession;
	}

	public void setIsProfession(String isProfession) {
		this.isProfession = isProfession;
	}

	public String getIsAssess() {
		return this.isAssess;
	}

	public void setIsAssess(String isAssess) {
		this.isAssess = isAssess;
	}

	public String getNotice() {
		return this.notice;
	}

	public void setNotice(String notice) {
		this.notice = notice;
	}

	public String getEquation() {
		return this.equation;
	}

	public void setEquation(String equation) {
		this.equation = equation;
	}

	public Integer getStates() {
		return this.states;
	}

	public void setStates(Integer states) {
		this.states = states;
	}

	public Integer getIsQuery() {
		return this.isQuery;
	}

	public void setIsQuery(Integer isQuery) {
		this.isQuery = isQuery;
	}

	public Integer getIndexClassificationId() {
		return this.indexClassificationId;
	}

	public void setIndexClassificationId(Integer indexClassificationId) {
		this.indexClassificationId = indexClassificationId;
	}

}