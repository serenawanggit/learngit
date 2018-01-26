package audit.model.quality.vo;

import audit.model.quality.AsZlJdrwkgzb;

/**
 * 阶段任务客观指标拓展类
 * @author yjq
 * 2015-5-4
 */
public class JdZbVo extends AsZlJdrwkgzb{

	/**
	 * 
	 * JdZbVo.java
	 */
	private static final long serialVersionUID = -1562033234245268489L;
	
	private Integer taskLevel;
	
	private Integer nowValue;
	
	private String zbName;

	public String getZbName() {
		return zbName;
	}

	public void setZbName(String zbName) {
		this.zbName = zbName;
	}

	public Integer getTaskLevel() {
		return taskLevel;
	}

	public void setTaskLevel(Integer taskLevel) {
		this.taskLevel = taskLevel;
	}

	public Integer getNowValue() {
		return nowValue;
	}

	public void setNowValue(Integer nowValue) {
		this.nowValue = nowValue;
	}
	
}
