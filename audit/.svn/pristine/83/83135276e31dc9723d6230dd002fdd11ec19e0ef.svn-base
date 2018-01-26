<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%String path = request.getContextPath();String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";%>

<!DOCTYPE html>
<html>
	<head>
		<base href="<%=basePath%>">
		<meta charset="utf-8">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		
		<title>现场考察~现场工作日程表</title>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/siteVisitWorkSchedule.css" />
		<script src="<%=basePath%>js/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="<%=basePath%>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
		<%-- <script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/Calendar.js"></script> --%>
		<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/DatePicker/WdatePicker.js"></script>
		<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/DatePicker/lang/en.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/js/majorEvaluation/siteVisitWorkSchedule.js"></script>
		<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	</head>
	<body>
	    <input type="hidden" value="${year}" id="selectedYear"/>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-11 top-znj">
					<li class="top-li-1-znj">年度
					     <form>
							<select class="form-control select-znj" id="schedule_year_select" onchange="getAcademyOption();">
							</select>
						</form>	
					</li>
					<li class="top-li-2-znj">学院
					    <form>
							<select class="form-control select-znj" id="schedule_academy_select" onchange="getSpecialtyOption();">
								<option value="0">--请选择--</option>
							</select>
						</form>
					</li>
					<li class="top-li-3-znj">专业
					    <form>
							<select class="form-control select-znj" id="schedule_specialty_select" onchange="querySchedule();">
								<option value="0">--请选择--</option>
							</select>
						</form>	
					</li>
				</div>
				<div class="col-md-10 button-znj">
					<input class="btn btn-default btn-1-znj" type="button" onclick="openAddDiv();"  value="新增" data-toggle="modal">
				</div>
				<div class="col-md-10 bottom-znj">
					<table class="table table-bordered table-hover table-znj" id="scheduleDataTable">
						<thead>
							<tr>
								<th class="th-1">序号</th>
								<th class="th-2">日期</th>
								<th class="th-3">时间</th>
								<th class="th-4">任务</th>
								<th class="th-5">现场考察专家</th>
								<th class="th-6">操作</th>
							</tr>
						</thead>
		
						<tbody>
<!-- 							<tr> -->
<!-- 								<td>1</td> -->
<!-- 								<td>2015.5.15</td> -->
<!-- 								<td>适时</td> -->
<!-- 								<td>专家组集中乘车前往学校</td> -->
<!-- 								<td>专家</td> -->
<!-- 								<td> -->
<!-- 									<span class="glyphicon glyphicon-edit glyphicon-1-znj"></span> -->
<!-- 									<span>&nbsp;</span>  -->
<!-- 									<span class="glyphicon glyphicon-trash glyphicon-2-znj"></span> -->
<!-- 								</td> -->
<!-- 							</tr> -->
<!-- 							<tr> -->
<!-- 								<td>2</td> -->
<!-- 								<td>2015.5.15</td> -->
<!-- 								<td>适时</td> -->
<!-- 								<td>专家组集中乘车前往学校</td> -->
<!-- 								<td>专家</td> -->
<!-- 								<td> -->
<!-- 									<span class="glyphicon glyphicon-edit glyphicon-1-znj"></span> -->
<!-- 									<span>&nbsp;</span>  -->
<!-- 									<span class="glyphicon glyphicon-trash glyphicon-2-znj"></span> -->
<!-- 								</td> -->
<!-- 							</tr> -->
								<tr>
									<td style="color:red;" colspan="6">请选择条件</td>
								</tr>
						</tbody>
					</table>
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
						<h4 class="modal-title" id="myModalLabel">新增工作日程</h4>
					</div>
					<div class="modal-body">
					    <form id="scheduleTaskForm">
						<table class="table table-bordered table-hover table-znj" id="scheduleTaskTable">
							<thead>
								<tr>
									<th class="th-2">日期</th>
									<th class="th-3">时间</th>
									<th class="th-4">任务</th>
									<th class="th-5">现场考察专家</th>
									<th class="th-6">操作</th>
								</tr>
							</thead>
		
							<tbody>
								<tr id="ztr0">
									<td><input type="text" name="scheduleDate"  onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});" class="form-control"  placeholder="点击选择时间" readonly></td>
									<td><input type="text" name="scheduleTime" class="form-control" placeholder="请输入具体时间段"></td>
									<td><input type="text" name="scheduleTask" class="form-control" placeholder=""></td>
									<td>
										<select class="form-control" name="expertId" id="expertId0">
										    <option value="0">-请选择-</option>
										</select>
									</td>
									<td class="td-bnt-znj">
										<span  class="glyphicon glyphicon-plus glyphicon-2-znj" onclick="addTaskTr();"></span>
										<!-- <span  class="glyphicon glyphicon-minus glyphicon-2-znj"  onclick="delTaskTr(0);"></span> -->
									</td>
								</tr>
							</tbody>
						</table>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" onclick="insertScheduleTasks();" class="btn btn-primary">保存</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹出层2 修改任务表 -->
		<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel2">修改工作日程</h4>
					</div>
					<div class="modal-body">
					    <form id="scheduleTaskForm2">
						<table class="table table-bordered table-hover table-znj" id="scheduleTaskTable2">
							<thead>
								<tr>
									<th class="th-2">日期</th>
									<th class="th-3">时间</th>
									<th class="th-4">任务</th>
									<th class="th-5">现场考察专家</th>
									<!-- <th class="th-6">操作</th> -->
								</tr>
							</thead>
		
							<tbody>
								<tr>
									<td><input type="text" name="scheduleDate" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});" class="form-control" placeholder=""></td>
									<td><input type="text" name="scheduleTime" class="form-control" placeholder=""></td>
									<td><input type="text" name="scheduleTask" class="form-control" placeholder=""></td>
									<td>
										<select class="form-control" name="expertId">
										    <option value="0">-请选择-</option>
										</select>
									</td>
									<!-- <td class="td-bnt-znj">
										<span  class="glyphicon glyphicon-plus glyphicon-2-znj" onclick="addTaskTr();"></span>
										<span  class="glyphicon glyphicon-minus glyphicon-2-znj"  onclick="delTaskTr(0);"></span>
									</td> -->
								</tr>
							</tbody>
						</table>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" onclick="updateScheduleTask();" class="btn btn-primary">保存</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
