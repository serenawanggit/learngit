package audit.model;

/**
 * 错误信息类
 * @author yuan
 *
 */
public class UpdateCheckModel {
	//临时表存入数据id
   private String id;
   //id对应的错误信息
   private String error_log;

   
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getError_log() {
	return error_log;
}
public void setError_log(String error_log) {
	this.error_log = error_log;
}
   
}
