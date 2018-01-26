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
			<div class="tb_title"><h4>培养过程</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_4_5">
				<thead>
					<tr>
						<td colspan="3">
							<h4>4.5 校园文化活动情况</h4>
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
						<td>数量(个)</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td rowspan="3">文化、学术讲座</td> 
						<td>总数</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：校级</td>
						<td></td>
					</tr>
					<tr>
						<td>院（系）级</td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="4">本科生课外科技、文化活动项目</td> 
						<td>总数</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：国家大学生创新性试验计划项目</td>
						<td></td>
					</tr>
					<tr>
						<td>省级项目</td>
						<td></td>
					</tr>
					<tr>
						<td>学校项目</td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="3">
							<font color="red">※ 以上数据来源：表 5-4 课外活动、讲座。		</font>					
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
						key : "ASDS_table4-5",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						$("#table_4_5 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
						$("#table_4_5 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						$("#table_4_5 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
						$("#table_4_5 tbody tr:eq(3) td:eq(2)").html(result[0][3]);
						$("#table_4_5 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
						$("#table_4_5 tbody tr:eq(5) td:eq(1)").html(result[0][5]);
						$("#table_4_5 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
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
