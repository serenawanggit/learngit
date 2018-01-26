<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
  <head>
    <base href="<%=basePath%>">
    <meta charset="utf-8">
    <meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    
    <title>评估状态</title>
    
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/conditionEstimationPG.css" />
	<script src="<%=basePath %>js/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="<%=basePath %>js/majorEvaluation/conditionEstimationPG.js" type="text/javascript" charset="utf-8"></script>
	<script src="<%=basePath %>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
	<style type="text/css">
		
	</style>
  </head>
  
  <body>
	<nav class="navbar">
		<!-- 此部分不论在任何宽度下都一直存在，常用来展开或收起导航 -->
		<div class="navbar-header">
			<button class="navbar-toggle" data-toggle="collapse" data-target="#navbar1">
				<span class="glyphicon glyphicon-list"></span>
			</button>
			 <a class="navbar-brand" href="#"></a>
		</div>

		<!-- 这部分才是真正的导航主体部分 -->
		<div id="navbar1" class="navbar-collapse collapse">
			<ul class="nav navbar-nav">
				<li class="nav-li-znj">
					<a href="<%=basePath %>/page/majorEvaluation/homePage.jsp">首页</a>
				</li>
				<li>
					<a class="a-znj" onclick="changeTab(1,this)" href="javascript:void(0)">评估状态</a>
				</li>
				<li>
					<a onclick="changeTab(2,this)" href="javascript:void(0)">评分总表</a>
				</li>
				<li>
					<a onclick="changeTab(3,this)" href="javascript:void(0)">结果分析</a>
				</li>
			</ul>
		</div>
	</nav>
	<iframe class="context_pg"  id="contextIframe" width="100%" height="100%" src="/audit/page/majorEvaluation/conditionEstimationStatus.jsp" frameborder="no" border="0" marginwidth="0" marginheight="0"  scrolling="auto"></iframe>
  </body>
</html>