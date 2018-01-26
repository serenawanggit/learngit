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
			<div class="tb_title"><h4>培养过程</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_4_7">
				<thead>
					<tr>
						<td colspan="2">
							<h4>4.7 学生国际交流情况</h4>
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
						<td>项目</td> 
						<td>数量</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td>国外及港台学生在校本科生数</td> 
						<td></td>
					</tr>
					
					<tr>
						<td>当年交流本科生数</td> 
						<td></td>
					</tr>
					
					<tr>
						<td>占全日制本科生比例(%)</td> 
						<td></td>
					</tr>
					
					<tr>
						<td>其中:本校到境外</td> 
						<td></td>
					</tr>
					
					<tr>
						<td>本校到境内</td> 
						<td></td>
					</tr>
					
					<tr>
						<td>境内到本校</td> 
						<td></td>
					</tr>
					
					<tr>
						<td>境外到本校</td> 
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="2">
							<font color="red">※以上数据来源：表 6-2-2 本科生交流情况， 表 6-1-4 国外及港澳台学生情况表， 6-1-1 学生数量基本情况。	</font>							
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
						key : "ASDS_table4-7",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
/* 							$("#table_4_7 tbody").html("<tr><td colspan=\"2\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
 */							// hide
							hideLodding();
							return;
						}
						$("#table_4_7 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_4_7 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						$("#table_4_7 tbody tr:eq(2) td:eq(1)").html(valueFormat(result[0][2],1));
						$("#table_4_7 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
						$("#table_4_7 tbody tr:eq(4) td:eq(1)").html(result[0][4]);
						$("#table_4_7 tbody tr:eq(5) td:eq(1)").html(result[0][5]);
						$("#table_4_7 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
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
