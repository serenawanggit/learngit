package audit.service.access;

import audit.model.assess.AsAccessSpecialty;

public interface AsAccessSpecialtyServiceI {
    /**
     * 根据专业id查询评估专业自评id
     * @param sid
     * @return
     */
	AsAccessSpecialty findAsAccessApecialtyBySidAndType(Integer sid,Integer syear);
}
