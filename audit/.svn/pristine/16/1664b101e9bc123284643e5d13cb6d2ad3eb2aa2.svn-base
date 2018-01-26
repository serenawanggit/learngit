//初始化进入 现场考查工作日程表 获得数据的方法
$(function(){
	validateLogin();
	$.ajax({
		url:'/audit/examineScene/scheduleAccessYear.do',
		type:'POST',
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessYearList = dataObj.data.accessYearList;
			var selectedYear;
			var selectedYear1 = $("#selectedYear").val();
			var selectedYear2 =parent.document.getElementById("selectedYearCommonTop").value;
			if(selectedYear1!=""){
				selectedYear = selectedYear1;
			}else{
				selectedYear = selectedYear2;
			}
			//获取年份
		    var strCookie = document.cookie;
		    var cookies = strCookie.split("; ");
		    for(var i=0;i<cookies.length;i++){
		    	var cookie = cookies[i];
		    	var details = cookie.split("=");
		    	if(details[0] == "assessYear"){
		    		selectedYear = eval(details[1]);
		    	}
		    }
			
			for(var i=0;i<accessYearList.length;i++){
				if(selectedYear==accessYearList[i].accessYear){
					$("#schedule_year_select").append("<option value='"+accessYearList[i].id+"' selected>"+accessYearList[i].accessYear+"</option>");
				}else{
					$("#schedule_year_select").append("<option value='"+accessYearList[i].id+"'>"+accessYearList[i].accessYear+"</option>");
				}
			}
			//1 开始
			//查询学院option
			var accessId = $("#schedule_year_select").val();
		    $("#schedule_academy_select").empty();
		    $("#schedule_academy_select").append("<option value='0'>--请选择--</option>");
		    $("#schedule_specialty_select").empty();
		    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
		    if(accessId==0){
				return;
			}
			$.ajax({
				url:'/audit/examineScene/scheduleAccessSpecialty.do',
				type:'POST',
				data:{"accessId":accessId},
				dataType : "json",
				success:function(data){
					var dataObj=eval("("+data+")");
					var accessSpecialtyList = dataObj.data.accessSpecialtyList;
				    var result = [], hash = {};
				    for (var i = 0,elem;i<accessSpecialtyList.length; i++) {
				    	elem = accessSpecialtyList[i].academyId;
				        if (!hash[elem]) {
				            result.push(accessSpecialtyList[i]);
				            hash[elem] = true;
				        }
				    }
				    $("#schedule_academy_select").empty();
				    $("#schedule_academy_select").append("<option value='0'>--请选择--</option>");
					for(var i=0;i<result.length;i++){
						$("#schedule_academy_select").append("<option value='"+result[i].academyId+"' "+(i==0?'selected':'')+">"+result[i].academyName+"</option>");
					}
					//2开始
					//查询专业的option
					var accessId = $("#schedule_year_select").val();
					var academyId = $("#schedule_academy_select").val();
				    $("#schedule_specialty_select").empty();
				    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
					if(academyId==0){
						return;
					}
					$.ajax({
						url:'/audit/examineScene/scheduleAccessSpecialty.do',
						type:'POST',
						data:{"accessId":accessId,"academyId":academyId},
						dataType : "json",
						success:function(data){
							var dataObj=eval("("+data+")");
							var accessSpecialtyList = dataObj.data.accessSpecialtyList;
						    var result = [], hash = {};
						    for (var i = 0,elem;i<accessSpecialtyList.length; i++) {
						    	elem = accessSpecialtyList[i].specialtyId;
						        if (!hash[elem]) {
						            result.push(accessSpecialtyList[i]);
						            hash[elem] = true;
						        }
						    }
						    $("#schedule_specialty_select").empty();
						    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
							for(var i=0;i<result.length;i++){
								$("#schedule_specialty_select").append("<option value='"+result[i].specialtyId+"' "+(i==0?'selected':'')+">"+result[i].specialtyName+"</option>");
							}
							//3 开始
							querySchedule();
							//3结束
						},
						error:function(){
							alert("系统繁忙，请稍后重试！");
						}
					});
					//2 结束
				},
				error:function(){
					alert("系统繁忙，请稍后重试！");
				}
			});
			//1 结束
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
});
function getAcademyOption(){//查询学院option
	var accessId = $("#schedule_year_select").val();
	//设置当前年份
	var year = $("#schedule_year_select option:selected").text();
	document.cookie="assessYear="+year+";path=/";
	
    $("#schedule_academy_select").empty();
    $("#schedule_academy_select").append("<option value='0'>--请选择--</option>");
    $("#schedule_specialty_select").empty();
    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
	if(accessId==0){
		return;
	}
	$.ajax({
		url:'/audit/examineScene/scheduleAccessSpecialty.do',
		type:'POST',
		data:{"accessId":accessId},
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessSpecialtyList = dataObj.data.accessSpecialtyList;
		    var result = [], hash = {};
		    for (var i = 0,elem;i<accessSpecialtyList.length; i++) {
		    	elem = accessSpecialtyList[i].academyId;
		        if (!hash[elem]) {
		            result.push(accessSpecialtyList[i]);
		            hash[elem] = true;
		        }
		    }
		    $("#schedule_academy_select").empty();
		    $("#schedule_academy_select").append("<option value='0'>--请选择--</option>");
			for(var i=0;i<result.length;i++){
				$("#schedule_academy_select").append("<option value='"+result[i].academyId+"'>"+result[i].academyName+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function getSpecialtyOption(){//查询专业的option
	var accessId = $("#schedule_year_select").val();
	var academyId = $("#schedule_academy_select").val();
    $("#schedule_specialty_select").empty();
    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
	if(academyId==0){
		return;
	}
	$.ajax({
		url:'/audit/examineScene/scheduleAccessSpecialty.do',
		type:'POST',
		data:{"accessId":accessId,"academyId":academyId},
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessSpecialtyList = dataObj.data.accessSpecialtyList;
		    var result = [], hash = {};
		    for (var i = 0,elem;i<accessSpecialtyList.length; i++) {
		    	elem = accessSpecialtyList[i].specialtyId;
		        if (!hash[elem]) {
		            result.push(accessSpecialtyList[i]);
		            hash[elem] = true;
		        }
		    }
		    $("#schedule_specialty_select").empty();
		    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
			for(var i=0;i<result.length;i++){
				$("#schedule_specialty_select").append("<option value='"+result[i].specialtyId+"'>"+result[i].specialtyName+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function querySchedule(){//查询工作日程表
	var accessId = $("#schedule_year_select").val();
	var academyId = $("#schedule_academy_select").val();
	var specialtyId = $("#schedule_specialty_select").val();
	if(accessId==0){
	    $("#schedule_academy_select").empty();
	    $("#schedule_academy_select").append("<option value='0'>--请选择--</option>");
		return;
	}
	if(academyId==0){
	    $("#schedule_specialty_select").empty();
	    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");
		return;
	}
	if(specialtyId==0){
	    /*$("#schedule_specialty_select").empty();
	    $("#schedule_specialty_select").append("<option value='0'>--请选择--</option>");*/
		//$("#myModal").attr("aria-hidden",true);
		return;
	}
	$.ajax({//获得评估专业表信息
		url:'/audit/examineScene/scheduleAccessSpecialty.do',
		type:'POST',
		data:{"accessId":accessId,"academyId":academyId,"specialtyId":specialtyId},
		dataType : "json",
		async:false,
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessSpecialtyList = dataObj.data.accessSpecialtyList;
			$("#scheduleTaskForm").append("<input id='accessSpecialtyId' name='accessSpecialtyId' type='hidden' value='"+accessSpecialtyList[0].id+"'/>");
		    $("#scheduleTaskTable tbody tr td:first").append("<input type='hidden' name='accessSpecialtyId' value='"+accessSpecialtyList[0].id+"'/>");
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
	var accessSpecialtyId = $("#accessSpecialtyId").val();//评估专业id
	$.ajax({//查询专业评估组成员id 
		url:'/audit/examineScene/scheduleExamineExpert.do',
		type:'POST',
		data:{'accessSpecialtyId':accessSpecialtyId},
		dataType:'json',
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessUser = dataObj.data.accessUser;
			$("#expertId0").empty();
			$("#expertId0").append("<option value='0' selected>-请选择-</option>");
			for(var i=0;i<accessUser.length;i++){
				$("#expertId0").append("<option value='"+accessUser[i].userId+"'>"+accessUser[i].userName+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
	$.ajax({//查询现场工作日程表内容
		url:'/audit/examineScene/scheduleExamineSchedule.do',
		type:'POST',
		data:{"accessId":accessId,"academyId":academyId,"specialtyId":specialtyId,"accessSpecialtyId":accessSpecialtyId},
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var dataArray =  dataObj.data.examineScheduleVoList;
			$("#scheduleDataTable tbody").empty();
			if(dataArray.length==0){
				$("#scheduleDataTable tbody").append("<tr><td colspan=6 style='text-align:center;color:red;'>暂无数据</td></tr>");
			}
			for(var i=0;i<dataArray.length;i++){
				$("#scheduleDataTable tbody").append("<tr>" +
						"<td taskId="+dataArray[i].id+" '>"+(i+1)+"</td>" +
						"<td>"+dataArray[i].showScheduleDate.substring(0,19)+"</td>" +
						"<td>"+dataArray[i].scheduleTime+"</td>" +
						"<td>"+dataArray[i].scheduleTask+"</td>" +
						"<td zvalue='"+dataArray[i].expertId+"'>"+dataArray[i].expertName+"</td>" +
						"<td>" +
							"<span class='glyphicon glyphicon-edit glyphicon-1-znj' onclick='openUpdateDiv(this)'></span>" +
							"&nbsp;" +
							"<span class='glyphicon glyphicon-trash glyphicon-2-znj' onclick='delScheduleTask("+dataArray[i].id+");'></span>" +
						"</td>" +
				"</tr>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function insertScheduleTasks(){//向数据库插入新增的工作日程内容
	var scheduleDates = $("#scheduleTaskTable input[name = scheduleDate]");
	var Dates = false;
	//var inspectExpertIds = $("#scheduleTaskTable select[name = expertId]");
	//var expertIds = false;
	for(var i=0;i<scheduleDates.length;i++){
		if(scheduleDates[i].value==""){
			Dates = true;
		}
	}
	if(Dates){
		alert("日期不能为空！");
		return;
	}
	/*for(var i=0;i<inspectExpertIds.length;i++){
		if(inspectExpertIds[i].value==0){
			expertIds = true;
		}
	}
	if(expertIds){
		alert("专家不能为空！");
		return;
	}*/
	var uploadData =$("#scheduleTaskForm").serialize();
	$.ajax({
		type:'post',
		url:'/audit/examineScene/scheduleInsertScheduleTasks.do',
		data:uploadData,
		dataType:'json',
		success:function(result){
			alert("成功插入："+result+"条数据！");
			$('#myModal').modal('hide');
			querySchedule();
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function openAddDiv(){//打开新增界面时触发
	var accessId = $("#schedule_year_select").val();
	var academyId = $("#schedule_academy_select").val();
	var specialtyId = $("#schedule_specialty_select").val();
	if(accessId==0){
		alert("请选择年度！");
		return;
	}
	if(academyId==0){
		alert("请选择专业！");
		return;
	}
	if(specialtyId==0){
		alert("请选择专业！");
		return;
	}
	$("#myModal").modal('show');// 初始化，立即调用show
}
function addTaskTr(){//在界面上添加工作日程行
	var len = $("#scheduleTaskTable tbody tr").length;
	var accessSpecialtyId = $("#accessSpecialtyId").val();//评估专业id
	var str =  "<tr id='ztr"+len+"'>" +
		"<td><input type='text' name='scheduleDate' onclick='WdatePicker({dateFmt:\"yyyy-MM-dd HH:mm:ss\"});' class='form-control' placeholder='点击选择时间' readonly></td>"+
		"<td><input type='text' name='scheduleTime' class='form-control' placeholder='请输入具体时间段'></td>"+
		"<td><input type='text' name='scheduleTask' class='form-control' placeholder=''></td>"+
		"<td><select class='form-control' name='expertId' id='expertId"+len+"'></select></td>"+
		"<td class='td-bnt-znj'>" +
			"<span class='glyphicon glyphicon-plus glyphicon-2-znj' onclick='addTaskTr();'></span>&nbsp;" +
			"<span class='glyphicon glyphicon-minus glyphicon-2-znj' onclick='delTaskTr("+len+");'></span>" +
		"</td>"+
		"<input type='hidden' name='accessSpecialtyId' value='"+accessSpecialtyId+"'/>"+
		"</tr>";
	$("#scheduleTaskTable tbody").append(str);
	$("#expertId"+len).html($("#expertId0 option").clone(true));
}
function delTaskTr(v){//删除本行节点
	$("#ztr"+v).remove();
}
function delScheduleTask(id){//根据id删除单条日程表记录
	  if(!confirm("确定要删除数据吗？")){
	    return;
	   }
	$.ajax({
		url:'/audit/examineScene/scheduleDeleteScheduleTasks.do',
		type:'post',
		data:{"ids":id},
	    dataType:'json',
	    success:function(result){
	    	alert("成功删除："+result+"条数据！");
	    	querySchedule();
	    },
	    error:function(){
	    	alert("系统繁忙，请稍后重试！");
	    }
	});
}
function openUpdateDiv(v){//打开修改时的界面
	$("#myModal2").modal('show');
	$("#scheduleTaskTable2 tbody").empty();
	var accessSpecialtyId = $("#accessSpecialtyId").val();//评估专业id
	var str =  "<tr>" +
	"<td><input type='text' name='scheduleDate' onclick='WdatePicker({dateFmt:\"yyyy-MM-dd HH:mm:ss\"});' class='form-control' placeholder='' value='"+$(v).parent().parent().children(":nth-child(2)").text()+"' readonly></td>"+
	"<td><input type='text' name='scheduleTime' class='form-control' placeholder='' value='"+$(v).parent().parent().children(":nth-child(3)").text()+"'></td>"+
	"<td><input type='text' name='scheduleTask' class='form-control' placeholder='' value='"+$(v).parent().parent().children(":nth-child(4)").text()+"'></td>"+
	"<td><select class='form-control' name='expertId' id='upExpertId'></select>" +
	"</td>" +
	"<input type='hidden' name='id' value='"+$(v).parent().parent().children(":nth-child(1)").attr("taskid")+"'/>"+
	"<input type='hidden' name='accessSpecialtyId' value='"+accessSpecialtyId+"'/>"+
	"</tr>";
	$("#scheduleTaskTable2 tbody").append(str);
	var expertId = $(v).parent().parent().children(":nth-child(5)").attr("zvalue");
	$.ajax({//查询专业评估组成员id 
		url:'/audit/examineScene/scheduleExamineExpert.do',
		type:'POST',
		data:{'accessSpecialtyId':accessSpecialtyId},
		dataType:'json',
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessUser = dataObj.data.accessUser;
			$("#upExpertId").empty();
			$("#upExpertId").append("<option value='0'>-请选择-</option>");
			for(var i=0;i<accessUser.length;i++){
				if(expertId==accessUser[i].userId){
					$("#upExpertId").append("<option value='"+accessUser[i].userId+"' selected>"+accessUser[i].userName+"</option>");
				    
				}else{
					$("#upExpertId").append("<option value='"+accessUser[i].userId+"'>"+accessUser[i].userName+"</option>");
				}
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function updateScheduleTask(){//修改日程表数据
	var scheduleDates = $("#scheduleTaskTable2 input[name = scheduleDate]");
	var Dates = false;
	//var inspectExpertIds = $("#scheduleTaskTable2 select[name = expertId]");
	//var expertIds = false;
	for(var i=0;i<scheduleDates.length;i++){
		if(scheduleDates[i].value==""){
			Dates = true;
		}
	}
	if(Dates){
		alert("日期不能为空！");
		return;
	}
	/*for(var i=0;i<inspectExpertIds.length;i++){
		if(inspectExpertIds[i].value==0){
			expertIds = true;
		}
	}
	if(expertIds){
		alert("专家不能为空！");
		return;
	}*/
	var uploadData =$("#scheduleTaskForm2").serialize();
	$.ajax({
		type:'post',
		url:'/audit/examineScene/scheduleUpdateScheduleTasks.do',
		data:uploadData,
		dataType:'json',
		success:function(result){
			alert("成功修改"+result+"条数据！");
			$("#scheduleTaskTable2 tbody").empty();
			$('#myModal2').modal('hide');
			querySchedule();
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}