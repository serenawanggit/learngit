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
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css"
	href="page/zenith/staticPage/css/page_1.css">
<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="<%=basePath%>js/jquery.form.js" ></script>	
<script type="text/javascript" src="<%=basePath%>js/jquery.form.min.js" ></script>
 	<link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" /> 
	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
	 <link href="<%=basePath%>js/ligerui/lib/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
	<script src="<%=basePath%>js/ligerui/lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/inspect2.js" ></script>
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  </head>
  
  <body>
  <input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
<input type="hidden" id="sid" value="<%=request.getParameter("sid")%>">
    <div id = "main">
    <div id="top">
			<div>
				<span id="specialtys"></span>
			</div>
		</div>
		<div id="midle">
			<div id="mid">
				<div id = "showName">现场考查工作记录表</div>
				<div id="right">
					<span id ="assess_self">报告提交时间：</span>
				</div>
				<div id="left">
					——————————————————————————————————————————————————————————————————————————————————</div>
			</div>
			</div>
			<div id= 'tableData' style="width:100%">
				<!--<div style="width:100%">
		 <a href="javascript:void" id = 'submit1' onclick="submitInspect()"><img src="/audit/page/zenith/staticPage/img/submit.png" style="float:right;margin-bottom:10px"/></a>
			<a href="javascript:void" id = "excelTable" onclick="tableExcel()" ><img src="/audit/images/exportHtml.png" style="margin-right:15px;float:right"/></a>	 	
					</div>-->
					
					<div style="width:100%;height:30px">
					<div id="showPeople" style="width:100%;display:none;margin-bottom:5px;"><span style="width:150px;font-size:15px">考查专家:</span><select id ="select3" style="width:200px;height:25px;margin-left:10px;" onclick="changeDataByPeople()"><option value="0">- -请选择考查专家- -</option></select><span style='color:red;margin-left:10px;'>*不选择默认为自己的信息!</span></div> 
					<div style="float:left"><span style="width:150px;font-size:15px">考查活动:</span><select id ="select1" style="width:200px;height:25px;margin-left:10px;" onchange="activityChange()"></select></div> 
					<div style="float:left;margin-left:5%"><input id="select2" style="vertical-align:center;width:126px;height:18px;" /></div>
					<div > <a href="javascript:void" id = "excelTable" onclick="ExportWordHtml()" ><img src="/audit/images/exportHtml.png" style="margin-right:15px;float:right"/></a><a href="javascript:void(0)" id = 'ss' onclick="saveInspect()"><img src="/audit/page/zenith/staticPage/img/save.png" style="float:right;margin-right:15px;"/></a></div>  </div>
					<div id="tableDiv" >
			<table style="width:100%; border:#F1F1F1 1px solid;margin-top:10px;"
						cellpadding="0" cellspacing="0" id="contenttable " >
						<tr>
						<td style='padding:0 20px;width:200px;height:30px;border:#DCDBDB 1px solid;font-size:15px;background-color:#E6E6E6'
								>考查活动</td><td style='padding:0 20px;height:30px;border:#DCDBDB 1px solid;'></td>
						</tr>
						<tr>
						<td style='padding:0 20px;width:200px;height:30px;border:#DCDBDB 1px solid;font-size:15px;background-color:#E6E6E6'>时间</td>
						<td style='padding:0 20px;height:30px;border:#DCDBDB 1px solid;'></td>
						</tr>
						<tr>
						<td style='padding:0 20px;width:200px;height:30px;border:#DCDBDB 1px solid;font-size:15px;background-color:#E6E6E6'>专家姓名</td>
						<td style='padding:0 20px;height:30px;border:#DCDBDB 1px solid;'></td>
						</tr>
						<tr>
						<td style='padding:0;border:#DCDBDB 1px solid;' colspan='2'>
						<div style="width:100%;height:250px;"><textarea id="content" style="width:100%;height:100%;"></textarea></div>
						</td>
						</tr>
					</table>
					<div>填表说明：</br>1.本表作为专家在开展不同考察活动时的工作记录表,相关记录信息供专家在撰写结论及意见时参考;</br>2.根据访谈、考察实验室、内部会议等不同考察活动复制本表。</div>
					
					</div>
					<div style="width:100%;margin-top:3%">
					<!-- <a href="javascript:void" id = "excelTable" onclick="tableExcel()" ><img src="/audit/page/zenith/staticPage/img/upload.png" style="float:right;margin-bottom:10px"/></a> -->	
					
					</div>
			</div>
    </div>
    <form action="/audit/asAssessReport/downWordHtml1.do"  method="POST" id="exportWord">
    <input type="hidden" id="contents" name="contents" />
      <input type="hidden" id="speName" name="speName" />
    </form>
  </body>
</html>
