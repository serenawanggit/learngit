<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title></title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="<%=basePath%>js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/newMain/js/analysis.js"></script>
  </head>
  
  <body>
  <input id = "aid" type="hidden" value="<%=request.getParameter("aid")%>">
  <div style="margin-bottom:10px;margin-top:2%;">
  <span style='font-size:14px'>部门:</span><select id="orgSelect" style="margin-left:5px;" onchange='getContent()'></select>
    <span style="margin-left:10px;font-size:14px">年份:</span><select id="dateSelect" style="margin-left:5px;" onchange='getContent()'></select>
  </div>
    <hr>
    <table style="font-size:12px;width:100%; border:#D1D1D1 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<!-- <tr
								style='background-color:#DCDBDB;color:#000;font-weight:bold;font-size:12px;'>
								<td nowrap='nowrap'
									style='padding:0 20px;width:400px;height:30px;border:#D1D1D1 1px solid;'
									align='center' colspan='2'></td>
								<td nowrap='nowrap'
									style='padding:0 20px; width:350px;height:30px;border:#D1D1D1 1px solid;'
									align='center'>达成情况(包括值得肯定之处、需要改进之处、并提出意见和建议)</td>
								<td nowrap='nowrap'
									style='padding:0 20px;height:30px;border:#D1D1D1 1px solid;'
									align='center'>打分</td>
							</tr> -->
						</thead>
						<tbody id="tb_tbody2">
							<%-- <tr>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业名称</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'>专业代码</td>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center'><img src="<%=basePath%>images/zypg/delete.png" style="cursor:pointer;"></img></td>
							</tr> --%>
						</tbody>
					</table>
					<span id = "remark_tab" style='margin-top:5%;color:red'></span>
				
		<div style=""></div>	
  </body>
</html>
