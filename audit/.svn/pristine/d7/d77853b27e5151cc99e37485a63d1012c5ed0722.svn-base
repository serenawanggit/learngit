<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">

<title>任务更新</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<style type="text/css">
*{margin:0px; padding: 0px; font-size: 12px;font-family:Arial, Helvetica, sans-serif;}
html{width: 100%;height: 96%;}
body{width: 100%;height: 100%;margin:0;border:none;
	background-repeat:repeat-x;font-size:12px;
	font-family:Arial, Helvetica, sans-serif;
	background:url(<%=basePath %>/images/centerbk.png);
	   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	   -moz-background-size:100% 100%;
	}
#sstb tr td {
	height: 35px;
	border-bottom: 0px solid #dadada;
	border-left: 1px solid #dadada;
	border-right: 0px solid #dadada;
	border-top: 1px solid #dadada;
}
</style>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

</head>

<body>
	<!-- 右边显示 -->

	<div style="background-color:#568E59; width:175px; height:28px; margin-left: 10px; margin-top: 10px;">
   		<span style='display:inline-block;height:28px;line-height:28px;color:white;padding-left:15px;'>质量任务管理 >> 任务更新  </span>
	</div>
	<table style='width:97%;margin:0px 35px 0px 35px;' cellpadding='0'
		cellspacing='0'>
		<table border="0" cellpadding='0' cellspacing='0'
				style='width:94%;margin:20px 35px 0px 35px;'>
			    <tr>
			        <td id="sstd" width="100%"
				          style='height:40px;font-family: Arial, Helvetica, sans-serif;font-size: 12px;'>我参与的质量任务
			        <td>
		        </tr>	
		</table>
		<tr>
			<table id="sstb" border="0" cellpadding='0' cellspacing='0'
				style='width:94%;margin:0px 35px 0px 35px;'>
				<tbody id="zlrwList">
					
				</tbody>
			</table>
			<table style='width:100%;' cellpadding='0' id="pageTb" >
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
		</tr>
	</table>
	<input type="hidden" id="zlRwId" value=""/>
	<input type="hidden" id="thisPage" value="1"/>
</body>
<script type="text/javascript">
validateLogin();
$(document).ready(function () {
	getPage(1);
});
function getPage(pageNumber){
	$.ajax({
		 url:"<%=basePath%>/userZlRwController/userTaskList.do?currentPage="+pageNumber,
		 type : "post",
		 dataType : "json",
		 error:function(){
			 alert("保存失败,未知原因");
		 },
		 success:function(dataString){
		 	var data = eval("("+dataString+")");
		 	$("#zlrwList").html("");
		 	var head = "";
		 	head +="<tr align='center' style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>";
			head +="<td align='center' width='5%'>序号</td>";
			head +="<td width='25%'>质量任务名称</td>";
			head +="<td width='11%'>开始时间</td>";
			head +="<td width='11%'>结束时间</td>";
			head +="<td width='11%'>阶段任务数</td>";
			head +="<td width='11%' style='border-right:1px solid #dadada;'>参与部门</td>";
			//head +="<td width='11%' style='border-right:1px solid #dadada;'>完成进度</td></tr>";
		 	$("#zlrwList").append(head);
		 
		 	if(!data.ok){
		 		var html="<tr align='center' style='background-color:#FFF;color:#333333;font-size:12px;' >";
		 		html +="<td style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada;' colspan='7'>"+data.comment+"</td></tr>;"
		 		$("#zlrwList").append(html);
		 		return;
		 	}
		 	var list = data.data.list;
		 	
		 	for(var i=0;i<list.length;i++){
		 		var record = list[i];
		 		var html= "";
		 		if((i+1) == list.length){
		 			html += "<tr align='center' style='background-color:#FFF;color:#333333;font-size:12px;'>";
					html +=	"<td style='border-bottom: 1px solid #dadada;'>"+(i+1)+"</td>"
					html +=	"<td style='border-bottom: 1px solid #dadada;'>";
					html +=	"<a href='<%=basePath%>/userZlRwController/userTaskDetailsView.do?id="+record.id+"' >"+record.zlrwmc+"</a></td>";
					html +=	"<td style='border-bottom: 1px solid #dadada;'>"+record.startTime+"</td>";
					html +=	"<td style='border-bottom: 1px solid #dadada;'>"+record.endTime+"</td>";
					html +=	"<td style='border-bottom: 1px solid #dadada;'>"+record.jdCount+"</td>";
					html +=	"<td style='border-bottom: 1px solid #dadada;    border-right: 1px solid #dadada;'>"+record.organizeCount+"</td>";
					//html +=	"<td style='border-bottom: 1px solid #dadada;border-right:1px solid #dadada;'>"+record.readyJdCount+"</td></tr>";
		 		}else{
		 			html += "<tr align='center' style='background-color:#FFF;color:#333333;font-size:12px;'>";
					html +=	"<td style='border-bottom: 1px solid #dadada;'>"+(i+1)+"</td>"
					html +=	"<td style='border-bottom: 1px solid #dadada;'>";
					html +=	"<a href='<%=basePath%>/userZlRwController/userTaskDetailsView.do?id="+record.id+"' >"+record.zlrwmc+"</a></td>";
					html +=	"<td style='border-bottom: 1px solid #dadada;'>"+record.startTime+"</td>";
					html +=	"<td style='border-bottom: 1px solid #dadada;'>"+record.endTime+"</td>";
					html +=	"<td style='border-bottom: 1px solid #dadada;'>"+record.jdCount+"</td>";
					html +=	"<td style='border-bottom: 1px solid #dadada; border-right: 1px solid #dadada;'>"+record.organizeCount+"</td>";
					//html +=	"<td style='border-right:1px solid #dadada;'>"+record.readyJdCount+"</td></tr>";
		 		
		 		}
				$("#zlrwList").append(html);
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
}
//跳转方法
function jumpToFirstPage(){
	getPage(1);
}
function jumpToNextPage(){
	var thisPage = parseInt($("#thisPage").val(),10);
	getPage(thisPage+1);
}
function jumpToPreviousPage(){
	var page;
	var thisPage = parseInt($("#thisPage").val(),10);
	if(thisPage != 1){
		page = thisPage-1;
	}else{
		page = 1;
	}
	getPage(page);
}
function jumpToPage(){
	var page = $("#pagenotext").val();
	if(page == ''){
		alert("请输入跳转页面后再点击跳转按钮");
		return;
	}
	getPage(page);
}

</script>
</html>
