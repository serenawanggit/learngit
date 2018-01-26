<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title></title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="../../js/jquery.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/commonjs/common1.js"></script>
<style type="text/css">
body{
		margin:0;
	padding:0;
}
a {
	color:#000000;
	text-decoration:none;
}
a:hover, a:active{
	color:#91DCFF;
}
ul{
height:100%
}
li{
width:200px;
list-style:none;
font-weight:bold;
padding-top:0
}
#entry td{
height:60px;
}
</style>
  </head>
  
  <body id="index1Body">
  <div style="width:100%;height:100%">

    <div id = "navigation" style="float:right;height:100%;width:25%;">
  	<ul style="background:url(images/sevenLine.png) no-repeat ;margin-top:20%;background-position:54px 10px">
	<li ><div ><a href="javaScript:void(0)" onclick="getSkip(1)"><img src="images/tab-check.png" style="vertical-align:middle"/><span>&nbsp;&nbsp;&nbsp;&nbsp;领导驾驶舱</span></a></div></li>  
  	<li ><div ><a href="javaScript:void(0)" onclick="getSkip(2)"><img src="images/tab-check.png" style="vertical-align:middle"/><span >&nbsp;&nbsp;&nbsp;&nbsp;数据统计</span></a></div></li>
  	<li ><div><a href="javaScript:void(0)" onclick="getSkip(3)"><img src="images/tab-check.png" style="vertical-align:middle"/><span >&nbsp;&nbsp;&nbsp;&nbsp;分析报告</span></a></div></li>
  	<li ><div ><a href="javaScript:void(0)" onclick="getSkip(4)"><img src="images/tab-check.png" style="vertical-align:middle"/><span >&nbsp;&nbsp;&nbsp;&nbsp;全文检索</span></a></div></li>
  	<li ><div ><a href="javaScript:void(0)" onclick="getSkip(5)"><img src="images/tab-check.png" style="vertical-align:middle"/><span >&nbsp;&nbsp;&nbsp;&nbsp;主题分析</span></a></div></li>
  	<li ><div ><a href="javaScript:void(0)" onclick="getSkip(8)"><img src="images/tab-check.png" style="vertical-align:middle"/><span >&nbsp;&nbsp;&nbsp;&nbsp;教学评估</span></a></div></li>
  	<li ><div ><a href="javaScript:void(0)" onclick="getSkip(6)"><img src="images/tab-check.png" style="vertical-align:middle"/><span >&nbsp;&nbsp;&nbsp;&nbsp;保障体系文档</span></a></div></li>
  	<li ><div ><a href="javaScript:void(0)" onclick="getSkip(7)"><img src="images/tab-check.png" style="vertical-align:middle"/><span >&nbsp;&nbsp;&nbsp;&nbsp;工作进度</span></a></div></li>
  </ul>
  </div>
	<div id="entry" style="height:20%;width:500px;float:right">
	
	</div>
  
  </div>
 
  <!-- 修改的内容 -->
  </body>
</html>
