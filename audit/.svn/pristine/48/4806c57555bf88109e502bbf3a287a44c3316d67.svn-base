package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.AsPViewQuota;


/**
 * 观测指标dao类
 * @author denglujun
 * 2014-10-31
 */
public interface AsPViewQuotaMapper {
	int insertViewQuota(AsPViewQuota viewQuota);
	List<AsPViewQuota> findViewQuotaByPid(int pid);
	int deleteByVid(int vid);
	List<AsPViewQuota> findPageViewQuota(@Param(value="parameter1")String qname,@Param(value="pagestar")int pageStar);
	int findCount(String measureName);
}
