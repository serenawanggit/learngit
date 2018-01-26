package audit.service.impl.access;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAccessDataRoomMapper;
import audit.model.assess.AsAccessDataRoom;
import audit.service.access.AsAccessDataRoomServiceI;

@Service("asAccessDataRoomService")
public class AsAccessDataRoomServiceImpl implements AsAccessDataRoomServiceI{
	@Autowired
	private AsAccessDataRoomMapper asAccessDataRoomMapper;
	
	public int insertSelective(AsAccessDataRoom record) {
		int i = asAccessDataRoomMapper.insertSelective(record);
		return i;
	}

	public List<AsAccessDataRoom> searchRoomByUserId(Integer roomUId) {
		List<AsAccessDataRoom> list=asAccessDataRoomMapper.searchRoomByUserId(roomUId);
		return list;
	}

}
