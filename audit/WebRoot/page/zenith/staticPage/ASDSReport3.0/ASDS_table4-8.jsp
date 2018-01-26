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
			<div class="tb_title"><h4>培养过程</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_4_8">
				<thead>
					<tr>
						<td colspan="3">
							<h4>4.8 国外及港澳台侨学生情况</h4>
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
						<td>数量</td> 
					</tr>
				</thead>
				
				<tbody>
					
					<tr>
						<td rowspan="3">国外及港澳台学生在校本科生数</td> 
						<td>总数</td>
						<td>3</td>
					</tr>
					<tr>
						<td>其中:国外</td>
						<td>1</td>
					</tr>
					<tr>
						<td>港澳台侨</td>
						<td>2</td>
					</tr>
					<tr>
						<td colspan="2">当年交流本科生数</td> 
						<td>1</td>
					</tr>
					
					<tr>
						<td colspan="2">交流学生占全日制本科生比例（%）</td> 
						<td>22</td>
					</tr>
					
					<tr>
						<td colspan="2">其中:本校到境外</td> 
						<td>33</td>
					</tr>
					
					<tr>
						<td colspan="2">本校到境内</td> 
						<td>44</td>
					</tr>
					
					<tr>
						<td colspan="2">境内到本校</td> 
						<td>55</td>
					</tr>
					
					<tr>
						<td colspan="2">境外到本校</td> 
						<td>66</td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="3">
							<font color="red">※数据来源：6-1学生数量基本情况，表6-3-2本科生（境外）情况，表6-7本科生交流情况。
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
						key : "ASDS_table4-8",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
 							$("#table_4_8 tbody").html("<tr><td colspan=\"2\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							hideLodding();
							return;
						}
						/***/
						$("#table_4_8 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
						$("#table_4_8 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						$("#table_4_8 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
						$("#table_4_8 tbody tr:eq(3) td:eq(1)").html(result[0][3]);
						$("#table_4_8 tbody tr:eq(4) td:eq(1)").html(valueFormat(result[0][4], 1));
						$("#table_4_8 tbody tr:eq(5) td:eq(1)").html(result[0][5]);
						$("#table_4_8 tbody tr:eq(6) td:eq(1)").html(result[0][6]);
						$("#table_4_8 tbody tr:eq(7) td:eq(1)").html(result[0][7]);
						$("#table_4_8 tbody tr:eq(8) td:eq(1)").html(result[0][8]);
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
