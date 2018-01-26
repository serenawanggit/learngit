package audit.service.impl.access;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsAccessDataTableMapper;
import audit.model.assess.AsAccessDataTable;
import audit.model.assess.tack.AsAccessDataTableTack;
import audit.service.access.AsAccessDataTableServiceI;
@Service("asAccessDataTableService")
public class AsAccessDataTableServiceImpl implements AsAccessDataTableServiceI{
	@Autowired
	private AsAccessDataTableMapper asAccessDataTableMapper;
	
	public ServiceResult<List<AsAccessDataTableTack>> searchAssessDataTable(
			Integer assessUserid) {
		ServiceResult<List<AsAccessDataTableTack>> serviceResult=new ServiceResult<List<AsAccessDataTableTack>>();
		List<AsAccessDataTableTack> list=asAccessDataTableMapper.searchAssessDataTable(assessUserid);
		if (list.isEmpty()) {
			serviceResult.setComment("文件夹集合为null [AsAccessDataTableServiceImpl] line：22");
			return serviceResult;
		}
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}
	
	public int insertSelective(AsAccessDataTable record) {
		return asAccessDataTableMapper.insertSelective(record);
	}

	public ServiceResult<List<AsAccessDataTableTack>> searchDataTableTable(
			int tableparentId, int assessUserid) {
		ServiceResult<List<AsAccessDataTableTack>> serviceResult=new ServiceResult<List<AsAccessDataTableTack>>();
		List<AsAccessDataTableTack> list = asAccessDataTableMapper.searchDataTableTable(tableparentId, assessUserid);
		if (list.isEmpty()) {
			serviceResult.setComment("文件夹集合为null [AsAccessDataTableServiceImpl] line：41");
			return serviceResult;
		}
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public int searchDataTableNameAndParentId(int tableParentId, String tableName) {
		return asAccessDataTableMapper.searchDataTableNameAndParentId(tableParentId, tableName);
	}
	/**
	 * id 文件夹id
	 */
	public ServiceResult<Integer> deleteByPrimaryKey(Integer id) {
		ServiceResult<Integer> serviceResult=new ServiceResult<Integer>();
		Integer i=0;
		if (id!=null) {
			 i = asAccessDataTableMapper.deleteByPrimaryKey(id);
			 if (null==i||0==i) {
				 serviceResult.setComment("i null [AsAccessDataTableServiceImpl] line：64");
				 return serviceResult;
			}
		}
		serviceResult.setData(i);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public Integer searchRoomByUserId(Integer roomUserId) {
		int roomCount=asAccessDataTableMapper.searchRoomByUserId(roomUserId);
		return roomCount;
	}

	public List<AsAccessDataTable> searchRoomTable(Integer roomid) {
		return asAccessDataTableMapper.searchRoomTable(roomid);
	}

	public Integer searchRoomByRoomId(Integer roomid) {
		return asAccessDataTableMapper.searchRoomByRoomId(roomid);
	}

}
