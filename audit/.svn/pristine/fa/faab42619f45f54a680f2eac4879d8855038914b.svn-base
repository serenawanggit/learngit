
$(function(){
	// $("#loading1").show();
	var specialtyId = $("#specialtyId").val();

		load();
		getAllReport();
		$("#myEditor").attr("style","padding-top:4%");
		if($("#sysId").val()==null||$("#sysId").val()==undefined||$("#sysId").val()=="null"){
			$("#uploadContent").hide();
			$("#saveContent").hide();
			$("#deleteRec").hide();
			setDisabled();
		}
		
});
var sContentPath = getContentPath();
var choose;
var dateYear;
var uid = 0;
var dates;
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
		$.ajax({
			url: sContentPath+"/asAssessReport/getAllData.do",
			type:'POST',
			data:{
				"specialtyId":specialtyId
			},
			dataType:'json',
			success:function(data){
				var datas = eval("("+data+")");
				if(datas!=""&&datas!=null){
					$("#assess_self").html("提交报告时间:"+datas[0].comment_date);
					$("#specialtys").html(datas[0].specialty_name);
					 dates = datas[0].self_assessment_date.split("~");
					
				}
			}
		});
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
	$("#loading center").html("正在加载中...");
	$("#loading").show();
	$.ajax({
		url:sContentPath+"/asAssessAnalysis/getRecPlanByShid.do",
		type:'POST',
		async:false,
		data:{
			"specialtyId":specialtyId,
			"rYear":dateYear,
		},
		dataType:'json',
		success:function(data){
			var datas = eval("("+data+")");
			var htmls = "<tr><td>文件名</td><td>类型</td><td>状态</td><td>操作</td></tr>";
			if(datas!=null&&datas.length>0){
				uid = datas[0].ID;
				$("#saveContent").attr("onclick","saveContent("+uid+")");	
				if(datas[0].write_content!=null&&datas[0].write_content!=""){
					setContent(datas[0].write_content,false);
					
					$("#showReport").html(htmls);
				}
				if(datas[0].upload_url!=null&&datas[0].upload_url!="null"&&datas[0].upload_url!=""){
				var address = datas[0].upload_url.split(".");
				htmls+="<td>"+datas[0].upload_File+"</td><td>"+address[address.length-1]+"</td><td>上传成功</td>";
				htmls+="<td><a href='javascript:void(0)' onclick='deleteReport("+datas[0].ID+");' id='deleteRec'><img src='page/zenith/staticPage/img/delete.png'></a>&nbsp;&nbsp;"+
						"<a href='/audit/asAssessAnalysis/downRecPlan.do?uid="+datas[0].ID+"'><img src='page/zenith/staticPage/img/download.png'></a></td></tr>";
			$("#showReport").html("");
			$("#showReport").html(htmls);
			}else{
				setContent("",false);
			}
		}else{
			$("#saveContent").attr("onclick","saveContent("+0+")");	
			$("#showReport").html(htmls);
		}
		}
	})
	$("#loading").hide();
	/*var date = new Date();
	var nowDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	if(Date.parse(dates[0])>=Date.parse(nowDate)||Date.parse(nowDate)>=Date.parse(dates[1])){
		$("#deleteRec").hide();
	}*/
}

function deleteReport(id){
	$.ajax({
		url:sContentPath+"/asAssessAnalysis/updateRecPlan.do",
		type:'POST',
		async:false,
		data:{
			"uurl":"",
			"uFile":"",
			"rid":id
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
		$("#uploadForm").attr("action","/audit/asAssessAnalysis/uploadRecPlan.do");
		
	if($("#uploadFile").val()!=null&&$("#uploadFile").val()!=""){
		$("#loading center").html("正在上传中...");
		$("#loading").show();
			$("#uploadForm").ajaxSubmit({
				data:{
					"specialtyId":specialtyId,
					"rYear":dateYear,
					"id":uid
				},
		        success: function (data) {
		           alert(data);
		           $("#loading").hide();
		           getAllReport();
		           closed();
		        
		        	}
		        });
		       
		
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
	//$("#loading1").hide();
}
function closed(){
	$("#downHide").hide();
}
function saveContent(id){
	var 	specialtyId = $("#specialtyId").val();
	var content = UE.getEditor('myEditor').getContent();
			if(content!=null&&content!=undefined&&content!=""){
				$.ajax({
					url:sContentPath+"/asAssessAnalysis/saveRecPlan.do",
					type:'POST',
					async:false,
					data:{
						"enterContent":content,
						"specialtyId":specialtyId,
						"id":id,
						"rYear":dateYear
					},
					success:function(data){
						 alert("修改成功");
						getAllReport();
					}
				})
			}else{
				alert("文本框不能为空!")
			}
}

function setDisabled() {
	
	var ueditor = 	UE.getEditor('myEditor');
	ueditor.addListener("ready", function () {
        // editor准备好之后才可以使用
        ueditor.setDisabled('fullscreen');
      //  disableBtn("enable");
});
  
}
