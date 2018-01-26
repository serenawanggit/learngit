$(function() {
	showTable();
	//PopupZPDiv(1);
});

function showTable() {
	$.ajax({
				url : "/audit/assessmentSelfScoreController/showAssessmentSelfScore.do",
				type : "POST",
				dataType : "json",
				data : {
					"specialtyid" : $("#id").html(),
					"userId": $("#userId").html(),
					"txId": $("#txId").html(),
					"syear": $("#syear").html(),
					"name":$("#name").html()
				},
				success : function(data) {
					showselfReport();
					var result = eval("(" + data + ")");
					var e = result.assessmentSelfScore;
					var a = result.jtableList;
					//var b=result.filelistname;
					var namelist=result.namelist;
					var listMXF=result.listMXF;
					var listZF=result.listZF;
					var str = "";
					var str1 = "";
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
						str += "<td > ";
						str += "<a style='color:black' name='hsss"+a[i].threeid+"' id='hsss"+a[i].threeid+"'>";
						str += a[i].threelevelname + " ("
								+ a[i].threelevelscore + "分)";
						str+=  " </a>";
						str += "</td>";
						str += "<td>";
						for ( var m = 0; m < namelist.length; m++) {
							if(a[i].threeid==namelist[m].id){
								str += namelist[m].value;
							}
						}
						str += "</td>";
/*						str += "<td class='center'>";
						str += a[i].threelevelscore;
						str += "</td>";*/
						str += "<td class='center'>";
						for ( var l = 0; l < e.length; l++) {
							if(a[i].threeid==e[l].threeid){
								str += e[l].selfscore;
							}
						}
						
						str += "</td>";
					/*	str += "<td>";
						for ( var j = 0; j < b.length; j++) {
							if(b[j].id==a[i].threeid){
							    var c=b[j].value.split(",");
							     for ( var k = 0; k < c.length; k++) {
									if(c[k]!=""){
										var d=c[k].split("#");
										str += "<a href='javascript:void(0)' onclick=showOnline(\'"+d[1]+"\')>"+d[0]+"</a> &nbsp&nbsp";
									}
								 }
								
							}
						}
						str += "</td>";*/
						str += "</tr>";
					}
					
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
						str1 += "<td onclick='showzpf(\"hsss"+a[i].threeid+"\","+a[i].threeid+");' style='cursor: pointer;color:blue'>";
					/*	str1 += "<a href='#hsss"+a[i].threeid+"'>";*/
						
						str1 += a[i].threelevelname + " ("
								+ a[i].threelevelscore + "分)";
						/*str1 += "</a>";*/
						str1 += "</td>";
						str1 += "<td>";
						str1 += a[i].content;
						str1 += "</td>";
						if(listMXF.length>0 && listMXF[i].threelevelid==a[i].threeid){
							str1 += "<td class='center'><input type='text' threeid="+a[i].threeid+" sc="+a[i].threelevelscore+" style='width:33px' onblur='calculateTheScoreNEW(this)' value="+listMXF[i].score+"  />";
						}else{
							str1 += "<td class='center'><input type='text' threeid="+a[i].threeid+" sc="+a[i].threelevelscore+" style='width:33px' onblur='calculateTheScoreNEW(this)' value=0  />";
						}
						str1 += "</td>";
						str1 += "</tr>";
					}
					
					 $("#tbody").html(str);
					 $("#tbodyright").html(str1);
					if(listMXF.length>0 ){
						 $("#ffff").val(listZF[0].score);
						 $("#yjtext").val(listZF[0].content);
						 var insert_time= (listZF[0].insert_time).split("-");
						 $("#year").val(insert_time[0]);
						 $("#month").val(insert_time[1]);
						 $("#day").val(insert_time[2]);
						 $("#zjqm").val(listZF[0].username);
					}
					
					_w_table_rowspan("#tbody", 1);
					_w_table_rowspan("#tbody", 2);
					
					_w_table_rowspan("#tbodyright", 1);
					_w_table_rowspan("#tbodyright", 2);
				},
				error : function() {
                     alert("查询出错！");
				}
			});
}

