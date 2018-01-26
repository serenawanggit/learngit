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
<script type="text/javascript" src="<%=basePath%>page/zenith/staticPage/js/inspect3.js" ></script>
<script type="text/javascript" src="<%=basePath%>js/jquery.form.js" ></script>	
<script type="text/javascript" src="<%=basePath%>js/json2.js" ></script>	
<script type="text/javascript" src="<%=basePath%>js/jquery.form.min.js" ></script>
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
				<div id = "showName">学生毕业论文(设计)情况表</div>
				<div id="right">
					<span id ="assess_self">报告提交时间：</span>
				</div>
				<div id="left">
					—————————————————————————————————————————————————————————</div>
			</div>
			</div>
			<div id= 'tableData' style="width:100%">
			<div style="width:100%;margin-top:">
			<a href="javascript:void" id = 'submit1' onclick="submitInspect()"><img src="/audit/page/zenith/staticPage/img/save.png" style="float:right;margin-bottom:10px"/></a>
		 	<a href="javascript:void" id = "excelTable" onclick="addAssessShow()" ><img src="/audit/page/zenith/staticPage/img/addOne.png" style="margin-right:15px;float:right"/></a>	
		 	<a href="javascript:void" id = "excelTable1" onclick="deleteAssessShow()" ><img src="/audit/page/zenith/staticPage/img/deleteOne.png" style="margin-right:15px;float:right"/></a>	 
			 <a href="javascript:void" id = "excelTable" onclick="ExportWordHtml()" ><img src="/audit/images/exportHtml.png" style="margin-right:15px;float:right"/></a>		
			 <div id="showPeople" style="float:left;display:none;margin-bottom:5px;"><span style="width:150px;font-size:15px">考查专家:</span><select id ="select3" style="width:200px;height:25px;margin-left:10px;" onclick="changeDataByPeople()"><option value="0">- -请选择考查专家- -</option></select><span style='color:red;margin-left:10px;'>*不选择默认为自己的信息!</span></div>
					</div>
	 				<div id="tableDiv">
			<table style="font-size:12px;width:100%; border:#DCDBDB 1px solid;"
						cellpadding="0" cellspacing="0" id="contenttable">
						<tr ><td style='padding:0;border-top:#DCDBDB 1px solid;border-left:#DCDBDB 1px solid;border-right:#DCDBDB 1px solid;border-bottom:white 1px solid;' colspan='5'><div style="width:100%;height:300px;border:0px solid;"><div style="font-size:16px;">
    请就论文（设计）选题、论文（设计）水平、论文（设计）内容、教师指导、成绩评定、管理环节等情况进行总体评价。<br><br>
    阅读了<span id='gradeSpan1'></span><input id='grade1' style="border-top:0 solid;border-left:0 solid;border-right:0 solid;width:50px;"/>年级
    <span id="specialty1"></span>&nbsp;专业毕业论文（
    <span id='numSpan1'></span><input id='num1' style="border-top:0 solid;border-left:0 solid;border-right:0 solid;width:50px;"/>份），总体评价如下：</div>
<textarea id='assessData1' style="width:100%;height:35%;margin-top:1px;"></textarea>
<span style="font-size:16px;">存在的问题：</span><br>
<textarea id='assessProblem1' style="width:100%;height:35%;margin-top:1px;"></textarea></div></td></tr>
<tr><td style='padding:0;border-bottom:#DCDBDB 1px solid;border-left:#DCDBDB 1px solid;border-right:#DCDBDB 1px solid;border-top:white 1px solid;' colspan='5'><div style="width:100%;height:150px;border:0px solid;">
<span style="font-size:16px;">建议：</span>
<textarea id='assessSug' style="width:100%;height:87%;margin-top:1px;"></textarea></div></td></tr>
						<tr id= "assess1" style="height:25px;font-size:16px;" ><td style='padding:0;border:#DCDBDB 1px solid;'>论文审阅情况总体评价</td>
						<td style='padding:0;border:#DCDBDB 1px solid;'><input type="radio" value='90' name="assessAll1" checked/>好</td>
						<td style='padding:0;border:#DCDBDB 1px solid;'><input type="radio" value='85' name="assessAll1"/>较好</td>
						<td style='padding:0;border:#DCDBDB 1px solid;'><input type="radio" value='75' name="assessAll1"/>一般</td>
						<td style='padding:0;border:#DCDBDB 1px solid;'><div style="float:left"><input type="radio" value='65' name="assessAll1" style="line-height:24px;"/>较差</div> <div style="display:none;float:left;"><input type="button" style="height:24px;" value="+" onclick="addOne()"/><input type="button" value="-" onclick="deleteOne(1)"/></div></td></tr>
					</table>
					</div> 
			<div>    
			<span style="float:right">日期：<input style="border-top:0 solid;border-left:0 solid;border-right:0 solid;border-bottom:1 solid;"/></span>
			<span style="float:right">专家签名:<input style="border-top:0 solid;border-left:0 solid;border-right:0 solid;border-bottom:1 solid;"/></span>
			   </div>
			</div>
    </div>
      <form action="/audit/asAssessReport/downWordHtml1.do"  method="POST" id="exportWord">
   	  <input type="hidden" id="contents" name="contents" />
      <input type="hidden" id="speName" name="speName" />
    </form>
  </body>
</html>
