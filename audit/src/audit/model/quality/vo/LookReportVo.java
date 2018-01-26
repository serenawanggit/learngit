package audit.model.quality.vo;

public class LookReportVo {

	private int id;
	private String name;
	private String upload_time; 
	private String upload_address; 
	private String upload_files;
	private String blackcontent;
	
	
	public String getBlackcontent() {
		return blackcontent;
	}
	public void setBlackcontent(String blackcontent) {
		this.blackcontent = blackcontent;
	}
	public String getUpload_time() {
		return upload_time;
	}
	public void setUpload_time(String upload_time) {
		this.upload_time = upload_time;
	}
	public String getUpload_address() {
		return upload_address;
	}
	public void setUpload_address(String upload_address) {
		this.upload_address = upload_address;
	}
	public String getUpload_files() {
		return upload_files;
	}
	public void setUpload_files(String upload_files) {
		this.upload_files = upload_files;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
