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
			<div class="tb_title"><h4>质量保障</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_6_3">
				<thead>
					<tr>
						<td colspan="3">
							<h4>6.3 教学管理队伍教学研究情况</h4>
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
						<td rowspan="3">教学管理人员主持教学成果奖（项）</td> 
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
					
					<tr>
						<td rowspan="8">教学管理人员主持教育教学研究与改革项目</td> 
						<td>当年立项总数</td>
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
						<td>校级</td> 
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
					<tr>
						<td>校级（万元）</td> 
						<td></td>
					</tr>
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="3">
							<font color="red">※ 以上数据来源： 表 7-3-1 教育教学研究与改革项目， 表 7-1 教学管理人员培训及成果， 表 3-3 相关管理人有信息表</font>							
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
						key : "ASDS_table6-3",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
					if(data.trim().length>0){
						var result = eval("("+data+")");
						$("#table_6_3 tbody tr:eq(0) td:eq(2)").html(result[0][0]);
						$("#table_6_3 tbody tr:eq(1) td:eq(1)").html(result[0][1]);
						$("#table_6_3 tbody tr:eq(2) td:eq(1)").html(result[0][2]);
						// hide
						hideLodding();
						}else{
						hideLodding();
						return;
						
						}
					},
					error : function(){
						hideLodding();alert("系统忙，请稍后重试！！！");
					}
				});
				//qy
				$.ajax({
					async :false,
					url : "/CHART/qualityReport/qualityReport_ASDSGetListByYear.htm",
					type : "POST",
					data : {
						key : "ASDS_table6-3-qy",
						year : $("#year").val(),
						num:2
					},
					success : function(data){
					if(data.trim().length>0){
						var result = eval("("+data+")");
						$("#table_6_3 tbody tr:eq(3) td:eq(2)").html(result[0][0]);
						$("#table_6_3 tbody tr:eq(4) td:eq(1)").html(result[0][1]);
						$("#table_6_3 tbody tr:eq(5) td:eq(1)").html(result[0][2]);
						$("#table_6_3 tbody tr:eq(6) td:eq(1)").html(result[0][3]);
						$("#table_6_3 tbody tr:eq(7) td:eq(1)").html(valueFormat(result[0][4],2));
						$("#table_6_3 tbody tr:eq(8) td:eq(1)").html(result[0][5]);
						$("#table_6_3 tbody tr:eq(9) td:eq(1)").html(valueFormat(result[0][6],2));
						$("#table_6_3 tbody tr:eq(10) td:eq(1)").html(valueFormat(result[0][7],2));
						// hide
						hideLodding();
						}else{
						hideLodding();
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
