var nowDetailId = 0;
var scoreList = new Array();
function closeDialog(){
	$("#addDialog").hide();
	$("#overlay").hide();
	$("#fileName").val("");
	$("#fileList").html("");
}
function showDiaLog(){
	$("#addDialog").show();
	$("#overlay").show();
	searchFile();
}
function searchFile(){
	$("#fileList").empty();
	var name = $("#fileName").val();
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
		 	var unCheckedBoxs = $("input[name='file']").not("input:checked");  
		 	for ( var i=0;i<unCheckedBoxs.length;i++) {
		 		var unCheckedBox = unCheckedBoxs[i];
		 		unCheckedBox.parentElement.remove();
		 	}
		 	
		 	var checkBoxs = $("#fileList li input:checked");
		 	var count =0;
		 	for ( var i=0;i<list.length;i++) {
		 		if(count >= 7){
		 			break;
		 		}
		 		var index = list[i];
		 		var flag =false;
		 		for (var j=0;j<checkBoxs.length;j++) {
			 		var checkedBox = checkBoxs[j];
			 		if(index.id == checkedBox.value){
			 			flag = true;
			 		}
			 	}
		 		if(flag){
		 			continue;
		 		}
				var html ="<li class='dialog_list_ul_li'> ";
				html+="<input type='checkbox' style='margin-right: 10px;' value='"+index.id+","+index.name+"' name='file'/>"+index.name+"</li>";
				$("#fileList").append(html);
				count +=1;
			}
		 }
	 });
}
var fileIds = "";
function addFile(){
	var checkBoxs = $("#fileList li input:checked");
	for (var j=0;j<checkBoxs.length;j++) {
 		var checkedBox = checkBoxs[j];
 		var values = checkedBox.value.split(",");
 		var flag= true;
 		var dataIds = fileIds.split(",");
 		for(var i=0;i<dataIds.length;i++){
 			var dataId = dataIds[i];
 			if(values[0] == dataId){
 				flag = false;
 			}
 		}
 		if(flag){
 			var html ="<li id='file_"+values[0]+"'><a onclick='showOnline("+values[0]+")' href='javascript:void(0);'>"+values[1]+"</a><a onclick='deleteFile("+values[0]+")' href='javascript:void(0);'><img src='/audit/img/majorEvaluation/shuanchu.png'/></a></li>";
	 		$("#dataList").append(html);
	 		fileIds = fileIds+values[0] + ",";
 		}
 	}
 	$("#addDialog").hide();
	$("#overlay").hide();
	$("#fileName").val("");
	$("#fileList").html("");
	saveScore();
}

function showOnline(id){
	
	$.ajax({
		url:"/audit/self/onlinePreview.do",
		data : {
			id : id
		},
		type : "post",
		dataType : "json",
		error:function(){
			$("#imageDiv").hide();
			 alert("网络异常，请重试");
		},
		success:function(data){
			
			if(data != "error"){
				$("#imageDiv").hide();
				window.open("preview.do?wj="+data);
			}else{
				alert("该文件此处不能浏览");
			}
			
		}
	});
}

function deleteFile(id){
	var dataIds = fileIds.split(",");
	fileIds = "";
	for(var i=0;i<dataIds.length;i++){
		var dataId = dataIds[i];
		if(dataId ==""){
			continue;
		}
		if(id != dataId){
			fileIds = dataId+ ",";
		}
	}
	$("#file_"+id).remove();
	saveScore();
}

var scaleRecords = new Array();
var scoreScales = new Array();
function resetScore(id){
	var score = $("#scaleRecord_"+id).val();
	if(isNaN(score)){
	   alert("请输入数字");
	   $("#scaleRecord_"+id).val("0");
	   return;
	}
	var allScore = 0;
	for ( var i = 0; i < scaleRecords.length; i++) {
		var record = scaleRecords[i];
		if(record.scaleId == id){
			for ( var j = 0; j < scoreScales.length; j++) {
				var scale = scoreScales[j];
				if(record.scaleId == scale.id){
					if(score > scale.score){
						alert("评分大于总分，请重新输入");
						return;
					}
				}
			}
			record.score = score;
		}
		allScore = Number((allScore+parseFloat(record.score)).toFixed(2));
	}
	$("#selfScore").val(allScore);
	saveScore();
}

