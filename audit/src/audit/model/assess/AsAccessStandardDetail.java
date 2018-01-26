package audit.model.assess;

import java.io.Serializable;

/**
 * 评估体系名称
 * @author L
 *
 */
public class AsAccessStandardDetail implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -2627126503073427868L;
	private Integer id;
    /**
     * 体系id
     */
    private Integer standardId;
    /**
     * 评估体系名称
     */
    private String name;
    /**
     * 评估体系分值
     */
    private Double score;
    /**
     * 所属评估体系id
     */
    private Integer parentId;
    /**
     * 明细描述
     */
    private String description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getStandardId() {
        return standardId;
    }

    public void setStandardId(Integer standardId) {
        this.standardId = standardId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description == null ? null : description.trim();
    }
}