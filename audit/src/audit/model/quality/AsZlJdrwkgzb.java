package audit.model.quality;

import java.io.Serializable;

/**
 * 阶段任务监测客观指标关联表
 * @author yjq
 *
 */
public class AsZlJdrwkgzb implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = 2180698212851664659L;

	private Integer id;

	/**
	 * 客观指标代码
	 */
    private String kgzbdm;

    /**
     * 指望值
     */
    private Double qwz;

    /**
     * 算法
     */
    private String sf;

    /**
     * 阶段任务id
     */
    private Integer jdrwid;
    
    public Double getQwz() {
		return qwz;
	}

	public void setQwz(Double qwz) {
		this.qwz = qwz;
	}

	public String getSf() {
		return sf;
	}

	public void setSf(String sf) {
		this.sf = sf;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getKgzbdm() {
        return kgzbdm;
    }

    public void setKgzbdm(String kgzbdm) {
        this.kgzbdm = kgzbdm;
    }

    public Integer getJdrwid() {
        return jdrwid;
    }

    public void setJdrwid(Integer jdrwid) {
        this.jdrwid = jdrwid;
    }
}