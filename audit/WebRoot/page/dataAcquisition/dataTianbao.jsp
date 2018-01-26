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
<title>填报</title>
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
<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/tianbao.js"></script>
<script type="text/javascript" src="<%=basePath %>/js/jquery.form.js"></script>
<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
</head>
<body >
<form action="" id="exportform" method="post" >
<input type="hidden" readonly="readonly" id="rwid" value="${rwid}"/> 
<input type="hidden" id="mbid" value=""/> 
<input type="hidden" id="mbid" value=""/>
</form>
<!-- 右边显示 -->
<input type="hidden" id ="pid" value="" />
<table style='width:98%;margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0'>
	<tr><td style='height:40px;' align='left'>
		<span style='color:#FFF;display:inline-block;width:175px;font-size:12px;background-image:url(<%=basePath %>/images/subtitleindexbk.png);text-align:center;height:36px;line-height:36px;color:#FFFFFF;'>
			<span style='display:inline-block;height:28px;line-height:28px;'>
			数据填报
			</span>
		</span>
		</td>
		<td style='height:30px;' align='right'>&nbsp;</td>
	</tr>
	<tr>
		<td style='height:60px;' align='left' colspan='2'>
		<table cellpadding='0' cellspacing='0' style='width:100%;'>
			<tr>
				<td style="height:60px;border:#DADADA 0px solid;border-bottom:0px;" colspan="2" align="left">
					<label id="rwmc" style="margin-left: 10px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
				2014年度审核评估数据采集工作
					</label>
					<label style="margin-left: 210px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
				任务截止时间：
					</label>
					<label id="jzTime" style="margin-left: 5px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
				
					</label>
					<label style="margin-left: 210px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
					进度：
					</label>
					<label id="jd" style="margin-left: 5px;font-size: 12px;font-family:Arial, Helvetica, sans-serif;">
					
					</label>
				</td>
			</tr>
			<tr>
				<td colspan="2" style='height:400px;width: 100%'>
				<!-- 待完成填报数据 -->
					<div style="margin-top:0px;overflow: auto;float:left;height:130px;width:100%;border: 0px #DADADA solid;">
						<form action='' id='eform' method='post' enctype='multipart/form-data' >
						<table id="dwcTable" style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap='nowrap' colspan="7" style='height:40px;border-top:#DADADA 1px solid;padding-left: 10px;' align="left">
										待完成填报数据（单个任务选择文件后提交）
										</td>
									</tr>
								</thead>
								<tbody>
						
								</tbody>
						</table>
						</form>
					</div>
				<!-- 已上报待审核数据 -->
					<div style="margin-top:15px;overflow: auto;float:left;height:130px;width:100%;border: 0px #DADADA solid;">
						<table id="ysbTable" style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap='nowrap' colspan="6" style='height:40px;border-top:#DADADA 1px solid;padding-left: 10px;' align="left">
										已上报待审核数据（请校验完成查看错误后再提交）
										</td>
									</tr>
								</thead>
								<tbody>
									<tr style='background-color:#FFF;color:#333333;font-size:12px;'>
										<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">表1-3：学校相关行政单位</td>
										<td nowrap="nowrap" style='width:100px;border-top:#DADADA 1px solid;' align='center'>已导入</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
										<a href="#" >
											模版下载
										</a>
										</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
											<input type="button" value="选择文件"/>
											<label>
												未选择文件
											</label>
										</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>
									</tr>
									<tr style='background-color:#F5F5F5;color:#333333;font-size:12px;'>
										<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">表1-3：学校相关行政单位</td>
										<td nowrap="nowrap" style='width:100px;border-top:#DADADA 1px solid;' align='center'>已导入</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
										<a href="#" >
											模版下载
										</a>
										</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
											<input type="button" value="选择文件"/>
											<label>
												未选择文件
											</label>
										</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>
									</tr>
								</tbody>
						</table>
					</div>
				<!-- 已审核入库数据 -->	
					<div style="margin-top:15px;overflow: auto;float:left;height:130px;width:100%;border: 0px #DADADA solid;">
						<table id="yshTable" style='font-size:12px;border:#DADADA 1px solid;width: 100%;' cellpadding='0' cellspacing='0'>
								<thead>
									<tr style='background-color:#E6E6E6;color:#333333;font-weight:bold;font-size:12px;'>
										<td nowrap='nowrap' colspan="6" style='height:40px;border-top:#DADADA 1px solid;padding-left: 10px;' align="left">
										已审核入库数据
										</td>
									</tr>
								</thead>
								<tbody>
									<tr style='background-color:#FFF;color:#333333;font-size:12px;'>
										<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">表1-3：学校相关行政单位</td>
										<td nowrap="nowrap" style='width:100px;border-top:#DADADA 1px solid;' align='center'>已导入</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
										<a href="#" >
											模版下载
										</a>
										</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
											<input type="button" value="选择文件"/>
											<label>
												未选择文件
											</label>
										</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>
									</tr>
									<tr style='background-color:#F5F5F5;color:#333333;font-size:12px;'>
										<td nowrap='nowrap' style='width:100px;height:40px;border-top:#DADADA 1px solid;' align="center">表1-3：学校相关行政单位</td>
										<td nowrap="nowrap" style='width:100px;border-top:#DADADA 1px solid;' align='center'>已导入</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
										<a href="#" >
											模版下载
										</a>
										</td>
										<td nowrap="nowrap" style='width:160px;border-top:#DADADA 1px solid;' align='center'>
											<input type="button" value="选择文件"/>
											<label>
												未选择文件
											</label>
										</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>
										<td nowrap="nowrap" style='width:60px;border-top:#DADADA 1px solid;' align='center'>&nbsp;</td>
									</tr>
								</tbody>
						</table>
					</div>		
				</td>
			</tr>
		</table>
		</td>
	</tr>
	 <input type="text" style="display: none;" value="dfsd" id="checksuccess"/>
