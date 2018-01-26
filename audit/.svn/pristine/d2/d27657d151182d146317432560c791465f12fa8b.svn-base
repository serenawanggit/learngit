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
			<div class="tb_title"><h4>详细数据附表</h4>
			</div>
		</div>
		<div class="tb_main">
			<table id="table_F_6">
				<thead>
					<tr>
						<td colspan="17">
							<h4>附表 6 各教学单位专业带头人情况</h4>
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
						<td rowspan="3">序 号</td> 
						<td rowspan="3">单位</td>
						<td rowspan="3">院系校内专业数</td> 
						<td colspan="7">专业带头人</td>
					</tr>
					<tr>
						<td rowspan="2">总人数</td> 
						<td colspan="2">高级职称</td>
						<td colspan="2">获得博士学位</td>
						<td colspan="2">学缘为外校</td>
					</tr>
					<tr>
						<td >人数</td> 
						<td >比例(%)</td>
						<td >人数</td> 
						<td >比例(%)</td>
						<td >人数</td> 
						<td >比例(%)</td>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
				
				<tfoot>
					<tr>
						<td colspan="10">
							<font color="red">※以上数据来源： 表1-4学校教学科研单位，表1-5-1专业基本情况，表4-2专业培养计划表，表1-6-1教职工基本信息。
							<br/>
【注】：1.此表中本科专业数按照校内实际专业统计，包含专业方向。<br/>
2.此表为表2.8 专业带头人情况的详细信息。
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
						key : "ASDS_tableF-6",
						year : $("#year").val()
					},
					success : function(data){
						var result = eval("("+data+")");
						if(result==""||result==null){
							hideLodding();
							$("#table_F_6 tbody").html("<tr><td colspan=\"16\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
							return;
						}
						var html="";
						for ( var i = 0; i < result.length; i++) {
							html+="<tr>";
								html+="<td>"+(i+1)+"</td>";
								html+="<td>"+result[i][0]+"</td>";
								html+="<td>"+result[i][1]+"</td>";
								html+="<td>"+result[i][2]+"</td>";
								html+="<td>"+result[i][3]+"</td>";
								html+="<td>"+valueFormat(result[i][4],2)+"</td>";
								html+="<td>"+result[i][5]+"</td>";
								html+="<td>"+valueFormat(result[i][6],2)+"</td>";
								html+="<td>"+result[i][7]+"</td>";
								html+="<td>"+valueFormat(result[i][8],2)+"</td>";
							html+="</tr>";
						}
						var table=jQuery("#table_F_6 tbody:eq(0)");
						if(result!=null && result.length>0){
							table.html(html);
						}else{
							table.html("<tr><td colspan=\"10\"><font color=\"red\"><b>该年份下没有数据</b></font></td></tr>");
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
