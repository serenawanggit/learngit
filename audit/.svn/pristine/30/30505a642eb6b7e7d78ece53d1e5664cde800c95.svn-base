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
			<table id="table_2_7">
				<thead>
					<tr>
						<td colspan="8">
							<h4>2.7.2教师进修、培养与交流情况</h4>
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
						<td rowspan="2">项目</td> 
						<td colspan="2">培训进修</td> 
						<td colspan="2">攻读学位</td> 
						<td colspan="2">交流</td> 
						<td rowspan="2">总计</td> 
					</tr>
					<tr>
						<td>境内</td>
						<td>境外</td>
						<td>攻读博士</td>
						<td>攻读硕士</td>
						<td>境内</td>
						<td>境外</td>
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
					</tr>
					
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="8">
							<font color="red">※ 以上数据来源：表3-4-2 教师培训进修、交流情况。。	</font>				
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
						key : "ASDS_table2-7",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_2_7 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						$("#table_2_7 tbody tr:eq(0) td:eq(1)").html(result[0][0]==""?0:result[0][0]);
						$("#table_2_7 tbody tr:eq(0) td:eq(2)").html(result[0][2]==""?0:result[0][2]);
						$("#table_2_7 tbody tr:eq(0) td:eq(3)").html(result[0][4]==""?0:result[0][4]);
						$("#table_2_7 tbody tr:eq(0) td:eq(4)").html(result[0][6]==""?0:result[0][6]);
						$("#table_2_7 tbody tr:eq(0) td:eq(5)").html(result[0][8]==""?0:result[0][8]);
						$("#table_2_7 tbody tr:eq(0) td:eq(6)").html(result[0][10]==""?0:result[0][10]);
						$("#table_2_7 tbody tr:eq(0) td:eq(7)").html(result[0][12]==""?0:result[0][12]);
						
						$("#table_2_7 tbody tr:eq(1) td:eq(1)").html(valueFormat(result[0][1],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(2)").html(valueFormat(result[0][3],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(3)").html(valueFormat(result[0][5],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(4)").html(valueFormat(result[0][7],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(5)").html(valueFormat(result[0][9],1));
						$("#table_2_7 tbody tr:eq(1) td:eq(6)").html(valueFormat(result[0][11],2));
						$("#table_2_7 tbody tr:eq(1) td:eq(7)").html(result[0][13]);
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
