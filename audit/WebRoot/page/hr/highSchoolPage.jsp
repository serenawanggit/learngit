<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>

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
<title>教师激励计划</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<script type="text/javascript" src="/audit/js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="/audit/js/jquery.form.min.js"></script>
<script type="text/javascript" src="/audit/js/hr/tendina.js"></script>
<script type="text/javascript" src="/audit/js/hr/highSchoolPage1.js"></script>
 <script type="text/javascript" src="<%=basePath %>/js/json2.js"></script>
<link rel="stylesheet" type="text/css"
	href="/audit/css/hr/highSchoolPage.css" />

<style type="text/css">
.top {
	background: #517b99;
	height: 60px;
	position: fixed;
	left: 0;
	right: 0;
	top: 0px;
	z-index: 99;
}
/* 后台管理 logo */
.logoclass {
	margin-left: 10px;
	margin-top: 9px;
	float: left;
	cursor: pointer;
}

.logoclass img {
	float: left;
	height: 40px;
}

.logoclass label {
	margin-left: 15px;
	height: 65px;
	line-height: 65px;
	color: #FFF;
	font-size: 18px;
}
/* 导航 */
.chart_nva {
	
}

.chart_nva {
	font-weight: #8A5ACD;
}

.chart_nva a {
	color: #ffffff;
	margin-right: 10px;
	margin-bottom: 5px
}

.chart_nva a img {
	width: 16px;
	height: 16px;
	vertical-align: middle;
	margin-left: 20px;
	margin-bottom: 5px
}

.top_nav {
	
}

.nav_operation {
	float: right;
	margin-top: 20px;
	margin-right: 15px;
}

.nav_operation li {
	float: left;
	margin-right: 10px;
}

.nav_operation li a {
	display: inline;
}

.user2 a {
	height: 20 px;
	background: url(/TQCC/images/hr/user.png) no-repeat left top;
	color: #ffffff;
	padding-left: 20px;
	margin-left: 20px;
	margin-right: 5px;
	margin-top: 5px
}

.user2 a img {
	margin-left: 1px;
	margin-right: 5px;
	margin-top: 5px
}
/* .user2 a:hover{background:url(/TQCC/images/hr/user.png) no-repeat left -16px; color:#22b8ed;float:left;} */
.quit2 a {
	background: url(/TQCC/images/hr/cancellation.png) no-repeat left top;
	color: #ffffff;
	padding-left: 20px;
	float: left;
	margin-top: 1.5px
}
/* .quit2 a:hover{background:url(/TQCC/images/hr/cancellation.png) no-repeat left -16px; color:#ffffff; } */
</style>

</head>

