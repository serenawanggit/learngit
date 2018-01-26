<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>专业自评~评估指标自评</title>
		<link rel="stylesheet" type="text/css" href="/audit//css/majorEvaluation/base.css"/>
		<link rel="stylesheet" type="text/css" href="/audit//css/majorEvaluation/selfEvaluationZY.css"/>
		<link rel="stylesheet" type="text/css" href="/audit//css/majorEvaluation/self_tree.css"/>
		<script type="text/javascript" src="<%=basePath %>/js/jquery.js"></script>
		<script type="text/javascript" src="<%=basePath %>/js/assess/selfEvalution.js"></script>
		<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="nav">
				<ul>
					<li><a href="/audit/page/majorEvaluation/homePage.jsp">首页</a></li>
					<li class="nav-li-a"><a href="/audit/self/selfView.do?year=${year}&operateType=${operateType}">评估指标自评</a></li>
					<li><a href="/audit/self/selfReportView.do?year=${year}" id="selfReportUrl">自评报告</a></li>
					<li><a href="/audit/self/profile.do?year=${year}" >简况表</a></li>
					<li><a href="/audit/asAccessDataTableController/initMaterialLibraryZY.do">我的材料库</a></li>
				</ul>
			</div>
			<div class="main">
				<div class="main-top-high">
					<div class="main-top-left">
						<ul>
							<li class="main-top-li-one">
								<select class="main-top-select-one" name="" id="orgList" onchange="getSpecialty()">
								</select>
								<select class="main-top-select-two" name="" id="specialtyList" onchange="standardRebuild()">
								</select>
							</li>
							<li >
								<label>专业评估年度：</label>
								<select class="main-top-select-one" name="" id="yearList" onchange="getUserGroup(this.value)">
								</select>
							</li>
							
						</ul>
					</div>
					<div class="main-top-center">
						<ul>
							<li class="main-center-top-li-one">
								专业自评时间：<label id="times"></label>
							</li>
							<li class="main-center-top-li-two">
								<label>专业评估指标</label>
								<select class="main-center-top-select" name="" id="standardList" onchange="getStandard(0,null,1)">
								</select>
							</li>
						</ul>
					</div>
					<div class="main-top-right">
						<ul>
							<li>
								还有：<label id="days"></label>
							</li>
						</ul>
					</div>
				</div>
				<div class="main-left">
					<div class="main-left-top">
						<ul>
							<li>评估指标体系</li>
						</ul>
					</div>
					<div class="main-left-bottom tree_div" id="leftDiv">
					</div>
				</div>
				<div class="main-center" >
					<div class="main-center-top">
						<ul>
							<li>评估标准</li>
						</ul>
					</div>
					<div class="main-center-bottom">
						<ul>
							<li class="li-list">评分标准：</li>
							<li class="li-content" id="scoreStandard">
							</li>
						</ul>
						<ul>
							<li class="li-list">评分量表：</li>
							<li class="li-content" id="scoreScaleList">
							</li>
						</ul>
						<ul>
							<li class="li-list">量化指标：</li>
							<li class="li-content" id="indexList">
							</li>
						</ul>
						<ul>
							<li class="li-list">状态数据：</li>
							<li class="li-content" id="statusList">
							</li>
						</ul>
					</div>
				</div>
				<div class="main-right">
					<div class="main-right-top" >
						<li>自评</li>
					</div>
					<div id="imageDiv" style="display:none;margin-left: -246px;">
						<img src="/audit/images/loading.gif">
					</div>
					<div class="main-right-bottom">
						<ul>
							<li class="">
								自评分：<input class="main-right-text" type="text" name="selfScore" id="selfScore" onBlur="saveScore()"/>&nbsp;分
							</li>
							<li class="">
								支撑材料：<input class="search_input" style="width: 150px;" type="button" value="从我的材料库中选取"  onclick="showDiaLog()"/>
							</li>
							<li class="" >
								<ul id="dataList">
									
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer">
				<div class="back">
					<a href="javascript:scroll(0,0);"><img src="/audit//img/majorEvaluation/back.png"/></a>
				</div>
			</div>
		</div>
		<div class="div_cm" id="addDialog">
      		<p class="close"><a href="#" onclick="closeDialog();">关闭</a></p> 
      		<div style="margin-left: 75px;margin-top: 50px;font-size: 12px;">
      			<ul>
      				<li >文件名：<input type="text" id="fileName" class="main-center-li-two">
      					<input type="button" class="search_input" name="" onclick="searchFile()" id="" value="搜索" />
      				</li>
      				<li class="diaLog_list_li">
      					<ul id="fileList">
      					</ul>
      				</li>
      				<li class="center-li-two" style="margin-top: 15px;margin-left: 10px;width: 233px;">
      					<input type="button" class="search_input" style="width: 105px;margin-left: 0px;  height: 26px;margin-right: 15px;" onclick="addFile()" value="确定" />
      					<input type="button" class="search_input" style="width: 105px;margin-left: 0px;  height: 26px;" onclick="closeDialog()" value="取消" />
                   </li>
      			</ul>
      		</div>
        </div>
        <div class="black_overlay" id="overlay"></div>
	</body>
<script type="text/javascript">
$(document).ready(function () {
	var year = "${year}";

	//获取年份
    var strCookie = document.cookie;
    var cookies = strCookie.split("; ");
    for(var i=0;i<cookies.length;i++){
    	var cookie = cookies[i];
    	var details = cookie.split("=");
    	if(details[0] == "assessYear"){
    		year = details[1];
    	}
    }
    
	getUserGroup(year);
	var operateType="${operateType}";
	if(operateType == 2){
	//禁用input
	}
});
validateLogin();
</script>
</html>
