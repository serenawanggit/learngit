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
			<table id="table_4_6">
				<thead>
					<tr>
						<td colspan="7">
							<h4>4.6 学生社团情况</h4>
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
						<td>社团类别</td> 
						<td>科技类社团</td> 
						<td>文艺类社团</td>
						<td>人文社会类社团</td> 
						<td>体育类社团</td> 
						<td>其他类社团</td>
						<td>总数</td>
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td></td> 
						<td></td>
						<td></td>
						<td></td> 
						<td></td>
						<td></td>
						<td></td>
					</tr>
					
					<tr>
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
						<td colspan="7">
							<font color="red">※ 以上数据来源：表 6-3 学生社团。		</font>						
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
						key : "ASDS_table4-6",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
/* 							$("#table_4_6 tbody").html("<tr><td colspan=\"7\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
 */							// hide
							hideLodding();
							return;
						}
						
						$("#table_4_6 tbody tr:eq(0) td:eq(0)").html("团队个数");
						$("#table_4_6 tbody tr:eq(1) td:eq(0)").html("参与人次数");
						
						$("#table_4_6 tbody tr:eq(0) td:eq(1)").html(result[0][0]);
						$("#table_4_6 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						
						$("#table_4_6 tbody tr:eq(0) td:eq(2)").html(result[0][6]);
						$("#table_4_6 tbody tr:eq(1) td:eq(2)").html(result[0][7]);
						
						$("#table_4_6 tbody tr:eq(0) td:eq(3)").html(result[0][2]);
						$("#table_4_6 tbody tr:eq(1) td:eq(3)").html(result[0][3]);
						
						$("#table_4_6 tbody tr:eq(0) td:eq(4)").html(result[0][4]);
						$("#table_4_6 tbody tr:eq(1) td:eq(4)").html(result[0][5]);
						
						$("#table_4_6 tbody tr:eq(0) td:eq(5)").html(result[0][8]);
						$("#table_4_6 tbody tr:eq(1) td:eq(5)").html(result[0][9]);
						
						$("#table_4_6 tbody tr:eq(0) td:eq(6)").html(result[0][10]);
						$("#table_4_6 tbody tr:eq(1) td:eq(6)").html(result[0][11]);
						
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
