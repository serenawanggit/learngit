function changeStatus(){
	var id = $("#specialtyList").val();
	if(id == ""){
		return;
	}
	var name=$("#specialtyList").find("option:selected").text();
	var flag = confirm("确认将自评专业："+name+",修改为已完成？");
	if(!flag){
		return;
	}
	$.ajax({
		url:"/audit/self/changeStatus.do",
		data :{
			id : id,
			type : "1"
		},
		type : "post",
		dataType : "json",
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			if(dataString == "success"){
				alert("自评专业："+name+",已修改为已完成");
				return;
			}
		}
	});
}

function getUserGroup(year){
	$.ajax({
		url:"/audit/self/getUserGroup.do",
		data : "year="+year,
		type : "post",
		dataType : "json",
		error:function(){
			 alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			var list = data.data;
			$("#orgList").html("");
			for ( var i = 0; i < list.length; i++) {
				var org = list[i];
				var html = "<option value='"+org.academy_id+"'>"+org.academy_name+"</option>";
				$("#orgList").append(html);
			}
			getSpecialty(year);
			//设置年份
			document.cookie="assessYear="+year+";path=/";
		}
	});
}

//专业
var specialtys = new Array();
//体系
var standards = new Array();
function getSpecialty(year){
	if(year == null){
		year =$("#yearList").val();
	}
	var org = $("#orgList").val();
     $.ajax({
           url:"/audit/self/getAssessSpecialty.do",
	   	   data : {
				year : year,
				orgId : org
	   	   },
           type : "post",
           dataType : "json",
           error:function(){
                 alert("网络异常，请重试");
           },
           success:function(dataString){
                var data = eval("("+dataString+")");

                var organizationName = data.data.organizationName;
                $("#organizationName").html(organizationName);

                //专业
                var specialtyList = data.data.specialtyList;
                var html ="";
                $("#specialtyList").html("");
                for(var i=0;i<specialtyList.length;i++){
                     var specialty = specialtyList[i];
                     specialtys.push(specialty);
                     html ="<option class='main-top-option-one' value='"+specialty.id+"'>"+specialty.specialty_name+"</option>";
                     $("#specialtyList").append(html);
                }
                //年份
    			var infoList = data.data.infoList;
    			html ="";
    			$("#yearList").html("");
    			for(var i=0;i<infoList.length;i++){
    				var info = infoList[i];
    				if(info.accessYear == year){
    					html ="<option class='main-top-option-two' value='"+info.accessYear+"' selected='selected'>"+info.accessYear+"</option>";
    				}else{
    					html ="<option class='main-top-option-two' value='"+info.accessYear+"'>"+info.accessYear+"</option>";
    				}
    				
    				$("#yearList").append(html);
    			}
                
                standardRebuild(); 
           }
     });
}

function standardRebuild(){
	var specialtyId = $("#specialtyList").val();
	var standardId= null;
	for(var i=0;i<specialtys.length;i++){
		var specialty = specialtys[i];
		if(specialty.id == specialtyId){
			$("#times").html(specialty.start+"~"+specialty.end);
			$("#days").html(specialty.surplusDay);
			standardId = specialty.default_standart_id;
		}
	}
	
	$("#standardList").html("");
	for(var i=0;i<standards.length;i++){
		var standard = standards[i];
		var html ="";
		if(standard.id == standardId){
			html ="<option class='main-center-top-option' value='"+standard.id+"' selected='selected'>"+standard.name+"（指定）</option>";
		}else{
			html ="<option class='main-center-top-option' value='"+standard.id+"' >"+standard.name+"</option>";
		}
		$("#standardList").append(html);
	}
	getReport();
	
	
}
var parent="1";
function getReport(){
	var specialtyId = $("#specialtyList").val();
	nowId = "";
	reports = new Array();
	$("#title").val("");
	$("#menuList").html("");
	$.ajax({
		 url:"/audit/self/getReport.do",
		 data:"specialtyId="+specialtyId,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data;
		 	for(var i=0;i<list.length;i++){
		 		var report = list[i];
		 		if(report.parentId == 0){
		 			$("#title").val(report.content);
		 			getChild(list,report.id,0);
		 		}
		 	}
		 }
	});
}

function getChild(list,parentId,level){
	for(var i=0;i<list.length;i++){
 		var report = list[i];
 		if(report.parentId == parentId){
			var html="";
			html+="<ul class='index_tree' name='parent_list_"+parentId+"'><li >";
			html+="<div class='tree_head' id='list_" +report.id+ "'onmousedown='showRightMenu(this,event)' onclick='showContent(event)'>";
			html+="<div class='tree_icon' id='icon_"+report.id+"'></div>";
			html+="<div class='tree_text' id='listName_" +report.id+ "' >"+report.listName+"</div></div></li></ul>";

			var reportP = {};
			var specialtyId = $("#specialtyList").val();
			if(level == 0){
				$("#menuList").append(html);
				reportP.parentId = 1;
			}else{
				$("#icon_"+parentId).html("<img class='right' src='/audit/img/majorEvaluation/xiangyou.png'></img>");
				$("#list_"+parentId).parent().append(html);
				reportP.parentId = "list_"+parentId;
			}
			
			reportP.id = "list_"+report.id;
			reportP.content = report.content;
			reportP.listName = report.listName;
			reportP.specialtyId = specialtyId;
			reports.push(reportP);
			
			id = report.id+1;
			getChild(list,report.id,level+1);
			
			nowId = reportP.id;
			editor.html(report.content);
 		}
 	}
}


