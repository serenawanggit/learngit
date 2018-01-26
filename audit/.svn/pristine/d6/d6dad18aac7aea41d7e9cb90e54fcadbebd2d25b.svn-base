/*点击主题内容最上方按钮触发的界面切换操作*/
function button_click(obj,num) {
	var accessSpecialtyId = $("#spe").val();
	if(accessSpecialtyId == ""){
		alert("请先选择专业");
		return;
	}
	var obj = $(obj);
	var context = $('.main-bottom');
	if(num == 1){
		context.children("div").css("display", "none");
		var myDiv = $('.main-bottom-div1');
		myDiv.css("display", "block");
	}else if(num == 2){
		context.children("div").css("display", "none");
		var myDiv = $('.main-bottom-div2');
		myDiv.css("display", "block");
	}else if(num == 4){
		window.open("/audit/siteCheck/showRecord.do?id="+accessSpecialtyId);
	}else if(num == 3){
		context.children("div").css("display", "none");
		var myDiv = $('.main-bottom-div3');
		myDiv.css("display", "block");
		$('.main-bottom-div3').children("div").css("display", "none");
		$('.bottom-div3-div1').css("display", "block");
		$('.div3-table-td2').css("background-color", "#19C6A1");
		$('.div3-table-td2').css("color", "#ffffff");
		getReport();
	}else if(num == 5){
		window.open("/audit/siteCheck/exportRecord.do?id="+accessSpecialtyId);
	}
	
}

/* 专家组现场考察报告 按钮切换到的 界面 根据不同的操作切换操作界面的操作 */
var nowReportId = 0;
function table_td_click(obj, event) {
	var obj = $(obj);
	obj.parent("tr").children("td").css("background", "#EDEDED");
	obj.parent("tr").children("td").css("color", "#363636");
	obj.css("background-color", "#19C6A1");
	obj.css("color", "#ffffff");
	var myDiv = $('.bottom-div3-div1');
	myDiv.css("display", "block");
	event = arguments.callee.caller.arguments[0] || window.event;
	var id = event.target.id.split("report_");
	nowReportId = id[1];
	for ( var i = 0; i < reportArray.length; i++) {
		if(id[1] == reportArray[i].id){
			editor.html(reportArray[i].content);
		}
	}
}

//获取评估年度
function getYear(){
	$.ajax({
		 url:"/audit/examineScene/scheduleAccessYear.do",
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 var list = data.data.accessYearList;
			 
			 var nowYear = "";
			//获取年份
			 var strCookie = document.cookie;
			 var cookies = strCookie.split("; ");
			 for(var i=0;i<cookies.length;i++){
			 	var cookie = cookies[i];
			 	var details = cookie.split("=");
			 	if(details[0] == "assessYear"){
			 		nowYear = eval(details[1]);
			 	}
			 }
			 
			 for ( var i = 0; i < list.length; i++) {
				var record = list[i];
				if(record.accessYear == nowYear){
					$("#year").append("<option value='"+record.id+"' selected='selected'>"+record.accessYear+"</option>");
				}else{
					$("#year").append("<option value='"+record.id+"'>"+record.accessYear+"</option>");
				}
				
			 }
			 getSpecialty();
		 }
	});
}
//获取所有的专业，为学院下拉框赋值
var specialtyList = new Array();
function getSpecialty(){
	var accessId = $("#year").val();
	
	//设置当前年份
	var year = $("#year option:selected").text();
	document.cookie="assessYear="+year+";path=/";
	
	$("#org").html("<option value=''>--请选择--</option>");
	$("#spe").html("<option value=''>--请选择--</option>");
	$.ajax({
		 url:"/audit/examineScene/scheduleAccessSpecialty.do",
		 data:{
			 accessId : accessId, 
		 },
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 var list = data.data.accessSpecialtyList;
			 specialtyList = list;
			 //获取学院
			 var orgList = new Array();
			 for ( var i = 0; i < specialtyList.length; i++) {
				var record = specialtyList[i];
				
				var flag = false;
				for ( var j = 0; j < orgList.length; j++) {
					if(record.academyId == orgList[j]){
						flag = true;
					}
				}
				if(!flag){
					var html= "";
					if(i == 0){
						html="<option value='"+record.academyId+"' selected='selected'>"+record.academyName+"</option>";
					}else{
						html="<option value='"+record.academyId+"' >"+record.academyName+"</option>";
					}
					$("#org").append(html);
					orgList.push(record.academyId);
				}
			}
			 getSpe();
		 }
	});
}

