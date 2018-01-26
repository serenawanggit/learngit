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
	   
    <title>评估状态~评分总表</title>
    
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/threadratePG.css" />
	<script src="<%=basePath %>js/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="<%=basePath %>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  </head>
  <script type="text/javascript">
  validateLogin();
  </script>
  
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
					<a  href="<%=basePath %>/page/majorEvaluation/conditionEstimationPG.jsp">评估状态</a>
				</li>
				<li>
					<a class="a-znj" href="<%=basePath %>/page/majorEvaluation/threadratePG.jsp">评分总表</a>
				</li>
				<li>
					<a href="<%=basePath %>/page/majorEvaluation/resultAnalysisPG.jsp">结果分析</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-11 top-znj">
				<li class="top-li-znj">评估年份<span>2015</span></li>
				<li class="btn-znj">
					<span>细分</span>
				</li>
				<li class="btn-znj">
					<span>大分类</span>
				</li>
				<li class="btn-znj">
					<span class="btn-color-znj">汇总分</span>
				</li>
			</div>
			<!-- 	汇总分表格  DIV -->
			<div class="col-md-10 bottom-znj">
				<table class="table table-bordered table-hover table-znj">
					<thead>
						<tr>
							<th>学院</th>
							<th>专业名称</th>
							<th>总分</th>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>化工学院</td>
							<td>轻化工程专业</td>
							<td>91.8</td>
						</tr>
						<tr>
							<td>化工学院</td>
							<td>轻化工程专业</td>
							<td>91.8</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- 	大分类表格  DIV -->
			<div class="col-md-10 bottom-znj">
				<table class="table table-bordered table-hover table-znj">
					<thead>
						<tr>
							<th class="th-1">学院</th>
							<th class="th-2">专业名称</th>
							<th class="th-3">1.培养目标与培养方案（16分）</th>
							<th class="th-4">2.教师队伍（18分）</th>
							<th class="th-5">3.基本教学条件及利用（12分）</th>
							<th class="th-6">4.专业教学（24分）</th>
							<th class="th-7">5.教学管理（12分）</th>
							<th class="th-8">汇总</th>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>化工学院</td>
							<td>轻化工程专业</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td>化工学院</td>
							<td>轻化工程专业</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td colspan="2">均值</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- 	细分表格  DIV -->
			<div class="col-md-11 bottom-znj">
				<table class="table table-bordered table-hover table-znj">
					<thead>
						<tr>
							<th>学院</th>
							<th>专业名称</th>
							<th>总分</th>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>化工学院</td>
							<td>轻化工程专业</td>
							<td>91.8</td>
						</tr>
						<tr>
							<td>化工学院</td>
							<td>轻化工程专业</td>
							<td>91.8</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
  </body>
</html>
