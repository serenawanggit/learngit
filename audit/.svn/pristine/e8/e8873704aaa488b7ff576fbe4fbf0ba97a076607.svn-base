<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML>
<html>
<head>
<base href="<%=basePath%>">

<title>专业评估</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/base.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/homePage.css"/>
<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/assess/homePage.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/jquery.form.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>

<body>
	<div class="container">
		<div class="main">
			<div class="main-left">
				<div class="main-left-top">
					<ul class="main-left-top">
						<li class="main-left-top-li-one"><p>请选择专业评估年度</p>
						</li>
						<li><a href="javascript:void(0)"><img onclick="firstYear();" src="/audit/img/majorEvaluation/jianDouZuo.png" /></a>
						</li>
						<li id="syear" class="main-left-top-li-two">
							<div>
							<ul id="oList" class="access_year">
<!-- 								<li style="color: ">2013</li>
								<li>2014</li>
								<li class="check">2015</li>
								<li>2016</li>
								<li>2017</li>
 -->							</ul>
							</div>
						</li>
						<li><a href="javascript:void(0)"><img onclick="nextYear();" src="/audit/img/majorEvaluation/jianDouYou.png" /></a>
						</li>
					</ul>
				</div>
				<div class="main-left-center">
					<div class="main-nav-container">
						<a onclick="checkCouldIn(1);" href="javascript:void(0);">
							<div class="main-nav-img">
								<img src="/audit/img/majorEvaluation/ziping.png"  />
							</div>
							<div class="main-nav">
								<li>专业自评</li>
							</div> </a>
					</div>
					<div class="xian">
						<img src="/audit/img/majorEvaluation/xian.png" />
					</div>
					<div class="main-nav-container">
						<a onclick="checkCouldIn(2);" href="javascript:void(0)">
							<div class="main-nav-img">
								<img src="/audit/img/majorEvaluation/wangping.png" />
							</div>
							<div class="main-nav">
								<li>专家网评</li>
							</div> </a>
					</div>
					<div class="xian">
						<img src="/audit/img/majorEvaluation/xian.png" />
					</div>
					<div class="main-nav-container">
						<a onclick="checkCouldIn(3);" href="javascript:void(0);">
                            <div class="main-nav-img">
								<img src="/audit/img/majorEvaluation/kaocha.png" />
							</div>
							<div class="main-nav">
								<li>现场考查</li>
							</div> </a>
					</div>
					<div class="xian">
						<img src="/audit/img/majorEvaluation/xian.png" />
					</div>
					<div class="main-nav-container">
						<a onclick="checkCouldIn(4);" href="javascript:void(0)">
							<div class="main-nav-img">
								<img src="/audit/img/majorEvaluation/zhuangtai.png" />
							</div>
							<div class="main-nav">
								<li>评估状态</li>
							</div> </a>
					</div>
				</div>
				<div class="main-left-bottom">
					<table id="statisticsTable" class="table">
						<!-- <tr class="table-tr">
							<td class="table-tr-th1"></td>
							<td class="table-tr-th2">专业自评</td>
							<td class="table-tr-th3">专家网评</td>
							<td class="table-tr-th4">现场考查</td>
						</tr>
						<tr>
							<td class="table-tr-td1">参与专业数</td>
							<td class="table-tr-td234">10</td>
							<td class="table-tr-td234">10</td>
							<td class="table-tr-td234">8</td>
						</tr>
						<tr>
							<td class="table-tr-td1white">已完成专业数</td>
							<td class="table-tr-td234white">5</td>
							<td class="table-tr-td234white">0</td>
							<td class="table-tr-td234white">0</td>
						</tr>
						<tr>
							<td class="table-tr-td1">占比</td>
							<td class="table-tr-td234">50%</td>
							<td class="table-tr-td234">0</td>
							<td class="table-tr-td234">0</td>
						</tr> -->
					</table>
				</div>
			</div>
			<div class="main-right">
				<div class="main-right-top">
					<ul>
						<li class="main-right-top1">专业评估材料</li>
						<li class="main-right-top2"><a href="javascript:void(0);"><img
								src="/audit/img/majorEvaluation/download.png" />
						</a>
						</li>
					</ul>
				</div>
				<div class="main-right-bottom" id="clxz">
					<ul>
<!-- 						<li><a href="javascript:void(0);" >上海高校本科专业达标评估标准</a> -->
<!-- 						</li> -->
<!-- 						<li><a href="javascript:void(0);">关于开展本科专业达标评估现场</a> -->
<!-- 						</li> -->
<!-- 						<li><a href="javascript:void(0);">本科专业达标评估自评报告撰写指南</a> -->
<!-- 						</li> -->
<!-- 						<li><a href="javascript:void(0);">专业评估专家组现场考查报告模版</a> -->
<!-- 						</li> -->
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
		<div style="display: none;">
		   <form action="/audit/asAccessDataOnLineController/downfile.do" id="dataform" method='post' >
		     <input type="text" id="filename" name="filename"/>
		     <input type="text" id="datatype" name="datatype"/>
		   </form>
		</div>
		</div>
	</div>
</body>
</html>