function searchIndex(){
	var name = $("#indexName").val();
	var data = "currentPage=1"+"&measureName="+name;
	$.ajax({
		 url:"/audit/self/getObjectiveIndicators.do",
		 data:data,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data.list;
		 	$("#indexList").html("");
		 	for ( var i=0;i<list.length;i++) {
		 		var index = list[i];
				var html ="<li class='right_list_style'> ";
				html+="<input type='checkbox' value='"+index.measureId+"_"+index.measureName+"' name='index' />"+index.measureName+"</li>";
				$("#indexList").append(html);
			}
		 }
	 });
}

function addIndex(){
	var specialtyId = $("#specialtyList").val();
	$('input:checkbox[name=index]:checked').each(function(i){
		var indexs = $(this).val().split("_");
		$.ajax({
			 url:"/audit/self/getIndexValue.do",
			 data:{
				 measureId:indexs[0],
				 specialtyId : specialtyId
			 },
			 type : "post",
			 dataType : "json",
			 async : false,
			 error:function(){
				 alert("网络异常，请重试");
			 },
			 success:function(dataString){
			 	var data = eval("("+dataString+")");
			 	if(data.ok){
			 		editor.insertHtml("<b>"+indexs[1]+"</b><c>("+data.data+"</c>)");
			 	}else{
			 		editor.insertHtml("<b>"+indexs[1]+"</b><c>(0</c>)");
			 	}
			 }
		 });
		
		
		
	});
}

function searchImg(){
	var name = $("#imgName").val();
	var data = "name="+name;
	$.ajax({
		 url:"/audit/self/getFileByName.do",
		 data:data,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data;
		 	$("#imgList").html("");
		 	var reg =/\.jpg$|\.jpeg$|\.gif$|\.png$/;
		 	var count =0;
		 	for ( var i=0;i<list.length;i++) {
		 		var index = list[i];
		 		var fileName = index.name+"."+index.dataType;
		 		if(!reg.test(index.name+"."+index.dataType)){
		 			continue;
		 		}
				var html ="<li class='right_list_style'> ";
				html+="<input type='checkbox' value='"+index.src+"' name='img'/>"+index.name+"</li>";
				$("#imgList").append(html);
				count +=1;
			}
		 }
	 });
}

function addImg(){
	$('input:checkbox[name=img]:checked').each(function(i){
		editor.insertHtml("<img src='"+$(this).val()+"'/>");
	});
}

var parentId="";
var id=0;
function deleteThis(id){
	$("#rightMenu").hide();
	if(id ==1){
		alert("请选择一个目录进行删除");
		return;
	}
	
	var isDelete = confirm("确认删除该目录？");
	if(!isDelete){
		return;
	}else{
		saveContent();
		$("#"+id).remove();
	}
	//数组中删除
	var newReport = new Array();
	for(var i=0;i<reports.length;i++){
		var report = reports[i];
		if(id != report.id){
			newReport.push(report);
		}else{
			nowId = report.parentId;
		}
	}
	reports = newReport;
	
	//目录前的小图标判断是否移除
	var flag = false;
	for(var i=0;i<reports.length;i++){
		var report = reports[i];
		if(nowId == report.parentId){
			flag = true;
		}
	}
	if(!flag){
		var ids = nowId.split("list_");
		$("#icon_"+ids[1]).html("");
	}
}

//新增的弹出层
function addChildView(id){
	$("#rightMenu").hide();
	$("#addDialog").show();
	$("#overlay").show();
	parentId = id;
	$("#parentListName").val("");
	if(parentId != 1){
		var parentName = $("#"+parentId+" .tree_text").html();
		$("#parentListName").val(parentName);
	}
}

//关闭新增的弹出层
function closeDialog(){
	$("#addDialog").hide();
	$("#overlay").hide();
}

//关闭编辑的弹出层
function closeEditDialog(){
	$("#editDialog").hide();
	$("#overlay").hide();
}

//编辑弹出层
var editId = "";
function editThis(id){
	$("#rightMenu").hide();
	if(id ==1){
		alert("请选择一个目录进行编辑");
		return;
	}

	$("#rightMenu").hide();
	$("#editDialog").show();
	$("#overlay").show();
	editId = id;
	var name = $("#"+editId+" .tree_text").html();
	$("#editListName").val(name);
}

//编辑操作
function editList(){
	var listName = $("#editListName").val();
	var id = editId.split("list_");
	$("#listName_"+id[1]).html(listName);
	$("#editDialog").hide();
	$("#overlay").hide();
	for(var i=0;i<reports.length;i++){
		var report = reports[i];
		if(editId == report.id){
			report.listName = listName;
		}
	}
}

