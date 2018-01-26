package audit.service.impl;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsCjRwxxMapper;
import audit.dao.DefineTemplateMapper;
import audit.model.AsCjCjrwztb;
import audit.model.AsCjRwJinDu;
import audit.model.AsCjRwxx;
import audit.model.AsCjRwxx2;
import audit.model.AsCjRwxxGL;
import audit.model.DefineObject;
import audit.model.DefineObjectVo;
import audit.model.DefineObjectVoDefault;
import audit.model.DefineTemplate;
import audit.model.StandardCellField;
import audit.model.StandardTemplate;
import audit.service.CjRwxxServiceI;
@Service("cjRwxxServiceImpl")
public class CjRwxxServiceImpl implements CjRwxxServiceI{

	private AsCjRwxxMapper asCjRwxxMapper;
	@Autowired
	public void setAsPlanMapper(AsCjRwxxMapper asCjRwxxMapper){
		this.asCjRwxxMapper = asCjRwxxMapper;
	}
	
	private DefineTemplateMapper defineTemplateDao;
	@Autowired
	public void setDefineTemplateDao(DefineTemplateMapper defineTemplateDao){
		this.defineTemplateDao = defineTemplateDao;
	}
	
	public List<AsCjRwxx> selectRwByMC(String name) {
		return asCjRwxxMapper.selectRwByMC(name);
	}

	public int deleteRwxx(Integer id){
		return asCjRwxxMapper.deleteRwxx(id);
	}
	
	//分页查询任务--根据名称模糊查询任务
	public List<AsCjRwxx2> findPageRwxx(String measureName,int pageStar,int pageEnd)
	{
		return asCjRwxxMapper.findPageRwxx(measureName, pageStar,pageEnd);
	}
		
	public int findCount(String measureName)
	{
		return asCjRwxxMapper.findCount(measureName);
	}
	
	//保存
	public int insertRW(AsCjRwxx rw){
		return asCjRwxxMapper.insertRW(rw);
	}
	
	public int findMaxId(){
		return asCjRwxxMapper.findMaxId();
	}
	
	public int insertRWglZTB(AsCjCjrwztb czzt){
		return asCjRwxxMapper.insertRWglZTB(czzt);
	}
	
	public List<AsCjRwxxGL> findRwxxById(Integer id){
		return asCjRwxxMapper.findRwxxById(id);
	}
	
	//删除任务关联
	public int deleteRwxxGL(Integer id){
		return asCjRwxxMapper.deleteRwxxGL(id);
	}
		//修改任务
	public int updateRW(AsCjRwxx rw){
		return asCjRwxxMapper.updateRW(rw);
	}
	
	//分页查询任务进度
	public List<AsCjRwJinDu> findPageRwxxZtb(int rwid,String measureName,Integer pageStar){
		return asCjRwxxMapper.findPageRwxxZtb(rwid, measureName, pageStar);
	}
	
	public int findRwJdCount(int rwid,String measureName){
		return asCjRwxxMapper.findRwJdCount(rwid, measureName);
	}
	
	public AsCjRwxx2 findRwById(Integer id){
		return asCjRwxxMapper.findRwById(id);
	}
	
	public int findYshCount(Integer rwid){
		return asCjRwxxMapper.findYshCount(rwid);
	}
	
	public int updateRwZtb(AsCjCjrwztb rwztb){
		return asCjRwxxMapper.updateRwZtb(rwztb);
	}
	
	public DefineTemplate findDiyMbById(Integer id){
		return defineTemplateDao.findDiyMbById(id);
	}
	
	public List<DefineObject> findYsbBymbId(Integer id){
		return defineTemplateDao.findYsbBymbId(id);
	}
	
	public StandardCellField findBZYS(Integer id){
		return defineTemplateDao.findBZYS(id);
	}
	
	public StandardTemplate findStandardTemplate(Integer id){
		return defineTemplateDao.findStandardTemplate(id);
	}

	public List<DefineObjectVo> findACOTMByCid(Integer ctemplateId) {
		return defineTemplateDao.findACOTMByCid(ctemplateId);
	}

	public List<Map<String, Object>> findAllByCid(Integer Cid) {
		return defineTemplateDao.findAllByCid(Cid);
	}

	public List<DefineObjectVoDefault> findDefaultCheckFiled(Integer ctemplateId) {
		return defineTemplateDao.findDefaultCheckFiled(ctemplateId);
	}

	public int findCjztbCount(Integer CJRWDM, Integer ZTBDM) {
		return asCjRwxxMapper.findCjztbCount(CJRWDM, ZTBDM);
	}

	public void updateCjrwztb(Integer cjr, Integer shr, String cjrwnf,
			Integer cjrwdm, Integer ztbdm) {
		asCjRwxxMapper.updateCjrwztb(cjr, shr, cjrwnf, cjrwdm, ztbdm);
	}

	public List<AsCjRwxxGL> findRwxxByIdforSchedule(Integer id) {
		return asCjRwxxMapper.findRwxxByIdforSchedule(id);
	}
}

