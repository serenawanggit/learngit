<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>	
    <title>教学评估</title>	
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/home_1.js"></script>
  </head>
  
  <body>
  <input type="hidden" value="<%=request.getParameter("specialtyId")%>" id='specialtyId'/>
  <input type="hidden" value="<%=request.getParameter("dateYear")%>" id='dateYear'/>
  <input type="hidden" value="<%=request.getParameter("zylxId")%>" id='zylxId'/>
  <input type="hidden" id = "jugeSave" value="0">
    <div id="div1">
    	<div id="left">
    		<div id="upper">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div id = "dynamic">学院评估</div>
    		</div>
    		<div id="middle">
    			<span id ="dataReport">教学状态</span>
    		</div>
    		<div id="down">
    			<div id="content" style="background: #000000" class="dropdown">
    			</div>
    		</div>
    	</div>
    	<div id="right">
    		<div id="top">
    			<div id="left1">
    				<div>
    					<ul id="tab">
    						<li><div onclick="clickTab(0,this)" style="cursor:pointer"></div></li>
    						<li><div onclick="clickTab(1,this)" style="cursor:pointer" id="QualityReport"></div></li>
    						<!-- <li><div onclick="clickTab(2)" style="cursor:pointer">专业整改计划</div></li>
    						<li><div onclick="clickTab(3)"style="cursor:pointer">专家反馈报告</div></li> -->
    					</ul>
    				</div>
    			</div>
    			<div id="right1">
    				<div>
    					<ul id="tab2">
    					<li><div><a href="javascript:void(0)" onclick="logout();" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/exit.png"></a></div></li>
    						<li><div><a id="gogo" href="/audit/page/zenith/staticPage/Specialty.jsp" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/back.png"></a></div></li>
    						<li><div><a href="javascript:void(0)" onclick="javascript:location.reload();" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/refresh.png"></a></div></li>
    						<li><div ><span id="showUserName" style="color:white;line-height:25px;"></span></div></li>
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    						<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
    					</ul>
    				</div>
    			</div>
    		</div>
    		<div id="main">
  				<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src="<%=basePath%>page/zenith/staticPage/page_0.jsp?dateYear=<%=request.getParameter("dateYear")%>&specialtyId=<%=request.getParameter("specialtyId")%>&zylxId=<%=request.getParameter("zylxId")%>"></iframe>
    		</div>
    	</div>
    </div>
  </body>
</html>
