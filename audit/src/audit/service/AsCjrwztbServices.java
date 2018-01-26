package audit.service;

import java.util.List;

import audit.model.AsCjCjrwztb;

public  interface AsCjrwztbServices {
	//修改任务状态
    void updateAscjrwztb(Integer ztbdm,Integer cjrwdm);
    
    // 查询采集任务状态id 
    AsCjCjrwztb findCjRwZtId (Integer cjrwdm,Integer ztbdm);
    
    //根据id查询采集任务采集人
    AsCjCjrwztb findCjrecjr(Integer id);
    
    /**
     * 查询采集任务采集人
     * @param id
     * @return
     */
    List<AsCjCjrwztb> findCJR();
    /**
     * 任务通过
     */
    void updateAsRWtg(Integer rwid);
    /**
     * 任务驳回
     */
    void updateAsRWbh(Integer rwid);
    /**
     * 根据id删除
     * @param ztbid
     */
    void deleteRW(Integer ztbid);
    /**
     * 任务取消
     */
    void updateAsRWqx(Integer rwid);
    /**
     * 任务通过失败
     * @param rwid
     */
    void updateAsRWtgX(Integer rwid);
}
