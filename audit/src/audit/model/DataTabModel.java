package audit.model;

import java.util.List;

/**
 * 数据报表模板实体类
 * @author 
 * @since 
 * 
 * */
public class DataTabModel {
	public String tmid;
	public String tabmodel_name;					/*报表模板名称*/
	public String dtcid;							/*报表类型ID*/
	public String type_name;						/*报表类型名称*/
	public String tabmodel_property;				/*报表属性  0:通用  1：个性*/
	public String tabmodel_cols;             		/*列维度:   0 时间维度   1:组织维度     2:指标 */
	public String tabmodel_rows;             		/*行维度 ：     0 时间维度   1:组织维度     2:指标   */
	public String tabmodel_filter;	                /*过滤条件： 0 时间维度   1:组织维度     2:指标   */
	public String ctime;           					/*生成时间*/
	public int totalnums;							//总记录数
	
	public List<String> lcos;						//列维度选项
	public List<String> lrows;						//行维度选项
	public List<String> lcons;						//筛选条件选项
	
	public DataTabModel(String tmid, String tabmodel_name, String dtcid,
			String type_name, String tabmodel_property, String tabmodel_cols,
			String tabmodel_rows, String tabmodel_filter, String ctime,
			int totalnums, List<String> lcos, List<String> lrows,
			List<String> lcons) {
		super();
		this.tmid = tmid;
		this.tabmodel_name = tabmodel_name;
		this.dtcid = dtcid;
		this.type_name = type_name;
		this.tabmodel_property = tabmodel_property;
		this.tabmodel_cols = tabmodel_cols;
		this.tabmodel_rows = tabmodel_rows;
		this.tabmodel_filter = tabmodel_filter;
		this.ctime = ctime;
		this.totalnums = totalnums;
		this.lcos = lcos;
		this.lrows = lrows;
		this.lcons = lcons;
	}
	
	public List<String> getLcos() {
		return lcos;
	}
	public void setLcos(List<String> lcos) {
		this.lcos = lcos;
	}
	public List<String> getLrows() {
		return lrows;
	}
	public void setLrows(List<String> lrows) {
		this.lrows = lrows;
	}
	public List<String> getLcons() {
		return lcons;
	}
	public void setLcons(List<String> lcons) {
		this.lcons = lcons;
	}
	public String getTmid() {
		return tmid;
	}
	public void setTmid(String tmid) {
		this.tmid = tmid;
	}
	public String getTabmodel_name() {
		return tabmodel_name;
	}
	public void setTabmodel_name(String tabmodel_name) {
		this.tabmodel_name = tabmodel_name;
	}
	public String getDtcid() {
		return dtcid;
	}
	public void setDtcid(String dtcid) {
		this.dtcid = dtcid;
	}
	public String getType_name() {
		return type_name;
	}
	public void setType_name(String type_name) {
		this.type_name = type_name;
	}
	public String getTabmodel_property() {
		return tabmodel_property;
	}
	public void setTabmodel_property(String tabmodel_property) {
		this.tabmodel_property = tabmodel_property;
	}
	public String getTabmodel_cols() {
		return tabmodel_cols;
	}
	public void setTabmodel_cols(String tabmodel_cols) {
		this.tabmodel_cols = tabmodel_cols;
	}
	public String getTabmodel_rows() {
		return tabmodel_rows;
	}
	public void setTabmodel_rows(String tabmodel_rows) {
		this.tabmodel_rows = tabmodel_rows;
	}
	public String getTabmodel_filter() {
		return tabmodel_filter;
	}
	public void setTabmodel_filter(String tabmodel_filter) {
		this.tabmodel_filter = tabmodel_filter;
	}
	public String getCtime() {
		return ctime;
	}
	public void setCtime(String ctime) {
		this.ctime = ctime;
	}
	public int getTotalnums() {
		return totalnums;
	}
	public void setTotalnums(int totalnums) {
		this.totalnums = totalnums;
	}
	public DataTabModel(String tmid, String tabmodel_name, String dtcid,
			String type_name, String tabmodel_property, String tabmodel_cols,
			String tabmodel_rows, String tabmodel_filter, String ctime,
			int totalnums) {
		super();
		this.tmid = tmid;
		this.tabmodel_name = tabmodel_name;
		this.dtcid = dtcid;
		this.type_name = type_name;
		this.tabmodel_property = tabmodel_property;
		this.tabmodel_cols = tabmodel_cols;
		this.tabmodel_rows = tabmodel_rows;
		this.tabmodel_filter = tabmodel_filter;
		this.ctime = ctime;
		this.totalnums = totalnums;
	}
	public DataTabModel() {
		super();
	}
	
	
}

