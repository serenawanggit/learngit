function closeDialog(){
	$("#addDialog").hide();
	$("#overlay").hide();
}
function showDiaLog(){
	$("#addDialog").show();
	$("#overlay").show();
}
function getYearAndOrg(){
	$.ajax({
		url:"/audit/dataMakeUpTask/getSearchQuery.do",
		type : "post",
		dataType : "json",
		async:false,
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			var years = data.data.yearList;
			for ( var i = 0; i < years.length; i++) {
				var year = years[i];
				var value =year.insert_version.substring(0,4);
				$("#year").append("<option value='"+value+"'>"+value+"</option>");
				$("#addYear").append("<option value='"+value+"'>"+value+"</option>");
			}
			
			var orgList = data.data.orgList;
			for ( var i = 0; i < orgList.length; i++) {
				var org = orgList[i];
				if(org == null){
					continue;
				}
				$("#org").append("<option value='"+org.DEPARTMENT_ID+"'>"+org.DEPARTMENT_NAME+"</option>");
			}
			var tempList = data.data.tempList;
			for ( var i = 0; i < tempList.length; i++) {
				var temp = tempList[i];
				if(temp == null){
					continue;
				}
				$("#addTemp").append("<option value='"+temp.id+"'>"+temp.standardTemplatename+"</option>");
			}
			getPage();
		}
	});
}
var taskList = new Array();
function getPage(){
	var currentPage = $("#currentPage").val();
	var syear = $("#year").val();
	var academeId = $("#org").val();
	$.ajax({
		url:"/audit/dataMakeUpTask/getListByQuery.do",
		data:{
			currentPage : currentPage,
			academeId :academeId,
			syear : syear
		},
		type : "post",
		dataType : "json",
		async:false,
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			var page = data.data;
			var list = page.list;
			$("#taskList").html("");
			
			if(list == null || list.length == 0){
				var html ="<tr style='background-color:#FFF;color:#333333;font-size:12px;'>" +
						"<td nowrap='nowrap' style='width:160px;height:40px;border-top:#DADADA 1px solid;' align='center' colspan='6'>暂无数据</td></tr>";
				$("#taskList").append(html);
			}
			taskList = new Array();
			for ( var i = 0; i < list.length; i++) {
				var task = list[i];
				taskList.push(task);
				var html = "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>";
					html +="<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>"+task.SYEAR+"</td>";
					html +="<td nowrap='nowrap' style='width:110px;border-top:#DADADA 1px solid;' align='center'>"+task.name+"</td>";
					html +="<td nowrap='nowrap' style='width:110px;border-top:#DADADA 1px solid;' align='center'>"+task.tempName+"</td>";
					html +="<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+task.additional_user+"</td>";
					html +="<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+task.org_check_user+"</td>";
					html +="<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+task.col_check_user+"</td>";
					html +="<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>";
					html +="<a href='#' onclick='editTaskShow("+task.Id+");' value='1'>";
					html +="<img src='../../images/bj_icon.png' style='vertical-align:middle;' border='0'></a>";
					html +="<a href='#' onclick='deleteTask("+task.Id+");' value='10' style='margin-left: 10px;'>";
					html +="<img src='../../images/sc_icon.png' style='vertical-align:middle;border:0px;'></a></td></tr>";
				$("#taskList").append(html);
			}
			$("#pageNumer").html(page.currentPage+"/"+page.countPage+"页");
		 	$("#currentPage").val(page.currentPage);
		 	getOrg();
		}
	});
}

function findPageByMC(){
	getPage();
}
//跳转方法
function jumpToFirstPage(){
	$("#currentPage").val("1");
	getPage();
}
function jumpToNextPage(){
	var thisPage = parseInt($("#currentPage").val(),10);
	$("#currentPage").val(thisPage+1);
	getPage();
}
function jumpToPreviousPage(){
	var page;
	var thisPage = parseInt($("#currentPage").val(),10);
	if(thisPage != 1){
		page = thisPage-1;
	}else{
		page = 1;
	}
	$("#currentPage").val(page);
	getPage();
}
function jumpToPage(){
	var page = $("#pagenotext").val();
	if(page == ''){
		alert("请输入跳转页面后再点击跳转按钮");
		return;
	}
	$("#currentPage").val(page);
	getPage();
}
var orgList = new Array();
function getOrg(){
	$.ajax({
		url:"/audit/dataMakeUpTask/getOrg.do",
		type : "post",
		dataType : "json",
		async:false,
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			var list = data.data;
			for ( var i = 0; i < list.length; i++) {
				var org = list[i];
				orgList.push(org);
				
				$("#addOrg1").append("<option value='"+org.id+"'>"+org.name+"</option>");
				$("#addOrg4").append("<option value='"+org.id+"'>"+org.name+"</option>");
				$("#editOrg4").append("<option value='"+org.id+"'>"+org.name+"</option>");
			}
		}
	});
}

