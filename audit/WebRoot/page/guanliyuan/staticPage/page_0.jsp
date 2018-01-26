<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">
	
<title id="titltes"></title>

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
<script type="text/javascript" src="page/guanliyuan/staticPage/js/page_0.js" ></script>	
<script type="text/javascript" src="js/jquery.form.js" ></script>	
<script type="text/javascript" src="js/jquery.form.min.js" ></script>	

  <script type="text/javascript" src="/audit/commonjs/common1.js">
  
  </script>
 

<style type="text/css">
	li:hover
		{ 
			background-color:#2f93fd;
		}
	#main{
		width:100%;
	}
</style>
</head>
<body >
<input type="hidden" id="specialtyId" value="<%=request.getParameter("specialtyId")%>"/>
<input type="hidden" id="dateYear" value="<%=request.getParameter("dateYear")%>"/>
	<div id="main">
		<div id="top">
			<div>
				<span id="specialtys">专家质量报告</span>
			</div>
		</div>
		<div id="midle1" style="height:47px; width:100%;" >
			<div style="margin-top:10px;">
				<div style="float:left;margin-left:27px;position: relative;">
					<strong id="biaoti">专业:</strong>
					<input type="text" style="height: 32px;" id="sp_name" placeholder="请选择"/>
					<a href="javascript:xiala(2)"><img title="下拉选择" src="/audit/page/guanliyuan/staticPage/img/xiala.png" style="float:right" /></a>
					<!-- 下拉显示框 -->
					<div id="2" name="xialaBox" style="height:230px;border:1px solid #eeeeee;width: 172px;position: absolute;left: 40.5px;z-index:100;display:none;overflow:auto;">
						<ul style="list-style: none;background: white;" id='ul2'>
							<!-- <li style="padding:5px" onclick="choose(this)">药学院</li> -->
						</ul>
					</div>
				</div>
			</div>
			<div style="margin-top:10px;">
				<div style="float:left;margin-left:27px;position: relative;">
					<strong>时间:</strong>
					<select style="height:32px;width:172px" id="rYear">
						<option value="2016">2016</option>
						<option value="2017">2017</option>
						<option value="2018">2018</option>
						<option value="2019">2019</option>
						<option value="2020">2020</option>
					</select>
					<a href="javascript:ajaxFindContentInfo()"><img title="点击搜索" src="/audit/page/guanliyuan/staticPage/img/search.png" style="float:right" /></a>
				</div>
			</div>
		</div>
		<div id="content" style="height:80%;width: 100%;border:1px solid rgba(204, 204, 204, 0.92);overflow:auto">
		<div id="content1" style="width:100%;height:35px;display:none;"><div style="float:right"></div>
		<div id="showContext1"></div>
			<div id="showContext" style="width:100%;margin-left:-13px;">
				<div> 
					<div id="down" style="width: 100%;margin: 15px;">
			<span style="width: 100%;font-weight: 600;color: #C12625;">审核总意见</span>
			<textarea rows="" cols="" id="shmessge" onclick="onDianJi(this)"  style="width: 100%; height: 80px; resize: none;font-size:18px; color:rgba(33, 33, 33, 0.95);padding: 5px;font-family: 'Microsoft YaHei';
   						font-size: 14px;" disabled="disabled">审核意见</textarea>
		</div>
			<div id="down" style="width: 100%;margin: 15px;">
			<span style="width: 100%;font-weight: 600;color: #C12625;">网评总意见</span>&nbsp;&nbsp;&nbsp;网评人： <select id="wangpingren" onchange="selectwpId(this.value)"  style="width: 100px;height:20px;"></select>
			<textarea rows="" cols="" id="wpyijian" onclick="onDianJi(this)"  style="width: 100%; height: 80px; resize: none;font-size:18px; color:rgba(33, 33, 33, 0.95);padding: 5px;font-family: 'Microsoft YaHei';
   						font-size: 14px;" disabled="disabled">网评人意见</textarea>
		</div>
		
		<div id="rankss" style="width: 100%;margin: 15px;">
			<span style="font-weight: 600;color: #C12625;float:left;">现场考查人意见</span>&nbsp;&nbsp;&nbsp;<span id="xckczy" style="float:left;margin-left:15px;">现场考查专家： <select id="xckcSelect" onchange="xckcSelect(this.value)"  style="width: 100px;height:20px;"></select> </span>
			<textarea rows="" cols="" id="xcmessge" onclick="onDianJi(this)"  style="width: 100%; height: 80px; resize: none;font-size:18px; color:rgba(33, 33, 33, 0.95);padding: 5px;font-family: 'Microsoft YaHei';
   						font-size: 14px;"  disabled="disabled">现场考查意见意见说明</textarea>
		</div>
		<div id="xckczz" style="width: 100%;margin: 15px;">
			<span style="width: 100%;font-weight: 600;color: #C12625;">现场考查专家组长意见</span>&nbsp;&nbsp;&nbsp;评分等级&nbsp;&nbsp;<input type="radio" name="ranks" value="优"  checked="checked">优&nbsp;<input type="radio" name="ranks"  value="良">良&nbsp;<input type="radio" name="ranks"  value="中">中&nbsp;<input type="radio" name="ranks"  value="差">差
			<textarea rows="" cols="" id="xckczzyj"    style="width: 100%; height: 80px; resize: none;font-size:18px; color:rgba(33, 33, 33, 0.95);padding: 5px;font-family: 'Microsoft YaHei';
   						font-size: 14px;"  disabled="disabled">现场考查意见意见说明</textarea>
		</div>
		 
		</div>
		</div>
	</div>
</body>

</html>
