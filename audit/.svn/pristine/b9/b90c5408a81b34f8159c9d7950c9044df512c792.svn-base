package audit.service.impl.access;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.AsAccessDataInfoMapper;
import audit.model.assess.AsAccessDataInfo;
import audit.service.access.AsAccessDataInfoServiceI;

@Service("asAccessDataInfoService")
public class AsAccessDataInfoServiceImpl implements AsAccessDataInfoServiceI {

	 @Autowired
	 private AsAccessDataInfoMapper asAccessDataInfoMapper;
	
	public List<AsAccessDataInfo> findDataOnline() {
		return asAccessDataInfoMapper.findDataOnline();
	}
    
	public ServiceResult<List<AsAccessDataInfo>> searchAssessDataInfo() {
		ServiceResult<List<AsAccessDataInfo>> serviceResult=new ServiceResult<List<AsAccessDataInfo>>();
		List<AsAccessDataInfo> list=asAccessDataInfoMapper.searchAssessDataInfo();
		if (list.isEmpty()) {
			serviceResult.setComment("文件初始化list为null 【AsAccessDataInfoServiceImpl】 line：21");
			return serviceResult;
		}
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<List<AsAccessDataInfo>> searchAssessDataTableInfo(
			int dataTableId) {
		ServiceResult<List<AsAccessDataInfo>> serviceResult=new ServiceResult<List<AsAccessDataInfo>>();
		List<AsAccessDataInfo> list = asAccessDataInfoMapper.searchAssessDataTableInfo(dataTableId);
		if (list.isEmpty()) {
			serviceResult.setComment("文件初始化list为null 【searchAssessDataTableInfo】 line：34");
			return serviceResult;
		}
		serviceResult.setData(list);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Integer> deleteByTableId(Integer id) {
		ServiceResult<Integer> serviceResult=new ServiceResult<Integer>();
		Integer i =asAccessDataInfoMapper.deleteByTableId(id);
		if (i==null) {
			serviceResult.setComment("i为null 【searchAssessDataTableInfo】 line：52");
			return serviceResult;
		}
		serviceResult.setData(i);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public ServiceResult<Integer> deleteByPrimaryKey(List<Integer> id) {
		ServiceResult<Integer> serviceResult=new ServiceResult<Integer>();
		Integer i =asAccessDataInfoMapper.deleteByPrimaryKey(id);
		if (i==null) {
			serviceResult.setComment("i为null 【searchAssessDataTableInfo】 line：64");
			return serviceResult;
		}
		serviceResult.setData(i);
		serviceResult.setOk(true);
		return serviceResult;
	}

	public Integer insertSelective(AsAccessDataInfo record) {
		return asAccessDataInfoMapper.insertSelective(record);
	}

	public AsAccessDataInfo findFileNameById(Integer id) {
		return asAccessDataInfoMapper.findFileNameById(id);
	}

	public int searchFileCount(Integer tableid, String filename, String filetype) {
		return asAccessDataInfoMapper.searchFileCount(tableid, filename, filetype);
	}



}
