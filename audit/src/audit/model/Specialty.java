package audit.model;

import java.io.Serializable;

/**
 * 专业
 * @author yjq
 * 2015-4-17
 */
public class Specialty implements Serializable{
    /**
	 * 
	 * Specialty.java
	 */
	private static final long serialVersionUID = 6336077962469386040L;

	private Integer id;
	
	/**
	 * 专业代码
	 */
    private String code;

    /**
	 * 专业名称
	 */
    private String name;

    /**
	 * 英文名称
	 */
    private String ename;

    /**
	 * 简称
	 */
    private String jc;

    /**
	 * 专业方向号
	 */
    private String zyfxh;
    
    /**
	 * 专业方向
	 */
    private String zyfx;

    /**
	 * 学科门类代码
	 */
    private String xkmldm;

    /**
	 * 学科门类
	 */
    private String xuekname;

    /**
	 * 所属学科代码
	 */
    private String xkdm;

    /**
	 * 所属学科名称
	 */
    private String xkmc;

    /**
	 * 机构代码
	 */
    private String jgdm;

    /**
	 * 机构名
	 */
    private String organame;

    /**
	 * 授予学位
	 */
    private String degrees;

    /**
	 * 学制
	 */
    private String xuezhi;

    /**
	 * 专业级别
	 */
    private String level;

    /**
	 * 专业类型
	 */
    private String type;

    /**
	 * 招生状态
	 */
    private String zszt;

    /**
	 * 停招时间
	 */
    private String stoptime;

    /**
	 * 设置时间
	 */
    private String settime;

    /**
	 * 是否新专业
	 */
    private String isnew;

    /**
	 * 国标代码
	 */
    private String intercode;

    /**
	 * 国标名称
	 */
    private String intername;

    /**
	 * 国标代码版本
	 */
    private String gbdmbb;

    /**
	 * 负责人工号
	 */
    private String managercode;

    /**
	 * 负责人姓名
	 */
    private String managername;

    /**
	 * 专业培养目标
	 */
    private String zypymb;

    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code == null ? null : code.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getEname() {
        return ename;
    }

    public void setEname(String ename) {
        this.ename = ename == null ? null : ename.trim();
    }

    public String getJc() {
        return jc;
    }

    public void setJc(String jc) {
        this.jc = jc == null ? null : jc.trim();
    }

    public String getZyfxh() {
        return zyfxh;
    }

    public void setZyfxh(String zyfxh) {
        this.zyfxh = zyfxh == null ? null : zyfxh.trim();
    }

    public String getZyfx() {
        return zyfx;
    }

    public void setZyfx(String zyfx) {
        this.zyfx = zyfx == null ? null : zyfx.trim();
    }

    public String getXkmldm() {
        return xkmldm;
    }

    public void setXkmldm(String xkmldm) {
        this.xkmldm = xkmldm == null ? null : xkmldm.trim();
    }

    public String getXuekname() {
        return xuekname;
    }

    public void setXuekname(String xuekname) {
        this.xuekname = xuekname == null ? null : xuekname.trim();
    }

    public String getXkdm() {
        return xkdm;
    }

    public void setXkdm(String xkdm) {
        this.xkdm = xkdm == null ? null : xkdm.trim();
    }

    public String getXkmc() {
        return xkmc;
    }

    public void setXkmc(String xkmc) {
        this.xkmc = xkmc == null ? null : xkmc.trim();
    }

    public String getJgdm() {
        return jgdm;
    }

    public void setJgdm(String jgdm) {
        this.jgdm = jgdm == null ? null : jgdm.trim();
    }

    public String getOrganame() {
        return organame;
    }

    public void setOrganame(String organame) {
        this.organame = organame == null ? null : organame.trim();
    }

    public String getDegrees() {
        return degrees;
    }

    public void setDegrees(String degrees) {
        this.degrees = degrees == null ? null : degrees.trim();
    }

    public String getXuezhi() {
        return xuezhi;
    }

    public void setXuezhi(String xuezhi) {
        this.xuezhi = xuezhi == null ? null : xuezhi.trim();
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level == null ? null : level.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getZszt() {
        return zszt;
    }

    public void setZszt(String zszt) {
        this.zszt = zszt == null ? null : zszt.trim();
    }

    public String getStoptime() {
        return stoptime;
    }

    public void setStoptime(String stoptime) {
        this.stoptime = stoptime == null ? null : stoptime.trim();
    }

    public String getSettime() {
        return settime;
    }

    public void setSettime(String settime) {
        this.settime = settime == null ? null : settime.trim();
    }

    public String getIsnew() {
        return isnew;
    }

    public void setIsnew(String isnew) {
        this.isnew = isnew == null ? null : isnew.trim();
    }

    public String getIntercode() {
        return intercode;
    }

    public void setIntercode(String intercode) {
        this.intercode = intercode == null ? null : intercode.trim();
    }

    public String getIntername() {
        return intername;
    }

    public void setIntername(String intername) {
        this.intername = intername == null ? null : intername.trim();
    }

    public String getGbdmbb() {
        return gbdmbb;
    }

    public void setGbdmbb(String gbdmbb) {
        this.gbdmbb = gbdmbb == null ? null : gbdmbb.trim();
    }

    public String getManagercode() {
        return managercode;
    }

    public void setManagercode(String managercode) {
        this.managercode = managercode == null ? null : managercode.trim();
    }

    public String getManagername() {
        return managername;
    }

    public void setManagername(String managername) {
        this.managername = managername == null ? null : managername.trim();
    }

    public String getZypymb() {
        return zypymb;
    }

    public void setZypymb(String zypymb) {
        this.zypymb = zypymb == null ? null : zypymb.trim();
    }
}