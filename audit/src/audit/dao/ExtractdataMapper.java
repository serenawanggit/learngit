package audit.dao;

import java.util.Map;

public interface ExtractdataMapper {
    /**
     * 将临时数据抽取到正式表
     * @return 
     */
	public Map<String, String> extractdata(String ctemplateName,String insertVersion,Integer userId,String what);
}
