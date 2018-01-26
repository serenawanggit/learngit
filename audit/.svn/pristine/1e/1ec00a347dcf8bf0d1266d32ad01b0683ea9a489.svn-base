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
	href="<%=basePath%>page/xueyuan/staticPage/css/home_1.css" />

<link rel="stylesheet" type="text/css"
	href="<%=basePath%>page/lzrPopWindow/css/lzrwindow.css" />
<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
<script type="text/javascript"
	src="<%=basePath%>tendina-master/dist/tendina.js"></script>
<script type="text/javascript"
	src="<%=basePath%>page/lzrPopWindow/js/lzrWindow.js"></script>
<script type="text/javascript"
	src="<%=basePath%>page/wangping/staticPage/js/home_1.js"></script>
	 <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
	
	
	
</head>

<body style="font-family:'Microsoft YaHei'"> 
	<div id="div1">
		<div id="left">
			<div id="upper">
				<img src="<%=basePath%>page/zenith/staticPage/img/logo.png">
				<div id="dynamic">专家网评</div>
			</div>
			<div id="middle">
				<span id="dataReport">整改报告</span>
			</div>
			<div id="down">
				<div id="content" class="dropdown"
					style="background-color: #3A3A3A;">
					<%--<li class="li1 mySelect"><a id="deepest"
						href="javascript:location.reload()"></a></li>
				--%></div>
			</div>
		</div>
		<div id="right">
			<div id="top">
				<div id="left1">
					<div>
						<ul id="tab">
							<li><div id="zgbg"
									style="cursor:pointer;background-color: rgb(70, 163, 209);" 
									onclick="javascript:location.reload()">整改报告</div>
							</li>
							<li><div onclick="jump(1)" style="cursor:pointer">专家网评<!-- 专业质量报告 --></div>
							</li>
							<%--<li><div onclick="jump(2)" style="cursor:pointer">历史报告</div>
							</li>
						--%></ul>
					</div>
				</div>
				<div id="right1">
					<div>
						<ul id="tab2">
							<li><div>
									<img src="<%=basePath%>page/zenith/staticPage/img/user.png"></img>
								</div>
							</li>
							<li><div>
									<span id="showUserName" style="color:white;line-height:25px"></span>
								</div>
							</li>
							<li><div>
									<a href="javascript:void(0)"
										onclick="javascript:location.reload()" style="cursor:pointer"><img
										title="刷新"
										src="<%=basePath%>page/zenith/staticPage/img/refresh.png">
									</a>
								</div>
							</li>
							<li><div>
									<a href="javascript:void(0)" onclick="javascript:black(-1)"
										style="cursor:pointer"><img title="返回列表"
										src="<%=basePath%>page/zenith/staticPage/img/back.png">
									</a>
								</div>
							</li>
							<%-- <li><div><img src="<%=basePath%>page/zenith/staticPage/img/problem.png"></div></li> --%>
							<li><div>
									<a href="javascript:void(0)" onclick="logout();"
										style="cursor:pointer"><img title="注销"
										src="<%=basePath%>page/zenith/staticPage/img/exit.png">
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div id="main" style="padding: 2px 75px 0 11px;margin-right:10px">
				<div style="background:#46A3D1;height:6%;line-height: 31px;color:#FFFFFF;margin:4px;0px;5px;4px">
					<div id="name" style="margin-left:10px">整改报告</div>
				</div>
				<div style="height: 37px;margin-top: 18px;">
					<div style="width:100px;float:right">
						<a href="javascript:outfile()">
							<img src="img/out.png"></img>
						</a>
					</div>
				</div>
				<div id="content1" style="overflow :auto;overflow-y :auto;max-height:60.5%;min-height:120px;width: 100%;">
					<div id="imglodding" style="margin:20 auto;width:383px"><img src="img/loading.png" style="margin-left: 10px;"></img></div>
				</div>
				<div style="background: rgba(204, 204, 204, 0.92);height: 30px;line-height: 30px; margin-top:5px;">
					<div style="text-align: center;margin: 0 auto;">意见</div>
				</div>
				<div id="down" style="width: 100%;height:15%">
					<textarea rows="" cols="" id="messge" onclick="onDianJi(this)"
						style="width: 100%; height: 100%; resize: none;font-size:18px;
						 color:rgba(33, 33, 33, 0.95);padding: 5px; font-family: 'Microsoft YaHei';
   						 font-size: 16px;">请输入你的意见</textarea>
				</div>
				<div>
					<div style="color: red;width: 330px;float: left;">保存按钮保存意见,提交按钮表示审核工作完成!</div>
					<div id="midle3" style="width:100%;margin-top:10px">
						<%--
							<div style="width:150px;float:right"><img src="/audit/page/xueyuan/staticPage/img/nopass.png" onclick="assess()"/></div>
							<div style="width:150px;float:right"><img src="/audit/page/xueyuan/staticPage/img/pass.png" onclick="assess()"/></div>
						--%>
					</div>
				</div>
				
			<!-- 	<div id='mywindow' style="
					    border: 1px solid #BFBFBF;
					    width: 345px;
					    height: 135px;
					    position: absolute;
					    top: 30%;
					    left: 45%;
					    display:none;
									" >
					<div id="windowTitle" style="background:#72D1FF;height:28%">
							<span style="color:#D1F2FE;line-height: 30px;margin-left: 3px;">提示</span>
							<a href="javascript:closeMywindow()" style="float: right;display: block;margin: 3px;">
									<img src="/audit/page/wangping/images/closebtn.png"/>
								</a>
					</div>
					<div id="windowContent" style="background:#FFFFFF;height:72%" >
						<div id="messg" style="margin:0 auto ; width:80%;color:#9ED7E9">
						</div>
					</div>
				</div> -->
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