<body style="overflow: hidden">
	<input type="hidden" id="dlyzserver"
		value="<%=System.getProperty("server.dlyz.name")%>">
	<div class=""z-index=99>
		<div class="top top_nav">
			<div class="logoclass"
				onclick="javascript:window.location.href='/CHART';">
				<%-- <img src=<%=System.getProperty("logoUrl")%>></img> --%>
				<img src="/audit/images/jsjlLOgo.png"></img>
				<!-- 		<img class="logoclass" src="/TQCC/images/login2.png" /> -->
			</div>

			<ul class="nav_operation">
				<li class="user2"><input type="hidden"
					value="${sessionScope.uvo.role}" id="role" /> <a
					href="javascript:void(0)" id="showname"> <img
						src="${tqccCtx}/images/sanjiao.png" width="9" height="5" /> </a></li>
				<li class="chart_nva"><img src="/TQCC/images/hr/return.png" />
					<!-- <a href="javascript:void(0);"
					onclick="javascript:window.location.href = '/CHART'"> 返回导航 </a> -->
					<a href="javascript:void(0);"
					onclick="javascript:window.location.href = '/CHART/utilizerV2.jsp'"> 更多功能 </a>
					</li>
				<li class="quit2"><a href="/logout">注销登录</a></li>
			</ul>
		</div>
		<div style="background:#395368;height:3px;margin-top:60px;z-index:1;"></div>
		<div style="background:#517b99;height:15px;margin-top:0px;z-index:1;">

		</div>
		<div
			style="background:#d9d9d9;width:20%;height:90%;text-overflow: ellipsis;z-index:2;overflow: auto;"
			class="left">
			<div id="left_menu" class="dropdown tendina"></div>

		</div>
		<div class="right">
			<div>
				<div id="tab_name">请选择一项数据表进行操作</div>
			</div>
			<!-- 点击审核页面 start -->
			<div id="index_page"
				style="display: none;border-top:  1px solid #c2c2c2;border-bottom:  1px solid #c2c2c2;">
				<ul>
					<!-- 					<li class="index_page_li" style="margin-top: 0px"><img src="/audit/images/newBuild.png" class="img_li" onclick="newBuild()" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/></li>
					<li class="index_page_li" style="margin-top: 0px"><img src="/audit/images/delete.png" class="img_li" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/> </li>
					<li class="index_page_li" style="margin-top: 0px"><img src="/audit/images/copy.png" class="img_li" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/></li> -->
				</ul>
				<ul>
					<li style="margin-left: 20px;padding-top: 7px;">统计时间： <select
						style="border: #517b99 1px solid;border-radius:5px; "
						id="shrlookdate"><option>2015-2016第一学期</option>
					</select> <input type="button" style="float: right;margin-right: 5px"
						value="返回" id="goback" onclick="isgouback()"> <input
						type="button" style="float: right;margin-right: 5px" value="通过"
						id="pass" updateid="" onclick="passOrNotPass(2,this)" /> <input
						type="button" style="float: right;margin-right: 5px" value="未通过"
						id="notpass" updateid="" onclick="passOrNotPass(1,this)" /> <input
						type="button" style="float: right;margin-right: 5px" value="确认提交"
						id="confirmPass" updateid="" onclick="confirmPass(this)" />
						<input
						type="button" style="float: right;margin-right: 5px" value="excel导出"
						 updateid="" onclick="SHdataImport(this)" id="SHdataImport" thisid="" />
						<!-- <img alt="" src="/audit/images/fh1.png" style="float: right;margin-right: 5px;cursor: pointer;" onclick="isgouback()" id="goback">
						<img alt="" src="/audit/images/tg.png" style="float: right;margin-right: 5px;cursor: pointer;" onclick="passOrNotPass(2,this)" id="pass">
						<img alt="" src="/audit/images/wtg.png" style="float: right;margin-right: 5px;cursor: pointer;" onclick="passOrNotPass(1,this)" id="notpass">
						<img alt="" src="/audit/images/qrtj.png" style="float: right;margin-right: 5px;cursor: pointer;" onclick="confirmPass(this)" id="confirmPass">
						<img alt="" src="/audit/images/exceldc.png" style="float: right;margin-right: 5px;cursor: pointer;" onclick="SHdataImport(this)" id="SHdataImport" thisid=""> -->
						<span style="font-size: 12px;float: right;color:red">全部学院审核完成，无误后，点击确认提交，结束任务！</span>
						</li>
				</ul>

				<ul style="overflow: auto;height:480px;width:1200px;">
					<table class="table_style" style="border-collapse:collapse;"
						id="datatable1">
						<thead>
							<tr style="background-color: #d6dfe5;height: 30px;"
								valign="middle">
								<!-- 						<td><img src="/audit/images/rectangle.png" /></td>
	 -->
								<td style="text-align: center;">填报院系</td>
								<td style="text-align: center;">填报人</td>
								<td style="text-align: center;">统计时间</td>
								<td style="text-align: center;">填报状态</td>
								<td style="text-align: center;">操作</td>
							</tr>
						</thead>
						<tbody id="SHRtbody">
						</tbody>
					</table>
					<table id="datatable2" class="table_style"
						style="border-collapse:collapse;border: 1px solid #c2c2c2;border-bottom: 1px solid #c2c2c2;display: none">
						<thead id="tb_theadshr" class="tb_thead">
							<tr></tr>
						</thead>
						<tbody id="tb_tbodyshr">
						</tbody>
					</table>
				</ul>
			</div>
			<!-- 点击节点出现统计表填报的主页面 end -->

			<!--点击 统计表填报的 新建出现的统计表页面  start-->
			<div id="newBuild" style="display:none ;">
				<ul
					style="border-top:  1px solid #c2c2c2;border-bottom:  1px solid #c2c2c2;height: 40px;background-color: #e4e4e4">
					<li class="index_page_li"><img src="/audit/images/ndbc.png"
						class="img_li" onclick="submitData()" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li class="index_page_li"><img src="/audit/images/jy.png"
						class="img_li"  /><img src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li class="index_page_li"><img src="/audit/images/fh.png"
						class="img_li" onclick="backPrevious()" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li class="index_page_li"><img src="/audit/images/dy.png"
						class="img_li" /><img src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li style="float:right;display: inline;"><img
						src="/audit/images/ls.png" class="img_li"
						style="margin-bottom: 8px;" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;margin-bottom: 7px" />
					</li>
					<li style="float:right;display: inline;"><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-right: 25px;padding-top: 9px;margin-bottom: 7px" /><img
						src="/audit/images/tb.png" class="img_li"
						style="	margin-bottom: 8px;" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;margin-right: 25px;margin-bottom: 7px" />
					</li>
					<li id="current_name"
						style="float:right;margin-top: 9px;font-size: 16px;display: inline;overflow: hidden; text-overflow: ellipsis; white-space: nowrap;width: 300px">当前处理人：
					</li>
				</ul>
				<ul style="margin-top: 10px">
					<li style="margin-left: 20px;display: inline">审批</li>
					<li style="margin-left: 30px;display: inline">审批备注</li>
					<li style="display: inline;margin-left: 2px"><input
						type="text" value="请输入"
						style="border: #e2e2e2;border-radius:1px;color: #55OOOOOO">
					</li>
				</ul>

				<table id="new_table"
					style="margin-left: 30px;margin-top: 20px;width: 90%;border-collapse:collapse">
					<tr>
						<td style="border-right: 0px">统计时间</td>
						<td style="background-color: #ffffff"><input type="text" />
						</td>
					</tr>
					<tr>
						<td>填报学校</td>
						<td style="background-color: #ffffff">上海电机学院</td>
					</tr>
					<tr>
						<td>项目</td>
						<td>数量</td>
					</tr>
					<tr>
						<td>数量(间)</td>
						<td style="background-color: #ffffff">267</td>
					</tr>
					<tr>
						<td>其中：外语教学计算机机房(含语音室)</td>
						<td style="background-color: #ffffff">12</td>
					</tr>
					<tr>
						<td>多媒体教室</td>
						<td style="background-color: #ffffff">218</td>
					</tr>
					<tr>
						<td>座位数(个)</td>
						<td style="background-color: #ffffff">16460</td>
					</tr>
					<tr>
						<td>其中：外语教学计算机机房(含语音室)</td>
						<td style="background-color: #ffffff">582</td>
					</tr>
					<tr>
						<td>多媒体教室</td>
						<td style="background-color: #ffffff">14083</td>
					</tr>

				</table>
			</div>
			<!--点击新建出现的统计表页面  end-->

			<!--点击节点出现的明细表填报页面 start-->
			<div id="MXpage" style="display: none">
				<ul
					style="border-bottom:  1px solid #c2c2c2;height:40px;background-color: #e4e4e4">
					<li class="index_page_li"  style="margin-top: 0px;cursor:pointer;" id="qqqq"><img
						src="/audit/images/qrtj.png" class="img_li" onclick="submitData()" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;" id="jjjj"><img
						src="/audit/images/jy.png" class="img_li" onclick="newCheck()" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<!-- 					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img src="/audit/images/fh.png" class="img_li" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/></li>
 -->
					<!-- 					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img src="/audit/images/dy.png" class="img_li" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/></li>
 -->
				</ul>
				<ul>
					<li style="margin-left: 20px;padding-top: 15px; ">统计时间： <select
						id="importMoeTime"
						style="border: #517b99 1px solid;border-radius:5px; padding-top: -5px"><option>2015-2016第一学期</option>
					</select> 
					<!-- <img src="/audit/images/sx.png" class="img_li" onclick="sx()" style="padding-top: 5px" />
					<img src="/audit/images/qksj.png" class="img_li" onclick="qk()" /> -->
					   <input type="button"  onclick="sx()" style="margin-left: 10px;background-image:url('./images/sx.png');border: 0px;width:90px;height:29px;cursor:pointer;">
					   <input type="button"  onclick="qk()" style="margin-left: 10px;background-image:url('./images/qksj.png');border: 0px;width:90px;height:29px;cursor:pointer;">
					<span
						style="float: right;margin-right: 20px;color:red;font-size: 13px;"
						id="userState" tbztid=""></span></li>
				</ul>
				<ul
					style="border-top:  1px solid #c2c2c2;border-bottom:  1px solid #c2c2c2;height:40px;margin-top: 15px;background-color: #efefef">
					<!-- 		<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img src="/audit/images/newBuild.png" class="img_li"  /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/></li>
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img src="/audit/images/delete.png" class="img_li" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/> </li> -->
					<!-- onclick=";" -->
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"
						onclick="findSelectNode();"><img
						src="/audit/images/excledr.png" class="img_li" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;" onclick="exportTable();"><img
						src="/audit/images/excledc.png" class="img_li" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;" onclick="downmb()"><img
						src="/audit/images/xzmb.png" class="img_li" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
				<!-- 	<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img
						src="/audit/images/qxsy.png" class="img_li" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li> -->
				</ul>
				<form id="importFileForm" class="fileForm"
					action="/audit/moeImport/importMORTable.do" method="post"
					enctype="multipart/form-data">
					<input type="file" name="file" id="importFile" accept=".xls;*.xlsx"
						style="display:none;" onchange="submitImportFile()" /> <input
						type="text" name="idxxx" value="" id="MOEid"style="display:none" />
					<input type="text" name="insert_version" value=""
						id="insert_version" style="display:none" />
				</form>
				
				<form  id="exportform" action="" method="post" enctype="multipart/form-data" class="fileForm"></form>
				<ul>
					<div style="width:99%;height:59%;overflow:auto;" id="datatable">
						<table id="table2" class="table_style"
							style="border-collapse:collapse;border: 1px solid #c2c2c2;border-bottom: 1px solid #c2c2c2;">
							<thead id="tb_thead" class="tb_thead">
								<tr></tr>
							</thead>
							<tbody id="tb_tbody">
							</tbody>
						</table>
					</div>
				</ul>

			</div>
			<!--点击节点出现的明细表填报页面 end-->

			<!--点击节点出现数据上报页面 start-->
			<div id="SBpage" style="display: none;padding-top: 35px">
				<!-- <ul
					style="border-bottom:  1px solid #c2c2c2;height:40px;background-color: #e4e4e4">
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img
						src="/audit/images/ndbc.png" class="img_li" onclick="submitData()" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img
						src="/audit/images/jy.png" class="img_li" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
										<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img src="/audit/images/fh.png" class="img_li" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/></li>

										<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img src="/audit/images/dy.png" class="img_li" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/></li>

				</ul> -->
				<ul>
					<li style="margin-left: 20px;padding-top: 15px;">统计时间： <select
						id="showSBTime"
						style="border: #517b99 1px solid;border-radius:5px; "><option>2015-2016第一学期</option>
					</select> <span
						style="float: right;margin-right: 20px;color:red;font-size: 13px;"
						id="userState" tbztid=""></span></li>
				</ul>
				<ul
					style="border-top:  1px solid #c2c2c2;border-bottom:  1px solid #c2c2c2;height:40px;margin-top: 15px;background-color: #efefef">
					<!-- 		<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img src="/audit/images/newBuild.png" class="img_li"  /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/></li>
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img src="/audit/images/delete.png" class="img_li" /><img src="/audit/images/background.png"  style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;"/> </li> -->
					<!-- onclick=";" -->
				<!-- 	<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"
						onclick="findSelectNode();"><img
						src="/audit/images/excledr.png" class="img_li" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li> -->
				<!-- 	<li class="index_page_li" style="margin-top: 0px;cursor:pointer;"><img
						src="/audit/images/excledc.png" class="img_li" /><img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li> -->
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;">
					<img src="/audit/images/qrsb.png" class="img_li"  style="padding-top: 5px" onclick="showUpDiv()" />
					  <!--  <input type="button" value="确认上报" onclick="showUpDiv()"/> -->
					 <img
						src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
					<li class="index_page_li" style="margin-top: 0px;cursor:pointer;">
					    <img src="/audit/images/exceldc.png" class="img_li" onclick="sbdataImport()" />
						<img src="/audit/images/background.png"
						style="width:1px;height:30px;margin-left: 25px;padding-top: 9px;" />
					</li>
				</ul>
				<form id="importFileForm" class="fileForm"
					action="/audit/moeImport/importMORTable.do" method="post"
					enctype="multipart/form-data">
					<input type="file" name="file" id="importFile" accept=".xls;*.xlsx"
						style="display:none" onchange="submitImportFile()" /> <input
						type="text" name="id" value="" id="MOEid" style="display:none" />
					<input type="text" name="insert_version" value=""
						id="insert_version" style="display:none" />
				</form>
				<ul>
					<div style="width:99%;height:60%;overflow:auto;" id="sbdatatable">
						<table id="sbtable" class="table_style"
							style="border-collapse:collapse;border: 1px solid #c2c2c2;border-bottom: 1px solid #c2c2c2;">
							<thead id="tb_theadsb" class="tb_thead">
								<tr></tr>
							</thead>
							<tbody id="tb_tbodysb">
							</tbody>
						</table>
					</div>
				</ul>

			</div>

		</div>

		<div>
			<ul>
				<li class="tab_label_choose" id="lefttb" tbr="0"
					onclick="changeCss('lefttb')"
					style="background-image:url('/audit/images/button_dark.png'); cursor:pointer;" he="数据填报" >数据填报</li>
					
				<li class="tab_label_unchoose" id="leftsh" shr="1"
					onclick="changeCss('leftsh')"
					style="background-image:url('/audit/images/button_blue.png'); cursor:pointer;display: none;" he="数据审核">数据审核</li>
					
				<li class="tab_label_unchoose" id="leftsb" sbr="2"
					onclick="changeCss('leftsb')"
					style="background-image:url('/audit/images/button_blue.png'); left:46%;cursor:pointer;display: none;" he="数据上报">数据上报</li>
			</ul>
		</div>
	</div>
	
	
	  <div id="right_sb" style="display:none;width:600px;height:300px;border: 1px solid #22BE9E;margin-top: 133px;margin-left: 466px;background-color: #FDFDFD;pointer-events: auto;z-index: 100;position: absolute;">
			             <div style="height:32px;width:100%;background-color:#20B2AA">
			                	<input type="button" id="onclose" class="inputClass1" style=" cursor: pointer;" value="关闭" onclick="onclose()"/>
			             </div>
			             <div style="height:90%;width:100%;border:1px solid red">
			                 <div id="right_sb_left" style="width:60%;height:100%;float: left;">
			                         <div style="margin-top: 10px;margin-left: 5px;">帐号：<input type="text" id="username"/> </div>  
			                         <div style="margin-top: 10px;margin-left: 5px;">密码：<input type="password" id="pwd"/> </div>  
			                         <div style="margin-top: 58px;margin-left: 25px;"> <input type="button" id="confirmationReport" class="inputClass1" style=" cursor: pointer;" value="确认上报" onclick="confirmationReport();"/></div>
			                         <div style="margin-top: -25px;margin-left: 105px;"> <input type="button" id="loginyz" class="inputClass1" style=" cursor: pointer;" value="登录测试" onclick="loginyz();"/></div> 
			                         <div id="ison" style="color:green;font-size: 12;margin-left: 20px;margin-top: 10px;clear:both;display: none;" >登录成功！</div>
			                         <div id="isout" style="color:red;font-size: 12;margin-left: 20px;margin-top: 10px;clear:both;display: none;" >登录失败！</div>
			                         <div id="iss" style="color:red;font-size: 12;margin-left: 20px;margin-top: 10px;clear:both;display: none;" >上报成功！</div>
			                         <div id="ise" style="color:red;font-size: 12;margin-left: 20px;margin-top: 10px;clear:both;display: none;" >上报失败！</div>
			                 </div>
			                 <div id="right_sb_right"style="width:35%;height:100%;float: left;">
			                         <div  style="margin-top: 10px;margin-left: 5px;">校历：<select id="xl"><option>--请选择--</option></select></div> 
			                         <div  style="margin-top: 10px;margin-left: 5px;color:red;font-size: 13px;">用户登录后再选择校历，最后再次确认上报</div>     
			                 </div>
			             </div>
	   </div>
	   
	   <div id="waiting" style="display: none;"><img src="/audit/images/waiting.png"  style="margin-top: -263px;margin-left: 667px;"></div>
	   
	   <form  id="exportformSB" action="" method="post" enctype="multipart/form-data" class="fileForm"></form>
</body>
</html>
