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
<title>数据查询</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<style type="text/css">
body, html{width: 100%;height: 100%;margin:0;border:none;
background-repeat:repeat-x;font-size:12px;
font-family:Arial, Helvetica, sans-serif;
background:url(<%=basePath %>/images/centerbk.png);
   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
   -moz-background-size:100% 100%;
}
</style>

<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
    <script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
    <script type="text/javascript">
    validateLogin();
    </script>
</head>
<body >

<!-- 右边显示 -->
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'>
		<span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
			<span style='display:inline-block;height:28px;line-height:28px;'>
			数据查询
			</span>
		</span>
		</td>
		<td style='height:40px;' align='right'>&nbsp;</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			
			<tr>
				<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;" colspan="2" align="left">
					<table style="width:100%;" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td>
									<input style="width:200px;height:24px;line-height:24px;vertical-align:middle;margin-left:10px;border:#DADADA 1px solid;padding-left:5px;" id="plannameinput" type="text">
									<a href="#" onclick="plcp=1;plmodel='';queryuploadplan('2');">
										<img src="../../images/searchbtn.png" style="vertical-align:middle;height:24px;line-height:24px;border:0px;">
									</a>
								</td>
								<td align="right">
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:390px;width: 100%'>
				<!-- 内容 -->
					<div style="float:left;height:100%;width:100%;border: 0px #DADADA solid;">
						<table id="rwTable" style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">选择</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>任务标题</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>任务发布时间</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>任务截止时间</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>状态</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody>
									<tr style='background-color:#FFF;color:#333333;font-size:12px;'>
										<!-- <td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">
											<input type="checkbox" name="ckBut"/>
										</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>2014年度审核评估数据采集工作</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>2014-09-01</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>2015-09-01</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>正常</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
											<a href="#" onclick="editedudptplanthml(this);" value="1">
											<img src="../../images/bj_icon.png" style="vertical-align:middle;" border="0"></a>
											<a href="#" onclick="deleteuploadplan(this);" value="10" style="margin-left: 10px;">
											<img src="../../images/sc_icon.png" style="vertical-align:middle;border:0px;"></a>
										</td> -->
									</tr>
									<tr style='background-color:#F5F5F5;color:#333333;font-size:12px;'>
										<!-- <td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">
											<input type="checkbox" name="ckBut"/>
										</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>2014年度审核评估数据采集工作</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>2014-09-01</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>2015-09-01</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>正常</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
											<a href="#" onclick="editedudptplanthml(this);" value="1">
											<img src="../../images/bj_icon.png" style="vertical-align:middle;" border="0"></a>
											<a href="#" onclick="deleteuploadplan(this);" value="10" style="margin-left: 10px;">
											<img src="../../images/sc_icon.png" style="vertical-align:middle;border:0px;"></a>
										</td> -->
									</tr>
								</tbody>
						</table>
						
					</div>
					<table style='width:100%;' cellpadding='0'>
						<tbody>
							<tr>
								<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								<span style='display:inline-block;margin-right:40px;'>
								<img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='../../images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='../../images/pgicon-first.png;'"
										onmouseout="this.src='../../images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='../../images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-pre.png;'"
										onmouseout="this.src='../../images/pgicon-pre_press.png;'">
								<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
								<img value='3_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
										src='../../images/pgicon-next_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-next.png;'"
										onmouseout="this.src='../../images/pgicon-next_press.png;'">
								<input id='pagenotext' style='width:30px;margin-left:5px;height:20px;
								line-height:20px;vertical-align:middle;text-align:center;border:#999999 1px solid;' type='text'>
								<img value='4_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
										src='../../images/pgicon-last_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='../../images/pgicon-last.png'"
										onmouseout="this.src='../../images/pgicon-last_press.png'">
								</span>
								</td>
							</tr>
						</tbody>
					</table>
					
				</td>
			</tr>
		</table>
		</td>
	</tr>
</table>

</body>
</html>