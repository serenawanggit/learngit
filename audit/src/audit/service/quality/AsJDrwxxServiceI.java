package audit.service.quality;

import java.util.List;

import audit.model.quality.vo.Aszlrwxxkgb;
import audit.model.quality.vo.JdTaskVo;

public interface AsJDrwxxServiceI {
	/**
	 * 查阶段任务
	 * @param glJDRWID
	 * @return
	 */
	List<JdTaskVo> selectJDRW(int glJDRWID);
	
	/**
	 * 查询所有阶段任务
	 * @return
	 */
	List<JdTaskVo> selectAllJDRW();
	/**
	 * 通过拿到jdrwid 循环比对客观表 jdid得到指标id 在指标表得到值
	 * @param jdid
	 * @return
	 */
	List<Aszlrwxxkgb> selectJDrwxxglb(int jdid);
}
