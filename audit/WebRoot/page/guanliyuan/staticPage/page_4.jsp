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
<script type="text/javascript" src="/audit/page/guanliyuan/staticPage/js/page_4.js" ></script>	
<script type="text/javascript" src="js/jquery.form.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>	
<script type="text/javascript" src="/audit/commonjs/common1.js"></script>

<style type="text/css">
	li:hover
		{ 
			background-color:#2f93fd;
		}
</style>
</head>

<body>
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
	<div id="main">
		<div id="top">
			<div id="text">
				专业质量报告
			</div>
		</div>
		<div id="midle1" style="height: 47px; width:100%;" >
			<div style="margin-top:10px;">
				<div style="float:left;margin-left:27px;position: relative;">
					<strong>专业:</strong>
					<input type="text" style="height: 32px;" id="sp_name" placeholder="请选择专业"/>
					<a href="javascript:xiala(2)"><img src="/audit/page/guanliyuan/staticPage/img/xiala.png" style="float:right" /></a>
					<!-- 下拉显示框 -->
					<div id="2" name="xialaBox" style="height:230px;border:1px solid #eeeeee;width: 172px;position: absolute;left: 40.5px;z-index:100;display:none;overflow:auto;">
						<ul style="list-style: none;background: white;" id='ul2'>
							<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
						</ul>
					</div>
				</div>
				<div style="float:left;margin-left:27px;position: relative;">
					<strong>时间:</strong>
					<select style="height:32px;width:172px" id="rYear">
						<option value="2016">2016</option>
						<option value="2017">2017</option>
						<option value="2018">2018</option>
						<option value="2019">2019</option>
						<option value="2020">2020</option>
					</select>
					<a href="javascript:getAllData()"><img title="点击搜索"  src="/audit/page/guanliyuan/staticPage/img/search.png" style="float:right" /></a>
				</div>
				<!-- 预览总文件 按钮 -->
				<a href="javascript:showAll()" id="showAllFile" style="display:none"><img title="预览用户上传的总文件"  src="/audit/page/wangping/staticPage/img/allread.png" style="float:right" /></a>
				<!-- 返回按钮 -->
				<a href="javascript:getAllData()" id="backbtn" style="display:none"><img title="点击返回"  src="/audit/images/zypg/goback.png" style="float:right" /></a>
			</div>
		</div>
		<div id="contentAll2" style="
											width: 75%;
											height:85%;
											display:none;
											background:#fff;
											position: absolute;
											border: 3px solid rgba(113, 113, 113, 0.56)">
					<div style="
    					height: 8%;
    					background: #46A3D1;
    					"><span id="title" style="height: 100%;
												  margin-right:10px;
												  line-height:34px;"></span>
    					<a href="javascript:closeWindow()" style="float: right;
										    					float: right;
															    display: block;
															    height: 100%;
															    margin-right:10px;
															    line-height:34px;
										    					"><img src="/audit/page/wangping/staticPage/img/closeWindow.png" /></a>
						<a href="javascript:download()" id="down1" style="float: right;
										    					float: right;
															    display: none;
															    height: 100%;
															    margin-right:10px;
															    line-height:34px;
										    					"><img src="/audit/page/wangping/staticPage/img/download_2.png" /></a>
    				</div>
    				<div id="contentThing"></div>
			</div>
		<div id="midle2" style="border: 1px solid rgba(113, 113, 113, 0.56);">
			<div id="contentAll" style="height:70%;"></div>
		</div>
	</div>
</body>
</html>
