/*    tab 切换操作
function tabChange_td1(obj) {
	var obj = $(obj);
	var context = $('.bottom-context');
	context.children("div").css("display", "none");
	obj.parent("tr").children("td").css("background", "#EDEDED");
	obj.parent("tr").children("td").css("color", "#363636");
	obj.css("background-color", "#19C6A1");
	obj.css("color", "#ffffff");
	var myDiv = $('.tab-table-td1');
	myDiv.css("display", "block");

}

function tabChange_td2(obj) {
	var obj = $(obj);
	var context = $('.bottom-context');
	context.children("div").css("display", "none");
	obj.parent("tr").children("td").css("background", "#EDEDED");
	obj.parent("tr").children("td").css("color", "#363636");
	obj.css("background-color", "#19C6A1");
	obj.css("color", "#ffffff");
	var myDiv = $('.tab-table-td2');
	myDiv.css("display", "block");
}

function tabChange_td3(obj) {
	var obj = $(obj);
	var context = $('.bottom-context');
	context.children("div").css("display", "none");
	obj.parent("tr").children("td").css("background", "#EDEDED");
	obj.parent("tr").children("td").css("color", "#363636");
	obj.css("background-color", "#19C6A1");
	obj.css("color", "#ffffff");
	var myDiv = $('.tab-table-td3');
	myDiv.css("display", "block");
}

function tabChange_td4(obj) {
	var obj = $(obj);
	var context = $('.bottom-context');
	context.children("div").css("display", "none");
	obj.parent("tr").children("td").css("background", "#EDEDED");
	obj.parent("tr").children("td").css("color", "#363636");
	obj.css("background-color", "#19C6A1");
	obj.css("color", "#ffffff");
	var myDiv = $('.tab-table-td4');
	myDiv.css("display", "block");
}

function tabChange_td5(obj) {
	var obj = $(obj);
	var context = $('.bottom-context');
	context.children("div").css("display", "none");
	obj.parent("tr").children("td").css("background", "#EDEDED");
	obj.parent("tr").children("td").css("color", "#363636");
	obj.css("background-color", "#19C6A1");
	obj.css("color", "#ffffff");
	var myDiv = $('.tab-table-td5');
	myDiv.css("display", "block");
}*/
$(function(){
	// showTable();
	// showYear();
	$.ajax({
		url:'/audit/examineScene/scheduleAccessYear.do',
		type:'POST',
		dataType : "json",
		success:function(data){
			var dataObj=eval("("+data+")");
			var accessYearList = dataObj.data.accessYearList;
			var selectedYear = $("#selectedYear").val();
			// 获取年份
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
			// 1 开始
			// 查询学院option
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
					// 2开始
					// 查询专业的option
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
								$("#schedule_specialty_select").append("<option defaultStandartId='"+result[i].defaultStandartId+"' value='"+result[i].specialtyId+"' "+(i==0?'selected':'')+">"+result[i].specialtyName+"</option>");
							}
							// 3 开始
							showData();
							// 3结束
						},
						error:function(){
							alert("系统繁忙，请稍后重试！");
						}
					});
					// 2 结束
				},
				error:function(){
					alert("系统繁忙，请稍后重试！");
				}
			});
			// 1 结束
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
});
function getAccessSpecialty(){
	var accessId=$("#schedule_year_select option:selected").val();
	var specialtyId=$("#schedule_specialty_select option:selected").val();
	var academyId=$("#schedule_academy_select option:selected").val();
	// var txid=$("#schedule_specialty_select
	// option:selected").attr("defaultStandartId");
	$.ajax({
		type:'post',
		url:'/audit/examineScene/assessResultAccessSpecialty.do',
		data:{"accessId":accessId,"specialtyId":specialtyId,"academyId":academyId},
		dataType:'json',
		success:function(result){
			var resultList = eval("("+result+")");
			var accessSpecialtyList = resultList.data.accessSpecialtyList;
			$("#schedule_specialty_select option:selected").attr("accessSpecialtyId",accessSpecialtyList[0].id);
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
var editor;// 专家现场考查内容中所用文本框
function showInspectContent(){// 专家现场考查内容
	var txid=$("#schedule_specialty_select option:selected").attr("defaultstandartid");
	if(txid==undefined){
		alert("请选择查询条件！");
		return;
	}
	var accessSpecialtyId = $("#schedule_specialty_select option:selected").attr("accessSpecialtyId");
	$.ajax({
		type:'post',
		url:'/audit/examineScene/assessResultGetExpertInfo.do',
		data:{"accessSpecialtyId":accessSpecialtyId},
		dataType:'json',
		success:function(result){
			var resultList = eval("("+result+")");
			var dataArray = resultList.data.asAccessExamineSceneVo;
			$("#sceneTable tbody").empty();
			if(dataArray.length==0){
				$("#sceneTable tbody").append("<tr><td colspan=6 style='text-align:center;color:red;'>暂无数据</td></tr>");
				return;
			}
			var str = "";
			for(var i=0;i<dataArray.length;i++){
				str +="<tr>"+
				      "<td style='text-align: center;width:10%;cursor:pointer;' id='expertId"+dataArray[i].userId+"' onclick='showInspect("+dataArray[i].userId+");'>"+dataArray[i].userName+"</td>";
					  if(i==0){
						  str +="<td style='text-align: center;width:100%;' rowspan='"+dataArray.length+"' id='inspectContentId'><textarea  name='inspectContent' id='inspectContent' rows='8'></textarea></td>";  
					  }    
				str += "</tr>";
			}
			$("#sceneTable tbody").append(str);
			editor = KindEditor.create('#inspectContentId',{
				cssPath : 'http://192.168.1.132:8080/audit/kindeditor/plugins/code/prettify.css',
				uploadJson : 'http://192.168.1.132:8080/audit/kindeditor/jsp/upload_json.jsp',
				fileManagerJson : 'http://192.168.1.132:8080/audit/kindeditor/jsp/file_manager_json.jsp',
				allowFileManager : true,
				width: '100%'
			});
			 editor.readonly(true);
			showInspect(dataArray[0].userId);
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function showInspect(v){// 专家现场考查内容中点击左边专家显示右边考查内容
	$("#sceneTable").find("td").css("background-color","#ffffff");
	$("#expertId"+v).css("background-color","#e6e6e6");
	var userId = v;
	var accessSpecialtyId = $("#schedule_specialty_select option:selected").attr("accessSpecialtyId");
	$.ajax({
		type:'post',
		url:'/audit/examineScene/assessResultGetExpertInspectInfo.do',
		data:{"accessSpecialtyId":accessSpecialtyId,"userId":userId},
		dataType:'json',
		success:function(result){
			var resultList = eval("("+result+")");
			var dataArray = resultList.data.asAccessExamineSceneVo;
			editor.html('');
			var str = "";
			for(var i=0;i<dataArray.length;i++){
				str +=(i+1)+"."+dataArray[i].inspectTypeName+":<br/>"
				      +dataArray[i].inspectContent+"<br/>";
			}
			editor.html(str);
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
// var switchs1 =true;//展现专家现场考查弹出层开关
// var switchs2 =true;//展现更多专家现场考查弹出层开关
function openXCKC(){
	var txid=$("#schedule_specialty_select option:selected").attr("defaultstandartid");
	if(txid==undefined){
		alert("请选择查询条件！");
		return;
	}
	$("#AssessmentId").modal('show');
	var accessSpecialtyId = $("#schedule_specialty_select option:selected").attr("accessSpecialtyId");
	$.ajax({// 查询改用户是否做过现场评分
		type:'post',
		url:'/audit/examineScene/findIsRecord.do',
		data:{"accessSpecialtyId":accessSpecialtyId,"recordType": 0},
		dataType:'json',
		success:function(result){
			var resultList = eval("("+result+")");
			var count = resultList.data.count;
			if(parseInt(count)==0){// 未做过现场评估，调新增方法
				showInitTable();
			}else{// 做过新增，条修改和查看方法
				showTable();
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function openMore(){
	var txid=$("#schedule_specialty_select option:selected").attr("defaultstandartid");
	if(txid==undefined){
		alert("请选择查询条件！");
		return;
	}
	$("#AssessmentListId").modal('show');
	showTableMore();
}
function showTableMore(){// 查看更多专家评分信息
	var accessSpecialtyId = $("#schedule_specialty_select option:selected").attr("accessSpecialtyId");
	$.ajax({
		type:'post',
		url:'/audit/examineScene/findRecord.do',
		data:{"accessSpecialtyId":accessSpecialtyId},
		dataType:'json',
		success:function(result){
			var resultList = eval("("+result+")");
			var userList = resultList.data.userList;
			var recordList = resultList.data.recordList;  //单人
			var recordIdeaList = resultList.data.recordIdeaList;  //多人
			var sceneScoreList = resultList.data.sceneScoreList;
			var str1 = "<tr>";// 表头部分
			    str1 +="<th class='th-1' rowspan='2'>一级指标</th>";
			    str1 +="<th class='th-2' rowspan='2'>二级指标</th>";
			    str1 +="<th class='th-3' rowspan='2' >观测点</th>";
			    str1 +="<th class='th-4' style='text-align:center;' colspan='"+(userList.length)+"'>专家评分</th>";
			    str1 +="<th class='th-n' style='text-align:center;' colspan='"+(userList.length)+"'>个人考查评价意见（重点填写主要存在的问题）</th>";
			    str1 +="</tr>";
			    str1 +="<tr>";
			    for(var i=0;i<userList.length;i++){
			    	str1 +="<th style='text-align:center;'>"+userList[i].userName+"</th>";
			    }
			    for(var i=0;i<userList.length;i++){
			    	str1 +="<th style='text-align:center;'>"+userList[i].userName+"</th>";
			    }
			    str1 +="</tr>";
			    $("#AssessmentListThead").html(str1);
			var str = "";// 体系指标（表的主体）
			for ( var i = 0; i < sceneScoreList.length; i++) {
				str += "<tr>";
				str += "<td>";
				str += sceneScoreList[i].oneLevelName + " (" + sceneScoreList[i].oneLevelScore
						+ "分)";
				str += "</td>";
				str += "<td>";
				str += sceneScoreList[i].twoLevelName + " (" + sceneScoreList[i].twoLevelScore
						+ "分)";
				str += "</td>";
				str += "<td>";
				str += sceneScoreList[i].threeLevelName + " ("
						+ sceneScoreList[i].threeLevelScore + "分)";
				str += "</td>";
				
				for(var k=0;k<userList.length;k++){// 拼接各个专家的评分
					var userScore = false;// 该专家是否就第三级指标评过分
					for(var j=0;j<recordList.length;j++){
						if(sceneScoreList[i].threeId==recordList[j].standardDetailId){
								if(recordList[j].userId==userList[k].userId){
									str += "<td>";
									str +=""+recordList[j].score+"";
									str += "</td>";
									userScore = true;
								}
						}
					}
					if(!userScore){
						str += "<td>";
						str +="";
						str += "</td>";
						userScore = false;
					}
				}
				for(var k=0;k<userList.length;k++){// 拼接各个专家的个人评价意见
					var userIdea = false;// 该专家是否就第三级指标写过个人考查意见
					for(var m=0;m<recordIdeaList.length;m++){
						if(sceneScoreList[i].oneId==recordIdeaList[m].standardDetailId){
							if(recordIdeaList[m].userId==userList[k].userId){
								str += "<td tvalue='"+recordIdeaList[m].personalidea+"' name='ideaName"+k+sceneScoreList[i].oneId+"'>";
								 str +=sceneScoreList[i].oneId;
								str += "</td>";
								userIdea = true;
							}
						}
					}
					if(!userIdea){
						str += "<td  tvalue='' name='ideaName"+k+sceneScoreList[i].oneId+"'>";
						 str +=sceneScoreList[i].oneId;
						str += "</td>";
						userIdea = false;
					}
				}
				
				str += "</tr>";
			}
			
			$("#AssessmentListTbody").html(str);
			_w_table_rowspan("#AssessmentListTbody", 1);
			_w_table_rowspan("#AssessmentListTbody", 2);
			for ( var i = 0; i < sceneScoreList.length; i++) {
			    for(var j=0;j<userList.length;j++){
			    	var num = 4+userList.length+j;
			    	var oneIdIdea = sceneScoreList[i].oneId;
			    	_w_table_rowspan("#AssessmentListTbody",num);
					var tds = $("td[name = ideaName"+j+oneIdIdea+"]");
					for(var n=0;n<tds.length;n++){
						/*
						 * var str = "<textarea name='idea'
						 * style='width:100%;height:100%;'></textarea>" + "<input
						 * type='hidden' name='oneId'
						 * value='"+$(tds[j]).attr("tvalue")+"'>"
						 */
						var str =""+$(tds[j]).attr("tvalue")+"";	
								$("td[name =ideaName"+j+oneIdIdea+"]").empty();
								$("td[name =ideaName"+j+oneIdIdea+"]").append(str);
					}
			    }
			}
		},
		error:function(){
			alert("系统繁忙，请稍后重试！");
		}
	});
}
function submitAssessment(){
	if(confirm("确定要提交数据吗？")){
		$("#accessSpecialtyId").val($("#schedule_specialty_select option:selected").attr("accessSpecialtyId"));
		var uploadData  = $("#AssessmentForm").serialize();
		$.ajax({
			url : "/audit/examineScene/assessResultInsertSceneScoreAndIdea.do",
		    type : 'post',
		    dataType:'json',
		    data:uploadData,
		    success:function(result){
		    	// alert(result);
		    },error:function(){
		    	alert("系统繁忙，请稍后重试！");
		    }
		});
	}
}
function updateAssessmentScore(obj){// 修改现场考查的分数
	var score = $(obj).val();
	var threeScore = $(obj).attr("threeScore");
	if(!/^\d+(?:\.\d{1,2})?$/.test(score)){  
	        alert("你输入的数字不合法!"); 
	        return;
	 }
	if(parseInt(score)>parseInt(threeScore)){
		   alert("你输入的分值不得大于观测点的分值！");
		   return;
	}
	var standartDetailId = $(obj).attr("detailId");
	var accessSpecialtyId = $("#schedule_specialty_select option:selected").attr("accessSpecialtyId");
	$.ajax({
		url : "/audit/examineScene/assessResultUpdateSceneScore.do",
	    type : 'post',
	    dataType:'json',
	    data:{"standartDetailId":standartDetailId,"score":score,"accessSpecialtyId":accessSpecialtyId},
	    success:function(result){
	    	// alert(result);
	    },error:function(){
	    	alert("系统繁忙，请稍后重试！");
	    }
	});
}
function updateAssessmentIdea(obj){
	var standartDetailId = $(obj).attr("detailId"); 
	var personalIdea = $(obj).val();
	var accessSpecialtyId = $("#schedule_specialty_select option:selected").attr("accessSpecialtyId");
	$.ajax({
		url : "/audit/examineScene/assessResultUpdateSceneIdea.do",
	    type : 'post',
	    dataType:'json',
	    data:{"standartDetailId":standartDetailId,"personalIdea":personalIdea,"accessSpecialtyId":accessSpecialtyId},
	    success:function(result){
	    	// alert(result);
	    },error:function(){
	    	alert("系统繁忙，请稍后重试！");
	    }
	});
}
function showInitTable(){// 新增界面的现场考查评分表
	var txid=$("#schedule_specialty_select option:selected").attr("defaultstandartid");
	$.ajax({
		url : "/audit/examineScene/assessResultShowArchitecture.do",
		type : "POST",
		dataType : "json",
		data : {"architectureId":txid},
		success : function(data) {
			// showselfReport();
			var result = eval("(" + data + ")");
			// var e = result.assessmentSelfScore;
			var a = result.data;
			// var b=result.filelistname;
			// var namelist=result.namelist;
			var str = "";
			for ( var i = 0; i < a.length; i++) {
				str += "<tr>";
				str += "<td>";
				str += a[i].oneLevelName + " (" + a[i].oneLevelScore
						+ "分)";
				str += "</td>";
				str += "<td>";
				str += a[i].twoLevelName + " (" + a[i].twoLevelScore
						+ "分)";
				str += "</td>";
				str += "<td>";
				str += a[i].threeLevelName + " ("
						+ a[i].threeLevelScore + "分)";
				str += "</td>";
				
				str += "<td>";
				 str +="<input type='text' name='score' id='score"+a[i].threeId+"'/>";
				 str +="<input type='hidden' name='standartDetailId' value='"+a[i].threeId+"'/>";
				str += "</td>";
				str += "<td id='idea"+a[i].oneId+"' tvalue='"+a[i].oneId+"' name='ideaName'>";
				 str +=a[i].oneId;
				str += "</td>";
				str += "</tr>";
			}
			$("#AssessmentTbody").html(str);
			_w_table_rowspan("#AssessmentTbody", 1);
			_w_table_rowspan("#AssessmentTbody", 2);
			_w_table_rowspan("#AssessmentTbody", 5);
			var tds = $("td[name = ideaName]");
			for(var i=0;i<tds.length;i++){
				var str = "<textarea name='idea' style='width:100%;height:100%;'></textarea>" +
						"<input type='hidden' name='oneId' value='"+$(tds[i]).attr("tvalue")+"'>"
						$("#"+tds[i].id).empty();
						$("#"+tds[i].id).append(str);
			}
			
		},
		error : function() {
				alert("系统异常，请稍后操作！");
		}
	});
}
function showTable() {// 个人查看和修改界面的现场考查评分表
	var txid=$("#schedule_specialty_select option:selected").attr("defaultstandartid");
	var sid=$("#schedule_specialty_select option:selected").attr("accessspecialtyid");
	$.ajax({
				url : "/audit/examineScene/assessResultShowSceneScore.do",
				type : "POST",
				dataType : "json",
				data : {"architectureId":txid," recordType": 0,"sid":sid},
				success : function(data) {
					var result = eval("(" + data + ")");
					var a = result.data;
					var str = "";
					for ( var i = 0; i < a.length; i++) {
						str += "<tr>";
						str += "<td>";
						str += a[i].oneLevelName + " (" + a[i].oneLevelScore
								+ "分)";
						str += "</td>";
						str += "<td>";
						str += a[i].twoLevelName + " (" + a[i].twoLevelScore
								+ "分)";
						str += "</td>";
						str += "<td>";
						str += a[i].threeLevelName + " ("
								+ a[i].threeLevelScore + "分)";
						str += "</td>";
						
						str += "<td>";
						 str +="<input type='text' threeScore='"+a[i].threeLevelScore+"' name='score' id='score"+a[i].threeId+"' value='"+a[i].sceneScore+"' detailId='"+a[i].threeId+"' onblur='updateAssessmentScore(this);'/>";
						 str +="<input type='hidden' name='standartDetailId' value='"+a[i].threeId+"'/>";
						str += "</td>";
						str += "<td id='idea"+a[i].oneId+"' tvalue='"+a[i].oneId+"' name='ideaName' ttext='"+a[i].personalIdea+"'>";
						 str +=a[i].oneId;
						str += "</td>";
						str += "</tr>";
					}
					$("#AssessmentTbody").html(str);
					_w_table_rowspan("#AssessmentTbody", 1);
					_w_table_rowspan("#AssessmentTbody", 2);
					_w_table_rowspan("#AssessmentTbody", 5);
					var tds = $("td[name = ideaName]");
					for(var i=0;i<tds.length;i++){
						var str = "<textarea name='idea' style='width:100%;height:100%;' detailId='"+$(tds[i]).attr("tvalue")+"' onblur='updateAssessmentIdea(this);'>"+$(tds[i]).attr("ttext")+"</textarea>" +
								"<input type='hidden' name='oneId' value='"+$(tds[i]).attr("tvalue")+"'>"
								$("#"+tds[i].id).empty();
								$("#"+tds[i].id).append(str);
					}
					$("#submitAssessmentId").hide();
				},
				error : function() {
						alert("系统异常，请稍后操作！");
				}
			});
}
// 显示数据
function showData(){
	var syear=$("#schedule_year_select option:selected").text();
	var specialtyid=$("#schedule_specialty_select option:selected").val();
	var academyid=$("#schedule_academy_select option:selected").val();
	var txid=$("#schedule_specialty_select option:selected").attr("defaultStandartId");
	var tabul=$("#tabul").find("li");
	getAccessSpecialty();// 获得专业评估表数据，以便获得专业评估id；
	// 循环判断tab切换
	for ( var i = 0; i < tabul.length; i++) {
		if($(tabul[i]).attr("class")=="active"){
			if( $(tabul[i]).attr("tab")==1){
				selectSpecialtyScore(syear,academyid,specialtyid,txid);
				return;
			}
			if($(tabul[i]).attr("tab")==2){
				show();
				return;
			}
			if($(tabul[i]).attr("tab")==3){
				showUserAndType();
				return;
			}
			if($(tabul[i]).attr("tab")==4){
				return;
			}
		}
	}
}
// 初始化专业自评分
function selectSpecialtyScore(syear,academyid,specialtyid,txid){
	 $.ajax({
		  type:"POST",
		  url:"/audit/assessmentSelfScoreController/showAssessmentSelfScore.do",
		  data:{
			  "syear":syear,
			  "academyid":academyid,
			  "specialtyid":specialtyid,
			  "txId":txid
		  },
	      dataType:"json",
		  success:function(data){
			  var result = eval("(" + data + ")");
			  console.info(result);
			  var e = result.assessmentSelfScore;
				var a = result.jtableList;
			//	var b=result.filelistname;
				var namelist=result.namelist;
				var str = "";
				for ( var i = 0; i < a.length; i++) {
					str += "<tr>";
					str += "<td>";
					str += a[i].onelevelname + " (" + a[i].onelevelscore
							+ "分)";
					str += "</td>";
					str += "<td>";
					str += a[i].twolevelname + " (" + a[i].twolevelscore
							+ "分)";
					str += "</td>";
					str += "<td>";
					str += a[i].threelevelname + " ("
							+ a[i].threelevelscore + "分)";
					str += "</td>";
					str += "<td>";
					for ( var m = 0; m < namelist.length; m++) {
						if(a[i].threeid==namelist[m].id){
							str += namelist[m].value;
						}
					}
					str += "</td>";
					str += "<td class='center'>";
					str += a[i].threelevelscore;
					str += "</td>";
					str += "<td class='center'>";
					for ( var l = 0; l < e.length; l++) {
						if(a[i].threeid==e[l].threeid){
							str += e[l].selfscore;
						}
					}
					
					str += "</td>";
			/*		str += "<td>";
					for ( var j = 0; j < b.length; j++) {
						if(b[j].id==a[i].threeid){
						    var c=b[j].value.split(",");
						     for ( var k = 0; k < c.length; k++) {
								if(c[k]!=""){
									var d=c[k].split("#");
									str += "<a href='javascript:void(0)' onclick=showOnline(\'"+d[1]+"\')>"+d[0]+"</a> &nbsp&nbsp  ";
								}
							 }
							
						}
					}
					str += "</td>";*/
					str += "</tr>";
				}
				$("#tbody").html(str);
				_w_table_rowspan("#tbody", 1);
				_w_table_rowspan("#tbody", 2);
		  },
		  error:function(){
			  alert("查询失败！");
		  }
	 })
}

function show(){
	showselfReport();
}

function showselfReport(){
	var syear=$("#schedule_year_select option:selected").text();
	var specialtyid=$("#schedule_specialty_select option:selected").val();
	
	if(syear==0||specialtyid==0){
		alert("请选择年份和专业！");
		return;
	}
	$.ajax({
		url : "/audit/self/getReportP.do",
		type : "POST",
		dataType : "json",
		data : {
			specialtyId : specialtyid,
			year : syear
		},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (!result.ok) {
				alert(result.comment);
				return;
			}
			$("#title").html("");
			$("#menuList").html("");
			
			var list = result.data;
			for ( var i = 0; i < list.length; i++) {
				var report = list[i];
				if (report.parentId == 0) {
					$("#title").html(report.content);
					getChild(list, report.id, 0);
				}
			}

		},
		error : function() {

		}
	});
}
var reports = new Array();
function getChild(list, parentId, level) {
	for ( var i = 0; i < list.length; i++) {
		var report = list[i];
		if (report.parentId == parentId) {
			var html="";
			html+="<ul class='index_tree' name='parent_list_"+parentId+"'><li >";
			html+="<div class='tree_head' id='list_" +report.id+ "' onclick='showContent("+report.id+")'>";
			html+="<div class='tree_icon' id='icon_"+report.id+"'></div>";
			html+="<div class='tree_text' id='listName_" +report.id+ "' >"+report.listName+"</div></div></li></ul>";

			var reportP = {};
			var specialtyId = $("#specialtyList").val();
			if(level == 0){
				$("#menuList").append(html);
				reportP.parentId = 1;
			}else{
				$("#icon_"+parentId).html("<img class='rightP' src='/audit/img/majorEvaluation/xiangyou.png'></img>");
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
		}
	}
}

function showContent(id){
	var nowId ="list_"+id;
	for ( var i = 0; i < reports.length; i++) {
		var record = reports[i];
		if(record.id == nowId){
			$("#content").html(record.content.replaceAll("&nbsp;", " ",true));
			upOrDown(record.id);
		}
	}
}
function upOrDown(nowId){
	var key = $("#"+nowId).find("div img").attr("class");
	if(key == "down"){
		$("#"+nowId).parent().find("ul[name=parent_"+nowId+"]").slideUp();
		$("#"+nowId).find("div img").attr("class","rightP");
		$("#"+nowId).find("div img").attr("src","/audit/img/majorEvaluation/xiangyou.png");
	}else{
		$("#"+nowId).parent().find("ul[name=parent_"+nowId+"]").slideDown();
		$("#"+nowId).find("div img").attr("class","down");
		$("#"+nowId).find("div img").attr("src","/audit/img/majorEvaluation/xiangxia.png");
	}
}

//用于存放当前选中的网评专家
var commentUser='kong';

function showUserAndType(){
	var syear=$("#schedule_year_select option:selected").text();
	var specialtyid=$("#schedule_specialty_select option:selected").val();
	if(syear==0||specialtyid==0){
		alert("请选择年份和专业！");
		return;
	}
	 $.ajax({
		  type:"POST",
		  url:"/audit/siteVisitMyAssessmentController/showUserAndType.do",
		  data:{
			  "syear":syear,
			  "specialtyid":specialtyid,
		  },
	      dataType:"json",
		  success:function(data){
			  var result = eval("(" + data + ")");
			  result=result.user;
			 // jQuery.noConflict();//获取jquery的全部控制权
			  $("#showUserAndType").modal('show');
			  var str="";
			     for ( var int = 0; int < result.length; int++) {
					str+=" <li><input type='radio' name='user' value='"+result[int].user_id+"' n='"+result[int].user_name+"' />&nbsp"+result[int].user_name+"</li>";
				 }
			  $("#userbox").html(str);
			  if(commentUser!="kong"){
				  var radio=  $("#userbox").find("li input[name='user']");
				  for ( var i = 0; i < radio.length; i++) {
					  var value=$(radio[i]).val();
					  if(value==commentUser){
						  $(radio[i]).attr("checked","checked");
					  }
				  }
			  } else {
				  var radio= $("#userbox").find("li input[name='user']").first();
				  $(radio).attr("checked","checked");
			  }
		  },
		  error:function(){
			  alert("查询失败！");
		  }
	 })
	
}

function showAssessmentResults(){
	  $("#showUserAndType").modal('hide');
	  var userid=$("#userbox input:radio:checked").val();
	  var username=$("#userbox input:radio:checked").attr("n");
	  if(userid == ""){
		  alert("请选择用户");
		  return;
	  }
	  
	  var type=$("#typebox input:radio:checked").val();
	  var txid=$("#schedule_specialty_select option:selected").attr("defaultstandartid");
	   if(type==1){
		   // 查询自评考核意见表
		   showSelfAssessmentComments(userid);
	   }
	   if(type==2){
		   // 查询自评分和支撑材料相符审核意见表
		   showSelfConsistentOpinion(userid,txid);
	   }
	   if(type==3){
		   getFileInvestPoint();
		   // 查询建议实地考查重点
	   }
	   commentUser=userid;
	   $("#commentUser").html(username);
}


// 显示自评考核意见表
function showSelfAssessmentComments(userid) {
	  var syear=$("#schedule_year_select option:selected").text();
	  var specialtyid=$("#schedule_specialty_select option:selected").val();
	  var txid=$("#schedule_specialty_select option:selected").attr("defaultStandartId");
	$.ajax({
				url : "/audit/assessmentSelfScoreController/showSelfAssessmentComments.do",
				type : "POST",
				data : {
					"specialtyid" :specialtyid,
					"userId": userid,
					"syear":syear,
					"txid":txid
				},
				dataType : "json",
				success : function(data) {
					$("#table1").show();
					$("#table2").hide();
					$("#table3").hide();
					var result = eval("(" + data + ")");
					console.info(result);
					var a = result.tableList;
					var listMXF = result.listMXF;
					var listZF = result.listZF;
					var str1 = "";
			/*		for ( var i = 0; i < result.length; i++) {
						var defen= result[i].selfscore==undefined?"":result[i].selfscore;
						str += "<tr>";
						str += "<td style='font-size: 14px;font-weight: 600;'>";
						str += result[i].onelevelname + "（"
								+ result[i].onescore + "分）";
						str += "</td>";
						str += "<td style='line-height:28px'>";
						str += "<span style='font-weight: 600;' id='"
								+ result[i].twoid + "'>" + result[i].twoname
								+ "（" + result[i].twoscore + "分）。</span>"
								+ result[i].asdescription;
						str += "</td>";
						str += "<td style='line-height:25px'>";
						str += "<div class='popups-main-div' id='checked'>";
						str += "	 <ul>";
						if(result[i].elaborated==1){
							str += "		<li level='1'  style='background-color: rgb(25, 198, 161);' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>合理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>";
						}else{
							str += "		<li level='1'   ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>合理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>";
						}
						if(result[i].elaborated==2){
							str += "		<li level='2'  style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>较合理</li>";
						}else{
							str += "		<li level='2' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>较合理</li>";
						}
						if(result[i].elaborated==3){
							str += "		<li level='3'  style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>不够合理</li>";
						}else{
							str += "		<li level='3' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>不够合理</li>";
						}
		                if(result[i].elaborated==4){
		                	str += "		<li level='4'  style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>不合理</li>";
						}else{
							str += "		<li level='4' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>不合理</li>";
						}
						str += "	 </ul>";
						str += "	</div> ";
						str += "</td>";
						str += "<td>";
						str += "<center>"+defen+"</center>";
						str += "</td>";
						str += "</tr>";
					}*/
					
					for ( var i = 0; i < a.length; i++) {
						str1 += "<tr>";
						str1 += "<td>";
						str1 += a[i].onelevelname + " (" + a[i].onelevelscore
								+ "分)";
						str1 += "</td>";
						str1 += "<td>";
						str1 += a[i].twolevelname + " (" + a[i].twolevelscore
								+ "分)";
						str1 += "</td>";
						str1 += "<td onclick='showzpf(\"hsss"+a[i].threeid+"\");' style='cursor: pointer;color:blue'>";
					/*	str1 += "<a href='#hsss"+a[i].threeid+"'>";*/
						
						str1 += a[i].threelevelname + " ("
								+ a[i].threelevelscore + "分)";
						/*str1 += "</a>";*/
						str1 += "</td>";
						str1 += "<td>";
						str1 += a[i].content;
						str1 += "</td>";
						if(listMXF.length>0 && listMXF[i].threelevelid==a[i].threeid){
							str1 += "<td class='center'>"+listMXF[i].score+"";
						}else{
							str1 += "<td class='center'>0";
						}
						str1 += "</td>";
						str1 += "</tr>";
					}
					
					$("#tableone").html(str1);
					_w_table_rowspan("#tableone", 1);
					_w_table_rowspan("#tableone", 2);
				/*	$("#spanyj").html(result[0].opinion);
					$("#save").attr("accessselfid", result[0].accessselfid);
					$("#yjtext").val(result[0].opinioncontent);
					$("#hjScore").val(result[0].descore);
					var date = result[0].access_self_date;
					if(date!=undefined){
						var a = date.split("-");
						$("#year").val(a[0]);
						$("#month").val(a[1]);
						$("#day").val(a[2]);
					}*/
					
					if(listMXF.length>0 ){
						 $("#hjScore").val(listZF[0].score);
						 $("#spanyj").val(listZF[0].content);
						 var insert_time= (listZF[0].insert_time).split("-");
						 $("#year").val(insert_time[0]);
						 $("#month").val(insert_time[1]);
						 $("#day").val(insert_time[2]);
					}
				},
				error : function() {
				}
			});

}


var filedInvest = {};
// 获取建议实地考察重点
function getFileInvestPoint() {
	  var specialtyid=$("#schedule_specialty_select option:selected").val();
	  var syear=$("#schedule_year_select option:selected").text();
	  var userId = $("input[name='user']:checked").val();
	  // alert(specialtyid);
	$.ajax({
				url : "/audit/asAccessWebFiledInvestController/getAccessWebFiledInvest.do",
				type : "POST",
				data : {
					specialty_ID : specialtyid,
					userId : userId,
					year : syear,
				},
				dataType : "json",
				success : function(data) {
					$("#table1").hide();
					$("#table2").hide();
					$("#table3").show();
					var result = eval("(" + data + ")");
					filedInvest = result.resultList;
					if (result.flag == -1) {
						alert("没有相应指标数据！");
					}
					var myContent = result.myContentlist;
					var str = "";
					for ( var i = 0; i < filedInvest.length; i++) {
						str += "<tr>";
						str += "<td>" + filedInvest[i].invest_point + "</td>";
						str += "<td><textarea id='popups3Text"
								+ filedInvest[i].id
								+ "'  class='popups3-main-input' >";
						if (result.flag == 1) {
							for ( var j = 0; j < myContent.length; j++) {
								if (myContent[j].field_invest_ID == filedInvest[i].id) {
									str += myContent[j].content;
									break;
								}
							}
						}
						str += "</textarea></td>";
						str += "</tr>";
					}
					$("#tablethree").html(str);
				},
				error : function() {
					alert("系统忙，请稍后重试！！！");
				}
			});
}

/**
 * 查看支撑材料意见表
 */
function showSelfConsistentOpinion(userid,txid){
	  var syear=$("#schedule_year_select option:selected").text();
	  var specialtyid=$("#schedule_specialty_select option:selected").val();
	$.ajax({
		  url:"/audit/assessmentSelfScoreController/showSelfConsistentOpinion.do",
		  type:"POST",
		  data:{"sid":specialtyid,
			    "userId":userid,
			    "txId": txid,
			    "syear":syear},
		  dataType:"json",
		  success:function(data){
			  $("#table1").hide();
				$("#table2").show();
				$("#table3").hide();
			  var result = eval("(" + data + ")");
			  result=result.assessmentSelfScore;
			  var str="";			
			  for ( var i = 0; i < result.length; i++) {
				  var defen= result[i].descore==undefined?"":result[i].self_score;
				  var pflbid=result[i].pflbid==undefined?"":result[i].pflbid;
				  str+="<tr>";
				    str+="<td>";
				    str+=result[i].twoname;
				    str+="</td>";
				    str+="<td id='"+pflbid+"'>";
				    str+=result[i].scale_remark==undefined?"":result[i].scale_remark;
					str+="</td>";
					str+="<td>";
				    str+=result[i].self_score==undefined?"":result[i].descore;
				    str+="</td>";
				    str+="<td> <span name='mScore'>";
				    str+=result[i].threemscore==undefined?"":result[i].threemscore;
				    str+="</span></td>";
				    str+="<td>";
					str+=   "<div class='popups-main-div'>";
					str+=   "   <ul>";
					if(result[i].conformity==1){
						str += "		<li level='1' style='background-color: rgb(25, 198, 161);' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>合理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>";
					}else{
						str += "		<li level='1'  ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>合理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>";
					}
					if(result[i].conformity==2){
						str += "		<li level='2'  style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>较合理</li>";
					}else{
						str += "		<li level='2' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>较合理</li>";
					}
					if(result[i].conformity==3){
						str += "		<li level='3'  style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>不够合理</li>";
					}else{
						str += "		<li level='3' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>不够合理</li>";
					}
	                if(result[i].conformity==4){
	                	str += "		<li level='4'  style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>不合理</li>";
					}else{
						str += "		<li level='4' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>不合理</li>";
					}
					str+=   "  </ul>";
					str+=   "  </div> ";
					str+="</td>";
					str+="<td>";
					str+= "<center>"+defen+ "</center>";
					str+="</td>";
				  str+="</tr>";
			  }
			  $("#tabletwo").html(str);
			  _w_table_rowspan("#tabletwo", 1);
			     var span= $("span[name='mScore']");
				 var xitScore=0;
				 for ( var i = 0; i < span.length; i++) {
					 xitScore+= Number($(span[i]).text());
				 }
				 $("#xitScore").html(xitScore);
			  if(result.length>0){
				  $("#peneralhjScore").val(result[0].GENERAL_SCORE);
				  var date = result[0].general_time;
				  if(date!=undefined){
					  var a = date.split("-");
						$("#peneralyear").val(a[0]);
						$("#peneralmonth").val(a[1]);
						$("#peneralday").val(a[2]);
				  }
			  }
		  },
		  error:function(){
			  alert("查询失败！");
		  }
		
	})
}


// 单机阐述情况选项
function chooseLevel(obj) {
	if ($(obj).css("background-color") === "rgb(184, 184, 184)") {
		$(obj).parent().find("img").parent().css("background-color","#B8B8B8");
		$(obj).css("background-color", "#19C6A1");
	} else {
		$(obj).css("background-color", "#B8B8B8");
	}
}

function showOnline(element){
	 window.open("page/majorEvaluation/readonline.jsp?wj="+element,null,"height=300, width=800, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
	// window.location.href="page/majorEvaluation/readonline.jsp?wj="+element;
}