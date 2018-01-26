package audit.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.Page;
import audit.common.ServiceResult;
import audit.dao.AsIndexMapper;
import audit.dao.AsMCategoryMapper;
import audit.dao.AsMManageMapper;
import audit.model.AsIIndexClassification;
import audit.model.AsMCategory;
import audit.model.AsMManage;
import audit.model.quality.query.IndicatorQuery;
import audit.service.AsManageServiceI;
@Service("asManageService")
public class AsManageServiceImpl implements AsManageServiceI{
	private AsMManageMapper asMManageMapper;
	
	@Resource
	private AsMCategoryMapper asMCategoryMapper;
	@Autowired
	public void setAsManageMapper(AsMManageMapper asManageMapper){
		this.asMManageMapper = asManageMapper;
	}
	
	private AsIndexMapper asIndexMapper;
	@Autowired
	public void setAsIndexMapper(AsIndexMapper asIndexMapper){
		this.asIndexMapper = asIndexMapper;
	}
	
	public List<AsMManage> selectAllManage(){
		return asMManageMapper.selectAllManage();
	}
	
	//查询全部指标所属分类
	public List<AsIIndexClassification> selectAllIndex(){
		return asIndexMapper.selectAllIndex();
	}
	
	public List<AsMManage> findQuotaByIDs(List<String> ids){
		return asMManageMapper.findQuotaByIDs(ids);
	}
	
	public int findCount(String measureName){
		return asMManageMapper.findCount(measureName);
	}
	
	public List<AsMManage> findPageQuota(String measureName,int pageStar){
		return asMManageMapper.findPageQuota(measureName,pageStar);
	}

	public AsMManage findAsMManageByName(String name) {
		return asMManageMapper.selectByName(name);
	}

	public ServiceResult<Page<AsMManage>> getIndicatorsByQuery(
			IndicatorQuery query) {
		ServiceResult<Page<AsMManage>> serviceResult = new ServiceResult<Page<AsMManage>>();
		int countRecord = asMManageMapper.selectCountByQuery(query);
		Page<AsMManage> page = new Page<AsMManage>(query.getCurrentPage(), countRecord, query.getOnePageCount());
		List<AsMManage> list = asMManageMapper.getListByQuery(query, page.getStartIndex(), page.getEndIndex());
		if(list.isEmpty()){
			serviceResult.setComment("没有符合条件的指标项");
			serviceResult.setData(page);
			return serviceResult;
		}
		page.setList(list);
		serviceResult.setData(page);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<List<AsMCategory>> getIndicatorsCategory() {
		ServiceResult<List<AsMCategory>> serviceResult = new ServiceResult<List<AsMCategory>>();
		List<AsMCategory> list = asMCategoryMapper.getAllCategory();
		serviceResult.setData(list);
		if(list.isEmpty()){
			serviceResult.setComment("指标项分类为空");
			return serviceResult;
		}
		serviceResult.setOk(true);
		return serviceResult;
	}
}
