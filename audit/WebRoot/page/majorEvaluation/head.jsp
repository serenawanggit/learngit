<%@ page language="java" import="java.util.*,audit.util.Common" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title><%=Common.TITLE %></title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/base.css"/>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/head.css"/>
	
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
	<script>
	validateLogin();
		function returnNav(){
			window.location.href = '/CHART';
		}
	</script>
  </head>
  
  <body>
    <div class="container">
			<div class="header">
				<div class="header-container">
					<div class="logoclass" onclick="javascript:window.location.href='/CHART';">
						<img src=<%=System.getProperty("logoUrl")%>></img> 
					</div>
					<!--  <div class="header-title">
						<li class="header-title-li"><%=Common.TITLE%></li>
					</div>-->
					<div class="header-btn">
						<li class="header-btn-li" onclick="returnNav();"><img src="<%=basePath%>/img/majorEvaluation/sanhang.png"/>&nbsp;返回导航</li>
					</div>
				</div>
			</div>
			<iframe src="<%=basePath%>/page/majorEvaluation/homePage.jsp?mid=${mid}&year=${year}" name="main" width="100%" height="88%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="auto" allowtransparency="yes"></iframe>
		</div>
  </body>
</html>
