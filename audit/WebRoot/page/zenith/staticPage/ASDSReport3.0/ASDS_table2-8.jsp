<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat.js"></script>
	<script type="text/javascript" src="${chartCtx }/js/echarts/echarts-all.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_2_8">
				<thead>
					<tr>
						<td colspan="15">
							<h4>2.8专业带头人情况</h4>
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
						<td rowspan="3"></td> 
						<td rowspan="3">总计</td> 
						<td colspan="3">职称</td>
						<td colspan="3">学位</td>
						<td colspan="4">年龄</td>
						<td colspan="3">学缘</td>
					</tr>
					
					<tr>
						
						<td rowspan="2">正高级</td>
						<td rowspan="2">副高级</td>
						<td rowspan="2">其他</td>
						
						<td rowspan="2">博士</td>
						<td rowspan="2">硕士</td>
						<td rowspan="2">其他</td>
						
						<td rowspan="2">35岁及以下</td> 
						<td rowspan="2">36-45岁</td>
						<td rowspan="2">46-55岁</td>
						<td rowspan="2">56岁及以上</td>
						
						<td rowspan="2">本校</td> 
						<td colspan="2">外校</td>
					</tr>
					<tr>
						<td>境内</td>
						<td>境外</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td>数量</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>比例 %</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="15">
							<font color="red">※以上数据来源：表1-6-1教职工基本信息，表4-2专业培养计划表。详细数据可参考【附表6各教学单位专业带头人情况】。
							<br>
							【注】：此表只统计1-6-1本校在编教职工。
							
</font>							
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	
	<div id="table_2_8_bt_age" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	
	<div id="table_2_8_bt_xw" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	
	<div id="table_2_8_bt_xy" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	
	<div id="table_2_8_bt_zc" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	
	
	<script type="text/javascript">
		$(function(){
			formatEndYear("year");
			
			 $("#year").change(function(){
				
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table2-8",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							// hide
							hideLodding();
 							$("#table_2_8 tbody").html("<tr><td colspan=\"15\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
 							return;
						}
						$("#table_2_8 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_2_8 tbody tr:eq(0) td:eq(2)").html(result[0][2]);
						$("#table_2_8 tbody tr:eq(0) td:eq(3)").html(result[0][4]);
						$("#table_2_8 tbody tr:eq(0) td:eq(4)").html(result[0][6]);
						$("#table_2_8 tbody tr:eq(0) td:eq(5)").html(result[0][8]);
						$("#table_2_8 tbody tr:eq(0) td:eq(6)").html(result[0][10]);
						$("#table_2_8 tbody tr:eq(0) td:eq(7)").html(result[0][12]);
						$("#table_2_8 tbody tr:eq(0) td:eq(8)").html(result[0][14]);
						$("#table_2_8 tbody tr:eq(0) td:eq(9)").html(result[0][16]);
						$("#table_2_8 tbody tr:eq(0) td:eq(10)").html(result[0][18]);
						$("#table_2_8 tbody tr:eq(0) td:eq(11)").html(result[0][20]);
						$("#table_2_8 tbody tr:eq(0) td:eq(12)").html(result[0][22]);
						$("#table_2_8 tbody tr:eq(0) td:eq(13)").html(result[0][24]);
						$("#table_2_8 tbody tr:eq(0) td:eq(14)").html(result[0][26]);
						
						
						$("#table_2_8 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						$("#table_2_8 tbody tr:eq(1) td:eq(2)").html(valueFormat(result[0][3],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][5],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(4)").html(valueFormat(result[0][7],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(5)").html(valueFormat(result[0][9],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(6)").html(valueFormat(result[0][11],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(7)").html(valueFormat(result[0][13],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(8)").html(valueFormat(result[0][15],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(9)").html(valueFormat(result[0][17],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(10)").html(valueFormat(result[0][19],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(11)").html(valueFormat(result[0][21],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(12)").html(valueFormat(result[0][23],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(13)").html(valueFormat(result[0][25],1));
						$("#table_2_8 tbody tr:eq(1) td:eq(14)").html(valueFormat(result[0][27],1));

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
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDS_2-8_echarts.js"></script>
</body>
</html>
