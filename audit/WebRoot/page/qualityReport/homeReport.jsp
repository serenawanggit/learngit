<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>TQC教学质量中心</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css"href="<%=basePath%>uploadify/uploadify.css" />
<link rel="stylesheet" href="<%=basePath %>/css/zTreeStyle/zTreeStyle.css" type="text/css">
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

<script type="text/javascript" src="<%=basePath%>js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript" src="<%=basePath%>uploadify/jquery.uploadify.min.js"></script>
<script type="text/javascript" src="/audit/commonjs/common1.js"></script>

<script type="text/javascript">
validateLogin();
var menuID = 2;
var menuLable = "定位与目标";
//切换目录
function selectMenu(mid,mName){
	menuID = mid;
	menuLable = mName;
}
	
	//设置高度
	function setheight() {
		var w = document.body.clientWidth;
		var h = document.body.clientHeight;
		var sbd = document.getElementById("submenudiv");
		sbd.style.height = (h) + "px";
	}
	
	function menuexpand(obj){
		var menuid=obj.getAttribute("value");
		var mid = document.getElementById(menuid);
		var dshow=mid.style.display;
		if(dshow=="none"){
			mid.style.display="";
			//obj.src="images/menu_expand.png";
		}else{
			mid.style.display="none";
			//obj.src="images/menu_flod.png";
		}
	}
	
	//---关闭
	function closeYS(){
		$("#md").fadeOut("fast");
		$("#mask").css({ display: 'none' });
	}
	
	
	function closeYS2(){
		$("#mdn").fadeOut("fast");
		$("#mask").css({ display: 'none' });
	}
	
</script>

</head>
<body style="overflow:auto;height: 100%;">
<!-- 遮盖层 -->
<div id="md" class="mymd"></div>
	<div id="centerdiv" style="width:100%;height: 100%;">
		<table cellpadding="0" cellspacing="0" style="width:100%;height: 100%;">
			<tr>
				<td style="width:212px;background-image:url(<%=basePath%>/images/submenubk.png);" valign="top">
					<table cellpadding="0" cellspacing="0" style="width:212px;background-color:#DDE2E6;">
						<tr>
							<td height="100%;">
								<div id="submenudiv" style="width:212px;background-image:url(<%=basePath%>/images/submenubk.png);height:100%;background-color:#DDE2E6;vertical-align:top;" >
								<%--左边菜单--%>
								<table id="moduleTB" style="width:212px;height:100%;" celladding="0" cellspacing="0">
									<tr>
									<td valign="left" style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;"
											colspan="2" onclick="menuexpand(this);" value="submenu001">
										<table cellpadding="0" cellspacing="0" style="width:212px;">
											<tr>
												<td align="left">
												<span style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img
													src="<%=basePath%>/images/icon001.png"
													style="vertical-align:middle;margin-left:10px;margin-right:5px;">
													<a href="#" style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">综合报表</a>
												</span>
												</td>

												<td align="right">
												<img src="<%=basePath%>/images/menu_expand.png"
															style="vertical-align:middle;margin-right:20px;">
												</td>

											</tr>
										</table>
									</td>
									</tr>

									<tr id="submenu001" class="submenu001" style="display:;">
										<td align="left" colspan="2">
											<table cellpadding="0" cellspacing="0" style="width:212px;">
												<tr>
													<td align="left" onclick="selectMenu(1,'定位与目标');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/hbTable.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >高基表</a></td>
												</tr>

											</table>
										</td>
									</tr>
									
									
									<!-- 
									<tr>
									<td valign="left" style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;"
											colspan="2" onclick="menuexpand(this);" value="submenu001">
										<table cellpadding="0" cellspacing="0" style="width:212px;">
											<tr>
												<td align="left">
												<span style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img
													src="<%=basePath%>/images/icon001.png"
													style="vertical-align:middle;margin-left:10px;margin-right:5px;">
													<a href="#" style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">报表查看</a>
												</span>
												</td>

												<td align="right">
												<img src="<%=basePath%>/images/menu_expand.png"
															style="vertical-align:middle;margin-right:20px;">
												</td>

											</tr>
										</table>
									</td>
									</tr>
									
									<tr id="submenu001" class="submenu001" style="display:;">
										<td align="left" colspan="2">
											<table cellpadding="0" cellspacing="0" style="width:212px;">
												<tr>
													<td align="left" onclick="selectMenu(1,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G111.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G11</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G112.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G112</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G1121.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G1121</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G1122.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G1122</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G311.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G311</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G312.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G312</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G313.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G313</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G314.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G314</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G317.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G317</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G318.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G318</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G321.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G321</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G322.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G322</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G331.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G331</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G332.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G332</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G341.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G341</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G351.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G351</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G361.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G361</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G371.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G371</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G411.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G411</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G421.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G421</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G422.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G422</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G423.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G423</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G424.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G424</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G431.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G431</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G441.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G441</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G451.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G451</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G461.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G461</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G511.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G511</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G521.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G521</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G522.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G522</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G931.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G931</a></td>
												</tr>
												<tr>
													<td align="left" onclick="selectMenu(2,'报表查看');"
															style="width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityReport/highBaseTable/G932.jsp" target="rightbox" 
															style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >G932</a></td>
												</tr>

											</table>
										</td>
									</tr>
									-->
								</table>
								</div>
							</td>
						</tr>
					</table>
			</td>

			<td style="" align="left" valign="top">
				<div style="width:100%;height: 100%;" id="container">
					<%--<img src="<%=basePath %>/images/center.png">
								hbTable.jsp
								highBaseTable/G111.jsp
								--%>
					<iframe src="<%=basePath%>/page/qualityReport/hbTable.jsp" name="rightbox"
							frameborder=0 id="rightbox" border=0 / width="100%" height="100%" id="rightbox"></iframe>
				</div>
			</td>
		</tr>
	</table>
</div>

</body>
</html>