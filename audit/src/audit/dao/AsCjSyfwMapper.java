package audit.dao;
import java.util.*;
import audit.model.AsCjSyfw;
public interface AsCjSyfwMapper {

	List<AsCjSyfw> selectAll_data();
	
	AsCjSyfw selectByPrimaryKey(int id);
}
