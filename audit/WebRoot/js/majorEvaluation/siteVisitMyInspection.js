/*    页面 切换操作*/
/*function viewChange1() {
	var myInspectionContent = $('#myInspectionContent');
	var myInspection=$('#myInspection');
	myInspection.css("display", "none");
	myInspectionContent.css("display", "block");

}
function viewChange2() {
	var myInspectionContent = $('#myInspectionContent');
	var myInspection=$('#myInspection');
	myInspectionContent.css("display", "none");
	myInspection.css("display", "block");

}*/
 
$(function(){
	validateLogin();
	var isback = $("#isbackId").val();
	if(isback==="true"){//从考查内容中返回时调用
		backUser();
	}else{//初始化进入现场考查工作日程表 获得数据的方法
		$.ajax({
			url:'/audit/examineScene/sceneAccessYear.do',
			type:'POST',
			dataType : "json",
			success:function(data){
				var dataObj=eval("("+data+")");
				var accessYearList = dataObj.data.accessYearList;
				var selectedYear = $("#selectedYear").val();
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
						$("#scene_year_select").append("<option value='"+accessYearList[i].id+"' selected>"+accessYearList[i].accessYear+"</option>");
					}else{
						$("#scene_year_select").append("<option value='"+accessYearList[i].id+"'>"+accessYearList[i].accessYear+"</option>");
					}
				}
				//1 开始
				//查询学院option
				var accessId = $("#scene_year_select").val();
			    $("#scene_academy_select").empty();
			    $("#scene_academy_select").append("<option value='0'>--请选择--</option>");
			    $("#scene_specialty_select").empty();
			    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
				if(accessId==0){
					return;
				}
				$.ajax({
					url:'/audit/examineScene/sceneAccessSpecialty.do',
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
					    $("#scene_academy_select").empty();
					    $("#scene_academy_select").append("<option value='0'>--请选择--</option>");
						for(var i=0;i<result.length;i++){
							$("#scene_academy_select").append("<option value='"+result[i].academyId+"' "+(i==0?'selected':'')+">"+result[i].academyName+"</option>");
						}
						//2 开始
						//查询专业的option
						var accessId = $("#scene_year_select").val();
						var academyId = $("#scene_academy_select").val();
					    $("#scene_specialty_select").empty();
					    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
						if(academyId==0){
							return;
						}
						$.ajax({
							url:'/audit/examineScene/sceneAccessSpecialty.do',
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
							    $("#scene_specialty_select").empty();
							    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
								for(var i=0;i<result.length;i++){
									$("#scene_specialty_select").append("<option value='"+result[i].specialtyId+"' "+(i==0?'selected':'')+">"+result[i].specialtyName+"</option>");
								}
								//3 开始
								queryScene();
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
				// 1结束
			},
			error:function(){
				alert("系统繁忙，请稍后重试！");
			}
		});
	}
});
function backUser(){//现场考查返回按钮所有函数
	var xckcYearId = $("#xckcYearId").val();
	var xckcAcademyId = $("#xckcAcademyId").val();
	var xckcSpcialtyId = $("#xckcSpcialtyId").val();
	$.ajax({
		url:'/audit/examineScene/sceneAccessYear.do',
		type:'POST',
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessYearList = dataObj.data.accessYearList;
			for(var i=0;i<accessYearList.length;i++){
				$("#scene_year_select").append("<option value='"+accessYearList[i].id+"' "+(xckcYearId==accessYearList[i].id?'selected':"")+">"+accessYearList[i].accessYear+"</option>");
			}
			//1 开始
			var accessId = $("#scene_year_select").val();
		    $("#scene_academy_select").empty();
		    $("#scene_academy_select").append("<option value='0'>--请选择--</option>");
		    $("#scene_specialty_select").empty();
		    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
			if(accessId==0){
				return;
			}
			$.ajax({
				url:'/audit/examineScene/sceneAccessSpecialty.do',
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
				    $("#scene_academy_select").empty();
				    $("#scene_academy_select").append("<option value='0'>--请选择--</option>");
					for(var i=0;i<result.length;i++){
						$("#scene_academy_select").append("<option value='"+result[i].academyId+"' "+(xckcAcademyId==result[i].academyId?'selected':'')+">"+result[i].academyName+"</option>");
					}
					//2 开始
					var accessId = $("#scene_year_select").val();
					var academyId = $("#scene_academy_select").val();
				    $("#scene_specialty_select").empty();
				    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
					if(academyId==0){
						return;
					}
					$.ajax({
						url:'/audit/examineScene/sceneAccessSpecialty.do',
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
						    $("#scene_specialty_select").empty();
						    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
							for(var i=0;i<result.length;i++){
								$("#scene_specialty_select").append("<option value='"+result[i].specialtyId+"' "+(xckcSpcialtyId==result[i].specialtyId?'selected':'')+">"+result[i].specialtyName+"</option>");
							}
							//3 开始
							queryScene();
							//3 结束
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
}
function getYearOption(){
	$.ajax({
		url:'/audit/examineScene/sceneAccessYear.do',
		type:'POST',
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessYearList = dataObj.data.accessYearList;
			for(var i=0;i<accessYearList.length;i++){
				$("#scene_year_select").append("<option value='"+accessYearList[i].id+"'>"+accessYearList[i].accessYear+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function getAcademyOption(){//查询学院option
	var accessId = $("#scene_year_select").val();
	
	//设置当前年份
	var year = $("#scene_year_select option:selected").text();
	document.cookie="assessYear="+year+";path=/";
	
    $("#scene_academy_select").empty();
    $("#scene_academy_select").append("<option value='0'>--请选择--</option>");
    $("#scene_specialty_select").empty();
    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
	if(accessId==0){
		return;
	}
	$.ajax({
		url:'/audit/examineScene/sceneAccessSpecialty.do',
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
		    $("#scene_academy_select").empty();
		    $("#scene_academy_select").append("<option value='0'>--请选择--</option>");
			for(var i=0;i<result.length;i++){
				$("#scene_academy_select").append("<option value='"+result[i].academyId+"'>"+result[i].academyName+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function getSpecialtyOption(){//查询专业的option
	var accessId = $("#scene_year_select").val();
	var academyId = $("#scene_academy_select").val();
    $("#scene_specialty_select").empty();
    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
	if(academyId==0){
		return;
	}
	$.ajax({
		url:'/audit/examineScene/sceneAccessSpecialty.do',
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
		    $("#scene_specialty_select").empty();
		    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
			for(var i=0;i<result.length;i++){
				$("#scene_specialty_select").append("<option value='"+result[i].specialtyId+"'>"+result[i].specialtyName+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function queryScene(){//查询工作日程表
	var accessId = $("#scene_year_select").val();
	var academyId = $("#scene_academy_select").val();
	var specialtyId = $("#scene_specialty_select").val();
	if(accessId==0){
	    $("#scene_academy_select").empty();
	    $("#scene_academy_select").append("<option value='0'>--请选择--</option>");
		return;
	}
	if(academyId==0){
	    $("#scene_specialty_select").empty();
	    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");
		return;
	}
	if(specialtyId==0){
	    /*$("#scene_specialty_select").empty();
	    $("#scene_specialty_select").append("<option value='0'>--请选择--</option>");*/
		//$("#myModal").attr("aria-hidden",true);
		return;
	}
	$.ajax({//获得评估专业表信息
		url:'/audit/examineScene/sceneAccessSpecialty.do',
		type:'POST',
		data:{"accessId":accessId,"academyId":academyId,"specialtyId":specialtyId},
		dataType : "json",
		async:false,
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessSpecialtyList = dataObj.data.accessSpecialtyList;
			$("#sceneTaskForm").append("<input id='accessSpecialtyId' name='accessSpecialtyId' type='hidden' value='"+accessSpecialtyList[0].id+"'/>");
		    $("#sceneTaskTable tbody tr td:first").append("<input type='hidden' name='accessSpecialtyId' value='"+accessSpecialtyList[0].id+"'/>");
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
			$("#expertId0").append("<option value='0' selected=\"selected\">-请选择-</option>");
			for(var i=0;i<accessUser.length;i++){
				$("#expertId0").append("<option value='"+accessUser[i].userId+"'>"+accessUser[i].userName+"</option>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
	$.ajax({//查询现场考查内容
		url:'/audit/examineScene/sceneExamineScene.do',
		type:'POST',
		data:{"accessId":accessId,"academyId":academyId,"specialtyId":specialtyId},
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var dataArray =  dataObj.data.AsAccessExamineSceneVo;
			$("#sceneDataTable tbody").empty();
			if(dataArray.length==0){
				$("#sceneDataTable tbody").append("<tr><td colspan=6 style='text-align:center;color:red;'>暂无数据</td></tr>");
			}
			for(var i=0;i<dataArray.length;i++){
				$("#sceneDataTable tbody").append("<tr>" +
						"<td taskId="+dataArray[i].id+" '>"+(i+1)+"</td>" +
						"<td>"+dataArray[i].showSTime.substring(0,19)+"</td>" +
						"<td>"+dataArray[i].showETime.substring(0,19)+"</td>" +
						"<td style='overflow: hidden;text-overflow:ellipsis;white-space:nowrap;' inspectTypeId='"+dataArray[i].inspectTypeId+"' title='"+dataArray[i].inspectTypeName+"'>"+dataArray[i].inspectTypeName+"</td>" +
						"<td zvalue='"+dataArray[i].expertId+"'>"+dataArray[i].expertName+"</td>" +
						//"<td style='overflow: hidden;text-overflow:ellipsis;white-space:nowrap;' title='"+dataArray[i].inspectContent+"'>"+dataArray[i].inspectContent+"</td>"+
						"<td>" +
						    "<span class='glyphicon glyphicon-log-in glyphicon-1-znj' title='进入现场考查' onclick='enterRecord(this);'></span>"+
						    "&nbsp;&nbsp;&nbsp;" +
							"<span class='glyphicon glyphicon-edit glyphicon-1-znj' onclick='openUpdateDiv(this)'></span>" +
							"&nbsp;&nbsp;" +
							"<span class='glyphicon glyphicon-trash glyphicon-2-znj' onclick='delSceneTask("+dataArray[i].id+");'></span>" +
						"</td>" +
				"</tr>");
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
	getInspectType();
}
function openTypeDiv(v){//打开考查方式选择界面
	$("#myModal3").modal('show');// 展现考查方式界面
	$('#myModal3').modal({backdrop: 'static', keyboard: false});
	var trid =  $(v).parent().parent().attr("id");
	var mms = $(v).parent().find("input[name=inspectTypeId]").val();
	$("#radios"+mms).attr("checked","true");
	$("#myModal3 input[name = inspectTypeName]").val(trid);
}
function closeMyModal3(){
	var trid = $("#myModal3 input[name = inspectTypeName]").val();
	$("#myModal3 input[name = optionsRadios]:checked").val();
	$("#myModal3 input[name = optionsRadios]:checked").attr("ztext");
	var selectId  = $("#myModal3 input[name = optionsRadios]:checked").val();
	var selectText =  $("#myModal3 input[name = optionsRadios]:checked").attr("ztext");
	$("#"+trid).children(":nth-child(3)").find("input:first").val(selectText);
	var str = "<input type='hidden' name='inspectTypeId' value='"+selectId+"'/>";
	$("#"+trid).children(":nth-child(3)").find("input[type=hidden]").remove();
	$("#"+trid).children(":nth-child(3)").append(str);
	$('#myModal3').modal('hide');
}
function getInspectType(){//加载考查方式时调用
	$.ajax({
		type:'post',
		url:'/audit/examineScene/sceneGetCodeType.do',
		data:{"inspectTypeId":"inspect_type"},
		dataType:'json',
		success:function(result){
			var resultList = eval("("+result+")");
			var sceneType = resultList.data.asAccessSystemCode;
				var str = "";
				$("#sceneTypeId").html('');
				for(var i=0;i<sceneType.length;i++){
					str +="<label style='padding-right:76px;' onclick='closeMyModal3();'>"
						+"<input type='radio' name='optionsRadios' ztext='"+sceneType[i].codeValueName+"' id='radios"+sceneType[i].id+"' value='"+sceneType[i].id+"'>"
				        +sceneType[i].codeValueName
				        +"</label>"
				}
				$("#sceneTypeId").append(str);
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function insertSceneTasks(){//向数据库插入新增的工作日程内容
	var inspectStartTimes = $("#sceneTaskTable input[name = inspectStartTime]");
	var StartTimes = false;
	var inspectEndTimes =$("#sceneTaskTable input[name = inspectEndTime]");
	var EndTimes = false;
	var inspectTypeNames = $("#sceneTaskTable input[name = inspectTypeName]");
	var TypeNames = false;
	//var inspectExpertIds = $("#sceneTaskTable select[name = expertId]");
	//var expertIds = false;
	for(var i=0;i<inspectStartTimes.length;i++){
		if(inspectStartTimes[i].value==""){
		    StartTimes = true;
		}
	}
	if(StartTimes){
		alert("开始时间不能为空！");
		return;
	}
	for(var i=0;i<inspectEndTimes.length;i++){
		if(inspectEndTimes[i].value==""){
		    EndTimes = true;
		}
	}
	if(EndTimes){
		alert("结束时间不能为空！");
		return;
	}
	for(var i=0;i<inspectTypeNames.length;i++){
		if(inspectTypeNames[i].value==""){
			TypeNames = true;
		}
	}
	if(TypeNames){
		alert("考查方式不能为空！");
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
	var uploadData =$("#sceneTaskForm").serialize();
	$.ajax({
		type:'post',
		url:'/audit/examineScene/sceneInsertSceneTasks.do',
		data:uploadData,
		dataType:'json',
		success:function(result){
			alert("成功插入："+result+"条数据！");
			$('#myModal').modal('hide');
			queryScene();
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function openAddDiv(){//打开新增界面时触发
	var accessId = $("#scene_year_select").val();
	var academyId = $("#scene_academy_select").val();
	var specialtyId = $("#scene_specialty_select").val();
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
function addTaskTr(){//在新增界面上添加任务
	var len = $("#sceneTaskTable tbody tr").length;
	var accessSpecialtyId = $("#accessSpecialtyId").val();//评估专业id
	var str = "<tr id='ztr"+len+"'>" +
	"<td><input type='text' name='inspectStartTime' onclick='WdatePicker({dateFmt:\"yyyy-MM-dd HH:mm:ss\"});' class='form-control' placeholder='点击选择开始时间' readonly></td>" +
	"<td><input type='text' name='inspectEndTime' onclick='WdatePicker({dateFmt:\"yyyy-MM-dd HH:mm:ss\"});' class='form-control' placeholder='点击选择结束时间' readonly></td>" +
	"<td class='td-bnt-znj'><input type='text' style='display:inline-block;width:80%;' name='inspectTypeName' class='form-control' placeholder='请点击后边按钮选择' readonly>&nbsp;&nbsp;<span onclick='openTypeDiv(this);' title='选择考查方式' class='glyphicon glyphicon-comment glyphicon-2-znj' ></span></td>" +
	"<td>" +
		"<select class='form-control' name='expertId' id='expertId"+len+"'>" +
		"</select>" +
	"</td>" +
	//"<td><input type='text' name='inspectContent' class='form-control' placeholder='' /></td>" +
	"<td class='td-bnt-znj'>" +
		"<span  class='glyphicon glyphicon-plus glyphicon-2-znj' onclick='addTaskTr();'></span>" +
		"&nbsp;<span  class='glyphicon glyphicon-minus glyphicon-2-znj'  onclick='delTaskTr("+len+");'></span>" +
	"</td>" +
"</tr>" ;
	$("#sceneTaskTable tbody").append(str);
	$("#expertId"+len).html($("#expertId0 option").clone(true));
}
function delTaskTr(v){//删除本行节点
	$("#ztr"+v).remove();
}
function delSceneTask(id){//根据id删除现场考查任务
	  if(!confirm("确定要删除数据吗？")){
		    return;
	  }
	$.ajax({
		url:'/audit/examineScene/sceneDeleteSceneTasks.do',
		type:'post',
		data:{"ids":id},
	    dataType:'json',
	    success:function(result){
	    	alert("成功删除："+result+"条数据！");
	    	queryScene();
	    },
	    error:function(){
	    	alert("系统繁忙，请稍后重试！");
	    }
	});
}
function openUpdateDiv(v){//打开修改时的界面
	$("#myModal2").modal('show');
	$("#sceneTaskTable2 tbody").empty();
	var accessSpecialtyId = $("#accessSpecialtyId").val();//评估专业id
	var str = "<tr id='tr0'>" +
	"<td><input type='text' name='inspectStartTime' onclick='WdatePicker({dateFmt:\"yyyy-MM-dd HH:mm:ss\"});' class='form-control' placeholder='点击选择开始时间' value='"+$(v).parent().parent().children(":nth-child(2)").text()+"' readonly></td>" +
	"<td><input type='text' name='inspectEndTime' onclick='WdatePicker({dateFmt:\"yyyy-MM-dd HH:mm:ss\"});' class='form-control' placeholder='点击选择结束时间' value='"+$(v).parent().parent().children(":nth-child(3)").text()+"' readonly></td>" +
	"<td class='td-bnt-znj'>" +
	     "<input type='text' style='display:inline-block;width:80%;' name='inspectTypeName' class='form-control' placeholder='请点击后边按钮选择' value='"+$(v).parent().parent().children(":nth-child(4)").text()+"' readonly>&nbsp;&nbsp;" +
	     "<span onclick='openTypeDiv(this);' title='选择考查方式' class='glyphicon glyphicon-comment glyphicon-2-znj' ></span>" +
	     "<input type='hidden' name='inspectTypeId' value='"+$(v).parent().parent().children(":nth-child(4)").attr("inspecttypeid")+"'/>" +
	"</td>" +
	"<td>" +
		"<select class='form-control' name='expertId' id='upExpertId'>" +
		    "<option value='0'>-请选择-</option>" +
		"</select>" +
	"</td>" +
	//"<td><input type='text' name='inspectContent' class='form-control' placeholder='' /></td>" +
	"<input type='hidden' name='id' value='"+$(v).parent().parent().children(":nth-child(1)").attr("taskid")+"'/>"+
	//"<input type='hidden' name='accessSpecialtyId' value='"+accessSpecialtyId+"'/>"+
	"</tr>" ;
	$("#sceneTaskTable2 tbody").append(str);
	var expertId = $(v).parent().parent().children(":nth-child(5)").attr("zvalue");
	$.ajax({//查询专业评估组成员id 
		url:'/audit/examineScene/sceneExamineExpert.do',
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
function updateSceneTask(){//修改日程表数据
	var inspectStartTimes = $("#sceneTaskTable2 input[name = inspectStartTime]");
	var StartTimes = false;
	var inspectEndTimes =$("#sceneTaskTable2 input[name = inspectEndTime]");
	var EndTimes = false;
	//var inspectExpertIds = $("#sceneTaskTable2 select[name = expertId]");
	//var expertIds = false;
	for(var i=0;i<inspectStartTimes.length;i++){
		if(inspectStartTimes[i].value==""){
		    StartTimes = true;
		}
	}
	if(StartTimes){
		alert("开始时间不能为空！");
		return;
	}
	for(var i=0;i<inspectEndTimes.length;i++){
		if(inspectEndTimes[i].value==""){
		    EndTimes = true;
		}
	}
	if(EndTimes){
		alert("结束时间不能为空！");
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
	var uploadData =$("#sceneTaskForm2").serialize();
	$.ajax({
		type:'post',
		url:'/audit/examineScene/sceneUpdateSceneTasks.do',
		data:uploadData,
		dataType:'json',
		success:function(result){
			alert("成功修改"+result+"条数据！");
			$("#sceneTaskTable2 tbody").empty();
			$('#myModal2').modal('hide');
			queryScene();
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function enterRecord(v){//进入现场考查界面
	var accessYear = $("#scene_year_select").find("option:selected").text();
	var accessYearId=$("#scene_year_select").find("option:selected").val();
	var accessAcademy = $("#scene_academy_select").find("option:selected").text();
	var accessAcademyId = $("#scene_academy_select").find("option:selected").val();
	var accessSpcialty = $("#scene_specialty_select").find("option:selected").text();
	var accessSpcialtyId = $("#scene_specialty_select").find("option:selected").val();
	var sceneId = $(v).parent().parent().children(":nth-child(1)").attr("taskid");
	var inspectTypeId = $(v).parent().parent().children(":nth-child(4)").attr("inspectTypeId");
	var inspectTypeName = $(v).parent().parent().children(":nth-child(4)").text();
	var inspectStartTime = $(v).parent().parent().children(":nth-child(2)").text();
	var inspectEndTime = $(v).parent().parent().children(":nth-child(3)").text();
	window.location.href = "/audit/examineScene/sceneInspectType.do?" +
			"accessYear="+accessYear+"&accessAcademy="+accessAcademy+"&accessSpcialty="+accessSpcialty+
			"&accessYearId="+accessYearId+"&accessAcademyId="+accessAcademyId+"&accessSpcialtyId="+accessSpcialtyId+
			"&sceneId="+sceneId+"&inspectTypeId="+inspectTypeId+"&inspectTypeName="+inspectTypeName+
			"&inspectStartTime="+inspectStartTime+"&inspectEndTime="+inspectEndTime;

}
