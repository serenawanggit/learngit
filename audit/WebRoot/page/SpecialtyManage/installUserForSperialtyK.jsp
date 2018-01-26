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

<title>My JSP 'installUserForSperialty.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<link rel="stylesheet"
	href="<%=basePath%>/css/SpecialtyManage/installUserForSperialty.css"
	type="text/css"></link>
<script src="<%=basePath%>js/ligerui/lib/jquery/jquery-1.9.0.min.js"
	type="text/javascript"></script>
<link
	href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css"
	rel="stylesheet" type="text/css" />
<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/base.js"
	type="text/javascript"></script>
<link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Gray/css/all.css"
	rel="stylesheet" type="text/css">
<link rel="stylesheet"
	href="<%=basePath%>/css/SpecialtyManage/installDataAndSpecialty.css"
	type="text/css"></link>
<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/ligerui.all.js"
	type="text/javascript"></script>
<script type="text/javascript"
	src="<%=basePath%>js/ligerui/lib/json2.js"></script>
<script type="text/javascript"
	src="<%=basePath%>js/SpecialtyManage/installUserForSperialtyK.js"></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	
</head>

<body>
	<!-- 标题 -->
	<div class="top_title_zy">
		<p
			style="margin-top: 7px;margin-left: 12px;color:white;font-family: 'Microsoft YaHei';font-size: 15px" id="top_title_zy">评估人员设置</p>
	</div>
	<!-- 条件搜索 -->
	<div style="height:20%;position: relative;">
			<ul id="index">
				<li style="float:left;line-height: 48px;margin-left: 2%;width: 6%;"><span style="font-size: 14px;margin-left: 2%;" id="zhuanyeText">课程名称  :</span></li>
				<li style="float:left"><input type="text" style="width:200px;height:31.5px;margin-top:10px" id="searchvalue"/></li>
				<li style="float:left"><a href="javascript:void(0)">
					<img src="/audit/images/zypg/sousuo.png" style="margin-top:10px;height: 32px;" onclick="searchstart()"></a>
				</li>
			</ul>
			<ul id="indexGG" style="display:none">
				<li style="float:left;line-height: 48px;margin-left: 2%;width: 6%;"><span style="font-size: 14px;margin-left: 2%;" id="zhuanyeText">机构查询  :</span></li>
				<li style="float:left"><input type="text" style="width:200px;height:31.5px;margin-top:10px" id="searchvalue3"/></li>
				<li style="float:left"><a href="javascript:void(0)">
					<img src="/audit/images/zypg/sousuo.png" style="margin-top:10px;height: 32px;" onclick="searchstart3()"></a>
				</li>
			</ul>
			<ul id="index2" style="display:none">
				<li style="float:left;line-height: 48px;margin-left: 2%;width: 6%;"><span style="font-size: 14px;margin-left: 2%;" id="zhuanyeText">姓名查询  :</span></li>
				<li style="float:left"><input type="text" style="width:200px;height:31.5px;margin-top:10px" id="searchvalue2"/></li>
				<li style="float:left"><a href="javascript:void(0)">
					<img src="/audit/images/zypg/sousuo.png" style="margin-top:10px;height: 32px;" onclick="searchstart2()"></a>
				</li>
			</ul>
			
			<a href="javascript:void(0)"
			onclick="blackIndex()" style="display: none;float: right; position: absolute;top: 10px;right: 53px;"
			id="backBtn"> <img src="/audit/images/zypg/goback.png"/> </a>
			
			<a href="javascript:void(0)"
			onclick="saveDate()" style="display: none;float: right; position: absolute;bottom: 20px;right: 53px;"
			id="saveBtn"> <img src="/audit/images/zypg/save.png"/> </a>
			
			
			<div style="display:none;position: absolute;bottom: 24px;right: 290px;" id="Type">
				评估人查找：<select onchange="findUserAdded(this.value)" id="typeUser" class="selector">
					<option value="1">课程自评人</option>
					<option value="2">课程审核人</option>
					<option value="3">网评专家</option>
					<option value="4">现场考察专家</option>
					<option value="5">现场考察组长</option>
				</select>
			</div>
	</div>
	<!--table 专业列表  -->
	<div class="down_zy" id="datatable" style="width:98%"></div>

	<!--table 添加人  -->
	<div class="down_zy" id="datetable2" style="width:97%;display: none">
            <div class="down_zy_left" style="text-align: center;">
			<div id="divcontent"
				style="background-color:white;height:99%;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#23C6C8 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<tr
								style='background-color:#23C6C8;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>所属机构</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>姓名</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>操作</td>
							</tr>
						</thead>
						<tbody id="tb_tbody1"><%--
							<tr>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>姓名</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>姓名</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'><img id="add" src="<%=basePath%>images/zypg/add.png" style="cursor:pointer;margin-right: 5px"></img><img id="yadd" src="<%=basePath%>images/zypg/yadd.png" style="cursor:pointer;display: none;"></img></td>
							</tr>
						--%></tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="down_zy_right">
			<div id="divcontent"
				style="background-color:white;height:80%;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#F8AC59 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<tr
								style='background-color:#F8AC59;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>姓名</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>操作</td>
							</tr>
						</thead>
						<tbody id="tb_tbody2">
							<%--<tr>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>名字</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'><img src="<%=basePath%>images/zypg/delete.png" style="cursor:pointer;"></img></td>
							</tr>
						--%></tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
