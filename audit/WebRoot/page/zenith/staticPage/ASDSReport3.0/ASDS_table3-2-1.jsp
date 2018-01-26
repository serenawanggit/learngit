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
			<table id="table_3_2_1">
				<thead>
					<tr>
						<td colspan="5">
							<h4>3.2.1 教学行政用房情况</h4>
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
						<td>学校情况</td> 
						 <td>办学条件指标合格标准</td>
						<!--  <td>常模值</td> -->
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td rowspan="10">教学行政用房</td> 
						<td colspan="2">总面积（平方米）</td>
						<td></td>
						<td>-</td> 
						
					</tr>
					
					<tr>
						<td colspan="2">教学科研及辅助用房（平方米）</td>
						<td></td>
						 <td></td> 
					</tr>
					<tr>
						<td rowspan="8">其中</td>
						<td>教室（平方米）</td>
						<td></td>
						 <td></td> 
					</tr>
					<tr>
						<td>图书馆（平方米）</td>
						<td></td>
						<td></td> 
					</tr>
					<tr>
						<td>实验室、实习场所（平方米）</td>
						<td></td>
						 <td></td> 
					</tr>
					<tr>
						<td>专用科研用房（平方米）</td>
						<td></td>
						<td></td> 
					</tr>
					<tr>
						<td>体育馆（平方米）</td>
						<td></td>
						 <td></td> 
					</tr>
					<tr>
						<td>会堂（平方米）</td>
						<td></td>
						<td></td> 
					</tr>
					<tr>
						<td>行政用房（平方米）</td>
						<td></td>
						 <td></td> 
					</tr>
					<tr>
						<td>生均教学行政用房面积（平方米/生）</td>
						<td></td>
						 <td id="cxxx"></td> 
					</tr>
					
					<!-- 3 -->
					<tr>
						<td rowspan="2">运动场馆</td> 
						<td colspan="2">面积（平方米）</td>
						<td></td>
						 <td>-</td> 
					</tr>
					
					<tr>
						<td  colspan="2">数量（个）</td>
						<td></td>
						 <td>-</td> 
					</tr>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="5">
							<font color="red">※以上数据来源：表2-2教学行政用房面积，表2-10学生生活、运动条件。	</font>						
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
						key : "ASDS_table3-2-1",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
					    if(result.length<=0){
							hideLodding();
							
						$("#table_3_2_1 tbody tr:eq(0) td:eq(2)").html("");
						$("#table_3_2_1 tbody tr:eq(1) td:eq(1)").html("");
						$("#table_3_2_1 tbody tr:eq(2) td:eq(2)").html("");
						$("#table_3_2_1 tbody tr:eq(3) td:eq(1)").html("");
						$("#table_3_2_1 tbody tr:eq(4) td:eq(1)").html("");
						$("#table_3_2_1 tbody tr:eq(5) td:eq(1)").html("");
						$("#table_3_2_1 tbody tr:eq(6) td:eq(1)").html("");
						$("#table_3_2_1 tbody tr:eq(7) td:eq(1)").html("");
						$("#table_3_2_1 tbody tr:eq(8) td:eq(1)").html("");
						$("#table_3_2_1 tbody tr:eq(9) td:eq(1)").html("");
						$("#cxxx").html("14");
							return;
						} else {
						$("#table_3_2_1 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
						$("#table_3_2_1 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						
						$("#table_3_2_1 tbody tr:eq(2) td:eq(2)").html(result[0][2]);
						$("#table_3_2_1 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
						$("#table_3_2_1 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
						$("#table_3_2_1 tbody tr:eq(5) td:eq(1)").html(result[0][5]);
						$("#table_3_2_1 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
						$("#table_3_2_1 tbody tr:eq(7) td:eq(1)").html(result[0][7]);
						$("#table_3_2_1 tbody tr:eq(8) td:eq(1)").html(result[0][8]);
						$("#table_3_2_1 tbody tr:eq(9) td:eq(1)").html(result[0][9]);
						$("#cxxx").html(result[0][10]);
						hideLodding();
						}
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				
				//附加1
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table3-2-1-fj-qy-2",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						
						$("#table_3_2_1 tbody tr:eq(10) td:eq(2)").html(result[0][0]);
						$("#table_3_2_1 tbody tr:eq(11) td:eq(1)").html(result[0][1]);
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
