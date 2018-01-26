<%@ page language="java" import="java.util.*,audit.util.Common" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	String tqccserver = Common.TQCC_SERVER;
	String dlyzserver = Common.DLYZ_SERVER;
	//String chartPath = Common.CHART_SERVER;

%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<!-- <link rel="shortcut icon" href="<%=basePath%>images/favicon.ico" type="image/x-icon" /> -->



<link rel="shortcut icon" type="image/x-icon" />
<title><%=Common.TITLE %></title>
<style type="text/css">
body,html {
	width: 100%;
	height: 100%;
	margin: 0;
	border: none;
	background-image: url(<%=basePath%>/images/centerbk.png);
	background-repeat: repeat-x;
	font-size: 12px;
	font-family: Arial, Helvetica, sans-serif;
}
</style>
<style>
.myd {
	background: #77887E;
	height: 100%;
	left: 0%;
	right: 0%;
	width: 100%;
	position: absolute;
	z-index: 1000;
}

.top_logo {
	height: 60px;
	line-height: 70px;
	font-family: "隶书";
	font-size: 22px;
	color: #FFF;
	background: url("/audit/images/logo.png") no-repeat scroll 10px center
		transparent;
	padding-left: 270px;
	float: left;
	cursor: pointer;
}

.isHide {
	display: none;
}
</style>
<!-- 导航 -->
<style type="text/css">
.chart_nva {
	margin-top: -3px;
	width: 90px;
	float: right;
	margin-right: 15px;
}

.chart_nva strong {
	font-weight: bold;
	line-height: 30px;
	margin-left: 5px;
}

.chart_nva strong a {
	color: white;
}

.chart_nva strong a img {
	width: 16px;
	height: 16px;
	vertical-align: middle;
}
</style>
<link rel="stylesheet" href="<%=basePath%>/css/easydialog.css" type="text/css">
<link rel="stylesheet" href="/audit/css/jumpMenu.css" type="text/css"></link>
<script type="text/javascript" src="<%=basePath%>js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>js/base.js"></script>
<script type="text/javascript" src="<%=basePath%>js/easydialog.js"></script>
<script type="text/javascript" src="<%=basePath%>js/popups.js"></script>
<script type="text/javascript" src="<%=basePath%>js/uesrMenuPermission.js"></script>
<script type="text/javascript" src="<%=basePath%>js/userMenuOperation.js"></script>
<script type="text/javascript" src="/CHART/js/updateUserPass.js"></script>


<script>
	$(function() {
		var cookie = document.cookie;
		if (cookie && cookie != "") {
			var cookies = cookie.split(";");
			for (var i = 0; i < cookies.length; i++) {
				var index = cookies[i].lastIndexOf("=");
				var cookiename = cookies[i].substring(0, index);
				if (myTrim(cookiename) == "uvocookie") {
					var value = cookies[i].substring(index + 1, cookies[i].length);
					var array = value.split("&");
					var url = "/login?name=" + array[1] + "&password=" + array[2];
					$.getJSON(url, function(data) {
						$("#showname").html(eval(data).showname);
					});
				}
			}
		} else {
			window.location.href = "/";
		}
		//模块权限 传入3： 应用平台
		getUserMenuPermission(3);
	});

	function myTrim(str) {
		for (var i = 0; i < str.length; i++) {
			var star = str.substring(0, 1);
			if (star == " ") {
				str = str.substring(1, str.length);
			}
			var end = str.substring(str.length - 1, str.length);
			if (end == " ") {
				str = str.substring(0, str.length - 1);
			}
		}
		return str;
	}
