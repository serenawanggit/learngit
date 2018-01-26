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
	href="page/zenith/staticPage/css/page_1.css">
<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/lzrPopWindow/css/lzrwindow.css" />
<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>page/lzrPopWindow/js/lzrWindow.js"></script>
<script type="text/javascript"
	src="<%=basePath%>page/xueyuan/staticPage/js/page_1.js"></script>

<link rel="stylesheet" type="text/css"
	href="<%=basePath%>ueditor/utf8-jsp/themes/default/css/ueditor.css" />
	 <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
</head>

<body>
	<input id="sysId"  type="hidden"
		value="<%=request.getParameter("sysId")%>" />
	<input id="specialtyId" type="hidden"
		value="<%=request.getParameter("specialtyId")%>" />
	<input id="dateYear" type="hidden"
		value="<%=request.getParameter("dateYear")%>" />
	<div id="main" style="Z-index:1">
		<div id="top">
			<!-- <div> -->
				<span id="specialtys">机械工程学院--机械专业</span>
			<!-- </div> -->
		</div>

		<div id="midle1">
			<div style="height: 35px;width:100%;">
				<img src="/audit/images/zypg/goback.png"
					style="cursor:pointer;float: right;margin-top: 10px;"
					onclick="javascript:history.go(-1)"></img>
			</div>
		</div>
		<div id="midle2">
			<div>
				<img src="/audit/page/xueyuan/staticPage/img/1.png" /><strong
					style="color: rgba(202, 2, 2, 0.94);margin-left: 15px;">专业情况概要</strong>
			</div>
			<div id="ZYQKGY" style="border:1px solid  #1d0101">
				<ul id="ul1">
				
				</ul>
			<!-- 	<textarea  
					style="width: 100%; min-height: 67px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid;">有无意见</textarea> -->
			</div>
		</div>
		<div id="midle3">
			<img src="/audit/page/xueyuan/staticPage/img/2.png" /><strong
				style="color: rgba(202, 2, 2, 0.94);margin-left: 15px;">专业建设详情</strong>
			<div style="border:1px solid  #1d0101" id="ZYJSXQ">
			 	<ul id="ul2">
					<!-- <li style="height: 45px;list-style: none;margin-bottom: 5px;">
						 <div style="line-height: 45px;">
							<div style="width:100px;float:left;margin-left: 35px;">
							    <img src="/audit/page/xueyuan/staticPage/img/file.png"
									style="vertical-align: middle;"> 
									<strong>学生</strong> 
								</img> 
							</div>
							<div
								style="border:1px solid #CCCCCC;float: right;width: 86%;height:100%">
								<input type="text"
									style="height: 100%;
										    width: 100%;
										    font-size: 16px;
										    padding-left: 22px;
										    outline:none;
										    " />
							</div>
						</div>
					</li> -->
				</ul> 
			</div>
			<!-- 	<textarea id="ZYJSXQ"  style="width: 100%; min-height: 67px; resize: none;font-size:18px; color:#1d0101;padding: 5px;border: 1px solid;">有无意见</textarea> -->
		</div>
		<div id="midle4">
			<img src="/audit/page/xueyuan/staticPage/img/3.png" /><strong
				style="color: rgba(202, 2, 2, 0.94);margin-left: 15px;">专业建设存在的问题与改进方向</strong>
				
			<div id="ZYJSXP" style="border:1px solid  #1d0101">
				<ul id="ul3">
				
				</ul>
			</div>
			<!-- <textarea id="ZYJSXP" 
				style="width: 100%; min-height: 67px; resize: none;font-size:18px; padding: 5px;border: 1px solid;">有无意见</textarea> -->
		</div>
		<div id="btns" style="margin-top:10px"></div>
		<div id="midle5" style="margin-top:49px">
			<div
				style="background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px;margin-top: 6px;font-family: 'Microsoft YaHei';
   						font-size: 16px;text-align: center;">
				审读意见
			</div>
			<div>
				<textarea id="infoMessge" rows="" cols="" onclick="onDianJi(this)"
					style="width: 100%; height: 67px; resize: none;font-size:18px; color:color:#1d0101;padding: 5px;font-family: 'Microsoft YaHei';">请输入你的审核意见</textarea>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript">
	function onDianJi(obj) {
		if ($(obj).val() == "请输入你的审核意见") {
			$(obj).val("");
		}
		;
	}
</script>
</html>
