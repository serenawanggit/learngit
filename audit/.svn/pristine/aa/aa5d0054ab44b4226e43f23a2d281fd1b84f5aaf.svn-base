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
	href="page/zenith/staticPage/css/page_0.css">
<script type="text/javascript" src="js/jquery.js" ></script>
<script type="text/javascript" src="js/jquery.form.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>	
<script type="text/javascript" src="/audit/page/guanliyuan/staticPage/js/jinDu.js" ></script>
	<script type="text/javascript" src="/audit/commonjs/common1.js"></script>	




<style type="text/css">
	li:hover
		{ 
			background-color:#2f93fd;
		}
</style>
</head>

<body>
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
<div id="midle1" style="height: 47px; width:100%; font-family: "微软雅黑";" >
			<div style="margin-top:10px;">
				 <div style="float:left;margin-left:27px;position: relative;">
					<strong>学院:</strong>
					<input type="text" style="height: 32px;" id="oName" placeholder="请选择学院"/>
					<a href="javascript:xiala(1)"><img src="/audit/page/guanliyuan/staticPage/img/xiala.png" style="float:right" /></a>
					<div id="1" name="xialaBox1" style="height:230px;border:1px solid #eeeeee;width: 172px;position: absolute;left: 40.5px;z-index:100;display:none;overflow:auto;">
						<ul style="list-style: none;background: white;" id='ul1'>
						<!-- 	<li style="padding:5px" onclick="choose(this)">药学院</li> -->
						</ul>
					</div>
				</div> 
				
				
				
				<div style="float:left;margin-left:27px;position: relative;">
					<strong>专业:</strong>
					<input type="text" style="height: 32px;" id="sp_name" placeholder="请选择专业"/>
					<a href="javascript:xiala(2)"><img src="/audit/page/guanliyuan/staticPage/img/xiala.png" style="float:right" /></a>
					
					<!-- 下拉显示框 -->
					<div id="2" name="xialaBox" style="height:230px;border:1px solid #eeeeee;width: 172px;position: absolute;left: 40.5px;z-index:100;display:none;overflow:auto;">
						<ul style="list-style: none;background: white;" id='ul2'>
							<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
						</ul>
					</div>
				</div>
					<a href="javascript:init()"><img title="点击搜索"  src="/audit/page/guanliyuan/staticPage/img/search.png" style="float:left" /></a>
				
			</div>
		</div>
	<div style='margin: 10px 100px 0px 10px; height: 70%;'>
   		<table id="table" class="table" border="1" cellpadding="2" cellspacing="0.5" style="margin: 0 auto;" width="1000" bordercolor="#DADADA">
   			<thead>
   				<tr style="background:#DCDBDB" >
	   				<td align="center">学院名称</td>  
	   				<td align="center">专业名称</td>  
					<td align="center">整改报告</td>   				
					<td align="center">专业质量报告</td>   				
					<td align="center">专家网评</td>   				
					<td align="center">现场考查</td>   
					<td align="center">整改计划</td>  				
   				</tr>
   			</thead>
   		</table>
	</div>
</body>
</html>
