var request=GetRequest();
var years=request.dateYear;
$(function(){
	initTime();
	initData();
	validateLogin();
	
})


function changeLocation(jump,id,dateYear,item,ispass,t_task_id,xispass,is_rz,date,stype){
	var locaherf=window.location.href;
	//截取专业类型ID
	var zylxId=locaherf.substr(locaherf.indexOf("zylxId"), 8);
	//判断该用户是否有权限
	$.ajax({
		url:"/audit/AssessmentSpecialtyInfoWangPingController/getTypeForSpecialty.do",
		async:true,
		data:{
			"specialtyId":id
		},
		type:'POST',
		dataType:'json',
		success:function(data){
			//用户想跳网评
			if(jump==1){
				var flag=false;
				$(data).each(function(k,v){
					if(v==3){
						flag=true;
						return
					}
				})
				if(flag){
					date=encodeURI(encodeURI(date));
					//判断是否证
					if(is_rz==3||is_rz==1){//等于3 或者等于1 跳专业整改报告
						//跳网评
						window.parent.location.href=
						"/audit/page/wangping/staticPage/zhuanYeZhiLiangBaoGao.jsp?specialtyId="+id+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date+"&"+zylxId+"&zyId="+stype;
					}else{//整改
						//跳网评
					window.parent.location.href=
							"/audit/page/wangping/staticPage/home_1.jsp?specialtyId="+id+"&dateYear="+dateYear+"&ispass="+ispass+"&t_task_id="+t_task_id+"&date="+date+"&"+zylxId+"&zyId="+stype;
					}
				}else{
					alert("你没有网评权限！");
				}
			}
			//用户想跳考查
			if(jump==2){
				var flag=false;
				$(data).each(function(k,v){
					if(v==4||v==5){
						flag=true;
						return
					}
				})
				if(flag){
					//跳现场考查
					window.parent.location.href=
					"/audit/page/zenith/staticPage/newHome.jsp?specialtyId="+id+"&dateYear="+dateYear+"&"+zylxId+"&zyId="+date+"&sid="+date;
				
				}else{
					alert("你没有考查权限！");
				}
			}
		}
	});
}

function logout(){
	window.location.href="/logout";
}

function  initData(){
	var dateYear =$("#dateYear").val();
	if(years!=undefined&&years!=""){
		dateYear=years;
		$("#dateYear").val(years)
	}
	var locaherf=window.location.href;
	//截取专业类型ID
	var zylxId=locaherf.substr(locaherf.indexOf("zylxId")+7, 1);
	$.ajax({
		url:"/audit/AssessmentSpecialtyInfoWangPingController/findWangPingList.do",
		async:true,
		data:{
			"tYear":dateYear,
			"struts":zylxId
		},
		type:'POST',
		dataType:'json',
		success:function(data){
			var htmls = "";
			$(data).each(function(index,val){
				htmls +="<tr>"
			    htmls +="<td nowrap='nowrap'"
				htmls +="style='padding:0 20px;height:30px;border:#DADADA 1px solid;'"
				htmls +="align='center'>"+(index+1)+"</td>"
				htmls +="<td nowrap='nowrap'"
				htmls +="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="align='center'>"+val.specialty_NAME+"</td>"
				//网评时间
				htmls +="	<td nowrap='nowrap'"
				htmls +="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="	align='center'>"+val.comment_DATE+"</td>"
				//现场考查时间
				htmls +="	<td nowrap='nowrap'"
				htmls +="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="	align='center'>"+val.site_VISITS+"</td>"
				htmls +="	<td nowrap='nowrap'"
				htmls +="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				if(val.struts==1){
					htmls +="	align='center'>是</td>"
				}else{
					htmls +="	align='center'>否</td>"
				}
					
				htmls +="<td nowrap='nowrap'"
				htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="	align='center'>"
				//考查	
				htmls +="	<div style='cursor:pointer;width:75px;float:right' onclick='changeLocation(2,"+val.s_info_id+","+dateYear+","+val.item+","+val.ispass+","+val.t_task_id+","+val.xispass+","+val.is_RZ+","+val.engineering+")'>"
				htmls +="		<div>"
				htmls +="			<img  src='/audit/page/xueyuan/staticPage/img/assess.png' style='float:left'/>"
				htmls +="			<div style='line-height: 23px;float:left'>考查</div>"	
				htmls +="		</div>"
				htmls +="	</div>"	
				//网评
				htmls +="	<div style='cursor:pointer;width:65px;float:right' onclick='changeLocation(1,"+val.s_info_id+","+dateYear+","+val.item+","+val.ispass+","+val.t_task_id+","+val.xispass+","+val.is_RZ+",\""+val.comment_DATE+"\","+val.engineering+")'>"
				htmls +="		<div >"
				htmls +="			<img  src='/audit/page/xueyuan/staticPage/img/assess.png' style='float:left'/>"
				htmls +="			<div style='line-height: 23px;float:left'>网评</div>"	
				htmls +="		</div>"
				htmls +="	</div>"	
					
				htmls +="</td>"	
				htmls +="	</tr> "
			});
			$("#tb_tbody2").html(htmls);
		}
	});
	
	//查询是否是评估类型
	$.ajax({
		url:"/audit/AssessmentSpecialtyInfoXueYuanController/getAssessmentTypeById.do",
		data:{"id":zylxId},
		async:true,
		type:'POST',
		success:function(data){
			$("#assessName").text(data.substr(1,4));
			if(data.substr(1,2)=="课程"){
				$("#assessName1").text("课程列表");
			}else{
				$("#assessName1").text(data.substr(1,2)+"课程");
				
			}
			
		}
	});
	 
}

function  initTime(){
	var date = new Date();
	var nowDate = parseInt(date.getFullYear());
 	var len =  nowDate - 2013; 
    for(var i = 0; i < len; i++) {
     $("#dateYear").append("<option value='"+(2013+i)+"' selected='selected'>"+
     			(2013+i)+"</option>");
	}
    for ( var i = 0; i < 4; i++){
     	if(i==0){
     		$("#dateYear").append("<option value='"+(nowDate+i)+"'  >"+
         			(nowDate+i)+"</option>");
     	}else{
     		$("#dateYear").append("<option value='"+(nowDate+i)+"' >"+
         			(nowDate+i)+"</option>");
     	}
    }
}
function GetRequest() { 
	var url = window.location.search; //获取url中"?"符后的字串 
	var theRequest = new Object(); 
	if (url.indexOf("?") != -1) { 
		var str = url.substr(1); 
		strs = str.split("&"); 
		for(var i = 0; i < strs.length; i ++) { 
			theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
		} 
	} 
	/*var name=decodeURI(theRequest.name);
	name=name.split("'");
	$("#text").html(name[1]);*/
	return theRequest; 
	
}	
