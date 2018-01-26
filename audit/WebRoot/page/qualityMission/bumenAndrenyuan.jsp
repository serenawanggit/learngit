<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Expires" content="Wed, 26 Feb 2012 08:21:57 GMT">
<title>任务管理</title>
<link href="<%=basePath%>/css/tsk.css" rel="stylesheet" type="text/css" />
<style type="text/css">
	*{margin:0px; padding: 0px; font-size: 12px;font-family:Arial, Helvetica, sans-serif;}
	html{width: 100%;height: 96%;}
	body{width: 100%;height: 100%;margin:0;border:none;
	background-repeat:repeat-x;font-size:12px;
	font-family:Arial, Helvetica, sans-serif;
	background:url(<%=basePath %>/images/centerbk.png);
	   filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
	   -moz-background-size:100% 100%;
	}
	
	div.cover-layer{margin: 0;padding: 0;border: none;width: 100%;height: 100%;background: #333;opacity: 0.6;filter: alpha(opacity=60);z-index: 99;position: fixed;top: 0;left: 0;display: none;}
	div.popup-layer{background-color:white;height:480px;width:800px;z-index: 100;position: absolute; top:5%;left:15%;display: none;overflow-x:auto;}
	div.header{width:100%;height:26px;background-color:#5B8D6C;}
	div.main-top{width: 100%;height: 40px;}
	div.main-left{width: 400px;height: 340px;margin-left:12px;border: 1px solid #CCCCCC;overflow-y: scroll; }
	div.main-right-top{width: 360px;height: 160px;margin-left:12px;border: 1px solid #CCCCCC;}
	div.footer{width: 100%;}
	div.main-title-Background{width: 100%;height: 24px;font-weight: bold;background-color: #DAE0E6;}
	div.title-right{}
	.popup-layer div{float: left;}
	.popup-layer li{float: left;list-style: none;}
	.header li{margin-left: 6px;margin-top: 6px;font-weight: bolder;color: #FFFFFF; }
	.main-top li{margin-left: 12px;margin-top: 13px;}
	li.main-title{margin-left: 5px;margin-top: 5px;font-weight: bolder;}
	li.name-left{width: 334px;height: 22;line-height: 22px;margin-left: 10px;}
	li.add-left{width: 36px;height: 22;line-height: 22px;}
	li.name-right{width: 212px;height: 22;line-height: 22px;margin-left: 10px;}
	li.add-right{width: 36px;height: 22;line-height: 22px;}
	.footer li{margin-left: 363px;margin-top: 20px;}
	.combobox{float: left;width: 158px;margin-left: 0px;margin-top: 11px;}

</style>

<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/quality/bumenAndrenyuan.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>

<script type="text/javascript">
	validateLogin();
</script>

</head>
<body >

<!-- 右边显示 -->

	<div style="background-color:#568E59; width:230px; height:28px; margin-left: 10px; margin-top: 10px;">
   		<span style='display:inline-block;height:28px;line-height:28px;color:white;padding-left:15px;'>质量任务管理 >> 任务部门和人员管理</span>
	</div>
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			
			<tr>
				<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;" colspan="2" align="left">
					<table style="width:100%;" cellpadding="0" cellspacing="0">
						<tbody>
							<tr>
								<td>
									<input id='rName' value="请输入任务单位" onFocus="if(value==defaultValue){value='';this.style.color='#000'}" onBlur="if(!value){value=defaultValue;this.style.color='#999'}"  style="color:#999999;width:200px;height:24px;line-height:24px;vertical-align:middle;margin-left:10px;border:#DADADA 1px solid;padding-left:5px;" id="plannameinput" type="text">
									<a href="javascript:void(0)">
										<img src="/audit/images/searchbtn.png" onclick="seleLikeName();" style="vertical-align:middle;height:24px;line-height:24px;border:0px;">
									</a>
								</td>
								<td align="right">
									<a href="#" onclick="addTask();">
										<img src="/audit/images/addnew.png" border="0"></a>
									<a href="#" onclick="deleteMultiple();" style="display:inline-block;padding-right:5px;">
										<img src="/audit/images/deletept.png" style="margin-left:10px;border:0px;">
									</a>
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
										<td nowrap="nowrap" style='width:380px;border-top:#DADADA 1px solid;' align='center'>任务单位</td>
										<td nowrap="nowrap" style='width:340px;border-top:#DADADA 1px solid;' align='center'>部门人员及角色</td>
										<td nowrap="nowrap" style='width:280px;border-top:#DADADA 1px solid;' align='center'>操作</td>
									</tr>
								</thead>
								<tbody id="tbody">
									
								</tbody>
						</table>
						
					</div>
					<table style='width:100%;' cellpadding='0' id="pageTb">
						<tbody>
							<tr>
						<!--  	<page:pager url="audit/asZlZlrwbmryController/selectAllAsZLZLrwmry.do" count="${count}" page="1"/>-->
							<td align='left'>
								<span style='display:inline-block;margin-left:40px;'>&nbsp;</span>
								</td>
								<td align='right'>
								 <span style='display:inline-block;margin-right:40px;'>
								<!-- <tag:pager url="/page/qualityMission/bumenAndrenyuan.jsp" count="100" page="1"/>
								 <img value='1_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='/audit/images/pgicon-first_press.png' style='vertical-align:middle;'
										onmouseover="this.src='/audit/images/pgicon-first.png;'"
										onmouseout="this.src='/audit/images/pgicon-first_press.png;'">
								<img value='2_"+json.totalPage+"' onclick='rightbox.window.pagefindindicator(this);'
									src='/audit/images/pgicon-pre_press.png'
										style='vertical-align:middle;margin-left:5px;'
										onmouseover="this.src='/audit/images/pgicon-pre.png;'"
										onmouseout="this.src='/audit/images/pgicon-pre_press.png;'">
								<span style='display:inline-block;height:24px;line-height:24px;text-align:center;margin-left:5px;'>1/10页</span>
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
										onmouseout="this.src='/audit/images/pgicon-last_press.png'"> -->
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
<!-- start 遮盖层 -->
	<div id="divc" class="cover-layer">
	</div>
	
	
	
<!-- 弹出层 -->
	<div id="divcontent" class="popup-layer">
		<div class="header">
			<li>质量任务人员配置</li>
		</div>
		<div class="main-top">
			<li>学院：</li>
			<select class="combobox" id="organizationName" onchange="selectZhuanYe();">
				<option>---请选择学院---</option>
			</select>
			<li>专业：</li>
			<select class="combobox" id="specialtyName">
			</select>
		</div>
		<div class="main-left">
			<div class="main-title-Background">
				<li class="main-title">待选人员</li>
			</div>
			<div id="daixuanrenyuan"  class="Content-left">
				<!-- 待选人员  -->
			</div>
		</div>
		<div class="main-right-top">
			<div  class="main-title-Background">
				<li class="main-title">已选人员</li>
			</div>
			
				
			<div id="yixuanrenyuan" >
			<!-- 已选人员 -->
			</div>
		</div>
		<div class="footer">
			<li>
				<input type="button" style="color:#FFFFFF;cursor:pointer; border-width: 0px;width:50px;height:26px; background-color:#6DA770;" value="保存" onclick="sbt()" id="subbutton"/>
				<input type="button" style="color:#FFFFFF;cursor:pointer; border-width: 0px;width:50px;height:26px; background-color:#6DA770;" id="hidebutton" value="取消" onclick="hidebutton()"/>
			</li>
		</div>
	</div>
<!-- end 弹出层 -->




<!-- 修改start 遮盖层 -->
	<div id="divcUpdate" class="cover-layer">
	</div>
<!-- 修改弹出层 -->
	<div id="divcontentUpdate" class="popup-layer">
		<div class="header">
			<li>质量任务人员配置</li>
		</div>
		<div class="main-top">
			<li>学院：</li>
			<select class="combobox" id="organizationNameUpdate" onchange="selectZhuanYeUpdate();">
				<option>---请选择学院---</option>
			</select>
			<li>专业：</li>
			<select class="combobox" id="specialtyNameUpdate">
			</select>
		</div>
		<div class="main-left">
			<div class="main-title-Background">
				<li class="main-title">待选人员</li>
			</div>
			<div id="daixuanrenyuanUpdate"  class="Content-left">
				<!-- 待选人员 -->
			</div>
		</div>
		<div class="main-right-top">
			<div  class="main-title-Background">
				<li class="main-title">已选人员</li>
			</div>
			
				
			<div id="yixuanrenyuanUpdate" >
			<!-- 已选人员 -->
			</div>
		</div>
		<div class="footer">
			<li>
				<input type="button" style="color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;cursor:pointer" value="保存" onclick="update();" id="subbutton"/>
				<input type="button" style="color:#FFFFFF; border-width: 0px;width:50px;height:26px; background-color:#6DA770;cursor:pointer" id="hidebutton" value="取消" onclick="hidebuttonUpdate()"/>
			</li>
		</div>
	</div>
<!-- end 弹出层 -->
</body>
</html>