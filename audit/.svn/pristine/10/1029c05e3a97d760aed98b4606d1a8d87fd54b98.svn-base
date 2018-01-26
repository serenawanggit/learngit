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
	<script type="text/javascript"></script>
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
<style type="text/css">
#tabs{
	width:98%;
	height:10%;
	padding:0;
	margin:0;
}
.tab-nav{
list-style-type:none;
float:left;
width:20%;
height:30px;
background:url(/audit/page/guanliyuan/images/backgroundout.png) round;
line-height:30px;
}
li{
display:inline-block;
}
</style>

<script type="text/javascript">
$(function(){
$(".tab-nav:eq(0)").css("background","url(/audit/page/guanliyuan/images/backgroundin.png) round")
$("#reportframe").attr("src","/audit/page/guanliyuan/staticPage/page_0.jsp");
})
function changeFrame(ss){
$(ss).css("background","url(/audit/page/guanliyuan/images/backgroundin.png) round" );
$(ss).siblings().css("background","url(/audit/page/guanliyuan/images/backgroundout.png) round");
if($(ss).html()=="整改报告"){
$("#reportframe").attr("src","/audit/page/guanliyuan/staticPage/page_0.jsp");
}else if($(ss).html()=="专业质量报告"){
$("#reportframe").attr("src","/audit/page/guanliyuan/staticPage/page_4.jsp");
}
}
</script>
  </head>
  
  <body>
   <div style="width:96%;margin-left:2%;border:1px solid #E2E2E2;height:98%">
   <div>
 <ul id="tabs">
        <li class="tab-nav" onclick = "changeFrame(this)">整改报告</li>
        <li class="tab-nav" onclick = "changeFrame(this)">专业质量报告</li>
    </ul>
</div>
<div>
<iframe id ="reportframe" src="" style="width:98%;border:none;height:88%">
</div>
   
   </div>

</iframe>
  </body>
</html>
