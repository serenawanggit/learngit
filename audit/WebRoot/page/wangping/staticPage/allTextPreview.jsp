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
<link rel="stylesheet" type="text/css" href="page/zenith/staticPage/css/page_num.css">
<link rel="stylesheet" type="text/css" href="page/zenith/staticPage/css/page_1.css">
<script type="text/javascript" src="<%=basePath%>js/jquery-1.9.1.min.js"></script>
<!--编辑器基本配置-->
<script type="text/javascript" charset="UTF-8" src="<%=basePath%>ueditor/utf8-jsp/ueditor.config.js"></script>
<!--编辑器完整代码 -->
<script type="text/javascript" charset="UTF-8" src="<%=basePath%>ueditor/utf8-jsp/ueditor.all.js"> </script>
<script type="text/javascript" src="<%=basePath%>js/jquery.form.js" ></script>	
<script type="text/javascript" src="<%=basePath%>js/jquery.form.min.js" ></script>

<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Aqua/css/ligerui-all.css" rel="stylesheet" type="text/css" />
<link href="/audit/page/zenith/staticPage/js/ligerUI/skins/Gray/css/all.css" rel="stylesheet" type="text/css">
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/base.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/plugins/ligerDialog.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/core/inject.js" type="text/javascript"></script>
<script src="/audit/page/zenith/staticPage/js/ligerUI/js/ligerui.all.js" type="text/javascript"></script>
<script type="text/javascript" src="js/latool.js"></script>

<link rel="stylesheet" type="text/css" href="<%=basePath%>ueditor/utf8-jsp/themes/default/css/ueditor.css" />
	<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	
	<script type="text/javascript" src="/audit/page/wangping/staticPage/js/allTextPreview.js"></script>

	<style type="text/css">
		.div_tab table{border-collapse:collapse;border:none;}
		.div_tab table td{border:solid #BDBCBC 1px;height:40px;line-height:25px;font-size:15px}
		.div_tab table th{border:solid #BDBCBC 1px;height:40px;line-height:25px;font-size:15px;text-align:center}
	</style>
	
	<style type="text/css">
		.schoolData-div table{border-collapse:collapse;border:none;}
		.schoolData-div table td{border:solid #804040 1px;line-height:25px;font-size:15px;text-align:center;height:40px}
	
		#buttons *{vertical-align:middle;}
		/*如果上边的不兼容火狐等，可以把下面这句也加上！
		#buttons *{vertical-align:middle;}*/
		
	</style>
	
</head>

<body>
	<div id="main" style="Z-index:1">
		<div id="top">
			<div><span id="specialty_name"></span></div>
		</div>
		<div id="midle">
			<div id="showContext">
				<div> 
					<font style="color:#C73D3C;font-size:25px;font-weight:bold;">一、教学规范</font> 
					<div style="width:100%;height:0px;border:1px solid #C73D3C;"></div>
					<br>
					<div id="buttons">
						&nbsp;&nbsp;&nbsp;<img src="/audit/page/wangping/staticPage/img/files.png">&nbsp;&nbsp;<font style="font-weight:bold;font-size:16px;">教学规范详情</font><br>
					
						<table style="width:100%">
							<tr>
								<td style="width:5%"></td>
								<td width="16%" height="50px"><img src="/audit/page/wangping/staticPage/img/file.png">&nbsp;&nbsp;<font style="font-size:14px;font-weight:bold">1.制度建设</font></td>
								<td align="right"><input style="border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:40px;width:100%" readonly="readonly" value="有无意见"> </td>
							</tr>
							<tr>
								<td style="width:5%"></td>
								<td width="16%" height="50px"><img src="/audit/page/wangping/staticPage/img/file.png">&nbsp;&nbsp;<font style="font-size:14px;font-weight:bold">2.教学工作管理效率</font></td>
								<td align="right"><input style="border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:40px;width:100%" readonly="readonly" value="有无意见"> </td>
							</tr>
							<tr>
								<td style="width:5%"></td>
								<td width="16%" height="50px"><img src="/audit/page/wangping/staticPage/img/file.png">&nbsp;&nbsp;<font style="font-size:14px;font-weight:bold">3.教学经费管理与使用</font></td>
								<td align="right"><input style="border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:40px;width:100%" readonly="readonly" value="有无意见"> </td>
							</tr>
						</table>
					</div>
					
				</div>
				
				<div style="padding-top:20px"> 
					<font style="color:#C73D3C;font-size:25px;font-weight:bold;">二、学科专业建设与教学改革</font> 
					<div style="width:100%;height:0px;border:1px solid #C73D3C;"></div>
					<br>
					<input style="border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:60px;width:100%;font-size:15px" readonly="readonly" value="审核意见">
				</div>
				
				<div style="padding-top:20px"> 
					<font style="color:#C73D3C;font-size:25px;font-weight:bold;">三、教学管理</font> 
					<div style="width:100%;height:0px;border:1px solid #C73D3C;"></div>
					<br>
					<input style="border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:60px;width:100%;font-size:15px" readonly="readonly" value="审核意见">
				</div>
				
				<div style="padding-top:20px;"> 
					<font style="color:#C73D3C;font-size:25px;font-weight:bold;">四、教学学风</font> 
					<div style="width:100%;height:0px;border:1px solid #C73D3C;"></div>
					<br>
					<input style="border:#B9B9B9 solid 1px;color:#B9B9B9;font-weight:bold;height:60px;width:100%;font-size:15px" readonly="readonly" value="审核意见">
				</div>
			</div>
			
			<div style="padding-top:20px"> 
					<div style="border:#B9B9B9 solid 1px;width:100%;height:50px;background-color:#DCDBDB;text-align:center;line-height:50px;"><font style="text-align:center;color:#313131;font-size:15px;font-weight:bold;">总意见</font> </div>
					<textarea id="wpContext" style="border:#B9B9B9 solid 1px;height:150px;width:100%;"></textarea>
				</div>
					
				<div id="midle3" style="width:100%;margin-top: 10px;">
					<div style="width:100%;;margin-top: 5px;" id="btn">
						<!-- <div style="width:100px;float:right"><a href="javascript:tijiao()"><img style="float:right;margin-top: 9px;margin-right: 9px;" src='/audit/page/wangping/staticPage/img/submit.png'></img></a></div> -->
						<div style="width:100%"><a href="javascript:void(0)" onclick="save1()"><img style="float:right;margin-top: 9px;margin-right: 9px;" src='/audit/page/wangping/staticPage/img/baocun.png'/></a></div>
					</div>
				</div>
			
			<div style="height:80px"></div>
		 
	</div>
</body>
<script type="text/javascript">  
	UEDITOR_CONFIG.UEDITOR_HOME_URL = '/audit/page/zenith/staticPage/js/utf8-jsp/';
 //一定要用这句话，否则你需要去ueditor.config.js修改路径的配置信息  
	UE.getEditor('myEditor');  
</script>
</html>
