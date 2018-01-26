package audit.model;

import java.util.ArrayList;
import java.util.List;

public class LigeruiPagingModel<T> {

	private List<T> Rows = new ArrayList<>();
	private long Total = 0;

	public LigeruiPagingModel(){
		
	}

	public LigeruiPagingModel(List<T> rows, int total) {
		super();
		Rows = rows;
		Total = total;
	}

	public List<T> getRows() {
		return Rows;
	}

	public void setRows(List<T> rows) {
		Rows = rows;
	}

	public long getTotal() {
		return Total;
	}

	public void setTotal(long total) {
		Total = total;
	}

}
