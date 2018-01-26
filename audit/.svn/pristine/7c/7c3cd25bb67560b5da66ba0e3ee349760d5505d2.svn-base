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
<link rel="stylesheet" type="text/css"
	href="<%=basePath%>uploadify/uploadify.css" />
<link rel="stylesheet"
	href="<%=basePath%>/css/zTreeStyle/zTreeStyle.css" type="text/css">
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
<script type="text/javascript"
	src="<%=basePath%>/js/ztree/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript"
	src="<%=basePath%>/js/ztree/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript"
	src="<%=basePath%>uploadify/jquery.uploadify.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/uesrMenuPermission.js"></script>
<script type="text/javascript" src="<%=basePath%>js/userMenuOperation.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
	$(function(){
       validateLogin();
		getUserMenuPermission(3);
		
		 
		$("td[byInit=true]").each(function(i, td) {
			if ($(td).css("display") == "block") {
				$(td).find("a").html("<span>"+$(td).find("a").html()+"</span>").find("span").click();
				return false;
			}
		});
	});
	
	var menuID = 2;
	var menuLable = "任务管理";
	//切换目录
	function selectMenu(mid, mName) {
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

	function menuexpand(obj) {
		var menuid = obj.getAttribute("value");
		var mid = document.getElementById(menuid);
		var dshow = mid.style.display;
		if (dshow == "none") {
			mid.style.display = "";
		} else {
			mid.style.display = "none";
		}
	}

	//---关闭
	function closeYS(resource) {
		$("#" + resource).fadeOut("fast");
		$("#mask").css({
			display : 'none'
		});
	}
</script>

</head>
<body style="overflow:auto;height: 100%;">
<input type="hidden" id="tqccserver" value="<%=tqccserver%>">
	<!-- 遮盖层 -->
	<div id="md" class="mymd"></div>
	<!-- 添加部门及其人员 -->
	<div id="bmmd" class="mymd" style="font-size:12px;">
		<table style='font-size:12px;width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>
		<tr style='height:25px;background-image:url(<%=basePath%>/images/showtitlebk800.png);'>
			<td align='left'><span style='color:#FFF;font-size:12px;'>&nbsp;新增采集部门人员信息</span></td>
			<td align='right'><a href='javascript:void(0)' style='color:#FFF;text-decoration:none;font-size:12px;' onclick="closeYS('bmmd');">
				<img src='<%=basePath%>images/alertimg/alertclose.png ' border='0' style='vertical-align:middle;'></a>
			</td>
		</tr>
		<tr>
			<td colspan='2'  valign='top' style='background-color:#FFFFFF;height:460px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>
				<div style="width:100%;height:10%;margin-left:10px;">
				<br/>
					采集部门：<select style="width:250px;text-align:center" id="cjbm" onchange="rightbox.window.changeBmYh()">
						<option>校办</option>
						<option>人事处</option>
					</select>
				</div>
				<div style="width:100%;height:69%;">
					<div style="width:50%;height:100%;float:left;border:1px solid #ccc;font-size:12px;margin-left:10px;">
						<div style="height:25px;line-height:25px;background:#DAE0E6;font-weight:bold;padding-left:5px;">
							待选用户
						</div>
						<div style="height:290px;overflow: auto">
							<table style="font-size:12px;width:100%;" id="cjyh">	
								<tr style="height:30px;width:100%;" >
									<td colspan="3">
										<span style="padding-left:5px;">user1</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
								<tr style="height:30px;width:100%;" bgcolor="#E6E6E6">
									<td colspan="3">
										<span style="padding-left:5px;">user2</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
								<tr style="height:30px;">
									<td colspan="3">
										<span style="padding-left:5px;">user3</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
								<tr style="height:30px;" bgcolor="#E6E6E6">
									<td colspan="3">
										<span style="padding-left:5px;">user4</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
								<tr style="height:30px;">
									<td colspan="3">
										<span style="padding-left:5px;">user5</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
								<tr style="height:30px;" bgcolor="#E6E6E6">
									<td colspan="3">
										<span style="padding-left:5px;">user6</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
								<tr style="height:30px;">
									<td colspan="3">
										<span style="padding-left:5px;">user7</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
									<tr style="height:30px;" bgcolor="#E6E6E6">
									<td colspan="3">
										<span style="padding-left:5px;">user8</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
									<tr style="height:30px;">
									<td colspan="3">
										<span style="padding-left:5px;">user9</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
									<tr style="height:30px;" bgcolor="#E6E6E6">
									<td colspan="3">
										<span style="padding-left:5px;">user10</span>
										<a href='' style="float:right;margin-left:5px;">审核人</a>
										<a href='' style="float:right;">采集人</a>
									</td>
								</tr>
							</table>
						</div>
					</div>
					<div style="width:45%;height:100%;float:right;margin-right:15px;">
						<div style="width:100%;height:45%;border:1px solid #ccc;">
							<div style="height:25px;line-height:25px;background:#DAE0E6;font-weight:bold;padding-left:5px;">
								已选采集人
							</div>
							<div style="width:100%;height:120px;overflow: auto">
								<table style="font-size:12px;width:100%;" id='yxcjr'>	
								</table>
								</div>
						</div>
						<div style="width:100%;height:45%;margin-top:10px;border:1px solid #ccc;">
							<div style="height:25px;line-height:25px;background:#DAE0E6;font-weight:bold;padding-left:5px;">
								已选审核人
							</div>
							<div style="width:100%;height:130px;overflow: auto">
								<table style="font-size:12px;width:100%;" id='yxshr'>	
								</table>
								</div>
							
						</div>
					</div>
				</div>
				<div style="width:100%;height:20%;padding-top:20px;text-align:center">
						<input type="button" value="确定" class="ui_input_btn01" id="addBmBtn" /> 
						<input type="button" value="取消" class="ui_input_btn01" onclick="closeYS('bmmd');" /> 
				</div>
			</td>
		</tr>
	</table>
	</div>


	<!-- 状态数据表 -->
	<div id="ztsjbmd" class="mymd" style="font-size:12px;">
		<table style='font-size:12px;width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>
		<tr style='height:25px;background-image:url(<%=basePath%>/images/showtitlebk800.png);'>
			<td align='left'><span style='color:#FFF;font-size:12px;'>&nbsp;新增状态数据表</span></td>
			<td align='right'><a href='javascript:void(0)' style='color:#FFF;text-decoration:none;font-size:12px;' onclick="closeYS('ztsjbmd');">
				<img src='<%=basePath%>images/alertimg/alertclose.png ' border='0' style='vertical-align:middle;'></a>
			</td>
		</tr>
		<tr>
			<td colspan='2'  valign='top' style='background-color:#FFFFFF;height:300px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>
				<div style="width:100%;height:69%;">
					<table style="font-size:12px;margin-top:15px;"align="center">
						<tr style="height:35px;">
							<td width="30%">状态库表名:</td>
							<td width="68%"><input type="text" id="ztsjbmc" style="width:96%"/></td>
						</tr>
						<tr style="height:35px;">
							<td width="30%">数据采集单位:</td>
							<td width="68%">
								<select style="width:96%" id="cjbmsj">
								</select>
							</td>
						</tr>
						<!-- 跨学院审核 -->
						<tr style="height:35px;">
							<td width="30%">数据审核单位:</td>
							<td width="68%">
								<select style="width:96%" id="shbmsj">
								</select>
							</td>
						</tr>
						<tr style="height:35px;">
							<td width="30%">适用范围:</td>
							<td width="68%" >
								<select style="width:96%" id="syfwsj">
								</select>
							</td>
						</tr>
						<tr style="height:35px;">
							<td width="30%">数据采集模板:</td>
							<td width="68%">
								<select style="width:96%" id="zdymb">
								</select>
							</td>
						</tr>
					</table>
				</div>
				<div style="width:100%;height:20%;padding-top:20px;text-align:center">
						<input type="button" value="确定" class="ui_input_btn01" id="addBmBtn" onclick="rightbox.window.saveZtsjb()"/> 
						<input type="button" value="取消" class="ui_input_btn01" onclick="closeYS('ztsjbmd');" /> 
				</div>
			</td>
		</tr>
	</table>
	</div>
	<!-- 状态数据表更改 -->
	<div id="ztsjbmd_edit" class="mymd" style="font-size:12px;">
		<table style='font-size:12px;width:100%;background-color:;' cellpadding='0' cellspacing='0' border='0' valign='top'>
		<tr style='height:25px;background-image:url(<%=basePath%>/images/showtitlebk800.png);'>
			<td align='left'><span style='color:#FFF;font-size:12px;'>&nbsp;修改状态数据表</span></td>
			<td align='right'><a href='javascript:void(0)' style='color:#FFF;text-decoration:none;font-size:12px;' onclick="closeYS('ztsjbmd_edit');">
				<img src='<%=basePath%>images/alertimg/alertclose.png ' border='0' style='vertical-align:middle;'></a>
			</td>
		</tr>
		<tr>
		<input type="hidden" value="" id="id_edit" />
			<td colspan='2'  valign='top' style='background-color:#FFFFFF;height:300px;border-left:#DADADA 1px solid;border-right:#DADADA 1px solid;border-top:#0099FF 1px solid;'>
				<div style="width:100%;height:69%;">
					<table style="font-size:12px;margin-top:15px;"align="center">
						<tr style="height:35px;">
							<td width="30%">状态库表名:</td>
							<td width="68%"><input type="text" id="ztsjbmc_edit" style="width:96%"/></td>
						</tr>
						<tr style="height:35px;">
							<td width="30%">数据采集单位:</td>
							<td width="68%">
								<select style="width:96%" id="cjbmsj_edit">
									<option>校办</option>
									<option>人事处</option>
								</select>
							</td>
						</tr>
						<tr style="height:35px;">
							<td width="30%">数据审核单位:</td>
							<td width="68%">
								<select style="width:96%" id="shbmsj_edit">
									<option>校办</option>
									<option>人事处</option>
								</select>
							</td>
						</tr>
						<tr style="height:35px;">
							<td width="30%">适用范围:</td>
							<td width="68%" >
								<select style="width:96%" id="syfwsj_edit">
								</select>
							</td>
						</tr>
						<tr style="height:35px;">
							<td width="30%">数据采集模板:</td>
							<td width="68%">
								<select style="width:96%" id="zdymb_edit">
									<option>学校行政单位信息</option>
									<option>实验室和科研基地</option>
								</select>
							</td>
						</tr>
					</table>
				</div>
				<div style="width:100%;height:20%;padding-top:20px;text-align:center">
						<input type="button" value="确定" class="ui_input_btn01" id="addBmBtn" onclick="rightbox.window.updateSjb()"/> 
						<input type="button" value="取消" class="ui_input_btn01" onclick="closeYS('ztsjbmd_edit');" /> 
				</div>
			</td>
		</tr>
	</table>
	</div>
	
	<div id="centerdiv" style="width:100%;height: 100%;">
		<table cellpadding="0" cellspacing="0"
			style="width:100%;height: 100%;">
			<tr>
				<td
					style="width:212px;background-image:url(<%=basePath%>/images/submenubk.png);"
					valign="top">
					<table cellpadding="0" cellspacing="0"
						style="width:212px;background-color:#DDE2E6;">
						<tr>
							<td height="100%;">
								<div id="submenudiv"
									style="width:212px;background-image:url(<%=basePath%>/images/submenubk.png);height:100%;background-color:#DDE2E6;vertical-align:top;">
									<%--左边菜单--%>
									<table id="moduleTB" style="width:212px;height:100%;"
										celladding="0" cellspacing="0">
										<tr>
											<td valign="left"
												style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;"
												colspan="2" onclick="menuexpand(this);" value="submenu001">
												<table cellpadding="0" cellspacing="0" style="width:212px;">
													<tr>
														<td align="left"><span
															style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;"><img
																src="<%=basePath%>/images/icon001.png"
																style="vertical-align:middle;margin-left:10px;margin-right:5px;">
																<a href="#"
																style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">采集任务管理</a>
														</span></td>

														<td align="right"><img
															src="<%=basePath%>/images/menu_expand.png"
															style="vertical-align:middle;margin-right:20px;"></td>

													</tr>
												</table></td>
										</tr>

										<tr id="submenu001" class="submenu001" style="">
											<td align="left" colspan="2">
												<table cellpadding="0" cellspacing="0" style="width:212px;">
													<tr>
														<td byInit="true" name="采集任务管理" align="left" onclick="selectMenu(1,'任务管理');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/dataAcquisition/taskManage.jsp" target="rightbox" 
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016">采集任务管理</a>
														</td>
													</tr>

													<tr>
														<td byInit="true" name="状态数据表定义" align="left" onclick="selectMenu(1,'任务管理');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;"> <a
															href="<%=basePath%>/page/dataAcquisition/ztsjb.jsp"
															target="rightbox"
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016">状态数据表定义</a>
														</td>
													</tr>
													<tr>
														<td byInit="true" name="采集部门和人员管理" align="left" onclick="selectMenu(1,'任务管理');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;"> <a
															href="<%=basePath%>/page/dataAcquisition/ryybm.jsp"
															target="rightbox"
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016">采集部门和人员管理</a>
														</td>
													</tr>
													
													<tr>
														<td byInit="true" name="审核入库数据管理" align="left" onclick="selectMenu(1,'任务管理');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;"> <a
															href="<%=basePath%>/page/dataAcquisition/AuditDataManagement.jsp"
															target="rightbox"
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016">审核入库数据管理</a>
														</td>
													</tr>
													
												     <tr>
														<td byInit="true" name="数据补录管理" align="left" onclick="selectMenu(1,'任务管理');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;"> <a
															href="<%=basePath%>/dataMakeUpTask/view.do"
															target="rightbox"
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016">数据补录管理</a>
														</td>
													</tr>
												</table></td>
										</tr>

										<tr>
											<td valign="left"
												style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;"
												colspan="2" onclick="menuexpand(this);" value="submenu002">
												<table cellpadding="0" cellspacing="0" style="width:212px;">
													<tr>
														<td align="left"><span
															style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;">
																<img src="../../images/icon002.png"
																style="vertical-align:middle;margin-left:10px;margin-right:5px;">
																<a href="#"
																style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">数据填报</a>
														</span></td>

														<td align="right"><img
															src="<%=basePath%>/images/menu_expand.png"
															style="vertical-align:middle;margin-right:20px;"></td>

													</tr>
												</table></td>
										</tr>

										<tr id="submenu002" class="submenu001" style="display:;">
											<td align="left" colspan="2">
												<table cellpadding="0" cellspacing="0" style="width:212px;">
													<tr>
														<td byInit="true" name="数据填报" align="left" onclick="selectMenu(1,'报表查看');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/dataAcquisition/taskTianBao.jsp" target="rightbox" 
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >数据填报</a></td>
													</tr>
													<tr>
														<td byInit="true" name="数据补录" align="left" onclick="selectMenu(1,'报表查看');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>page/dataAcquisition/makeupData.jsp" target="rightbox" 
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016">数据补录</a>
														</td>
													</tr>

												</table></td>
										</tr>
										
										<tr>
											<td valign="left"
												style="background-image:url(<%=basePath%>/images/topflm_bk002.png);background-repeat:no-repeat;"
												colspan="2" onclick="menuexpand(this);" value="submenu003">
												<table cellpadding="0" cellspacing="0" style="width:212px;">
													<tr>
														<td align="left"><span
															style="display:inline-block;width:;height:40px;line-height:40px;vertical-align:middle;">
																<img src="../../images/icon002.png"
																style="vertical-align:middle;margin-left:10px;margin-right:5px;">
																<a href="#"
																style="font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;height:37px;line-height:37px;">采集任务审核</a>
														</span></td>

														<td align="right"><img
															src="<%=basePath%>/images/menu_expand.png"
															style="vertical-align:middle;margin-right:20px;"></td>

													</tr>
												</table></td>
										</tr>

										<tr id="submenu003" class="submenu001" style="display:;">
											<td align="left" colspan="2">
												<table cellpadding="0" cellspacing="0" style="width:212px;">
													<tr>
														<td byInit="true" name="任务审核" align="left" onclick="selectMenu(1,'报表查看');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png"
															style="vertical-align:middle;margin-left:26px;">
														<a href="<%=basePath%>/page/dataAcquisition/rwcx.jsp" target="rightbox" 
															style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;"
															id="datasbitem016" >任务审核</a></td>
													</tr>
													<tr>
														<td byInit="true" name="补录数据审核" align="left" onclick="selectMenu(2,'报表查看');"
															style="display:none;width:212px;height:40px;background-image:url(<%=basePath%>/images/secondflm_bk001.png);">
															<img src="<%=basePath%>/images/status_green.png" style="vertical-align:middle;margin-left:26px;">
															<a href="<%=basePath%>/page/dataAcquisition/checkMakeUpData.jsp" target="rightbox" style="line-height:40px;font-size:12px;text-decoration:none;display:inline-block;vertical-align:middle;color:#333333;" id="datasbitem016">补录数据审核</a>
														</td>
													</tr>

												</table></td>
										</tr>
									</table>
								</div></td>
						</tr>
					</table></td>

				<td style="" align="left" valign="top">
					<div style="width:100%;height: 100%;" id="container">
<!-- 					<iframe src="<%=basePath%>/page/dataAcquisition/taskManage.jsp" name="rightbox" frameborder=0 id="rightbox" border=0 / width="100%" height="100%" id="rightbox"></iframe> -->
					<iframe name="rightbox" frameborder=0 border=0 / width="100%" height="100%" id="rightbox"></iframe>
				</div>
			</td>
		</tr>
	</table>
</div>

</body>
</html>