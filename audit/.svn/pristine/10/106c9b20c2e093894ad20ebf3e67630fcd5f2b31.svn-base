package audit.service.impl.access;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.dao.AsAccessWebFiledInvestMapper;
import audit.model.assess.AsAccessWebFiledInvest;
import audit.model.assess.AsAccessWebFiledInvestContent;
import audit.service.access.AsAccessWebFiledInvestServiceI;

@Service("asAccessWebFiledInvestServiceI")
public class AsAccessWebFiledInvestServiceImpl implements
		AsAccessWebFiledInvestServiceI {

	@Autowired
	 private AsAccessWebFiledInvestMapper asAccessWebFiledInvestMapper;
	 
	
	public List<AsAccessWebFiledInvest> getAccessWebFiledInvest() {
		List<AsAccessWebFiledInvest> list=asAccessWebFiledInvestMapper.getAccessWebFiledInvest();
		return list;
	}

	public List<AsAccessWebFiledInvestContent> getMyContentList(Integer userId ,Integer specialtyId,Integer year){
		List<AsAccessWebFiledInvestContent> list=asAccessWebFiledInvestMapper.getMyContentList(userId,specialtyId,year);
		return list;
	}

	public int addAccessWebFiledInvestContent(List<AsAccessWebFiledInvestContent> investContentList,Integer specialty_ID) {
		int i=0;
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
		String create_datetime=df.format(new Date());
		int user_id=investContentList.get(0).getUser_id();
		int sqltype=0;//标记操作类型  0-insert  1-update
		//查询数据库是否有该用户对该专业的评估数据
		List<AsAccessWebFiledInvestContent> myContentList=asAccessWebFiledInvestMapper.getMyContentList(user_id,specialty_ID,investContentList.get(0).getYear());
		if(!myContentList.isEmpty()&&myContentList.size()>0)
		    sqltype=1;
		
		for(AsAccessWebFiledInvestContent newItem:investContentList){
			int resultFlag=0; //标记插入或者更新结果是否成功
			//boolean isExist=true;
			if(sqltype==1){
				for(AsAccessWebFiledInvestContent oldItem:myContentList)
				{
					if(newItem.getField_invest_ID()==oldItem.getField_invest_ID()){
						oldItem.setContent(newItem.getContent());
						oldItem.setCreate_datetime(create_datetime);
						resultFlag= asAccessWebFiledInvestMapper.updateAccessWebFiledInvestContent(oldItem);
						if(resultFlag<=0){  //更新 执行失败，返回
							return resultFlag;
							}
						break;
					}
				}
			}
          if(sqltype==0||resultFlag==0)// resultFlag=0 如果循环了一圈已经存在的指标和内容，没有该项指标的内容 则新增加一条
			{
				newItem.setCreate_datetime(create_datetime);
				newItem.setSpecialty_ID(specialty_ID);
				resultFlag= asAccessWebFiledInvestMapper.addAccessWebFiledInvestContent(newItem);
				
			}
			if(resultFlag<=0){ //插入执行 失败，返回
			return resultFlag;
			}
		}
		return 1;
	}
}