</script>
<link rel="stylesheet" href="<%=basePath%>css/tsk.css" type="text/css"></link>
<link rel="stylesheet" href="<%=basePath%>css/pw.css" type="text/css"></link></head>
<body scroll="no" onload="setheight();">
	<input type="hidden" id="dlyzserver" value="<%=dlyzserver%>">
	<input type="hidden" id="tqccserver" value="<%=tqccserver%>">
	<!-- 遮盖层 -->
	<div class="myd" style="display: none;z-index:1000;height:100%;"
		id="md"></div>
	<table width="100%" height="100%" cellpadding="0" cellspacing="0" border="0">
		<tr>
			<td align="left" valign="top">
				<table cellpadding="0" cellspacing="0"
					style="width:100%;height:57px;font-size:12px;background:url(/audit/images/tqcmenubk.png);">
					<tr>
						<td align="left" style="height:57px;" valign="middle">
							<div class="logoclass" onclick="javascript:window.location.href='/CHART';">
								<img src=<%=System.getProperty("logoUrl")%>></img>
							</div>
						</td>
						<td>
							<!-- 返回导航 -->
							<div class="chart_nva">
								<strong> <a href="javascript:void(0);"
									onclick="javascript:window.location.href = '/CHART'">
										返回导航&nbsp;<img src="/audit/images/nva_back.png" /> </a> </strong>
							</div>
							<div class="chart_nva">
								<strong> <a href="javascript:void(0);"
									onclick="pwClick();" id="showname">
										</a></strong>
							</div>
						</td>
						<!-- 修改菜单 -->
						<!--<div id="site-nav">
							<ul class="quick-menu"
								style="margin-top:15px; margin-right:15px;">
								<li class="mytaobao menu-item last">
									 <div class="menu" style="">
										<a class="menu-hd" href="#" style="font-weight: bold"> <img
											src="/audit/images/gonneg.png"
											style="width:30px;height:20px;" /><b></b> </a>
										<div class="menu-bd"
											style="width: 100px; height: 200px; _width: 202px;margin-top: 5px;">
											<div class="menu-bd-panel">
												<dl>
													<dd style="margin-left: 5px;">
														<strong style="font-weight: bold;">
															<div style="height: 25px;padding-top: 5px;">
																<img src="/audit/images/user_tb.png"
																	style="width:16px;height:16px;vertical-align:middle;" />
																<a class="" href="javascript:void(0)" id="showname"></a>
															</div> </strong>
													</dd>
												</dl>

												<dl>
													<dd style="margin-left: 5px;">
														<strong style="font-weight: bold;">
															<div style="height: 25px;padding-top: 5px;">
																<a href="/CHART/index.jsp"> <img
																	src="/audit/images/view.png" height="16px" width="16px"
																	style="vertical-align: middle; margin-right: 2px; font-size: 16px;font-weight: bold;" />教学状态</a>
														</strong>
													</dd>
												</dl>
												<hr class="hr_style" />
												<dl>
													<dd style="margin-left: 5px;">
														<strong style="font-weight: bold;line-height: 30px;">
															<a class="" href="/TQCC"> <img
																src="/audit/images/houtai_tb.png"
																style="width:16px;height:16px;vertical-align:middle;" />后台管理
														</a> </strong>
													</dd>
												</dl>
												<hr class="hr_style" />
												<dl>
													<dd style="margin-left: 5px;">
														<strong style="font-weight: bold;line-height: 30px;">
															<a href="/logout"> <img
																src="/audit/images/zhuxiao_tb.png"
																style="width:16px;height:16px;vertical-align:middle;" />注销
														</a> </strong>
													</dd>
												</dl>

											</div>
																							<s class=r></s><s class=rt></s><s class=lt></s><s class=b></s><s class="b b2"></s><s class=rb></s><s class=lb></s>
										</div>
									</div> </li>
							</ul>
						</div>-->
						<!-- 修改菜单结束 -->
						</td>
					</tr>

					<tr style="background-color: #4B9266;">
						<td align="left" style="height:40px;color:#333333;" colspan="2">
							<table id="table2" cellpadding="0" cellspacing="0" style="margin-left:70px;">
								<tr>
									<td  align="left" style="height:38px;color:#333333;display: none;">
										<img src="<%=basePath%>/images/menu001_press.png" id="menu001" onclick="cgmenubk(this);" style="border:0px;"
										onmouseover="this.style.cursor='pointer';">
									</td>
									<td align="left" ename="数据上报" class="isHide" style="height:38px;color:#333333;">
										<img src="<%=basePath%>/images/menu002.png" id="menu002" onclick="cgmenubk(this);" style="border:0px;"
										onmouseover="this.style.cursor='pointer';">
									</td>
									<td align="left" ename="质量报告" class="isHide" style="height:38px;color:#333333;">
										<img src="<%=basePath%>/images/menu003.png" id="menu003" onclick="cgmenubk(this);" style="border:0px;"
										onmouseover="this.style.cursor='pointer';">
									</td>
									
									<td align="left" ename="审核评估" class="isHide" style="height:38px;color:#333333;">
										<img src="<%=basePath%>/images/menu004.png" id="menu004" onclick="cgmenubk(this);" style="border:0px;"
										onmouseover="this.style.cursor='pointer';">
									</td>
									<td align="left" ename="高基表" class="isHide" style="height:38px;color:#333333;">
										<img src="<%=basePath%>/images/menu005.png" id="menu005" onclick="cgmenubk(this);" style="border:0px;"
										onmouseover="this.style.cursor='pointer';">
									</td>
									<td align="left" ename="数据收集" class="isHide"style="height:38px;color:#333333;">
										<img src="<%=basePath%>/images/menu006.png" id="menu006" onclick="cgmenubk(this);" style="border:0px;" 
										onmouseover="this.style.cursor='pointer';">
									</td>
									<td align="left" ename="质量任务" class="isHide" style="height:38px;color:#333333;">
										<img src="<%=basePath%>/images/menu007.png" id="menu007" onclick="cgmenubk(this);" style="border:0px;"
										onmouseover="this.style.cursor='pointer';">
									</td>
									<td align="left" ename="历史数据" class="isHide"style="height:38px;color:#333333;">
										<img src="<%=basePath%>/images/menu0008.png" id="menu0008" onclick="cgmenubk(this);" style="border:0px;" 
										onmouseover="this.style.cursor='pointer';">
									</td>
									<!-- 
                                <td align="left" style="height:38px;color:#333333;">
                                     <img src="<%=basePath%>/images/menu008.png" id="menu008" onclick="cgmenubk(this);" style="border:0px;" onmouseover="this.style.cursor='pointer';">
                                </td>
                                <td align="left" style="height:38px;color:#333333;">
                                     <img src="<%=basePath%>/images/menu009.png" id="menu009" onclick="cgmenubk(this);" style="border:0px;" onmouseover="this.style.cursor='pointer';">
                                </td>
                                <td align="left" style="height:38px;color:#333333;">
                                     <a  id="menu005" onclick="cgmenubk(this);" style="border:0px;" onmouseover="this.style.cursor='pointer';">质量报表</a>
                                </td>
                                 -->
								</tr>
							</table></td>
					</tr>

				</table></td>
		</tr>

		<tr>
			<td align="center" valign="top" id="iframeTD"><iframe src=""
					name="centerbox" frameborder=0 id="centerbox" border=0
					/ width="100%" height="100%"></iframe></td>
		</tr>

	</table>

	<script type="text/javascript">