function getSpe(){
	var academyId = $("#org").val();
	$("#spe").html("<option value=''>--请选择--</option>");
	for ( var i = 0; i < specialtyList.length; i++) {
		var record = specialtyList[i];
		if(academyId == record.academyId){
			if( i == 0){
				var html="<option value='"+record.id+"' selected='selected'>"+record.specialtyName+"</option>";
				$("#spe").append(html);
			}else{
				var html="<option value='"+record.id+"' >"+record.specialtyName+"</option>";
				$("#spe").append(html);
			}
			
		}
	}
	getRecord();
}

var userNumList = new Array();
var totalScoreShow = 0;
var detailScore = new Array();
function getRecord(){
	var accessSpecialtyId = $("#spe").val();
	if(accessSpecialtyId == ""){
		return;
	}
	$("#recordBody").html("");
	$("#recordList").show();
	$.ajax({
		 url:"/audit/siteCheck/findRecord.do",
		 data:{
			 id : accessSpecialtyId,
		 },
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 var userList = data.data.userList;
			 var totalScore = data.data.totalScore;
			 if(totalScore != null){
				 totalScoreShow = totalScore;
			 }
			 var list = data.data.list;
			 var level =3;//备用
			 userNumList = new Array();
			 $("#userList").html("");
			 detailScore = new Array();
			 $("#userNum").attr("colspan",userList.length);
			 for ( var i = 0; i < userList.length; i++) {
				var user = userList[i];
				var html="<td>"+user.userName+"</td>";
				$("#userList").append(html);
				var userNum = {};
				userNum.userId = user.userId;
				userNum.num = i;
				userNumList.push(userNum);
			}
			
			for ( var i = 0; i < list.length; i++) {
				var detail = list[i].detail;
				var siteRecordList = list[i].siteRecordList;
				var secondMapList = list[i].childMapList;
				for ( var j = 0; j < secondMapList.length; j++) {
					var detailJ = secondMapList[j].detail;
					var siteRecordListJ = secondMapList[j].siteRecordList;
					var thirdMapList = secondMapList[j].childMapList;
					for ( var k = 0; k < thirdMapList.length; k++) {
						var detailK = thirdMapList[k].detail;
						detailScore.push(detailK);
						var siteRecordListK = thirdMapList[k].siteRecordList;
						var siteRecord = thirdMapList[k].leaderSiteRecord;
						var html = "<tr class='bottom-table-td'>";
						html+="<td >"+(i+1)+"."+detail.name+"("+detail.score+"分)</td>";
						html+="<td >"+(i+1)+"."+(j+1)+detailJ.name+"("+detailJ.score+"分)</td>";
						html+="<td>"+(i+1)+"."+(j+1)+"."+(k+1)+detailK.name+"("+detailK.score+"分)</td>";
						console.info(userNumList);
						console.info(siteRecordListK);
						for ( var n = 0; n < userNumList.length; n++) {
							var flag = false;
							for ( var m = 0; m < siteRecordListK.length; m++) {
								if(userNumList[n].userId == siteRecordListK[m].userId){
									html+="<td>"+siteRecordListK[m].score+"</td>";
									flag = true;
								}
							}
							if(!flag){
								html+="<td>0</td>";
							}
						}
						var leaderSiteRecord = 0;
						if(siteRecord != 0 && siteRecord.length !=0){
							leaderSiteRecord = siteRecord[0].score;
						}
						
						html +="<td class='table-tr-td5'><input type='text' class='input_button' id='detail_"+detailK.id+"' onclick='getNowScore(this.id)' class='input_button' onBlur='saveScore(this.id)' value='"+leaderSiteRecord+"'/></td></tr>";
						$("#recordBody").append(html);
					}
				}
			}
			var html = "<tr class='bottom-table-td'><td colspan='3'>总评分</td><td id='totalScore' colspan='"+(userNumList.length+1)+"'>"+totalScoreShow+"</td></tr>";
			var suggest = "<span style='color: red;'>不达标</span>";
			if(totalScore >= 75){
				suggest ="<span>达标</span>";
			}
			html += "<tr class='bottom-table-td'><td colspan='3'>结论建议</td><td id='suggest' colspan='"+(userNumList.length+1)+"'>"+suggest+"</td></tr>";
			$("#recordBody").append(html);
			_w_table_rowspan("#recordBody", 1);
			_w_table_rowspan("#recordBody", 2);
		 }
	});
}

