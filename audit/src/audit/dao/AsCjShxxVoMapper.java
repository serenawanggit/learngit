package audit.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import audit.model.AsCjShxx;

public interface AsCjShxxVoMapper {
	
	List<AsCjShxx> selectByuserId(@Param("cjbm")String cjbm,@Param("pageNo")Integer pageNo,@Param("pageEnd")Integer pageEnd);
   
    List<AsCjShxx>	findByuserId(@Param("cjbm")String cjbm);
}
