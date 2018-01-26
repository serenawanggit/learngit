<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE HTML >
<html>
<head>
	<title>结果分析</title>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.min.css" />
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/majorEvaluation/base.css" />
	<link rel="stylesheet" type="text/css"	href="<%=request.getContextPath()%>/css/majorEvaluation/conditionEstimationAnalysis.css" />

	<script src="<%=request.getContextPath()%>/js/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="<%=request.getContextPath()%>/js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
	
	
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/echarts-all.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/js/majorEvaluation/conditionEstimationAnalysis.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/commonjs/common1.js"></script>
</head>
<body>
	<div class="main">
		<div class="main-top-short" style="height:8em;">
			
			<div class="main-top-div1">
				<button class="avgbutton" onclick="show(1)">均值分析</button>
				<button class="avgbutton" onclick="show(2)">分项分析</button>
				<!-- <li>分项分析</li></ul> -->
				<label >评估年度 </label>
				<select id="selectYear" class="selectYear" onchange= "getChartData()">
				</select>
				<label >评估体系</label>
				<select id="selectEstimation" class="selectEstimation" onchange= "getChartData()">
				</select>
			</div>
		</div>
		<div class="main-bottom">
		<!-- 	<img src="../../js/test/tttttttttt.jpg"></img> -->
			<!--均值分析 控制显示的界面 为 main-bottom-div1-->
			<div class="main-bottom-div1" id="avgChartDisplay" style="display:block">
				<span style="color:red">正在加载...</span>
			</div>
			<!--分项分析   控制显示的界面 为 main-bottom-div2-->
			<div class="main-bottom-div1" id="subAnalysis">
			 <table class=" ana_table">
				<thead id="and_head">
				</thead>
				<tbody id="and_body">
				</tbody>
			</table>
			<div class="ana_button">
				<div class="green_div"></div>
				<span class="ana_span"> > 85% </span>
				<div class="yellow_div"></div>
				<span class="ana_span"> 75% ~ 85% </span>
				<div class="red_div"></div>
				<span class="ana_span"> < 75% </span>
				<span class="ana_span" style="margin-left: 40px;font-style: italic;">(点击进入看专业分值)</span>
			</div>
			</div>
		</div>
	</div>
		<!-- 弹出层1 新增任务 -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel">详细</h4>
					</div>
					<div class="modal-body analysis_talbe_modal">
					    <form id="scheduleTaskForm">
						<table class="table table-bordered table-hover" id="">
							<thead style="text-align: center;">
								<tr>
									<th>学院</th>
									<th>专业</th>
									<th>百分比</th>
									<th>分值</th>
								</tr>
							</thead>
							<tbody id="detailScore">
								
							</tbody>
						</table>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					</div>
				</div>
			</div>
		</div>
</body>
</html>
