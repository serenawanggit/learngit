package audit.service.quality;

import java.util.List;

import audit.model.Sbprofession;
import audit.model.Specialty;
/**
 * 专业
 * @author LLP
 *
 */
public interface SpecialtyServiceI {
	 	int deleteByPrimaryKey(Integer id);

	    int insert(Specialty record);

	    int insertSelective(Specialty record);

	    Specialty selectByPrimaryKey(Integer id);

	    int updateByPrimaryKeySelective(Specialty record);

	    int updateByPrimaryKey(Specialty record);
	    
	    /**
	     * 根据学院的code查询专业
	     * @param string
	     * @return
	     */
	    List<Specialty> selectByCode(String string);
	    
	    /**
	     * 查询全部的专业
	     * @return
	     */
	    List<Sbprofession> findAllSpecialty();
	    
}
