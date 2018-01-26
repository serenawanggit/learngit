<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'Specialty_1.jsp' starting page</title>
    
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
	<style type="text/css">
	tr{
		border-left:solid 1px E8E8E8;
	}
	td{
		border-bottom:solid 1px E8E8E8;
	}
	
	</style>
  <script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
   <script type="text/javascript" src="<%=basePath%>page/xueyuan/staticPage/js/specialty.js"></script>
   
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  </head>
 
  <body>
   <div id="main">
		<div id="top">
			<div id="assessName">
				学院评估
			</div>
		</div>
		<input type="hidden" value="<%= request.getParameter("zylxId")%>" id="zylxId">
		<div class = "tableData" style="margin-top:3%;"id="assess_college" >
			<span style="margin-left:1%">学院评估年份:</span>
			<select class="syear" id ='dateYear' style="width:70px;height:25px;margin-left:0.8%" onchange="initData()"></select>
				<div id="divcontent"
				style="background-color:white;height:80%;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#F8AC59 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
						<!-- <tr style='background-color:#F8AC59;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>学院代码</td>
								<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>学院名称</td>
								<td nowrap='nowrap' style='padding:0 20px; height:30px;border:#DADADA 1px solid;' align='center'>操作</td>
							</tr> -->
							<tr
								style='background-color:#F8AC59;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学院代码</td>
								<td nowrap='nowrap' id="assessName1"
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>学院名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>整改报告</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>状态</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>审核时间</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>操作</td>
							</tr>
						</thead>
						<tbody id="tb_tbody2">
							 <%--<tr>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业代码</td>
									<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>整改报告</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业质量报告</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>
									<div style="cursor:pointer;">
										<div style="width: 24px;float: left;">
											<img onclick="changeLocation(1,1)" src="/audit/page/xueyuan/staticPage/img/assess.png" >
											</img>
										</div>
										<div style="line-height: 23px;float: left;">审核</div>
									</div>
								</td>
							</tr> 
						--%></tbody>
					</table>
				</div>
			</div>
	  </div>
	  <!-- 课程评估  style="margin-top:3%;" -->
		<div class = "tableData" style="margin-top:3%;" id="assess_course">
		<span style="margin-left:1%">课程评估年份:</span><select class="syear" id ='dateYear_course' style="width:70px;height:25px;margin-left:0.8%" onchange="initData()"></select>
			<div id="divcontent" style="background-color:white;height:80%;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#F8AC59 1px solid;" cellpadding="0" cellspacing="0" id="course">
						<thead id="tb_thead" class="tb_thead">
							<tr
								style='background-color:#F8AC59;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>课程代码</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>课程名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>整改报告</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>状态</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>审核时间</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>操作</td>
							</tr>
						</thead>
						<tbody id="course_tbody2">
						</tbody>
					</table>
				</div>
			</div>
		</div>
		
		
	<!-- 课程评估  style="margin-top:3%;" -->
	<div class = "tableData" style="margin-top:3%;" id="assess_major">
		<span style="margin-left:1%">专业评估年份:</span><select class="syear" id ='dateYear_major' style="width:70px;height:25px;margin-left:0.8%" onchange="initData()"></select>
			<div id="divcontent" style="background-color:white;height:80%;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#F8AC59 1px solid;" cellpadding="0" cellspacing="0" id="course">
						<thead id="tb_thead" class="tb_thead">
							<tr style='background-color:#F8AC59;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业代码</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>整改报告</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>状态</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>审核时间</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>操作</td>
							</tr>
						</thead>
						<tbody id="major_tbody2">
						</tbody>
					</table>
				</div>
			</div>
		</div>
		
		
	</div>
  </body>
</html>
