<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
			<table id="table_2_6">
				<thead>
					<tr>
						<td colspan="3">
							<h4>2.6 教师培养培训情况</h4>
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
						<td colspan="2">项目</td> 
						<td>数量</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td rowspan="7">当年参加培养培训教师数</td> 
					</tr>
					
					<tr>
						<td>总计</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：攻读博士学位</td>
						<td></td>
					</tr>
					
					<tr>
						<td>攻读博士学位占当年培养培训教师的比例（%）</td>
						<td></td>
					</tr>
					<tr>
						<td>境内进修人次数（人次）</td>
						<td></td>
					</tr>
					<tr>
						<td>境外进修人次数（人次）</td>
						<td></td>
					</tr>
					<tr>
						<td>参与教改立项课题（校级以上）人次数（人次）</td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="3">
							<font color="red">※ 以上数据来源：表 3-5-2 教师培训进修、交流情况，表 7-3-1 教育教学研究与改革项目。	</font>				
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
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-6",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						$("#table_2_6 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][0],2));
						$("#table_2_6 tbody tr:eq(2) td:eq(1)").html(valueFormat(result[0][1],2));
						$("#table_2_6 tbody tr:eq(3) td:eq(1)").html(valueFormat(result[0][2],1));
						$("#table_2_6 tbody tr:eq(4) td:eq(1)").html(valueFormat(result[0][3],2));
						$("#table_2_6 tbody tr:eq(5) td:eq(1)").html(valueFormat(result[0][4],2));
						$("#table_2_6 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][5],2));
						// hide
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
			}); 
			
			// 调用方法
			$("#year").change(); 
		});
	</script>
</body>
</html>
