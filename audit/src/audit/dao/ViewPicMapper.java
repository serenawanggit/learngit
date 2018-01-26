package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.ViewPic;

public interface ViewPicMapper {
	
	int save(ViewPic vp);

	List<ViewPic> select();
	
	int findCount(String measureName);
	
	List<ViewPic> findPageVp(@Param(value="parameter1")String measureName,@Param(value="pagestar")int pageStar);
	
	ViewPic findByVpid(int vpid);
}
