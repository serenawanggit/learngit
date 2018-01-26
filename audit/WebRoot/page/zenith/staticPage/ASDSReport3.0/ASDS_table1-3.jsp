<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

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
			 <table id="table_1_3">
				<thead>
					<tr>
						<td colspan="15">
							<h4>1.3校级教学管理人员结构</h4>
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
						<td colspan="5">职称</td> 
						<td colspan="4">最高学院</td> 
						<td colspan="4">年龄</td>
					</tr>
					
					<tr>
						<td>正高级</td>
						<td>副高级</td>
						<td>中级</td>
						<td>初级</td>
						<td>无职称</td>
						<td>博士</td>
						<td>硕士</td>
						<td>学士</td>
						<td>无学位</td>
						<td>35岁以下</td>
						<td>36-45岁</td>
						<td>46-55岁</td>
						<td>56以上</td>
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
						<td>比例(%)</td> 
						<td>/</td>
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
							<font color="red">※以上数据来源：表3-2相关管理人员基本信息，1-6-1教职工基本信息，1-3学校相关党政单位。<br/>
						</td>
					</tr>
				</tfoot>
			</table> 
			
		</div>
		
	</div> 
	 <div id="table_1_3_bt_zc" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	
	<div id="table_1_3_bt_zgxw" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	
	<div id="table_1_3_bt_age" style="border:1px solid #ccc;float: left;width:99%;height:400px;margin: 5px;"></div>
	<script type="text/javascript">
		$(function(){
			formatEndYear("year");
			
			$("#year").change(function(){
			    // show
				showLodding();
				$.ajax({
					async:false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table1-3",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result=="" || result==null){
							$("#table_1_3 tbody").html("<tr><td colspan=\"15\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
 						// hide
							hideLodding();
							return;
						}
						//数量
						$("#table_1_3 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_1_3 tbody tr:eq(0) td:eq(2)").html(result[0][2]);
						$("#table_1_3 tbody tr:eq(0) td:eq(3)").html(result[0][4]);
						$("#table_1_3 tbody tr:eq(0) td:eq(4)").html(result[0][6]);
						$("#table_1_3 tbody tr:eq(0) td:eq(5)").html(result[0][8]);
						$("#table_1_3 tbody tr:eq(0) td:eq(6)").html(result[0][10]);
						$("#table_1_3 tbody tr:eq(0) td:eq(7)").html(result[0][12]);
						$("#table_1_3 tbody tr:eq(0) td:eq(8)").html(result[0][14]);
						$("#table_1_3 tbody tr:eq(0) td:eq(9)").html(result[0][16]);
						$("#table_1_3 tbody tr:eq(0) td:eq(10)").html(result[0][18]);
						$("#table_1_3 tbody tr:eq(0) td:eq(11)").html(result[0][20]);
						$("#table_1_3 tbody tr:eq(0) td:eq(12)").html(result[0][22]);
						$("#table_1_3 tbody tr:eq(0) td:eq(13)").html(result[0][24]);
						$("#table_1_3 tbody tr:eq(0) td:eq(14)").html(result[0][26]);
						//百分比
						//$("#table_1_3 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(1)").html('/');
						$("#table_1_3 tbody tr:eq(1) td:eq(2)").html(valueFormat(result[0][3],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][5],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(4)").html(valueFormat(result[0][7],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(5)").html(valueFormat(result[0][9],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(6)").html(valueFormat(result[0][11],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(7)").html(valueFormat(result[0][13],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(8)").html(valueFormat(result[0][15],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(9)").html(valueFormat(result[0][17],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(10)").html(valueFormat(result[0][19],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(11)").html(valueFormat(result[0][21],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(12)").html(valueFormat(result[0][23],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(13)").html(valueFormat(result[0][25],1));
						$("#table_1_3 tbody tr:eq(1) td:eq(14)").html(valueFormat(result[0][27],1));
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
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDS_1-3_echarts.js"></script>
 </body>
</html>
