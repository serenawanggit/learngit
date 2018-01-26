<html xmlns="http:www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-W3CDTD XHTML 1.0 TransitionalEN" "http:www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat.js"></script>
</head>

<body>
<!-- 	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div> -->
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教师队伍</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_2_10" broder="1">
				<thead>
					<tr>
						<td colspan="3">
							<h4>2.10 教师教育教学改革与成果</h4>
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
						<td colspan="2">项 目</td> 
						<td>数 量</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td rowspan="3">教师主持教学成果奖（项）</td> 
						<td>总数</td>
						<td></td>
					</tr>
					
					<tr>
						<td>其中：国家级</td>
						<td></td>
					</tr>
					<tr>
						<td>省部级</td>
						<td></td>
					</tr>
					
					<!-- 2 -->
					
					<tr>
						<td rowspan="6">教师主持教育教学研究与改革项目</td> 
						<td>项目总数</td>
						<td></td>
					</tr>
					
					<tr>
						<td>其中：国家级</td>
						<td></td>
					</tr>
					<tr>
						<td>省部级</td>
						<td></td>
					</tr>
					<tr>
						<td>当年经费（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td>其中：国家级（万元）</td>
						<td></td>
					</tr>
					<tr>
						<td>省部级（万元）</td>
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="3">
							<font color="red">※ 以上数据来源：表7-3-1 教育教学研究与改革项目，表7-3-2 教学成果奖。	</font>							
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
				
				$.ajax({
					async :false,
 					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
 					type : "POST",
 					data : {
 						key : "ASDS_table2-10",
 						year : $("#year").val()
 					},
 					success : function(data){
 						var result = eval("("+data+")");
 						if(result==""||result==null){
							// hide
							hideLodding();
 							$("#table_2_10 tbody").html("<tr><td colspan=\"14\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
 							return;
						}
						
 						$("#table_2_10 tbody tr:eq(0) td:eq(2)").html(valueFormat(result[0][0],2));
 						$("#table_2_10 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],2));
 						$("#table_2_10 tbody tr:eq(2) td:eq(1)").html(valueFormat(result[0][2],2));
 						$("#table_2_10 tbody tr:eq(3) td:eq(2)").html(valueFormat(result[0][3],2));
 						$("#table_2_10 tbody tr:eq(4) td:eq(1)").html(valueFormat(result[0][4],2));
 						$("#table_2_10 tbody tr:eq(5) td:eq(1)").html(valueFormat(result[0][5],2));
 						$("#table_2_10 tbody tr:eq(6) td:eq(1)").html(valueFormat(result[0][6],2));
 						$("#table_2_10 tbody tr:eq(7) td:eq(1)").html(valueFormat(result[0][7],2));
 						$("#table_2_10 tbody tr:eq(8) td:eq(1)").html(valueFormat(result[0][8],2));
 						$("#table_2_10 tbody tr:eq(9) td:eq(1)").html(valueFormat(result[0][9],2));
 						$("#table_2_10 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][10],2));
						//hide
 						hideLodding();
 					},
 					error : function(){
 						hideLodding();alert("系统忙，请稍后重试！！！");
 					}
 				});
 			});
			
			//调用方法
 			$("#year").change();
		});
	</script>
</body>
</html>
