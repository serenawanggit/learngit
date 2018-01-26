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
			<table id="table_5_6">
				<thead>
					<tr>
						<td colspan="3">
							<h4>5.6 学生发展情况</h4>
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
						<td colspan="2">项目</td> 
						<td>内容</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td rowspan="4">学科竞赛获奖(项)</td> 
						<td>总数</td>
						<td></td>
					</tr>
					
					<tr>
						<td>其中:国际级</td> 
						<td></td>
					</tr>
					<tr>
						<td>国家级</td> 
						<td></td>
					</tr>
					<tr>
						<td>省部级</td> 
						<td></td>
					</tr>
					
					<tr>
						<td rowspan="4">本科生创新活动,技能竞赛获奖</td> 
						<td>总数</td>
						<td></td>
					</tr>
					
					<tr>
						<td>其中:国际级</td> 
						<td></td>
					</tr>
					<tr>
						<td>国家级</td> 
						<td></td>
					</tr>
					<tr>
						<td>省部级</td> 
						<td></td>
					</tr>
					
					<tr>
						<td rowspan="4">文艺、体育竞赛获奖</td> 
						<td>总数</td>
						<td></td>
					</tr>
					
					<tr>
						<td>其中:国际级</td> 
						<td></td>
					</tr>
					<tr>
						<td>国家级</td> 
						<td></td>
					</tr>
					<tr>
						<td>省部级</td> 
						<td></td>
					</tr>
					
					<tr>
						<td colspan="2">学生发表学术论文（篇）</td> 
						<td></td>
					</tr>
					<tr>
						<td colspan="2">学生发表作品数（篇、册）</td> 
						<td></td>
					</tr>
					<tr>
						<td colspan="2">学生获准专利数（项）</td> 
						<td></td>
					</tr>
					
					<tr>
						<td rowspan="2">英语等级考试</td> 
						<td>英语四级考试累计通过率（ %）</td>
						<td></td>
					</tr>
					
					<tr>
						<td>英语六级考试累计通过率（ %）</td> 
						<td></td>
					</tr>
					<tr>
						<td colspan="2">体质合格率（ %）</td> 
						<td></td>
					</tr>
					<tr>
						<td colspan="2">参加国际会议（人次）</td> 
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="3">
							<font color="red">※ 以上数据来源：表 6-6 本科生学习成效。	</font>							
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
						key : "ASDS_table5-6",
						year : $("#year").val()
					},
					success : function(data){
					  var result = eval("("+data+")");
						if(result==""||result==null){
						$("#table_5_6 tbody").html("<tr><td colspan=\"3\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");

							hideLodding();
							return;
						}
							if(data.trim().length>0){
						
						$("#table_5_6 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
						$("#table_5_6 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						$("#table_5_6 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
						$("#table_5_6 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
						$("#table_5_6 tbody tr:eq(4) td:eq(2)").html(result[0][4]);
						$("#table_5_6 tbody tr:eq(5) td:eq(1)").html(result[0][5]);
						$("#table_5_6 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
						$("#table_5_6 tbody tr:eq(7) td:eq(1)").html(result[0][7]);
						$("#table_5_6 tbody tr:eq(8) td:eq(2)").html(result[0][8]);
						
						$("#table_5_6 tbody tr:eq(9) td:eq(1)").html(result[0][9]);
						$("#table_5_6 tbody tr:eq(10) td:eq(1)").html(result[0][10]);
						$("#table_5_6 tbody tr:eq(11) td:eq(1)").html(result[0][11]);
						
						$("#table_5_6 tbody tr:eq(12) td:eq(1)").html(valueFormat(result[0][12],2));
						$("#table_5_6 tbody tr:eq(13) td:eq(1)").html(valueFormat(result[0][13],2));
						
						$("#table_5_6 tbody tr:eq(14) td:eq(1)").html(result[0][14]);
						$("#table_5_6 tbody tr:eq(15) td:eq(2)").html(result[0][15]);
						
						$("#table_5_6 tbody tr:eq(16) td:eq(1)").html(result[0][16]);
						$("#table_5_6 tbody tr:eq(17) td:eq(1)").html(result[0][17]);
						$("#table_5_6 tbody tr:eq(18) td:eq(1)").html(result[0][18]);
					
					}else{
					}
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
