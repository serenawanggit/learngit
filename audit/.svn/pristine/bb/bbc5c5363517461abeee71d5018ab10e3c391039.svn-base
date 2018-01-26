<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title></title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">

	-->
	
 <script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
   <script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/allContent.js"></script>
   <script type="text/javascript" src="<%=basePath%>js/jquery.form.js" ></script>	
<script type="text/javascript" src="<%=basePath%>js/jquery.form.min.js" ></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
</script>
<style>
li{
list-style-type:none}
input{
border:2px solid;
BORDER-TOP-STYLE: none;
BORDER-RIGHT-STYLE: none;
BORDER-LEFT-STYLE: none;
BORDER-BOTTOM-STYLE: solid
}
</style>
  </head>
  
  <body >
  <form action="/audit/asAssessReport/downWordHtml.do" id='downWordHtml' method="POST">
 <input type="hidden" id="speName" name="speName">	
  <input type="hidden" id="contents" name="contents">
  </form>
 <input type="hidden" id = "specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
  <input type="hidden" id = "dateYear" value="<%=request.getParameter("dateYear")%>"/>
  <input type="hidden" id = "type" value="<%=request.getParameter("type")%>"/>   
  <a href="javascript:void(0)" id ="exportWord" onclick="downHtmlToWord()"><img src="images/exportHtml.png" style="float:right;margin-right:10%"/></a>
   <div id ="showReport" style='width:96%;margin-left:2%'>
  		
   
   </div>
  </body>
</html>
