 <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<meta charset="utf-8">
		<title>专家网评首页</title>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/base.css"/>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/commentZJ.css"/>
	</head>
	<script type="text/javascript" src="<%=basePath%>/js/jquery.js"></script>
	<script type="text/javascript" src="<%=basePath%>/js/majorEvaluation/commentZJ.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	
	<body> 
		<div class="container">
			<div class="nav">
				<ul> 
					<li><a href="<%=basePath%>/page/majorEvaluation/homePage.jsp">首页</a></li>
					<li class="nav-li-a"><a href="<%=basePath%>/page/majorEvaluation/commentZJ.jsp">专家网评</a></li>
				</ul>
			</div>
			<div class="main">
				<div class="main-top-short">
					<li class="main-top-li">专业评估年度：<span id="syear"></span></li>
				</div>
				<div class="main-bottom">
					<table class="table">
					  <thead>
							<tr class="th">
								<th class="th">学院</th>
								<th class="th">专业</th>
								<th class="th">评估专家</th>
								<th class="th">状态</th>
								<th class="th">操作</th>
							</tr>
					  </thead>	
					  <tbody id="showTbody">
						<tr>
							<td>化工学院</td>
							<td></td>
							<td></td>
							<td>未开始</td>
							<!--  /page/majorEvaluation/sinceScoreZJ.jsp -->
							<td>
						       
							</td>
						</tr>
						</tbody>	
					</table>
				</div>
			</div>
			<div class="footer">
				<div class="back">
					<a href="javascript:scroll(0,0);"><img src="<%=basePath%>/img/majorEvaluation/back.png"/></a>
				</div>
			</div>
		</div>
	</body>
</html>
