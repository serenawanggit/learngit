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
<title>状态数据</title>
<link rel="stylesheet" href="<%=basePath %>/css/zTreeStyle/zTreeStyle.css" type="text/css">
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
<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.core-3.5.js"></script><%--

<script type="text/javascript" src="<%=basePath %>/js/ztree/jquery.ztree.excheck-3.5.js"></script>

--%>

<script type="text/javascript" src="<%=basePath %>/js/planview/viewplan.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/statusData.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body >
<!-- 右边显示 -->
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'>
		<span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
			<span style='display:inline-block;height:28px;line-height:28px;'>
			自我评估 >> 状态数据
			</span>
		</span>
		</td>
		<td style='height:40px;' align='right'>&nbsp;</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			<tr>
				<td colspan="2"><hr class='hr1'></td>
			</tr>
			<tr>
				<td colspan="2" style='height:452px;width: 100%'>
				<!-- 左边 -->
					<div style="float:left;height:100%;width:26%;border: 1px #DADADA solid;">
						<div style="height:38px;width:99.8%;border: 1px #DADADA solid;background-color: #DBE0E6;">
							<span style="margin-left:15px;line-height:38px;font-size: 12px;font-weight: bold;">状态数据</span>
						</div>
						<div style="height:90%;width:100%;border: 0px red solid;overflow:auto;">
							<ul id="treeDemo" class="ztree"></ul>
						</div>
					</div>
				<!-- 中间 -->	
				    
					<div style="float:left;margin-left:10px;height:100%;width:45%;border: 1px #DADADA solid;">
					     <div style="height:38px;width:99.8%;border: 1px #DADADA solid;background-color: #DBE0E6;">
				            <span class="f_l" style="margin-left:15px;line-height:38px;font-size: 12px;font-weight: bold;">
				                          评估方案设计
							</span>
				         </div>
					     <div style='height: 30%;margin-top: 10px;padding: 5px;overflow-y:auto;font-size: 12px;' id="pgfasj">
					     
					     </div>
						<div style="height:38px;width:99.8%;border: 1px #DADADA solid;background-color: #DBE0E6;">
							<span class="f_l" style="margin-left:15px;line-height:38px;font-size: 12px;font-weight: bold;">
							观测指标
							</span>
							<span class="f_r" style="line-height:48px;margin-top: 8px;margin-right: 10px;">
								<select id="syear2" name="syear2" class="select_tips01" onchange="onChangeYear();">
					            <option value="2014" selected="selected">2014</option>
					            <option value="2013">2013</option>
					            <option value="2012">2012</option>
					            <option value="2011">2011</option>
					            </select>
				            </span>
				            <span class="f_r" style="line-height:38px;margin-right: 10px;">
								-
				            </span>
				            <span class="f_r" style="line-height:48px;margin-top: 8px;margin-right: 10px;">
								<select id="syear1" name="syear1" class="select_tips01" onchange="onChangeYear();">
					            <option value="2014">2014</option>
					            <option value="2013">2013</option>
					            <option value="2012" selected="selected">2012</option>
					            <option value="2011">2011</option>
					            </select>
				            </span>
							<span class="f_r font_style" id="datetxt" style="line-height:38px;">
							时间：
							</span>
						</div>
						<div style='height: 50%;margin-top: 10px;padding: 5px; '>
							<div style='height: 390px;overflow:auto;width: 100%;'>
							
							<table id="zbTable" style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap='nowrap' style='width:220px;height:30px;padding-left: 5px;' align="left">指标</td>
										<td nowrap="nowrap" style='width:85px;height:30px;' align='center'>2012</td>
										<td nowrap="nowrap" style='width:85px;height:30px;' align='center'>2013</td>
										<td nowrap="nowrap" style='width:85px;height:30px;' align='center'>2014</td>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
							</div>
						</div>
					</div>
					
				<!-- 右边 -->	
					<div style="float:left;margin-left:10px;height:100%;width:26%;border: 1px #DADADA solid;">
						<div style="height:38px;width:99.8%;border: 1px #DADADA solid;background-color: #DBE0E6;">
							<span style="margin-left:15px;line-height:38px;font-size: 12px;font-weight: bold;">支撑材料</span>
						</div>
						<div style='height: 90%;margin-top: 10px;padding: 5px;'>
							<table id="sflileTB" style='font-size:12px;border:#DADADA 1px solid;width:100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td style='width:30px;height:30px;padding-left: 5px;' align="left">编号</td>
										<td style='width:150px;height:30px;' align='center'>文件名称</td>
										<td style='width:150px;height:30px;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody>
									
								</tbody>
							</table>
						</div>
					</div>
				</td>
			</tr>
		</table>
		</td>
	</tr>
</table>

	<form action="/audit/statusDataController/downFile.do" method="post" style="display: none;" id="shpgDowFile">
	  <input type="text" id="sid" name="sid" >
	  <input type="text" id="flag" >
	</form>
</body>
</html>