$(function(){
	cgmenubk();
});

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}

	//切换菜单
	function cgmenubk(obj){
		for(var i=1;i<=7;i++){
			var nidtmp="";
			
			nidtmp="0"+i;
			
			var newid="menu0"+nidtmp;
			var newid2 = document.getElementById(newid);
			newid2.src="<%=basePath%>images/menu0"+nidtmp+".png";
			
		}
		var idselect="";
		
		if(obj!=null ){
			idselect=obj.id;
		}else{
			return;
		}
			var idselect2 = document.getElementById(idselect);
			idselect2.src="<%=basePath%>images/"+idselect+"_press.png";
			
			/*
			if(idselect!="menu001"){
				//初始化中间版块格局
				initcenterbord();
			}
			*/
			
			if(idselect=="menu001"){//首页
				//initfirstpage();
				window.location.href = "/tqc/index.html?mid="+idselect;
			}else if(idselect=="menu002"){//数据上报
				window.location.href ="/tqc/index.html?mid="+idselect;
			}else if(idselect=="menu003"){//质量报告模块
				window.location.href ="/tqc/index.html?mid="+idselect;
			}else if(idselect=="menu004"){
				//正在建设中
				underconstruct("<iframe src='<%=basePath%>page/auditing/homeCenter.jsp' name='centerbox' frameborder=0 id='centerbox' border=0/ width='100%' height='100%'></iframe>");
				
				//初始化审核评估左边菜单
				//creatAuditingMenu();
				//设置菜单高度
				//setheight();
			}else if(idselect=="menu005"){
				//正在建设中
				//underconstruct("<img src='../images/jianshezhong.jpg'>");
				underconstruct("<iframe src='<%=basePath%>page/qualityReport/homeReport.jsp' name='centerbox' frameborder=0 id='centerbox' border=0/ width='100%' height='100%'></iframe>");
			}else if(idselect=="menu006"){
				//正在建设中
				//underconstruct("<img src='../images/jianshezhong.jpg'>");
				underconstruct("<iframe src='<%=basePath%>page/dataAcquisition/homeDA.jsp' name='centerbox' frameborder=0 id='centerbox' border=0/ width='100%' height='100%'></iframe>");
			}else if(idselect=="menu007"){
				//正在建设中
				underconstruct("<iframe src='<%=basePath%>page/qualityMission/homeQM.jsp' name='centerbox' frameborder=0 id='centerbox' border=0/ width='100%' height='100%'></iframe>");
			}
			else if(idselect=="menu0008"){
				//正在建设中
				underconstruct("<iframe src='<%=basePath%>page/hr/main.jsp' name='centerbox' frameborder=0 id='centerbox' border=0/ width='100%' height='100%'></iframe>");
			}
		}

		//设置高度
		function setheight() {
			getMenuID();
			var w = document.body.clientWidth;
			var h = document.body.clientHeight;
			var sbd = document.getElementById("iframeTD");
			sbd.style.height = (h - 100) + "px";

		}

		function getQueryString(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null)
				return unescape(r[2]);
			return null;
		}
		function getMenuID() {
			var menuID = getQueryString("id");
			if (menuID == null) {
				var mid = getQueryString("mid");
				if (mid != null && mid != "") {
					menuID = "menu00" + mid;
				} else {
					//默认页面
					menuID = "menu006";
				}
			}

			var menu = document.getElementById(menuID);

			cgmenubk(menu);

		}

		//系统建设中
		function underconstruct(str) {
			var ctd = document.getElementById("iframeTD");
			//系统建设中
			ctd.innerHTML = str;
			//$("#iframeTD").innerHTML="<img src='images/jianshezhong.jpg'>";
		}
	</script>
	
	
			<!-- 密码维护 -->
	<div id="pwdManageDiv" style="text-align:center;display: none">
		<div class="row1" >
			密码维护<a href="javascript:closePswd();" title="关闭窗口" class="close_btn"
				id="closeBtn" style="text-decoration:none;">×</a>
		</div>
		<div class="office" align="center">
			<table class="tab" id="table" align="center"
				style="margin-top: 20px;width:100%">
				<tr>
					<td style="width: 30%;text-align: right;">输入原密码(<font
						class="font-style">*</font>):</td>
					<td><input type="password" name="oldPassword" id="oldPassword"
						maxlength="16" Class="txt" /></td>
				</tr>
				<tr style="height: 80px;">
					<td style="width: 30%;text-align: right;">输入新密码(<span
						class="req">*</span>):</td>
					<td><input style="margin-top: 15px;" type="password"
						name="newPassword" id="newPassword" maxlength="16" Class="txt"
						onkeyup="nkeyup();" onfocus="nfocus();" /> <br /> <span>由6-16位，由字母（区分大小写）、数字、符号组成</span>
					</td>
				</tr>

				<tr>
					<td style="width: 30%;text-align: right;">密码强度:</td>
					<td>
						<div class="ywz_zhuce_huixian" id='pwdLevel_1'></div>
						<div class="ywz_zhuce_huixian" id='pwdLevel_2'></div>
						<div class="ywz_zhuce_huixian" id='pwdLevel_3'></div> <br/>
						<div class="ywz_zhuce_hongxianwenzi">弱</div>
						<div class="ywz_zhuce_hongxianwenzi">中</div>
						<div class="ywz_zhuce_hongxianwenzi">强</div></td>
				</tr>

				<tr style="height: 60px;">
					<td style="width: 30%;text-align: right;">确认新密码(<span
						class="req">*</span>):</td>
					<td><input type="password" name="renewPassword"
						id="renewPassword" maxlength="16" Class="txt" /></td>
				</tr>
				<tr>
					<td colspan="2" align="center" style="padding-top: 10px;"><input
						type="button" value="保存" class="bt" onclick="passwordWH();" />&nbsp;&nbsp;
						<input type="button" value="取消" class="bt" onclick="closePswd();" />
					</td>
				</tr>
			</table>
		</div>
	</div>
	
</body>
</html>