function getUser(org,id){
	var orgId = $("#"+org).val();
	$.ajax({
		url:"/audit/userinfoController/selectAllUserinfoByorid.do",
		data:{
			oraganizationId : orgId,
		},
		type : "post",
		dataType : "json",
		async:false,
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			if(id == "addOrg1"){
				$("#addUser2").html("<option value=''>--请选择人员--</option>");
				$("#addUser3").html("<option value=''>--请选择人员--</option>");
			}else{
				$("#"+id).html("<option value=''>--请选择人员--</option>");
			}
			for ( var i = 0; i < data.length; i++) {
				var user = data[i];
				if(id == "addOrg1"){
					$("#addUser3").append("<option value='"+user.id+"'>"+user.showname+"</option>");
					$("#addUser2").append("<option value='"+user.id+"'>"+user.showname+"</option>");
				}else{
					$("#"+id).append("<option value='"+user.id+"'>"+user.showname+"</option>");
				}
			}
		}
	});
}

function addTask(){
	var syear = $("#addYear").val();
	if(syear == ""){
		alert("请选择年份");
		return;
	}
	var academeId = $("#addOrg1").val();
	if(academeId == ""){
		alert("请选择学院");
		return;
	}
	for ( var i = 0; i < orgList.length; i++) {
		if(academeId == orgList[i].id){
			academeId = orgList[i].code;
		}
	}
	
	var additionalTemplateId = $("#addTemp").val();
	if(additionalTemplateId == ""){
		alert("请选择模板");
		return;
	}
	var additionalUserId = $("#addUser2").val();
	if(additionalUserId == ""){
		alert("请选择补录用户");
		return;
	}
	var orgCheckUserId = $("#addUser3").val();
	if(orgCheckUserId == ""){
		alert("请选择院级审核用户");
		return;
	}
	var colCheckUserId = $("#addUser4").val();
	if(colCheckUserId == ""){
		alert("请选择校级审核用户");
		return;
	}
	$.ajax({
		url:"/audit/dataMakeUpTask/addNewTask.do",
		data:{
			syear : syear,
			academeId : academeId,
			additionalUserId : additionalUserId,
			additionalTemplateId : additionalTemplateId,
			orgCheckUserId : orgCheckUserId,
			colCheckUserId : colCheckUserId
		},
		type : "post",
		dataType : "json",
		async:false,
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			if(data.ok){
				getPage();
				closeDialog();
			}else{
				alert(data.comment);
			}
			
		}
	});
}

function deleteTask(id){
	var flag = confirm("确认删除任务？");
	if(!flag){
		return;
	}
	$.ajax({
		url:"/audit/dataMakeUpTask/deleteTask.do",
		data:{
			id : id,
		},
		type : "post",
		dataType : "json",
		async:false,
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			if(data.ok){
				getPage();
			}
		}
	});
}

function editTaskShow(id){
	var orgName = "";
	for ( var i = 0; i < taskList.length; i++) {
		if(id == taskList[i].Id){
			$("#editYear").html("<option>"+taskList[i].SYEAR+"</option>");
			$("#editOrg1").html("<option>"+taskList[i].name+"</option>");
			orgName = taskList[i].name;
			$("#editTemp").html("<option>"+taskList[i].tempName+"</option>");
			$("#editId").val(id);
		}
	}
	for ( var i = 0; i < orgList.length; i++) {
		if(orgName == orgList[i].name){
			$("#editOrg").val(orgList[i].id);
			getUser("editOrg","editUser2");
			getUser("editOrg","editUser3");
		}
	}
	$("#editDialog").show();
	$("#overlay").show();
	
}

function closeEditDialog(){
	$("#editDialog").hide();
	$("#overlay").hide();
}

function editTask(){
	var id = $("#editId").val();
	var additionalUserId = $("#editUser2").val();
	if(additionalUserId == ""){
		alert("请选择补录用户");
		return;
	}
	var orgCheckUserId = $("#editUser3").val();
	if(orgCheckUserId == ""){
		alert("请选择院级审核用户");
		return;
	}
	var colCheckUserId = $("#editUser4").val();
	if(colCheckUserId == ""){
		alert("请选择校级审核用户");
		return;
	}
	$.ajax({
		url:"/audit/dataMakeUpTask/updateTask.do",
		data:{
			id : id,
			additionalUserId : additionalUserId,
			orgCheckUserId : orgCheckUserId,
			colCheckUserId : colCheckUserId
		},
		type : "post",
		dataType : "json",
		async:false,
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			if(data.ok){
				getPage();
				closeEditDialog();
			}else{
				alert(data.comment);
			}
		}
	});
}