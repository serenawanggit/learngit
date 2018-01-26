<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>新增任务</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<style type="text/css">
html{width: 100%;height: 98%;margin:0;}
body{width: 100%;height: 100%;margin:0;border:none;
background-color:#FFFFFF;
/* background-repeat:repeat-x; */font-size:12px;
font-family:Arial, Helvetica, sans-serif;
<%-- background:url(<%=basePath %>/images/centerbk.png); --%>
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
}
a{
text-decoration:none;
}
</style>
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/Calendar.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body >
<input type="hidden" id="rwid" value="${rwid}"/> 
<!-- 右边显示 -->
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<div style="height:28px; margin-left: 10px; margin-top: 10px; ">
   		<span style='background-color:#568E59;display:inline-block;height:28px;line-height:28px;color:white;padding:0px 15px;'>任务管理 >> 新增任务</span>
	</div>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			
			<tr>
				<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;" colspan="2" align="left">
					<table style="width:100%;" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<form id="updateForm">
								<td  style="width: 32%;">
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务名称：
									</label>
									<input id="rwTitle" name="zlrwmc" value="${rw.zlrwmc}" style="width:240px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
								</td>
								<td style="width: 22%;">
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务开始时间：
									</label>
									<input id="fbTime" name="startTime" value="${rw.startTime}" onclick="SelectDate(this)" readonly="readonly" style="width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
								</td>
								<td style="width: 22%;">
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务截止时间：
									</label>
									<input id="jzTime" name="endTime" value="${rw.endTime}" onclick="SelectDate(this)" readonly="readonly" style="width:100px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
								</td>
								</form>
								<td align="left" >
									<a href="<%=basePath %>/zlrwController/addJdRwView.do?id=${rw.id}" onclick=";" value="">
										<img src="<%=basePath %>/images/add.png" title="" alt="" style="vertical-align:middle;" border="0px">
										<span style="display:inline-block;width:96px;text-align:center;color:#FFFFFF;font-size: 12px;background-color:#6DA770;line-height: 25px;">
										增加阶段任务
										</span>
									</a>
									
								</td>
								<td align="right">
									<li style="list-style:none;">
										<a href="#"><input type="button" onclick="updateZlRw()" value="保存" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;"></a>
										<!-- <input type="submit" onclick="reduce()" value="重填" style="color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;">
										 --><input type="hidden" id="zlRwId" value="${rw.id}"/>
									</li>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:200px;width: 100%'>
				<!-- 内容 -->
					<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;overflow: auto;">
					<input class="txtValue" type="hidden" name="name" value="" />
						<table id="rwxzTable" class='tablist' style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style=' height:30px; background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap="nowrap" style='width:5%;border-top:#DADADA 1px solid;' align='center'>排序</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>阶段任务开始时间</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>阶段任务结束时间</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>阶段任务名称</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>任务范围</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>参与部门(点击数字)</td>
										<td nowrap="nowrap" style='width:5%;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody id="jdList">
									
								</tbody>
						</table>
			<tr>
				<table style='width:100%;display:none' cellpadding='0' id="jdPageTb">
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:0px;'>
								<input type="hidden" id="jdThisPage" value="1"/>
								<img value='1_"+json.totalPage+"' onclick='jumpToFirstPage();'
									src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='/audit/images/pgicon-first.png;'"
										onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='jumpToPreviousPage()'
									src='/audit/images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-pre.png;'"
										onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
								<span id="pageNumer" style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
								<img value='3_"+json.totalPage+"' onclick='jumpToNextPage()'
										src='/audit/images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-next.png;'"
										onmouseout="this.src='/audit/images/pgicon-next_press.png;'">
								<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='jumpToPage()'
										src='/audit/images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-last.png'"
										onmouseout="this.src='/audit/images/pgicon-last_press.png'">
								</span>
								</td>
							</tr>
						</tbody>
					</table>
			</tr>
			<tr style=' height:30px;color:#333333;font-weight:bold;font-family:Arial, Helvetica, sans-serif;'>
				<td>
					<li onmouseover="" onmousemove="" style="margin-left: 10px;margin-bottom:10px;font-size: 12px;list-style: none;">任务执行人</li>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:146px;width: 100%'>
				<!-- 内容 -->
					<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;overflow: auto;">
					<input class="txtValue" type="hidden" name="name" value="" />
						<table id="rwxzTable" class='tablist' style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style=' height:30px; background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap="nowrap" style='width:5%;border-top:#DADADA 1px solid;' align='center'>姓名</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>学院</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>专业</td>
										<td nowrap="nowrap" style='width:10%;border-top:#DADADA 1px solid;' align='center'>阶段任务状态</td>
										<td nowrap="nowrap" style='width:5%;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody id="userList">
									
								</tbody>
						</table>
					</div>
					
					
				</td>
			</tr>
			<tr>
				<table style='width:100%;display:none' cellpadding='0' id="userPageTb">
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:0px;'>
								<input type="hidden" id="userThisPage" value="1"/>
								<img value='1_"+json.totalPage+"' onclick='jumpToUserFirstPage();'
									src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='/audit/images/pgicon-first.png;'"
										onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='jumpToUserPreviousPage()'
									src='/audit/images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-pre.png;'"
										onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
								<span id="userPageNumer" style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
								<img value='3_"+json.totalPage+"' onclick='jumpToUserNextPage()'
										src='/audit/images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-next.png;'"
										onmouseout="this.src='/audit/images/pgicon-next_press.png;'">
								<input id='userpagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='jumpToUserPage()'
										src='/audit/images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-last.png'"
										onmouseout="this.src='/audit/images/pgicon-last_press.png'">
								</span>
								</td>
							</tr>
						</tbody>
					</table>
			</tr>
		</table>
		</td>
	</tr>
