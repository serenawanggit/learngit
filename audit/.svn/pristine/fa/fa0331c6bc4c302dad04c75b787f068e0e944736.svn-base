package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.SupportFileMapper;
import audit.model.Support_File;
import audit.service.SupportFileI;
@Service("supportFileService")
public class SupportFileImpl implements SupportFileI{

	private SupportFileMapper supportFileMapper;
	@Autowired
	public void setSupportFileMapper(SupportFileMapper supportFileMapper){
		this.supportFileMapper = supportFileMapper;
	}
	public Support_File findSupportFileById(int id) {
		return supportFileMapper.selectByPrimaryKey(id);
	}
	public int insert(Support_File supportFile) {
		return supportFileMapper.insert(supportFile);
	}
	public int deleteSupportFileById(int id) {
		return supportFileMapper.deleteByPrimaryKey(id);
	}
	
	public List<Support_File> selectFileByPid(Integer pid){
		return supportFileMapper.selectFileByPid(pid);
	}

}
