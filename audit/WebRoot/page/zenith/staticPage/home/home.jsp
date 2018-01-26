<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<%@include file="/page/common/lib.jsp"%>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>喆思教学-首页</title>
<link href="${context}/css/main.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=basePath%>js/jquery.js"></script>
<script src="<%=basePath%>js/echarts/theme.js"></script>
<script src="<%=basePath%>js/echarts/echarts-all.js"></script>

<style type="text/css">
	.home_term{margin-left: 5px; width: 100%;padding-top: 4px; padding-bottom: 6px; float: left;}
	.home_term li{float: left; margin: 2px 0px 2px 3px;}
	.home_term li span{color: white; font-size:12px; margin-right: 2px;}
	.home_term li select{border: 0px; background-color: #61859E; width: 92px; text-align: center; color:white}
</style>
</head>

<body style="overflow:auto">
	<div class="left">
		<div class="ltop">
			<ul class="home_term">
				<li>
					<span>选择风格：</span>
					<select name="theme_select">
						<option name='infographic' value="infographic">暖色</option>
						<option selected="true" name='macarons' value="macarons">淡色</option>
						<option name='shine' value="shine">光亮</option>
						<option name='dark' value="dark">黑色</option>
						<option name='blue' value="blue">蓝色</option>
						<option name='green' value="green">绿色</option>
						<option name='red' value="red">红色</option>
						<option name='gray' value="gray">灰色</option>
						<option name='default' value="default">默认</option>
					</select> 
				</li>
				<li name="betweenYear">
					<span>起始年份：</span>
					<select id="startYear" onchange="checkSelect();"></select>
				</li>
				<li name="betweenYear">
					<span>结束年份：</span>
					<select id="endYear" onchange="checkSelect();"></select>
				</li>
				<li name="choiceYear" style="display: none;">
					<span>选择年份：</span>
					<select id="choiceYear" onchange="checkSelect();"></select>
				</li>
			</ul>
		</div>
		<div class="l_nav">
			<div class="l_biaoji">
				<a class="icon_red mg_top14" href="#####"
					onclick="getObjsByClass('icon_red mg_top10 mg_r10');"></a> <a
					class="icon_yellow mg_top14" href="#####"
					onclick="getObjsByClass('icon_yellow mg_top10 mg_r10');"></a> <a
					class="icon_gree mg_top14" href="#####"
					onclick="getObjsByClass('icon_gree mg_top10 mg_r10');"></a> <a
					class="all_btn01" href="#####" onclick="getObjsShow();">全部</a>
			</div>
			<ul id="leftType">
				<li style="cursor:pointer" onclick="clickLeft('101');" value="101">
					学校基本信息
				</li>
				<li style="cursor:pointer" onclick="clickLeft('102');" value="102">
					学校基本条件
				</li>
				
				<li style="cursor:pointer" onclick="clickLeft('103');" value="103">学科专业</li>
				<li style="cursor:pointer" onclick="clickLeft('104');" value="104">教师信息</li>
				
				<li style="cursor:pointer" onclick="clickLeft('106');" value="106">
					学生信息
				</li>
				<li style="cursor:pointer" onclick="clickLeft('105');" value="105">
					人才培养
				</li>
				<li style="cursor:pointer" onclick="clickLeft('107');" value="107">
					教学管理与质量监控
				</li>
				<li style="cursor:pointer" onclick="clickLeft('0');" value="0">
					我关注的指标
				</li>
				<li style="cursor:pointer" onclick="clickLeft('core');" value="core">
					全校核心指标
				</li>
			</ul>
		</div>
	</div>
	<div class="right">
    <img id="loadGif" style="margin-left: 40%;margin-top: -35%; display: none; " src="<%=basePath%>/images/loading1.gif" ></img>
		<div class="right_main">
		<div class="box_tips">
			<ul id="uldk"></ul>
		</div>
		<!--  
		  <iframe id="mrIframe" src="${chartCtx}/page/home/home_right.jsp" name="rightbox" frameborder=0 id="rightbox" border=0/ width="100%" height="100%"></iframe>
		  -->
		  </div> 
	</div>
	<!--左侧导航选中效果 -->
	
	<script>
		
	</script>
	<script type="text/javascript" src="<%=basePath%>page/zenith/js/home.js"></script>
</body>
</html>
