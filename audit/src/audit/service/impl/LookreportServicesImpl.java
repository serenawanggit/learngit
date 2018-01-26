package audit.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;
import javax.swing.event.ListSelectionEvent;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import audit.common.ServiceResult;
import audit.dao.LookreportMapper;
import audit.model.LookreportData;
import audit.service.LookreportServices;
import audit.util.FileUtil;

@Service("lookreportServices")
public class LookreportServicesImpl implements LookreportServices {

	@Autowired
	private LookreportMapper lookreportMapper;
	
	public ServiceResult<Object> findLookreportData(int id) {
	    ServiceResult<Object> result=new ServiceResult<Object>();
	    List<LookreportData> lookreportDatas=  lookreportMapper.findLookreportData(id);
	    List<List<Object>>  listtwo=new ArrayList<List<Object>>();
	    List<List<Object>> listthree=new  ArrayList<List<Object>>();
	    List<List<Object>> listfour=new  ArrayList<List<Object>>();
	    for (int i = 0; i < lookreportDatas.size(); i++) {
	    	List<Object> a=new ArrayList<Object>();
	    	a.add(lookreportDatas.get(i).getTwoid());
	    	a.add(lookreportDatas.get(i).getTwoname());
	    	if (lookreportDatas.get(i).getThreeid()!=0) {
	    		List<Object> b=new ArrayList<Object>();
	    		b.add(lookreportDatas.get(i).getThreeid());
		    	b.add(lookreportDatas.get(i).getThreename());
		    	b.add(lookreportDatas.get(i).getTwoid());
		    	listthree.add(b);
			}
	    	if (lookreportDatas.get(i).getFourid()!=0) {
	    		List<Object> c=new ArrayList<Object>();
	    		c.add(lookreportDatas.get(i).getFourid());
		    	c.add(lookreportDatas.get(i).getFourname());
		    	c.add(lookreportDatas.get(i).getThreeid());
		    	listfour.add(c);
			}
	    	listtwo.add(a);
		}
	    for (int i = 0; i < listtwo.size(); i++) {
	    	for (int j = listtwo.size()-1; j >i; j--) {
	    		  int a=	Integer.parseInt(listtwo.get(i).get(0).toString());
	  	        int b=	Integer.parseInt(listtwo.get(j).get(0).toString());
	    		if (a==b)
                {
	    			listtwo.remove(j);
                }
			}
		}
	    
	    for (int i = 0; i < listthree.size(); i++) {
	    	for (int j = listthree.size()-1; j >i; j--) {
	        int a=	Integer.parseInt(listthree.get(i).get(0).toString());
	        int b=	Integer.parseInt(listthree.get(j).get(0).toString());
	    		if (a==b)
                {
	    			listthree.remove(j);
                }
			}
		}
	    
	    for (int i = 0; i < listfour.size(); i++) {
	    	for (int j = listfour.size()-1; j >i; j--) {
	    		 int a=	Integer.parseInt(listfour.get(i).get(0).toString());
	 	        int b=	Integer.parseInt(listfour.get(j).get(0).toString());
	    		if (a ==b)
                {
	    			listfour.remove(j);
                }
			}
		}
	    JSONArray alldata=JSONArray.fromObject(lookreportDatas);
		JSONArray titletwo=JSONArray.fromObject(listtwo);
		JSONArray titlethree=JSONArray.fromObject(listthree);
		JSONArray titlefour=JSONArray.fromObject(listfour);
		JSONObject jObject=new JSONObject();
		jObject.accumulate("alldata", alldata);
	   	jObject.accumulate("titletwo", titletwo);
	   	jObject.accumulate("titlethree", titlethree);
	  	jObject.accumulate("titlefour", titlefour);
	    result.setData(jObject);
		return result;
	}
	public void downreport(String downurl,HttpServletResponse response) {
		List<Map<String, Object>> list=lookreportMapper.findLookzccl(Integer.parseInt(downurl));
        String filepath=list.get(0).get("file_url").toString();
        String filname=list.get(0).get("file_name").toString();
        String filtype=list.get(0).get("file_type").toString();// zdl
        FileUtil.fileDownload(response, filepath, filname + filtype);
	}
	public void lookcount(int id) {
		 List<Map<String, Object>> list=lookreportMapper.findLookzccl(id);
	     int count= Integer.parseInt( list.get(0).get("PAGE_VIEW").toString())+1;
	     lookreportMapper.updateLookcount(count, id);
	}

}

