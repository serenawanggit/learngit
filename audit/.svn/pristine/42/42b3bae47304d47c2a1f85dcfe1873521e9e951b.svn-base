<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%
String chartPath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/CHART/";
request.setAttribute("chartPath", chartPath);
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>STATIC PAGE</title>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/css/home.css"/>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/home.js"></script>
	
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  </head>
  
  <body>
    <div id="div1">
    	<div id="left">
    		<div id="upper">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div>领导驾驶舱</div>
    		</div>
    		<div id="middle">
    			<span>教学状态</span>
    		</div>
    		<div id="down">
    			<div id="content" class="dropdown">
    			</div>
    		</div>
    	</div>
    	<div id="right">
    		<div id="top">
    			<div id="left1">
    				<div>
    					<ul id="tab">
    						<li><div style="background-color: #034783;border: 1px solid #057EE9">数据分析报告</div></li>
    						<li><div>核心数据</div></li>
    					</ul>
    				</div>
    			</div>
    			<div id="right1">
    				<div>
    					<ul id="tab2">
    						<li><div><span>admin</span></div></li>
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/refresh.png" ></div></li>
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/back.png" onclick="javascript:history.go(-1)"></div></li>
    						<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
    						<li><div><a href="/logout"><img src="<%=basePath%>page/zenith/staticPage/img/exit.png"></a></div></li>
    					</ul>
    				</div>
    			</div>
    		</div>
    		<div id="main">
  				<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src="<%=chartPath%>page/ASDSReport3.0/ASDS_table2-1.jsp"></iframe>
    		</div>
    	</div>
    </div>
  </body>
</html>
