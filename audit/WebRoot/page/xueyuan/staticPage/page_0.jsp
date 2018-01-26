<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
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
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_0.css">

<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/lzrPopWindow/css/lzrwindow.css" />
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript"
	src="<%=basePath%>page/lzrPopWindow/js/lzrWindow.js"></script>
<script type="text/javascript" src="page/xueyuan/staticPage/js/page_0.js" ></script>	
<script type="text/javascript" src="js/jquery.form.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>
	
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>

</head>

<body>
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
	<div id="main">
		<div id="top">
			<div>
				<span id="specialtys">整改报告</span>
			</div>
		</div>
		<div id="midle1" style="height: 47px; width:100%;" >
			<img src="/audit/images/zypg/goback.png" style="cursor:pointer;float: right;padding: 10px;margin-right: 5px;" onclick="javascript:history.go(-1)" />
		</div>
		<div id="content" style="max-height:50.5%;overflow:auto;min-height:120px;width: 100%;border:1px solid rgba(204, 204, 204, 0.92)"></div>
		<div style="background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px; margin-top:36px;">
			<div style="text-align: center;margin: 0 auto;">意见</div>
		</div>
			<div id="down" style="width: 100%;">
			<textarea rows="" cols="" id="messge" onclick="onDianJi(this)"  style="width: 100%; height: 67px; resize: none;font-size:18px; color:rgba(33, 33, 33, 0.95);padding: 5px;font-family: 'Microsoft YaHei';
   						font-size: 16px;">请输入你的审核意见</textarea>
		</div>
		<div id="midle3" style="width:100%;margin-top: 5px;"><%--
			<div style="width:150px;float:right"><img src="/audit/page/xueyuan/staticPage/img/nopass.png" onclick="assess()"/></div>
			<div style="width:150px;float:right"><img src="/audit/page/xueyuan/staticPage/img/pass.png" onclick="assess()"/></div>
		--%></div>
		
	</div>
</body>
</html>
