<%@ page language="java" import="java.util.*,audit.util.Common" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String tqccserver = Common.TQCC_SERVER;
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>任务管理</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />

<style type="text/css">
html{width: 100%;height: 98%;margin:0;}
body{width: 100%;height: 100%;margin:0;border:none;
background-repeat:repeat-x;font-size:12px;
font-family:Arial, Helvetica, sans-serif;
background:url(<%=basePath %>/images/centerbk.png);
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
}
</style>
<script type="text/javascript" src="<%=basePath%>js/uesrMenuPermission.js"></script>
<script type="text/javascript" src="<%=basePath%>js/userMenuOperation.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body >
<input type="hidden" id="tqccserver" value="<%=tqccserver%>">
<input type="hidden" id="zlrwgl" value="90">

<!-- 右边显示 -->
<div style="background-color:#568E59; width:175px; height:28px; margin-left: 10px; margin-top: 10px;">
   		<span style='display:inline-block;height:28px;line-height:28px;color:white;padding-left:15px;'>质量任务管理 >> 任务管理</span>
</div>
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			
			<tr>
				<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;" colspan="2" align="left">
					<table style="width:100%;" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td>
									<form  id="searchForm" action="<%=basePath %>/zlrwController/zlRwList.do" method="post">
									<select id="cjbm"  style="height: 25px;">
				                      <option value="2012">名称</option>
			                        </select>
									<input id='rName' name="zlrwmc" value="" style="width:200px;height:24px;line-height:24px;vertical-align:middle;margin-left:10px;border:#DADADA 1px solid;padding-left:5px;" id="plannameinput" type="text">
									<a href="#" ename="search" style="display:none;" onclick="findPageByMC();return false">
										<img src="/audit/images/searchbtn.png" style="vertical-align:middle;height:24px;line-height:24px;border:0px;">
									</a>
									<input type="hidden" id="currentPage" name="currentPage" value="1"/>
									</form>
									<input type="hidden" id="thisPage" value=""/>
								</td>
								<td align="right">
									<a ename="add" style="display:none;" href="<%=basePath %>/zlrwController/addView.do">
										<img src="/audit/images/addnew.png" border="0"></a>
									<a ename="delete" style="display:none;" href="#" onclick="deleteChoiceeduplan();return false" style="display:inline-block;padding-right:5px;">
										<img src="/audit/images/deletept.png" style="margin-left:10px;border:0px;">
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:390px;width: 100%'>
				<!-- 内容 -->
					<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;">
						<table id="rwTable" style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">
											<input id="checkAll" type="checkbox" onclick="checkAllOrNot()" name="checkAll"></input>
										</td>
										<td nowrap="nowrap" style='width:40px;border-top:#DADADA 1px solid;' align='center'>编号</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>任务名称</td>
										<td nowrap="nowrap" style='width:40px;border-top:#DADADA 1px solid;' align='center'>阶段数</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>任务开始时间</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>任务截止时间</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>参与部门</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody id="tableBody">
									
								</tbody>
						</table>
						
					</div>
					<table style='width:100%;' cellpadding='0' id="pageTb">
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:40px;'>
								<img value='1_"+json.totalPage+"' onclick='jumpToFirstPage();'
									src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='/audit/images/pgicon-first.png;'"
										onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='jumpToPreviousPage()'
									src='/audit/images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-pre.png;'"
										onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
								<span id="pageNumer" style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>${page.currentPage}/${page.countPage}页</span>
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
					
				</td>
			</tr>
		</table>
		</td>
	</tr>
</table>
<input type="hidden" id="zlrwrwglMenu" value="90">
<script type="text/javascript">
validateLogin();
$(document).ready(function () {
	getPage();
	//操作权限
	showUserMenuOperation(3,$("#zlrwgl").val());
});
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

var check = true;
function checkAllOrNot(){
	if(check){
		$("input[name='ckBut']").attr("checked","checked"); 
		check = false;
	}else{
		$("input[name='ckBut']").attr("checked",false); 
		check = true;
	}
}

