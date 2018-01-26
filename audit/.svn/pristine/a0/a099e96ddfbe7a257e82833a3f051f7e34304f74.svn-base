$(function(){
	initTime();
	initData();
	validateLogin();
	//alert("我是学院"+window.location.href);
})
// var sContentPath = getContentPath();
//     function getContentPath(){
//        	var pathName = document.location.pathname;
//        	var index = pathName.substr(1).indexOf("/");
//        	var result = pathName.substr(0, index + 1);
//        	return result;
//        	
//      }
function changeLocation(id,dateYear,zg_task_id,zy_task_id,ispass,date){
	var zylxId = $("#zylxId").val();
	date= encodeURI(encodeURI(date));
	window.parent.location.href=
		"/audit/page/xueyuan/staticPage/home_1.jsp?specialtyId="+id+"&dateYear="+dateYear+"&zg_task_id="+zg_task_id+"&zy_task_id="+zy_task_id+"&ispass="+ispass+"&date="+date+"&zylxId="+zylxId;
}
function changeLocation1(id,dateYear){
	var zylxId = $("#zylxId").val();
	window.parent.location.href="/audit/page/xueyuan/staticPage/home_2.jsp?specialtyId="+id+"&dateYear="+dateYear+"&zylxId="+zylxId;
}

function logout(){
	window.location.href="/logout";
}

