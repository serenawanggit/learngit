package audit.service.impl.quality;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import audit.dao.AsZlZlrwbmryMapper;
import audit.model.quality.AsZJSJ;
import audit.model.quality.AsZlZlrwbmry;
import audit.service.quality.AsZlZlrwbmryServiceI;


@Service("asZlZlrwbmryService")
public class AsZlZlrwbmryServiceImpl implements AsZlZlrwbmryServiceI{
	
	@Autowired
	private AsZlZlrwbmryMapper asZlZlrwbmryMapper;
	
	public int deleteByPrimaryKey(Integer id) {
		return asZlZlrwbmryMapper.deleteByPrimaryKey(id);
	}

	public int insert(AsZlZlrwbmry record) {
		return asZlZlrwbmryMapper.insert(record);
	}

	public int insertSelective(AsZlZlrwbmry record) {
		return asZlZlrwbmryMapper.insertSelective(record);
	}

	public AsZlZlrwbmry selectByPrimaryKey(Integer id) {
		return asZlZlrwbmryMapper.selectByPrimaryKey(id);
	}

	public int updateByPrimaryKeySelective(AsZlZlrwbmry record) {
		return asZlZlrwbmryMapper.updateByPrimaryKeySelective(record);
	}

	public int updateByPrimaryKey(AsZlZlrwbmry record) {
		return asZlZlrwbmryMapper.updateByPrimaryKey(record);
	}

	public List<AsZJSJ> selectCJBMD(int cjbmdm) {
		return asZlZlrwbmryMapper.selectCJBMD(cjbmdm);
	}

	public List<AsZJSJ> selectGourpBM() {
		return asZlZlrwbmryMapper.selectGourpBM();
	}

	public List<AsZJSJ> AS_ZL_ZLRWBMRYForPage(String endRow, String start) {
		return asZlZlrwbmryMapper.AS_ZL_ZLRWBMRYForPage(endRow, start);
	}

	public int AS_ZL_ZLRWBMRYCount() {
		return asZlZlrwbmryMapper.AS_ZL_ZLRWBMRYCount();
	}

	public List<AsZlZlrwbmry> selectAllRWBMRY() {
		return asZlZlrwbmryMapper.selectAllRWBMRY();
	}

	public List<AsZJSJ> selectSpecialtyName(String endRow, String start) {
		return asZlZlrwbmryMapper.selectSpecialtyName(endRow,start);
	}

	public List<AsZJSJ> selectPage() {
		return asZlZlrwbmryMapper.selectPage();
	}

	public int updateByCJBMDM(AsZlZlrwbmry record, int viewCJBMDM) {
		return asZlZlrwbmryMapper.updateByCJBMDM(record, viewCJBMDM);
	}

	public int deleteByPrimaryCjbmdm(int cjbmdm) {
		return asZlZlrwbmryMapper.deleteByPrimaryCjbmdm(cjbmdm);
	}

	public List<AsZJSJ> selectLikeName(String zlname) {
		return asZlZlrwbmryMapper.selectLikeName(zlname);
	}

	public int selectRWBMRYbycjbmdmAndUserid(int zlCjbmdm, List<Integer> zlUserId) {
		return asZlZlrwbmryMapper.selectRWBMRYbycjbmdmAndUserid(zlCjbmdm, zlUserId);
	}
}