function getPage(){
	var formData = $("#searchForm").serializeObject();
	var str = JSON.stringify(formData);
	$.ajax({
		 url:"<%=basePath%>/zlrwController/zlRwList.do",
		 data:"formStr="+str,
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
		 	
		 	if(list.length == 0){
		 		var html ="<tr style='background-color:#FFF;color:#333333;font-size:12px;'>";
		 		html +="<td colspan='8' nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>没有符合条件的任务</td></tr>";
		 		$("#tableBody").append(html);
		 		}
		 	for(var i=0;i<list.length;i++){
		 		var record = list[i];
		 		var html= "";
		 		html += "<tr style='background-color:#FFF;color:#333333;font-size:12px;'>";
				html += "<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align='center'>";
				html += "	<input type='checkbox' name='ckBut' value='"+record.id+"'/></td>";
				html += "<td nowrap='nowrap' style='width:40px;border-top:#DADADA 1px solid;' align='center'>"+record.id+"</td>";
				html += "<td nowrap='nowrap' id='"+record.id+"' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+record.zlrwmc+"</td>";
				html += "<td nowrap='nowrap' style='width:40px;border-top:#DADADA 1px solid;' align='center'>"+record.jdCount+"</td>";
				html += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+record.startTime+"</td>";
				html += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+record.endTime+"</td>";
				html += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>"+record.organizeCount+"</td>";
				html += "<td nowrap='nowrap' style='width:160px;border-top:#DADADA 1px solid;' align='center'>";
				html += "	<a ename=\"update\" style=\"display:none;\" href='<%=basePath %>/zlrwController/updateZlRwView.do?id="+record.id+"' value='1'>";
				html += "	<img src='/audit/images/bj_icon.png' style='vertical-align:middle;' border='0'></a>";
				html += "	<a ename=\"delete\" style=\"display:none;\" href='#' onclick='deletePlan("+record.id+");return false' value='10' style='margin-left: 10px;'>";
				html += "	<img src='/audit/images/sc_icon.png' style='vertical-align:middle;border:0px;'></a></td></tr>";
				$("#tableBody").append(html);
				//操作权限
 				showUserMenuOperation(3,$("#zlrwgl").val());
		 	}
		 	$("#pageNumer").html(data.data.currentPage+"/"+data.data.countPage+"页");
		 	$("#thisPage").val(data.data.currentPage);
		 	if(data.data.countPage <= 1){
		 		$("#pageTb").show();
		 	}else{
		 		$("#pageTb").show();
		 		
		 	}
		 }
	 });
	
}


function findPageByMC(){
	getPage();
	//操作权限
	showUserMenuOperation(3,$("#zlrwgl").val());
}
//跳转方法
function jumpToFirstPage(){
	$("#currentPage").val("1");
	getPage();
}
function jumpToNextPage(){
	var thisPage = parseInt($("#thisPage").val(),10);
	$("#currentPage").val(thisPage+1);
	getPage();
}
function jumpToPreviousPage(){
	var page;
	var thisPage = parseInt($("#thisPage").val(),10);
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

function deletePlan(id){
	var name = $("#"+id).html();
	var sureDelete = confirm("确认删除质量任务:"+name);
	if(sureDelete){
		$.ajax({
		 url:"<%=basePath%>/zlrwController/deleteZlRw.do?ids="+id,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("操作失败，请联系管理员");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(data.ok){
		 		alert("操作成功");
	 			var thisPage = parseInt($("#thisPage").val(),10);
				$("#currentPage").val(thisPage);
				getPage();
		 	}else{
		 		alert("操作失败");
		 	}
		 }
	 });
	}
} 

function deleteChoiceeduplan(){
	var ids = $('input[name="ckBut"]:checked');
	if(ids.length == 0){
		alert("请选择质量任务");
		return;
	}
	var sureDelete = confirm("确认删除这"+ids.length+"条质量任务");
	if(sureDelete){
		var id= '';
		for(var i=0;i<ids.length;i++){
			var record = ids[i];
			if(i==0){
				id=record.value;
			}else{
				id= id +","+record.value;
			}
		}
		$.ajax({
		 url:"<%=basePath%>/zlrwController/deleteZlRw.do?ids="+id,
		 type : "post",
		 dataType : "json",
		 processData : false,
		 error:function(){
			 alert("操作失败，请联系管理员");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	if(data.ok){
		 		alert("操作成功");
		 		window.location.reload();
		 	}else{
		 		var ids = data.data;
		 		var id = ids.split(",");
		 		var names = '';
		 		for(var i=0;i<id.length;i++){
		 			var name=$("#"+id[i]).html();
		 			if(names == ''){
		 				names = name;
		 			}else{
		 				names = names + "、" + name;
		 			}
		 			alert("质量任务："+names+"\n正在进行中，不可删除");
		 		}
		 	}
		 }
	 });
	}
}


</script>
</body>
</html>