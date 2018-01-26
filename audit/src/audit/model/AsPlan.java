package audit.model;

import java.util.List;

public class AsPlan {

	//方案标识
	private int id;
	
	//方案所属菜单
	private int mid;
	
	//方案名称
	private String name;
	
	//方案编号
	private String no;
	
	//方案内容
	private String content;
	
	//方案要素解释
	private String description;
	
	//方案是否有观测项
	private int isrelate;
	
	//支撑材料
	private List<Support_File> supportfiles;
	
	//考察重点
	private List<AsPinspectpoint> inspectpoints;
	//关联项目
	private List<AsPRelevanceItem> relevanceItem;
	//观测指标
	private List<AsPViewQuota> viewQuota;
	//学校id
	private int scid;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getNo() {
		return no;
	}

	public void setNo(String no) {
		this.no = no;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getIsrelate() {
		return isrelate;
	}

	public void setIsrelate(int isrelate) {
		this.isrelate = isrelate;
	}

	public List<Support_File> getSupportfiles() {
		return supportfiles;
	}

	public void setSupportfiles(List<Support_File> supportfiles) {
		this.supportfiles = supportfiles;
	}

	public List<AsPinspectpoint> getInspectpoints() {
		return inspectpoints;
	}

	public void setInspectpoints(List<AsPinspectpoint> inspectpoints) {
		this.inspectpoints = inspectpoints;
	}

	public int getScid() {
		return scid;
	}

	public void setScid(int scid) {
		this.scid = scid;
	}

	public List<AsPRelevanceItem> getRelevanceItem() {
		return relevanceItem;
	}

	public void setRelevanceItem(List<AsPRelevanceItem> relevanceItem) {
		this.relevanceItem = relevanceItem;
	}

	public List<AsPViewQuota> getViewQuota() {
		return viewQuota;
	}

	public void setViewQuota(List<AsPViewQuota> viewQuota) {
		this.viewQuota = viewQuota;
	}
	
	
	
}
