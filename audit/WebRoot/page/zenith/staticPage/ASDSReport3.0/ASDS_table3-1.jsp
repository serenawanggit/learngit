<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教学资源</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_3_1">
				<thead>
					<tr>
						<td colspan="4">
							<h4>3.1 教学经费投入情况</h4>
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
						<td colspan="3">项目</td> 
						<td>数量</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td colspan="3">学校教育经费总额（万元）</td> 
						<td></td>
					</tr>
					
					<tr>
						<td colspan="3">教学经费总额（万元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="3">学校年度教学改革与建设专项经费（万元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td rowspan="6">教育事业收入</td>
						<td colspan="2">经常性预算内教育事业费收入（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="2">本科生生均拨款总额</td>
						<td>其中：国家（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td>地方（万元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="2">本科学费收入（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="2">教改专项拨款（万元）</td>
						<td>其中：国家（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td>地方（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="3">教学日常运行支出</td>
						<td colspan="2">总额(万元)</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">教学日常支出占经常性预算内教育事业费拨款与本专科生学费收入之和的比例(%)</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">生均教学日常运行支出（元）</td>
						<td></td>
					</tr>
					
					<tr>
						<td colspan="3">教学改革支出（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3">专业建设支出（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3">实践教学支出（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="3">生均实践教学经费（元）</td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="4">
							<font color="red">※以上数据来源：表2-9-1教学经费概况，表2-9-2本科教育经费收支情况，表6-1学生数量基本情况。</font>					
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
						key : "ASDS_table3-1",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result=="" || result==null){
							$("#table_3_1 tbody").html("<tr><td colspan=\"4\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							// hide
							hideLodding();
							return;
						}
						$("#table_3_1 tbody tr:eq(0) td:eq(1)").html(valueFormat(result[0][0],2));
						$("#table_3_1 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],2));
						$("#table_3_1 tbody tr:eq(2) td:eq(1)").html(valueFormat(result[0][2],2));
				/* 		$("#table_3_1 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][3],2));
						$("#table_3_1 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][4],2));
						$("#table_3_1 tbody tr:eq(5) td:eq(1)").html(valueFormat(result[0][5],2));
						$("#table_3_1 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][6],2));
						$("#table_3_1 tbody tr:eq(7) td:eq(1)").html(valueFormat(result[0][7],2));
						$("#table_3_1 tbody tr:eq(8) td:eq(2)").html(valueFormat(result[0][8],2));
						$("#table_3_1 tbody tr:eq(9) td:eq(1)").html(valueFormat(result[0][9],2));
						$("#table_3_1 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][10],2));
						$("#table_3_1 tbody tr:eq(11) td:eq(1)").html(valueFormat(result[0][11],2));
						$("#table_3_1 tbody tr:eq(12) td:eq(1)").html(valueFormat(result[0][12],2));
						$("#table_3_1 tbody tr:eq(13) td:eq(1)").html(valueFormat(result[0][13],2));
						$("#table_3_1 tbody tr:eq(14) td:eq(1)").html(valueFormat(result[0][14],2)); */
						hideLodding();
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				//附加
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-1-fj-qyzb",
						year : $("#year").val()
					},
					success : function(data){
				
						if(data.trim().length>0){
						var result = eval("("+data+")");
						$("#table_3_1 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][0],2));
						$("#table_3_1 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][1],2));
						$("#table_3_1 tbody tr:eq(5) td:eq(1)").html(valueFormat(result[0][2],2));
						$("#table_3_1 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][3],2));
						$("#table_3_1 tbody tr:eq(7) td:eq(2)").html(valueFormat(result[0][4],2));
						$("#table_3_1 tbody tr:eq(8) td:eq(1)").html(valueFormat(result[0][5],2));
						$("#table_3_1 tbody tr:eq(9) td:eq(2)").html(valueFormat(result[0][6],2));
						$("#table_3_1 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][7]*100,2));
						$("#table_3_1 tbody tr:eq(11) td:eq(1)").html(valueFormat(result[0][8],2));
						$("#table_3_1 tbody tr:eq(12) td:eq(1)").html(valueFormat(result[0][9],2));
						$("#table_3_1 tbody tr:eq(13) td:eq(1)").html(valueFormat(result[0][10],2));
						$("#table_3_1 tbody tr:eq(14) td:eq(1)").html(valueFormat(result[0][11],2));
						$("#table_3_1 tbody tr:eq(15) td:eq(1)").html(valueFormat(result[0][12],2));
						hideLodding();
						}else{
							hideLodding();
							return;
						}
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				
				// hide
				hideLodding();
			});
			
			// 调用方法
			$("#year").change();
		});
	</script>
</body>
</html>
