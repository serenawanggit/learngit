$(function(){
	validateLogin();
	selectLoad();
	getData();
})
var sContentPath;
var dataRecord;
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
	
}
function selectLoad(){
	sContentPath = getContentPath();
	var specialtyId = $("#specialtyId").val();
	var dateYear = $("#dateYear").val();
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
	
	$.ajax({
		url: sContentPath +"/assessInspect/selectExpedition.do",
		type:'POST',
		dataType:'json',
		async:false,
		success:function(data){
				var datas = eval("("+data+")");
				if(datas!=null&&datas.length>0){
					for ( var i = 0; i < datas.length; i++) {
						$("#select1").append("<option value='"+datas[i].id+"'>"+datas[i].act_name+"</option>")
					}
				}
			$("#select2").ligerDateEditor({
              	format: "yyyy/MM/dd",
              	label: '时间',
              	labelWidth: 35,
              	cancelable : false,
              	onChangeDate:dateChange
              });
		}
	})
	$("table tr:eq(0) td:eq(1)").html($("#select1 option:checked").text());

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
				if(datas[0].site_visits!=null&&datas[0].site_visits!="~"){
					var date = new Date();
					var dates = datas[0].site_visits.split("~");
					var nowDate = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
					if(Date.parse(dates[0].replace('-','/').replace('-','/'))<=Date.parse(nowDate)&&Date.parse(nowDate)<=Date.parse(dates[1].replace('-','/').replace('-','/'))){
						$("#ss").show();
					}else{
						$("#ss").hide();
					}
				}else{
					$("#ss").hide();
				}
			}
		}
	});
}
function getData(){
	var userId = $("#select3").val()
	$.ajax({
		url:sContentPath +"/assessInspect/selectFieldRecord.do",
		type:'POST',
		async:false,
		dataType:'json',
		data:{
			"rid":$("#select1").val(),
			"specialtyId":$("#specialtyId").val(),
			"syear":$("#dateYear").val(),
			"userId":userId
		},
		success:function(data){
			var datas = eval("("+data+")");
			dataRecord = datas;
			if(datas!=null&&datas.length>0){
				$("table tr:eq(2) td:eq(1)").html(datas[0].showname);
				$("table tr:eq(1) td:eq(1)").html(datas[0].FIELD_TEST_RECORD_DATE);
				$("#select2").val(datas[0].FIELD_TEST_RECORD_DATE);
				$("#content").val(datas[0].content);
			}else{
				$("#content").val("");
				$("table tr:eq(2) td:eq(1)").html("");
				$("table tr:eq(1) td:eq(1)").html("");
				$("#select2").val("")
			}
		}
	})
	
}
 
function dateChange(){
var dateTime = $("#select2").val();
$("table tr:eq(1) td:eq(1)").html(dateTime);
}
function activityChange(){
	getData();
	$("table tr:eq(0) td:eq(1)").html($("#select1 option:checked").text());
}

function saveInspect(){
	var userId = $("#select3").val();
	if(userId==0){
		if(dataRecord!=null&&dataRecord.length>0){
			$.ajax({
				url:sContentPath +"/assessInspect/updateTestRecord.do",
				type:'POST',
				data:{
					"fieldRecord":$("#select2").val(),
					"content":$("#content").val(),
					"id":dataRecord[0].id
				},
				success:function(data){
					alert(data)
					getData();
				}
			})
		}else{
			$.ajax({
				url:sContentPath +"/assessInspect/insertTestRecord.do",
				type:'POST',
				data:{
					"rid":$("#select1").val(),
					"fieldRecord":$("#select2").val(),
					"content":$("#content").val(),
					"specialtyId":$("#specialtyId").val(),
					"syear":$("#dateYear").val()
				},
				success:function(data){
					alert(data);
					getData();
				}
			})
			
		}
	}else{
		alert("不能保存他人的表!");
	}
}
function changeDataByPeople(){
	getData();
	
}
function ExportWordHtml(){
	$("#content").html($("#content").val());
	var contents = "<div>"+$("#tableDiv").html()+"</div>";
/*	contents+="<div>填表说明：</br>1.本表作为专家在开展不同考察活动时的工作记录表,相关记录信息供专家在撰写结论及意见时参考;</br>" +
			"2.根据访谈、考察实验室、内部会议等不同考察活动复制本表。</div></div>";*/
	$("#contents").val(contents);
	$("#speName").val("现场考查工作记录表");
	$("#exportWord").submit();	
}