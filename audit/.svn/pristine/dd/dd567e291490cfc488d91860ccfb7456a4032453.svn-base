package audit.service.impl.quality;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsZlJdrwxxMapper;
import audit.model.quality.vo.Aszlrwxxkgb;
import audit.model.quality.vo.JdTaskVo;
import audit.service.quality.AsJDrwxxServiceI;
@Service("asJDrwxxService")
public class AsJDrwxxServiceImpl implements AsJDrwxxServiceI{
	@Autowired
	private AsZlJdrwxxMapper asZlJdrwxxMapper;
	
	public List<JdTaskVo> selectJDRW(int glJDRWID) {
		return asZlJdrwxxMapper.selectJDRW(glJDRWID);
	}

	public List<Aszlrwxxkgb> selectJDrwxxglb(int jdid) {
		return asZlJdrwxxMapper.selectJDrwxxglb(jdid);
	}
	

	public List<JdTaskVo> selectAllJDRW() {
		return asZlJdrwxxMapper.selectAllJDRW();
	}



}
