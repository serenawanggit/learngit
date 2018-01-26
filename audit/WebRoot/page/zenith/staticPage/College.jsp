<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'College.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
		<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	--> 
		<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	 <link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
   	  <link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
 	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
 	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/inject.js" type="text/javascript"></script>
 	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/College.js"></script>
  </head>
  
  <body>
    <div>
    	<div style="margin-top:10px;">学院类别:<select id="collegeId" onchange="selectChilds(this.value);" autofocus="autofocus" style="height:20px;width: 150px;"></select>&nbsp;&nbsp;学院名称:<select id="collegeChildId" onchange="selectTable(this.value)" autofocus="autofocus" style="height:20px;width: 150px;"></select>
    	</div>
    	<div id="templist" ></div>
    </div>
  </body>
</html>
