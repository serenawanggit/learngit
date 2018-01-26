package audit.dao;

import java.util.List;

import audit.model.AsECkeditorContent;

/**
 * 自我评估》自我报告 ckeditor保存内容接口
 * @author zenith
 *
 */
public interface AsECkeditorContentMapper {

	//查询所有记录
	List<AsECkeditorContent> selectAll();
	
	//查询当个方案下的记录
	AsECkeditorContent selectSingleById(int eid);
	
	//保存
	int save(AsECkeditorContent ascc);
	
	//更新
	int update(AsECkeditorContent ascc);
}
