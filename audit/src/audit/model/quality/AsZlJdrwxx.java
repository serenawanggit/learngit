package audit.model.quality;

import java.io.Serializable;
import java.util.Date;

/**
 * 阶段任务
 * @author yjq
 * 2015-4-17
 */
public class AsZlJdrwxx implements Serializable{
    /**
	 * 
	 * AsZlJdrwxx.java
	 */
	private static final long serialVersionUID = 601306616572157103L;

	private Integer id;

	/**
	 * 阶段任务名
	 */
    private String jdrwmc;
    
    /**
     * 任务发布时间
     */
    private Date fbsj;
    
    /**
     * 任务截止时间
     */
    private Date jzsj;
    
    /**
     * 任务范围（1,学院或部门;2,院系;3,专业;）
     */
    private Integer rwfw;

    /**
     * 质量任务id
     */
    private Integer zlrwid;
    
    /**
     * 是否连贯任务1:连贯
     */
    private Integer sflgrw;
    
    /**
     * 任务序号
     */
    private Integer rwxh;
    
    /**
     * 任务状态1:创建；4：已删除
     */
    private Integer rwzt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getJdrwmc() {
        return jdrwmc;
    }

    public void setJdrwmc(String jdrwmc) {
        this.jdrwmc = jdrwmc == null ? null : jdrwmc.trim();
    }

    public Date getFbsj() {
        return fbsj;
    }

    public void setFbsj(Date fbsj) {
        this.fbsj = fbsj;
    }

    public Date getJzsj() {
        return jzsj;
    }

    public void setJzsj(Date jzsj) {
        this.jzsj = jzsj;
    }

    public Integer getRwfw() {
        return rwfw;
    }

    public void setRwfw(Integer rwfw) {
        this.rwfw = rwfw;
    }

    public Integer getZlrwid() {
        return zlrwid;
    }

    public void setZlrwid(Integer zlrwid) {
        this.zlrwid = zlrwid;
    }

    public Integer getSflgrw() {
        return sflgrw;
    }

    public void setSflgrw(Integer sflgrw) {
        this.sflgrw = sflgrw;
    }

    public Integer getRwxh() {
        return rwxh;
    }

    public void setRwxh(Integer rwxh) {
        this.rwxh = rwxh;
    }

    public Integer getRwzt() {
        return rwzt;
    }

    public void setRwzt(Integer rwzt) {
        this.rwzt = rwzt;
    }
}