<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title></title>
    <link rel="stylesheet" href="<%=basePath%>css/ASDSReport.css" type="text/css"></link>
	<link rel="stylesheet" href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/css/home_1.css"/>
	<script type="text/javascript" src="<%=basePath %>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath %>page/zenith/staticPage/test/js/test1.js"></script>
	<style type="text/css">
td {
      text-align:center; /*设置水平居中*/
      vertical-align:middle;/*设置垂直居中*/
}
</style>
	 <script type="text/javascript">
		  $(function(){
		  initTeacherMenuHtml();
		  });
	</script>
</head>
  
  <body>
    <!-- 弹出层  -->
  <div id="mask" class="mask"></div>
  <div class="sp_box"></div>
  <input type="hidden" value="<%=request.getParameter("cid")%>" id='cid'/>
    <div id="div1">
    	<div id="left"  style="height:75px;width:13.5%">
    		<div id="upper" style="height:100%;">
    			<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
    			<div id = "dynamic" style="width:44%;margin-top:4%"></div>
    		</div>
    	
    	</div>
    	<div id="right" style="height:75px;width:86.5%;background-color:white">
    		<div id="top">
    			<div id="left1"   style="height:40px;background-color:#eee;width:100%;margin-top:0px;">
    				<h4  style="margin-top:13px;margin-left:10px;font-family: 微软雅黑;font-size: 18px;">教学发展系统</h4>
    				<div style="border:0px solid red;width: 40%;height: 35px;float:right;margin-top:-40px;">
    					<ul id="tab2" >
    					<li><div><a href="javascript:void(0)" onclick="logout();" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/exit.png" style="width:25px;"></a></div></li>
    					<li><div><a href="javascript:;" onclick="javascript:history.back(1);"  style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/back.png"></a></div></li>
    					<li><div><a href="javascript:void(0)" onclick="javascript:location.reload();" style="cursor:pointer"><img src="<%=basePath%>page/zenith/staticPage/img/refresh.png"></a></div></li>
    					<li>
    					<!-- onclick="javascript:updatePassword()" -->
    					<div ><span id="showUserName" style="color:black;line-height:25px;cursor:pointer"></span></div></li>
    						<li><div><img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img></div></li>
    						
    						<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
    						
    					</ul>
    				</div>
    			</div >
    		</div>
    		<div  class="tb_title" style="height:30px;border:0px solid red;background-color:white;">
    				<h4 id="textName" style="margin-top:0px;font-size: 13px;font-family:微软雅黑; ">基本信息和自我评价</h4>
    		</div>
    	</div>
    	<div id="bottom" >
    		<div id="leftTree" style="width:13.5%;float:left;">
    		<div id="middle" style="height:49px;" >
    			<span id ="dataReport">教师档案袋</span>
    		</div>
    		<div id="down" style="margin-left:-35px;" align="left">
    			<ul id="content" class="dropdown" style="width:100%;" >
    			 <div style="width:240px;min-height:500px;background-color:#393a3a;;vertical-align:top;" id="submenudiv" align="left"></div>
    			</ul>
    		</div>
    		</div>
    		
    		<div id="main" style="overflow:hidden ;height:89.6%;float:left;width:86.5%;border:0px solid red;background-color:#eee;">
  				<iframe style="display:block;" id="tempIframe" frameborder="1" scrolling="auto" name="hello" src="test2.jsp"></iframe>
   			</div>
    	</div>
    </div>
  </body>
 
</html>
