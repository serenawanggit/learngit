<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title id="titles">专业评估</title>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>tendina-master/dist/tendina.js"></script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/newHome.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  </head>
  
  <body>
  <input type="hidden" value="<%=request.getParameter("specialtyId")%>" id='specialtyId'/>
  <input type="hidden" value="<%=request.getParameter("dateYear")%>" id='dateYear'/>
   <input type="hidden" value="<%=request.getParameter("zylxId")%>" id='zylxId'/>
   <input type="hidden" value="<%=request.getParameter("zyId")%>" id="zyId">
    <div id="div1">
    	<div id="left">
    		<div id="upper">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div id = "dynamic">专业评估</div>
    		</div>
    		<div id="middle">
    			<span id ="dataReport">教学状态</span>
    		</div>
    		<div id="down">
    			<div id="content"  class="dropdown" style="background:black">
    			</div>
    		</div>
    	</div>
    	<div id="right">
    		<div id="top">
    			<div id="left1" style="width:70%">
    				<div>
    					<ul id="tab">
    						<li><div onclick="clickTab(0)" style="cursor:pointer">反馈意见</div></li>
    					 	<!--<li><div onclick="clickTab(1)" style="cursor:pointer">专家现场考查</div></li> 
     					   	<li><div onclick="clickTab(2)" style="cursor:pointer">整改报告</div></li>
   						<li><div onclick="clickTab(3)"style="cursor:pointer">专业质量报告</div></li> 
   					--></ul>
    				</div>
    			</div>
    			
    			<div id="right1" style="width:30%;">
    				<div style="margin-right:20px;">
    					<ul id="tab2">
	    					<li><div><a href="javascript:void(0)" onclick="logout();" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/exit.png"></a></div></li>
	    					<li><div><a href="/audit/page/wangping/staticPage/Specialty.jsp?zylxId=<%=request.getParameter("zylxId")%>&dateYear=<%=request.getParameter("dateYear")%>"  style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/back.png"></a></div></li>
	    					<li><div><a href="javascript:void(0)" onclick="javascript:location.reload();" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/refresh.png"></a></div></li>
	    					<li><div ><span id="showUserName" style="color:white;line-height:25px;"></span></div></li>
	   						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    					</ul>
    				</div>
    			</div>
    		</div>
    		<div id="main">
  				<iframe id="tempIframe" frameborder="0" scrolling="auto" name="hello" src=""></iframe>
    		</div>
    	</div>
    	<div id = "loading" style="margin: 0px; padding: 0px; width: 20%; height: 15%;  z-index: 999; position: absolute; top: 35%; left: 42%;border:2px solid #E8E8E8;background: rgb(255, 255, 255) none repeat;display:none">
<center style="line-height:100px;" id="warningData"></center>
</div>	
    </div>
  </body>
</html>
