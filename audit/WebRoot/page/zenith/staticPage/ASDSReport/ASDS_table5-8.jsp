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
			<div class="tb_title"><h4>学生发展</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_5_8">
				<thead>
					<tr>
						<td colspan="11">
							<h4>5.8 毕业生就业去向分布情况</h4>
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
						<td style="width: 9.9%"></td> 
						<td style="width: 9.9%">政府机构</td> 
						<td style="width: 9.9%">事业单位</td>
						<td style="width: 9.9%">企业</td> 
						<td style="width: 9.9%">部队</td> 
						<td style="width: 9.9%">灵活就业</td>
						<td style="width: 9.9%">升学</td> 
						<td style="width: 9.9%">参加国家地方项目就业</td> 
						<td style="width: 9.9%">其他</td>
						<td style="width: 9.9%">总计</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td style="width: 9.9%">数量</td> 
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td> 
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td> 
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td> 
					</tr>
					
					<tr>
						<td style="width: 9.9%">比例(%)</td>
						<td style="width: 9.9%"></td> 
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td> 
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td> 
						<td style="width: 9.9%"></td>
						<td style="width: 9.9%"></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="11">
							<font color="red">※ 以上数据来源：表 6-1-8 应届本科毕业生就业情况。	</font>		
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
						key : "ASDS_table5-8",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
/* 							$("#table_5_8 tbody").html("<tr><td colspan=\"11\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
 */							// hide
							hideLodding();
							return;
						}
						$("#table_5_8 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_5_8 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(2)").html(result[0][2]);
						$("#table_5_8 tbody tr:eq(1) td:eq(2)").html(valueFormat(result[0][3],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(3)").html(result[0][4]);
						$("#table_5_8 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][5],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(4)").html(result[0][6]);
						$("#table_5_8 tbody tr:eq(1) td:eq(4)").html(valueFormat(result[0][7],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(5)").html(result[0][8]);
						$("#table_5_8 tbody tr:eq(1) td:eq(5)").html(valueFormat(result[0][9],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(6)").html(result[0][10]);
						$("#table_5_8 tbody tr:eq(1) td:eq(6)").html(valueFormat(result[0][11],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(7)").html(result[0][12]);
						$("#table_5_8 tbody tr:eq(1) td:eq(7)").html(valueFormat(result[0][13],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(8)").html(result[0][14]);
						$("#table_5_8 tbody tr:eq(1) td:eq(8)").html(valueFormat(result[0][15],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(9)").html(result[0][16]);
						$("#table_5_8 tbody tr:eq(1) td:eq(9)").html(valueFormat(result[0][17],1));
						
						$("#table_5_8 tbody tr:eq(0) td:eq(10)").html(result[0][18]);
						
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
