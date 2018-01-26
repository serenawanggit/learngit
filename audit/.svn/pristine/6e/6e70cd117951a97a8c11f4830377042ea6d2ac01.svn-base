package audit.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsECkeditorContentMapper;
import audit.model.AsECkeditorContent;
import audit.service.AsECkeditorContentI;

@Service("asEckeditorContentService")
public class AsECkeditorContentServiceImpl implements AsECkeditorContentI{

	private AsECkeditorContentMapper asEckeditorContentMapper;
	@Autowired
	public void setAsEckeditorContentMapper(AsECkeditorContentMapper asEckeditorContentMapper){
		this.asEckeditorContentMapper = asEckeditorContentMapper;
	}
	public List<AsECkeditorContent> asEckcontents() {
		return asEckeditorContentMapper.selectAll();
	}

	public AsECkeditorContent asEckcontentsByEid(int eid) {
		return asEckeditorContentMapper.selectSingleById(eid);
	}

	public int saveAsCkeditorContent(AsECkeditorContent ascc) {
		return asEckeditorContentMapper.save(ascc);
	}
	public int updateAsCkeditorContent(AsECkeditorContent ascc) {
		return asEckeditorContentMapper.update(ascc);
	}

}
