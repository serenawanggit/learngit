<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>学生发展</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_5_9" >
				<thead>
					<tr>
						<td colspan="11">
							<h4>5.9 毕业生就业去向分布情况</h4>
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
						<td colspan="4">人数</td>
					</tr>
					
				</thead>
				
				<tbody>
					<tr>
						<td style="width: 12%" rowspan="5">1. 应届毕业生升学基本情况（人）</td> 
						<td style="width: 12%" colspan="2">免试推荐研究生</td>
						<td colspan="4"></td>
					</tr>
					<tr>
						<td rowspan="3">考研录取</td>
						<td>总数</td>
						<td colspan="4"></td>
					</tr>
					<tr>
						<td>考取本校</td>
						<td colspan="4"></td>
					</tr>
					<tr>
						<td>考取外校</td>
						<td colspan="4"></td>
					</tr>
					<tr>
						<td colspan="2">出国(境)留学</td>
						<td colspan="4"></td>
					</tr>
					<tr>
						<td style="width: 9.9%" rowspan="12">2. 应届毕业生就业基本情况（人）</td> 
						<td style="width: 9.9%" rowspan="2" colspan="2">就业去向</td>
						<td colspan="2" align="center">学校所在区域的总数</td>
						<td colspan="2" align="center">学校非所在地区域总数</td>
					</tr>
					<tr>
						<td align="center">数量</td>
						<td align="center">比例(%)</td>
						<td align="center">数量</td>
						<td align="center">比例(%)</td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">总数</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">政府机构</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">事业单位</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">企业</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">部队</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">参加国家地方项目就业</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">升学</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">灵活就业</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">自主创业</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td style="width: 9.9%" colspan="2">其他</td> 
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="11">
							<font color="red">以上数据来源：表6-5-1应届本科毕业生就业情况。
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
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table5-9",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
 							$("#table_5_9 tbody").html("<tr><td colspan=\"11\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");

							return;
						}
						$("#table_5_9 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
						$("#table_5_9 tbody tr:eq(1) td:eq(2)").html(result[0][1]);
						
						$("#table_5_9 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
						$("#table_5_9 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
						$("#table_5_9 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
						
						
						$("#table_5_9 tbody tr:eq(7) td:eq(1)").html(result[0][5]);
						$("#table_5_9 tbody tr:eq(7) td:eq(2)").html(result[0][6]);
						$("#table_5_9 tbody tr:eq(7) td:eq(3)").html(result[0][7]);
						$("#table_5_9 tbody tr:eq(7) td:eq(4)").html(result[0][8]);
						
						
						$("#table_5_9 tbody tr:eq(8) td:eq(1)").html(result[0][9]);
						$("#table_5_9 tbody tr:eq(8) td:eq(2)").html(result[0][10]);
						$("#table_5_9 tbody tr:eq(8) td:eq(3)").html(result[0][11]);
						$("#table_5_9 tbody tr:eq(8) td:eq(4)").html(result[0][12]);
						
						$("#table_5_9 tbody tr:eq(9) td:eq(1)").html(result[0][13]);
						$("#table_5_9 tbody tr:eq(9) td:eq(2)").html(result[0][14]);
						$("#table_5_9 tbody tr:eq(9) td:eq(3)").html(result[0][15]);
						$("#table_5_9 tbody tr:eq(9) td:eq(4)").html(result[0][16]);
						
						$("#table_5_9 tbody tr:eq(10) td:eq(1)").html(result[0][17]);
						$("#table_5_9 tbody tr:eq(10) td:eq(2)").html(result[0][18]);
						$("#table_5_9 tbody tr:eq(10) td:eq(3)").html(result[0][19]);
						$("#table_5_9 tbody tr:eq(10) td:eq(4)").html(result[0][20]);
						
						$("#table_5_9 tbody tr:eq(11) td:eq(1)").html(result[0][21]);
						$("#table_5_9 tbody tr:eq(11) td:eq(2)").html(result[0][22]);
						$("#table_5_9 tbody tr:eq(11) td:eq(3)").html(result[0][23]);
						$("#table_5_9 tbody tr:eq(11) td:eq(4)").html(result[0][24]);
						
						$("#table_5_9 tbody tr:eq(12) td:eq(1)").html(result[0][25]);
						$("#table_5_9 tbody tr:eq(12) td:eq(2)").html(result[0][26]);
						$("#table_5_9 tbody tr:eq(12) td:eq(3)").html(result[0][27]);
						$("#table_5_9 tbody tr:eq(12) td:eq(4)").html(result[0][28]);
						
						$("#table_5_9 tbody tr:eq(13) td:eq(1)").html(result[0][29]);
						$("#table_5_9 tbody tr:eq(13) td:eq(2)").html(result[0][30]);
						$("#table_5_9 tbody tr:eq(13) td:eq(3)").html(result[0][31]);
						$("#table_5_9 tbody tr:eq(13) td:eq(4)").html(result[0][32]);
						
						$("#table_5_9 tbody tr:eq(14) td:eq(1)").html(result[0][33]);
						$("#table_5_9 tbody tr:eq(14) td:eq(2)").html(result[0][34]);
						$("#table_5_9 tbody tr:eq(14) td:eq(3)").html(result[0][35]);
						$("#table_5_9 tbody tr:eq(14) td:eq(4)").html(result[0][36]);
						
						
						$("#table_5_9 tbody tr:eq(15) td:eq(1)").html(result[0][37]);
						$("#table_5_9 tbody tr:eq(15) td:eq(2)").html(result[0][38]);
						$("#table_5_9 tbody tr:eq(15) td:eq(3)").html(result[0][39]);
						$("#table_5_9 tbody tr:eq(15) td:eq(4)").html(result[0][40]);
						
						$("#table_5_9 tbody tr:eq(16) td:eq(1)").html(result[0][41]);
						$("#table_5_9 tbody tr:eq(16) td:eq(2)").html(result[0][42]);
						$("#table_5_9 tbody tr:eq(16) td:eq(3)").html(result[0][43]);
						$("#table_5_9 tbody tr:eq(16) td:eq(4)").html(result[0][44]);
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
