package audit.model.report;

public class AssessSupport {
		private Integer id ;
		
		private String supportName;
		
		private String supportAddress;
		
		private Integer reportId;

		public Integer getId() {
			return id;
		}

		public void setId(Integer id) {
			this.id = id;
		}

		public String getSupportName() {
			return supportName;
		}

		public void setSupportName(String supportName) {
			this.supportName = supportName;
		}

		public String getSupportAddress() {
			return supportAddress;
		}

		public void setSupportAddress(String supportAddress) {
			this.supportAddress = supportAddress;
		}

		public Integer getReportId() {
			return reportId;
		}

		public void setReportId(Integer reportId) {
			this.reportId = reportId;
		}
		
		
}
