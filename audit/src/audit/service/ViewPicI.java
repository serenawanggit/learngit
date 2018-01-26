package audit.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.AsMManage;
import audit.model.ViewPic;

public interface ViewPicI {

	int save(ViewPic vp);
	
	List<ViewPic> viewPics();
	
	int findCount(String measureName);
	
	List<ViewPic> findPageVp(@Param(value="parameter1")String measureName,@Param(value="pagestar")int pageStar);

	ViewPic findByVpid(int vpid);
}
