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
<title>专业评估</title>
<link rel="stylesheet"
	href="<%=basePath%>tendina-master/demo/css/demo.css" type="text/css"></link>
<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/wangping/staticPage/css/home_1.css" />
	
<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/lzrPopWindow/css/lzrwindow.css" />
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript"
	src="<%=basePath%>page/lzrPopWindow/js/lzrWindow.js"></script>
<script type="text/javascript"
	src="<%=basePath%>tendina-master/dist/tendina.js"></script>
<script type="text/javascript"
	src="<%=basePath%>page/wangping/staticPage/js/Zjzg.js"></script>
	
  <script type="text/javascript" src="<%=basePath%>commonjs/common1.js"></script>
</head>

<body style="font-family:'Microsoft YaHei'"> 
	<div id="div1">
		<div>
			<div style="width:97%">
				<div style="background:#46A3D1;height:12%;line-height: 31px;color:#FFFFFF;margin:4px;0px;5px;4px">
					<div id="name" style="margin-left:10px"></div>
				</div>
				<div style="height: 37px;margin-top: 18px;">
					<div>
						<a href="javascript:outfile()" style="float:right;margin-right: 4%;">
							<img src="img/out.png"></img>
						</a>
					</div>
				</div>
				<div id="content1" style="width:95%;float:left;margin-left:15px;margin-top:8px">
					<div id="imglodding" style="margin:20 auto;width:383px"><img  src="img/loading.png"></img></div>
				</div>
				<div style="background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px; margin-top:5px;display:none">
					<div style="text-align: center;margin: 0 auto;">意见</div>
				</div>
				<div id="down" style="width: 100%;height:15%;display:none">
					<textarea rows="" cols="" id="messge" onclick="onDianJi(this)"
						style="width: 100%; height: 100%; resize: none;font-size:18px;
						 color:rgba(33, 33, 33, 0.95);padding: 5px; font-family: 'Microsoft YaHei';
   						 font-size: 16px;">请输入你的意见</textarea>
				</div>
				<div id="midle3" style="width:100%;margin-top:10px;display:none">
					<%--
						<div style="width:150px;float:right"><img src="/audit/page/xueyuan/staticPage/img/nopass.png" onclick="assess()"/></div>
						<div style="width:150px;float:right"><img src="/audit/page/xueyuan/staticPage/img/pass.png" onclick="assess()"/></div>
					--%>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript">
	function onDianJi(obj){
		var txt=$(obj).val();
		if(txt=="请输入你的意见"){
			$(obj).val("");
		}
	}
</script>
</html>
