package audit.dao;

import java.util.List;

import audit.model.AsPRelevanceItem;


/**
 * 方案dao类
 * @author denglujun
 * 2014-11-5
 */
public interface AsRelevanceItemMapper {
	List<AsPRelevanceItem> findRelevanceItemByPid(int pid);
	int addRelevanceItem(AsPRelevanceItem relevanceItem);
	
	int delGlxms(List<String> ids);
}
