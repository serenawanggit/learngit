<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
	<link rel="stylesheet" href="<%=basePath %>/css/makeupData.css" type="text/css"></link>
    <script type="text/javascript" src="<%=basePath %>/js/json2.js"></script>
    <script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/checkMakeUpData.js"></script>
    <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
    
    <script type="text/javascript" src="<%=basePath %>/js/common/public.js"></script>
    <style type="text/css">
			body, html{width: 100%;height: 98%;margin:0;border:none;
			background-repeat:repeat-x;font-size:12px;
			font-family:Arial, Helvetica, sans-serif;
			background:url(<%=basePath %>/images/centerbk.png);
			   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
			   -moz-background-size:100% 100%;
			}
			.hr1{ height:1px;border:none;border-top:1px solid #DADADA;}
			.tb_thead tr td{white-space: nowrap;}
			
    </style>
  </head>
  <body>
     <table style='width:98%;margin:12px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
			<tr>
				  <td style='height:40px;' align='left'>
				    <span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
				      <span  style='display:inline-block;height:28px;line-height:28px;'>补录数据审核 >>&nbsp;&nbsp;<span id="academeName"></span> 
				      </span>
				    </span>
				    <span style="padding-left: 25px;font-weight: bold;font-family: 宋体; margin-top: 2px">补录&nbsp;<span id="syear"></span>&nbsp;数据</span>
				    </td>
				   <td style='height:40px;' align='right'>
				      <span style='color:#FFF;display:inline-block;width:75px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
				      <span  style='display:inline-block;height:28px;line-height:28px;' onclick="notPass()">未通过</span>
				      </span>
				    </span>
				    
				     <span style='color:#FFF;display:inline-block;width:75px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
				      <span  style='display:inline-block;height:28px;line-height:28px;' onclick="approvedBy()" >审核通过<input type="text" value="" id="passState" style="display: none;"/></span>
				      </span>
				    </span>
				   </td>
			</tr>
		<tr><td colspan="2"><hr class="hr1"></td></tr>
	</table>
	<div class="maindiv">
	     <table style="font-size:12px;width:100%; border:#DADADA 1px solid;" cellpadding="0" cellspacing="0" id="shztsjbshow">
				<thead>
					<tr style="background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;height:10px;">
						<td >工号</td>
						<td >姓名</td>
						<td >学院名</td>
						<td >专业名称</td>
						<td ><input type="checkbox" id="checkbox" onclick="onchecked()"/></td>
					</tr>
				</thead>
				<tbody id="dataTable"> 
				</tbody>
		 </table>
	</div>
	
	<table style='width:100%; cellpadding='0' id="pageTb">
		<tbody>
			<tr>
				<td align='left'>
				<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
				</td>
				<td align='right'>
				<span style='display:inline-block;margin-right:40px;'>
				
				<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
					src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
						onmouseover="this.src='/audit/images/pgicon-first.png;'"
						onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
				<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
					src='/audit/images/pgicon-pre_press.png'
						style='vertical-align:middle;margin-left:5px;'
						onmouseover="this.src='/audit/images/pgicon-pre.png;'"
						onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
				<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/1页</span>
				<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
						src='/audit/images/pgicon-next_press.png'
						style='vertical-align:middle;margin-left:5px;'
						onmouseover="this.src='/audit/images/pgicon-next.png;'"
						onmouseout="this.src='/audit/images/pgicon-next_press.png;'">
				<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
				line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
				<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
						src='/audit/images/pgicon-last_press.png'
						style='vertical-align:middle;margin-left:5px;'
						onmouseover="this.src='/audit/images/pgicon-last.png'"
						onmouseout="this.src='/audit/images/pgicon-last_press.png'">
				</span>
				</td>
			</tr>
		</tbody>
	</table>
  </body>
</html>
