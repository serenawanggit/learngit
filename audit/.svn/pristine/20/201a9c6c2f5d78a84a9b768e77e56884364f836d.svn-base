<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
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

<title>现场考察~专家评估结论</title>

<link rel="stylesheet" type="text/css"
	href="<%=basePath%>/css/bootstrap.min.css" />
<link rel="stylesheet" type="text/css"
	href="<%=basePath%>/css/majorEvaluation/siteVisitMyAssessment.css" />
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/report_tree.css"/>
<script src="<%=basePath%>js/jquery-1.9.1.min.js" type="text/javascript"
	charset="utf-8"></script>
<script src="<%=basePath%>js/bootstrap.min.js" type="text/javascript"
	charset="utf-8"></script>
	<script type="text/javascript" src="<%=basePath %>js/assess/selfReport.js"></script>
 <script type="text/javascript" src="<%=basePath%>/kindeditor/kindeditor.js"></script>
 <script type="text/javascript" src="<%=basePath%>/kindeditor/lang/zh_CN.js"></script>
 <script type="text/javascript" src="<%=basePath%>/kindeditor/plugins/code/prettify.js"></script>
<script type="text/javascript"
	src="<%=basePath%>js/common/showYearAndSchoolandSpecialty.js"></script>
<script type="text/javascript"
	src="<%=basePath%>js/majorEvaluation/siteVisitMyAssessment.js"></script>
<script type="text/javascript"
	src="<%=basePath%>js/majorEvaluation/merge.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=basePath%>/css/majorEvaluation/sinceScoreZJ.css"/>
	  <script type="text/javascript" src="/audit/commonjs/common1.js"></script>
<script type="text/javascript">
validateLogin();
	$('#exampleModal').on('show.bs.modal', function(event) {
		var button = $(event.relatedTarget) // Button that triggered the modal
		var recipient = button.data('whatever') // Extract info from data-* attributes
		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
		var modal = $(this)
		modal.find('.modal-title').text('New message to ' + recipient)
		modal.find('.modal-body input').val(recipient)
	})
</script>
</head>

