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
			<div class="tb_title"><h4>定位与目标</h4>
			</div>
		</div>
		<div class="tb_main">
			 <table border="1" id="table_1_2">
					<thead>
						<tr>
							<td colspan="22">
								<h4 id="filename">1.2 校领导年龄和学位结构</h4>
								<div class="chocieYear">
									<ul>
										<li>年份：
											<select class="select_tips tb_select" id="year">
											</select>
										</li>
									</ul>
								</div>
							</td>
						</tr>
						<tr>
							<td rowspan="2"></td> 
							<td rowspan="2">总计</td> 
							<td colspan="4">学位</td>
							<td colspan="4">年龄</td> 
						</tr>
						
						<tr>
							<td >博士</td>
							<td >硕士</td> 
							<td >学士</td> 
							<td >无学位</td>
							<td>35岁以下</td>
							<td>36-45岁</td>
							<td>46-35岁</td>
							<td>56岁以上</td>
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
						</tr>
						<tr>
							<td>比例(%)</td> 
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
						<td colspan="10">
						<font color="red">※以上数据来源：表3-1校领导基本信息，表1-6-1教职工基本信息。详细数据可参考【附表3校领导情况】。</font>
						</td>
					</tr>
				</tfoot>
			</table> 
			
		</div>
	</div>
	
	<div id="table_1_2_bt_age" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	
	<div id="table_1_2_bt_xw" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	
	
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
						key : "ASDS_table1-2",
						year : $("#year").val()
					},
					async:false,
					success : function(data){
						if(data.trim().length>0){
							var result = eval("("+data+")");
							 if(result=="" || result==null){
								$("#table_1_2 tbody").html("<tr><td colspan=\"10\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
								// hide
								hideLodding();
								return;
							} 
							//数量
							$("#table_1_2 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
							$("#table_1_2 tbody tr:eq(0) td:eq(2)").html(result[0][2]);
							$("#table_1_2 tbody tr:eq(0) td:eq(3)").html(result[0][4]);
							$("#table_1_2 tbody tr:eq(0) td:eq(4)").html(result[0][6]);
							$("#table_1_2 tbody tr:eq(0) td:eq(5)").html(result[0][8]);
							$("#table_1_2 tbody tr:eq(0) td:eq(6)").html(result[0][10]);
							$("#table_1_2 tbody tr:eq(0) td:eq(7)").html(result[0][12]);
							$("#table_1_2 tbody tr:eq(0) td:eq(8)").html(result[0][14]);
							$("#table_1_2 tbody tr:eq(0) td:eq(9)").html(result[0][16]);
							//百分比
							$("#table_1_2 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
							$("#table_1_2 tbody tr:eq(1) td:eq(2)").html(valueFormat(result[0][3],1));
							$("#table_1_2 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][5],1));
							$("#table_1_2 tbody tr:eq(1) td:eq(4)").html(valueFormat(result[0][7],1));
							$("#table_1_2 tbody tr:eq(1) td:eq(5)").html(valueFormat(result[0][9],1));
							$("#table_1_2 tbody tr:eq(1) td:eq(6)").html(valueFormat(result[0][11],1));
							$("#table_1_2 tbody tr:eq(1) td:eq(7)").html(valueFormat(result[0][13],1));
							$("#table_1_2 tbody tr:eq(1) td:eq(8)").html(valueFormat(result[0][15],1));
							$("#table_1_2 tbody tr:eq(1) td:eq(9)").html(valueFormat(result[0][17],1));
							// hide
							hideLodding();
						}else{
							$("#table_1_2 tbody").html("<tr><td colspan=\"10\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							hideLodding();
							return;
						}
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
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDS_1-2_echarts.js"></script>
</body>
</html>
