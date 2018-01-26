<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>教育部状态数据</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="/audit/js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="/audit/js/jquery.form.min.js"></script>
	<script type="text/javascript" src="/audit/js/hr/tendina.js"></script>
  	<script type="text/javascript" src="/audit/js/hr/dataImport.js"></script>
  	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
  	<link rel="stylesheet" type="text/css" href="/audit/css/hr/dataImport.css" />
  	
  </head>
  
  <body>
  
  	<div class="head">
		<div class="logoclass" onclick="javascript:window.location.href='/CHART';">
			<img src=<%=System.getProperty("logoUrl")%>></img> 
		</div>
		<div class="header-btn">
			<li class="header-btn-li" onclick="returnNav();"><img src="<%=basePath%>/img/majorEvaluation/sanhang.png"/>&nbsp;返回导航</li>
		</div>
  	</div>
  	<div class="scroll">
  	<div class="body">
	    <div class="left" style="z-index:99;">
			<div class="left_title "><ul><li>教育部状态数据</li></ul></div>
			<ul id="left_menu" class="dropdown">
				
			</ul>
		</div>
		<div class="right">
			<div class="right_title">
				<div class="right_tab_name">
					<div id="right_tab_name">请选择一项数据表进行操作</div>
					<div class="yearDiv">
						统计时间：<input type="text" id="stime"  onclick="">
					</div>
				</div>
				<div class="right_tab_button">
					<div class="right_tab_menu">操作:</div>
					<input type="button" id="addNew" class="inputClass" value="新建" onclick=""/>
					<input type="button" id="deleteData" class="inputClass" value="删除" onclick="deleteData()"/>
					<input type="button" id="copyData" class="inputClass" value="复制" onclick="copyData()"/>
					<input type="button" id="checkloadModel" mb='' class="inputClass" value="校验" onclick="checkloadModel()"/>
					<input type="button" id="editData" class="inputClass" value="编辑" onclick="editData()"/>
					<input type="button" id="subStatus" class="inputClass" value="提交" onclick="subStatus()"/>
					<input type="button" id="subup" class="inputClass" value="数据上报" onclick="subup()"/>
					<input type="button" id="saveData" class="inputClass" value="保存" onclick="saveData()"/>
					<form id="importFileForm" class="fileForm" action="/audit/hrImport/importData.do" method="post" enctype="multipart/form-data">
						<input type="button" id="importData" class="inputClass" value="导入模板" onclick="clickFile()" />
						<input type="file" name="file" id="importFile" accept="xls" style="display:none" onchange="submitImportFile()"/>
					</form>
					<form id="downloadModelForm" method="post" action="/TQCC/exportExcel/service">
						<input id="tableHTML" name="tableHTML" type="hidden">
						<input id="tableName" name="tableName" type="hidden">
					</form>
					<input type="button" id="downloadModel" class="inputClass" value="下载模板" onclick="downloadModel()"/>
					<input type="button" id="returnHistory" class="inputClass" value="返回上级" onclick="returnBack()"/>
				</div>
			</div>
				<div class="right_tab">
	            </div>
	            
		         <div id="right_sb" style="display:none;width:600px;height:300px;border: 1px solid #22BE9E;margin-top: -420px;margin-left: 100px;background-color: #FDFDFD;pointer-events: auto;z-index: 100;position: absolute;">
			             <div style="height:32px;width:100%;background-color:#20B2AA">
			                	<input type="button" id="onclose" class="inputClass1" style=" cursor: pointer;" value="关闭" onclick="onclose()"/>
			             </div>
			             <div style="height:90%;width:100%;border:1px solid red">
			                 <div id="right_sb_left" style="width:60%;height:100%;float: left;">
			                         <div style="margin-top: 10px;margin-left: 5px;">帐号：<input type="text" id="username"/> </div>  
			                         <div style="margin-top: 10px;margin-left: 5px;">密码：<input type="password" id="pwd"/> </div>  
			                         <div style="margin-top: 50px;margin-left: 5px;"> <input type="button" id="confirmationReport" class="inputClass1" style=" cursor: pointer;" value="确认上报" onclick="confirmationReport();"/></div>
			                         <div style="margin-top: 50px;margin-left: 5px;"> <input type="button" id="loginyz" class="inputClass1" style=" cursor: pointer;" value="登录测试" onclick="loginyz();"/></div> 
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
		   	</div>
			
	</div>
	
  </body>
</html>
