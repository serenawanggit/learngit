package audit.model;


	/**
	 * 状态数据表定义
	 * @author yuan
	 *
	 */
public class AsZtsjbdyVo {
   /**
    * id
    * 
    */
	public Integer id;
	
	/**
	 * 数据分类
	 */
	public String categoryName;
	
	/**
	 * 数据表名
	 */
	
	public String sjbmc;
	/**
	 * 数据采集单位
	 */
	public String cjBmName;
	/**
	 * 数据审核单位
	 */
	public String shbmdm;
	/**
	 * 数据采集模版
	 */
	public String ctemplateName;
	/**
	 * 适用范围
	 */
	public String syfwmc;
	/**
	 * 时间类型
	 */
	public String timeType;
	
	/**
	 * 采集单位id
	 */
	public Integer jgid;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getSjbmc() {
		return sjbmc;
	}

	public void setSjbmc(String sjbmc) {
		this.sjbmc = sjbmc;
	}

	public String getCjBmName() {
		return cjBmName;
	}

	public void setCjBmName(String cjBmName) {
		this.cjBmName = cjBmName;
	}

	public String getCtemplateName() {
		return ctemplateName;
	}

	public void setCtemplateName(String ctemplateName) {
		this.ctemplateName = ctemplateName;
	}

	public String getSyfwmc() {
		return syfwmc;
	}

	public void setSyfwmc(String syfwmc) {
		this.syfwmc = syfwmc;
	}

	public String getTimeType() {
		return timeType;
	}

	public void setTimeType(String timeType) {
		this.timeType = timeType;
	}

	public Integer getJgid() {
		return jgid;
	}

	public void setJgid(Integer jgid) {
		this.jgid = jgid;
	}

	public String getShbmdm() {
		return shbmdm;
	}

	public void setShbmdm(String shbmdm) {
		this.shbmdm = shbmdm;
	}
	
	
	
}
