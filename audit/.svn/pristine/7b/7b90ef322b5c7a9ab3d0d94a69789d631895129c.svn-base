package audit.service.impl.quality;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsZlJdrwkgzbMapper;
import audit.model.quality.AsZlJdrwkgzb;
import audit.model.quality.query.JdZbQuery;
import audit.model.quality.vo.AsZljdrwkgbzVo;
import audit.model.quality.vo.JdZbVo;
import audit.service.quality.AsZlJdrwkgzbServiceI;
@Service("asZlJdrwkgzbService")
public class AsZlJdrwkgzbServiceImpl implements AsZlJdrwkgzbServiceI{
	
	@Autowired
	private AsZlJdrwkgzbMapper asZlJdrwkgzbMapper;
	
	public int deleteByPrimaryKey(Integer id) {
		return asZlJdrwkgzbMapper.deleteByPrimaryKey(id);
	}

	public int insert(AsZlJdrwkgzb record) {
		return asZlJdrwkgzbMapper.insert(record);
	}

	public int insertSelective(AsZlJdrwkgzb record) {
		return asZlJdrwkgzbMapper.insertSelective(record);
	}

	public AsZlJdrwkgzb selectByPrimaryKey(Integer id) {
		return asZlJdrwkgzbMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(AsZlJdrwkgzb record) {
		return asZlJdrwkgzbMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(AsZlJdrwkgzb record) {
		return asZlJdrwkgzbMapper.updateByPrimaryKey(record);
	}

	public int selectCountByQuery(JdZbQuery query) {
		return asZlJdrwkgzbMapper.selectCountByQuery(query);
	}

	public List<JdZbVo> selectByQuery(JdZbQuery query, int startIndex,
			int endIndex) {
		return asZlJdrwkgzbMapper.selectByQuery(query, startIndex, endIndex);
	}

	public int deleteByJdRwId(Integer id) {
		return asZlJdrwkgzbMapper.deleteByJdRwId(id);
	}

	public List<JdZbVo> getAllZbByJdRwId(Integer id) {
		return asZlJdrwkgzbMapper.getAllZbByJdRwId(id);
	}

	public List<AsZljdrwkgbzVo> selectAllZbByJdRwJDRWID(int zlrwid) {
		return asZlJdrwkgzbMapper.selectAllZbByJdRwJDRWID(zlrwid);
	}

}