</table>
</body>
<script type= "text/javascript">

$(document).ready(function () {
   
validateLogin();
});

function updateZlRw(){
      var name= $("#rwTitle" ).val();
      if(name.length >50){
           alert( "任务名称过长,请简化" );
            return;
     } else if(name == '' ){
           alert( "请输入任务名称" );
            return;
     }
      var now= $("#now" ).val();
      var nowTime = new Date(parseInt(now,10));
     
      var start = $("#fbTime" ).val();
      var startTime = new Date(start);
      var end = $("#jzTime" ).val();
      var endTime = new Date(start);
     
      /*if(startTime < nowTime){
           alert("开始时间小于当前时间，请重新选择");
           return;
     }*/
     if (startTime > endTime){
           alert( "结束时间小于开始时间，请重新选择" );
            return;
     }
     var id=$("#zlRwId" ).val();
     $.ajax({
            url: "<%=basePath %>/zlrwController/updateZlRw.do",
            data:"id=" +id+"&zlrwmc=" +name+"&startTime=" +start+"&endTime="+end,
            type : "post",
            dataType : "json",
            error: function(){
                 alert( "网络异常，请重试" );
            },
            success: function(dataString){
            	var data = eval("("+dataString+")");
                 if(!data.ok){
                     alert(data.comment);
                } else{
                     alert( "修改成功" );
                }
            }
     });
}
function reduce(){
     $( ':input','#updateForm' )
.not(':button, :submit, :reset, :hidden')
.val('')
.removeAttr('checked')
.removeAttr('selected');

}
</script>

<script type="text/javascript">
$(document).ready(function () {
      getPage();
});
function getPage(){
	var id=$("#zlRwId").val();
	var currentPage = $("#jdThisPage").val();
	$.ajax({
		 url:"<%=basePath%>/zlrwController/getJdRwList.do?zlrwid="+id+"&currentPage="+currentPage,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	$("#jdList").html("");
		 	if(!data.ok){
		 		//alert(data.comment);
		 		return;
		 	}
		 	var list = data.data.list;
		 	$("#jdList").html("");
		 	for(var i=0;i<list.length;i++){
		 		var record = list[i];
		 		var html= "";
		 		html +=	"<tr onclick='getJdUser("+record.id+",\" "+record.jdrwmc+"\")' style=' cursor:hand; height:24px; color:#333333;background-color:#FFFFFF;font-size:12px;'>";
				html +=	"<td  style='width:5%;border-top:#E2E2E2 1px solid;' align='center'>"+record.rwxh+"</td>";
				html +=	"<td style='width:10%;border-top:#E2E2E2 1px solid;' align='center'>"+record.startTime+"</td>";
				html +=	"<td  style='width:10%;border-top:#E2E2E2 1px solid;' align='center'>"+record.endTime+"</td>";
				html +=	"<td style='width:10%;border-top:#E2E2E2 1px solid;' align='center'>"+record.jdrwmc+"</td>";
				var fw = "";
				if(record.rwfw ==1){
		 			fw += "学院或部门";
	 			}else if(record.rwfw ==2){
	 				fw += "院系";
	 			}else{
	 				fw += "专业";
	 			}
				html +=	"<td  style='width:5%;border-top:#E2E2E2 1px solid;' align='center'>"+fw+"</td>";
				html +=	"<td  style='width:5%;border-top:#E2E2E2 1px solid;' align='center'><a href='#' onclick='getJdUser("+record.id+",\" "+record.jdrwmc+"\")'>"+record.organizeCount+"</a></td>";
				html +=	"<td  style='width:5%;border-top:#E2E2E2 1px solid;' align='center'>";
				html +=	"<a href='#' onclick='editPlan("+record.id+");' value='1'>";
				html +=	"<img src='/audit/images/bj_icon.png' style='vertical-align:middle;' border='0'></a>";
				html +=	"<a href='#' onclick='deletePlan("+record.id+");' value='10' style='margin-left: 10px;'>";
				html +=	"<img src='/audit/images/sc_icon.png' style='vertical-align:middle;border:0px;'></a></td></tr>";
		 		$("#jdList").append(html);
		 	}
		 	$("#pageNumer").html(data.data.currentPage+"/"+data.data.countPage+"页");
		 	$("#jdThisPage").val(data.data.currentPage);
		 	if(data.data.countPage <= 1){
		 		$("#jdPageTb").hide();
		 	}else{
		 		$("#jdPageTb").show();
		 	}
		 }
	 });
	
}
//跳转方法
function jumpToFirstPage(){
	$("#jdThisPage").val("1");
	getPage();
}
function jumpToNextPage(){
	var thisPage = parseInt($("#jdThisPage").val(),10);
	$("#jdThisPage").val(thisPage+1);
	getPage();
}
function jumpToPreviousPage(){
	var page;
	var thisPage = parseInt($("#jdThisPage").val(),10);
	if(thisPage != 1){
		page = thisPage-1;
	}else{
		page = 1;
	}
	$("#jdThisPage").val(page);
	getPage();
}
function jumpToPage(){
	var page = $("#pagenotext").val();
	if(page == ''){
		alert("请输入跳转页面后再点击跳转按钮");
		return;
	}
	$("#jdThisPage").val(page);
	getPage();
}

