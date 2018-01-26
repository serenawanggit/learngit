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
   <script type="text/javascript" src="<%=basePath%>page/wangping/staticPage/js/specialty.js"></script>
   
  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
  </head>
 
  <body style="font-family:'Microsoft YaHei'">
     <input type="hidden" value="<%=request.getParameter("zylxId")%>" id='zylxId'/>
   <div id="main">
		<div id="top">
			<div>
				<span id="assessName">
			</span>
			</div>
		</div>
		<div class = "tableData" style="margin-top:3%;" >
	<span style="margin-left:1%">年份:</span>
	<select id ='dateYear' style="width:70px;height:25px;margin-left:0.8%" onchange="initData()">
	</select>
	<!-- <span style="margin-left:1%">类型:</span>
	<select id ='dateYear' style="width:70px;height:25px;margin-left:0.8%" onchange="initData()">
		<option value="1" selected="selected">网评</option>
		<option value="2">考察</option>
	</select> -->
				<div id="divcontent"
				style="background-color:white;height:80%;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div class="loding" id="lodingbox"
					style="width: 15%;margin: auto;z-index: 10;position: absolute;left: 42%;display:none">
					<div style="width: 64px;height: 64px;margin: 0 auto;">
						<img src="2.gif" />
					</div>
					<div style="text-align: center;">正在为您加载数据...</div>
				</div>
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#F8AC59 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<tr
								style='background-color:#F8AC59;color:white;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>序号</td>
								<td nowrap='nowrap' id="assessName1"
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>网评时间</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>现场考察时间</td>
								<td nowrap='nowrapd'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>网评是否已评</td>
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
	</div>
	
	
  </body>
</html>
