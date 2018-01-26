package audit.common;

import java.util.ArrayList;
import java.util.List;

import audit.model.AsIIndexClassification;
import audit.model.AsMManage;
import audit.model.AsPModule;
import audit.model.AsPlan;

/**
 * 
 * @author denglujun
 *
 */

public class ManageTreeListToJson {
	/**
	 * list to json 
	 * @param list
	 * @return
	 */
	public static String listTojson(List<ManageTreeEnttryHelper> list){
		StringBuffer jsonStr = new StringBuffer("[{\"ztree\":[");
		boolean bl = true;
		for(ManageTreeEnttryHelper manageTreeEnttryHelper : list){
			jsonStr.append("{\"id\":").append(manageTreeEnttryHelper.getId()).append(",\"pId\":").append(manageTreeEnttryHelper.getPId());
			if (bl && "00".equals(manageTreeEnttryHelper.getPId())) {
				jsonStr.append(",\"open\":true,");
				bl = false;
			}
			jsonStr.append(",\"name\":\"")
			.append(manageTreeEnttryHelper.getName()).append("\"},");
//			.append(manageTreeEnttryHelper.getName()).append("',")
//			.append("depId:'").append(manageTreeEnttryHelper.getDepId()).append("'},");
		}
		jsonStr.append("]}]");
		
		return jsonStr.toString();
	}
	/**
	 * list to json 
	 * @param list
	 * @return
	 */
	
	public static String listTojsonIschecked(List<ManageTreeEnttryHelper> list,List<AsIIndexClassification> checkedlist){
		StringBuffer jsonStr = new StringBuffer("[");
		
		for(ManageTreeEnttryHelper deptmentTreeEnttryHelper : list){
			jsonStr.append("{id:").append(deptmentTreeEnttryHelper.getId()).append(",pId:").append(deptmentTreeEnttryHelper.getPId())
			.append(",name:'").append(deptmentTreeEnttryHelper.getName()).append("'");
			//			.append(",name:'").append(deptmentTreeEnttryHelper.getName()).append("',")
//			.append("depId:'").append(deptmentTreeEnttryHelper.getDepId()).append("'");
//			for(AsIIndexClassification tbDepartment : checkedlist){
//				if(deptmentTreeEnttryHelper.getId().equals(tbDepartment.getEepNo())){
//					jsonStr.append(",checked:true");
//				}
//			}
			jsonStr.append("},");
			
		}
		jsonStr.append("];");
		
		return jsonStr.toString();
	}

	/**
	 * 
	 * @param list
	 * @return
	public static String listTojsonRadiochecked(List<DeptmentTreeEnttryHelper> list,String [] depNoArray){
		StringBuffer jsonStr = new StringBuffer("[");
		
		for(DeptmentTreeEnttryHelper deptmentTreeEnttryHelper : list){
			jsonStr.append("{id:").append(deptmentTreeEnttryHelper.getId()).append(",pId:").append(deptmentTreeEnttryHelper.getPId())
			.append(",name:'").append(deptmentTreeEnttryHelper.getName()).append("',")
			.append("depId:'").append(deptmentTreeEnttryHelper.getDepId()).append("'");
			for(String depno : depNoArray){
				if(deptmentTreeEnttryHelper.getId().equals(depno)){
					jsonStr.append(",checked:true");
				}
			}
			jsonStr.append("},");
			
		}
		String jsonS = jsonStr.toString().substring(0, jsonStr.length()-1);
		jsonS = jsonS+"]";
		
		return jsonS;
	}
	 */
	
