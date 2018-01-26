<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
	<head>
		<title>评估状态-评分总表</title>
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/majorEvaluation/base.css" />
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/majorEvaluation/conditionEstimationSum.css" />
		 
		<script type="text/javascript" src="<%=request.getContextPath()%>/js/majorEvaluation/jquery-1.7.2.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/js/majorEvaluation/conditionEstimationSum.js"></script>
	</head>
<body>
	<div class="main">
		<div class="main-top-short">
			<div class="main-top-div1">
				<label class="top-div1-label1">专业评估年度 </label>
				<select id="selectYear" class="selectYear" onchange= "changeEstimation()">
				</select>	
				<label class="top-div1-label2">评估体系</label>
				<select id="selectEstimation" class="selectEstimation" onchange= "changeEstimation()">
				</select>	
				<!-- 四个操作按钮 -->
				<!-- <ul > <li onclick="changeTab(1,this)">汇总分</li>
				<li onclick="changeTab(2,this)" >大分类</li>
				<li onclick="changeTab(3,this)" class="top-div1-li2">细分</li></ul> -->
			</div>
		</div>
		<div class="main-bottom">
			<!--  汇总分  界面 为 main-bottom-div1-->
			 <div class="main-bottom-div3" id="div1" style="width: 466px;margin-left: 377px;">
				<table class="bottom-div3-table">
					<thead id="table1Head" class="table3-top">
					<tr class="bottom-table-th">
						<th>学院</th>
						<th>专业</th>
						<th>汇总</th>
					</tr>
					</thead>
					<tbody id="table1Body" class="table3Body">
					
					</tbody>
				</table>
			</div>
			<!--  大分类 显示的界面 为 main-bottom-div2-->
			<div class="main-bottom-div3" id="div2">
           		<table class="bottom-div3-table">
					<thead id="table2Head" class="table3-top">
					<tr class="bottom-table-th" id="thead2">
					</tr>
					</thead>
					<tbody id="table2Body" class="table3Body">
					</tbody>
					<tfoot id="table2Foot" class="table2-top-foot"></tfoot>
				</table>
  		 	</div>
			<!--  细分 控制显示的界面 为 main-bottom-div3-->
			<div class="main-bottom-div3" id="div3" style="display:block">
				<!--  用table 布局控制的tab切换-->
				<table class="bottom-div3-table" nowrap='nowrap'>
					<thead id="table3Head" class="table3-top">
					</thead>
					<tbody id="table3Body" class="table3Body">
					</tbody>
				 </table> 
			</div>
			
		</div>
	</div>
</body>
</html>
