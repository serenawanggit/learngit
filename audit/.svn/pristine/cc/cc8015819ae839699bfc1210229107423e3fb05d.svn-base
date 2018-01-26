package audit.common;


import java.io.Serializable;


/**
 * ajax json 返回值包装对象
 * @author yjq
 */
public class JsonResult implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 2955969952867505921L;
	/**
	 * 操作结果（成功或失败）
	 */
	boolean isOk = true;
	/**
	 * 操作提示信息
	 */
	String message;
	/**
	 * 备注
	 */
	String comment;
	/**
	 * 数据
	 */
	Object data;

	public boolean isOk() {
		return isOk;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public void setOk(boolean isOk) {
		this.isOk = isOk;
	}
	
}
