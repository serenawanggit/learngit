<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>高基表</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body, html{width: 100%;height: 100%;margin:0;border:none;
background-repeat:repeat-x;font-size:12px;
font-family:Arial, Helvetica, sans-serif;
background:url(<%=basePath %>/images/centerbk.png);
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
  
}
.hr1{ height:1px;border:none;border-top:1px solid #DADADA;}

</style>

<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>js/base.js"></script>	
<script type="text/javascript" src="<%=basePath %>js/report/report.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
</script>
</head>
<body>
<input type="hidden" id="pid" value="1234567"/>
<!-- 右边显示 -->
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'><span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'><span id="topLable" style='display:inline-block;height:28px;line-height:28px;'>综合报表 >> 高基表</span></span></td><td style='height:40px;' align='right'>&nbsp;</td></tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table style="font-size:12px;border:#DADADA 1px solid;width:100%;" cellpadding="0" cellspacing="0" id="rtshow">
										<thead>
											<tr style="background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;">
												<td style="width:60px;height:30px;" align="center">序号</td>
												<td style="width:200px;height:30px;" align="center">报表名称</td>
												<td style="width:300px;height:30px;" align="center">报表说明</td>
												<td style="width:100px;height:30px;" align="center">操作</td>
											</tr>
										</thead>
										<tbody>
										</tbody>
							      </table>
	</td>
	</tr>
</table>

</body>
</html>