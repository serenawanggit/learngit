<%@ page language="java" import="java.util.*,audit.util.Common" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String tqccserver = Common.TQCC_SERVER;
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
<script type="text/javascript" src="<%=basePath%>js/uesrMenuPermission.js"></script>
<script type="text/javascript" src="<%=basePath%>js/userMenuOperation.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
$(function(){
	getUserMenuPermission(3);
});
var menuID = 2;
var menuLable = "任务管理";
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
<input type="hidden" id="tqccserver" value="<%=tqccserver%>">
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
									<tbody>
									<tr>
									<td valign="left" style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;"
											colspan="2" onclick="menuexpand(this);" value="submenu001">
										<table cellpadding="0" cellspacing="0" style="width:212px;">
											<tr>
												<td align="left">
												<span style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img
													src="<%=basePath%>/images/icon001.png"
													style="vertical-align:middle;margin-left:10px;margin-right:5px;">
													<a href="#" style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">质量任务管理</a>
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
													<td name="任务管理" align="left" onclick="selectMenu(1,'任务管理');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>zlrwController/zlRwListView.do" target="rightbox" 
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >任务管理</a></td>
												</tr>
												<tr>
													<td name="任务进度" align="left" onclick="selectMenu(1,'任务管理');" style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png" style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityMission/JinDu.jsp" target="rightbox" style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" id="datasbitem016" >任务进度</a></td>
												</tr>
												
												<tr>
													<td name="任务部门和人员管理" align="left" onclick="selectMenu(1,'任务管理');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="line-height:40px;vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/qualityMission/bumenAndrenyuan.jsp" target="rightbox" 
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >任务部门和人员管理</a></td>
												</tr>
											</table>
										</td>
									</tr>
									
									
									<tr>
									<td valign="left" style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;"
											colspan="2" onclick="menuexpand(this);" value="submenu002">
										<table cellpadding="0" cellspacing="0" style="width:212px;">
											<tr>
												<td align="left">
												<span style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;">
												<img src="../../images/icon002.png" style="vertical-align:middle;margin-left:10px;margin-right:5px;">
												<a href="#" style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">我的任务</a>
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

									<tr id="submenu002" class="submenu001" style="display:;">
										<td align="left" colspan="2">
											<table cellpadding="0" cellspacing="0" style="width:212px;">
												<tr>
													<td name="任务更新" align="left" onclick="selectMenu(1,'报表查看');" style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
														<img src="<%=basePath%>/images/status_green.png" style="vertical-align:middle;margin-left:26px;"/>
														<a href="<%=basePath%>/userZlRwController/userTaskView.do" target="rightbox" style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" id="datasbitem016" >任务更新</a></td>
												</tr>
											</table>
										</td>
									</tr>
									<tbody>
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
					<iframe id="rightPage" src="<%=basePath%>/page/qualityMission/zhiLiangRenWu.jsp" name="rightbox"
							frameborder=0 id="rightbox" border=0 / width="100%" height="100%"></iframe>
				</div>
			</td>
		</tr>
	</table>
</div>

</body>
</html>