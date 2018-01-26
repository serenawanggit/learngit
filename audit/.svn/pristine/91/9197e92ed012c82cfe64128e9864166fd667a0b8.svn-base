
$(function(){
	validateLogin();
	// $("#loading1").show();
	var specialtyId = $("#specialtyId").val();
	if(specialtyId==null||specialtyId=="null"){
		$("#specialtys").html("专家组考查报告");
		$("#mid").hide();
		$("#mids").show();
		$("#saveContent").hide();
		$('#showSpan').hide();
		$("#uploadContent").hide();
		initZyName();
		setDisabled();
		$("#yijian_ul2_zy li").css("cursor","pointer")
		$("#yijian_ul2_zy li").mouseover(function(){
			$(this).css("background-color","#2f93fd")
		})
		$("#yijian_ul2_zy li").mouseout(function(){
			$(this).css("background-color","#FFF")
		})
	}else if($("#readRole").val()!=null&&$("#readRole").val()!='null'&&$("#readRole").val()!=undefined){
		$("#specialtys").html("专家组考查报告");
		$("#saveContent").hide();
		$("#uploadContent").hide();
		$("#myEditor").attr("style","padding-top:4%");
		load();
		getAllReport();
		$("#deleteRep").hide();
		$("#changeState").show();
		$('#showSpan').hide();
		setDisabled();
	}else{
		load();
		getAllReport();
		$("#myEditor").attr("style","padding-top:4%");
	}
	if(dates!=null&&dates!=undefined){
		var date = new Date();
		var nowDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
		if(Date.parse(dates.split("~")[0])>Date.parse(nowDate)||Date.parse(nowDate)>Date.parse(dates.split("~")[1])){
			$("#saveContent").hide();
			$("#uploadContent").hide();
			$("#deleteRep").hide();
			$('#showSpan').hide();
		}
	}
	
	// $("#loading1").hide();
});
var sContentPath = getContentPath();
var report_Id =0;
var choose;
var sysid;
var dateYear;
var taskInfo;
var uid =0;
var dates;
var specialtyNames;
function getContentPath(){
	var pathName = document.location.pathname;
	var index = pathName.substr(1).indexOf("/");
	var result = pathName.substr(0, index + 1);
	return result;
}
//下拉切换
function xiala(id){	
	$("#"+id).toggle(200);
}

//选择
function choose(obj){
		var id=$(obj).parent().parent().siblings(":input").val($(obj).html());
		$(obj).parent().parent().toggle(200);
}

//查询信息
function changeData(){
	load();
	getAllReport();
}
//查询专业名称
function initZyName(){
	$.ajax({
		url: "/audit/AssessmentSpecialtyInfoWangPingController/selectZyName.do",
		type:'POST',
		async:false,
		data:{},
		dataType:'json',
		success:function(data){
			var str="";
			$(data).each(function(k,v){
				str+="<li style=\"padding-left:5px\" onclick=\"choose(this)\">"+v+"</li>"
			})
			$("#yijian_ul2_zy").html(str);
		}
	})
}

function load(){
	sysid = 0;
	dateYear = $("#dateYear").val();
	var specialtyId = $("#specialtyId").val();
	if(specialtyId==null||specialtyId=="null"){
		dateYear==$("#rYear_yijian").val();
		specialtyId==$("#sp_name2_zy").val();
	}else{
		$.ajax({
			url: sContentPath+"/asAssessReport/getAllData.do",
			type:'POST',
			data:{
				"specialtyId":specialtyId
			},
			async:false,
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
				if(datas!=""&&datas!=null){
					$("#assess_self").html("提交报告时间:"+datas[0].site_visits);
					$("#specialtys").html(datas[0].specialty_name);
					specialtyNames=datas[0].specialty_name;
					dates=datas[0].site_visits;
				}
			}
		});
	}
/*	$.ajax({
		url: sContentPath+"/asAssessReport/getSystemById.do",
		type:'POST',
		data:{
			"id":sysid
		},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			if(datas[0].remark!=null&&datas[0].remark!=undefined&&datas[0].remark!=""){
				$("#remarks").html("<span style='color:red;font-weight:bold'>备注:</span><br/><div style='color:red;font-size:12px;'>"+datas[0].remark+"</div>");
			}
		}
	});*/
	
}
function getAllReport(){
	var specialtyId = $("#specialtyId").val();
	var specialtyName;
	var id = 0;
	if(specialtyId==null||specialtyId=="null"){
		dateYear=$("#rYear_yijian").val();
		specialtyName = $("#sp_name2_zy").val();
		sysid=0;
	}
	
	if($("#state").val()=='selfer'){
	
		specialtyName = specialtyNames;
		sysid=0;
	}
	$("#loading ceneter").html("正在加载中....");
	$("#loading").show();
	var readRole =$("#readRole").val();
	if(readRole==null||readRole==undefined||readRole=='null'){
		 readRole = 1;
	}
	$.ajax({
		url:sContentPath+"/asAssessReport/getAllReport.do",
		type:'POST',
		async:false,
		data:{
			"specialtyId":specialtyId,
			"specialtyName":specialtyName,
			"rYear":dateYear,
			"sysid":sysid,
			"readRole":readRole
		},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			var htmls = "<tr><td>文件名</td><td>类型</td><td>状态</td><td>操作</td></tr>";
			if(datas!=null&&datas!="null"&&datas!=""){
				uid = datas[0].id;
				report_Id = datas[0].id;
				$("#saveContent").attr("onclick","saveContent("+uid+")");
				if(datas[0].enterContent!=null&&datas[0].enterContent!=""){
					setContent(datas[0].enterContent,false);
					$("#showReport").html(htmls);
				}
				if(datas[0].uploadAddress!=null&&datas[0].uploadAddress!=""){
					
				var address = datas[0].uploadAddress.split(".");
				htmls+="<td>"+datas[0].uploadFiles+"</td><td>"+address[address.length-1]+"</td><td>上传成功</td>";
				htmls+="<td><a href='javascript:void(0)' onclick='deleteReport("+datas[0].id+");' id='deleteRep'><img src='page/zenith/staticPage/img/delete.png'></a>&nbsp;&nbsp;"+
						"<a href='/audit/asAssessReport/downReport.do?id="+datas[0].id+"'><img src='page/zenith/staticPage/img/download.png'></a></td></tr>";
			}
				$("#showReport").html("");
				$("#showReport").html(htmls);
			if(specialtyId==null&&specialtyId==undefined){
				$("#deleteRep").hide();
			}
			if(datas[0].isRead==1){
				$("#changeState").html("当前报告已预览");
				$("#changeState").css("color","red");
				$("#myEditor").attr("style","padding-top:1%");
				$("#deleteRep").hide();
			}
		}else{
			$("#saveContent").attr("onclick","saveContent("+0+")");	
			$("#showReport").html(htmls);
		}
			$("#loading").hide();
		}
	})
}