function showselfReport() {
	$.ajax({
		url : "/audit/self/getReportP.do",
		type : "POST",
		dataType : "json",
		data : {
			specialtyId : $("#id").html(),
			year : $("#syear").html()
		},
		success : function(data) {
			var result = eval("(" + data + ")");
			if (!result.ok) {
				alert(result.comment);
				return;
			}
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

function getChild(list,parentId,level){
	for(var i=0;i<list.length;i++){
 		var report = list[i];
 		if(report.parentId == parentId){
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
			
/*			nowId = reportP.id;
			editor.html(report.content.replaceAll("&nbsp;", " ",true));*/
 		}
 	}
}

/*function getChild(list, parentId, level) {
	for ( var i = 0; i < list.length; i++) {
		var report = list[i];
		if (report.parentId == parentId) {
			var html = "";
			html += "<ul style='margin-left:10px;margin-top: 5px;' name='parent_list_" + parentId
					+ "'><li >";
			html += "<div id='list_"+ report.id + "'>";
			html += "<div id='listName_" + report.id + "'>";
			html += "<a onclick='showContent("+ report.id + ")' href='javascript:void(0)'>"+report.listName + "</a></div></div></li></ul>";

			var reportP = {};
			var specialtyId = $("#id").html();
			if (level == 0) {
				$("#menuList").append(html);
				reportP.parentId = 1;
			} else {
				$("#list_" + parentId).parent().append(html);
				reportP.parentId = parentId;
			}

			reportP.id = report.id;
			reportP.content = report.content;
			reportP.listName = report.listName;
			reportP.specialtyId = specialtyId;
			reports.push(reportP);
			
			getChild(list, report.id, level + 1);
		}
	}
}*/
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

// 自评分和自评报告的切换函数
function changeZPTap(tap) {
	if (tap === 1) {
		$(".main-bottom-div-one").css("display", "block");
		$(".main-bottom-div-two").css("display", "none");
		$(".main-bottom-div-three").css("display", "none");
		$(".main-bottom-div-four").css("display", "none");
		/*
		 * $(".main-bottom-div-one").addClass("main-bottom-li-one");
		 * $(".main-bottom-div-two").addClass("main-bottom-li-two");
		 */
		$("#left").attr("class", "main-bottom-li-one");
		$("#right").attr("class", "main-bottom-li-two");
		$("#right1").attr("class", "main-bottom-li-two");
		$("#right2").attr("class", "main-bottom-li-two");
	} else if (tap === 2) {
		$(".main-bottom-div-one").css("display", "none");
		$(".main-bottom-div-three").css("display", "none");
		$(".main-bottom-div-four").css("display", "none");
		$(".main-bottom-div-two").css("display", "block");
		$("#left").attr("class", "main-bottom-li-two");
		$("#right1").attr("class", "main-bottom-li-two");
		$("#right2").attr("class", "main-bottom-li-two");
		$("#right").attr("class", "main-bottom-li-one");
		/*
		 * $(".main-bottom-div-one").addClass("main-bottom-li-two");
		 * $(".main-bottom-div-two").addClass("main-bottom-li-one");
		 */
	} else if (tap === 3) {
		$(".main-bottom-div-one").css("display", "none");
		$(".main-bottom-div-three").css("display", "block");
		$(".main-bottom-div-four").css("display", "none");
		$(".main-bottom-div-two").css("display", "none");
		$("#left").attr("class", "main-bottom-li-two");
		$("#right1").attr("class", "main-bottom-li-one");
		$("#right2").attr("class", "main-bottom-li-two");
		$("#right").attr("class", "main-bottom-li-two");
		/*
		 * $(".main-bottom-div-one").addClass("main-bottom-li-two");
		 * $(".main-bottom-div-two").addClass("main-bottom-li-one");
		 */
	}else if (tap === 4) {
		$(".main-bottom-div-one").css("display", "none");
		$(".main-bottom-div-three").css("display", "none");
		$(".main-bottom-div-four").css("display", "block");
		$(".main-bottom-div-two").css("display", "none");
		$("#left").attr("class", "main-bottom-li-two");
		$("#right1").attr("class", "main-bottom-li-two");
		$("#right2").attr("class", "main-bottom-li-one");
		$("#right").attr("class", "main-bottom-li-two");
		/*
		 * $(".main-bottom-div-one").addClass("main-bottom-li-two");
		 * $(".main-bottom-div-two").addClass("main-bottom-li-one");
		 */
	}

};
// 右侧自评考核意见表弹出层，自评分和支撑材料相符审核意见表，建议实地考查重点切换函数
function PopupZPDiv(n) {
	if (n == 1) {// 自评考核意见表弹出层
	/*	$(".cover-layer").css("display", "block");
		$("#popups1").css("display", "block");
		$("#popupshead").css("display", "block");*/
		showSelfAssessmentComments();
	} else if (n == 2) {// 自评分和支撑材料相符审核意见表
		$(".cover-layer").css("display", "block");
		$("#popups2").css("display", "block");
		showSelfConsistentOpinion();
	} else if (n == 3) {// 建议实地考查重点
		getFileInvestPoint();
		$(".cover-layer").css("display", "block");
		$("#popups3 textarea").attr("value", "");
		$("#popups3").css("display", "block");
	} else {
		$(".cover-layer").css("display", "none");
		$("#popups1").css("display", "none");
		$("#popups2").css("display", "none");
		$("#popups3").css("display", "none");

	}
};
// 单机阐述情况选项
function chooseLevel(obj) {
	if ($(obj).css("background-color") === "rgb(184, 184, 184)") {
		$(obj).parent().find("img").parent().css("background-color","#B8B8B8");
		$(obj).css("background-color", "#19C6A1");
	} else {
		$(obj).css("background-color", "#B8B8B8");
	}
}

// 显示自评考核意见表
function showSelfAssessmentComments() {
	$.ajax({
				url : "/audit/assessmentSelfScoreController/showSelfAssessmentComments.do",
				type : "POST",
				data : {
					"specialtyid" : $("#id").html(),
					"userId": $("#userId").html(),
					"syear":$("#syear").html()
				},
				dataType : "json",
				success : function(data) {
					var result = eval("(" + data + ")");
					/*console.info(result);*/
					result = result.assessmentSelfScore;
					/*console.info(result);*/
					var str = "";
					for ( var i = 0; i < result.length; i++) {
						var defen= result[i].selfscore==undefined?"":result[i].selfscore;
						str += "<tr>";
						str += "<td style='font-size: 14px;font-weight: 600;'>";
						str += result[i].onelevelname + "（ "
								+ result[i].onescore + "分）";
						str += "</td>";
						str += "<td style='line-height:28px'>";
						str += "<span style='font-weight: 600;' id='"
								+ result[i].twoid + "'>" + result[i].twoname
								+ "（<lable>" + result[i].twoscore + "</lable>分）。</span>"
								+ result[i].asdescription;
						str += "</td>";
						str += "<td style='line-height:25px'>";
						str += "<div class='popups-main-div' id='checked'>";
						str += "	 <ul>";
						if(result[i].elaborated==1){
							str += "		<li level='1' onclick='chooseLevel(this);' style='background-color: rgb(25, 198, 161);' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>合理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>";
						}else{
							str += "		<li level='1' onclick='chooseLevel(this);'  ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>合理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>";
						}
						if(result[i].elaborated==2){
							str += "		<li level='2' onclick='chooseLevel(this);' style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>较合理</li>";
						}else{
							str += "		<li level='2' onclick='chooseLevel(this);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>较合理</li>";
						}
						if(result[i].elaborated==3){
							str += "		<li level='3' onclick='chooseLevel(this);' style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>不够合理</li>";
						}else{
							str += "		<li level='3' onclick='chooseLevel(this);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>不够合理</li>";
						}
		                if(result[i].elaborated==4){
		                	str += "		<li level='4' onclick='chooseLevel(this);' style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>不合理</li>";
						}else{
							str += "		<li level='4' onclick='chooseLevel(this);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
							str += "		<li>不合理</li>";
						}
						str += "	 </ul>";
						str += "	</div> ";
						str += "</td>";
						str += "<td>";
						str += "<input type='text' style='width:60px;'  value='"
								+defen+ "' onblur='calculateTheScore(this)'/>";
						str += "</td>";
						str += "</tr>";
					}
					$("#popupsTbody").html(str);
					_w_table_rowspan("#popupsTbody", 1);
					$("#spanyj").html(result[0].opinion);
					$("#save").attr("accessselfid", result[0].accessselfid);
					$("#yjtext").val(result[0].opinioncontent);
					//如果date报错 数据库没有值 无碍！
					var date = result[0].access_self_date;
					if(date!=undefined){
						var a = date.split("-");
						$("#year").val(a[0]);
						$("#month").val(a[1]);
						$("#day").val(a[2]);
						$("#hjScore").val(result[0].descore);
					}
				},
				error : function() {
				}
			});

}

var filedInvest = {};
// 获取建议实地考察重点
function getFileInvestPoint() {
	$.ajax({
				url : "/audit/asAccessWebFiledInvestController/getAccessWebFiledInvest.do",
				type : "POST",
				data : {"specialty_ID" : $("#id").html(),"userId":$('#userId').html(),"year":$('#syear').html()},
				dataType : "json",
				success : function(data) {
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
					$("#popups3Tbody").html(str);

				},
				error : function() {
					alert("系统忙，请稍后重试！！！");
				}
			});
}
// 提交建议实地考察重点内容
function postFileInvestPointContent() {
	var jsonList = {};
	var popups3Table = $("#popups3Table");

	for ( var i = 0; i < filedInvest.length; i++) {
		jsonList["investContentList[" + i + "].field_invest_ID"] = filedInvest[i].id; // 指标id
		jsonList["investContentList[" + i + "].content"] = $("#popups3Text" + filedInvest[i].id).val(); // 该指标的建议内容
		jsonList["investContentList[" + i + "].year"] = $('#syear').html(); // 该指标的建议内容
		jsonList["investContentList[" + i + "].user_id"] = $('#userId').html(); // 该指标的建议内容
	}
	jsonList["specialty_ID"] = $("#id").html();
	$.ajax({
				url : "/audit/asAccessWebFiledInvestController/addAccessWebFiledInvestContent.do",
				type : "POST",
				data : jsonList,
				dataType : "json",
				success : function(data) {
					var result = eval("(" + data + ")");
					if (result.data > 0) {
						alert("保存成功！");
					} else
						alert("保存失败！");

				},
				error : function() {
					alert("保存失败！");
				}
			});

}
// 一次保存全部分数
function savaAllScore() {
	var id = "";
	var qk = "";
	var valScore = "";
	var str = "";
	var tr = $("#popupsTbody").find("tr");
	for ( var i = 0; i < tr.length; i++) {
		var td = $(tr[i]).find("td");
		for ( var j = 0; j < td.length; j++) {
			if ($(td[j]).find("span").attr("id") != null) {
				id = $(td[j]).find("span").attr("id");
			}
			var li = $(td[j]).find("li");
			for ( var k = 0; k < li.length; k++) {
				if ($(li[k]).css("background-color") === "rgb(25, 198, 161)") {
					qk = $(li[k]).attr("level");
					break;
				} else {
					qk = 0;
				}
			}
			var a=$(td[j]).find("input").val()
			valScore = a==""?0:a;
		}
		if (i != tr.length - 1) {
			str += id + "#" + qk + "#" + valScore+ "%";
		} else {
			str += id + "#" + qk + "#" + valScore;
		}
	}
	var hjScore = $("#hjScore").val();
	var yjtext = $("#yjtext").val();
	var date = $("#year").val() + "-" + $("#month").val() + "-"
			+ $("#day").val();
	var accessselfid = $("#save").attr("accessselfid");
	$.ajax({
				type : "POST",
				url : "/audit/assessmentSelfScoreController/saveSelfAssessmentComments.do",
				data : {
					"idAndQkAndScore" : str,
					"hjScore" : hjScore,
					"yjtext" : yjtext,
					"date" : date,
					"accessselfid" : accessselfid,
					"specialty_ID" : $("#id").html(),
					"userId": $("#userId").html(),
					"syear":$("#syear").html()
				},
				success : function(data) {
					alert("保存成功！");
				},
				error : function() {
					alert("保存失败！");
				}
			});
}

/**
 * 查看支撑材料意见表
 */
function showSelfConsistentOpinion(){
	var sid=$("#id").html();
	var userId=$("#userId").html();
	$.ajax({
		  url:"/audit/assessmentSelfScoreController/showSelfConsistentOpinion.do",
		  type:"POST",
		  data:{"sid":sid,"userId":userId,"txId": $("#txId").html(),"syear":$("#syear").html()},
		  dataType:"json",
		  success:function(data){
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
						str += "		<li level='1' onclick='chooseLevel(this);' style='background-color: rgb(25, 198, 161);' ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>合理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>";
					}else{
						str += "		<li level='1' onclick='chooseLevel(this);'  ><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>合理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>";
					}
					if(result[i].conformity==2){
						str += "		<li level='2' onclick='chooseLevel(this);' style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>较合理</li>";
					}else{
						str += "		<li level='2' onclick='chooseLevel(this);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>较合理</li>";
					}
					if(result[i].conformity==3){
						str += "		<li level='3' onclick='chooseLevel(this);' style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>不够合理</li>";
					}else{
						str += "		<li level='3' onclick='chooseLevel(this);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>不够合理</li>";
					}
	                if(result[i].conformity==4){
	                	str += "		<li level='4' onclick='chooseLevel(this);' style='background-color: rgb(25, 198, 161);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>不合理</li>";
					}else{
						str += "		<li level='4' onclick='chooseLevel(this);'><img style='padding-top:2px' src='img/majorEvaluation/choose.png'/></li>";
						str += "		<li>不合理</li>";
					}
					str+=   "  </ul>";
					str+=   "  </div> ";
					str+="</td>";
					str+="<td>";
					str+= "<input type='text' style='width:60px;padding-left: 35px;'  value='"
						+defen+ "' onblur='calculateTheScoretwo(this)'/>";
					str+="</td>";
				  str+="</tr>";
			  }
			  $("#cltable").html(str);
			 var span= $("span[name='mScore']");
			 var xitScore=0;
			 for ( var i = 0; i < span.length; i++) {
				 xitScore+= Number($(span[i]).text());
			 }
			 $("#xitScore").html(xitScore);
			 _w_table_rowspan("#cltable", 1);
			 $("#peneralyjtext").val(result[0].GENERAL_OPINION);
			//如果date报错 数据库没有值 无碍！
				var date = result[0].GENERAL_TIME;
				if(date!=undefined){
					var a = date.split("-");
					$("#peneralyear").val(a[0]);
					$("#peneralmonth").val(a[1]);
					$("#peneralday").val(a[2]);
				}
				$("#peneralhjScore").val(result[0].GENERAL_SCORE);
		  },
		  error:function(){
			  alert("查询失败！");
		  }
		
	})
}
/**
 * 一次保存支撑材料意见表分数
 */
function saveAllPeneralScore(){
	var id = "";
	var qk = "";
	var valScore = "";
	var str = "";
	var tr = $("#cltable").find("tr");
	for ( var i = 0; i < tr.length; i++) {
		var td = $(tr[i]).find("td");
		for ( var j = 0; j < td.length; j++) {
			if ($(td[j]).attr("id") != null) {
				id = $(td[j]).attr("id");
			}
			var li = $(td[j]).find("li");
			for ( var k = 0; k < li.length; k++) {
				if ($(li[k]).css("background-color") === "rgb(25, 198, 161)") {
					qk = $(li[k]).attr("level");
					break;
				} else {
					qk = 0;
				}
			}
			var a=$(td[j]).find("input").val()
			valScore = a==""?0:a;
		}
		if (i != tr.length - 1) {
			str += id + "#" + qk + "#" + valScore+ "%";
		} else {
			str += id + "#" + qk + "#" + valScore;
		}
	}
	var hjScore = $("#peneralhjScore").val();
	var yjtext = $("#peneralyjtext").val();
	var date = $("#peneralyear").val() + "-" + $("#peneralmonth").val() + "-"
			+ $("#peneralday").val();
	$.ajax({
		 type:"POST",
		 url:"/audit/assessmentSelfScoreController/saveAllPeneralScore.do",
		 data:{
			    "idAndQkAndScore" : str,
				"hjScore" : hjScore,
				"yjtext" : yjtext,
				"date" : date,
				"specialty_ID" : $("#id").html(),
				"userId": $("#userId").html(),
				"accessselfid":$("#save").attr("accessselfid"),
				"syear":$("#syear").html()
		 },
		 success:function(){
			 alert("保存成功！");
		 },
		 error: function(){
			 alert("保存失败！");
		 }
		 
	});
}
/**
 *  计算总分one
 */
 function calculateTheScore(element){
	 var fen=$(element).val();
	 var lable=$(element).parent().parent().find("span").find("lable").text();
	 if(parseInt(fen)>parseInt(lable)){
		 alert("所填分值大于满分，请重新填写！");
		 $(element).val(0);
	 }
	var listinput=$("#popupsTbody").find("input");
	var arr =new Array();
	for ( var i = 0; i < listinput.length; i++) {
		arr[i]=$(listinput[i]).val()==""?0:$(listinput[i]).val()
	}
	var result = 0;
	for(var i = 0; i < arr.length; i++) {
		   result += Number(arr[i]);
	} 
		$("#hjScore").val(result);
 }
 
 
 /**
  *  计算总分two
  */
  function calculateTheScoretwo(element){
 	var listinput= $("#cltable").find("input");
 	 var fen=$(element).val();
	 var lable=$(element).parent().parent().find("span").text();
	 if(fen>lable){
		 alert("所填分值大于满分，请重新填写！");
		 $(element).val(0);
	 }
 	var arr =new Array();
 	for ( var i = 0; i < listinput.length; i++) {
 		arr[i]=$(listinput[i]).val()==""?0:$(listinput[i]).val()
 	}
 	var result = 0;
 	for(var i = 0; i < arr.length; i++) {
 		   result += Number(arr[i]);
 	} 
 		$("#peneralhjScore").val(result);
  }
 function showOnline(element){
	 window.open("page/majorEvaluation/readonline.jsp?wj="+element,null,"height=300, width=800, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
	// window.location.href="page/majorEvaluation/readonline.jsp?wj="+element;
}
 function showzpf(a,threeid){
      var type=  $(".main-bottom-top").find("li[class=main-bottom-li-one]").attr("type")
	  if(type==1){
		 document.getElementById(a).scrollIntoView();
			$("#"+a).parent().parent().parent().find("a").css({color:"black"});
			$("#"+a).css({color:"red"}) ;
	  }else if(type==3){
		 var b=a.split("hsss");
		 var syear=$("#syear").text();
		 $.ajax({
			 url:"/audit/assessmentSelfScoreController/showAssessmentSelfZPF.do",
			 tyype:"post",
			 dataType:"json",
			 data:{"detailid":b[1],"syear":syear,"sid":$("#id").text()},
			 success:function(data){
				 var result=eval("("+data+")");
				 if(result.length<=0){
					 $("#main-bottom-div-three").html("<div style='margin-left: 10px;margin-top: 10px;margin-bottom: 5px;color:red' id='table_title'>暂无数据表</div>");
				     return;
				 }
				 var str="";
				 for ( var i = 0; i < result.length; i++) {
					str+="<div style='margin-left: 10px;margin-top: 10px;margin-bottom: 5px' id='table_title'>表名："+result[i].table+"</div>";
					str+="<table style='margin-left: 10px'> <thead>";
					for ( var j = 0; j < result[i].title.length; j++) {
						str+="<th style='padding-left: 5px;padding-right: 5px;' nowrap='nowrap'>"+result[i].title[j]+"</th>";
					}
					str+="";
					str+="</thead> <tbody > ";
					for ( var k = 0; k < result[i].content.length; k++) {
						str+=" <tr>" ;
						for ( var l = 0; l < result[i].content[k].length; l++) {
							str+="<td nowrap='nowrap'>"+result[i].content[k][l]+" </td>";
						}
						str+="</tr> ";
					}
					str+="  </tbody> </table>";
				 }
				 $("#main-bottom-div-three").html(str);
			 },error:function(){
				 
			 }
		 });
	  }else if(type==4){
		  $.ajax({
			   url:"/audit/assessmentSelfScoreController/showAssessmentSelfZCCL.do",
			 tyype:"post",
			 dataType:"json",
			 data:{
				  "specialtyid" : $("#id").html(),
				  "txId": $("#txId").html(),
			      "syear": $("#syear").html(),
			      "threeid": threeid,
			 },
			 success:function(data){
				 var result= eval("("+data+")");
			if(result!=null&&result!="null"){
					 str="";
					 for ( var i = 0; i < result.length; i++) {
						 str+= "<li class='main-bottom-li-one'   onclick=\"showZCCL('"+result[i].dataType+"','"+result[i].dataOnlineSrc+"');\">"+result[i].name+"</li>";
					 }
					 $("#div-four-ul").html(str);
			}else{
				 $("#div-four-ul").html("<li class='main-bottom-li-one' style='color : red'>没有支撑材料</li>");
			}
			 },
			 error:function(){
				 
			 }
		  })
		    
	  }
		    
	
 }
 
 function showZCCL(dataType,onlineurl){ 
	 var OfficePostFixs= ["doc", "docx", "xls","xlsx", "ppt", "pptx","pdf","txt"];
	 var imgPostFixs= ["png", "jpeg", "jpg","gif", "bmp", "tiff","psd","svg"];
	 var isContain=false;
	 var isImg=false;
	 $.each( OfficePostFixs, function(i, n){
		  if(dataType==n){
			  isContain=true;
		  }
		});
	 $.each( imgPostFixs, function(i, n){
		 if(dataType==n){
			 isImg=true;
		 }
	 });
	 if(isContain){
	 
	 var a="/audit/"+onlineurl;
	 var fp = new FlexPaperViewer(    
             '/audit/FlexPaper/swfFiles/FlexPaperViewer', 
            //  对应于p 标签的id
             'viewerPlaceHolder',   
             { config : { 
           //导入的.swf的路径,文件名称使用英语表示，中文时显示不出来，暂时未解决这个问题
            SwfFile :escape(a),
           //  SwfFile :escape('F:\\upload\\1431589237438.swf'),                
             Scale : 1.6, 
             ZoomTransition : 'easeOut',
             ZoomTime : 0.5,
             ZoomInterval : 0.2,
             FitPageOnLoad : true,
             FitWidthOnLoad : true,
             PrintEnabled : true,// 是否可以打印  
             FullScreenAsMaxWindow : false,
             ProgressiveLoading : false,
             MinZoomSize : 0.2,
             MaxZoomSize : 10,
             SearchMatchAll : false,
             InitViewMode : 'Portrait',
             
             ViewModeToolsVisible : true,
             ZoomToolsVisible : true,
             NavToolsVisible : true,
             CursorToolsVisible : true,
             SearchToolsVisible : true,
               localeChain: 'en_US'
             }});
	  }else if(isImg){
			 var str="<img src='"+"/audit/"+onlineurl+"'></img>";
			$("#viewerPlaceHolder").html(str);
	  }else{
		  medioPlayer(onlineurl);
	  }
 }
 

 function calculateTheScoreNEW(element){
	 var fen= $(element).val();
	 var lable= $(element).attr("sc");
	 var sumscore=0;
	 if(!isNaN(fen)){
		 if(parseInt(fen)>parseInt(lable)){
			 alert("得分大于总分请重新填写！");
			 $(element).val(0);
		 }else{
			var score= $("#tbodyright").find("input");
			for ( var i = 0; i < score.length; i++) {
				sumscore+=parseInt($(score[i]).val());
			};
		 }
		 
		}else{
		   alert("填写的不是数字请重新填写！");
		   $(element).val(0);
		}
	$("#ffff").val(sumscore);
 }
 
 function saveAllScore(){
		var scorelevel= $("#tbodyright").find("input");
		var str="";
		for ( var i = 0; i < scorelevel.length; i++) {
			str+=$(scorelevel[i]).attr("threeid")+"#"+$(scorelevel[i]).val()+"@";
		}
		var zf= $("#ffff").val();
		var yjtext= $("#yjtext").val();
		var insert_time= $("#year").val()+"-"+$("#month").val()+"-"+$("#day").val();
		
		$.ajax({
			url:"/audit/assessmentSelfScoreController/saveAllScore.do",
			type:"POST",
			data:{"str":str,
				"specialtyid" : $("#id").html(),
				"userId": $("#userId").html(),
				"txId": $("#txId").html(),
				"syear": $("#syear").html(),
				"zf":zf,
				"yjtext":yjtext,
				"insert_time":insert_time,
				"zjqm":$("#zjqm").val()
				},
			dataType:"json",
			success:function(data){
				alert("保存成功！");
			},
			error:function(){
				alert("保存失败！");
			}
		});
		
 }
 jwplayer.key="31oe7aL9m7YS2iKQgS4r2VtsLroodWRuHrbZRg==";
 var thePlayer;  //保存当前播放器以便操作  
 function medioPlayer(onlineurl){
	 var onurl="/audit/"+onlineurl;
	 var str="<div id='container'></div>" +
	 		"<input type='button' class='player-play' value='播放' />" +
	 		"<input type='button' class='player-stop' value='停止' />" +
	 				"<input type='button' class='player-status' value='取得状态' />" +
	 						"<input type='button' class='player-current' value='当前播放秒数' />" +
	 								"<input type='button' class='player-goto' value='转到第30秒播放' />" +
	 								"<input type='button' class='player-length' value='视频时长(秒)' />"  
  
  
  
  
  

	$("#viewerPlaceHolder").html(str);
	 player(onurl); 
	//播放 暂停  
     $('.player-play').click(function() {  
         if (thePlayer.getState() != 'PLAYING') {  
             thePlayer.play(true);  
             this.value = '暂停';  
         } else {  
             thePlayer.play(false);  
             this.value = '播放';  
         }  
     });  
       
     //停止  
     $('.player-stop').click(function() { thePlayer.stop(); });  
       
     //获取状态  
     $('.player-status').click(function() {  
         var state = thePlayer.getState();  
         var msg;  
         switch (state) {  
             case 'BUFFERING':  
                 msg = '加载中';  
                 break;  
             case 'PLAYING':  
                 msg = '正在播放';  
                 break;  
             case 'PAUSED':  
                 msg = '暂停';  
                 break;  
             case 'IDLE':  
                 msg = '停止';  
                 break;  
         }  
         alert(msg);  
     });  
       
     //获取播放进度  
     $('.player-current').click(function() { alert(thePlayer.getPosition()); });  

     //跳转到指定位置播放  
     $('.player-goto').click(function() {  
         if (thePlayer.getState() != 'PLAYING') {    //若当前未播放，先启动播放器  
             thePlayer.play();  
         }  
         thePlayer.seek(30); //从指定位置开始播放(单位：秒)  
     });  
       
     //获取视频长度  
     $('.player-length').click(function() { alert(thePlayer.getDuration()); });  
 
 }
  
 function player(onurl) {  
     thePlayer = jwplayer('container').setup({  
         flashplayer: '/audit/jwplayer-7.6.1/player.swf',  
         file: onurl, 
         width: 746,  
         height: 450,  
         dock: false  
     });}
 