package audit.model.assess;

import java.io.Serializable;

/**
 * 自评报告考核意见
 * @author L
 *
 */
public class AsAccessCheckReportInfo implements Serializable{
    /**
	 * 
	 */
	private static final long serialVersionUID = -2814676535158066959L;
	private Integer id;
    /**
     * 标题
     */
    private String title;
    /**
     * 评估意见
     */
    private String appraisalSuggest;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getAppraisalSuggest() {
        return appraisalSuggest;
    }

    public void setAppraisalSuggest(String appraisalSuggest) {
        this.appraisalSuggest = appraisalSuggest == null ? null : appraisalSuggest.trim();
    }
}