function getNum(mapList){
	if(mapList != null && mapList.length != 0){
		return 0;
	}
	var lineNum = 0;
	for ( var i = 0; i < mapList.length; i++) {
		var detail = mapList[i].detail;
		var siteRecordList = mapList[i].siteRecordList;
		var childMapList = mapList[i].childMapList;
		lineNum +=getNum(childMapList);
	}
	return lineNum;
}

var nowScore = 0;

function getNowScore(id){
	var score = $("#"+id).val();
	nowScore = score;
}

function saveScore(id){
	var accessSpecialtyId = $("#spe").val();
	var score = $("#"+id).val();
	if(isNaN(score) && score < 0){
		alert("请输入合理的数字");
		return;
	}
	var detailId = id.split("detail_")[1];
	for ( var i = 0; i < detailScore.length; i++) {
		var record = detailScore[i];
		if(record.id == detailId){
			if(record.score < score){
				alert("评分大于总分,请重新输入");
				$("#"+id).val(nowScore);
				return;
			}
		}
	}
	
	totalScoreShow = (parseFloat(totalScoreShow)-parseFloat(nowScore)+parseFloat(score)).toFixed(2);
	$("#totalScore").html(totalScoreShow);
	var suggest = "<span style='color: red;'>不达标</span>";
	if(totalScoreShow >= 75){
		suggest ="<span>达标</span>";
	}
	$("#suggest").html(suggest);
	
	
	
	
	$.ajax({
		 url:"/audit/siteCheck/saveScore.do",
		 data:{
			 id : accessSpecialtyId,
			 score : score,
			 detailId : detailId,
		 },
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 
		 }
	});
}


var reportArray = new Array();
function getReport(){
	var accessSpecialtyId = $("#spe").val();
	if(accessSpecialtyId == ""){
		return;
	}
	$.ajax({
		 url:"/audit/siteCheck/findReport.do",
		 data:{
			id:  accessSpecialtyId
		 },
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 reportArray = new Array();
			 var list = data.data;
			 $("#nodeList").html("");
			 for ( var i = 0; i < list.length; i++) {
				var record = list[i];
				reportArray.push(record);
				var html="<td onclick='table_td_click(this,event)' id='report_"+record.id+"'>"+record.nodeName+"</td>";
				$("#nodeList").append(html);
			}
			if(list == null || list.length == 0){
				addDefaultNode("封面");
				addDefaultNode("专业基本情况");
				addDefaultNode("对自评报告的审阅意见及问题核实情况");
				addDefaultNode("培养目标与培养方案");
				addDefaultNode("教师队伍");
				addDefaultNode("基本教学条件及利用");
				addDefaultNode("专业教学");
			}
			 
			 
		 }
	});
	
}

