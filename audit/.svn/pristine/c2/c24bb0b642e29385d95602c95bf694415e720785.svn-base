<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'searchAll.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  <script type="text/javascript" src="/audit/js/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="/audit/js/searchAll/searchAll.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  <script type="text/javascript">
validateLogin();
  </script>
  </head>
  
  <body>
  <div style="margin-top: 20px;">
    <span style="padding: 5px 5px 5px 5px;font-size:14px;">请输入检索值:</span><input type="text" id="searchValue" /> 
    <span style="padding: 5px 5px 5px 5px;font-size:14px;">开始年份:</span><select id="startdate"><option>2014</option><option selected="selected">2015</option><option>2016</option><option>2017</option></select>~
    <span style="padding: 5px 5px 5px 5px;font-size:14px;">结束年份:</span><select id="enddate"><option>2014</option><option>2015</option><option selected="selected">2016</option><option>2017</option></select>
    <input type="button" onclick="searchStart()" value="查询"/>
    
    <hr/>
        <div id="divdiv">
        <div style="padding: 5px 5px 5px 5px;font-size:14px;">表名：....</div>
        <div id="divcontent"
				style="background-color:white;width:100%; top: 10%;left:8%;overflow-x:auto;">
				<div style="padding: 5px 5px 5px 5px">
					<table style="font-size:12px;width:100%; border:#F8AC59 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<thead id="tb_thead" class="tb_thead">
							<tr
								style='background-color:#F8AC59;color:white;font-weight:bold;font-size:14px;'>
								<td nowrap='nowrap'
									style='padding:0 20px; height:30px;border:#DADADA 1px solid;'
									align='center' id="tdtd">暂无搜索结果</td>
							</tr>
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
				</div>
			</div>
    </div>
    <div  id="showcontentdiv">

</div>
 </div>
  </body>
</html>
