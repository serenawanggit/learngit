package audit.model;

import java.io.Serializable;
import java.util.List;

/**
 * 机构
 * @author yjq
 * 2015-4-17
 */
public class Organization implements Serializable{
    /**
	 * 
	 * Organization.java
	 */
	private static final long serialVersionUID = 3896421588234887939L;

	private Integer id;
	
	/**
	 * 机构名称
	 */
    private String name;

    /**
	 * 级别
	 */
    private Integer level;

    /**
	 * 父节点
	 */
    private Integer parent;

    /**
	 * 机构描述
	 */
    private String description;

    /**
	 * 机构代码
	 */
    private String code;

    /**
	 * 英文名称
	 */
    private String oename;
    /**
	 * 每个机构底下的用户
	 */
    private List<Userinfo> userList;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getParent() {
        return parent;
    }

    public void setParent(Integer parent) {
        this.parent = parent;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code == null ? null : code.trim();
    }

    public String getOename() {
        return oename;
    }

    public void setOename(String oename) {
        this.oename = oename == null ? null : oename.trim();
    }

	public List<Userinfo> getUserList() {
		return userList;
	}

	public void setUserList(List<Userinfo> userList) {
		this.userList = userList;
	}

}