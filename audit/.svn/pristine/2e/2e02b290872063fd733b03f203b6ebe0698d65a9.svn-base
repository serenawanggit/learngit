<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>现场考察~我的评估结论</title>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/majorEvaluation/base.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/majorEvaluation/siteVisitCommonTop.css" />
<script type="text/javascript" src="<%=request.getContextPath()%>/js/majorEvaluation/jquery-1.7.2.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/majorEvaluation/siteVisitCommonTop.js"></script>
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  <script type="text/javascript">
validateLogin();
</script>
  
</head>
<body>
	<div class="container">
		<!--   公共tab切换导航条 -->
		<div class="topTab">
			<ul>
				<li><a href="<%=request.getContextPath()%>/page/majorEvaluation/homePage.jsp">首页</a></li>
				<li><a href="javascript:void(0);" style='border-bottom: 2px solid #19c6a1' onclick="tabChange_workSchedule(this)">现场工作日程表</a></li>
				<li><a href="javascript:void(0);" onclick="tabChange_myInspection(this)">专家现场考查任务</a></li>
				<li><a href="javascript:void(0);" onclick="tabChange_myAssessment(this)">专家评估结论</a></li>
				<li><a href="javascript:void(0);" onclick="tabChange_expertAssessment(this)">专家组的评估结论</a></li>
			</ul>
		</div>
		<div class="contexts">
		    <input type="hidden" value="${year}" id="selectedYearCommonTop"/>
			<!-- 要显示的主题内容 -->
			<iframe id="iframe" src="<%=request.getContextPath()%>/page/majorEvaluation/siteVisitWorkSchedule.jsp" name="main" width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" allowtransparency="yes"></iframe>
		</div>
	</div>
</body>
</html>
