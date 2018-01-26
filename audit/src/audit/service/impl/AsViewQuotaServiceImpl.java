package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsIndexMapper;
import audit.dao.AsPViewQuotaMapper;
import audit.dao.AsRelevanceItemMapper;
import audit.model.AsPRelevanceItem;
import audit.model.AsPViewQuota;
import audit.model.ZbbEntity;
import audit.service.AsViewQuotaServiceI;
@Service("asViewQuotaService")
public class AsViewQuotaServiceImpl implements AsViewQuotaServiceI{
	
	private AsPViewQuotaMapper asViewQuotaMapper;
	@Autowired
	public void setAsViewQuotaMapper(AsPViewQuotaMapper asViewQuotaMapper){
		this.asViewQuotaMapper = asViewQuotaMapper;
	}
	
	private AsRelevanceItemMapper asRelevanceItemMapper;
	@Autowired
	public void setAsRelevanceItemMapper(AsRelevanceItemMapper asRelevanceItemMapper){
		this.asRelevanceItemMapper = asRelevanceItemMapper;
	}
	private AsIndexMapper asIndexMaper;
	@Autowired
	public void setAsIndexMaper(AsIndexMapper asIndexMaper){
		this.asIndexMaper = asIndexMaper;
	}
	
	public int insertViewQuota(AsPViewQuota viewQuota){
		return asViewQuotaMapper.insertViewQuota(viewQuota);
	}
	
	public List<AsPViewQuota> findViewQuotaByPid(int pid){
		return asViewQuotaMapper.findViewQuotaByPid(pid);
	}
	
	public int deleteByVid(int vid){
		return asViewQuotaMapper.deleteByVid(vid);
	}
	
	//分页查询
	public List<AsPViewQuota> findPageViewQuota(String qname,int pageStar){
		return asViewQuotaMapper.findPageViewQuota(qname, pageStar);
	}
	
	public List<AsPRelevanceItem> findRelevanceItemByPid(int pid){
		return asRelevanceItemMapper.findRelevanceItemByPid(pid);
	}
	
	public int findCount(String measureName){
		return asViewQuotaMapper.findCount(measureName);
	}
	
	//新增关联项目
	public int addRelevanceItem(AsPRelevanceItem relevanceItem){
		return asRelevanceItemMapper.addRelevanceItem(relevanceItem);
	}
	
	//删除关联项目
	public int delGlxms(List<String> ids){
		return asRelevanceItemMapper.delGlxms(ids);
	}
	
	public List<ZbbEntity> findQuotaValByQId(Map<String, Object> map){
		return asIndexMaper.findQuotaValByQId(map);
	}

	public ZbbEntity findQuotaVal(Map<String, Object> map) {
		return asIndexMaper.findQuotaVal(map);
	}
	
	
}
