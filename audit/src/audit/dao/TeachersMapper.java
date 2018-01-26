package audit.dao;

import java.util.List;
import java.util.Map;

public interface TeachersMapper {

     List<Map<String, Object>>	selectTeacher(Map<String, String> map);
}
