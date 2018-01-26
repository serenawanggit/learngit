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
<title>任务进度</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body, html{width: 100%;height: 100%;margin:0;border:none;
background-repeat:repeat-x;font-size:12px;
font-family:Arial, Helvetica, sans-serif;
background:url(<%=basePath %>/images/centerbk.png);
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
}
</style>

<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/taskJinDu.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>

</head>
<body >
<input type="hidden" id="rwid" value="${rwid}"/> 
<!-- 右边显示 -->
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'>
		<label id="rwmc" style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
		2014年度审核评估数据采集工作
		</label>
		<label style="margin-left: 210px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
		任务截止时间：
		</label>
		<label id="jzTime" style="margin-left: 5px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
		2014-10-31
		</label>
		<label style="margin-left: 210px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
		进度：
		</label>
		<label id="jd" style="margin-left: 5px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
		5.12%
		</label>
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
										状态库表名称
									</label>
									<input style="width:200px;height:24px;line-height:24px;vertical-align:middle;margin-left:10px;border:#DADADA 1px solid;padding-left:5px;" id="rName" type="text">
									<a href="#" onclick="findRwJd();">
										<img src="../images/searchbtn.png" style="vertical-align:middle;height:24px;line-height:24px;border:0px;">
									</a>
								</td>
								<td align="right">
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
										<td nowrap='nowrap' style='width:50px;height:40px;border-top:#DADADA 1px solid;' align="center">序号</td>
										<td nowrap="nowrap" style='width:100px;border-top:#DADADA 1px solid;' align='center'>数据分类</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>状态库表</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>单位</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>采集人</td>
			                            <td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>审核人</td>
										
									</tr>
								</thead>
								<tbody>
									
								</tbody>
						</table>
						
					</div>
					<table id="pageTb" style='width:100%;' cellpadding='0'>
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:40px;'>
								<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='../images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='../images/pgicon-first.png;'"
										onmouseout="this.src='../images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='../images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../images/pgicon-pre.png;'"
										onmouseout="this.src='../images/pgicon-pre_press.png;'">
								<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
								<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
										src='../images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../images/pgicon-next.png;'"
										onmouseout="this.src='../images/pgicon-next_press.png;'">
								<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
										src='../images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../images/pgicon-last.png'"
										onmouseout="this.src='../images/pgicon-last_press.png'">
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

</body>
</html>