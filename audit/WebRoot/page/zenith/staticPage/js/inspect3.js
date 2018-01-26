$(function(){
	validateLogin();
	var  specialtyId = $("#specialtyId").val();
	var dateYear= $("#dateYear").val()
	var  sContentPath = getContentPath();
	$.ajax({
		url: sContentPath+"/assessInspect/getAllData.do",
		type:'POST',
		data:{
			"specialtyId":specialtyId
		},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=""&&datas!=null){
				$("#assess_self").html("提交报告时间:"+datas[0].site_visits);
				$("#specialtys").html(datas[0].specialty_name);
				$("#specialty1").html(datas[0].specialty_name);
				if(datas[0].site_visits!=null&&datas[0].site_visits!="~"){
					var date = new Date();
					var dates = datas[0].site_visits.split("~");
					var nowDate = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
					if(Date.parse(dates[0].replace('-','/').replace('-','/'))<=Date.parse(nowDate)&&Date.parse(nowDate)<=Date.parse(dates[1].replace('-','/').replace('-','/'))){
						$("#submit1").show();
						$("#excelTable").show();
						$("#excelTable1").show();
					}else{
						$("#submit1").hide();
						$("#excelTable").hide();
						$("#excelTable1").hide();
					}
				}else{
					$("#submit1").hide();
					$("#excelTable").hide();
					$("#excelTable1").hide();
				}
			}
		}
	});
	$.ajax({
		url:sContentPath+"/assessInspect/getRole.do",
		type:'POST',
		dataType:'json',
		data:{"specialtyId":specialtyId},
		async:false,
		success:function(data){
			var datas = eval("("+data+")");
			if(datas!=null&&datas.length>0){
				var m = 0;
				for ( var i = 0; i < datas.length; i++) {
					if(datas[i].assess_type==5){
						m++;
					}
				}
				if(m>0){
					$.ajax({
						url:sContentPath+"/assessInspect/getPeople.do",
						type:'POST',
						dataType:'json',
						data:{
							"specialtyId":specialtyId,
							"syear":dateYear
						},
						async:false,
						success:function(data){
							var datas = eval("("+data+")");
							if(datas!=null&&datas.length>0){
								for ( var i = 0; i < datas.length; i++) {
									$("#select3").append("<option value='"+datas[i].ASSESS_SELF_USER+"'>"+datas[i].showname+"</option>")
								}
								$("#showPeople").show();
							}
						}
					});
				}
			}
		}
	});
	selectLoad();
})
var num =2;
var sContentPath;
var dataGra;
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}


function selectLoad(){
	num = 2
	sContentPath = getContentPath();
	$.ajax({
		url: sContentPath +"/assessInspect/selectGraduation.do",
		type:'POST',
		dataType:'json',
		data:{
			"specialtyId":$("#specialtyId").val(),
			"userId":$("#select3").val(),
			"syear":$("#dateYear").val()
		},
		success:function(data){
			var datas = eval("("+data+")");
			dataGra =datas;
			if(datas!=null&&datas.length>0){
				var ss = 1;
				for ( var j = 2; j < datas.length; j++) {
					addAssessShow();
				}
				for ( var i = 0; i < datas.length; i++) {
					if(datas[i].TYPE==1){
						$("#grade"+ss).val(datas[i].GRADE);
						$("#num"+ss).val(datas[i].NUM);
						$("#assessData"+ss).val(datas[i].CONTENT);
						$("#assessProblem"+ss).val(datas[i].EXISTING_PROBLEMS);
						ss++;
					}else{
						$("#assessSug").val(datas[i].PROPOSAL);
						$("input[name=assessAll1][value="+datas[i].OVERALL_EVALUATION_REVIEW+"]").attr("checked",true);
					}
				}
			}else{
				var ss =1;
				$("#grade1").val("");
				$("#num"+ss).val("")
				$("#assessData"+ss).val("");
				$("#assessProblem"+ss).val("");
				$("#assessSug").val("");
				$("input[name=assessAll1][value='90']").attr("checked",true);
			}
		}
	})
}
function addAssessShow(){
	var htmls="<div id='content"+num+"' style='width:100%;height:300px;border:0px solid;'><div style='font-size:16px;'>"
    +"阅读了<span id='gradeSpan"+num+"'></span><input id='grade"+num+"' style='border-top:0 solid;border-left:0 solid;border-right:0 solid;width:50px;'/>年级 "
    +$("#specialtys").html()+" 专业毕业论文（"
    +"<span id='numSpan"+num+"'></span><input id='num"+num+"' style='border-top:0 solid;border-left:0 solid;border-right:0 solid;width:50px;'/>份），总体评价如下：</div>"
+"<textarea id='assessData"+num+"' style='width:100%;height:36%;margin-top:1px;'></textarea>"
+"<span style='font-size:16px;'>存在的问题：</span><br>"
+"<textarea id='assessProblem"+num+"' style='width:100%;height:48.5%;margin-top:1px;'></textarea></div>";
	$("table tr:eq(0) td").append(htmls);
	num=num+1;
}
function deleteAssessShow(){
	var num1 = num -1;
	if(num1!=1&&$("content"+num1)!=undefined){
		$("#content"+num1).remove()	
		num=num-1;
	}else{
		alert("只剩一行不能删除！");
	}
	
}

