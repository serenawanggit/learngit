package audit.model.quality;

import java.io.Serializable;

/**
 * 质量任务部门与部门人员
 * @author yjq
 * 2015-4-17
 */
public class AsZlZlrwbmry implements Serializable{
    /**
	 * 
	 * AsZlZlrwbmry.java
	 */
	private static final long serialVersionUID = 3921132853810566939L;

	private Integer id;
	
	/**
	 * 质量任务部门编号
	 */
    private Integer cjbmdm;
    
    /**
     * 质量任务部门等级
     */
    private Integer level;
    
    /**
     * 用户id
     */
    private Integer userid;

    /**
     * 专业所属学院
     */
    private Integer zyssxyid;
    
    public Integer getZyssxyid() {
		return zyssxyid;
	}

	public void setZyssxyid(Integer zyssxyid) {
		this.zyssxyid = zyssxyid;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCjbmdm() {
        return cjbmdm;
    }

    public void setCjbmdm(Integer cjbmdm) {
        this.cjbmdm = cjbmdm;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }
}