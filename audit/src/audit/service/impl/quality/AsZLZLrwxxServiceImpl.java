package audit.service.impl.quality;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsZlZlrwxxMapper;
import audit.model.quality.AsZlZlrwxx;
import audit.service.quality.AsZLZLrwxxServiceI;
@Service("asZLZLrwxxService")
public class AsZLZLrwxxServiceImpl implements AsZLZLrwxxServiceI{
	
	@Autowired
	private AsZlZlrwxxMapper asZlZlrwxxMapper;

	public List<AsZlZlrwxx> selectAllASZLZLRWXX() {
		return asZlZlrwxxMapper.selectAllASZLZLRWXX();
	}


}
