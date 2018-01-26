<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>评估</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="/audit/js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/audit/page/zenith/js/index.js"></script>
	 <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
	<style type="text/css">      
     body{      
        background-image: url(/audit/images/zypg/bj.png);      
        background-size:cover;    
     }      
 </style> 
<style type="text/css">

#main{width:1014px;
height:600px;
margin:0 auto;
padding-top:2px;
padding-bottom:2px;
overflow:hidden;
}

.zypg{
width:200px;
height:200px;
padding-top:300px;
margin-left:100px;
float:left;
}
.xypg{
width:200px;
height:200px;
padding-top:100px;
margin-left:100px;
float:left;
}
.kcpg{
width:200px;
height:200px;
padding-top:300px;
margin-left:100px;
float:left;
}

</style>
  </head>
  
  <body>
  <div id="main">
  <input type="hidden" value="1" id="zylxId">
  <div class="zypg">
  <img src="images/zypg/zypg.png" onclick="getContentTable(5,5)" style="cursor: pointer;"></img>
 </div>

  <div class="xypg">
  <img src="images/zypg/xypg.png" onclick="getContentTable(5,1)" style="cursor: pointer;"></img>
 </div>

  <div class="kcpg">
  <img src="images/zypg/kcpg.png" onclick="getContentTable(5,4)"  style="cursor: pointer;"></img>
  </div>

</div>
  </body>
</html>