function  initData(){
	getCollegerOrCourse();
	var syear =$("#dateYear").val();
	var pgid = $("#zylxId").val();
	if(pgid==1){
	}else if(pgid==4){
		syear =$("#dateYear_course").val();
	}else{
		syear = $("#dateYear_major").val();
	}
	$.ajax({
		url:"/audit/AssessmentSpecialtyInfoXueYuanController/findAssessmentList.do",
		async:false,
		data:{
			"tYear":syear,
			"pgid":pgid
		},
		type:'POST',
		dataType:'json',
		success:function(data){
			var htmls = "";
			$(data).each(function(index,val){
				htmls +="<tr>";
			    htmls +="<td nowrap='nowrap'";
				htmls +="style='padding:0 20px;height:30px;border:#DADADA 1px solid;'";
				htmls +="align='center'>"+val.specialty_CODE+"</td>";
				htmls +="<td nowrap='nowrap'";
				htmls +="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'";
				htmls +="align='center'>"+val.specialty_NAME+"</td>"	;
				htmls +="	<td nowrap='nowrap'";
				htmls +="style='padding:0 20px; height:30px;border:#DADADA 1px solid;'";
				htmls +="	align='center'>"+val.zG_self_assess_zt+"</td>";
				htmls +="<td nowrap='nowrap'";
	            htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'";
				htmls +="	align='center'>"+val.zLBG_self_assess_zt+"</td>";
				
				htmls +="<td nowrap='nowrap'";
		        htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'";
		        htmls +="	align='center'>"+val.comment_DATE+"</td>";
/*				htmls +="<td nowrap='nowrap'";
				htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'";
				htmls +="align='center'>";
				htmls +="<div style='cursor:pointer;' >";
				htmls +="	<div style='width: 24px;float: left;' >";
				htmls +="<img  src='/audit/page/xueyuan/staticPage/img/assess.png' onclick='changeLocation("+val.s_info_id+","+dateYear+","+val.zg_task_id+","+val.zy_task_id+","+val.ispass+",\""+val.comment_DATE+"\")'/>";*/
/*				htmls +="<td nowrap='nowrap'"
		        htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
		        htmls +="	align='center'>"+val.comment_DATE+"</td>"*/
			
				htmls +="<td nowrap='nowrap'"
				htmls +="	style='padding:0 20px; height:30px;border:#DADADA 1px solid;'"
				htmls +="align='center'>"
				htmls +="<div style='cursor:pointer; text-align: center;' >"
				htmls +="	<div style='width: 24px;float: left; text-align: center;' >"
				htmls +="<img  src='/audit/page/xueyuan/staticPage/img/assess.png' onclick='changeLocation("+val.s_info_id+","+syear+","+val.zg_task_id+","+val.zy_task_id+","+val.ispass+",\""+val.comment_DATE+"\")'/>"
				htmls +="	</div>"
				htmls +="		<div style='line-height: 23px;float: left;text-align: center;' onclick='changeLocation("+val.s_info_id+","+dateYear+","+val.zg_task_id+","+val.zy_task_id+","+val.ispass+",\""+val.comment_DATE+"\")'>审核</div>";	
//				htmls +="		<div style='line-height: 23px;float: left;' onclick='changeLocation("+val.s_info_id+","+syear+","+val.zg_task_id+","+val.zy_task_id+","+val.ispass+",\""+val.comment_DATE+"\")'>审核</div>"	
//					htmls +="	<div style='width: 24px;float: left;' >"
//						htmls +="<a href='javasrcipt:void(0)' onclick='changeLocation1("+val.s_info_id+","+dateYear+")'><img  src='/audit/page/xueyuan/staticPage/img/assess.png'/></a>";
//						htmls +="	</div>";
//				htmls +="	</div>";
//				htmls +="		<div style='line-height: 23px;float: left;cursor:pointer;' onclick='changeLocation1("+val.s_info_id+","+dateYear+")'>专家反馈</div>"			;
//				htmls +="	</div>";
//				htmls +="	</div>";
//				htmls +="</td>"	;
//						htmls +="<a href='javasrcipt:void(0)' onclick='changeLocation1("+val.s_info_id+","+syear+")'><img  src='/audit/page/xueyuan/staticPage/img/assess.png'/></a>"
//						htmls +="	</div>"
//				htmls +="	</div>"
//				htmls +="		<div style='line-height: 23px;float: left;cursor:pointer;' onclick='changeLocation1("+val.s_info_id+","+syear+")'>专家反馈</div>"			
//				htmls +="	</div>"
				htmls +="	</div>"
				htmls +="</td>"	
			});
			if(pgid==1){
//				console.info(htmls);
				$("#tb_tbody2").html(htmls);
			}else if(pgid==4){
				$("#course_tbody2").html(htmls);
			}else{
				$("#major_tbody2").html(htmls);
			}
		}
	});
	
	/**
	 * 加载课程评估
	 *//*
	var syear_c =  $("#dateYear_course").val();
	$.ajax({
		url:"/audit/AssessmentSpecialtyInfoXueYuanController/findAssessmentList.do",
		async:false,
		type:'POST',
		data:{
			"syear":syear_c,
			"pgid":pgid
		},
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
		htmls +="<div style='cursor:pointer;' >"
		htmls +="	<div style='width: 24px;float: left;' >"
		htmls +="<img  src='/audit/page/xueyuan/staticPage/img/assess.png' onclick='changeLocation("+val.s_info_id+","+syear_c+","+val.zg_task_id+","+val.zy_task_id+","+val.ispass+",\""+val.comment_DATE+"\")'/>"
		htmls +="	</div>"
		htmls +="		<div style='line-height: 23px;float: left;' onclick='changeLocation("+val.s_info_id+","+syear_c+","+val.zg_task_id+","+val.zy_task_id+","+val.ispass+",\""+val.comment_DATE+"\")'>审核</div>"	
			htmls +="	<div style='width: 24px;float: left;' >"
				htmls +="<a href='javasrcipt:void(0)' onclick='changeLocation1("+val.s_info_id+","+syear_c+")'><img  src='/audit/page/xueyuan/staticPage/img/assess.png'/></a>"
				htmls +="	</div>"
		htmls +="	</div>"
		htmls +="		<div style='line-height: 23px;float: left;cursor:pointer;' onclick='changeLocation1("+val.s_info_id+","+syear_c+")'>专家反馈</div>"			
		htmls +="	</div>"
		htmls +="	</div>"
		htmls +="</td>"	
		htmls +="	</tr> "
	});
	$("#course_tbody2").html(htmls);
}
	});*/
}
function  initTime(){
	var date = new Date();
	var nowDate = parseInt(date.getFullYear());
 	var len =  nowDate - 2013; 
    for(var i = 0; i < len; i++) {
     $(".syear").append("<option value='"+(2013+i)+"' selected='selected'>"+
     			(2013+i)+"</option>");
	}
    for ( var i = 0; i < 4; i++){
     	if(i==0){
     		$(".syear").append("<option value='"+(nowDate+i)+"'  >"+
         			(nowDate+i)+"</option>");
     	}else{
     		$(".syear").append("<option value='"+(nowDate+i)+"' >"+
         			(nowDate+i)+"</option>");
     	}
    }
}
/**
 * 加载标题
 */
function getCollegerOrCourse(){
	var zylxId = $("#zylxId").val();
	$.ajax({
//		url:sContentPath+"/asAssessReport/getAssessmentTypeById.do",
		url:"/audit/AssessmentSpecialtyInfoXueYuanController/getAssessmentTypeById.do",
		type:'POST',
		async:false,
		data:{
			"id":zylxId
		},
		success:function(data){
			$("#assessName").text(data.substr(1,4));
			if(data.substr(1,2)=="课程"){
				$("#assessName1").text("课程列表");
				$("#assess_college").hide();
				$("#assess_course").show();
				$("#assess_major").hide();
			}else if(data.substr(1,2)=="学院"){
				$("#assessName1").text(data.substr(1,2)+"课程");
				$("#assess_college").show();
				$("#assess_course").hide();
				$("#assess_major").hide();
			}else{
//				$("#assessName").text(data.substr(1,2)+"评估");
				$("#assess_college").hide();
				$("#assess_course").hide();
				$("#assess_major").show();
			}
		}
	});
}
