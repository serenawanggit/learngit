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
<title>评估方案查看</title>
<link href="<%=basePath %>/css/lookPlan.css" rel="stylesheet" type="text/css" />
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
	$(function(){	
		var obj = $('.tabPanel2 ul li');
		obj.each(function(){
			if($(this).hasClass("hit2")){
				clickplan($(this).attr("mydval"));
			}
		});
		$('.tabPanel2 ul li').click(function(){
			$(this).addClass('hit2').siblings().removeClass('hit2');
		});


		$('.tbs ul li').click(function(){
			$(this).addClass('hit').siblings().removeClass('hit');
			var yaosu = document.getElementById("yaosu");	
			$("#yaosu").val($(this).attr("myval"));
		});
		
         validateLogin();
	});

	
</script>
<script type="text/javascript" src="<%=basePath %>/js/flexpaper_flash.js"></script>  
<script type="text/javascript" src="<%=basePath %>/js/flexpaper_flash_debug.js"></script> 
<script src="<%=basePath %>/js/planview/viewplan.js"></script>
</head>
<body >
<!-- 右边显示 -->
<input type="hidden" value="1" id="swfvalue"/>
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr>
		<td style='height:40px;' align='left'>
		<span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
		<span style='display:inline-block;height:28px;line-height:28px;'>评估方案查看</span>
		</span>
		</td>
		<td style='height:40px;' align='right'>&nbsp;
		</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			<tr>
				<td style='height:20px;'><hr style="color: #DADADA"></td>
			</tr>
			<!-- 中间显示 -->
			<tr>
			<td>
<div style="width:100%;margin-top:25px;">

    <div class="tabPanel" style="display:block;width: 85%;">
		<ul id="tabs">
		<!--  	<li class="hit" myval="1.1">1.1 办学定位</li>
			<li myval="1.2">1.2 培养目标</li>
			<li myval="1.3">1.3 教学中心地位</li>-->
		</ul>
		<div class="panes">
			<div class="pane" style="display:block;padding: 15px;">
				<table cellpadding='0' cellspacing='0' style='width:100%;'>
					
					<!-- 办学定位 -->
					<tr>
						<td style='height:120px;width: 95%'>
						<div style='border:#DADADA 1px solid;height:120px;' >
						<textarea id="yaosu" style="font-size:12px;height: 100%;width: 100%;resize:none;border:#DADADA 1px solid;" readonly>1.1
						</textarea>
						</div>
						</td>
					</tr>
					<!-- 支撑材料列表 -->
					<tr>
						<td style='height:32px;width: 95%'>
						<table cellpadding='0' cellspacing='0' style='width:100%;margin:5px 0px 5px 0px;border:#DADADA 0px solid;height:60px;'>
							<tr>
								<td style='height:30px;width: 92%;'>
								<span style='font-size:12px;display:inline-block;margin-left:2px;'>[支撑材料列表]</span>
								</td>
							</tr>
							<tr>
								<td >
									<div style="height: 100%;">
									<table style="font-size:12px;border:#DADADA 1px solid;width:100%;" cellpadding="0" cellspacing="0">
										<tbody>
											<tr style="background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;">
												<td style="width:60px;height:30px;" align="center">序号</td>
												<td style="width:100px;height:30px;" align="center">文件名</td>
												<td style="width:140px;height:30px;" align="center">上传人</td>
												<td style="width:140px;height:30px;" align="center">上传时间</td>
												<td style="width:100px;height:30px;" align="center">操作</td>
											</tr>
										</tbody>
							      </table>
									
									<table style="font-size:12px;border:#DADADA 1px solid;width:100%;" cellpadding="0" cellspacing="0" id="stfiles">
										<tbody>
										</tbody>
									</table>
									</div>
								</td>
							</tr>
						</table>
						</td>
					</tr>
					<tr>
						<td style='height:80px;width: 95%'>
						<!-- [观测指标项] -->
						<table cellpadding='0' cellspacing='0' style='width:100%;margin:5px 0px 5px 0px;border:#DADADA 0px solid;height:60px;' id="gczbx">
							<tr>
								<td style='height:30px;width: 62%;'>
								<span style='font-size:12px;display:inline-block;margin-left:2px;'>[观测指标项]</span>
								</td>
							</tr>
							<tr>
								<td>
									<div style="height: 100%;overflow:auto;">
										<table style="font-size:12px;border:#DADADA 1px solid;width:100%;" cellpadding="0" cellspacing="0">
											<tbody>
												<tr style="background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;">
													<td style="width:60px;height:30px;" align="center">序号</td>
													<td style="width:100px;height:30px;" align="center">指标名称</td>
													<td style="width:140px;height:30px;" align="center">指标所属分类</td>
													<td style="width:140px;height:30px;" align="center">指标分类</td>
													<td style="width:100px;height:30px;" align="center">操作</td>
												</tr>
											</tbody>
								      </table>
								      
								      <table style="font-size:12px;border:#DADADA 1px solid;width:100%;" cellpadding="0" cellspacing="0" id="gczbxsj">
											<tbody>
												<tr style="background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;">
													<td style="width:60px;height:30px;" align="center">序号</td>
													<td style="width:100px;height:30px;" align="center">指标名称</td>
													<td style="width:140px;height:30px;" align="center">指标所属分类</td>
													<td style="width:140px;height:30px;" align="center">指标分类</td>
													<td style="width:100px;height:30px;" align="center">操作</td>
												</tr>
											</tbody>
								      </table>
									</div>
								</td>
							</tr>
						</table>
						</td>
					</tr>
					<tr>
						<td>
						<span style='font-size:12px;display:inline-block;'>[ 关联项目]</span>
							<table cellpadding='0' cellspacing='0' style='width:182px;margin:5px 0px 5px 0px;border:#DADADA 0px solid;height:60px;margin-left: 20px;' id="glproject">
								<tbody>
								
								</tbody>
							</table>
						<!-- <span style='margin-left:10px;'>无</span> -->
						</td>
					</tr>
				</table>
			</div>
		</div>
    </div>
	<!--右边列表-->
	<div class="tabPanel2">
	<ul>
		<li class="hit2" mydval="2" onclick="clickplan(2)">定位与目标</li>
		<li mydval="3" onclick="clickplan(3)">师资队伍</li>
		<li mydval="4" onclick="clickplan(4)">教学资源</li>
		<li mydval="5" onclick="clickplan(5)">培养过程</li>
		<li mydval="6" onclick="clickplan(6)">学生发展</li>
		<li mydval="7" onclick="clickplan(7)">质量保障</li>
		<li mydval="8" onclick="clickplan(8)">自选特色</li>
	</ul>
	
	
	</div>
</div>
			</td>
			</tr>
			<!-- 结束 -->
			<tr style="border: 1px red solid"><td>&nbsp;</td></tr>
		</table>
		</td>
	</tr>
</table>
</body>
</html>