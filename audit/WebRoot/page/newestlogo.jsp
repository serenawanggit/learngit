<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>登录</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
     <style>
     </style>
  </head>
  
  <body style="height:97.5%;width:100%;margin: 0 auto;">
       <div style="height:100%;width:100%;">
             <div style="height:20%;width:100%;">
               <img src="/audit/images/new/logo.png" style="margin-top: 3.5%;margin-left: 14%"></img><img src="/audit/images/new/logo2.png" style="margin-top: 3%"></img>
             </div>
           <div style="height:60%;width:100%;background-image:url(/audit/images/new/newbackground.png);background-repeat: repeat-y;background-repeat: repeat-x;position:fixed;">
              <div style="height:342px;width:332px;margin-left: 60%;margin-top: 2.5%;background-image:url(/audit/images/new/logokuang.png);background-repeat: repeat-y;background-repeat: repeat-x;" >
                 <form id="loginForm" action="/login" method="post">
                 <div style="height:50%;padding-top: 25%;">
	                  <div style="margin-left: -1%;height:41.5px">
	                    <ul >
	                       <li style="float: left;list-style-type: none;"><img src="/audit/images/new/username.png"></img></li>
	                    <!--  style="height:41.5px;margin-top: -57px;width:200px;margin-left: -5px;" -->
	                       <li style="float: left;list-style-type: none;"><input style="height:41.5px;width:200px;margin-left: 0px;" type="text"  name="name" id="name" /></li>
	                    </ul>
	                  </div>
	                  <div style="margin-top: 10%;margin-left: -1%;height:41.5px">
	                  <ul>
	                    <li style="float: left;list-style-type: none;"> <img src="/audit/images/new/userpwd.png"></img></li>
	                   <li style="float: left;list-style-type: none;">  <input type="text" style="height:41.5px;width:200px;margin-left: 0px;"  name="password" id="password"/></li>
	                 </ul>
	                  </div>
	                <div style="margin-top: 8%;margin-left: 11.3%;">
	                           <img src="/audit/images/new/denglubutton.png" style="width:242px;cursor: pointer;"></img> 
	                           <div style="margin-top:5px;margin-left:11%;color:red" id="emsg"></div>                
	                  </div>
                  </div>
                  </form>
              </div>
           </div>
           <div style="height:40px;width:100%;position:absolute;bottom: 0px;left:0px;background-color: #979797;text-align: center;font-size: 14px; font-weight: bold;color: white;	line-height:40px;">
                                            技术支持:上海喆思电子技术有限公司
           </div>
       </div>
  </body>
</html>
