<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
	
<title></title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_0.css">
	
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript" src="js/jquery.form.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>	
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
</script>
</head>

<body>
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
	<div style='border:1px soid  red;margin: 10px 100px 0px 10px; height: 70%;'>
   		<table border="1" cellpadding="2" cellspacing="0.5" style="margin: 0 auto;" width="1000" bordercolor="#DADADA">
   			<thead>
   				<tr style="background:#DCDBDB">
					<td align="center">报告名称</td>   				
					<td align="center">学院名称</td>   				
					<td align="center">专业名称</td>   				
					<td align="center">专业负责人</td>   				
					<td align="center">操作</td>   				
   				</tr>
   			</thead>
   			<tr>
				<td align="center">报告名称</td>   				
				<td align="center">学院名称</td>   				
				<td align="center">专业名称</td>   				
				<td align="center">专业负责人</td>   				
				<td align="center"><a href="javascript:void(0)">下载</a></td>   				
   			</tr>
   		</table>
	</div>
</body>
</html>
