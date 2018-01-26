<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>UEditor</title>
    <script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
    <!--编辑器基本配置-->
	<script type="text/javascript" charset="UTF-8" src="<%=basePath%>page/zenith/staticPage/js/utf8-jsp/ueditor.config.js"></script>
	<!--编辑器完整代码 -->
	<script type="text/javascript" charset="UTF-8" src="<%=basePath%>page/zenith/staticPage/js/utf8-jsp/ueditor.all.js"> </script >
	<link rel="stylesheet" type="text/css" href="<%=basePath%>page/zenith/staticPage/js/utf8-jsp/themes/default/css/ueditor.css"/>
	
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  </head>
  
  <body>
  <textarea name="content" id="myEditor"></textarea>  
	 <script type="text/javascript">
	 validateLogin();  
	 	UEDITOR_CONFIG.UEDITOR_HOME_URL = '/audit/page/zenith/staticPage/js/utf8-jsp/';
	  //一定要用这句话，否则你需要去ueditor.config.js修改路径的配置信息  
	 	UE.getEditor('myEditor');  
	 </script>  
  </body>
</html>
