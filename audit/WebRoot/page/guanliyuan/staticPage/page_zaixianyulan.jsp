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
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_0.css">
	
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript" src="page/xueyuan/staticPage/js/page_zaixianyulan.js" ></script>	
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
				<span id="specialtys">全文阅览</span>
			</div>
		</div>
		<div id="midle1" style="height: 47px; width:100%;" >
			<img src="/audit/images/zypg/goback.png" style="cursor:pointer;float: right;padding: 10px;margin-right: 5px;" onclick="back()" />
		</div>
		<div id="midle2" style="border: 1px solid rgba(113, 113, 113, 0.56);">
			<div style="background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;">
				<div id='filename'>
				</div>
				<%--<div id="info1" style="width: 338px;display:none;float: right;color: red;font-size: 14px;">
						注：如有乱码，请联系自评人，新建文件，重新上传
				</div>
			--%></div>
			<div id="textInfo" 
				style="padding: 10px;
				overflow:auto; /*需要的时候会出现滚动条*/
				overflow-x:auto; /*控制X方向的滚动条*/
				overflow-y:auto; /*控制Y方向的滚动条*/
				min-height:40%;
				max-height:45%;
				">
				<%--<iframe width=420 height=330 frameborder=0 scrolling=auto src=""></iframe>
			--%></div>
		
		</div>
		<div style="width:310px;float:right;margin-top: 5px;" id="btn">
		</div>
		<div style="background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px; margin-top:42px;">
				<div style="text-align: center;margin: 0 auto;">审核意见</div>
		</div>
			<div id="down" style="width: 100%;">
			<textarea rows="" cols="" id="infoMessge" onclick="onDianJi(this)"  style="width: 100%; height: 67px; resize: none;font-size:18px; color:rgba(33, 33, 33, 0.95);padding: 5px;font-family: 'Microsoft YaHei';
   						font-size: 16px;">请输入你的审核意见</textarea>
		</div>
</body>
</html>
