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
body, html{width: 100%;height: 100%;margin:0;border:none;
background-repeat:repeat-x;font-size:12px;
font-family:Arial, Helvetica, sans-serif;
background:url(<%=basePath %>/images/centerbk.png);
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
}
a{
text-decoration:none;
}
</style>

<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/addTask.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/Calendar.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body >
<input type="hidden" id="rwid" value="${rwid}"/> 
<!-- 右边显示 -->
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'>
		<span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
			<span id="title_span" style='display:inline-block;height:28px;line-height:28px;'>
			新增任务
			</span>
		</span>
		</td>
		<td style='height:40px;' align='right'>&nbsp;</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			<tr>
				<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;" colspan="2" align="left">
					<table style="width:100%;" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td>
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务标题：
									</label>
									<input id="rwTitle" style="width:240px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
								</td>
								<td>
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务发布时间：
									</label>
									<input id="fbTime" onclick="SelectDate(this)" readonly="readonly" style="width:78px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
								</td>
								<td>
									<label style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
									任务截止时间：
									</label>
									<input id="jzTime" onclick="SelectDate(this)" readonly="readonly" style="width:78px;height:24px;line-height:24px;vertical-align:middle;margin-left:5px;border:#DADADA 1px solid;padding-left:5px;" type="text">
								</td>
								<td align="right">
									<a href="#" onclick="findPageZTSJB();" value="" style="display:inline-block;">
										<img src="../images/add.png" title="" alt="" style="vertical-align:middle;" border="0px">
										<span style="display:inline-block;width:85px;text-align:center;color:#333333;font-size: 12px;">
										增加状态数据表
										</span>
										
									</a>
									&nbsp;&nbsp;
									<a href="#" onclick="deleteztb();" style="display:inline-block;padding-right:5px;">
										   <img src="../images/deletept.png" style="margin-left:10px;border:0px;">
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:380px;width: 100%'>
				<!-- 内容 -->
					<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;overflow: auto;">
					<input class="txtValue" type="hidden" name="name" value="" />
						<table id="rwxzTable" class='tablist' style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap='nowrap' style='width:60px;height:40px;border-top:#DADADA 1px solid;' align="center">
										   <input id="checkbox" type="checkbox" onclick="onchecked()"></input>
										</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>数据分类</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>状态库表名</td>
										<td nowrap="nowrap" style='width:100px;border-top:#DADADA 1px solid;' align='center'>数据采集单位</td>
										<td nowrap="nowrap" style='width:100px;border-top:#DADADA 1px solid;' align='center'>采集人</td>
										<td nowrap="nowrap" style='width:100px;border-top:#DADADA 1px solid;' align='center'>审核人</td>
										<td nowrap="nowrap" style='width:110px;border-top:#DADADA 1px solid;' align='center'>统计时间类型</td>
										<td nowrap="nowrap" style='width:120px;border-top:#DADADA 1px solid;' align='center'>统计时间</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody id="dataTable">
								</tbody>
						</table>
						
					</div>
					<table style='width:100%;' cellpadding='0'>
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
									<a href="#" onclick="saveRw();" style="display:inline-block;margin-left:0px;">
										<img src="../images/saveupdate.png" border="0">
									</a>
									<a href="../page/dataAcquisition/taskManage.jsp" >
										<img src="../images/cancel.png" border="0">
									</a>
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
</body>
</html>