function deleteReport(id){
	$.ajax({
		url:sContentPath+"/asAssessReport/saveReport.do",
		type:'POST',
		async:false,
		data:{
			"uploadAddress":" ",
			"uploadFiles":" ",
			"uploadContent":" ",
			"id":id
		},
		success:function(data){
			 alert("修改成功");
			 getAllReport();
		}
		
	})
	
}

function deleteSupport(id){
	$.ajax({
		url:sContentPath+"/asAssessReport/DeleteSupById.do",
		type:'POST',
		async:false,
		data:{
			"id":id
		},
		success:function(data){
		 alert("修改成功");
			getAllReport();
		}
	})
}
function setContent(content,ss){
	
var ueditor = 	UE.getEditor('myEditor');
	ueditor.addListener("ready", function () {
        // editor准备好之后才可以使用
        ueditor.setContent(content,ss);

});
	
}
function checkFile(){
	var specialtyId = $("#specialtyId").val();
	if(choose==1){
		$("#uploadForm").attr("action","/audit/asAssessReport/uploadReport.do");
		
	}else{
		$("#uploadForm").attr("action","/audit/asAssessReport/uploadSupport.do");
	}

	if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
		$("#loading ceneter").html("正在上传中....");
		$("#loading").show();
			$("#uploadForm").ajaxSubmit({
				data:{
					"uid":uid,
					"sysId":sysid,
					"specialtyId":specialtyId,
					"reportId":report_Id,
					"dateYear":dateYear
				},
		        success: function (data) {
		        	$("#loading").hide();
		           alert("上传成功");
		           getAllReport();
		           closed();
		        
		        	}
		        })
		
	}else{
		alert("上传文件不能为空！");
	}
}
function showUpload(id){
	choose =id
	$("#uploadFile").click();
}

function uploadReport(){
	// $("#loading1").show();
$("#uploadForm").attr("action","/audit/asAssessRetification/uploadRequest.do")
if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
	$("#uploadForm").ajaxSubmit({
        success: function (data) {
           alert(data);
           getAllReport();
           $("#downHide").hide();
        }
        })
}else{
	alert("上传文件不能为空！");
}
}

function uploadSupport(){
	 //$("#loading1").show();
	$("#downHide").show();
	$("#uploadForm").attr("action","/audit/asAssessRetification/uploadSupport.do")
	if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
		$("#uploadForm").ajaxSubmit({
			data:{
				"reportId":reportId
			},
	        success: function (data) {
	           alert(data);
	           getAllReport();
	           $("#downHide").hide();
	        }
	        })
		
	}else{
		alert("上传文件不能为空！");
	}
}
function closed(){
	$("#downHide").hide();
}
function saveContent(id){
	var 	specialtyId = $("#specialtyId").val();
	var content = UE.getEditor('myEditor').getContent();
		if(id==0){
			if(content!=null&&content!=undefined&&content!=""){
				$.ajax({
					url:sContentPath+"/asAssessReport/saveReport.do",
					type:'POST',
					async:false,
					data:{
						"sysId":sysid,
						"enterContent":content,
						"specialtyId":specialtyId,
						"id":id,
						"dateYear":dateYear
					},
					success:function(data){
						 alert("修改成功");
						getAllReport();
					}
				})
			}else{
				alert("文本框不能为空!")
			}
		}else{
				$.ajax({
					url:sContentPath+"/asAssessReport/saveReport.do",
					type:'POST',
					async:false,
					data:{
						"sysId":sysid,
						"enterContent":content,
						"specialtyId":specialtyId,
						"id":id,
						"dateYear":dateYear
					},
					success:function(data){
						alert("修改成功");
						getAllReport();
					}
				})
		}
}

function changeState(){
	
	$.ajax({
		url:sContentPath+"/asAssessReport/insertReportRead.do",
		type:'POST',
		data:{
			"readRole":$("#readRole").val(),
			"reportId":uid
		},
		success:function(data){
			alert(data);
			getAllReport();
		}
	})
}
function setDisabled() {
	
	var ueditor = 	UE.getEditor('myEditor');
	ueditor.addListener("ready", function () {
        // editor准备好之后才可以使用
        ueditor.setDisabled('fullscreen');
       // disableBtn("enable");
});
	
  
}
/*function disableBtn(str) {
    var div = document.getElementById('btns');
    var btns = domUtils.getElementsByTagName(div, "button");
    for (var i = 0, btn; btn = btns[i++];) {
        if (btn.id == str) {
            domUtils.removeAttributes(btn, ["disabled"]);
        } else {
            btn.setAttribute("disabled", "true");
        }
    }
}*/