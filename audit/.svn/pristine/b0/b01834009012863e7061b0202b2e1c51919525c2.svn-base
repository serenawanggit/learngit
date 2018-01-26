<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%String path = request.getContextPath();String basePath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()+ path + "/";%>
<%
   //以下三个id为现场考查内容页面返回（按钮）时带过来的
   String isback = request.getParameter("isback");
   String xckcYearId = request.getParameter("xckcYearId");
   String xckcAcademyId = request.getParameter("xckcAcademyId");
   String xckcSpcialtyId = request.getParameter("xckcSpcialtyId");
 %>
<!DOCTYPE html>
<html>
	<head>
		<base href="<%=basePath%>">
		<meta charset="utf-8">
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		
		<title>现场考查~现场考查任务</title>
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/siteVisitMyInspection.css" />
		<script src="<%=basePath%>js/jquery-1.9.1.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="<%=basePath%>js/bootstrap.min.js" type="text/javascript" charset="utf-8"></script>
		<%-- <script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/Calendar.js"></script> --%>
		<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/DatePicker/WdatePicker.js"></script>
		<script type="text/javascript" src="<%=basePath %>/js/dataAcquisition/DatePicker/lang/en.js"></script>
		<script src="<%=basePath%>js/majorEvaluation/siteVisitMyInspection.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript" src="<%=basePath %>commonjs/common1.js"></script>
	</head>
	<body>
	  <input type="hidden" value="${year}" id="selectedYear"/>
	
	  <input type="hidden" value="<%=xckcYearId %>" id="xckcYearId"/>
	  <input type="hidden" value="<%=xckcAcademyId %>" id="xckcAcademyId"/>
	  <input type="hidden" value="<%=xckcSpcialtyId %>" id="xckcSpcialtyId"/>
	  <input type="hidden" value="<%=isback %>" id="isbackId"/>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-11 top-znj">
					<li class="top-li-1-znj">年度
						<form>
							<select class="form-control select-znj" id="scene_year_select" onchange="getAcademyOption();">
							</select>
						</form>
					</li>
					<li class="top-li-2-znj">学院
						<form>
							<select class="form-control select-znj" id="scene_academy_select" onchange="getSpecialtyOption();">
								<option value="0">--请选择--</option>
							</select>
						</form>
					</li>
					<li class="top-li-3-znj">专业
						<form>
							<select class="form-control select-znj" id="scene_specialty_select" onchange="queryScene();">
								<option value="0">--请选择--</option>
							</select>
						</form>
					</li>
				</div>
				<div class="col-md-10 button-znj">
					<input class="btn btn-default btn-1-znj" type="button" value="新增" data-toggle="modal" onclick="openAddDiv();" >
				</div>
				<div class="col-md-10 bottom-znj">
					<table class="table table-bordered table-hover table-znj" id="sceneDataTable" style="table-layout:fixed;">
						<thead>
							<tr>
								<th class="th-1">序号</th>
								<th class="th-2">开始时间</th>
								<th class="th-3">结束时间</th>
								<th class="th-4">考查方式</th>
								<th class="th-5">专家</th>
								<!-- <th class="th-6">考查内容</th> -->
								<th class="th-6">操作</th>
							</tr>
						</thead>
		
						<tbody>
							<!-- <tr>
								<td>1</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td>
									<span class="glyphicon glyphicon-log-in glyphicon-1-znj"></span>
									<span>&nbsp;</span>
									<span class="glyphicon glyphicon-edit glyphicon-2-znj"></span>
									<span>&nbsp;</span>
									<span class="glyphicon glyphicon-trash glyphicon-3-znj"></span>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td>
									<span class="glyphicon glyphicon-log-in glyphicon-1-znj"></span>
									<span>&nbsp;</span> 
									<span class="glyphicon glyphicon-edit glyphicon-2-znj"></span>
									<span>&nbsp;</span> 
									<span class="glyphicon glyphicon-trash glyphicon-3-znj"></span>
								</td>
							</tr> -->
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
						<h4 class="modal-title" id="myModalLabel">新增考查任务</h4>
					</div>
					<div class="modal-body">
					   <form id="sceneTaskForm">
						<table class="table table-bordered table-hover table-znj" id="sceneTaskTable">
							<thead>
								<tr>
									<th class="th-2">开始时间</th>
									<th class="th-3">结束时间</th>
									<th class="th-4">考查方式</th>
									<th class="th-5">专家</th>
									<!-- <th class="th-6">考查内容</th> -->
									<th class="th-7">操作</th>
								</tr>
							</thead>
		
							<tbody>
								<tr id="ztr0">
									<td><input type="text" name="inspectStartTime" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});" class="form-control" placeholder="点击选择开始时间" readonly></td>
									<td><input type="text" name="inspectEndTime" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});" class="form-control" placeholder="点击选择结束时间" readonly></td>
 									<td class="td-bnt-znj"><input type='text' style='display:inline-block;width:80%;' name='inspectTypeName' class='form-control' placeholder='请点击后边按钮选择' readonly>&nbsp;&nbsp;<span onclick="openTypeDiv(this);" title='选择考查方式' class='glyphicon glyphicon-comment glyphicon-2-znj' ></span></td>
 									<td>
										<select class="form-control" name="expertId" id="expertId0">
										    <!-- <option value="0">-请选择-</option> -->
										</select>
									</td>
<!-- 									<td><input type="text" name="inspectContent" class="form-control" placeholder="" /></td>
 -->									<td class="td-bnt-znj">
										<span  class="glyphicon glyphicon-plus glyphicon-2-znj" onclick="addTaskTr();"></span>
										<!-- <span  class="glyphicon glyphicon-minus glyphicon-2-znj"  onclick="delTaskTr(0);"></span> -->
									</td>
								</tr>
							</tbody>
						</table>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" onclick="insertSceneTasks();">保存</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹出层2 修改现场考查任务 -->
		<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="myModalLabel2">修改考查任务</h4>
					</div>
					<div class="modal-body">
					   <form id="sceneTaskForm2">
						<table class="table table-bordered table-hover table-znj" id="sceneTaskTable2">
							<thead>
								<tr>
									<th class="th-2">开始时间</th>
									<th class="th-3">结束时间</th>
									<th class="th-4">考查方式</th>
									<th class="th-5">专家</th>
								</tr>
							</thead>
		
							<tbody>
								<tr>
									<td><input type="text" name="inspectStartTime" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});" class="form-control" placeholder="点击选择开始时间" readonly/></td>
									<td><input type="text" name="inspectEndTime" onclick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'});" class="form-control" placeholder="点击选择结束时间" readonly/></td>
									<td class="td-bnt-znj"><input type='text' style='display:inline-block;width:80%;' name='inspectTypeName' class='form-control' placeholder='请点击后边按钮选择' readonly>&nbsp;&nbsp;<span onclick="openTypeDiv(this);" title='选择考查方式' class='glyphicon glyphicon-comment glyphicon-2-znj' ></span></td>
									<td>
										<select class="form-control" name="expertId" id="expertId0">
										    <!-- <option value="0">-请选择-</option> -->
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-primary" onclick="updateSceneTask();">保存</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹出层3 考查方式选择 -->
		<div class="modal fade" id="myModal3" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close" onclick="closeMyModal3();">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title">考查方式选择</h4>
					</div>
					<div class="modal-body" style="height:210px;">
                           <div class="col-md-12 main-2-znj" id="sceneTypeId">
                           
                           </div>
					</div>
				</div>
			</div>
			<input type='hidden' name="inspectTypeName" value=""/>
		</div>
	</body>
</html>