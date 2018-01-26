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

<title>任务进度</title>

<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<style type="text/css">
*{margin:0px; padding: 0px; font-size: 12px;font-family:Arial, Helvetica, sans-serif;}
html{width: 100%;height: 96%;}
body {
	width: 100%;height: 100%;margin:0;border:none;
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

<script type="text/javascript" src="<%=basePath%>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>/js/quality/zlrw.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
</script>
</head>

<body>
	<!-- 右边显示 -->
	
	<div style="height:28px; margin-left: 10px; margin-top: 10px; ">
   		<span style='background-color:#568E59;display:inline-block;height:28px;line-height:28px;color:white;padding:0px 15px;'>质量任务管理 >> 任务进度</span>
	</div>
	<table style='width:97%;margin:0px 35px 0px 35px;' cellpadding='0'
		cellspacing='0'>
		<tr>
			<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;"
				colspan="2" align="left">
				<table style="width:100%;" cellpadding="0" cellspacing="0">
					<tbody>
						<tr>
							<td style='height:40px;font-size:12px;'>质量任务&nbsp;&nbsp;<select
							 onchange="selectJDrwxx();"	id="cjbm" style="height: 22px;width:200px;font-size:12px;">
							</select>
							</td>

						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<table border="0" cellpadding='0' cellspacing='0'
				style='width:94%;margin:0px 35px 0px 35px;'>
			    <tr>
			        <td id="sstd" width="100%" 
				          style='height:40px;font-family: Arial, Helvetica, sans-serif;font-size: 12px;'>计划阶段
			         	（ 4 ）
			        <td>
		        </tr>	
		        
		</table>
		<tr>
			<table id="sstb" border="0" cellpadding='0' cellspacing='0'
				style='width:94%;margin:0px 35px 0px 35px;'>
				
				<tbody id="jdrwtr">
				</tbody>
				
			</table>
			<table   border="0" cellpadding='0' cellspacing='0'
				style='width:94%;margin:20px 35px 0px 35px;'>
			    <tr>
			        <td id="jihuabumentd" width="100%" 
				          style='height:40px;font-family: Arial, Helvetica, sans-serif;font-size: 12px;'>
			        <td>
		         </tr>	
			</table>
			
			<table id="sstb" border="0" cellpadding='0' cellspacing='0'
				style='width:94%;margin:0px 35px 0px 35px;'>
				<tbody id="tbodyid">
					 
				</tbody>
			</table>
		</tr>
	</table>
</body>
</html>
