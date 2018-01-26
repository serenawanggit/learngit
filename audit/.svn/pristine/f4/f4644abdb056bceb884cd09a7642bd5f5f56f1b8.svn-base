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
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table border="1" id="table_2_6">
				<thead>
					<tr>
						<td colspan="9">
							<h4>2.6.1教授、副教授讲授本科课程比例</h4>
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

				</thead>
				
				<tbody>
					
						<tr>
					    <td rowspan="2">类别</td> 
					    <td rowspan="2">总人数</td> 
						<td>项目</td> 
						<td>授课人数</td> 
						<td>百分比(%)</td>
						<td>课程门次(门次)</td> 
						<td>百分比(%)</td>
						<td>课程门数(门)</td> 
						<td>百分比(%)</td>
					</tr>
					
					
					<tr>
						<td >学校</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
						<td rowspan="4">教授</td>
						<td rowspan="4"></td> 
						<td>授课教授</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：公共必修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>公共选修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>专业课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td rowspan="4">副教授</td> 
						<td rowspan="4"></td>
						<td>授课副教授</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>其中：公共必修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>公共选修课</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>专业课</td> 
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
						<td colspan="9">
							<font color="red">※以上数据来源：表5-1-1开课情况,表1-6-1教职工基本信息。
					<br>
					【注】：
					   1.课程门次数是对开课号进行统计。<br>
					   2.教授、副教授的总人数不含外聘人员。<br>
					   3.授课人数百分比是与教授（副教授）总人数的比值；课程门（次）数百分比是与学校课程门（次）数的比值。<br>
						</font>
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
						key : "ASDS_table2-6-1",
						year : $("#year").val()
					},
					
					success : function(data){
						var result = eval("("+data+")");
						console.info(result);
						if(result==""||result==null){
							hideLodding();
							$("#table_2_6 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						$("#table_2_6 tbody tr:eq(1) td:eq(1)").html(result[0][0]);
						$("#table_2_6 tbody tr:eq(1) td:eq(2)").html(result[0][1]);
						$("#table_2_6 tbody tr:eq(1) td:eq(3)").html(result[0][2]);
						$("#table_2_6 tbody tr:eq(1) td:eq(4)").html(result[0][3]);
						$("#table_2_6 tbody tr:eq(1) td:eq(5)").html(result[0][4]);
						$("#table_2_6 tbody tr:eq(1) td:eq(6)").html(result[0][5]);
						
						$("#table_2_6 tbody tr:eq(2) td:eq(1)").html(result[0][54]);
						$("#table_2_6 tbody tr:eq(2) td:eq(3)").html(result[0][6]);
						$("#table_2_6 tbody tr:eq(2) td:eq(4)").html(valueFormat(result[0][7], 1));
						$("#table_2_6 tbody tr:eq(2) td:eq(5)").html(result[0][8]);
						$("#table_2_6 tbody tr:eq(2) td:eq(6)").html(valueFormat(result[0][9], 1));
						$("#table_2_6 tbody tr:eq(2) td:eq(7)").html(result[0][10]);
						$("#table_2_6 tbody tr:eq(2) td:eq(8)").html(valueFormat(result[0][11], 1));
						
						$("#table_2_6 tbody tr:eq(3) td:eq(1)").html(result[0][12]);
						$("#table_2_6 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][13], 1));
						$("#table_2_6 tbody tr:eq(3) td:eq(3)").html(result[0][14]);
						$("#table_2_6 tbody tr:eq(3) td:eq(4)").html(valueFormat(result[0][15], 1));
						$("#table_2_6 tbody tr:eq(3) td:eq(5)").html(result[0][16]);
						$("#table_2_6 tbody tr:eq(3) td:eq(6)").html(valueFormat(result[0][17], 1));
						
						$("#table_2_6 tbody tr:eq(4) td:eq(1)").html(result[0][18]);
						$("#table_2_6 tbody tr:eq(4) td:eq(2)").html(valueFormat(result[0][19], 1));
						$("#table_2_6 tbody tr:eq(4) td:eq(3)").html(result[0][20]);
						$("#table_2_6 tbody tr:eq(4) td:eq(4)").html(valueFormat(result[0][21], 1));
						$("#table_2_6 tbody tr:eq(4) td:eq(5)").html(result[0][22]);
						$("#table_2_6 tbody tr:eq(4) td:eq(6)").html(valueFormat(result[0][23], 1));
						
						
						$("#table_2_6 tbody tr:eq(5) td:eq(1)").html(result[0][24]);
						$("#table_2_6 tbody tr:eq(5) td:eq(2)").html(valueFormat(result[0][25], 1));
						$("#table_2_6 tbody tr:eq(5) td:eq(3)").html(result[0][26]);
						$("#table_2_6 tbody tr:eq(5) td:eq(4)").html(valueFormat(result[0][27], 1));
						$("#table_2_6 tbody tr:eq(5) td:eq(5)").html(result[0][28]);
						$("#table_2_6 tbody tr:eq(5) td:eq(6)").html(valueFormat(result[0][29], 1));
						
						$("#table_2_6 tbody tr:eq(6) td:eq(1)").html(result[0][55]);
						$("#table_2_6 tbody tr:eq(6) td:eq(3)").html(result[0][30]);
						$("#table_2_6 tbody tr:eq(6) td:eq(4)").html(valueFormat(result[0][31], 1));
						$("#table_2_6 tbody tr:eq(6) td:eq(5)").html(result[0][32]);
						$("#table_2_6 tbody tr:eq(6) td:eq(6)").html(valueFormat(result[0][33], 1));
						$("#table_2_6 tbody tr:eq(6) td:eq(7)").html(result[0][34]);
						$("#table_2_6 tbody tr:eq(6) td:eq(8)").html(valueFormat(result[0][35], 1));
						
						
						$("#table_2_6 tbody tr:eq(7) td:eq(1)").html(result[0][36]);
						$("#table_2_6 tbody tr:eq(7) td:eq(2)").html(valueFormat(result[0][37], 1));
						$("#table_2_6 tbody tr:eq(7) td:eq(3)").html(result[0][38]);
						$("#table_2_6 tbody tr:eq(7) td:eq(4)").html(valueFormat(result[0][39], 1));
						$("#table_2_6 tbody tr:eq(7) td:eq(5)").html(result[0][40]);
						$("#table_2_6 tbody tr:eq(7) td:eq(6)").html(valueFormat(result[0][41], 1));
						
						
						$("#table_2_6 tbody tr:eq(8) td:eq(1)").html(result[0][42]);
						$("#table_2_6 tbody tr:eq(8) td:eq(2)").html(valueFormat(result[0][43], 1));
						$("#table_2_6 tbody tr:eq(8) td:eq(3)").html(result[0][44]);
						$("#table_2_6 tbody tr:eq(8) td:eq(4)").html(valueFormat(result[0][45], 1));
						$("#table_2_6 tbody tr:eq(8) td:eq(5)").html(result[0][46]);
						$("#table_2_6 tbody tr:eq(8) td:eq(6)").html(valueFormat(result[0][47], 1));
						
						
						$("#table_2_6 tbody tr:eq(9) td:eq(1)").html(result[0][48]);
						$("#table_2_6 tbody tr:eq(9) td:eq(2)").html(valueFormat(result[0][49], 1));
						$("#table_2_6 tbody tr:eq(9) td:eq(3)").html(result[0][50]);
						$("#table_2_6 tbody tr:eq(9) td:eq(4)").html(valueFormat(result[0][51], 1));
						$("#table_2_6 tbody tr:eq(9) td:eq(5)").html(result[0][52]);
						$("#table_2_6 tbody tr:eq(9) td:eq(6)").html(valueFormat(result[0][53], 1));
						
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
