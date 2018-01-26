<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'searchAll.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="/audit/js/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="/audit/js/searchAll/lookDataTable.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<style type="text/css">
	#table_data{
		border-left:1px #B9B8B8 solid;
		border-bottom:1px #B9B8B8 solid;
		width:100%;
	}
	#table_data th{
		border-right:1px #B9B8B8 solid;
		border-top:1px #B9B8B8 solid;
		height:36px;
		background:#DDDDDD;
	}
	#table_data td{
		border-right:1px #B9B8B8 solid;
		border-top:1px #B9B8B8 solid;
		height:36px;
		text-align:center;
	}
</style>
<!--   <script type="text/javascript">
validateLogin();
  </script> -->
  </head>
  
  <body>
  	<div id="main">
  		<div style="margin:8px;">
  			<select id="year" style="width:200px;height:40px;">
  				<option>2013/09/30</option>
  				<option>2014/09/30</option>
  				<option>2015/09/30</option>
  				<option>2016/09/30</option>
  				<option selected="selected">2017/09/30</option>
  				<option>2018/09/30</option>
  			</select>
  			&nbsp;&nbsp;&nbsp;&nbsp;
  			数据总数：<span id="tableCount" style="font-size:18;font-weight:bold;"></span>
  		</div>
  		<center>
  			<div style="width:99%;">
	  			<table id="table_data" cellpadding="0" cellspacing="0">
	  				<!-- <tr></tr> -->
	  			</table>
	  		</div>
  		</center>
  	</div>
  </body>
</html>
