<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>My JSP 'mains_data.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css"> /audit/page/zenith/staticPage/mians_data.jsp
	-->
	<script src="${pageContext.request.contextPath }/js/ligerui/lib/jquery/jquery-1.9.0.min.js" type="text/javascript"></script>
    <link href="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
    <script src="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/js/plugins/ligerDateEditor.js" type="text/javascript"></script>

	<script src="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/js/core/base.js" type="text/javascript"></script>
	<link href="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
	<script src="${pageContext.request.contextPath }/js/ligerui/lib/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/js/ligerui/lib/json2.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath }/page/zenith/staticPage/js/mains_data.js"></script>

	
	<style type="text/css">
		.typeSelect{
			border: solid 1px #C3C3C3;
			appearance:none;
			-moz-appearance:none;
			-webkit-appearance:none;
			background: url("/audit/page/zenith/staticPage/img/select_button.png") no-repeat scroll right center transparent;
			padding-right: 14px;
			width:200px;
			height:32px;
			cursor:pointer;
		}
		.dateSelect{
			border: solid 1px #C3C3C3;
			appearance:none;
			-moz-appearance:none;
			-webkit-appearance:none;
			background: url("/audit/page/zenith/staticPage/img/button_time.jpg") no-repeat scroll right center transparent;
			padding-right: 14px;
			width:200px;
			height:32px;
			cursor:pointer;
		}
		.checkbox {
			 width: 30px;
			 height: 30px;
			 padding: 0 5px 0 0;
			 display: block;
			 clear: left;
			 float: left;
			cursor:pointer;
		}
		#data tr{
			height:40px;
			border: solid 1px #D2D2D2;
		}
		#data th{
			text-align:center;
			font-weight:bold;
		}
		#data tr{
			text-align:center;
		}
	</style>
	
  </head>
  
  <body style="font-size:13px;">
    <div style="background-color:#56A4B9;width:100%;height:50px;border:1px solid #56A4B9;margin-top:12px">
    	<div style="width:100%;margin-top:8px;"><center><font style="font-weight:bold;font-size:23px;color:#fff">数据上报管理</font></center></div>
    </div>
    <center>
    	<div id="main" style="width:94%;margin-top:30px">
	    	<div id="check">
	    		<table width="100%" cellspacing="0">
	    			<tr>
	    				<td width="113px"><font style="font-size:13px;">选择数据分类：</font> </td>
	    				<td width="205px"><select class="typeSelect" id="parentType"></select></td>
	    				<td width="255px"><select class="typeSelect" id="childType"></select></td>
	    				<td width="82px"><font style="font-size:13px;">统计时间：</font></td>
	    				<td width="255px">
	    					<select class="dateSelect" id="txt2"><option>2014/09/30</option><option>2015/09/30</option><option selected="selected">2016/09/30</option><option>2017/09/30</option><option>2018/09/30</option></select>
	    					<!-- <input type="text" id="txt2"/> -->
  						</td>
	    				<td width="113px"><font style="font-size:13px;">选择数据表名：</font></td>
	    				<td style="width:200px"><input type="text" id="tableName" style="border: solid 1px #C3C3C3;width:200px;height:32px"/>
	    				<td><img id="lookData" style="cursor:pointer;" src="/audit/page/guanliyuan/staticPage/img/search.png"></td>
	    			</tr>
	    		</table>
	    		
	    		<div style="width:100%;margin-top:15px;border: solid 1px #C3C3C3;border-top:0px;">
	    			<div style="border: solid 2px #69B5CB;width:100%;height:0px"></div>
	    			<div style="width:100%;height:45px;margin-top:10px;margin-left:8px;" >
	    				<table align="left">
	    					<tr>
	    						<td width="40px"><div id="aDiv" style="border: solid 1px #C3C3C3;width:28px;height:20px;padding-top:8px;"><div id="aDiv_2" style="width:12px;height:14px;margin-left:7px;"></div></div></td>
	    						<td width="50px"><font style="font-size:13px;font-family:'Times New Roman'">全选</font> </td>
	    						<td width="40px"><div id="bDiv" style="border: solid 1px #C3C3C3;width:28px;height:20px;padding-top:8px"><div id="bDiv_2" style="width:12px;height:14px;margin-left:7px;"></div></div></td>
	    						<td width="50px"><font style="font-size:13px;font-family:'Times New Roman'">教学</font></td>
	    						<td width="40px"><div id="cDiv" style="border: solid 1px #C3C3C3;width:28px;height:20px;padding-top:8px"><div id="cDiv_2" style="width:12px;height:14px;margin-left:7px;"></div></div></td>
	    						<td width="50px"><font style="font-size:13px;font-family:'Times New Roman'">党政</font></td>
	    					</tr>
	    				</table>
	    			</div>
	    		</div>
	    		
	    		<div style="margin-top:20px;text-align:center;" id="data">
	    			<table id="data_tab" width="100%" cellpadding="0px" style="font-size:13px;border:solid 1px #D2D2D2;border-collapse:collapse;" cellspacing="0px" align="center">
    					<tr style="background-color:#DCDBDB">
	    					<th>序号</th>
	    					<th>数据表名</th>
	    					<th>填报人</th>
	    					<th>填报状态</th>
	    					<th>复核人</th>
	    					<th>复核状态</th>
	    					<th>校级人</th>
	    					<th>审核状态</th>
	    				</tr>	
	    				<tbody id="data_tbody">
	    				</tbody>
	    			</table>
	    		</div>
	    		
	    	</div>
    	</div>
    </center>
  </body>
</html>