</table> 
        <img id="loadGif" style="margin-left: 45%;margin-top: -20%; display: none;" src="<%=basePath%>/images/loading1.gif" ></img>
      <!-- 弹出层 -->
        <div id="divc" style="margin:0;padding:0;border:none;width:100%;height:100%;background:#333;opacity:0.6;filter:alpha(opacity=60);z-index:99;position:fixed;top:0;left:0;display: none"></div>
       <!-- 弹出的内容 -->
        <div id="divclose" style="background-color:#4C8AC4;height:6%;width:85%;z-index: 100;position: absolute; top: 4%;left:8%;display: none;">
               <img border="0" style="vertical-align:middle;float: right;" src="<%=basePath%>/images/alertimg/alertclose.png " onclick="hidebutton()"></img>
        </div>
       <div id="divcontent" style="background-color:white;height:80%;width:85%;z-index: 100;position: absolute; top: 10%;left:8%;display: none;overflow-x:auto;">
           <div style="padding: 5px 5px 5px 5px">
             <input type="hidden" id="rwid"/>
             <table style="font-size:12px;width:100%; border:#DADADA 1px solid;" cellpadding="0" cellspacing="0" id="contenttable">
                      <thead id="tb_thead" class="tb_thead">
                          <tr></tr>
                      </thead>
                      <tbody id="tb_tbody">
                      </tbody>
             </table>
           </div>
             <div><span id="zs" style="margin-left: 20%;color:green;"></span><span style="color:green;margin: 0 auto;margin-left: 15%;"> *下载后请取消该任务，再次提交数据前请删除 <h3 style="display: inline-block;">错误信息列</h3>!</span></div>
             <div style="margin-left: 40%;margin-top: 20px" id="divcheck">
<!--              <input type="button" value="校验" onclick="checkExcel()" id="checkExcel"/><input id="downExcel" onclick="downExcel()" type="button" value="下载" /> <input type="button" id="hidebutton" value="取消" onclick="hidebutton()"/> 
 -->         </div>
             <input type="text" style="display: none"  id="cname">
       </div>
       
       <form action="" method="post" id="downNoPassData"></form>
</body>
</html>