function editPlan(id){
	window.location.href="<%=basePath%>/zlrwController/editJdRw.do?id="+id;
}

function deletePlan(id){
	var flag = confirm("确认删除该阶段任务？");
	if(!flag){
		return;
	}
	
	$.ajax({
		 url:"<%=basePath%>/zlrwController/deleteJdRw.do?id="+id,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		//alert(data.comment);
		 		return;
		 	}
		 	alert("删除阶段任务成功");
		 	getPage();
		 	getUserPage();
		 }
		});
}
</script>

<script type="text/javascript">
var jdId;
var jdName;
function getJdUser(id,name){
	jdId = id;
	jdName = name;
	getUserPage();
}

function getUserPage(){
	var currentPage = $("#userThisPage").val();
	$.ajax({
		 url:"<%=basePath%>/zlrwController/getUserList.do?jdId="+jdId+"&currentPage="+currentPage,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("保存失败,未知原因");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	$("#userList").html("");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data.list;
		 	$("#userList").html("");
		 	for(var i=0;i<list.length;i++){
		 		var record = list[i];
		 		var html= "";
		 		html += "<tr  style='height:24px; color:#333333;background-color:#FFFFFF;font-size:12px;'>";
				html += "<td  style='width:5%;border-top:#E2E2E2 1px solid;' align='center'>"+record.userName+"</td>";
				html += "<td  style='width:10%;border-top:#E2E2E2 1px solid;' align='center'>"+record.organizateName+"</td>";
				var specialtyName = "";
				if(record.specialtyName != null){
					specialtyName = record.specialtyName;
				}
				html += "<td  style='width:10%;border-top:#E2E2E2 1px solid;' align='center'>"+specialtyName+"</td>";
				html += "<td  style='width:10%;border-top:#E2E2E2 1px solid;' align='center'>"+jdName+"</td>";
				html += "<td  style='width:5%;border-top:#E2E2E2 1px solid;' align='center'>";
				html += "	<a href='#' onclick='deleteUser("+record.id+");' value='10' style='margin-left: 10px;'>";
				html += "	<img src='/audit/images/sc_icon.png' style='vertical-align:middle;border:0px;'></a></td></tr>";
		 		$("#userList").append(html);
		 	}
		 	$("#userPageNumer").html(data.data.currentPage+"/"+data.data.countPage+"页");
		 	$("#userThisPage").val(data.data.currentPage);
		 	if(data.data.countPage <= 1){
		 		$("#userPageTb").hide();
		 	}else{
		 		$("#userPageTb").show();
		 	}
		 }
	 });
	
}

//跳转方法
function jumpToUserFirstPage(){
	$("#userThisPage").val("1");
	getUserPage();
}
function jumpToUserNextPage(){
	var thisPage = parseInt($("#userThisPage").val(),10);
	$("#userThisPage").val(thisPage+1);
	getUserPage();
}
function jumpToUserPreviousPage(){
	var page;
	var thisPage = parseInt($("#userThisPage").val(),10);
	if(thisPage != 1){
		page = thisPage-1;
	}else{
		page = 1;
	}
	$("#userThisPage").val(page);
	getUserPage();
}
function jumpToUserPage(){
	var page = $("#userpagenotext").val();
	if(page == ''){
		alert("请输入跳转页面后再点击跳转按钮");
		return;
	}
	$("#userThisPage").val(page);
	getUserPage();
}

function deleteUser(id){
	var flag = confirm("确认删除该填报人？");
	if(!flag){
		return;
	}
	$.ajax({
		 url:"<%=basePath%>/zlrwController/deleteUser.do?id="+id,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("网络异常，请重试");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		//alert(data.comment);
		 		return;
		 	}
		 	alert("删除填报人成功");
		 	$("#userList").html("");
		 }
		});
}
</script>

</html>