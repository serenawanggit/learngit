$(function(){
	initTime();
	initData();
	validateLogin();
})

function changeLocation(id,dateYear,zg_task_id,zy_task_id,ispass){
	window.parent.location.href=
		"/audit/page/xueyuan/staticPage/home_1.jsp?specialtyId="+id+"&dateYear="+dateYear+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass;
}

function logout(){
	window.location.href="/logout";
}

function  initData(){
	var dateYear =$("#dateYear").val();
	$.ajax({
		url:"/audit/AssessmentSpecialtyInfoXueYuanController/findAssessmentList.do",
		async:true,
		data:{
			"tYear":dateYear
		},
		type:'POST',
		dataType:'json',
		success:function(data){
			var htmls = "";
			$(data).each(function(index,val){
				htmls +="<tr>"
			    htmls +="<td nowrap='nowrap'"
				htmls +="style='padding:0 20px;height:30px;border:#DADADA 1px solid;'"
				htmls +="align='center'>"+val.specialty_CODE+"</td>"
				htmls +="<td nowrap='nowrap'"
				htmls +="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="align='center'>"+val.specialty_NAME+"</td>"	
				htmls +="	<td nowrap='nowrap'"
				htmls +="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="	align='center'>"+val.zG_self_assess_zt+"</td>"
				htmls +="<td nowrap='nowrap'"
	            htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="	align='center'>"+val.zLBG_self_assess_zt+"</td>"
				
				htmls +="<td nowrap='nowrap'"
		        htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
		        htmls +="	align='center'>"+val.comment_DATE+"</td>"
			
				htmls +="<td nowrap='nowrap'"
				htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="align='center'>"
				htmls +="<div style='cursor:pointer;' onclick='changeLocation("+val.s_info_id+","+dateYear+","+val.zg_task_id+","+val.zy_task_id+","+val.ispass+")'>"
				htmls +="	<div style='width: 24px;float: left;' >"
				htmls +="<img  src='/audit/page/xueyuan/staticPage/img/assess.png'/>"
				htmls +="	</div>"
				htmls +="		<div style='line-height: 23px;float: left;'>审核</div>"			
				htmls +="	</div>"	
				htmls +="</td>"	
				
				htmls +="	</tr> "
			});
			$("#tb_tbody2").html(htmls);
		}
	});
}

function  initTime(){
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
}