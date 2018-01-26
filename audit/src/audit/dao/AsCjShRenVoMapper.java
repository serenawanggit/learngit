package audit.dao;

import java.util.List;

import audit.model.AsCjShRenVo;

public interface AsCjShRenVoMapper {
	/**
	 * 获取机构下的人员
	 * @return
	 */
	List<AsCjShRenVo> selectUsers(Integer organization);

}