<body>
     <input type="hidden" value="${year}" id="selectedYear"/>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-11 top-znj">
				<li class="top-li-1-znj">年度
					<form>
						<select class="form-control select-znj" id="schedule_year_select"
							onchange="getAcademyOption();">
						</select>
					</form>
				</li>
				<li class="top-li-2-znj">学院
					<form>
						<select class="form-control select-znj"
							id="schedule_academy_select" onchange="getSpecialtyOption();">
							<option value="0">--请选择--</option>
						</select>
					</form>
				</li>
				<li class="top-li-3-znj">专业
					<form>
						<select class="form-control select-znj"
							id="schedule_specialty_select" onchange="showData();">
							<option value="0">--请选择--</option>
						</select>
					</form>
				</li>

			</div>
			<div class="col-md-10 button-znj">
				<!-- Nav tabs -->
				<ul class="nav nav-tabs nav-justified tab-znj" role="tablist"
					id="tabul">
					<li role="presentation" class="active" tab="1">
						<a href="#two" aria-controls="home" role="tab" data-toggle="tab">专业自评分</a>
					</li>
					<li role="presentation" class="" tab="2" onclick="show();">
						<a href="#three" aria-controls="profile" role="tab" data-toggle="tab">专业自评报告</a>
					</li>
					<li role="presentation" class="" tab="3" onclick="showUserAndType()">
						<a href="#four" aria-controls="messages" role="tab" data-toggle="tab" >专家网评结果</a>
					</li>
					<li role="presentation" class="" tab="4" onclick="showInspectContent();">
						<a href="#five" aria-controls="settings" role="tab" data-toggle="tab">专家现场考察内容</a>
					</li>
				</ul>
				<!-- Tab panes -->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="two">
						<table class="table table-bordered table-znj">
							<thead>
								<tr>
									<th class="th-1">一级指标</th>
									<th class="th-2">二级指标</th>
									<th class="th-3">观测点</th>
									<th class="th-4">状态数据</th>
									<th class="th-5">满分</th>
									<th class="th-6">自评分</th>
								<!-- 	<th class="th-7">支撑材料</th> -->
								</tr>
							</thead>

							<tbody id="tbody">
								<tr>
									<td colspan="7"><center style="color:red">请选择年份、学院、专业后查看数据...</center></td>
								<tr>
							</tbody>
						</table>
					</div>
					<div role="tabpanel" class="tab-pane" id="three">
						<div class="container-fluid">
							<div class="row">
								<div class="col-md-3" style="border: 2px solid #7EDFCA;border-right: 0px solid #7EDFCA; min-height: 350px;">
									<!-- 标题 -->
									<div id="title"></div>
									<!-- 树状菜单 -->
									<div id="menuList"></div>
								</div>
								<div class="col-md-9" style="border: 2px solid #7EDFCA;min-height: 350px;">
									<!-- 文本域 -->
									<div id="content"></div>
								</div>
							</div>
						</div>
					</div>

					<div role="tabpanel" class="tab-pane" id="four">
					   <span style="margin-left: 15px;margin-bottom: 5px; ">网评专家:&nbsp;&nbsp;<span id="commentUser"></span></span>
						<div class="container-fluid" style ="margin-top:5px">
							<div class="row">
								<div class="col-md-12 center-block" >
								<div class="popups-main" id="table1" style="display: none;">
								 <table >
								   <thead>
										<tr>
											<th class="popups-main-th-one">一级指标</th>
											<th class="popups-main-th-two">二级指标</th>
											<th class="popups-main-th-three">观测点</th>
											<th class="popups-main-th-four">评分标准</th>
											<th class="popups-main-th-five">得分</th>
										</tr>
									</thead>
									<tbody id="tableone" class="popups-tbody" >
									
									</tbody>
			                        <tfoot>
									<tr>
									    <td style="text-align: center;font-size: 14px;font-weight: 600;">合计</td>
									    <td colspan="3"></td>
									    <td style="text-align: center;height:50px;"><input type="text" style="width:60px;padding-left: 35px;border: 0px" id="hjScore" readonly="readonly"/></td>
									</tr>
									<tr>
									     <td colspan="5">
									       <span style="padding-left: 5px;font-size: 14px;font-weight: 600;">综合评价意见：</span><br/>
									       <span id="spanyj" style="font-size:12px;padding-left: 45px;"></span>
									     </td>
									</tr>
									<tr>
									     <td colspan="5" style="width:100%">
									         <center> <textarea rows="10" cols="133%" style="resize:none;border:0px" id="yjtext" readonly="readonly" ></textarea></center>
									         <div style="height:50px;margin-top: 5px">
										         <div style="float:left; width:100%; font-size: 12px;font-weight: 500;height:25px;left:200px;">
										         	<!-- <li style="float: right; width: 150px">专家签字:<input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px"/></li> -->
										         </div>
										         <div style="float:right;width:300px;font-size: 12px;height:25px;"> 
										           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="year"/>年
										           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="month"/>月
										           <input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;" id="day"/>日
										         </div>
									         </div>
									     </td>
									</tr>
									</tfoot>
								 </table>
								 </div>
	                           <div class="popups_main" style="display: none;" id="table2">
									<table >
										<thead>
											<tr>
												<th class="one">评价指标</th>
												<th class="two">审核项目</th>
												<th class="three">自评分</th>
												<th class="four">满分值</th>
												<th class="five">支撑材料与自评分的相符性</th>
												<th class="six">应得分</th>
											</tr>
										</thead>
										<tbody id="tabletwo">
										</tbody>
										<tfoot>
											<tr>
												<td>合计</td>
												<td colspan="2"></td>
												<td><span id="xitScore"></span></td>
												<td></td>
												<td><input type="text"
													style="width:60px;padding-left: 35px;border: 0px" id="peneralhjScore" />
												</td>
											</tr>
											<tr>
												<td colspan="6"><span style="float: left;">&nbsp;&nbsp;总体评价意见：</span><br />
													<textarea rows="10" cols="150%" readonly="readonly"
														style="resize:none;border:0px;"
														id="peneralyjtext"></textarea>
													<div style="height:50px;margin-top: 5px">
														<div
															style="float:left; width:100%; font-size: 12px;font-weight: 500;height:25px;left:200px;">
															<!-- <li style="float: right; width: 150px">专家签字:<input type="text" style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px"/></li> -->
														</div>
														<div
															style="float:right;width:300px;font-size: 12px;height:25px;">
															<input type="text"
																style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;height:20px"
																id="peneralyear" />年 <input type="text"
																style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;height:20px"
																id="peneralmonth" />月 <input type="text"
																style="border-width: 0 0 1px 0;border-bottom-color: black;width:80px;height:20px"
																id="peneralday" />日
														</div>
													</div></td>
											</tr>
										</tfoot>
									</table>
                                 </div>
									<div class="popups-main" id="table3" style="display: none">
										<table class="popups3-table" id="popups3Table">
											<thead>
												<tr>
													<th class="popups3-main-th-one">指标</th>
													<th class="popups3-main-th-two">建议实地考查重点内容</th>

												</tr>
											</thead>
											<tbody id="tablethree" class="popups-tbody">

											</tbody>

										</table>
									</div>
								</div>
							</div>
						</div>
				</div>
				
				<div role="tabpanel" class="tab-pane" id="five">
					<table class="table table-bordered table-hover table-znj" id="sceneTable">
						<thead>
							<tr>
								<th style='width:10%'>专家</th>
								<th style="width:90%">考查内容</th>
							</tr>
						</thead>
						<tbody>
					   		<tr>
								<td style="color:red;text-align: center;" colspan="2">请选择条件</td>
							</tr>
						</tbody>
					</table>	
				</div>
				
			</div>
			<div class="col-md-1 btn-right-znj">
				<li class="btn-right-1-znj" onclick="openXCKC();">专家现场考察评分及意见</li>
				<li class="btn-right-2-znj" onclick="openMore();">更多</li>
			</div>
			<!-- <div id="AssessmentId" class="col-md-10 button-znj" style="display:none;">
			       <div id="submitAssessmentId">
			          <input  type = "button" value="提交" onclick="submitAssessment();"/>
			       </div>
			    <form id="AssessmentForm">
					<table class="table table-bordered table-znj">
							<thead>
								<tr>
									<th class="th-1">一级指标</th>
									<th class="th-2">二级指标</th>
									<th class="th-3">观测点</th>
									<th class="th-4">评分</th>
									<th class="th-5">个人考查评价意见（重点填写主要存在的问题）</th>
								</tr>
							</thead>
							<tbody id="AssessmentTbody">
							
							</tbody>
					</table>
				</form>	
			</div> -->
			<!-- <div id="AssessmentListId" class="col-md-10 button-znj" style="display: none;">
			        <table class="table table-bordered table-znj">
			        		<thead id="AssessmentListThead">
								
							</thead>
							<tbody id="AssessmentListTbody">
							
							</tbody>
			        </table>
			</div> -->
		<!-- 弹出层1 专家现场考查任务  start-->
		<div class="modal fade text-center" id="AssessmentId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display:none;">
			<div class="modal-dialog" role="document" style="display: inline-block; width: 1100px;">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" >专家现场考查任务</h4>
					</div>
					<div class="modal-body">
					   <form id="AssessmentForm">
					   <input type="hidden" name="accessSpecialtyId" id="accessSpecialtyId"/>
						<table class="table table-bordered table-hover table-znj" id="sceneTaskTable2">
							<thead>
								<tr>
									<th style='width:20%'>一级指标</th>
									<th style='width:20%'>二级指标</th>
									<th style='width:25%'>观测点</th>
									<th style='width:5%'>评分</th>
									<th style='width:30%'>个人考查评价意见（重点填写主要存在的问题）</th>
								</tr>
							</thead>
		
							<tbody id="AssessmentTbody">
							
							</tbody>
						</table>
						</form>
					</div>
					<div class="modal-footer"  id="submitAssessmentId">
						<button type="button" class="btn btn-primary" onclick="submitAssessment();">保存</button>
						<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹出层1 专家现场考查考查任务 end -->
		<!-- 弹出层2 更多  start-->
		<div class="modal fade text-center" id="AssessmentListId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display:none;">
			<div class="modal-dialog" role="document" style="display: inline-block; width: 1100px;">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" >专家现场考查任务</h4>
					</div>
					<div class="modal-body">
						<table class="table table-bordered table-hover table-znj" id="sceneTaskTable2">
							<thead id="AssessmentListThead">
								
							</thead>
							<tbody id="AssessmentListTbody">
							
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<!-- 弹出层2 更多 end-->
		</div>
	</div>
	</div>
	<div class="modal fade" id="showUserAndType" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="exampleModalLabel">网评结果表</h4>
				</div>
				<div>
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12 center-block" style="float: none;">
							<!-- 	<table class="table table-bordered table-2-znj">
									<thead>
										<tr>
											<th class="th-2-1-znj">姓名</th>
											<th class="th-2-2-znj">网评报告</th>
										</tr>
									</thead>
								</table> -->
								<div class="userAndTypebox">
								    <div class="userbox">
								        <center class="c_title">网评专家</center>
								       <ul id="userbox">
								          <li></li>
								       </ul>
								    
								    </div>
								    <div class="typebox">
								      <center class="c_title">网评结果表</center>
								      <ul id="typebox">
								         <li><input type="radio" name="opinionTable" value="1" checked="checked"/>&nbsp自评考核意见表</li>
								      <!--    <li><input type="radio" name="opinionTable" value="2"/>&nbsp自评分和支撑材料相符审核意见表</li>
								         <li><input type="radio" name="opinionTable" value="3"/>&nbsp建议实地考查重点</li> -->
								       </ul>
								    </div>
								</div>
							</div>
						</div>
					</div>
				</div>	
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
					<button type="button" class="btn btn-primary" onclick="showAssessmentResults();" >确定</button>
				</div>
			</div>
		</div>
	</div>
</body>
</html>