	/**
	 * 
	 * @param list
	 * @return
	public static String listTojsonRadiocheckedBydepid(List<ManageTreeEnttryHelper> list,String [] depIdArray){
		StringBuffer jsonStr = new StringBuffer("[");
		
		for(ManageTreeEnttryHelper deptmentTreeEnttryHelper : list){
			jsonStr.append("{id:").append(deptmentTreeEnttryHelper.getId()).append(",pId:").append(deptmentTreeEnttryHelper.getPId())
			.append(",name:'").append(deptmentTreeEnttryHelper.getName()).append("',")
			.append("depId:'").append(deptmentTreeEnttryHelper.getDepId()).append("'");
			for(String depid : depIdArray){
				if(deptmentTreeEnttryHelper.getDepId().equals(depid)){
					jsonStr.append(",checked:true");
				}
			}
			jsonStr.append("},");
			
		}
		String jsonS = jsonStr.toString().substring(0, jsonStr.length()-1);
		jsonS = jsonS+"]";
		
		return jsonS;
	}
	 */
	
	/**
	 * 
	 * @param tdList
	 * @return
	 */
	public static List<ManageTreeEnttryHelper> getMnangeTreeList(List<AsIIndexClassification> indexList){
		List<ManageTreeEnttryHelper> list = new ArrayList<ManageTreeEnttryHelper>();
		ManageTreeEnttryHelper manageTreeEnteryHelper = null;
		for (AsIIndexClassification asIndex : indexList) {
			manageTreeEnteryHelper =new ManageTreeEnttryHelper();
			manageTreeEnteryHelper.setId(asIndex.getId());
			manageTreeEnteryHelper.setPId(asIndex.getParentId());
			manageTreeEnteryHelper.setName(asIndex.getIndexName());
//			manageTreeEnteryHelper.setIcon("../../css/zTreeStyle/img/diy/8.png");
			list.add(manageTreeEnteryHelper);
			if (asIndex.getManageList() != null && asIndex.getManageList().size()>0) {
				for (int i = 0,len = asIndex.getManageList().size(); i < len; i++) {
					AsMManage manage = asIndex.getManageList().get(i);
					manageTreeEnteryHelper =new ManageTreeEnttryHelper();
					manageTreeEnteryHelper.setId(manage.getMeasureId());
					manageTreeEnteryHelper.setPId(manage.getIndexClassificationId());
					manageTreeEnteryHelper.setName(manage.getMeasureName());
					manageTreeEnteryHelper.setIcon("../../css/zTreeStyle/img/diy/8.png");
					list.add(manageTreeEnteryHelper);
				}
			}
		}
		return list;
	}	
	
	/**
	 * 
	 * @param tdList
	 * @return
	 */
	public static List<ModuleTreeEnttryHelper> getModuleTreeList(List<AsPModule> indexList){
		List<ModuleTreeEnttryHelper> list = new ArrayList<ModuleTreeEnttryHelper>();
		ModuleTreeEnttryHelper treeEnteryHelper = null;
		boolean op = true;
		for (AsPModule asIndex : indexList) {
			treeEnteryHelper =new ModuleTreeEnttryHelper();
			treeEnteryHelper.setId("999"+asIndex.getPmid()+"");
			treeEnteryHelper.setPId("0");
			treeEnteryHelper.setName(asIndex.getName());
			treeEnteryHelper.setIcon("../../css/zTreeStyle/img/diy/green.png");
//			if ("1".equals(asIndex.getGrade())) {
//				treeEnteryHelper.setIcon("../../css/zTreeStyle/img/diy/green.png");
//			}else {
//				treeEnteryHelper.setIcon("../../css/zTreeStyle/img/diy/p1.png");
//			}
			treeEnteryHelper.setOpen(op);
			op = false;
			list.add(treeEnteryHelper);
			if (asIndex.getAsPlan() != null && asIndex.getAsPlan().size()>0) {
				for (int i = 0,len = asIndex.getAsPlan().size(); i < len; i++) {
					AsPlan plan = asIndex.getAsPlan().get(i);
					treeEnteryHelper =new ModuleTreeEnttryHelper();
					treeEnteryHelper.setId(plan.getId()+"");
					treeEnteryHelper.setPId("999"+plan.getMid()+"");
					treeEnteryHelper.setName(plan.getName());
					treeEnteryHelper.setIcon("../../css/zTreeStyle/img/diy/p1.png");
					list.add(treeEnteryHelper);
				}
			}
		}
		return list;
	}	
	

}
