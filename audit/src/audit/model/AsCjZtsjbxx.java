package audit.model;

import java.util.Date;
import java.util.List;

public class AsCjZtsjbxx {

	/**
	 * 数据表代码
	 */
	private Integer id;
	/**
	 * 采集状态表id
	 */
	private Integer rwid;
	/**
	 * 数据表名称
	 */
	private String sjbmc;
	
	/**
	 * 数据表采集部门代码
	 */
	private Integer cjbmdm;
	
	/**
	 * 数据采集模板
	 */
	private Integer cjmbdm;
	
	/**
	 * 适用范围
	 */
	private Integer syfwdm;
	
	/**
	 * 创建时间
	 */
	private Date cjsj;
	
	/**
	 * 创建人
	 */
	private Integer userid;
	/**
	 * 
	 * 审核部门
	 */
	private Integer shbmdm;
	private Integer cjzt;
	private Integer shzt;
	private String bhly;
	
	//采集模版
	private List<DefineTemplate> zdymb;
	
	//数据分类
	private List<TemplateCategory> sjfl;
	
	//采集部门信息
	private List<AsCjBmxx> cjbm;
	
	//适用范围
	private List<AsCjSyfw> syfw;
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSjbmc() {
		return sjbmc;
	}

	public void setSjbmc(String sjbmc) {
		this.sjbmc = sjbmc;
	}

	public Integer getCjbmdm() {
		return cjbmdm;
	}

	public void setCjbmdm(Integer cjbmdm) {
		this.cjbmdm = cjbmdm;
	}

	public Integer getCjmbdm() {
		return cjmbdm;
	}

	public void setCjmbdm(Integer cjmbdm) {
		this.cjmbdm = cjmbdm;
	}

	public Integer getSyfwdm() {
		return syfwdm;
	}

	public void setSyfwdm(Integer syfwdm) {
		this.syfwdm = syfwdm;
	}

	public Date getCjsj() {
		return cjsj;
	}

	public void setCjsj(Date cjsj) {
		this.cjsj = cjsj;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public List<DefineTemplate> getZdymb() {
		return zdymb;
	}

	public void setZdymb(List<DefineTemplate> zdymb) {
		this.zdymb = zdymb;
	}

	public List<TemplateCategory> getSjfl() {
		return sjfl;
	}

	public void setSjfl(List<TemplateCategory> sjfl) {
		this.sjfl = sjfl;
	}

	public List<AsCjBmxx> getCjbm() {
		return cjbm;
	}

	public void setCjbm(List<AsCjBmxx> cjbm) {
		this.cjbm = cjbm;
	}

	public List<AsCjSyfw> getSyfw() {
		return syfw;
	}

	public void setSyfw(List<AsCjSyfw> syfw) {
		this.syfw = syfw;
	}

	public Integer getCjzt() {
		return cjzt;
	}

	public void setCjzt(Integer cjzt) {
		this.cjzt = cjzt;
	}

	public Integer getShzt() {
		return shzt;
	}

	public void setShzt(Integer shzt) {
		this.shzt = shzt;
	}

	public String getBhly() {
		return bhly;
	}

	public void setBhly(String bhly) {
		this.bhly = bhly;
	}

	public Integer getRwid() {
		return rwid;
	}

	public void setRwid(Integer rwid) {
		this.rwid = rwid;
	}

	public Integer getShbmdm() {
		return shbmdm;
	}

	public void setShbmdm(Integer shbmdm) {
		this.shbmdm = shbmdm;
	}
	
	
}
