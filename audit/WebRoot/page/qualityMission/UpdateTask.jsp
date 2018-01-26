<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="<%=basePath%>/css/UpdateTask.css">
    <script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
    <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  </head>
  
  <body>
  
	<div class="wrap">
		<div style="background-color:#568E59; width:8em; height:28px; margin-left: 10px; margin-top: 10px;">
   			<span style='display:inline-block;height:28px;line-height:28px;color:white;padding-left:1em;'>阶段任务更新</span>
		</div>
		<div class="header">
			<div class="header-label"><li class="header-label">阶段任务指标名称：<label class="header-label">${task.jdrwmc}</label></li></div>
			<div class="header-return" style="margin-left: -20px;"><label class="header-label" style="line-height: 27px;margin-left: 290px;">当所有指标已达标，请点击</label>
				<li class="header-return">
					<input type="button" value="已完成" onclick="updateUserTaskStatus()" style="cursor:hand;color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;"></li></div>
		</div>			
		<div class="main-top" style="display:none">
			<div class="box1">
				<li class="box1-li">1</li>
			</div>
			<div class="box2">
				<li class="box2-li">2</li>
			</div>
			<div class="box3">
				<li class="box3-li">3</li>
			</div>
			<div class="box4">
				<li class="box4-li">4</li>
			</div>
			
			<div class="box"><!-- <hr class="box-hr" /> --></div>
		</div>
		
		<div class="main" style="margin-top: 30px;  padding-bottom: 10px;">	
			<div class="main-title">
				<!-- <div class="main-title-left">
					<li class="main-title-left">主观指标</li>
				</div> -->
				<div class="main-title-right">
					<li class="main-title-right">客观指标</li>
				</div>
			</div>
			<hr />
			<div class="main-bottom" id="tableBody">
				
			</div>
			<div class="main-foot" style="margin-left: 68%;display:none" id="pageTb">
				<ul>
					<li class="main-foot">
						<a href="javascript:void(0)" onclick="jumpToFirstPage()">
							<img src="<%=basePath%>/images/pgicon-first_press.png" >
						</a>
					</li>
					<li class="main-foot">
						<a href="javascript:void(0)" onclick="jumpToNextPage()">
							<img src="<%=basePath%>/images/pgicon-pre_press.png" >
						</a>
					</li>
					<li class="main-foot-page">
						<span id="pageNumer" style='display:inline-block;width:4em;height:24px;line-height:24px;vertical-align:middle;text-align: center;'>1/10页</span>
					</li>
					<li class="main-foot">
						<a href="javascript:void(0)" onclick="jumpToPreviousPage()">
							<img src="<%=basePath%>/images/pgicon-next_press.png" >
						</a>
					</li>
					<li class="main-foot-text">
						<input type="text" id="pagenotext" name="" value="" class="main-foot-text">
						<input type="hidden" id="currentPage" value="1"/>
						<input type="hidden" id="jdId" value="${task.id}"/>
					</li>
					<li class="main-foot">
						<a href="javascript:void(0)" onclick="jumpToPage()">
							<img src="<%=basePath%>/images/pgicon-last_press.png" >
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
 
  </body>
  
<script type="text/javascript">
validateLogin();
  $(document).ready(function () {
	getPage();
});

function getPage(){
	var currentPage = $("#currentPage").val();
	var jdId = $("#jdId").val();
	$.ajax({
		 url:"<%=basePath%>/userZlRwController/getJdZbList.do?id="+jdId+"&currentPage="+currentPage,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("保存失败,未知原因");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	var list = data.data.list;
		 	$("#tableBody").html("");
		 	var success = "";
		 	for(var i=0;i<list.length;i++){
		 		var record = list[i];
		 		var html= "";
		 		html += "<ul><li class='main-bottom-label'><label>"+record.zbName+"</label></li>";
		 		var nowValue = "";
				if(record.nowValue != null){
					nowValue = record.nowValue;
				}
				html += "<li class='main-bottom-li' style='width:90px'>当前值：<label>"+nowValue+"</label></li>";
		 		
				html += "	<li class='main-bottom-li' style='width:90px'>目标值：<label>"+record.sf+record.qwz+"</label></li>";
				
				success = "未达标";
				if( record.nowValue != null && eval(record.nowValue+record.sf+record.qwz)){
					success ="已达标";
				}
				html += "	<li class='main-bottom-li'>状态：<label>"+success+"</label></li></ul>";
		 		$("#tableBody").append(html);
		 	}
		 	$("#pageNumer").html(data.data.currentPage+"/"+data.data.countPage+"页");
		 	$("#currentPage").val(data.data.currentPage);
		 	if(data.data.countPage <= 1){
		 		$("#pageTb").hide();
		 	}else{
		 		$("#pageTb").show();
		 	}
		 }
	 });
	
}
//跳转方法
function jumpToFirstPage(){
	$("#currentPage").val("1");
	getPage();
}
function jumpToNextPage(){
	var thisPage = parseInt($("#currentPage").val(),10);
	$("#currentPage").val(thisPage+1);
	getPage();
}
function jumpToPreviousPage(){
	var page;
	var thisPage = parseInt($("#currentPage").val(),10);
	if(thisPage != 1){
		page = thisPage-1;
	}else{
		page = 1;
	}
	$("#currentPage").val(page);
	getPage();
}
function jumpToPage(){
	var page = $("#pagenotext").val();
	if(page == ''){
		alert("请输入跳转页面后再点击跳转按钮");
		return;
	}
	$("#currentPage").val(page);
	getPage();
}
 
 function updateUserTaskStatus(){
 	var jdId = $("#jdId").val();
 		$.ajax({
		 url:"<%=basePath%>/userZlRwController/updateUserTask.do?id="+jdId,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("保存失败,未知原因");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(!data.ok){
		 		alert(data.comment);
		 		return;
		 	}
		 	window.location.href="<%=basePath%>/userZlRwController/userTaskDetailsView.do?id=${task.zlrwid}";
		 }
		 });
 } 
  </script>
</html>
