   var sContentPath = getContentPath();
     function getContentPath(){
        	var pathName = document.location.pathname;
        	var index = pathName.substr(1).indexOf("/");
        	var result = pathName.substr(0, index + 1);
        	return result;
        	
      }
     
     $(function(){
    	 validateLogin();
    		var date = new Date();
    		var nowDate = parseInt(date.getFullYear());
    		 var len =  nowDate - 2013; 
    	    for(var i = 0; i < len; i++) {
    	     	$("#dateYear").append("<option value='"+(2013+i)+"' >"+
    	     			(2013+i)+"</option>");
    			}
    	        for ( var i = 0; i < 4; i++){
    	     	if(i==0){
    	     		$("#dateYear").append("<option value='"+(nowDate+i)+"' selected='selected' >"+
    	         			(nowDate+i)+"</option>");
    	     	}else{
    	     		$("#dateYear").append("<option value='"+(nowDate+i)+"' >"+
    	         			(nowDate+i)+"</option>");
    	     	}
    	     }
    	        var syear = $("#dateYear").val();
    	        var htmls="";
    	       $.ajax({
    	    	   url:sContentPath+"/assessInspect/getBySpotPeopleId.do",
    	    	   data:{
    	    		   "syear":syear
    	    	   },
    	    	   dataType:'json',
    	    	   type:'POST',
    	    	   success:function(data){
    	    		   var datas = eval("("+data+")");
    	    		   if(datas!=null&&datas!=""&&datas!=undefined){
    	    			   var state="";
        	    			   if(datas[0].spot_zt==0){
        	    				   state="未评";
        	    			   }else{
        	    				   state="已评";
        	    			   }
    							htmls += "<tr><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+(i+1)+"</td><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[0].SPECIALTY_NAME+"</td>" +
    									"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[0].specialty_code+"</td><td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+datas[0].SITE_VISITS+"</td>" +
    									"<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>"+state+"</td>";
    							htmls += "<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'><a href='javascript:void(0)' onclick=\"changeLocation("+datas[0].id+",'"+syear+"')\"><img src='page/zenith/staticPage/img/assess.png' title='审核'/></a></td></tr>";
    							$("#tb_tbody2").html(htmls);
    							}
    	    		   }
    	    	   
    	    	   
    	    	   })
    	       })
    	       
    	       
function changeLocation(id,dateYear){
	window.parent.location.href=sContentPath+"/page/zenith/staticPage/newHome.jsp?specialtyId="+id+"&dateYear="+dateYear;
	
}
    