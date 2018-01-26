<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat2.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table>
				<thead>
					<tr>
						<td colspan="17">
							<h4>学校生师比及教师情况</h4>
							<div class="chocieYear">
								<ul>
									<li>年份：
										<select class="select_tips tb_select" id="year">
<!-- 												<option>2014</option> -->
<!-- 												<option>2013</option> -->
<!-- 												<option>2012</option> -->
<!-- 												<option>2011</option> -->
										</select>
									</li>
								</ul>
							</div>
						</td>
					</tr> 
					<tr>
						<td>123</td> 
						<td>123</td> 
						<td>123</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td>123</td> 
						<td>123</td>
						<td>123</td>
					</tr>
					
					<tr>
						<td>123</td> 
						<td>123</td>
						<td>123</td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="17">
							【注】:<br/>	
							1.“学生”数量中“其他”包括普通预科生、进修生、成人脱产班学生、夜大（业余）学生、函授学生和网络学生等。<br/>														
							2.折合在校生数=普通本、专科（高职)生数全日制硕士生数×1.5+全日制博士生数×2+留学生数×3+预科生数+进修生数+成人脱产班学生数+夜大（业余)学生数×0.3+函授生数×0.1（不包括自考生）。<br/>	
							3.“专任教师”指具有教师资格、专职从事教学工作的、只属于教学单位的人员。<br/>	
							4. 生师比=折合在校生数/教师总数（教师总数= 专任教师数+ 外聘教师数×0.5）。								
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
	<script type="text/javascript">
		$(function(){
			formatEndYear("year");
			
			$("#year").change(function(){
			    // show
				showLodding();
				$.ajax({
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-1",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						$("table tr:eq(2) td:eq(2)")
						// hide
						hideLodding();
					},
					error : function(){
						alert("系统忙，请稍后重试！！！");
					}
				});
			});
			
			// 调用方法
			$("#year").change();
		});
	</script>
</body>
</html>