function saveScore(){
	var score = $("#selfScore").val();
	if(score ==""){
		return;
	}
	
	if(isNaN(score)){
	   alert("请输入数字");
	   return;
	}
	
	var specialtyId = $("#specialtyList").val();
	if(nowDetailId == 0){
		return;
	}
	
	for ( var j = 0; j < scoreList.length; j++) {
		var record = scoreList[j];
		if(record.id == nowDetailId){
			if(record.score < score){
				alert("分数大于总分,请重评");
				return;
			}
		}
	}
	
	var data = "detailId="+nowDetailId+"&specialtyId="+specialtyId+"&score="+score+"&dataIds="+fileIds+"&str="+JSON.stringify(scaleRecords);
	fileIds = "";
	$.ajax({
		url:"/audit/self/saveSelfScore.do",
		data : data,
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
			var map = data.data;
			var detailIdList = map.detailIdList;
			var scoreList = map.scoreList;
			for(var i=0;i<detailIdList.length;i++){
				var detailId = detailIdList[i];
				$("#real_"+detailId).html(scoreList[i]);
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
		year = $("#yearList").val();
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
			//体系
			var standardList = data.data.standardList;
			standards = new Array();
			for(var i=0;i<standardList.length;i++){
				var standard = standardList[i];
				standards.push(standard);
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
			$("#days").html(specialty.surplusDay+"天");
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
	getStandard(0,null,1);
}

var standarddetails = new Array();
var firstListNum = 1;

function getStandard(parentId,name,level){
	var standardId = $("#standardList").val();
	var calculateType =0;
	for(var i=0;i<standards.length;i++){
		var standard = standards[i];
		if(standard.id == standardId){
			calculateType = standard.calculateType;
		}
	}
	
	if(parentId == 0){
 		$("#leftDiv").html("");
 		standarddetails = new Array();
 		firstListNum =1;
	}
	
	var flag = false;
	for(var i=0;i<standarddetails.length;i++){
		var standardDetail = standarddetails[i];
		if(standardDetail.id == parentId){
			flag = true;
			reset(parentId);
		}
	}
	if(!flag){
		var standardDetail = {};
		standardDetail.id = parentId;
		standarddetails.push(standardDetail);
	}
	
	var specialtyId = $("#specialtyList").val();
	$.ajax({
		url:"/audit/self/getAssessStandardDetail.do",
		data:"standardId="+standardId+"&parentId="+parentId+"&specialtyId="+specialtyId,
		dataType:"json",
		type : "post",
		error:function(){
			alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			
			if(!data.ok){
				getScoreMessage(parentId);
				$(".index_tree li[class=tree_checked]").attr("class","");
				$("#standard_"+parentId).parent().attr("class","tree_checked");
				return;
			}
			var list = data.data.list;
			if(list.length == 0){
				getScoreMessage(parentId);
				$(".index_tree li[class=tree_checked]").attr("class","");
				$("#standard_"+parentId).parent().attr("class","tree_checked");
				return;
			}
			if(flag){
				return;
			}
			
			for(var i=0;i<list.length;i++){
				var standard = list[i];
				
				var calculate_type="分";
				if(standard.calculate_type == 1){
					calculate_type ="%";
				}
				if(standard.realScore == null){
					standard.realScore=0;
				}
				var html = "";
				if(standard.parentId == 0 &&standard.isLast != 1){
					html = "<ul class='index_tree'><li><div id='standard_"+standard.id+"' class='tree_head tree_head_back'>";
					html += "<div class='tree_icon'><img class='right' src='/audit/img/majorEvaluation/xiangyou.png'></img></div>";		
					html += "<div class='tree_text' title='"+firstListNum+"."+standard.name+"（"+standard.score+calculate_type+"' onclick='getStandard("+standard.id+",\""+standard.name+"\","+(level+1)+")'>"+firstListNum+"."+standard.name+"（"+standard.score+calculate_type+"）</div>";
					html += "<div class='tree_score' id='real_"+standard.id+"'>"+standard.realScore+"</div></div></li></ul>";	
					firstListNum +=1;
				}else if(standard.parentId != 0 &&standard.isLast != 1){
					html = "<ul class='index_tree' name='parent_"+parentId+"'><li><div class='tree_head' id='standard_"+standard.id+"' >";
					html += "<div class='tree_icon'><img class='right' src='/audit/img/majorEvaluation/xiangyou.png'></img></div>";
					html += "<div class='tree_text' title='"+firstListNum+"."+standard.name+"（"+standard.score+calculate_type+"' onclick='getStandard("+standard.id+",\""+standard.name+"\","+(level+1)+")'>"+(i+1)+"."+standard.name+"（"+standard.score+"分）</div>";
					html += "<div class='tree_score' id='real_"+standard.id+"'>"+standard.realScore+"</div></div></li></ul>";
				}else{
					html = "<ul class='index_tree' name='parent_"+parentId+"'><li><div class='tree_head' id='standard_"+standard.id+"' >";
					html += "<div class='tree_icon'></div>";
					html += "<div class='tree_text' title='"+firstListNum+"."+standard.name+"（"+standard.score+calculate_type+"' onclick='getStandard("+standard.id+",\""+standard.name+"\","+(level+1)+")'>"+(i+1)+"."+standard.name+"（"+standard.score+"分）</div>";
					html += "<div class='tree_score' id='real_"+standard.id+"'>"+standard.realScore+"</div></div></li></ul>";
				
					var isExist = false;
					for ( var j = 0; j < scoreList.length; j++) {
						var record = scoreList[j];
						if(record.id == standard.id){
							isExist = true;
						}
					}
					if(!isExist){
						var record = {};
						record.id = standard.id;
						record.score = standard.score;
						scoreList.push(record);
					}
				}
				if(parentId == 0){
 					$("#leftDiv").append(html);
				}else{
					$("#standard_"+parentId).parent().append(html);
				}
			}
			reset(parentId);
		}
	});
}
function getScoreMessage(detailId){
	var specialtyId = $("#specialtyList").val();
	var year = $("#yearList").val();
	nowDetailId = detailId;
	$.ajax({
		url:"/audit/self/getAllStandardByDetail.do",
		data:"detailId="+detailId+"&specialtyId="+specialtyId+"&year="+year,
		dataType:"json",
		type : "post",
		error:function(){
			alert("网络异常，请重试");
		},
		success:function(dataString){
			var data = eval("("+dataString+")");
			if(data.ok){
				//清空数据
				$("#scoreStandard").html("");
				$("#scoreScaleList").html("");
				$("#indexList").html("");
				$("#statusList").html("");
				$("#selfScore").val("");
				$("#dataList").html("");
			
				//评分标准
				var scoreStandard = data.data.scoreStandard;
				if(scoreStandard != null){
					$("#scoreStandard").html(scoreStandard.content);
				}
				
				//评分量表
				var scoreScaleList = data.data.scoreScale;
				var scaleRecordList = data.data.scaleRecordList;
				scaleRecords = scaleRecordList;
				scoreScales = scoreScaleList;
				for ( var i= 0;i<scoreScaleList.length;i++) {
					var scoreScale = scoreScaleList[i];
					var html = "<ul><li class='li-content-1'>"+scoreScale.scaleRemark+"</li>";
					html += "<li class='li-content-2'><input onchange='resetScore("+scaleRecordList[i].scaleId+")' id='scaleRecord_"+scaleRecordList[i].scaleId+"' type='text' value='"+scaleRecordList[i].score+"' placeholder='评分' /> </li></ul>";
					$("#scoreScaleList").append(html);
				}
				//量化指标
				var indexList = data.data.indexList;
				for (var i= 0;i<indexList.length;i++) {
					var index = indexList[i];
					var html = index.MEASURE_NAME+"<br/>";
					$("#indexList").append(html);
				}
				//状态数据
				var statusList = data.data.statusList;
				for (var i= 0;i<statusList.length;i++) {
					var status = statusList[i];
					var html = status.name+":"+status.zbValue+"<br/>";
					$("#statusList").append(html);
				}
				var record = data.data.record;
				if(record != null){
					$("#selfScore").val(record.score);
				}
				var dataList = data.data.dataList;
				fileIds = "";
				if(dataList != null){
					for (var i= 0;i<dataList.length;i++) {
						var data = dataList[i];
						if(data != null){
							fileIds +=data.id+",";
							var html ="<li id='file_"+data.id+"'><a onclick='showOnline("+data.id+")' href='javascript:void(0);'>"+data.name+"</a><a onclick='deleteFile("+data.id+")' href='javascript:void(0);'><img src='/audit/img/majorEvaluation/shuanchu.png'/></a></li>";
							$("#dataList").append(html);
						}
					}
				}
			}
		}
	});
}

function reset(parentId){
	var key = $("#standard_"+parentId).find("div img").attr("class");
	if(key == "down"){
		$("#standard_"+parentId).parent().find("ul[name=parent_"+parentId+"]").slideUp();
		$("#standard_"+parentId).find("div img").attr("class","right");
		$("#standard_"+parentId).find("div img").attr("src","/audit/img/majorEvaluation/xiangyou.png");
	}else{
		$("#standard_"+parentId).parent().find("ul[name=parent_"+parentId+"]").slideDown();
		$("#standard_"+parentId).find("div img").attr("class","down");
		$("#standard_"+parentId).find("div img").attr("src","/audit/img/majorEvaluation/xiangxia.png");
	}
}