function submitInspect(){
	var userId = $("#select3").val();
	if(userId==0){
		
		
		
	
var max =	$("table tr").length;
var datass =[];
for ( var i = 1; i < num; i++) {
	var obj = new Object();
	if(dataGra!=null&&dataGra.length>0&&i<dataGra.length){
		obj.id = dataGra[i-1].ID;
	}
	var reg = new RegExp("^[0-9]+$","gi");
	if(!reg.test($("#num"+i).val())){
		alert("不能含有非数字的!");
		return;
	}
	obj.content = $("#assessData"+i).val();
	obj.grade=$("#grade"+i).val();
	obj.num=$("#num"+i).val();
	obj.existing_problems=$("#assessProblem"+i).val();
	obj.type=1;
	datass.push(obj);
}
var obj1 = new Object();
obj1.proposal = $("#assessSug").val();
obj1.overrall_evaluation_review = $("input[name='assessAll1']:checked").val();
obj1.type=2;
if(dataGra!=null&&dataGra.length>0){
	obj1.id = dataGra[dataGra.length-1].ID;
}
datass.push(obj1);
var jsondatas = JSON.stringify(datass);
for ( var n = 2; n < num; n++) {
	$("#content"+n).remove()	
}
	if(dataGra!=null&&dataGra.length>0){
		var datass1 = [];
		var datass2 = [];
		var dataGrad ;
		if(dataGra.length<num){
			for ( var j = 0; j < dataGra.length-1; j++) {
				datass1.push(datass[j]);
			}
			for ( var k = dataGra.length-1; k < num-1; k++) {
				datass2.push(datass[k])
			}
			datass1.push(datass[num-1]);
			$.ajax({
				url: sContentPath +"/assessInspect/insertGraduation.do",
				type:'POST',
				data:{
					"jsonData":JSON.stringify(datass2),
					"specialtyId":$("#specialtyId").val(),
					"syear":$("#dateYear").val()
				},
				success:function(data){
				}
			})
			$.ajax({
				url: sContentPath +"/assessInspect/updateGraduation.do",
				type:'POST',
				data:{
				"jsonData":JSON.stringify(datass1)
				},
				success:function(data){
					alert(data);
					selectLoad();
				}
			})
					
		}else{
			if(dataGra.length>num){
				for ( var j = 0; j < num-1; j++) {
					datass1.push(datass[j]);
				}
				for ( var k = num-1; k < dataGra.length-1; k++) {
					datass2.push(dataGra[k].ID);
				}
				datass1.push(datass[num-1]);
				$.ajax({
					url: sContentPath +"/assessInspect/deleteGraduation.do",
					type:'POST',
					async:false,
					data:{
					"ids":datass2
					},
					success:function(data){
					}
				})
				$.ajax({
					url: sContentPath +"/assessInspect/updateGraduation.do",
					type:'POST',
					async:false,
					data:{
					"jsonData":JSON.stringify(datass1)
					},
					success:function(data){
						alert(data);
						selectLoad();
					}
				})
			}else{
				$.ajax({
					url: sContentPath +"/assessInspect/updateGraduation.do",
					type:'POST',
					async:false,
					data:{
					"jsonData":JSON.stringify(datass)
					},
					success:function(data){
						alert(data);
						selectLoad();
					}
				})
			}
		}
	}else{
		$.ajax({
			url: sContentPath +"/assessInspect/insertGraduation.do",
			type:'POST',
			data:{
				"jsonData":jsondatas,
				"specialtyId":$("#specialtyId").val(),
				"syear":$("#dateYear").val()
			},
			success:function(data){
				alert(data);
				selectLoad();
			}
		})
	}
	num = 2;
	}else{
		alert("不能保存他人的表!");
	}
}
function ExportWordHtml(){
	for ( var i = 1; i < num; i++) {
		$("#assessData"+i).html($("#assessData"+i).val());
		$("#gradeSpan"+i).html($("#grade"+i).val());
		$("#numSpan"+i).html($("#num"+i).val());
	}
	$("#assessSug").html($("#assessSug").val());
//	$("#assessData1").html($("#assessData1").val());
	var contents = "<div>"+$("#tableDiv").html()+"</div>";
/*	contents+="<div>填表说明：</br>1.本表作为专家在开展不同考察活动时的工作记录表,相关记录信息供专家在撰写结论及意见时参考;</br>" +
			"2.根据访谈、考察实验室、内部会议等不同考察活动复制本表。</div></div>";*/
	contents+="<div><span style='float:right'>日期：<input style='border-top:0 solid;border-left:0 solid;border-right:0 solid;border-bottom:1 solid;'/></span>"+
			"<span style='float:right'>专家签名:<input style='border-top:0 solid;border-left:0 solid;border-right:0 solid;border-bottom:1 solid;'/></span></div>";
	$("#contents").val(contents);
	$("#speName").val("学生论文(设计)情况表");
	$("#exportWord").submit();
	for ( var n = 2; n < num; n++) {
		$("#content"+n).remove()	
	}
	$("#gradeSpan1").html("");
	$("#numSpan1").html("");
	selectLoad();
	
}

function changeDataByPeople(){
	for ( var n = 2; n < num; n++) {
		$("#content"+n).remove()	
	}
	selectLoad();
}