function saveReport(){
	if(nowReportId == 0){
		return;
	}
	var content = editor.html();
	$.ajax({
		 url:"/audit/siteCheck/saveReport.do",
		 data:{
			nodeId:  nowReportId,
			content : content,
		 },
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			for ( var i = 0; i < reportArray.length; i++) {
				if(nowReportId == reportArray[i].id){
					reportArray[i].content = content;
				}
			}
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

function addDefaultNode(name){
	var accessSpecialtyId = $("#spe").val();
	var speName = $("#spe").find( "option:selected").text();
	$.ajax({
		 url:"/audit/siteCheck/addNewNode.do",
		 data:{
			accessSpecialtyId:  accessSpecialtyId,
			name : name,
		 },
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 var html="<td onclick='table_td_click(this,event)' id='report_"+data.data+"'>"+name+"</td>";
			 $("#nodeList").append(html);
			 var report = {};
			 report.id = data.data;
			 if(name == "封面"){
				 report.content = "<p>  <br /> </p> <p>  <br /> </p> <p style='text-align:center;'>  <span style='font-size:32px;'>＊＊＊本科专业评估</span>  </p> <p style='text-align:center;'>  <br /> </p> <p style='text-align:center;'>  <span style='font-size:32px;'>现场考查报告</span>  </p> <p style='text-align:center;'>  <br /> </p> <p style='text-align:center;'>  <br /> </p> <p>  <br /> </p> <p>  <br /> </p> <!-- Unnamed (Shape) --> <p>  <img class='img ' id='u42_img' src='file://C:/Users/Administrator/Desktop/%E4%B8%93%E4%B8%9A%E8%AF%84%E4%BC%B0%20%EF%BC%8D%E5%8E%9F%E5%9E%8B/resources/images/transparent.gif' /> <!-- Unnamed () --> </p> <p>  <br /> </p> <p style='text-align:center;'>  <span style='font-size:18px;'>评估专业：&nbsp;<u>"+speName+"</u>_____</span> </p> <p style='text-align:center;'>  <span style='font-size:18px;line-height:27px;'><br /> </span> </p> <p style='text-align:center;'>  <span style='font-size:18px;line-height:27px;'>考查时间：</span><span style='font-size:18px;line-height:1.5;'>______</span><span style='font-size:18px;line-height:1.5;'>年</span><span style='font-size:18px;line-height:1.5;'>___</span><span style='font-size:18px;line-height:1.5;'>月</span><span style='font-size:18px;line-height:1.5;'>__</span><span style='font-size:18px;line-height:1.5;'>日</span> </p> <p style='text-align:center;'>  <span style='font-size:18px;'><br /> </span> </p> <p style='text-align:center;'>  <span style='font-size:18px;'>专家组成员：<u> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</u><u>&nbsp; &nbsp; &nbsp;&nbsp;</u><u>&nbsp;</u><br /> </span> </p> <p>  <br /> </p> <p>  <br /> </p> <!-- Unnamed (Horizontal Line) --> <div class='ax_horizontal_line' id='u44' style='text-align:center;'> </div>"
			 }else{
				 report.content = "";
			 }
			 reportArray.push(report);
			 $("#report_"+data.data).click();
			 closeDialog();
		 }
	});
}

function addNewNode(){
	var accessSpecialtyId = $("#spe").val();
	var name = $("#name").val();
	if(name == ""){
		return;
	}
	$.ajax({
		 url:"/audit/siteCheck/addNewNode.do",
		 data:{
			accessSpecialtyId:  accessSpecialtyId,
			name : name,
		 },
		 type : "post",
		 dataType : "json",
		 async:false,
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
			 var data = eval("("+dataString+")");
			 var html="<td onclick='table_td_click(this,event)' id='report_"+data.data+"'>"+name+"</td>";
			 $("#nodeList").append(html);
			 var report = {};
			 report.id = data.data;
			 report.content = "";
			 reportArray.push(report);
			 $("#report_"+data.data).click();
			 closeDialog();
		 }
	});
}

function deleteThis(id){
	var realId = id.split("report_");
	var flag = confirm("确认删除？");
	if(!flag){
		return;
	}
	$.ajax({
		 url:"/audit/siteCheck/deleteNode.do",
		 data:{
			id : realId[1],
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
				 $("#"+id).remove();
				 if(nowReportId == id){
					 nowReportId = 0;
					 editor.html("");
				 }
			 }
		 }
	});
}

function addView(){
	$("#addDialog").show();
	$("#name").val("");
	$("#overlay").show();
}
function closeDialog(){
	$("#addDialog").hide();
	$("#overlay").hide();
}
