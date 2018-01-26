package audit.service;

import java.util.List;

import audit.model.Diemn;

public interface DiemnI {

	List<Diemn> select(int tmid);
	/**
	 * 根据tmid数组得到diemn集合
	 * @param tmid
	 * @return
	 */
    List<Diemn>	selectByTmid(int[] tmid);
	
}
