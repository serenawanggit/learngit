package audit.service.impl;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.ViewPicMapper;
import audit.model.AsMManage;
import audit.model.ViewPic;
import audit.service.ViewPicI;

@Service("viewPicService")
public class ViewPicServiceImpl implements ViewPicI{

	private ViewPicMapper viewPicMapper;
	@Autowired
	public void setViewPicMapper(ViewPicMapper viewPicMapper){
		this.viewPicMapper = viewPicMapper;
	}
	
	public List<ViewPic> viewPics() {
		return viewPicMapper.select();
	}

	public int save(ViewPic vp) {
		return viewPicMapper.save(vp);
	}
	

	public int findCount(String measureName){
		return viewPicMapper.findCount(measureName);
	}
	
	public List<ViewPic> findPageVp(@Param(value="parameter1")String measureName,@Param(value="pagestar")int pageStar){
		return viewPicMapper.findPageVp(measureName, pageStar);
	}
	
	public ViewPic findByVpid(int vpid) {
		return viewPicMapper.findByVpid(vpid);
	}
}
