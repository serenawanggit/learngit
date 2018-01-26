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
	<script type="text/javascript" src="/audit/page/zenith/staticPage/newMain/js/rank.js"></script>

  </head>
 
  <body>
  <div id = "tops" style="margin-top:5px;">
  <span>年份：</span><select id ="dateYear" style="border-radius: 3px;height:28px;width:100px;box-shadow: none;outline:none;"onchange="init()"></select>
  <span style="margin-left:2%">评估体系：</span><select id = "dataOrg" style="border-radius: 3px;height:28px;width:100px;box-shadow: none;outline:none" onchange="getSelectToChiled()">
   </select>
 <!--  <option value="6">工科</option>
  <option value="7">非工科</option> -->
    <span style="margin-left:2%">专业体系：</span><select id = "zbSelect" style="border-radius: 3px;height:28px;width:100px;box-shadow: none;outline:none" onchange="init()">
  </select>
  </div>
<div style="margin-left:25%;">
		<img id="upload_img" style="display: none;"
			src="/CHART/images/dengdai_lv_se.gif"></img>
	</div>
	  <hr>
  <table width="800px" style="font-size:12px;margin-top:10px; border:#F8AC59 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<!--<tr
								style='background-color:#DCDBDB;color:#000;font-weight:bold;font-size:12px;'>
								 <td nowrap='nowrap'
									style='padding:0 20px;width:400px;height:30px;border:#D1D1D1 1px solid;'
									align='center' colspan='2'>排名序号</td>
								<td nowrap='nowrap'
									style='padding:0 20px; width:350px;height:30px;border:#D1D1D1 1px solid;'
									align='center'>专业</td>
								<td nowrap='nowrap'
									style='padding:0 20px;height:30px;border:#D1D1D1 1px solid;'
									align='center'>分数</td> 
							</tr>-->
						</thead>
						<tbody id="tb_tbody2">
						</tbody>
					</table>
					<div id = "mainView" style="width:98%">
					
					</div>
					
  </body>
</html>
