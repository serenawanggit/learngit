<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8"%>
<%@include file="/page/common/lib.jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	
	<link rel="stylesheet" href="${chartCtx }/css/ASDSReport.css" type="text/css"></link>
	
	<script type="text/javascript" src="${chartCtx }/js/ASDSReport/ASDSReportFormat2.js"></script>
</head>

<body>
	<div class='loadding'><img src='${chartCtx}/images/lodding.gif'/></div>
	<div class="tb_box">
		<div class="tb_top">
			<div class="tb_title"><h4>教学资源</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_3_2_2">
				<thead>
					<tr>
						<td colspan="4">
							<h4>3.2.2 教学、科研仪器设备情况</h4>
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
						<td  colspan="2" width="60%">项目</td> 
						<td>学校情况</td> 
						 <td>办学条件指标</td>
						
					</tr>
					<tr>
					<td></td>
					<td></td>
					<td></td>
					<td>合格标准</td>
					</tr> 
				</thead>
				
				<tbody>
					
					<tr>
						<td rowspan="4">教学、科研仪器设备</td> 
						<td>资产总值（万元）</td>
						<td></td>
						<td>-</td>
						<!-- <td>/</td> -->
					</tr>
					
					<tr>
						<td>生均（万元）</td> 
						<td></td>
						 <td>5000元</td>
						<!--<td>/</td> -->
					</tr>
					<tr>
						<td>当年新增（万元）</td> 
						<td></td>
						<td></td>
						<!-- <td>/</td> -->
					</tr>
					<tr>
						<td>当年新增所占比例（％）</td> 
						<td></td>
						 <td>10%</td>
						<!--<td>/</td> -->
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="5">
							<font color="red">※ 以上数据来源：表 2-9 固定资产。		</font>					
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
						key : "ASDS_table3-2-2",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
					if(data.trim().length>0){
						var result = eval("("+data+")");
							$("#table_3_2_2 tbody tr:eq(0) td:eq(2)").html(valueFormat(result[0][0],2));
							$("#table_3_2_2 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],2));
							$("#table_3_2_2 tbody tr:eq(2) td:eq(1)").html(valueFormat(result[0][2],2));
							$("#table_3_2_2 tbody tr:eq(3) td:eq(1)").html(valueFormat(result[0][3],1));
						// hide
						hideLodding();
						}else{
/* 							$("#table_3_2_2 tbody").html("<tr><td colspan=\"5\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
 */							hideLodding();
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
</body>
</html>