var reports = new Array();
var nowId = "";

//新增子目录
function addChild(){
	var content = $("#listName").val();
	var html="";
	html+="<ul class='index_tree' name='parent_"+parentId+"'><li >";
	html+="<div class='tree_head' id='list_" +(id+1)+ "' onmousedown='showRightMenu(this,event)'>";
	html+="<div class='tree_icon' id='icon_"+(id+1)+"'></div>";
	html+="<div class='tree_text' id='listName_" +(id+1)+ "' onclick='showContent(event)'>"+content+"</div></div></li></ul>";
	
	

	if(parentId == "1"){
		$("#menuList").append(html);
	}else{
		var ids = parentId.split("list_");
		$("#icon_"+ids[1]).html("<img class='right' src='/audit/img/majorEvaluation/xiangyou.png'></img>");
		$("#"+parentId).parent().append(html);
	}
	$("#listName").val("");
	$("#addDialog").hide();
	$("#overlay").hide();
	id = id + 1;
	
	saveContent();
	
	//判断是否需要展开
	var flag = false;
	for(var i=0;i<reports.length;i++){
		var report = reports[i];
		if(parentId == report.parentId){
			flag = true;
		}
	}
	
	if(flag){
		var ids = parentId.split("list_");
		$("#icon_"+ids[1]).html("<img class='down' src='/audit/img/majorEvaluation/xiangxia.png'></img>");
		$("#"+parentId).parent().find("ul").slideDown();
	}else{
		upOrDown(parentId);
	}
	parent = parentId;
	nowId ="list_"+id;
	editor.html("");
}

function saveContent(){
	if(nowId !=''){
		var content = editor.html();
		var isExist = false;
		for(var i=0;i<reports.length;i++){
			var report = reports[i];
			if(nowId == report.id){
				report.content = content;
				report.listName = $("#"+nowId+" .tree_text").html();
				isExist = true;
			}
		}
		if(!isExist){
			var report = {};
			var specialtyId = $("#specialtyList").val();
			report.id = nowId;
			report.content = content;
			report.listName = $("#"+nowId+" .tree_text").html();
			report.specialtyId = specialtyId;
			report.parentId = parent;
			reports.push(report);
		}
	}
}

String.prototype.trim = function() {
	return this.replace(/(^\s*)|(\s*$)/g, "");
};

function showContent(event){
	if(nowId ==""){
		nowId ="list_"+id;
		return;
	}
	saveContent();
	
	nowId =	event.target.parentElement.id;
	
	var isExist = false;
	for(var i=0;i<reports.length;i++){
		var report = reports[i];
		if(nowId == report.id){
			editor.html(report.content.replaceAll("&nbsp;", " ",true).replaceAll("#and", "&",true));
			upOrDown(report.id);
			isExist = true;
		}
	}
	if(!isExist){
		editor.html("");
	}
}

function saveReport(){
	saveContent();
	var title=$("#title").val();
	if(title == ""){
		alert("请输入标题");
		return;
	}
	var isExist = false;
	for(var i=0;i<reports.length;i++){
		var report = reports[i];
		if(1 == report.id){
			isExist = true;
		}
	}
	if(!isExist){
		var report = {};
		var specialtyId = $("#specialtyList").val();
		report.id = 1;
		report.content = title.trim();
		report.listName = "title";
		report.specialtyId = specialtyId;
		report.parentId = 0;
		reports.push(report);
	}
	var data = encodeURI("str="+JSON.stringify(reports));
	$.ajax({
		 url:"/audit/self/saveReport.do",
		 data:data.replaceAll("&nbsp;", "#keng",true).replaceAll("&", "#and",true),
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	alert("保存成功");
		 	//window.location.reload();
		 }
	});
}

String.prototype.replaceAll = function(reallyDo, replaceWith, ignoreCase) {  
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {  
        return this.replace(new RegExp(reallyDo, (ignoreCase ? "gi": "g")), replaceWith);  
    } else {  
        return this.replace(reallyDo, replaceWith);  
    }  
};

function upOrDown(parentId){
	var key = $("#"+nowId).find("div img").attr("class");
	if(key == "down"){
		$("#"+nowId).parent().find("ul[name=parent_"+parentId+"]").slideUp();
		$("#"+nowId).find("div img").attr("class","right");
		$("#"+nowId).find("div img").attr("src","/audit/img/majorEvaluation/xiangyou.png");
	}else{
		$("#"+nowId).parent().find("ul[name=parent_"+parentId+"]").slideDown();
		$("#"+nowId).find("div img").attr("class","down");
		$("#"+nowId).find("div img").attr("src","/audit/img/majorEvaluation/xiangxia.png");
	}
}

function updateDate(){
	var specialtyId = $("#specialtyList").val();
	if(specialtyId == ""){
		return;
	}
	$.ajax({
		 url:"/audit/self/updateReportDate.do",
		 data:{
			 specialtyId : specialtyId
		 },
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 getReport();
			 alert("数据更新成功");
		 }
	});
}